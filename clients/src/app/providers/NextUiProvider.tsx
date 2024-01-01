// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ApolloProvider } from "@apollo/client";
import { graphqlClient } from "@/src/graphql/gql.setup";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={graphqlClient}>
      <NextUIProvider>
        <NextThemesProvider attribute="class">{children}</NextThemesProvider>
      </NextUIProvider>
    </ApolloProvider>
  );
}
