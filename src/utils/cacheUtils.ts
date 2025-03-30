
import React from 'react';

/**
 * Enhanced utility functions for caching and memoization
 */

export const CACHE_DURATION = {
  TINY: 1000 * 30, // 30 seconds
  SHORT: 1000 * 60 * 5, // 5 minutes
  MEDIUM: 1000 * 60 * 30, // 30 minutes
  LONG: 1000 * 60 * 60 * 24, // 24 hours
  PERMANENT: -1, // No expiration
};

// Interface for cache items
interface CacheItem<T> {
  value: T;
  expiry: number | null;
  timestamp: number;
  version?: string;
}

// Interface for cache options
interface CacheOptions {
  ttl?: number;
  version?: string;
  prefix?: string;
}

// Local storage cache implementation with versioning and compression
export const localStorageCache = {
  get: <T>(key: string, options: { prefix?: string; version?: string } = {}): T | null => {
    try {
      const prefixedKey = options.prefix ? `${options.prefix}:${key}` : key;
      const item = localStorage.getItem(prefixedKey);
      if (!item) return null;
      
      // Parse the cached item
      const { value, expiry, version } = JSON.parse(item) as CacheItem<T>;
      
      // Check if version has changed (if provided)
      if (options.version && version && options.version !== version) {
        localStorage.removeItem(prefixedKey);
        return null;
      }
      
      // Check if item has expired
      if (expiry && expiry !== -1 && expiry < Date.now()) {
        localStorage.removeItem(prefixedKey);
        return null;
      }
      
      return value;
    } catch (error) {
      console.error('[Cache] Error retrieving from cache:', error);
      return null;
    }
  },
  
  set: <T>(key: string, value: T, options: CacheOptions = {}): void => {
    try {
      const { ttl, version, prefix } = options;
      const prefixedKey = prefix ? `${prefix}:${key}` : key;
      
      const item: CacheItem<T> = {
        value,
        expiry: ttl === -1 ? -1 : ttl ? Date.now() + ttl : null,
        timestamp: Date.now(),
        version,
      };
      
      localStorage.setItem(prefixedKey, JSON.stringify(item));
    } catch (error) {
      // Check if error is due to storage limit
      if (error instanceof DOMException && error.name === 'QuotaExceededError') {
        console.warn('[Cache] Storage quota exceeded, clearing older items');
        pruneCache(0.5); // Clear 50% of expired/oldest items
        
        // Try again
        try {
          const prefixedKey = options.prefix ? `${options.prefix}:${key}` : key;
          
          const item: CacheItem<T> = {
            value,
            expiry: options.ttl === -1 ? -1 : options.ttl ? Date.now() + options.ttl : null,
            timestamp: Date.now(),
            version: options.version,
          };
          
          localStorage.setItem(prefixedKey, JSON.stringify(item));
        } catch (retryError) {
          console.error('[Cache] Error setting cache after pruning:', retryError);
        }
      } else {
        console.error('[Cache] Error setting cache:', error);
      }
    }
  },
  
  remove: (key: string, prefix?: string): void => {
    try {
      const prefixedKey = prefix ? `${prefix}:${key}` : key;
      localStorage.removeItem(prefixedKey);
    } catch (error) {
      console.error('[Cache] Error removing from cache:', error);
    }
  },
  
  clear: (prefix?: string): void => {
    try {
      if (prefix) {
        // Only clear items with the specified prefix
        const keysToRemove: string[] = [];
        
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith(`${prefix}:`)) {
            keysToRemove.push(key);
          }
        }
        
        keysToRemove.forEach(key => localStorage.removeItem(key));
      } else {
        localStorage.clear();
      }
    } catch (error) {
      console.error('[Cache] Error clearing cache:', error);
    }
  }
};

// Memory cache implementation with limit protection
class MemoryCache {
  private cache: Map<string, CacheItem<any>> = new Map();
  private maxItems: number = 1000;
  
  get<T>(key: string, options: { version?: string } = {}): T | null {
    const item = this.cache.get(key);
    
    if (!item) return null;
    
    // Check version if provided
    if (options.version && item.version && options.version !== item.version) {
      this.cache.delete(key);
      return null;
    }
    
    // Check if item has expired
    if (item.expiry && item.expiry !== -1 && item.expiry < Date.now()) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value as T;
  }
  
  set<T>(key: string, value: T, options: CacheOptions = {}): void {
    // Check if we've reached the max item limit
    if (this.cache.size >= this.maxItems) {
      this.prune(0.25); // Remove 25% of the oldest or expired items
    }
    
    const { ttl, version } = options;
    
    const item: CacheItem<T> = {
      value,
      expiry: ttl === -1 ? -1 : ttl ? Date.now() + ttl : null,
      timestamp: Date.now(),
      version,
    };
    
    this.cache.set(key, item);
  }
  
  remove(key: string): void {
    this.cache.delete(key);
  }
  
  clear(): void {
    this.cache.clear();
  }
  
  setMaxItems(maxItems: number): void {
    this.maxItems = maxItems;
    if (this.cache.size > maxItems) {
      this.prune(1 - (maxItems / this.cache.size));
    }
  }
  
  private prune(percentage: number): void {
    const itemsToRemove = Math.floor(this.cache.size * percentage);
    
    // Get all items as an array for sorting
    const items = Array.from(this.cache.entries()).map(([key, item]) => ({
      key,
      expired: item.expiry ? item.expiry !== -1 && item.expiry < Date.now() : false,
      timestamp: item.timestamp
    }));
    
    // First remove expired items
    const expiredItems = items.filter(item => item.expired);
    expiredItems.forEach(item => this.cache.delete(item.key));
    
    // If we still need to remove more, remove oldest items
    if (expiredItems.length < itemsToRemove) {
      const remainingItems = items
        .filter(item => !item.expired)
        .sort((a, b) => a.timestamp - b.timestamp);
      
      const additionalItemsToRemove = itemsToRemove - expiredItems.length;
      
      remainingItems.slice(0, additionalItemsToRemove).forEach(item => {
        this.cache.delete(item.key);
      });
    }
  }
}

export const memoryCache = new MemoryCache();

/**
 * Prune local storage cache
 * @param percentage - Percentage of items to remove (0-1)
 */
export const pruneCache = (percentage: number = 0.25): void => {
  try {
    // Get all items as an array for sorting
    const items: Array<{ key: string; expired: boolean; timestamp: number }> = [];
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        try {
          const item = JSON.parse(localStorage.getItem(key) || '{}');
          items.push({
            key,
            expired: item.expiry ? item.expiry !== -1 && item.expiry < Date.now() : false,
            timestamp: item.timestamp || 0
          });
        } catch (e) {
          // Skip items that aren't valid cache items
          continue;
        }
      }
    }
    
    // Calculate how many items to remove
    const itemsToRemove = Math.floor(items.length * percentage);
    
    // First remove expired items
    const expiredItems = items.filter(item => item.expired);
    expiredItems.forEach(item => localStorage.removeItem(item.key));
    
    // If we still need to remove more, remove oldest items
    if (expiredItems.length < itemsToRemove) {
      const remainingItems = items
        .filter(item => !item.expired)
        .sort((a, b) => a.timestamp - b.timestamp);
      
      const additionalItemsToRemove = itemsToRemove - expiredItems.length;
      
      remainingItems.slice(0, additionalItemsToRemove).forEach(item => {
        localStorage.removeItem(item.key);
      });
    }
  } catch (error) {
    console.error('[Cache] Error pruning cache:', error);
  }
};

// Cache decorator for async functions with improved retry and error handling
export function withCache<T>(
  fn: (...args: any[]) => Promise<T>,
  options: {
    key: string;
    ttl?: number;
    storage?: 'local' | 'memory';
    version?: string;
    prefix?: string;
    retries?: number;
    retryDelay?: number;
    fallbackToCache?: boolean;
  }
): (...args: any[]) => Promise<T> {
  const { 
    key, 
    ttl = CACHE_DURATION.MEDIUM, 
    storage = 'memory',
    version,
    prefix,
    retries = 0,
    retryDelay = 1000,
    fallbackToCache = true
  } = options;
  
  const cache = storage === 'local' ? localStorageCache : memoryCache;
  
  return async (...args: any[]): Promise<T> => {
    // Create a unique key based on function arguments
    const uniqueKey = `${key}-${JSON.stringify(args)}`;
    
    // Check cache first
    const cachedResult = cache.get<T>(uniqueKey, { version });
    if (cachedResult !== null) {
      return cachedResult;
    }
    
    // If not in cache, call the original function with retry logic
    let attempt = 0;
    let lastError: Error | null = null;
    
    while (attempt <= retries) {
      try {
        // If not the first attempt, wait before retrying
        if (attempt > 0) {
          await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
        }
        
        const result = await fn(...args);
        
        // Store result in cache
        cache.set<T>(uniqueKey, result, { ttl, version, prefix });
        
        return result;
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        attempt++;
      }
    }
    
    // All retries have failed
    if (fallbackToCache) {
      // Try to get even expired cache as a fallback
      try {
        const storageKey = prefix ? `${prefix}:${uniqueKey}` : uniqueKey;
        const rawItem = storage === 'local' ? localStorage.getItem(storageKey) : null;
        
        if (rawItem) {
          const { value } = JSON.parse(rawItem) as CacheItem<T>;
          console.warn('[Cache] Using expired cache value as fallback');
          return value;
        }
      } catch {
        // If fallback to expired cache fails, rethrow the original error
      }
    }
    
    throw lastError || new Error('Unknown error executing cached function');
  };
}

// Enhanced memoize function with TTL and size limit
export function memoize<T>(
  fn: (...args: any[]) => T,
  options: {
    ttl?: number;
    maxSize?: number;
    keyFn?: (...args: any[]) => string;
  } = {}
): (...args: any[]) => T {
  const { ttl, maxSize = 100, keyFn } = options;
  const cache = new Map<string, { value: T; timestamp: number }>();
  
  return (...args: any[]): T => {
    // Generate cache key - either use custom keyFn or JSON.stringify
    const key = keyFn ? keyFn(...args) : JSON.stringify(args);
    
    // Check if result is in cache and not expired
    const cached = cache.get(key);
    if (cached && (!ttl || Date.now() - cached.timestamp < ttl)) {
      return cached.value;
    }
    
    // Calculate new result
    const result = fn(...args);
    
    // Manage cache size
    if (maxSize && cache.size >= maxSize) {
      // Get all entries, sort by timestamp (oldest first)
      const entries = Array.from(cache.entries())
        .sort((a, b) => a[1].timestamp - b[1].timestamp);
      
      // Remove oldest 10% or at least one entry
      const removeCount = Math.max(1, Math.floor(entries.length * 0.1));
      entries.slice(0, removeCount).forEach(([entryKey]) => {
        cache.delete(entryKey);
      });
    }
    
    // Store in cache
    cache.set(key, { value: result, timestamp: Date.now() });
    
    return result;
  };
}

// Generic data fetching hook with improved caching
export function useCachedFetch<T>(
  url: string,
  options?: {
    fetchOptions?: RequestInit;
    ttl?: number;
    key?: string;
    storage?: 'local' | 'memory';
    initialData?: T;
    dependencies?: any[];
    version?: string;
    retries?: number;
    retryDelay?: number;
    revalidateOnFocus?: boolean;
    revalidateOnReconnect?: boolean;
    skipCondition?: boolean;
  }
) {
  const {
    fetchOptions,
    ttl = CACHE_DURATION.MEDIUM,
    key = url,
    storage = 'memory',
    initialData,
    dependencies = [],
    version,
    retries = 1,
    retryDelay = 1000,
    revalidateOnFocus = false,
    revalidateOnReconnect = false,
    skipCondition = false
  } = options || {};
  
  const [data, setData] = React.useState<T | undefined>(initialData);
  const [loading, setLoading] = React.useState<boolean>(!skipCondition);
  const [error, setError] = React.useState<Error | null>(null);
  const isMountedRef = React.useRef(true);
  
  // Function to fetch data with caching
  const fetchData = React.useCallback(async (forceFetch = false) => {
    if (skipCondition) return;
    
    const cache = storage === 'local' ? localStorageCache : memoryCache;
    const cacheKey = `fetch-${key}`;
    
    // Check cache first (unless forced fetch)
    if (!forceFetch) {
      const cachedData = cache.get<T>(cacheKey, { version });
      if (cachedData !== null) {
        if (isMountedRef.current) {
          setData(cachedData);
          setLoading(false);
        }
        return;
      }
    }
    
    // If not in cache or forced fetch, make the API call
    if (isMountedRef.current) {
      setLoading(true);
    }
    
    let attempt = 0;
    let lastError: Error | null = null;
    
    while (attempt <= retries) {
      try {
        // If not the first attempt, wait before retrying
        if (attempt > 0) {
          await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
        }
        
        const response = await fetch(url, fetchOptions);
        
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        
        const result = await response.json();
        
        // Store in cache
        cache.set<T>(cacheKey, result, { ttl, version });
        
        if (isMountedRef.current) {
          setData(result);
          setError(null);
          setLoading(false);
        }
        
        return;
      } catch (err) {
        lastError = err instanceof Error ? err : new Error('An unknown error occurred');
        attempt++;
      }
    }
    
    // All retries failed
    if (isMountedRef.current) {
      setError(lastError);
      setLoading(false);
    }
  }, [url, key, ttl, storage, version, retries, retryDelay, fetchOptions, skipCondition]);
  
  React.useEffect(() => {
    isMountedRef.current = true;
    fetchData();
    
    // Set up revalidation on focus if enabled
    if (revalidateOnFocus && typeof window !== 'undefined') {
      const handleFocus = () => fetchData(true);
      window.addEventListener('focus', handleFocus);
      
      // Set up revalidation on reconnect if enabled
      let connectionHandler: any;
      if (revalidateOnReconnect && 'connection' in navigator) {
        connectionHandler = () => {
          if (navigator.onLine) {
            fetchData(true);
          }
        };
        window.addEventListener('online', connectionHandler);
      }
      
      return () => {
        isMountedRef.current = false;
        window.removeEventListener('focus', handleFocus);
        if (connectionHandler) {
          window.removeEventListener('online', connectionHandler);
        }
      };
    }
    
    return () => {
      isMountedRef.current = false;
    };
  }, [fetchData, revalidateOnFocus, revalidateOnReconnect, ...dependencies]);
  
  return { 
    data, 
    loading, 
    error, 
    refetch: () => fetchData(true),
    mutate: (newData: T) => {
      setData(newData);
      
      // Update cache
      const cache = storage === 'local' ? localStorageCache : memoryCache;
      const cacheKey = `fetch-${key}`;
      cache.set<T>(cacheKey, newData, { ttl, version });
    }
  };
}
