
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to track page views and improve loading performance
 */
const usePageTracking = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Mark navigation start for performance tracking
    if (window.performance && performance.mark) {
      performance.mark('page_navigation_start');
    }
    
    // Log page view
    console.log(`Page view: ${location.pathname}`);
    
    // Mark navigation end and measure navigation time
    if (window.performance && performance.mark && performance.measure) {
      performance.mark('page_navigation_end');
      performance.measure('page_navigation', 'page_navigation_start', 'page_navigation_end');
      
      const measures = performance.getEntriesByName('page_navigation');
      if (measures.length > 0) {
        console.log(`Navigation time: ${measures[0].duration.toFixed(2)}ms`);
      }
    }
    
    // Scroll to top on page change
    window.scrollTo(0, 0);
    
    // Clean up
    return () => {
      if (window.performance && performance.clearMarks) {
        performance.clearMarks('page_navigation_start');
        performance.clearMarks('page_navigation_end');
      }
    };
  }, [location.pathname]);
};

export default usePageTracking;
