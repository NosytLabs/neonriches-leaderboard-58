
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view
    console.log('Page view:', location.pathname);
  }, [location]);
};

export default usePageTracking;
