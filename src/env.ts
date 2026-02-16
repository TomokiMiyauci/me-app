import { assert } from "@std/assert/assert";

function loadContentEndpoint(): string {
  const CONTENT_ENDPOINT = /* @__PURE__ */ Deno.env.get("CONTENT_ENDPOINT");

  /* @__PURE__ */ assert(CONTENT_ENDPOINT, "CONTENT_ENDPOINT is not defined");

  return CONTENT_ENDPOINT;
}

export const CONTENT_ENDPOINT = /* @__PURE__ */ loadContentEndpoint();

function loadI18nEndpoint(): string {
  const ENDPOINT = /* @__PURE__ */ Deno.env.get("I18N_ENDPOINT");

  /* @__PURE__ */ assert(ENDPOINT, "I18N_ENDPOINT is not defined");

  return ENDPOINT;
}

export const I18N_ENDPOINT = /* @__PURE__ */ loadI18nEndpoint();

export const CACHE_KEY = Deno.env.get("CACHE_KEY") ?? "v1";
