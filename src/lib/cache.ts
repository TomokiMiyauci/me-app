import { CACHE_KEY } from "~env";

export default await caches.open(CACHE_KEY);
