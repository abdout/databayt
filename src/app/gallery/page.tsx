"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { anim, PageAnim } from "@/components/gallery/work/animations";
import { useData } from "@/components/gallery/work/use-data";
import { Works } from "@/components/gallery/work/works";
import { LoadingScreen } from "@/components/gallery/enter/loading";
import { ImageGallery } from "@/components/gallery/enter/gallery";
import { classNames } from "@/components/gallery/work/utils";
import '@/components/gallery/enter/style.css';
import './globals.css';

type PageState = 'loading' | 'gallery' | 'work';

export default function Home() {
  const [pageState, setPageState] = useState<PageState>('loading');
  const [animationKey, setAnimationKey] = useState(0);
  const { data, isLoading, error } = useData("/gallery/home.json");

  useEffect(() => {
    // Set flag to indicate we've visited gallery
    sessionStorage.setItem('visitedGallery', 'true');
    
    // Apply gallery-specific styles on mount
    document.documentElement.classList.add('work-layout');
    document.body.classList.add('work-layout');
    window.scrollTo(0, 0);

    // Cleanup function to remove gallery styles on unmount
    return () => {
      document.documentElement.classList.remove('work-layout');
      document.body.classList.remove('work-layout');
      
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

  const handleLoadingComplete = () => {
    setPageState('gallery');
  };

  const handleGalleryComplete = () => {
    setPageState('work');
  };

  // Function to restart the animation sequence (useful for debugging or user action)
  const restartAnimation = () => {
    setAnimationKey(prev => prev + 1);
    setPageState('loading');
  };

  // Show error state
  if (error) {
    return (
      <div className="work-layout font-neue-haas-display m-0 p-0 bg-black overflow-hidden">
        <main className="main">
          <div className="error-state">
            <h2>Error loading data</h2>
            <p>Please try refreshing the page.</p>
            <button onClick={restartAnimation} style={{ marginTop: '10px' }}>
              Retry
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="work-layout font-neue-haas-display m-0 p-0 bg-black overflow-hidden">
      <main className="main">
        {pageState === 'loading' && (
          <LoadingScreen 
            key={`loading-${animationKey}`}
            onComplete={handleLoadingComplete} 
          />
        )}
        
        {pageState === 'gallery' && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 1000,
            backgroundColor: '#121214',
            overflow: 'hidden'
          }}>
            <ImageGallery 
              key={`gallery-${animationKey}`}
              onComplete={handleGalleryComplete} 
            />
          </div>
        )}
        
        {pageState === 'work' && !isLoading && data && (
          <motion.main 
            {...anim(PageAnim.presencePage)} 
            className={classNames("home")}
          >
            <Works data={data} />
          </motion.main>
        )}

        {pageState === 'work' && isLoading && (
          <div className="loading-state" style={{ opacity: 0 }}>
            <div className="loader"></div>
          </div>
        )}
      </main>
    </div>
  );
}
