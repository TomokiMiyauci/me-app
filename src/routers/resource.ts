import { Router } from "router";
import sitemap from "@/handlers/sitemap/handler.ts";

export default new Router()
  .get("/sitemap.xml", sitemap);
