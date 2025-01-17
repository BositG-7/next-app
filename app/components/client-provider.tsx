// components/ClientProvider.js
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
      // @ts-expect-error
      cacheTime: 10 * 60 * 1000,
    },
  },
});

const ClientProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ClientProvider;
