import { Router } from "router";
import language from "@/language.json" with { type: "json" };

export default new Router()
  .use({
    // TODO
    handle(req, next): Promise<Response> | Response {
      const url = new URL(req.url);

      const prefixies = language.languages.map((lang) => "/" + lang);

      if (!prefixies.some((prefix) => url.pathname.startsWith(prefix))) {
        const originalPath = url.pathname === "/" ? "" : url.pathname;
        const fallback = "/" + language.default + originalPath;
        const newURL = new URL(fallback, url);

        newURL.search = url.search;

        return Response.redirect(newURL);
      }

      return next(req);
    },
  });
