import { assert } from "@std/assert/assert";
import { env } from "cloudflare:workers";

declare module "cloudflare:workers" {
  namespace Cloudflare {
    interface Env {
      CONTENT_ENDPOINT: string;
    }
  }
}

function loadContentEndpoint(): string {
  const CONTENT_ENDPOINT = /* @__PURE__ */ env["CONTENT_ENDPOINT"];

  /* @__PURE__ */ assert(CONTENT_ENDPOINT, "CONTENT_ENDPOINT is not defined");

  return CONTENT_ENDPOINT;
}
export const CONTENT_ENDPOINT = /* @__PURE__ */ loadContentEndpoint();

export const PUBLIC = { CONTENT_ENDPOINT };
