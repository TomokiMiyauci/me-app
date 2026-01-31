import type * as ssr from "./entry.ssr.tsx";
import resourceRouter from "@/routers/resource.ts";
import App from "@/handlers/app//middleware.ts";

let router = resourceRouter;

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
