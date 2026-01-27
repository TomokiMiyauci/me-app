import type { MiddlewareObject } from "router";
import type { HanderContext } from "./type.ts";
import handler from "./handler.tsx";

export default class App implements MiddlewareObject {
  constructor(
    public bootstrapScriptContent: string,
    public renderHtmlStream: HanderContext["renderHtmlStream"],
  ) {
  }

  handle(
    request: Request,
  ): Response | Promise<Response> {
    const context = {
      bootstrapScriptContent: this.bootstrapScriptContent,
      renderHtmlStream: this.renderHtmlStream,
      noJs: import.meta.env.DEV,
    } satisfies HanderContext;

    return handler(request, context);
  }
}
