import { assert } from "@std/assert/assert";

function loadContentEndpoint(): string {
  const CONTENT_ENDPOINT = /* @__PURE__ */ Deno.env.get("CONTENT_ENDPOINT");

  /* @__PURE__ */ assert(CONTENT_ENDPOINT, "CONTENT_ENDPOINT is not defined");

  return CONTENT_ENDPOINT;
}
export const CONTENT_ENDPOINT = /* @__PURE__ */ loadContentEndpoint();

export const PUBLIC = { CONTENT_ENDPOINT };
