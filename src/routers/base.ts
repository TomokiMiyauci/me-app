import { Router } from "router";
import { TrailingSlash } from "router/trailing-slash";

export default new Router().use(new TrailingSlash("never"));
