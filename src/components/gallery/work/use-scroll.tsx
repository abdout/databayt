"use client";

import { useEffect, useCallback, useRef, useState } from 'react';
import { easings } from '@/components/gallery/work/animations';
import LocomotiveScroll from "locomotive-scroll";

interface UseScrollResult {
  scrollTo: (e: React.MouseEvent, currentLink: string) => void;
  rangeScrollTo: (currentLink: string) => void;
  scrollToImages: (e: React.MouseEvent, currentLink: string) => void;
  isReady: boolean;
}

export function useScroll(wrapper?: string): UseScrollResult {
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const initScroll = async () => {
      try {
        // Wait for DOM to be completely ready
        await new Promise(resolve => {
          if (document.readyState === 'complete') {
            resolve(true);
          } else {
            window.addEventListener('load', () => resolve(true));
          }
        });

        // Additional small delay to ensure all components are mounted
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Destroy any existing instance
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.destroy();
        }
        
        const scrollElement = wrapper 
          ? document.querySelector(wrapper) as HTMLElement
          : document.querySelector('[data-scroll-container]') as HTMLElement;
        
        if (scrollElement) {
          locomotiveScrollRef.current = new LocomotiveScroll({
            el: scrollElement,
            smooth: true,
            multiplier: 1.3,
            lerp: 0.1,
          });
        }

        // Force update scroll position
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.start();
          setIsReady(true);
        }
      } catch (error) {
        console.error("Error initializing Locomotive Scroll:", error);
        // Even if Locomotive fails, set ready to true so native scroll can work
        setIsReady(true);
      }
    };

    initScroll();

    // Cleanup function
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
        setIsReady(false);
      }
    };
  }, [wrapper]);

  // Add window resize handler to update Locomotive Scroll
  useEffect(() => {
    const handleResize = () => {
      if (locomotiveScrollRef.current && isReady) {
        // Trigger a scroll update on resize
        locomotiveScrollRef.current.update();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isReady]);

  const scrollTo = useCallback((e: React.MouseEvent, currentLink: string) => {
    e.preventDefault();
    
    if (locomotiveScrollRef.current && isReady) {
      locomotiveScrollRef.current.scrollTo(currentLink, {
        duration: 1.5,
        easing: [0.19, 1, 0.22, 1],
      });
    } else {
      // Fallback to native scroll
      const element = document.querySelector(currentLink);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isReady]);

  const scrollToImages = useCallback((e: React.MouseEvent, currentLink: string) => {
    e.preventDefault();
    
    if (locomotiveScrollRef.current && isReady) {
      locomotiveScrollRef.current.scrollTo(currentLink, {
        duration: 2,
        offset: -100,
        easing: [0.19, 1, 0.22, 1],
      });
    } else {
      // Fallback to native scroll with offset
      const element = document.querySelector(currentLink);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 100;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [isReady]);

  const rangeScrollTo = useCallback((currentLink: string) => {
    if (locomotiveScrollRef.current && isReady) {
      locomotiveScrollRef.current.scrollTo(currentLink, {
        duration: 1.5,
      });
    } else {
      // Fallback to native scroll
      if (typeof window !== 'undefined') {
        const scrollPosition = parseFloat(currentLink);
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [isReady]);

  return {
    scrollTo,
    rangeScrollTo,
    scrollToImages,
    isReady,
  };
} 