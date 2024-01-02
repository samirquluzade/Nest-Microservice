// app/providers.tsx
"use client";

import { graphqlClient } from "@/src/graphql/gql.setup";
import { ApolloProvider } from "@apollo/client";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
    console.log(graphqlClient);
    return (
        <ApolloProvider client={graphqlClient}>
            <SessionProvider>
                <NextUIProvider>
                    <NextThemesProvider attribute="class" defaultTheme="dark">
                        {children}
                    </NextThemesProvider>
                </NextUIProvider>
            </SessionProvider>
        </ApolloProvider>
    );
}