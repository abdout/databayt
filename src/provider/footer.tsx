// FooterContext.tsx
'use client';
import { domain } from '@/constant/domain';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface FooterData {
  contractor: string;
  customer: string;
  consultant: string;
  contractorName: string;
  customerName: string;
  consultantName: string;
  contractorSignature: string;
  customerSignature: string;
  consultantSignature: string;
}

interface FooterContextProps {
  footer: FooterData | null;
  fetchFooter: () => Promise<void>;
  refreshFooter: () => Promise<void>;
  updateFooter: (updatedFooter: FooterData) => Promise<void>;
}

const FooterContext = createContext<FooterContextProps | undefined>(undefined);

export const useFooter = () => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error('useFooter must be used within a FooterProvider');
  }
  return context;
};

export const FooterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [footer, setFooter] = useState<FooterData | null>(null);

  const fetchFooter = async () => {
    try {
      const res = await fetch(`${domain}/api/report/footer`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch footer");
      }

      const data = await res.json();
      if ('footers' in data) {
        setFooter(data.footers[0]);
      }
    } catch (error) {
      console.log("Error loading footer: ", error);
    }
  };

  const refreshFooter = async () => {
    await fetchFooter();
  };

  const updateFooter = async (updatedFooter: FooterData) => {
    const res = await fetch(`${domain}/report/footer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFooter),
    });

    if (!res.ok) {
      console.error("Failed to update footer");
    } else {
      setFooter(updatedFooter);
    }
  };

  useEffect(() => {
    fetchFooter();
  }, []);

  return (
    <FooterContext.Provider value={{ footer, fetchFooter, refreshFooter, updateFooter }}>
      {children}
    </FooterContext.Provider>
  );
};