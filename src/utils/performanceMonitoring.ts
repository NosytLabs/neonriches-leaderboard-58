
/**
 * Core performance monitoring functionality
 */

// Types for performance metrics
interface PerformanceMetrics {
  LCP?: { value: number; quality: string };
  FID?: { value: number; quality: string };
  CLS?: { value: number; quality: string };
  INP?: { value: number; quality: string };
}

// Types for performance interactions
interface PerformanceInteraction {
  name: string;
  timestamp: number;
  duration: number;
}

// Global performance state
declare global {
  interface Window {
    __PERFORMANCE_MARKS?: Record<string, { start: number }>;
    __PERFORMANCE_METRICS?: PerformanceMetrics;
    __PERFORMANCE_INTERACTIONS?: PerformanceInteraction[];
  }
}

/**
 * Initializes performance monitoring for the application
 */
export const initPerformanceMonitoring = (): void => {
  if (typeof window === 'undefined') return;
  
  // Record navigation timing
  if (performance && 'getEntriesByType' in performance) {
    try {
      window.addEventListener('load', () => {
        setTimeout(recordNavigationTiming, 0);
      });
    } catch (error) {
      console.error('[Performance] Error measuring navigation timing:', error);
    }
  }
  
  // Core Web Vitals measurement
  if ('PerformanceObserver' in window) {
    try {
      observeLCP();
      observeFID();
      observeCLS();
      observeINP();
    } catch (error) {
      console.error('[Performance] Error measuring Core Web Vitals:', error);
    }
  }
  
  // Component render times in development
  if (process.env.NODE_ENV === 'development') {
    window.__PERFORMANCE_MARKS = window.__PERFORMANCE_MARKS || {};
    
    // Clear previous marks on page navigation
    window.addEventListener('popstate', () => {
      window.__PERFORMANCE_MARKS = {};
    });
  }
};

// Record navigation timing metrics
const recordNavigationTiming = (): void => {
  if (!performance || !('getEntriesByType' in performance)) return;
  
  const navigationEntries = performance.getEntriesByType('navigation');
  if (navigationEntries && navigationEntries.length > 0) {
    const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
    
    console.info(`[Performance] Page Load: ${navigationEntry.loadEventEnd.toFixed(2)}ms`);
    console.info(`[Performance] DOM Ready: ${navigationEntry.domContentLoadedEventEnd.toFixed(2)}ms`);
    console.info(`[Performance] TTFB: ${navigationEntry.responseStart.toFixed(2)}ms`);
  }
};

// Observe Largest Contentful Paint
const observeLCP = (): void => {
  const lcpObserver = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    const lcp = lastEntry.startTime;
    
    // Log LCP and assess quality
    const lcpQuality = lcp < 2500 ? 'Good' : lcp < 4000 ? 'Needs Improvement' : 'Poor';
    console.info(`[Core Web Vitals] LCP: ${lcp.toFixed(2)}ms (${lcpQuality})`);
    
    // Store for reporting
    window.__PERFORMANCE_METRICS = window.__PERFORMANCE_METRICS || {};
    window.__PERFORMANCE_METRICS.LCP = { value: lcp, quality: lcpQuality };
  });
  
  lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
};

// Observe First Input Delay
const observeFID = (): void => {
  const fidObserver = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      const fid = (entry as PerformanceEventTiming).processingStart - entry.startTime;
      
      // Log FID and assess quality
      const fidQuality = fid < 100 ? 'Good' : fid < 300 ? 'Needs Improvement' : 'Poor';
      console.info(`[Core Web Vitals] FID: ${fid.toFixed(2)}ms (${fidQuality})`);
      
      // Store for reporting
      window.__PERFORMANCE_METRICS = window.__PERFORMANCE_METRICS || {};
      window.__PERFORMANCE_METRICS.FID = { value: fid, quality: fidQuality };
    });
  });
  
  fidObserver.observe({ type: 'first-input', buffered: true });
};

// Observe Cumulative Layout Shift
const observeCLS = (): void => {
  const clsObserver = new PerformanceObserver((entryList) => {
    let clsValue = 0;
    
    entryList.getEntries().forEach(entry => {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
      }
    });
    
    // Log CLS and assess quality
    const clsQuality = clsValue < 0.1 ? 'Good' : clsValue < 0.25 ? 'Needs Improvement' : 'Poor';
    console.info(`[Core Web Vitals] CLS: ${clsValue.toFixed(3)} (${clsQuality})`);
    
    // Store for reporting
    window.__PERFORMANCE_METRICS = window.__PERFORMANCE_METRICS || {};
    window.__PERFORMANCE_METRICS.CLS = { value: clsValue, quality: clsQuality };
  });
  
  clsObserver.observe({ type: 'layout-shift', buffered: true });
};

// Observe Interaction to Next Paint
const observeINP = (): void => {
  try {
    // Support for newer INP metric
    const inpObserver = new PerformanceObserver((entryList) => {
      const interactions = entryList.getEntries();
      
      if (interactions.length > 0) {
        // Get the 95th percentile for INP
        const values = interactions.map(entry => entry.duration).sort((a, b) => a - b);
        const inp = values[Math.floor(values.length * 0.95)];
        
        // Log INP and assess quality
        const inpQuality = inp < 200 ? 'Good' : inp < 500 ? 'Needs Improvement' : 'Poor';
        console.info(`[Core Web Vitals] INP: ${inp.toFixed(2)}ms (${inpQuality})`);
        
        // Store for reporting
        window.__PERFORMANCE_METRICS = window.__PERFORMANCE_METRICS || {};
        window.__PERFORMANCE_METRICS.INP = { value: inp, quality: inpQuality };
      }
    });
    
    // This has custom options that may not be supported in all browsers
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    inpObserver.observe({ type: 'event', buffered: true, durationThreshold: 16 });
  } catch (error) {
    console.warn('[Performance] INP metric not supported in this browser');
  }
};

/**
 * Mark the start of a component render
 */
export const markComponentRenderStart = (componentName: string): void => {
  if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') return;
  
  if (performance && 'mark' in performance) {
    try {
      performance.mark(`${componentName}-start`);
      window.__PERFORMANCE_MARKS = window.__PERFORMANCE_MARKS || {};
      window.__PERFORMANCE_MARKS[componentName] = { start: Date.now() };
    } catch (error) {
      console.error(`[Performance] Error marking ${componentName} start:`, error);
    }
  }
};

/**
 * Mark the end of a component render and log the duration
 */
export const markComponentRenderEnd = (componentName: string): void => {
  if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') return;
  
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
};

/**
 * Track a user interaction for performance analysis
 */
export const trackUserInteraction = (actionName: string, callback: () => void): void => {
  if (typeof window === 'undefined') return;
  
  const startTime = performance.now();
  
  // Execute the callback
  callback();
  
  // Measure the time taken
  const endTime = performance.now();
  const duration = endTime - startTime;
  
  // Warn if interaction took too long
  if (duration > 100) {
    console.warn(`[Performance] User interaction '${actionName}' took ${duration.toFixed(2)}ms - consider optimizing`);
  }
  
  // Record the interaction
  window.__PERFORMANCE_INTERACTIONS = window.__PERFORMANCE_INTERACTIONS || [];
  window.__PERFORMANCE_INTERACTIONS.push({
    name: actionName,
    timestamp: Date.now(),
    duration
  });
};

/**
 * Get a summary of performance metrics
 */
export const getPerformanceSummary = (): Record<string, any> => {
  if (typeof window === 'undefined') return {};
  
  return {
    metrics: window.__PERFORMANCE_METRICS || {},
    interactions: window.__PERFORMANCE_INTERACTIONS || [],
    navigation: performance.getEntriesByType('navigation')[0] || {}
  };
};
