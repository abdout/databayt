"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ProgressThumbnail } from "./progress-thumbnail"; 
import { WorkImage } from "./type";

interface ProgressBarProps {
  images: WorkImage[];
  containerRef: React.RefObject<HTMLElement | null>;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ images, containerRef }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverY, setHoverY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Create smoother spring animation for progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    mass: 0.1,
  });

  const scaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && !isDragging) {
      const rect = progressRef.current.getBoundingClientRect();
      setHoverY(e.clientY - rect.top);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && containerRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const clickProgress = clickY / rect.height;
      
      // Calculate scroll position
      const containerHeight = containerRef.current.scrollHeight;
      const targetScroll = clickProgress * (containerHeight - window.innerHeight);
      
      // Smooth scroll to position
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleClick(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseleave', handleMouseUp);
      return () => {
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mouseleave', handleMouseUp);
      };
    }
  }, [isDragging]);
  
  const hoverProgress = Math.max(0, Math.min(1, hoverY / (progressRef.current?.clientHeight || 1)));
  const imageIndex = Math.min(images.length - 1, Math.floor(hoverProgress * images.length));
  const currentImage = images[imageIndex]?.src;

  return (
    <div
      ref={progressRef}
      className="progress-bar-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <motion.div 
        className="progress-bar__track"
      />
      <motion.div 
        className="progress-bar__fill" 
        style={{ 
          scaleY,
          transformOrigin: "top"
        }}
      />
      {currentImage && images.length > 0 && (
        <ProgressThumbnail
          image={currentImage}
          y={hoverY}
          isActive={isHovering}
        />
      )}
    </div>
  );
}; 