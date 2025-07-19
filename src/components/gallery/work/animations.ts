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
      transition,
    },
    animate: {
      opacity: 1,
      transition: {
        ...transition,
        delay: 0.45,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ...transition,
      },
    },
  },
  block: {
    initial: {
      opacity: 0,
      scale: 1.2,
      transition,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0, 0.72, 0.1, 0.99],
        delay: 0.2,
      },
    },
    exit: {
      opacity: 1,
      scale: 1,
      transition: {
        ...transition,
      },
    },
  },
  list: {
    initial: {
      opacity: 0,
      transition,
    },
    animate: (i: number[]) => ({
      opacity: 1,
      transition: {
        ...transition,
        delay: i[0],
      },
    }),
    exit: {
      opacity: 0,
      transition: {
        ...transition,
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
 * Slider animation variants
 */
const transitionLayer = {
  ease: [0.08, 0.99, 0.37, 1],
  duration: 1.5,
};

export const SliderAnim = {
  layer: {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? "100%" : "-100%",
        transition: transitionLayer,
      };
    },
    center: {
      x: "0%",
      transition: transitionLayer,
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? "100%" : "-100%",
        transition: transitionLayer,
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
      y: "50%",
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.2,
      },
    },
    animate: {
      y: "0%",
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.2,
        delay: 0.3,
      },
    },
    exit: {
      y: "-50%",
      clipPath: "inset(100% 0% 0% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.2,
      },
    },
  },
  id: {
    initial: {
      y: "50%",
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.2,
      },
    },
    animate: {
      y: "0%",
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.2,
        delay: 0.3,
      },
    },
    exit: {
      y: "-50%",
      clipPath: "inset(100% 0% 0% 0%)",
      transition: {
        ease: [0.08, 0.99, 0.39, 1.01],
        duration: 1.2,
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