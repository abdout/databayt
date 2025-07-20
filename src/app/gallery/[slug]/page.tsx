"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { anim, PageAnim } from "@/components/gallery/work/animations";
import { useData } from "@/components/gallery/work/use-data";
import { useParams } from "next/navigation";
import { ProgressBar } from "@/components/gallery/work/progress-bar";
import { useDocumentTitle } from "@/components/gallery/work/utils";
import { WorksHeader } from "@/components/gallery/work/works-header";
import { Hero } from "@/components/gallery/work/hero";
import { WorkImages } from "@/components/gallery/work/work-images";
import { WorksLink } from "@/components/gallery/work/works-link";
import { useScroll } from "@/components/gallery/work/use-scroll";
import "../globals.css";

const Title = ({ data }: { data: any }) => {
  useDocumentTitle(
    data?.documentTitle ? data.documentTitle : "Camille Mormal"
  );
  return null;
};

export default function WorkDetails() {
  const params = useParams();
  const slug = params.slug as string;
  const navigating = useRef(false);
  const { data, isLoading, error } = useData(`/data/works/${slug}.json`);
  const workImagesRef = useRef<HTMLDivElement>(null);
  
  // Initialize scroll immediately at page level
  const { isReady: scrollReady } = useScroll();

  useEffect(() => {
    // Set flag to indicate we've visited gallery
    sessionStorage.setItem('visitedGallery', 'true');
    
    // Apply gallery-specific styles on mount
    document.documentElement.classList.add('work-layout');
    document.body.classList.add('work-layout');
    window.scrollTo(0, 0);

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Custom smooth scroll with easing
    const smoothScrollTo = (target: number, duration: number = 1000) => {
      const start = window.pageYOffset;
      const distance = target - start;
      let startTime: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        window.scrollTo(0, start + distance * easeInOutCubic(progress));
        
        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    // Override smooth scroll behavior for better control
    const handleWheelScroll = (e: WheelEvent) => {
      // Allow normal scrolling but make it smoother
      e.preventDefault();
      const scrollAmount = e.deltaY * 0.8; // Reduce scroll speed for smoothness
      const currentScroll = window.pageYOffset;
      const targetScroll = Math.max(0, currentScroll + scrollAmount);
      
      smoothScrollTo(targetScroll, 150); // Quick but smooth
    };

    // Add smooth wheel scrolling
    document.addEventListener('wheel', handleWheelScroll, { passive: false });

    // Cleanup function to remove gallery styles on unmount
    return () => {
      document.documentElement.classList.remove('work-layout');
      document.body.classList.remove('work-layout');
      document.documentElement.style.scrollBehavior = '';
      document.removeEventListener('wheel', handleWheelScroll);
      
      // Reset any overflow/scroll modifications
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.documentElement.style.height = '';
      document.body.style.height = '';
      
      // Clear any custom CSS variables that might interfere
      document.documentElement.style.removeProperty('--c-white');
      document.documentElement.style.removeProperty('--c-black');
      
      // Force a reflow to ensure styles are properly removed
      document.body.offsetHeight;
    };
  }, []);

  // Ensure page is ready for scroll interactions with proper timing
  useEffect(() => {
    if (data && !isLoading && !error) {
      // Force focus on document to ensure keyboard events work
      if (typeof window !== 'undefined') {
        // Remove any existing focus that might interfere
        if (document.activeElement && document.activeElement !== document.body) {
          (document.activeElement as HTMLElement).blur();
        }
        
        // Ensure document can receive keyboard events
        document.body.focus();
        document.body.setAttribute('tabindex', '0');
        
        // Ensure no scroll behavior is being overridden
        document.body.style.overflow = 'visible';
        document.documentElement.style.overflow = 'visible';
      }
    }
  }, [data, isLoading, error, scrollReady]);

  const setNavigating = (state: boolean) => {
    navigating.current = state;
  };

  // Show error state
  if (error) {
    return (
      <div 
        className="work-layout font-neue-haas-display"
        style={{
          margin: 0,
          padding: 0,
          width: '100vw',
          minHeight: '100vh',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
          marginLeft: 0,
          marginRight: 0
        }}
      >
        <main 
          className="main"
          style={{
            margin: 0,
            padding: 0,
            width: '100%',
            minHeight: '100vh'
          }}
        >
          <div className="error-state">
            <h2>Error loading work</h2>
            <p>Please try refreshing the page.</p>
          </div>
        </main>
      </div>
    );
  }

  // Show loading state only while data is loading
  if (isLoading || !data) {
    return (
      <div 
        className="work-layout font-neue-haas-display"
        style={{
          margin: 0,
          padding: 0,
          width: '100vw',
          minHeight: '100vh',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
          marginLeft: 0,
          marginRight: 0
        }}
      >
        <main 
          className="main"
          style={{
            margin: 0,
            padding: 0,
            width: '100%',
            minHeight: '100vh'
          }}
        >
          <div className="loading-state" style={{ opacity: 0 }}>
            <div className="loader"></div>
          </div>
        </main>
      </div>
    );
  }

  // Transform the nested images array to flat WorkImage array
  const flatImages = data.images ? data.images.flat().map((src: string) => ({ src })) : [];
  
  // Transform data for WorksLink component
  const worksLinkData = {
    ...data,
    nextProject: data.next ? {
      slug: data.next.slug,
      title: data.next.title,
      image: data.next.image
    } : undefined
  };

  // Render content as soon as data is ready
  return (
    <div 
      className="work-layout font-neue-haas-display"
      style={{
        margin: 0,
        padding: 0,
        width: '100vw',
        minHeight: '100vh',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        marginLeft: 0,
        marginRight: 0
      }}
    >
      <main 
        className="main"
        style={{
          margin: 0,
          padding: 0,
          width: '100%',
          minHeight: '100vh'
        }}
      >
        <motion.main 
          {...anim(PageAnim.presencePage)} 
          className="works-details"
          style={{
            margin: 0,
            padding: 0,
            width: '100%'
          }}
        >
          <Title data={data} />
          <ProgressBar images={flatImages} containerRef={workImagesRef} />
          <WorksHeader />
          <Hero data={data} />
          <div ref={workImagesRef}>
            <WorkImages data={data} />
          </div>
          <WorksLink data={worksLinkData} setNavigating={setNavigating} />
        </motion.main>
      </main>
    </div>
  );
} 