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
      <div className="work-layout font-neue-haas-display">
        <main className="main">
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
      <div className="work-layout font-neue-haas-display">
        <main className="main">
          <div className="loading-state" style={{ opacity: 0 }}>
            <div className="loader"></div>
          </div>
        </main>
      </div>
    );
  }

  // Render content as soon as data is ready
  return (
    <div className="work-layout font-neue-haas-display">
      <main className="main">
        <motion.main {...anim(PageAnim.presencePage)} className="works-details">
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