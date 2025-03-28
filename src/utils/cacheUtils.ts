
import React from 'react';

/**
 * Utility functions for caching and memoization
 */

export const CACHE_DURATION = {
  SHORT: 1000 * 60 * 5, // 5 minutes
  MEDIUM: 1000 * 60 * 30, // 30 minutes
  LONG: 1000 * 60 * 60 * 24, // 24 hours
};

// Local storage cache implementation
export const localStorageCache = {
  get: <T>(key: string): T | null => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return null;
      
      const { value, expiry } = JSON.parse(item);
      
      // Check if item has expired
      if (expiry && expiry < Date.now()) {
        localStorage.removeItem(key);
        return null;
      }
      
      return value as T;
    } catch (error) {
      console.error('Error retrieving from cache:', error);
      return null;
    }
  },
  
  set: <T>(key: string, value: T, ttl?: number): void => {
    try {
      const item = {
        value,
        expiry: ttl ? Date.now() + ttl : null
      };
      
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.error('Error setting cache:', error);
    }
  },
  
  remove: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from cache:', error);
    }
  },
  
  clear: (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing cache:', error);
    }
  }
};

// Memory cache implementation
class MemoryCache {
  private cache: Map<string, { value: any; expiry: number | null }> = new Map();
  
  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) return null;
    
    // Check if item has expired
    if (item.expiry && item.expiry < Date.now()) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value as T;
  }
  
  set<T>(key: string, value: T, ttl?: number): void {
    const item = {
      value,
      expiry: ttl ? Date.now() + ttl : null
    };
    
    this.cache.set(key, item);
  }
  
  remove(key: string): void {
    this.cache.delete(key);
  }
  
  clear(): void {
    this.cache.clear();
  }
}

export const memoryCache = new MemoryCache();

// Cache decorator for async functions
export function withCache<T>(
  fn: (...args: any[]) => Promise<T>,
  options: {
    key: string;
    ttl?: number;
    storage?: 'local' | 'memory';
  }
): (...args: any[]) => Promise<T> {
  const { key, ttl, storage = 'memory' } = options;
  const cache = storage === 'local' ? localStorageCache : memoryCache;
  
  return async (...args: any[]): Promise<T> => {
    // Create a unique key based on function arguments
    const uniqueKey = `${key}-${JSON.stringify(args)}`;
    
    // Check cache first
    const cachedResult = cache.get<T>(uniqueKey);
    if (cachedResult !== null) {
      return cachedResult;
    }
    
    // If not in cache, call the original function
    const result = await fn(...args);
    
    // Store result in cache
    cache.set<T>(uniqueKey, result, ttl);
    
    return result;
  };
}

// Memoize function results with optional TTL
export function memoize<T>(
  fn: (...args: any[]) => T,
  options: {
    ttl?: number;
    maxSize?: number;
  } = {}
): (...args: any[]) => T {
  const { ttl, maxSize = 100 } = options;
  const cache = new Map<string, { value: T; timestamp: number }>();
  
  return (...args: any[]): T => {
    const key = JSON.stringify(args);
    
    // Check if result is in cache and not expired
    const cached = cache.get(key);
    if (cached && (!ttl || Date.now() - cached.timestamp < ttl)) {
      return cached.value;
    }
    
    // Calculate new result
    const result = fn(...args);
    
    // Manage cache size
    if (maxSize && cache.size >= maxSize) {
      // Remove oldest entry
      const oldestKey = cache.keys().next().value;
      cache.delete(oldestKey);
    }
    
    // Store in cache
    cache.set(key, { value: result, timestamp: Date.now() });
    
    return result;
  };
}

// Generic data fetching hook with caching
export function useCachedFetch<T>(
  url: string,
  options?: {
    fetchOptions?: RequestInit;
    ttl?: number;
    key?: string;
    storage?: 'local' | 'memory';
    initialData?: T;
    dependencies?: any[];
  }
) {
  const {
    fetchOptions,
    ttl = CACHE_DURATION.MEDIUM,
    key = url,
    storage = 'memory',
    initialData,
    dependencies = []
  } = options || {};
  
  const [data, setData] = React.useState<T | undefined>(initialData);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error | null>(null);
  
  React.useEffect(() => {
    const cache = storage === 'local' ? localStorageCache : memoryCache;
    const cacheKey = `fetch-${key}`;
    
    const fetchData = async () => {
      // Check cache first
      const cachedData = cache.get<T>(cacheKey);
      if (cachedData !== null) {
        setData(cachedData);
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const response = await fetch(url, fetchOptions);
        
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        
        const result = await response.json();
        
        // Store in cache
        cache.set<T>(cacheKey, result, ttl);
        
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url, ...dependencies]);
  
  return { data, loading, error };
}
