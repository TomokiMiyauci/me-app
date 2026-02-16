import type { InitOptions } from "i18next";
import language from "@/language.json" with { type: "json" };
import { I18N_ENDPOINT } from "~env";
import { join } from "@std/path/join";

const loadPath = join(I18N_ENDPOINT, "{{lng}}.json");

export default {
  fallbackLng: language.default,
  showSupportNotice: false,
  backend: { loadPath },
} satisfies InitOptions;
