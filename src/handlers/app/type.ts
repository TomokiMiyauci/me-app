import type * as ssr from "@/framework/entry.ssr.tsx";
import type { NonceContext } from "router/csp";

export interface HanderContext extends Partial<NonceContext> {
  renderHtmlStream: typeof ssr["renderHtmlStream"];
  noJs?: boolean;
  bootstrapScriptContent: string;
}
