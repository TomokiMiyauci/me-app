import type {
  CallableContext,
  Middleware,
  MiddlewareObject,
} from "../types.ts";
import { normalizeMiddleware } from "../utils.ts";

export function dynamic<T>(
  fn: (
    request: Request,
    ctx: CallableContext<T>,
  ) =>
    | Middleware<T>
    | MiddlewareObject<T>
    | Promise<Middleware<T> | MiddlewareObject<T>>,
): Middleware<T> {
  return async (request, next) => {
    const middlewareOrMiddlewareObject = await fn(request, next);
    const middleware = normalizeMiddleware<T>(middlewareOrMiddlewareObject);

    return middleware(request, next);
  };
}
