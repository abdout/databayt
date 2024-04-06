// HeaderContext.tsx
'use client';
import { domain } from '@/constant/domain';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface HeaderData {
  customer: string;
  consultant: string;
  client: string;
  description: string;
  projectName: string;
  date: string;
  location: string;
  tag: string;
  sheet: string;
}

interface HeaderContextProps {
  header: HeaderData | null;
  fetchHeader: () => Promise<void>;
  refreshHeader: () => Promise<void>;
  updateHeader: (updatedHeader: HeaderData) => Promise<void>;
}

const HeaderContext = createContext<HeaderContextProps | undefined>(undefined);

export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }
  return context;
};

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [header, setHeader] = useState<HeaderData | null>(null);

  const fetchHeader = async () => {
    try {
      const res = await fetch(`${domain}/api/report/header`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch header");
      }

      const data = await res.json();
      if ('headers' in data) {
        setHeader(data.headers[0]);
      }
    } catch (error) {
      console.log("Error loading header: ", error);
    }
  };

  const refreshHeader = async () => {
    await fetchHeader();
  };

  const updateHeader = async (updatedHeader: HeaderData) => {
    const res = await fetch(`${domain}/api/report/header`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedHeader),
    });

    if (!res.ok) {
      console.error("Failed to update header");
    } else {
      setHeader(updatedHeader);
    }
  };

  useEffect(() => {
    fetchHeader();
  }, []);

  return (
    <HeaderContext.Provider value={{ header, fetchHeader, refreshHeader, updateHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

