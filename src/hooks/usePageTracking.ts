
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/auth';

/**
 * Hook to track page views in Supabase analytics
 */
export const usePageTracking = () => {
  const location = useLocation();
  const { user } = useAuth();
  
  useEffect(() => {
    const trackPageView = async () => {
      try {
        // Record page view in analytics
        await supabase
          .from('page_views')
          .insert({
            path: location.pathname,
            user_id: user?.id || null,
            referrer: document.referrer || null,
            user_agent: navigator.userAgent
          });
      } catch (error) {
        // Silent fail - don't break the app if analytics fails
        console.error('Analytics error:', error);
      }
    };
    
    trackPageView();
  }, [location.pathname, user?.id]);
};

export default usePageTracking;
