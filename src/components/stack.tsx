'use client';
import React from 'react';
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

  return (
    <div className="flex flex-wrap gap-[62px] items-center justify-center pt-8">
      {icons.map((item) => (
        <div key={item.icon}>
          <Icon 
            icon={item.icon} 
            width={item.size} 
            height={item.size}
          />
        </div>
      ))}
    </div>
  );
};

export default Stack;
