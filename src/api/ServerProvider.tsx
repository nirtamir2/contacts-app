import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import React from "react";

import { config } from "../config";

interface IProps {
  children: React.ReactNode;
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: config.serverUrl,
  }),
});

export function ServerProvider(props: IProps) {
  const { children } = props;
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
