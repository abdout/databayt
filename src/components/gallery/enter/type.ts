export interface ImageItem {
  src: string;
  alt: string;
  isHome?: boolean;
  priority?: boolean;
}

export interface GalleryColumn {
  images: ImageItem[];
  animationType: 'center' | 'forward' | 'backward';
  delay: number;
}

export interface AnimationConfig {
  duration: number;
  ease: string;
  stagger: number;
  delay: number;
}

export interface ResponsiveConfig {
  contentTargetScale: number;
  scaledContentRect: {
    width: number;
    height: number;
  };
  stageSize: {
    width: number;
    height: number;
  };
}

export interface CursorPosition {
  x: number;
  y: number;
}

export interface LoadingState {
  isLoading: boolean;
  progress: number;
  error?: string;
} 