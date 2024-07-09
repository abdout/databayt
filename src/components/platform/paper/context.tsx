
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Paper, PaperContextProps } from './type';

const PaperContext = createContext<PaperContextProps | undefined>(undefined);

export const usePaper = () => {
  const context = useContext(PaperContext);
  if (!context) {
    throw new Error('usePaper must be used within a PaperProvider');
  }
  return context;
};

export const PaperProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [paper, setPaper] = useState<Paper | null>(null);
  const [papers, setPapers] = useState<Paper[]>([]);

  const fetchPaper = useCallback(async (id: string) => {
    console.log(`Fetching paper with id: ${id}`);
    const response = await fetch(`/api/paper/${id}`);
    console.log('Received response:', response);
  
    if (!response.ok) {
      console.log('Failed to fetch paper:', response.statusText);
      return;
    }
  
    const data = await response.json();
    console.log('Parsed response data:', data);
  
    if (!data || typeof data !== 'object' || !data.paper || typeof data.paper !== 'object' || !data.paper._id) {
      console.log('Unexpected data format:', data);
      return;
    }
  
    setPaper(data.paper);
    console.log('Updated paper state:', paper);
  }, []);

  const fetchPapers = async () => {
    try {
      const res = await fetch(`/api/paper`);
      const data = await res.json();
      setPapers(data.papers);
    } catch (error) {
      console.error('Failed to fetch papers:', error);
    }
  };

  const recentPapers = async () => {
    try {
      const res = await fetch(`/api/paper?limit=4`);
      const data = await res.json();
      setPapers(data.papers);
    } catch (error) {
      console.error('Failed to fetch recent papers:', error);
    }
  };

  const deletePaper = async (id: string) => {
    try {
      const res = await fetch(`/api/paper?id=${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        console.error(`Error deleting paper: ${res.status} ${res.statusText}`);
        return;
      }
      await fetchPapers();
    } catch (error) {
      console.error('Failed to delete paper:', error);
    }
  };

  const refreshPapers = async () => {
    await fetchPapers();
  };

  useEffect(() => {
    fetchPapers();
  }, []);

  return (
    <PaperContext.Provider value={{ paper, papers, fetchPaper, fetchPapers, refreshPapers, recentPapers, deletePaper }}>
      {children}
    </PaperContext.Provider>
  );
};