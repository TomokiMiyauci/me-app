import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { CONTENT_AUTH_TOEKN, CONTENT_ENDPOINT } from "~env";

export default new ApolloClient({
  link: new HttpLink({
    uri: CONTENT_ENDPOINT,
    headers: {
      "X-API-KEY": CONTENT_AUTH_TOEKN,
    },
  }),
  cache: new InMemoryCache(),
});
