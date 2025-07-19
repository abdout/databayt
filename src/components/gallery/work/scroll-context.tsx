"use client";

import React, { createContext, useContext } from 'react';
import { ScrollContextType } from './type';

export const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    // Return a fallback context instead of throwing an error
    return {
      scrollTo: (e: React.MouseEvent, target: string) => {
        console.warn('ScrollProvider not initialized');
      },
      rangeScrollTo: (target: string) => {
        console.warn('ScrollProvider not initialized');
      },
      scrollToImages: (e: React.MouseEvent, target: string) => {
        console.warn('ScrollProvider not initialized');
      },
    };
  }
  return context;
}; 