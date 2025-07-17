'use client';

import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 100) {
      const timeout = setTimeout(() => {
        // Increment by random amount between 1-8 for more realistic loading
        const increment = Math.floor(Math.random() * 8) + 1;
        setCount(prev => Math.min(prev + increment, 100));
      }, 50 + Math.random() * 100); // Random timing between 50-150ms

      return () => clearTimeout(timeout);
    } else {
      // When reaching 100%, wait a bit then call onComplete
      const timeout = setTimeout(onComplete, 300);
      return () => clearTimeout(timeout);
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
      <div style={{
        color: 'white',
        fontSize: '18px',
        fontWeight: '300',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}>
        {count}%
      </div>
    </div>
  );
};