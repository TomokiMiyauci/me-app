import type { InitOptions } from "i18next";
import language from "@/language.json" with { type: "json" };
import { I18N_ENDPOINT } from "~env";
import { cache } from "~lib";
import { join } from "@std/path/join";
import type { HttpBackendOptions } from "i18next-http-backend";

const loadPath = join(I18N_ENDPOINT, "{{lng}}.json");

const backend = {
  loadPath,
  alternateFetch: createCachedFetch(cache),
} satisfies HttpBackendOptions;

export default {
  fallbackLng: language.default,
  showSupportNotice: false,
  backend,
} satisfies InitOptions;

type FetchFunction = Exclude<HttpBackendOptions["alternateFetch"], undefined>;

function createCachedFetch(cache: Cache): FetchFunction {
  return async (input, options) => {
    const request = new Request(input, options);

    if (request.method.toUpperCase() !== "GET") return fetch(request);

    const cachedResponse = await cache.match(request);

    if (cachedResponse) return cachedResponse;

    const response = await fetch(request);

    if (response.ok) {
      await cache.put(input, response.clone());
    }

    return response;
  };
}
