"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRouter } from "next/navigation";
import { WorkDetailsData } from "./type";

interface WorksLinkProps {
  setNavigating: (state: boolean) => void;
  data: WorkDetailsData;
}

export const WorksLink: React.FC<WorksLinkProps> = ({ setNavigating, data }) => {
  const { nextProject } = data;
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [shouldAutoNavigate, setShouldAutoNavigate] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
    
    // Auto-navigate when scrolled to bottom (like reference)
    if (latest >= 0.95 && !shouldAutoNavigate) {
      setShouldAutoNavigate(true);
      setTimeout(() => {
        handleNavigate();
      }, 800); // Delay to match reference timing
    }
  });

  if (!nextProject) {
    return null;
  }

  const handleNavigate = () => {
    setNavigating(true);
    
    // Add page transition effect
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
      router.push(`/gallery/${nextProject.slug}`);
    }, 300);
  };

  const handleClick = () => {
    if (!shouldAutoNavigate) {
      handleNavigate();
    }
  };

  return (
    <section 
      ref={containerRef}
      className="works-link-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="works-link__content">
        <motion.h2 
          className="works-link__next-text font-sans"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Next Project
        </motion.h2>
        <motion.h1 
          className="works-link__title font-sans"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {nextProject.title}
        </motion.h1>
        <motion.div 
          className="works-link__progress"
          initial={{ width: 0 }}
          animate={{ width: shouldAutoNavigate ? "100%" : "0%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>
      
      <motion.div 
        className="works-link__image-container"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ 
          opacity: isHovered ? 0.8 : 0, 
          scale: isHovered ? 1 : 1.1 
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        <motion.img
          src={nextProject.image}
          alt={nextProject.title}
          className="works-link__image"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="works-link__scroll-indicator font-sans"
        initial={{ opacity: 1 }}
        animate={{ opacity: shouldAutoNavigate ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <span>Scroll to continue</span>
        <motion.div 
          className="works-link__scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}; 