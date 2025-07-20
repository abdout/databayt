"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ProgressThumbnailProps {
  image: string;
  y: number;
  isActive: boolean;
}

export const ProgressThumbnail: React.FC<ProgressThumbnailProps> = ({ image, y, isActive }) => {
  return (
    <motion.div
      className="progress-thumbnail-wrapper"
      style={{ y }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="progress-thumbnail">
        <img src={image} alt="work-thumbnail" className="progress-thumbnail__image" />
        <p className="progress-thumbnail__view">View</p>
      </div>
    </motion.div>
  );
}; 