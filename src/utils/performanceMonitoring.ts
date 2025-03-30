
/**
 * Initializes performance monitoring for the application
 */
export const initPerformanceMonitoring = (): void => {
  if (typeof window !== 'undefined') {
    // Record navigation timing
    if (performance && 'getEntriesByType' in performance) {
      try {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigationEntries = performance.getEntriesByType('navigation');
            if (navigationEntries && navigationEntries.length > 0) {
              const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
              
              console.info(`[Performance] Page Load: ${navigationEntry.loadEventEnd.toFixed(2)}ms`);
              console.info(`[Performance] DOM Ready: ${navigationEntry.domContentLoadedEventEnd.toFixed(2)}ms`);
              console.info(`[Performance] TTFB: ${navigationEntry.responseStart.toFixed(2)}ms`);
            }
          }, 0);
        });
      } catch (error) {
        console.error('[Performance] Error measuring navigation timing:', error);
      }
    }
    
    // Measure component render times
    if (process.env.NODE_ENV === 'development') {
      // Only in development mode to avoid impacting production
      window.__PERFORMANCE_MARKS = window.__PERFORMANCE_MARKS || {};
      
      // Clear previous marks on page navigation
      window.addEventListener('popstate', () => {
        window.__PERFORMANCE_MARKS = {};
      });
    }
  }
};

/**
 * Mark the start of a component render
 */
export const markComponentRenderStart = (componentName: string): void => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    if (performance && 'mark' in performance) {
      try {
        performance.mark(`${componentName}-start`);
        window.__PERFORMANCE_MARKS = window.__PERFORMANCE_MARKS || {};
        window.__PERFORMANCE_MARKS[componentName] = { start: Date.now() };
      } catch (error) {
        console.error(`[Performance] Error marking ${componentName} start:`, error);
      }
    }
  }
};

/**
 * Mark the end of a component render and log the duration
 */
export const markComponentRenderEnd = (componentName: string): void => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    if (performance && 'mark' in performance && 'measure' in performance && window.__PERFORMANCE_MARKS?.[componentName]) {
      try {
        performance.mark(`${componentName}-end`);
        performance.measure(componentName, `${componentName}-start`, `${componentName}-end`);
        
        const startTime = window.__PERFORMANCE_MARKS[componentName].start;
        const duration = Date.now() - startTime;
        
        // Only log if render took more than 16ms (1 frame at 60fps)
        if (duration > 16) {
          console.info(`[Performance] ${componentName} rendered in ${duration}ms`);
        }
        
        // Clean up
        delete window.__PERFORMANCE_MARKS[componentName];
      } catch (error) {
        console.error(`[Performance] Error measuring ${componentName}:`, error);
      }
    }
  }
};

// Add a type for the global window object
declare global {
  interface Window {
    __PERFORMANCE_MARKS?: Record<string, { start: number }>;
  }
}
