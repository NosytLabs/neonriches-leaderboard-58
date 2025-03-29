
import { useState, useEffect } from 'react';
import { CACHE_DURATION, localStorageCache } from '@/utils/cacheUtils';

interface UseCachedRequestOptions {
  ttl?: number;
  revalidateOnFocus?: boolean;
  dedupingInterval?: number;
}

export function useCachedRequest<T>(
  url: string,
  options: UseCachedRequestOptions = {}
) {
  const {
    ttl = CACHE_DURATION.MEDIUM,
    revalidateOnFocus = false,
    dedupingInterval = 2000,
  } = options;
  
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
    
    // Check deduping interval to avoid multiple fetches in short time
    if (now - lastFetchTime < dedupingInterval && !forceFetch) {
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
  
  return { data, isLoading, error, refetch: () => fetchData(true) };
}
