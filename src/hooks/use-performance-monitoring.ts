
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
            
            // Log LCP metrics if available
            if ('PerformanceObserver' in window) {
              try {
                const lcpObserver = new PerformanceObserver((entryList) => {
                  const entries = entryList.getEntries();
                  const lastEntry = entries[entries.length - 1];
                  console.info(`[Performance] LCP: ${lastEntry.startTime.toFixed(2)}ms`);
                  
                  // Analyze resource loading for LCP element
                  if ('element' in lastEntry) {
                    const lcpElement = lastEntry.element;
                    if (lcpElement) {
                      const tagName = lcpElement.tagName.toLowerCase();
                      console.info(`[Performance] LCP element: <${tagName}>`);
                      
                      // Check if it was preloaded
                      if (tagName === 'img') {
                        const src = (lcpElement as HTMLImageElement).src;
                        const wasPreloaded = document.querySelector(`link[rel="preload"][href="${src}"]`);
                        console.info(`[Performance] LCP image ${src} was ${wasPreloaded ? 'preloaded ✅' : 'not preloaded ❌'}`);
                      }
                    }
                  }
                });
                
                lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
              } catch (error) {
                console.warn('[Performance] LCP monitoring error:', error);
              }
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
