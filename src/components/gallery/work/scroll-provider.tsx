"use client";

import React, { useRef, useEffect, ReactNode } from "react";
import { ScrollContext } from "./scroll-context";
import { easings } from "./animations";
import LocomotiveScroll from "locomotive-scroll";

interface ScrollProviderProps {
  children: ReactNode;
  wrapper?: string;
}

export const ScrollProvider = ({ children, wrapper }: ScrollProviderProps) => {
  const locomotiveScroll = useRef<LocomotiveScroll | null>(null);

  const scrollTo = (e: React.MouseEvent, currentLink: string) => {
    e.preventDefault();
    if (locomotiveScroll.current) {
      locomotiveScroll.current.scrollTo(currentLink, {
        duration: 1.5,
        easing: [0.19, 1, 0.22, 1],
      });
    }
  };

  const scrollToImages = (e: React.MouseEvent, currentLink: string) => {
    e.preventDefault();
    if (locomotiveScroll.current) {
      locomotiveScroll.current.scrollTo(currentLink, {
        duration: 2,
        offset: -100,
        easing: [0.19, 1, 0.22, 1],
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
        const scrollElement = wrapper 
          ? document.querySelector(wrapper) as HTMLElement
          : document.querySelector('[data-scroll-container]') as HTMLElement;
        
        if (scrollElement) {
          locomotiveScroll.current = new LocomotiveScroll({
            el: scrollElement,
            smooth: true,
            multiplier: 1.3,
            lerp: 0.1,
          });
        }
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