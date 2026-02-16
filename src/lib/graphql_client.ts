import { GraphQLClient } from "graphql-client";
import { Cache } from "graphql-client/cache";
import { CONTENT_ENDPOINT } from "~env";
import cache from "./cache.ts";

const client = new GraphQLClient(CONTENT_ENDPOINT, {
  middleware: [new Cache(cache)],
});

export default client;
