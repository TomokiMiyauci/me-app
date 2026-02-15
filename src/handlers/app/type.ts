import type * as ssr from "@/framework/entry.ssr.tsx";

export interface HanderContext {
  renderHtmlStream: typeof ssr["renderHtmlStream"];
  bootstrapScriptContent: string;
}
