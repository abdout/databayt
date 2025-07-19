"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useScroll } from "framer-motion";
import { useScroll as useCustomScroll } from "./use-scroll";

export const ProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 1000, damping: 100 });
  const [rangeValue, setRangeValue] = useState(0);
  const { rangeScrollTo, isReady } = useCustomScroll();

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setRangeValue(value);
    
    if (typeof window !== 'undefined') {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTo = (documentHeight * value) / 100;
      
      // Only use Locomotive if ready, otherwise use native
      if (isReady) {
        rangeScrollTo(scrollTo.toString());
      } else {
        window.scrollTo({
          top: scrollTo,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setRangeValue(v * 100);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="progress-bar">
      <motion.div className="progress-bar__bar" style={{ scaleY }} />
      <input
        type="range"
        min="0"
        max="100"
        value={rangeValue}
        onChange={handleRangeChange}
        className="progress-bar__range"
      />
    </div>
  );
}; 