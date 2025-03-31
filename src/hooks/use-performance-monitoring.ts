
import { useEffect, useRef } from 'react';
import { markComponentRenderStart, markComponentRenderEnd, initPerformanceMonitoring } from '@/utils/performanceMonitoring';

export const usePerformanceMonitoring = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      initPerformanceMonitoring();
      isInitialized.current = true;
      
      // Log the first contentful paint
      if ('performance' in window && 'getEntriesByType' in performance) {
        // Wait for load event to ensure FCP has happened
        window.addEventListener('load', () => {
          setTimeout(() => {
            const paintEntries = performance.getEntriesByType('paint');
            const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
            
            if (fcpEntry) {
              console.info(`[Performance] FCP: ${fcpEntry.startTime.toFixed(2)}ms`);
            }
            
            // Track Largest Contentful Paint
            if ('PerformanceObserver' in window) {
              try {
                const lcpObserver = new PerformanceObserver((entryList) => {
                  const entries = entryList.getEntries();
                  const lastEntry = entries[entries.length - 1];
                  console.info(`[Performance] LCP: ${lastEntry.startTime.toFixed(2)}ms`);
                });
                
                lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
              } catch (error) {
                console.warn('[Performance] LCP monitoring not supported in this browser');
              }
            }
          }, 0);
        });
      }
    }
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return {
    markStart: markComponentRenderStart,
    markEnd: markComponentRenderEnd
  };
};

export default usePerformanceMonitoring;
