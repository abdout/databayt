import type { ImageItem, GalleryColumn, AnimationConfig } from '@/components/enter/type';

export const IMAGES: ImageItem[] = [
  { src: '/images/0.jpg', alt: 'Gallery image 1', priority: true },
  { src: '/images/1.jpg', alt: 'Gallery image 2' },
  { src: '/images/2.jpg', alt: 'Gallery image 3' },
  { src: '/images/3.jpg', alt: 'Gallery image 4' },
  { src: '/images/4.jpg', alt: 'Gallery image 5' },
  { src: '/images/5.jpg', alt: 'Gallery image 6' },
  { src: '/images/6.jpg', alt: 'Gallery image 7' },
  { src: '/images/7.jpg', alt: 'Gallery image 8' },
  { src: '/images/8.jpg', alt: 'Gallery image 9' },
  { src: '/images/9.jpg', alt: 'Gallery image 10' },
  { src: '/images/home.jpg', alt: 'Home gallery image', isHome: true, priority: true },
  { src: '/images/10.jpg', alt: 'Gallery image 11' },
  { src: '/images/11.jpg', alt: 'Gallery image 12' },
  { src: '/images/12.jpg', alt: 'Gallery image 13' },
  { src: '/images/13.jpg', alt: 'Gallery image 14' },
  { src: '/images/14.jpg', alt: 'Gallery image 15' },
  { src: '/images/15.jpg', alt: 'Gallery image 16' },
  { src: '/images/16.jpg', alt: 'Gallery image 17' },
  { src: '/images/17.jpg', alt: 'Gallery image 18' },
  { src: '/images/18.jpg', alt: 'Gallery image 19' },
];

export const GALLERY_COLUMNS: GalleryColumn[] = [
  {
    images: [IMAGES[0], IMAGES[1], IMAGES[2], IMAGES[3]],
    animationType: 'forward',
    delay: 0.4,
  },
  {
    images: [IMAGES[4], IMAGES[5], IMAGES[6], IMAGES[7]],
    animationType: 'backward',
    delay: 0.3,
  },
  {
    images: [IMAGES[8], IMAGES[9], IMAGES[10], IMAGES[11]],
    animationType: 'center',
    delay: 0,
  },
  {
    images: [IMAGES[12], IMAGES[13], IMAGES[14], IMAGES[15]],
    animationType: 'backward',
    delay: 0.3,
  },
  {
    images: [IMAGES[16], IMAGES[17], IMAGES[18], IMAGES[19]],
    animationType: 'forward',
    delay: 0.4,
  },
];

export const ANIMATION_CONFIG: Record<string, AnimationConfig> = {
  center: {
    duration: 3,
    ease: 'expo.inOut',
    stagger: 0.3,
    delay: 0,
  },
  forward: {
    duration: 3,
    ease: 'expo.inOut',
    stagger: 0.3,
    delay: 0.4,
  },
  backward: {
    duration: 3,
    ease: 'expo.inOut',
    stagger: 0.3,
    delay: 0.3,
  },
};

export const GRID_CONFIG = {
  columns: 5,
  rows: 4,
  gap: '1vw',
  mobile: {
    columns: 2,
    rows: 8,
    gap: '2vw',
  },
  tablet: {
    columns: 3,
    rows: 6,
    gap: '1.5vw',
  },
};

export const PERFORMANCE_CONFIG = {
  imageQuality: 80,
  imageFormats: ['webp', 'jpg'] as const,
  preloadPriority: 3, // Number of images to preload with priority
  lazyLoadThreshold: 0.1, // Intersection observer threshold
  debounceDelay: 100,
  throttleDelay: 16, // ~60fps
};

export const SEO_CONFIG = {
  title: 'Camille Mormal - Creative Portfolio',
  description: 'Award-winning creative portfolio showcasing innovative design and visual storytelling.',
  keywords: ['portfolio', 'creative', 'design', 'visual', 'art', 'photography'],
  ogImage: '/images/home.jpg',
  twitterCard: 'summary_large_image',
};

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/camillemormal',
  behance: 'https://behance.net/camillemormal',
  linkedin: 'https://linkedin.com/in/camillemormal',
  email: 'contact@camillemormal.com',
}; 