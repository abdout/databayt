"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import { useRouter } from "next/navigation";
import { useDataContext } from "./data-provider";
import { AnchorLink } from "./anchor-link";

interface WorksLinkProps {
  setNavigating: (state: boolean) => void;
}

export const WorksLink: React.FC<WorksLinkProps> = ({ setNavigating }) => {
  const { data } = useDataContext<any>();
  const { next: nextData } = data;
  const container = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [progressValue, setProgressValue] = useState(0);
  const [hasNavigated, setHasNavigated] = useState(false);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["0% 0%", "100% 100%"],
  });

  // First half: translate Y up to mid screen
  const y = useTransform(scrollYProgress, [0, 0.5], ["50vh", "0vh"]);
  
  // Second half: scale from mid screen to full screen
  const scale = useTransform(scrollYProgress, [0.5, 1], [0.6, 1]);
  
  // Clip path animation adjusted for better timing
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    ["inset(0% 30%)", "inset(0% 15%)", "inset(0% 0%)"]
  );

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 3000,
    damping: 50,
  });

  const handleNavigate = () => {
    setHasNavigated(true);
    setNavigating(true);
    router.push(`/gallery/${nextData.slug}`);
  };

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const roundedProgress = Math.round(latest * 100);
    setProgressValue(roundedProgress);

    if (roundedProgress >= 100 && !hasNavigated) {
      handleNavigate();
    }
  });

  useEffect(() => {
    if (hasNavigated) {
      const timeoutId = setTimeout(() => {
        window.scrollTo(0, 0);
        setNavigating(false);
        setHasNavigated(false);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [hasNavigated, setNavigating]);

  return (
    <section className="link" ref={container}>
      <div className="link--sticky">
        <motion.img
          src={nextData.image}
          style={{ clipPath, scale, y }}
          alt="next-proj"
          className="link__image"
        />
        <div className="link__title">
          <AnchorLink 
            toSection="#bottom" 
            className="progress"
          >
            <h1>{nextData.title}</h1>
            <span className="progress__num small-text">{progressValue}</span>
          </AnchorLink>
          <h2>Next Project</h2>
        </div>
      </div>
    </section>
  );
}; 