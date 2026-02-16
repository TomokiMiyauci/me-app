import "./debug.ts";
import type * as ssr from "./entry.ssr.tsx";
import App from "@/handlers/app//middleware.ts";
import { Router } from "router";
import { dynamic } from "router/middleware";
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

router = router.use(
  dynamic(async () => {
    const { renderHtmlStream } = await import.meta.viteRsc.loadModule<
      typeof ssr
    >("ssr", "index");

    const bootstrapScriptContent = await import.meta.viteRsc
      .loadBootstrapScriptContent("index");

    return new App(bootstrapScriptContent, renderHtmlStream);
  }),
);

console.timeEnd("start");

export default {
  fetch: router.fetch.bind(router),
};

if (import.meta.hot) {
  import.meta.hot.accept();
}
