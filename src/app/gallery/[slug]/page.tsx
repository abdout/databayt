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
  
  // Initialize scroll immediately at page level
  const { isReady: scrollReady } = useScroll();

  useEffect(() => {
    if (!navigating.current) {
      window.scrollTo(0, 0);
    }

    // Inject critical styles for the gallery page (scoped to avoid affecting other pages)
    const styleId = 'gallery-page-styles';
    let style: HTMLStyleElement | null = null;
    
    if (!document.getElementById(styleId)) {
      style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        /* Complete scrollbar hiding for gallery page */
        html.gallery-active,
        body.gallery-active,
        html.gallery-active *,
        body.gallery-active * {
          scrollbar-width: none !important; /* Firefox */
          -ms-overflow-style: none !important; /* IE and Edge */
        }
        
        html.gallery-active::-webkit-scrollbar,
        body.gallery-active::-webkit-scrollbar,
        html.gallery-active *::-webkit-scrollbar,
        body.gallery-active *::-webkit-scrollbar {
          display: none !important; /* Chrome, Safari, Opera */
          width: 0 !important;
          height: 0 !important;
        }
        
        /* Backup scoping for work-layout */
        .work-layout,
        .work-layout *,
        .work-layout .main,
        .work-layout .main *,
        .work-layout .works-details,
        .work-layout .works-details * {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        
        .work-layout::-webkit-scrollbar,
        .work-layout *::-webkit-scrollbar,
        .work-layout .main::-webkit-scrollbar,
        .work-layout .main *::-webkit-scrollbar,
        .work-layout .works-details::-webkit-scrollbar,
        .work-layout .works-details *::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        
        html.gallery-active,
        body.gallery-active {
          overflow-x: hidden !important;
        }

        /* Header styles */
        .works-details .header {
          position: fixed;
          top: 1vw;
          left: 2vw;
          z-index: 10;
        }

        .works-details .header__link {
          font-weight: normal;
          font-size: 1.3vw;
          transition: color 0.4s ease;
          color: #f9f5ef;
          text-decoration: none;
          border: 1px solid rgba(249, 245, 239, 0.3);
          padding: 0.5vw 1vw;
          border-radius: 0.2vw;
          background: rgba(20, 20, 20, 0.8);
          backdrop-filter: blur(10px);
        }

        .works-details .header__link:hover {
          color: #ffffff;
          border-color: rgba(249, 245, 239, 0.6);
        }

        /* Progress Bar styles - Ensure visibility */
        .progress-bar {
          position: fixed !important;
          top: 0 !important;
          bottom: 0 !important;
          left: 0 !important;
          z-index: 9999 !important;
          width: 2vw !important;
          pointer-events: auto !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        .progress-bar__bar {
          width: 0.25vw !important;
          height: 100% !important;
          background-color: #f9f5ef !important;
          transform-origin: top !important;
          will-change: transform !important;
          backface-visibility: hidden !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          transform: translateZ(0) !important;
          transition: none !important;
        }

        .progress-bar__range {
          position: absolute;
          top: 0%;
          bottom: 0%;
          left: 0%;
          rotate: 90deg;
          width: 100vh;
          height: 1vw;
          transform: translate(-2%, -30%);
          transform-origin: left;
          opacity: 0;
          cursor: pointer;
          pointer-events: auto;
          background: transparent;
          border: none;
          outline: none;
        }

        .progress-bar__range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: transparent;
          cursor: pointer;
          border: none;
          outline: none;
        }

        .progress-bar__range::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: transparent;
          cursor: pointer;
          border: none;
          outline: none;
          -moz-appearance: none;
        }

        .progress-bar__range::-webkit-slider-track {
          background: transparent;
          border: none;
          outline: none;
        }

        .progress-bar__range::-moz-range-track {
          background: transparent;
          border: none;
          outline: none;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .works-details .header__link {
            font-size: 3vw;
            padding: 1vw 2vw;
          }
        }
      `;
      document.head.appendChild(style);
    }

    // Add gallery-active class to html and body for scoped scrollbar hiding
    document.documentElement.classList.add('gallery-active');
    document.body.classList.add('gallery-active');

    // Cleanup function to remove styles and classes when component unmounts
    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
      
      // Remove gallery-active classes when leaving the page
      document.documentElement.classList.remove('gallery-active');
      document.body.classList.remove('gallery-active');
      
      // Restore original scrollbar behavior
      document.documentElement.style.removeProperty('scrollbar-width');
      document.documentElement.style.removeProperty('-ms-overflow-style');
      document.body.style.removeProperty('scrollbar-width');
      document.body.style.removeProperty('-ms-overflow-style');
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
          <ProgressBar />
          <WorksHeader />
          <Hero data={data} />
          <WorkImages data={data} />
          <WorksLink data={data} setNavigating={setNavigating} />
        </motion.main>
      </main>
    </div>
  );
} 