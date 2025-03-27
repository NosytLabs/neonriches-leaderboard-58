
/**
 * Simple in-memory cache utility for data
 */

interface CacheItem<T> {
  data: T;
  timestamp: number;
}

class CacheManager {
  private cache: Map<string, CacheItem<any>> = new Map();
  private defaultExpiry: number = 5 * 60 * 1000; // 5 minutes in milliseconds

  /**
   * Set an item in the cache
   * @param key The cache key
   * @param data The data to cache
   * @param expiryMs Optional expiry time in milliseconds
   */
  set<T>(key: string, data: T, expiryMs?: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now() + (expiryMs || this.defaultExpiry)
    });
  }

  /**
   * Get an item from the cache
   * @param key The cache key
   * @returns The cached data or null if expired or not found
   */
  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    // Return null if item doesn't exist
    if (!item) return null;
    
    // Check if item has expired
    if (Date.now() > item.timestamp) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data as T;
  }

  /**
   * Remove an item from the cache
   * @param key The cache key
   */
  remove(key: string): void {
    this.cache.delete(key);
  }

  /**
   * Clear all items from the cache
   */
  clear(): void {
    this.cache.clear();
  }
}

// Create and export a singleton instance
export const cacheManager = new CacheManager();

/**
 * Wraps an async function with caching capability
 * @param fn The async function to cache
 * @param keyFn Function to generate a cache key from the arguments
 * @param expiryMs Optional cache expiry time in milliseconds
 * @returns Cached function result
 */
export function withCache<T, Args extends any[]>(
  fn: (...args: Args) => Promise<T>,
  keyFn: (...args: Args) => string,
  expiryMs?: number
): (...args: Args) => Promise<T> {
  return async (...args: Args): Promise<T> => {
    const cacheKey = keyFn(...args);
    const cachedResult = cacheManager.get<T>(cacheKey);
    
    if (cachedResult !== null) {
      return cachedResult;
    }
    
    const result = await fn(...args);
    cacheManager.set(cacheKey, result, expiryMs);
    return result;
  };
}
