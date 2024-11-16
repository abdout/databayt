// components/TechOrbit.tsx
'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface LogoProps {
  label: string;
  color: string;
  rotate: number;
  radius: number;
  duration: number;
}

const Logo: React.FC<LogoProps> = ({ label, color, rotate, radius, duration }) => {
  return (
    <motion.div
      animate={{
        rotate: [rotate, rotate + 360],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        position: 'absolute',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontWeight: 'bold',
        transform: `rotate(${rotate}deg) translateX(${radius}px)`,
      }}
    >
      {label}
    </motion.div>
  );
};

const TechOrbit = () => {
  const orbit1Logos = [
    { label: 'TS', color: '#007ACC', rotate: 0 },
    { label: 'JS', color: '#F7DF1E', rotate: 120 },
    { label: 'RX', color: '#61DAFB', rotate: 240 },
  ];

  const orbit2Logos = [
    { label: 'NX', color: '#000000', rotate: 0 },
    { label: 'TW', color: '#38B2AC', rotate: 90 },
    { label: 'SC', color: '#333333', rotate: 180 },
    { label: 'FM', color: '#FF0080', rotate: 270 },
  ];

  const orbit3Logos = [
    { label: 'MG', color: '#4DB33D', rotate: 0 },
    { label: 'PR', color: '#2D3748', rotate: 72 },
    { label: 'GQ', color: '#E535AB', rotate: 144 },
    { label: 'RQ', color: '#FF4154', rotate: 216 },
    { label: 'ZD', color: '#FF4785', rotate: 288 },
  ];

  const orbit4Logos = [
    { label: 'DC', color: '#7B61FF', rotate: 0 },
    { label: 'FG', color: '#F24E1E', rotate: 60 },
    { label: 'VE', color: '#000000', rotate: 120 },
    { label: 'AU', color: '#FF4785', rotate: 180 },
    { label: 'GT', color: '#F05032', rotate: 240 },
    { label: 'VS', color: '#007ACC', rotate: 300 },
  ];

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#0a0a0a',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'relative',
        width: '600px',
        height: '600px',
      }}>
        {/* Static circles */}
        {[100, 200, 300, 400].map((size, index) => (
          <div
            key={size}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: size * 2,
              height: size * 2,
              transform: 'translate(-50%, -50%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
            }}
          />
        ))}

        {/* Center point */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '50px',
          height: '50px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          borderRadius: '50%',
          boxShadow: '0 0 20px rgba(255,255,255,0.5)',
        }} />

        {/* Orbiting logos */}
        {orbit1Logos.map((logo, i) => (
          <Logo
            key={i}
            label={logo.label}
            color={logo.color}
            rotate={logo.rotate}
            radius={100}
            duration={20}
          />
        ))}

        {orbit2Logos.map((logo, i) => (
          <Logo
            key={i}
            label={logo.label}
            color={logo.color}
            rotate={logo.rotate}
            radius={200}
            duration={25}
          />
        ))}

        {orbit3Logos.map((logo, i) => (
          <Logo
            key={i}
            label={logo.label}
            color={logo.color}
            rotate={logo.rotate}
            radius={300}
            duration={30}
          />
        ))}

        {orbit4Logos.map((logo, i) => (
          <Logo
            key={i}
            label={logo.label}
            color={logo.color}
            rotate={logo.rotate}
            radius={400}
            duration={35}
          />
        ))}
      </div>
    </div>
  );
};

export default TechOrbit;