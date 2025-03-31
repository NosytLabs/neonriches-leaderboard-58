
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Optimized hook to track page views
 */
const usePageTracking = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Log basic page view information
    console.log(`Page view: ${location.pathname}`);
    
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [location.pathname]);
};

export default usePageTracking;
