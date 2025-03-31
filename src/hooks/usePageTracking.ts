
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to track page views
 */
const usePageTracking = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Log the page view
    console.info(`Page view: ${location.pathname}`);
    
    // In a real app, this would send analytics data to a service
    // Example:
    // analytics.logPageView(location.pathname);
  }, [location]);
  
  return null;
};

export default usePageTracking;
