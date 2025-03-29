
import { useEffect, useRef } from 'react';
import { initPerformanceMonitoring } from '@/utils/performanceMonitoring';

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
            const lcpObserver = new PerformanceObserver((entryList) => {
              const entries = entryList.getEntries();
              const lastEntry = entries[entries.length - 1];
              console.info(`[Performance] LCP: ${lastEntry.startTime.toFixed(2)}ms`);
            });
            
            lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
          }, 0);
        });
      }
    }
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};
