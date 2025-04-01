
import { useEffect, useRef, useCallback } from 'react';
import { markComponentRenderStart, markComponentRenderEnd, initPerformanceMonitoring } from '@/utils/performanceMonitoring';

export const usePerformanceMonitoring = () => {
  const isInitialized = useRef(false);

  // Memoize mark functions to prevent unnecessary re-renders
  const markStart = useCallback((componentName: string) => {
    markComponentRenderStart(componentName);
  }, []);
  
  const markEnd = useCallback((componentName: string) => {
    markComponentRenderEnd(componentName);
  }, []);

  // Initialize performance monitoring once
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
          }, 0);
        });
      }
    }
  }, []);

  return {
    markStart,
    markEnd
  };
};

export default usePerformanceMonitoring;
