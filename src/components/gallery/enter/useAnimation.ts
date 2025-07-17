'use client';

import { useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { debounce, reverseNodeList } from '@/components/gallery/enter/utils';

type AnimationType = "center" | "forward" | "backward";

let contentRect: { width: number; height: number };
let stageSize: { width: number; height: number };
let contentTargetScale: number;
let scaledContentRect: { width: number; height: number };
let isGridScaleAnimateState: "idle" | "animating" | "complete" = "idle";
let gridScaleAnimation: gsap.core.Tween;

const getSlideAnimation = (type: AnimationType) => {
  const delay = (() => {
    switch (type) {
      case "center":
        return 0;
      case "forward":
        return 0.4;
      case "backward":
        return 0.3;
      default:
        return 0;
    }
  })();

  return {
    from: {
      y: type === "backward" ? "-120vh" : "120vh",
    },
    to: {
      y: type === "backward" ? `${scaledContentRect?.height / 2}px` : 0,
      duration: 3,
      ease: "expo.inOut",
      stagger: 0.3,
      delay,
    },
  };
};

const resetResponsiveParameters = () => {
  if (typeof window === 'undefined') return;
  
  stageSize = {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
  };
  contentTargetScale = Math.max(
    stageSize.width / contentRect.width,
    stageSize.height / contentRect.height
  );
  scaledContentRect = {
    width: stageSize.width / contentTargetScale,
    height: stageSize.height / contentTargetScale,
  };
};

export const useGalleryAnimation = (onComplete?: () => void) => {
  const initializeAnimations = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Get content rect
    const contentElement = document.querySelector(".content");
    if (!contentElement) return;
    
    contentRect = {
      width: contentElement.getBoundingClientRect().width,
      height: contentElement.getBoundingClientRect().height,
    };

    // Initialize responsive parameters
    resetResponsiveParameters();

    // Get DOM elements
    const grid = document.getElementById("grid");
    const center = document.querySelectorAll(".column.three .item .content");
    const forwards = [
      document.querySelectorAll(".column.one .item .content"),
      document.querySelectorAll(".column.five .item .content"),
    ];
    const backwards = [
      reverseNodeList(document.querySelectorAll(".column.four .item .content")),
      reverseNodeList(document.querySelectorAll(".column.two .item .content")),
    ];

    if (!grid || !center.length) return;

    // Add ready class to all content elements to make them visible
    // Small delay to ensure everything is properly initialized
    setTimeout(() => {
      const allContent = document.querySelectorAll(".content");
      allContent.forEach(content => content.classList.add("ready"));
    }, 100);

    // Center animation
    gsap.fromTo(
      center,
      getSlideAnimation("center").from,
      getSlideAnimation("center").to
    );

    // Forward animations
    forwards.forEach((forwardGroup) => {
      gsap.fromTo(
        forwardGroup,
        getSlideAnimation("forward").from,
        getSlideAnimation("forward").to
      );
    });

    // Backward animations
    backwards.forEach((backwardGroup) => {
      gsap.fromTo(
        backwardGroup,
        getSlideAnimation("backward").from,
        getSlideAnimation("backward").to
      );
    });

    // Grid scale animation with improved smoothness
    isGridScaleAnimateState = "idle";
    gridScaleAnimation = gsap.to(grid, {
      scale: contentTargetScale,
      duration: 4.5,
      ease: "expo.inOut",
      delay: 1.2,
      onStart: () => {
        isGridScaleAnimateState = "animating";
      },
      onComplete: () => {
        isGridScaleAnimateState = "complete";
        // Call the onComplete callback when animation is finished
        if (onComplete) {
          // Reasonable delay for smooth but not rushed transition
          setTimeout(onComplete, 400);
        }
      },
    });

    // Home image scale animation with improved smoothness
    gsap.to(".content.home img", {
      scale: 1,
      duration: 4.5,
      ease: "expo.inOut",
      delay: 1.2,
      // Add force3D to improve GPU acceleration
      force3D: true,
    });
  }, [onComplete]);

  const onResize = useCallback(() => {
    if (typeof window === 'undefined' || !contentRect) return;

    const prevTargetScale = contentTargetScale;
    resetResponsiveParameters();

    const grid = document.getElementById("grid");
    if (!grid) return;

    if (isGridScaleAnimateState === "animating") {
      const progress = gridScaleAnimation.progress();
      gridScaleAnimation.kill();

      gridScaleAnimation = gsap.fromTo(
        grid,
        {
          scale: contentTargetScale / prevTargetScale,
        },
        {
          scale: contentTargetScale,
          duration: 4.5,
          ease: "expo.inOut",
          delay: 1.2,
          onComplete: () => {
            isGridScaleAnimateState = "complete";
          },
        }
      );
      gridScaleAnimation.time(4.5 * progress);
    } else if (isGridScaleAnimateState === "complete") {
      grid.style.transform = `scale(${contentTargetScale})`;
    }

    requestAnimationFrame(() => {
      const contents = document.querySelectorAll<HTMLDivElement>(".content");
      contents.forEach((content) => {
        content.style.width = `${scaledContentRect.width}px`;
        content.style.height = `${scaledContentRect.height}px`;
      });
    });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const debouncedResize = debounce(onResize, 100);
    window.addEventListener("resize", debouncedResize);
    onResize(); // Call once on mount

    return () => {
      window.removeEventListener("resize", debouncedResize);
      gsap.killTweensOf("*");
    };
  }, [onResize]);

  return {
    initializeAnimations,
  };
}; 