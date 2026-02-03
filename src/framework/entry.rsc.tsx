import type * as ssr from "./entry.ssr.tsx";
import App from "@/handlers/app//middleware.ts";
import { Router } from "router";
import sitemap from "@/handlers/sitemap/handler.ts";

let router = new Router()
  .get("/sitemap.xml", sitemap);

const { renderHtmlStream } = await import.meta.viteRsc.loadModule<
  typeof ssr
>("ssr", "index");
const bootstrapScriptContent = await import.meta.viteRsc
  .loadBootstrapScriptContent("index");

router = router.use(
  new App(bootstrapScriptContent, renderHtmlStream),
);

export default {
  fetch: router.fetch.bind(router),
};

if (import.meta.hot) {
  import.meta.hot.accept();
}
