import { assert } from "@std/assert/assert";

function loadContentEndpoint(): string {
  const CONTENT_ENDPOINT = /* @__PURE__ */ Deno.env.get("CONTENT_ENDPOINT");

  /* @__PURE__ */ assert(CONTENT_ENDPOINT, "CONTENT_ENDPOINT is not defined");

  return CONTENT_ENDPOINT;
}

function loadContentAuthToken(): string {
  const CONTENT_AUTH_TOEKN = /* @__PURE__ */ Deno.env.get("CONTENT_AUTH_TOEKN");

  /* @__PURE__ */ assert(
    CONTENT_AUTH_TOEKN,
    "CONTENT_AUTH_TOEKN is not defined",
  );

  return CONTENT_AUTH_TOEKN;
}

export const CONTENT_ENDPOINT = /* @__PURE__ */ loadContentEndpoint();
export const CONTENT_AUTH_TOEKN = /* @__PURE__ */ loadContentAuthToken();

function loadI18nEndpoint(): string {
  const ENDPOINT = /* @__PURE__ */ Deno.env.get("I18N_ENDPOINT");

  /* @__PURE__ */ assert(ENDPOINT, "I18N_ENDPOINT is not defined");

  return ENDPOINT;
}

export const I18N_ENDPOINT = /* @__PURE__ */ loadI18nEndpoint();

export const CLOUDINARY_ID = Deno.env.get("CLOUDINARY_ID");

export const CACHE_KEY = Deno.env.get("CACHE_KEY") ?? "v1";
