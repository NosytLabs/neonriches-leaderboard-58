
/**
 * Enhanced cache utility with storage options, TTL, and versioning
 */

type StorageType = 'memory' | 'local' | 'session';

interface CacheItem<T> {
  data: T;
  expiry: number;
  version: string;
}

interface CacheOptions {
  expiry?: number; // milliseconds
  storage?: StorageType;
  version?: string;
}

// Default cache settings
const DEFAULT_CACHE_OPTIONS: CacheOptions = {
  expiry: 5 * 60 * 1000, // 5 minutes
  storage: 'memory',
  version: '1.0.0',
};

// App-wide cache version, increment when data structure changes
const APP_CACHE_VERSION = '1.0.0';

class EnhancedCacheManager {
  private memoryCache: Map<string, CacheItem<any>> = new Map();
  
  /**
   * Set an item in the cache
   */
  set<T>(key: string, data: T, options?: CacheOptions): void {
    const { expiry, storage, version } = { ...DEFAULT_CACHE_OPTIONS, ...options };
    const now = Date.now();
    const expiryTime = now + (expiry as number);
    const cacheVersion = version as string;
    
    const cacheItem: CacheItem<T> = {
      data,
      expiry: expiryTime,
      version: cacheVersion,
    };
    
    // Store based on the specified storage type
    switch (storage) {
      case 'local':
        try {
          localStorage.setItem(key, JSON.stringify(cacheItem));
        } catch (e) {
          console.warn('Failed to set item in localStorage:', e);
          // Fallback to memory cache
          this.memoryCache.set(key, cacheItem);
        }
        break;
        
      case 'session':
        try {
          sessionStorage.setItem(key, JSON.stringify(cacheItem));
        } catch (e) {
          console.warn('Failed to set item in sessionStorage:', e);
          // Fallback to memory cache
          this.memoryCache.set(key, cacheItem);
        }
        break;
        
      case 'memory':
      default:
        this.memoryCache.set(key, cacheItem);
        break;
    }
  }
  
  /**
   * Get an item from the cache
   */
  get<T>(key: string, options?: CacheOptions): T | null {
    const { storage, version } = { ...DEFAULT_CACHE_OPTIONS, ...options };
    const now = Date.now();
    const expectedVersion = version as string;
    
    let cacheItem: CacheItem<T> | null = null;
    
    // Retrieve based on the specified storage type
    switch (storage) {
      case 'local':
        try {
          const item = localStorage.getItem(key);
          if (item) {
            cacheItem = JSON.parse(item) as CacheItem<T>;
          }
        } catch (e) {
          console.warn('Failed to get item from localStorage:', e);
        }
        break;
        
      case 'session':
        try {
          const item = sessionStorage.getItem(key);
          if (item) {
            cacheItem = JSON.parse(item) as CacheItem<T>;
          }
        } catch (e) {
          console.warn('Failed to get item from sessionStorage:', e);
        }
        break;
        
      case 'memory':
      default:
        cacheItem = this.memoryCache.get(key) || null;
        break;
    }
    
    // Return null if no cache item exists
    if (!cacheItem) return null;
    
    // Check if cache item has expired
    if (now > cacheItem.expiry) {
      this.remove(key, options);
      return null;
    }
    
    // Check if versions match
    if (cacheItem.version !== expectedVersion) {
      this.remove(key, options);
      return null;
    }
    
    return cacheItem.data;
  }
  
  /**
   * Remove an item from the cache
   */
  remove(key: string, options?: CacheOptions): void {
    const { storage } = { ...DEFAULT_CACHE_OPTIONS, ...options };
    
    switch (storage) {
      case 'local':
        try {
          localStorage.removeItem(key);
        } catch (e) {
          console.warn('Failed to remove item from localStorage:', e);
        }
        break;
        
      case 'session':
        try {
          sessionStorage.removeItem(key);
        } catch (e) {
          console.warn('Failed to remove item from sessionStorage:', e);
        }
        break;
        
      case 'memory':
      default:
        this.memoryCache.delete(key);
        break;
    }
  }
  
  /**
   * Clear all items from a specific storage or all storages
   */
  clear(options?: { storage?: StorageType }): void {
    const { storage } = { ...DEFAULT_CACHE_OPTIONS, ...options };
    
    switch (storage) {
      case 'local':
        try {
          localStorage.clear();
        } catch (e) {
          console.warn('Failed to clear localStorage:', e);
        }
        break;
        
      case 'session':
        try {
          sessionStorage.clear();
        } catch (e) {
          console.warn('Failed to clear sessionStorage:', e);
        }
        break;
        
      case 'memory':
        this.memoryCache.clear();
        break;
        
      default:
        // Clear all storages
        this.memoryCache.clear();
        try {
          localStorage.clear();
          sessionStorage.clear();
        } catch (e) {
          console.warn('Failed to clear web storage:', e);
        }
        break;
    }
  }
  
  /**
   * Check if cache has a specific key
   */
  has(key: string, options?: CacheOptions): boolean {
    return this.get(key, options) !== null;
  }
  
  /**
   * Get all keys from the cache
   */
  keys(options?: CacheOptions): string[] {
    const { storage } = { ...DEFAULT_CACHE_OPTIONS, ...options };
    
    switch (storage) {
      case 'local':
        try {
          return Object.keys(localStorage);
        } catch (e) {
          console.warn('Failed to get keys from localStorage:', e);
          return [];
        }
        
      case 'session':
        try {
          return Object.keys(sessionStorage);
        } catch (e) {
          console.warn('Failed to get keys from sessionStorage:', e);
          return [];
        }
        
      case 'memory':
      default:
        return Array.from(this.memoryCache.keys());
    }
  }
  
  /**
   * Get cache stats
   */
  getStats(): { memoryItemCount: number, memorySize: number } {
    // Calculate memory cache size (approximate)
    let size = 0;
    
    this.memoryCache.forEach((value, key) => {
      size += JSON.stringify(key).length + JSON.stringify(value).length;
    });
    
    return {
      memoryItemCount: this.memoryCache.size,
      memorySize: size,
    };
  }
}

// Create and export a singleton instance
export const cacheManager = new EnhancedCacheManager();

/**
 * Wraps an async function with caching capability
 */
export function withCache<T, Args extends any[]>(
  fn: (...args: Args) => Promise<T>,
  keyFn: (...args: Args) => string,
  options?: CacheOptions
): (...args: Args) => Promise<T> {
  return async (...args: Args): Promise<T> => {
    const cacheKey = keyFn(...args);
    const cachedResult = cacheManager.get<T>(cacheKey, options);
    
    if (cachedResult !== null) {
      return cachedResult;
    }
    
    const result = await fn(...args);
    cacheManager.set(cacheKey, result, options);
    return result;
  };
}

/**
 * React hook to use cached data with automatic refreshing
 */
export function useCachedData<T, Args extends any[]>(
  fetchFn: (...args: Args) => Promise<T>,
  args: Args,
  options?: CacheOptions & {
    cacheKey?: string;
    staleTime?: number; // Time in ms before refreshing in background
    onSuccess?: (data: T) => void;
    onError?: (error: Error) => void;
  }
): { data: T | null; isLoading: boolean; error: Error | null; refresh: () => Promise<void> } {
  const mergedOptions = { ...DEFAULT_CACHE_OPTIONS, ...options };
  const {
    cacheKey: optionsCacheKey,
    staleTime = 0,
    onSuccess,
    onError,
    ...cacheOptions
  } = mergedOptions;
  
  const [state, setState] = React.useState<{
    data: T | null;
    isLoading: boolean;
    error: Error | null;
  }>({
    data: null,
    isLoading: true,
    error: null,
  });
  
  const cacheKey = optionsCacheKey || `react-cache:${JSON.stringify(args)}`;
  const lastFetchRef = React.useRef<number>(0);
  
  const fetchData = React.useCallback(async (skipCache = false) => {
    const fetchTime = Date.now();
    lastFetchRef.current = fetchTime;
    
    if (!skipCache) {
      const cached = cacheManager.get<T>(cacheKey, cacheOptions);
      if (cached !== null) {
        setState(prev => ({ ...prev, data: cached, isLoading: false }));
        
        // If data is stale, refresh in background
        if (staleTime && Date.now() - (cacheManager.get<number>(`${cacheKey}:timestamp`) || 0) > staleTime) {
          fetchData(true).catch(console.error);
        }
        
        return;
      }
    }
    
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const result = await fetchFn(...args);
      
      // Only update state if this is still the latest fetch
      if (lastFetchRef.current === fetchTime) {
        setState({ data: result, isLoading: false, error: null });
        cacheManager.set(cacheKey, result, cacheOptions);
        cacheManager.set(`${cacheKey}:timestamp`, Date.now(), {
          ...cacheOptions,
          expiry: (cacheOptions.expiry || DEFAULT_CACHE_OPTIONS.expiry) * 2
        });
        
        if (onSuccess) {
          onSuccess(result);
        }
      }
    } catch (error) {
      // Only update state if this is still the latest fetch
      if (lastFetchRef.current === fetchTime) {
        setState({ data: null, isLoading: false, error: error as Error });
        
        if (onError) {
          onError(error as Error);
        }
      }
    }
  }, [cacheKey, fetchFn, args, cacheOptions, staleTime, onSuccess, onError]);
  
  const refresh = React.useCallback(async () => {
    await fetchData(true);
  }, [fetchData]);
  
  // Initial data fetch
  React.useEffect(() => {
    fetchData().catch(console.error);
    
    // Clean up
    return () => {
      lastFetchRef.current = 0;
    };
  }, [fetchData]);
  
  return { ...state, refresh };
}
