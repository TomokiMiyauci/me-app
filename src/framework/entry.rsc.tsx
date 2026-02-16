import type * as ssr from "./entry.ssr.tsx";
import App from "@/handlers/app//middleware.ts";
import { Router } from "router";
import sitemap from "@/handlers/sitemap/handler.ts";
import StaticDir from "router/static-dir";
import { fromFileUrl } from "@std/path/from-file-url";

let router = new Router()
  .get("/sitemap.xml", sitemap);

if (import.meta.env.PROD) {
  const clientDir = fromFileUrl(import.meta.vite.outDir.resolve("client"));

  const staticDir = new StaticDir(clientDir);

  console.time("staticDir.ready");
  await staticDir.ready;
  console.timeEnd("staticDir.ready");

  router = router.use(staticDir);
}

console.time("loadModule");

const { renderHtmlStream } = await import.meta.viteRsc.loadModule<
  typeof ssr
>("ssr", "index");
console.timeEnd("loadModule");

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
