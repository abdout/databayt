'use client';

import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (count < 100) {
      const timeout = setTimeout(() => {
        // Increment by random amount between 1-8 for more realistic loading
        const increment = Math.floor(Math.random() * 8) + 1;
        setCount(prev => Math.min(prev + increment, 100));
      }, 50 + Math.random() * 100); // Random timing between 50-150ms

      return () => clearTimeout(timeout);
    } else {
      // When reaching 100%, start the upward animation
      const animationTimeout = setTimeout(() => {
        setIsAnimatingOut(true);
      }, 200);

      // Call onComplete after animation finishes
      const completeTimeout = setTimeout(onComplete, 1000); // 200ms delay + 800ms animation

      return () => {
        clearTimeout(animationTimeout);
        clearTimeout(completeTimeout);
      };
    }
  }, [count, onComplete]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#121214',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      {/* Clipping container - this creates the "line" effect */}
      <div style={{
        height: '12px', // Exact height of the text content
        overflow: 'hidden', // This creates the progressive hiding effect
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          color: 'white',
          fontSize: '12px',
          fontWeight: '500',
          fontFamily: 'Inter, system-ui, sans-serif',
          lineHeight: '12px', // Match the container height
          transform: isAnimatingOut ? 'translateY(-25px)' : 'translateY(0)',
          transition: 'transform 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}>
          {count}%
        </div>
      </div>
    </div>
  );
};