
import { useState, useEffect } from 'react';

interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  revalidateOnFocus?: boolean;
}

const CACHE_DURATION = {
  SHORT: 60 * 1000, // 1 minute
  MEDIUM: 5 * 60 * 1000, // 5 minutes
  LONG: 30 * 60 * 1000, // 30 minutes
  DAY: 24 * 60 * 60 * 1000 // 24 hours
};

// Simple storage with expiration
const localStorageCache = {
  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      if (!item) return null;
      
      const { value, expiry } = JSON.parse(item);
      if (expiry && Date.now() > expiry) {
        localStorage.removeItem(key);
        return null;
      }
      
      return value as T;
    } catch (error) {
      console.error('Cache retrieval error:', error);
      return null;
    }
  },
  
  set<T>(key: string, value: T, ttl: number): void {
    try {
      const item = {
        value,
        expiry: Date.now() + ttl
      };
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.error('Cache set error:', error);
    }
  },
  
  remove(key: string): void {
    localStorage.removeItem(key);
  }
};

export function useCachedRequest<T>(
  url: string,
  options: CacheOptions = {}
) {
  const { ttl = CACHE_DURATION.MEDIUM, revalidateOnFocus = false } = options;
  
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [lastFetchTime, setLastFetchTime] = useState(0);

  const fetchData = async (forceFetch = false) => {
    const cacheKey = `request:${url}`;
    const now = Date.now();
    
    // Check cache first, unless force fetch is requested
    if (!forceFetch) {
      const cached = localStorageCache.get<T>(cacheKey);
      if (cached) {
        setData(cached);
        setIsLoading(false);
        return;
      }
    }
    
    // Dedupe requests if they happen closely together
    if (now - lastFetchTime < 2000 && !forceFetch) {
      return;
    }
    
    try {
      setIsLoading(true);
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      
      const result = await response.json();
      
      // Store in cache
      localStorageCache.set<T>(cacheKey, result, ttl);
      
      setData(result);
      setError(null);
      setLastFetchTime(now);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    
    // Set up revalidation on focus if enabled
    if (revalidateOnFocus && typeof window !== 'undefined') {
      const handleFocus = () => fetchData(true);
      window.addEventListener('focus', handleFocus);
      
      return () => {
        window.removeEventListener('focus', handleFocus);
      };
    }
  }, [url]);
  
  // Export CACHE_DURATION and localStorageCache for use elsewhere
  return { 
    data, 
    isLoading, 
    error, 
    refetch: () => fetchData(true),
    cache: { CACHE_DURATION, localStorageCache }
  };
}

// Export these for direct use in other components
export { CACHE_DURATION, localStorageCache };
