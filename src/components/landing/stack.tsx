'use client';
import React, { useEffect } from "react";
import { useAnimationControls } from "framer-motion";

const Stack = () => {
  // Initialize animation controls
  const controls = useAnimationControls();

  // Example animation setup
  const animateIcon = async () => {
    await controls.start({
      scale: [1, 1.5, 1],
      transition: { duration: 0.5 },
    });
  };

  useEffect(() => {
    // Trigger the animation on mount
    animateIcon();
  }, [animateIcon, controls]);

  return (
    <div className="container space-y-6 dark:bg-transparent">
      <div className="mx-auto flex max-w-full flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Stack</h2>
        <p className="max-w-[65%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pb-7">
          Databayt leverages state-of-the-art technology to craft innovative and modern applications, delivering seamless performance, scalability, and a superior user experience.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {/* Card Example */}
        <div
          className="relative overflow-hidden rounded-lg border bg-background p-2"
          onMouseEnter={animateIcon} // Optional: Trigger animation on hover
        >
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg
              viewBox="0 0 24 24"
              className="h-12 w-12 fill-current"
              animate={controls} // Attach controls to the SVG for animation
            >
              <path d="M11.572 0..." />
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Next.js 15</h3>
              <p className="text-sm text-muted-foreground">
                App dir, Routing, Layouts, Loading UI and API routes.
              </p>
            </div>
          </div>
        </div>
        {/* Repeat other cards */}
      </div>
    </div>
  );
};

export default Stack;
