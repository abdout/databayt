"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { clientFetchData } from "./data";
import { DataContextType } from "./type";

// Create the data context
export const DataContext = createContext<DataContextType | undefined>(undefined);

// Custom hook to use the data context
export const useDataContext = <T = any>() => {
  const context = useContext(DataContext) as DataContextType<T>;
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
  url: string;
  queryKey?: string;
  fallback?: ReactNode;
}

export const DataProvider = ({ children, url, queryKey, fallback }: DataProviderProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey || "data", url],
    queryFn: () => clientFetchData(url),
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
    retry: 2,
  });

  // Show error state
  if (error) {
    return (
      <div className="error-state">
        <h2>Error loading data</h2>
        <p>Please try refreshing the page.</p>
        {fallback}
      </div>
    );
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="loading-state" style={{ opacity: 0 }}>
        <div className="loader"></div>
      </div>
    );
  }

  // Show fallback if no data
  if (!data) {
    return fallback || (
      <div className="error-state">
        <h2>No data found</h2>
        <p>The requested data could not be loaded.</p>
      </div>
    );
  }

  const contextValue: DataContextType = {
    data,
    isLoading,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}; 