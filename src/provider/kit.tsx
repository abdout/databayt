// KitContext.tsx
'use client';
import { domain } from '@/constant/domain';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface KitData {
  equipment: string;
  serial: string;
  date: string;
}

interface KitContextProps {
  kit: KitData | null;
  fetchKit: () => Promise<void>;
  refreshKit: () => Promise<void>;
  updateKit: (updatedKit: KitData) => Promise<void>;
}

const KitContext = createContext<KitContextProps | undefined>(undefined);

export const useKit = () => {
  const context = useContext(KitContext);
  if (!context) {
    throw new Error('useKit must be used within a KitProvider');
  }
  return context;
};

export const KitProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [kit, setKit] = useState<KitData | null>(null);

  const fetchKit = async () => {
    try {
      const res = await fetch(`${domain}/api/report/kit`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch kit");
      }

      const data = await res.json();
      if ('kits' in data) {
        setKit(data.kits[0]);
      }
    } catch (error) {
      console.log("Error loading kit: ", error);
    }
  };

  const refreshKit = async () => {
    await fetchKit();
  };

  const updateKit = async (updatedKit: KitData) => {
    const res = await fetch(`${domain}/api/report/kit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedKit),
    });

    if (!res.ok) {
      console.error("Failed to update kit");
    } else {
      setKit(updatedKit);
    }
  };

  useEffect(() => {
    fetchKit();
  }, []);

  return (
    <KitContext.Provider value={{ kit, fetchKit, refreshKit, updateKit }}>
      {children}
    </KitContext.Provider>
  );
};