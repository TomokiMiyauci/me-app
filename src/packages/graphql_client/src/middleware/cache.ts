import type { MiddlewareObject } from "../types.ts";

export interface Store {
  match(reequest: Request): Promise<Response | undefined>;
  put(request: Request, resopnse: Response): Promise<unknown>;
}

export class Cache implements MiddlewareObject {
  constructor(public store: Store) {}

  async handle(
    request: Request,
    next: (request: Request) => Promise<Response>,
  ): Promise<Response> {
    if (!isCacheable(request)) return next(request);

    const result = await this.store.match(request);

    if (result) return result;

    const response = await next(request);

    await this.store.put(request, response.clone());

    return response;
  }
}

function isCacheable(request: Request): boolean {
  return request.method.toUpperCase() === "GET";
}
