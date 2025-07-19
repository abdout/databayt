"use client";

import React, { useRef, useEffect, ReactNode } from "react";
import { ScrollContext } from "./scroll-context";
import { easings } from "./animations";

interface ScrollProviderProps {
  children: ReactNode;
  wrapper?: string;
}

export const ScrollProvider = ({ children, wrapper }: ScrollProviderProps) => {
  const locomotiveScroll = useRef<any>(null);

  const scrollTo = (e: React.MouseEvent, currentLink: string) => {
    e.preventDefault();
    if (locomotiveScroll.current) {
      locomotiveScroll.current.scrollTo(currentLink, {
        duration: 1.5,
        easing: easings.easeInOutExpo,
      });
    }
  };

  const scrollToImages = (e: React.MouseEvent, currentLink: string) => {
    e.preventDefault();
    if (locomotiveScroll.current) {
      locomotiveScroll.current.scrollTo(currentLink, {
        duration: 2,
        offset: -100,
        easing: easings.easeInOutExpo,
      });
    }
  };

  const rangeScrollTo = (currentLink: string) => {
    if (locomotiveScroll.current) {
      locomotiveScroll.current.scrollTo(currentLink, {
        duration: 1.5,
      });
    }
  };

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        
        locomotiveScroll.current = new LocomotiveScroll({
          lenisOptions: {
            wrapper: wrapper ? document.querySelector(wrapper) : window,
            duration: 0.7,
            lerp: 0.1,
            smoothWheel: true,
            wheelMultiplier: 1.3,
          },
        });
      } catch (error) {
        console.error("Error initializing Locomotive Scroll:", error);
      }
    };

    initScroll();

    // Cleanup function
    return () => {
      if (locomotiveScroll.current) {
        locomotiveScroll.current.destroy();
      }
    };
  }, [wrapper]);

  const contextValue = {
    scrollTo,
    rangeScrollTo,
    scrollToImages,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
}; 