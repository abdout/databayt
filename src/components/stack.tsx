'use client';
import React, { useEffect } from 'react';
import { motion, useAnimationControls, AnimationControls } from 'framer-motion';
import { Icon } from '@iconify/react';

const Stack = () => {
  const icons = [
    { icon: "simple-icons:typescript", size: 40 },
    { icon: "file-icons:figma", size: 40 },
    { icon: "simple-icons:zod", size: 43 },
    { icon: "bytesize:github", size: 40 },
    { icon: "logos:vercel-icon", size: 40 },
    { icon: "devicon:framermotion", size: 40 },
    { icon: "simple-icons:shadcnui", size: 36 },
    { icon: "simple-icons:resend", size: 36 },
    { icon: "logos:rust", size: 40 },
    { icon: "lineicons:claude", size: 45 }
  ];

  const controls: AnimationControls[] = icons.map(() => useAnimationControls());

  const animateIcon = async (control: AnimationControls, index: number): Promise<void> => {
    const randomDelay = Math.random() * 3000;
    const randomDuration = Math.random() * 1 + 0.5;
    const shouldDisappear = Math.random() < 0.3; // 30% chance to disappear
    const shouldSpinFast = Math.random() < 0.1; // 10% chance for fast spin
    const disappearDuration = Math.random() * 3000 + 1000; // 1-4 seconds
    
    await new Promise(resolve => setTimeout(resolve, randomDelay));
    
    if (shouldSpinFast) {
      // Fast spin animation
      await control.start({
        rotate: [0, 1080], // 3 full rotations
        scale: [1, 0.9, 1],
        transition: { 
          duration: 0.8,
          rotate: {
            ease: "easeInOut",
            duration: 0.8
          },
          scale: {
            times: [0, 0.5, 1],
            ease: "easeInOut"
          }
        }
      });
    } else if (shouldDisappear) {
      // Completely disappear for a random duration
      await control.start({
        opacity: 0,
        transition: { duration: 0.3, ease: "easeOut" }
      });
      await new Promise(resolve => setTimeout(resolve, disappearDuration));
      await control.start({
        opacity: 1,
        transition: { duration: 0.3, ease: "easeIn" }
      });
    } else {
      const pattern = Math.floor(Math.random() * 5);
      switch (pattern) {
        case 0:
          await control.start({
            opacity: [1, 0.2, 1],
            scale: [1, 0.95, 1],
            transition: { duration: randomDuration, ease: "easeInOut" }
          });
          break;
        case 1:
          // Slow full spin
          await control.start({
            rotate: [0, 360],
            opacity: [1, 0.4, 1],
            transition: { 
              duration: 2,
              ease: "easeInOut"
            }
          });
          break;
        case 2:
          await control.start({
            opacity: [1, 0.3, 1, 0.3, 1],
            scale: [1, 0.9, 1, 0.9, 1],
            transition: { duration: randomDuration * 1.5, ease: "easeInOut" }
          });
          break;
        case 3:
          await control.start({
            opacity: [1, 0.4, 1],
            scale: [1, 1.1, 1],
            transition: { duration: randomDuration, ease: "easeInOut" }
          });
          break;
        case 4:
          await control.start({
            opacity: [1, 0.3, 1, 0.3, 1, 0.3, 1],
            scale: [1, 0.95, 1, 0.95, 1, 0.95, 1],
            transition: { duration: randomDuration * 2, ease: "easeInOut" }
          });
          break;
      }
    }

    // Random delay before next animation
    const nextDelay = Math.random() * 3000 + 500;
    setTimeout(() => animateIcon(control, index), nextDelay);
  };

  useEffect(() => {
    controls.forEach((control, index) => {
      setTimeout(() => animateIcon(control, index), Math.random() * 2000);
    });
  }, []);

  return (
    <div className="flex flex-wrap gap-[62px] items-center justify-center pt-8">
      {icons.map((item, index) => (
        <motion.div
          key={item.icon}
          animate={controls[index]}
        >
          <Icon 
            icon={item.icon} 
            width={item.size} 
            height={item.size}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Stack;