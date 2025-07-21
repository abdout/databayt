import { HomeData, WorkDetailsData } from "./type";

/**
 * Base URL for API requests
 */
const BASE_URL = process.env.NODE_ENV === 'production' ? '' : '';

/**
 * Generic data fetcher function
 */
async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url, {
      cache: "no-cache",
      next: { revalidate: 0 }, // For Next.js App Router
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
}

/**
 * Fetch home page data
 */
export async function getHomeData(): Promise<HomeData> {
  return fetchData<HomeData>(`${BASE_URL}/gallery/home.json`);
}

/**
 * Fetch work details data
 */
export async function getWorkDetails(slug: string): Promise<WorkDetailsData> {
  return fetchData<WorkDetailsData>(`${BASE_URL}/data/works/${slug}.json`);
}

/**
 * Get all work slugs for static generation
 */
export async function getAllWorkSlugs(): Promise<string[]> {
  try {
    const homeData = await getHomeData();
    return homeData.worksList.map(work => work.slug);
  } catch (error) {
    console.error('Error getting work slugs:', error);
    return [];
  }
}

/**
 * Check if a work exists
 */
export async function workExists(slug: string): Promise<boolean> {
  try {
    await getWorkDetails(slug);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Get next and previous work for navigation
 */
export async function getWorkNavigation(currentSlug: string) {
  try {
    const homeData = await getHomeData();
    const currentIndex = homeData.worksList.findIndex(work => work.slug === currentSlug);
    
    if (currentIndex === -1) {
      return { prev: null, next: null };
    }

    const prevWork = currentIndex > 0 ? homeData.worksList[currentIndex - 1] : null;
    const nextWork = currentIndex < homeData.worksList.length - 1 ? homeData.worksList[currentIndex + 1] : null;

    return {
      prev: prevWork,
      next: nextWork,
    };
  } catch (error) {
    console.error('Error getting work navigation:', error);
    return { prev: null, next: null };
  }
}

/**
 * Client-side data fetcher for React Query
 */
export const clientFetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

/**
 * Validate data structure
 */
export function validateHomeData(data: any): data is HomeData {
  return (
    data &&
    typeof data === 'object' &&
    Array.isArray(data.worksList) &&
    data.worksList.every((work: any) => 
      typeof work.id === 'string' &&
      typeof work.slug === 'string' &&
      typeof work.title === 'string' &&
      typeof work.image === 'string'
    )
  );
}

/**
 * Validate work details data
 */
export function validateWorkDetailsData(data: any): data is WorkDetailsData {
  return (
    data &&
    typeof data === 'object' &&
    typeof data.title === 'string'
  );
}

/**
 * Error messages for data fetching
 */
export const DATA_ERROR_MESSAGES = {
  NOT_FOUND: 'Data not found',
  NETWORK_ERROR: 'Network error occurred',
  INVALID_DATA: 'Invalid data format',
  WORK_NOT_FOUND: 'Work not found',
} as const;

/**
 * Cache utilities for client-side
 */
export const cacheUtils = {
  set: (key: string, data: any, ttl: number = 5 * 60 * 1000) => {
    if (typeof window !== 'undefined') {
      const item = {
        data,
        timestamp: Date.now(),
        ttl,
      };
      localStorage.setItem(key, JSON.stringify(item));
    }
  },
  
  get: (key: string) => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key);
      if (item) {
        const parsed = JSON.parse(item);
        if (Date.now() - parsed.timestamp < parsed.ttl) {
          return parsed.data;
        }
        localStorage.removeItem(key);
      }
    }
    return null;
  },
  
  clear: (key: string) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  },
}; 