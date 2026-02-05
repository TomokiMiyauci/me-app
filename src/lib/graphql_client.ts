import {
  GraphQLClient,
  type MiddlewareObject,
  type Next,
} from "graphql-client";
import { Cache } from "graphql-client/cache";
import { CONTENT_ENDPOINT } from "~env";

const cache = await caches.open("v1");

class Performance implements MiddlewareObject {
  async handle(req: Request, next: Next): Promise<Response> {
    const start = performance.now();
    const res = await next(req);
    const end = performance.now();

    const label = `${req.url.slice(0, 100)}...: ${Math.round(end - start)}ms`;
    console.log(label);

    return res;
  }
}

const client = new GraphQLClient(CONTENT_ENDPOINT, {
  middleware: [new Performance(), new Cache(cache)],
});

export default client;
