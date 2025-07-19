// Project data types
export interface WorkItem {
  id: string;
  slug: string;
  title: string;
  image: string;
}

export interface HomeData {
  worksList: WorkItem[];
}

export interface WorkImage {
  src: string;
  alt?: string;
  caption?: string;
}

export interface WorkDetailsData {
  title: string;
  documentTitle?: string;
  description?: string;
  year?: string;
  client?: string;
  role?: string;
  technologies?: string[];
  hero?: {
    image: string;
    alt?: string;
  };
  images?: WorkImage[];
  nextProject?: {
    slug: string;
    title: string;
    image: string;
  };
  prevProject?: {
    slug: string;
    title: string;
    image: string;
  };
}

// Animation types - compatible with Framer Motion
export interface AnimationVariants {
  initial: { [key: string]: any };
  animate: { [key: string]: any } | ((custom?: any) => { [key: string]: any });
  exit: { [key: string]: any };
  [key: string]: any;
}

export interface ScrollContextType {
  scrollTo: (e: React.MouseEvent, target: string) => void;
  rangeScrollTo: (target: string) => void;
  scrollToImages: (e: React.MouseEvent, target: string) => void;
}

// Data context types
export interface DataContextType<T = any> {
  data: T;
  isLoading: boolean;
}

// Component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LoaderProps {
  setLoaderFinished: (finished: boolean) => void;
}

export interface ProgressBarProps {
  progress?: number;
}

export interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export interface AnchorLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

// Navigation types
export interface NavigationItem {
  href: string;
  label: string;
  external?: boolean;
} 