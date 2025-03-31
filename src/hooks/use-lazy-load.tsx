
import { lazy, ComponentType, Suspense, useState, useEffect } from 'react';

/**
 * A hook for lazy loading components with performance tracking
 * @param factory Function that imports the component
 * @param fallback Component to display while loading
 * @returns The lazy loaded component wrapped in Suspense
 */
export function useLazyLoad<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  fallback: React.ReactNode = null
) {
  const [loadTime, setLoadTime] = useState<number | null>(null);
  const startTime = performance.now();
  
  const LazyComponent = lazy(() => {
    return factory().then(module => {
      const endTime = performance.now();
      setLoadTime(endTime - startTime);
      return module;
    });
  });
  
  // Log performance metrics
  useEffect(() => {
    if (loadTime !== null) {
      console.info(`Component loaded in ${loadTime.toFixed(2)}ms`);
    }
  }, [loadTime]);
  
  // Create a function component that wraps the lazy component in Suspense
  const Component = (props: React.ComponentProps<T>) => (
    <Suspense fallback={fallback || <div className="animate-pulse h-20 w-full bg-gray-200 rounded-md"></div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
  
  return Component;
}

/**
 * A utility for code splitting by route
 * @param factory Function that imports the page component
 * @returns The lazy loaded page component
 */
export function lazyLoadPage<T extends ComponentType<any>>(factory: () => Promise<{ default: T }>) {
  const startTime = performance.now();
  
  const LazyPage = lazy(() => {
    return factory().then(module => {
      const endTime = performance.now();
      console.info(`Page loaded in ${endTime - startTime}ms`);
      return module;
    });
  });
  
  return LazyPage;
}
