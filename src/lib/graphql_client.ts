import { GraphQLClient } from "graphql-client";
import { Cache } from "graphql-client/cache";
import { CONTENT_ENDPOINT } from "~env";

const cache = await caches.open("v1");

const client = new GraphQLClient(CONTENT_ENDPOINT, {
  middleware: [new Cache(cache)],
});

export default client;
