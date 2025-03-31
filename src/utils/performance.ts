
/**
 * Core performance monitoring and optimization utilities
 */
import { useEffect, useRef } from 'react';

// Web Vitals measurement categories
type WebVitalMetric = {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
};

// Initialize performance monitoring
export const initPerformanceMonitoring = (): void => {
  if (typeof window === 'undefined') return;
  
  // Record Core Web Vitals when browser supports it
  if ('PerformanceObserver' in window) {
    // LCP (Largest Contentful Paint)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        const lcp = lastEntry.startTime;
        
        // Categorize the result
        const rating = lcp < 2500 ? 'good' : lcp < 4000 ? 'needs-improvement' : 'poor';
        
        console.info(`[CWV] LCP: ${lcp.toFixed(2)}ms (${rating})`);
        saveWebVitalMetric('LCP', lcp, rating);
      });
      
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      console.warn('LCP measurement not supported', e);
    }
    
    // FID (First Input Delay)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const fid = entry.processingStart - entry.startTime;
          const rating = fid < 100 ? 'good' : fid < 300 ? 'needs-improvement' : 'poor';
          
          console.info(`[CWV] FID: ${fid.toFixed(2)}ms (${rating})`);
          saveWebVitalMetric('FID', fid, rating);
        });
      });
      
      fidObserver.observe({ type: 'first-input', buffered: true });
    } catch (e) {
      console.warn('FID measurement not supported', e);
    }
    
    // CLS (Cumulative Layout Shift)
    try {
      let clsValue = 0;
      let clsEntries = 0;
      
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Only count layout shifts without recent user input
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            clsEntries++;
            
            const rating = clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor';
            
            console.info(`[CWV] CLS: ${clsValue.toFixed(3)} (${rating})`);
            saveWebVitalMetric('CLS', clsValue, rating);
          }
        });
      });
      
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      console.warn('CLS measurement not supported', e);
    }
  }
  
  // Navigation Timing API
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (performance.getEntriesByType) {
        const perfEntries = performance.getEntriesByType('navigation');
        if (perfEntries.length > 0) {
          const timing = perfEntries[0] as PerformanceNavigationTiming;
          
          // Calculate important times
          const dnsTime = timing.domainLookupEnd - timing.domainLookupStart;
          const connectionTime = timing.connectEnd - timing.connectStart;
          const responseTime = timing.responseEnd - timing.responseStart;
          const domProcessingTime = timing.domComplete - timing.domInteractive;
          const loadEventTime = timing.loadEventEnd - timing.loadEventStart;
          const totalPageLoadTime = timing.loadEventEnd - timing.navigationStart;
          
          console.info('[Performance] DNS lookup:', dnsTime.toFixed(2), 'ms');
          console.info('[Performance] Connection time:', connectionTime.toFixed(2), 'ms');
          console.info('[Performance] Response time:', responseTime.toFixed(2), 'ms');
          console.info('[Performance] DOM processing:', domProcessingTime.toFixed(2), 'ms');
          console.info('[Performance] Load event:', loadEventTime.toFixed(2), 'ms');
          console.info('[Performance] Total page load:', totalPageLoadTime.toFixed(2), 'ms');
        }
      }
    }, 0);
  });
};

// Save metrics for later reporting/analysis
const saveWebVitalMetric = (name: string, value: number, rating: 'good' | 'needs-improvement' | 'poor') => {
  if (typeof window === 'undefined') return;
  
  window.__PERFORMANCE_METRICS = window.__PERFORMANCE_METRICS || [];
  window.__PERFORMANCE_METRICS.push({
    name,
    value,
    rating,
    timestamp: Date.now()
  });
};

// Declare global space for metrics
declare global {
  interface Window {
    __PERFORMANCE_METRICS?: WebVitalMetric[];
  }
}

// Hook for component-level performance tracking
export const useComponentPerformance = (componentName: string) => {
  const renderCount = useRef(0);
  const lastRenderTime = useRef(Date.now());
  
  useEffect(() => {
    renderCount.current += 1;
    const now = Date.now();
    const renderTime = now - lastRenderTime.current;
    
    // Only log slow renders (above 50ms) to avoid console spam
    if (renderTime > 50) {
      console.info(`[Component] ${componentName} rendered in ${renderTime}ms (render #${renderCount.current})`);
    }
    
    lastRenderTime.current = now;
    
    return () => {
      // Cleanup if needed
    };
  });
  
  return {
    renderCount: renderCount.current
  };
};

// Image preload utility
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Resource hint utilities
export const addPreconnect = (url: string, crossOrigin: boolean = true) => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = url;
  if (crossOrigin) {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
};

export const addPrefetch = (url: string, as: string = 'image') => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  link.as = as;
  document.head.appendChild(link);
};

// Lazy loaded image intersection observer controller (better than browser native lazy loading)
export const createLazyImageObserver = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null;
  
  return new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement;
          if (lazyImage.dataset.src) {
            lazyImage.src = lazyImage.dataset.src;
            delete lazyImage.dataset.src;
          }
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    },
    { rootMargin: '200px 0px' } // Start loading when within 200px of viewport
  );
};

// Create a singleton observer instance for reuse
let lazyImageObserver: IntersectionObserver | null = null;

export const getLazyImageObserver = () => {
  if (!lazyImageObserver) {
    lazyImageObserver = createLazyImageObserver();
  }
  return lazyImageObserver;
};
