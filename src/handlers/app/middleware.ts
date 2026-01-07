import type { MiddlewareObject } from "router";
import type { NonceContext } from "router/csp";
import type { HanderContext } from "./type.ts";
import handler from "./handler.tsx";

export default class App implements MiddlewareObject<NonceContext> {
  constructor(
    public bootstrapScriptContent: string,
    public renderHtmlStream: HanderContext["renderHtmlStream"],
  ) {
  }

  handle(
    request: Request,
    ctx: Partial<NonceContext>,
  ): Response | Promise<Response> {
    const context = {
      nonce: ctx.nonce,
      bootstrapScriptContent: this.bootstrapScriptContent,
      renderHtmlStream: this.renderHtmlStream,
      noJs: import.meta.env.DEV,
    } satisfies HanderContext;

    return handler(request, context);
  }
}
