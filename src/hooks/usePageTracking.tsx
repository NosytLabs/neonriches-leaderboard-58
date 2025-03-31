
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Simplified hook to track page views and scroll to top on page change
 */
const usePageTracking = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Log basic page view information
    console.log(`Page view: ${location.pathname}`);
    
    // Scroll to top on page change (most important functionality)
    window.scrollTo(0, 0);
  }, [location.pathname]);
};

export default usePageTracking;
