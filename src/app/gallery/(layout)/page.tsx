"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { anim, PageAnim } from "@/components/gallery/work/animations";
import { DataProvider } from "@/components/gallery/work/data-provider";
import { Works } from "@/components/gallery/work/works";
import { LoadingScreen } from "@/components/gallery/enter/loading";
import { ImageGallery } from "@/components/gallery/enter/gallery";
import { classNames } from "@/components/gallery/work/utils";
import '@/components/gallery/enter/style.css';

type PageState = 'loading' | 'gallery' | 'work';

export default function Home() {
  const [pageState, setPageState] = useState<PageState>('loading');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoadingComplete = () => {
    setPageState('gallery');
  };

  const handleGalleryComplete = () => {
    setPageState('work');
  };

  return (
    <>
      {pageState === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
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
          <ImageGallery onComplete={handleGalleryComplete} />
        </div>
      )}
      
      {pageState === 'work' && (
        <motion.main 
          {...anim(PageAnim.presencePage)} 
          className={classNames("home")}
        >
          <DataProvider url="/gallery/home.json">
            <Works />
          </DataProvider>
        </motion.main>
      )}
    </>
  );
}
