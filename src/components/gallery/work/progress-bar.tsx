"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export const ProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      
      setScrollProgress(scrolled);
      setRangeValue(scrolled);
    };

    // Initial call
    updateScrollProgress();

    // Add scroll listener
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setRangeValue(value);
    
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTo = (documentHeight * value) / 100;
    
    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });
  };

  return (
    <div className="progress-bar" style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      width: '2vw',
      zIndex: 9999,
      pointerEvents: 'auto'
    }}>
      <div 
        className="progress-bar__bar"
        style={{
          width: '0.25vw',
          height: `${scrollProgress}%`,
          backgroundColor: '#f9f5ef',
          transformOrigin: 'top',
          transition: 'height 0.1s ease-out'
        }}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={rangeValue}
        onChange={handleRangeChange}
        className="progress-bar__range"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          rotate: '90deg',
          width: '100vh',
          height: '1vw',
          transform: 'translate(-2%, -30%)',
          transformOrigin: 'left',
          opacity: 0,
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
          outline: 'none'
        }}
      />
    </div>
  );
}; 