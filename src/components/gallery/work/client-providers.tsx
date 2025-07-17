"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ScrollProvider } from "./scroll-provider";

interface ClientProvidersProps {
  children: ReactNode;
}

// Create a single QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

export const ClientProviders = ({ children }: ClientProvidersProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div style={{ opacity: 0, height: 0 }}></div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProvider>
        {children}
      </ScrollProvider>
    </QueryClientProvider>
  );
}; 