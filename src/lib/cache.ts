import { CACHE_KEY } from "~env";

console.time("cache");
export default await caches.open(CACHE_KEY);
console.timeEnd("cache");
