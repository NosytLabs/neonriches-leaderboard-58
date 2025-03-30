
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to track page views
 */
const usePageTracking = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Log page view to console (in a real app, this would send to analytics)
    console.log(`Page view: ${location.pathname}`);
    
    // You could implement real analytics tracking here
    // Example: send to Google Analytics, Supabase, etc.
    
    // Track page title
    const pageTitle = document.title;
    console.log(`Page title: ${pageTitle}`);
    
  }, [location.pathname]);
};

export default usePageTracking;
