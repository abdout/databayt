import { AnimationVariants } from "./type";

/**
 * Animation helper function to create consistent animation objects
 */
export const anim = (variants: AnimationVariants) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
  };
};

/**
 * Common transition settings
 */
const transition = {
  duration: 0.4,
  ease: [0.17, 0.67, 0.29, 1.01],
};

/**
 * Page animation variants
 */
export const PageAnim = {
  presencePage: {
    initial: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1],
      },
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1],
        delay: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.02,
      transition: {
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  },
  block: {
    initial: {
      opacity: 0,
      scale: 1.05,
      y: 40,
      transition: {
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1],
      },
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.19, 1, 0.22, 1],
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  },
  list: {
    initial: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1],
      },
    },
    animate: (i: number[]) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.19, 1, 0.22, 1],
        delay: i[0] * 0.1,
      },
    }),
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.4,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  },
};

/**
 * Works/Projects animation variants
 */
export const WorksAnim = {
  hero: {
    initial: {
      y: "150%",
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.2,
      },
    },
    animate: (i: number) => ({
      y: "0%",
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.3,
        delay: (i + 0.05) * 0.2 + 0.12,
      },
    }),
    exit: {
      y: "-100%",
      clipPath: "inset(100% 0% 0% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.2,
      },
    },
  },
};

/**
 * Slider animation variants - Enhanced for reference-like smoothness
 */
const transitionLayer = {
  ease: [0.19, 1, 0.22, 1], // More fluid easing curve
  duration: 0.9, // Slightly longer for smoothness
};

export const SliderAnim = {
  layer: {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? "100%" : "-100%",
        scale: 0.95,
        opacity: 0.8,
        transition: {
          ...transitionLayer,
          duration: 1.1, // Longer enter animation
        },
      };
    },
    center: {
      x: "0%",
      scale: 1,
      opacity: 1,
      transition: {
        ...transitionLayer,
        duration: 0.9,
      },
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? "100%" : "-100%",
        scale: 1.05,
        opacity: 0.6,
        transition: {
          ...transitionLayer,
          duration: 0.8, // Faster exit
        },
      };
    },
  },
  button: {
    initial: {
      rotate: "0deg",
      transition: transitionLayer,
    },
    animate: {
      rotate: "90deg",
      transition: transitionLayer,
    },
    exit: {
      rotate: "0deg",
      transition: transitionLayer,
    },
  },
  text: {
    initial: {
      y: "120%",
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      y: "0%",
      opacity: 1,
      scale: 1,
      transition: {
        ease: [0.19, 1, 0.22, 1],
        duration: 0.8,
        delay: 0.15,
        staggerChildren: 0.1,
      },
    },
    exit: {
      y: "-120%",
      opacity: 0,
      scale: 1.1,
      transition: {
        ease: [0.19, 1, 0.22, 1],
        duration: 0.6,
      },
    },
  },
  id: {
    initial: {
      y: "100%",
      opacity: 0,
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        ease: [0.19, 1, 0.22, 1],
        duration: 1.0,
      },
    },
    animate: {
      y: "0%",
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        ease: [0.19, 1, 0.22, 1],
        duration: 1.0,
        delay: 0.25,
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      clipPath: "inset(100% 0% 0% 0%)",
      transition: {
        ease: [0.19, 1, 0.22, 1],
        duration: 0.8,
      },
    },
  },
};

/**
 * Easing functions for animations
 */
export const easings = {
  easeInOutExpo: (x: number): number => {
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5
      ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2;
  },
  easeOutQuart: (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  },
  easeInOutQuart: (x: number): number => {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
  },
  easeOutExpo: (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  },
};

/**
 * Common animation durations
 */
export const durations = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.8,
  slower: 1.2,
  slowest: 1.5,
};

/**
 * Common delays
 */
export const delays = {
  none: 0,
  fast: 0.1,
  normal: 0.2,
  slow: 0.3,
  slower: 0.5,
}; 