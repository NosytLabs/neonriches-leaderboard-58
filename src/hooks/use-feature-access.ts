
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/auth';
import { verifySubscription } from '@/services/stripeService';

export type Feature = 
  | 'premium_profile' 
  | 'wishing_well' 
  | 'analytics' 
  | 'profile_boost' 
  | 'custom_themes'
  | 'royal_benefits'
  | 'all_cosmetics';

interface UseFeatureAccessReturn {
  isLoading: boolean;
  hasAccess: (feature: Feature) => boolean;
  allFeatures: Feature[];
  activeFeatures: string[];
  hasActiveSubscription: boolean;
}

export function useFeatureAccess(): UseFeatureAccessReturn {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [activeFeatures, setActiveFeatures] = useState<string[]>([]);
  const [hasActiveSubscription, setHasActiveSubscription] = useState(false);

  // All available features
  const allFeatures: Feature[] = [
    'premium_profile',
    'wishing_well',
    'analytics',
    'profile_boost',
    'custom_themes',
    'royal_benefits',
    'all_cosmetics'
  ];

  // Function to determine if a user has access to a specific feature
  const hasAccess = (feature: Feature): boolean => {
    if (!user) return false;
    
    // Basic features available to everyone
    if (['wishing_well'].includes(feature)) {
      return true;
    }
    
    // Legacy check for users with existing subscription in their profile
    if (user.subscription && user.subscription.status === 'active') {
      if (user.subscription.tier === 'pro') {
        // Pro tier has access to all features
        return true;
      }
    }
    
    // Check against verified Stripe features
    return activeFeatures.includes(feature);
  };

  useEffect(() => {
    const checkSubscription = async () => {
      if (!user) {
        setIsLoading(false);
        setActiveFeatures([]);
        setHasActiveSubscription(false);
        return;
      }

      setIsLoading(true);
      try {
        const result = await verifySubscription();
        
        if (result) {
          setActiveFeatures(result.activeFeatures);
          setHasActiveSubscription(result.hasActiveSubscription);
        }
      } catch (error) {
        console.error('Error checking subscription status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSubscription();
  }, [user]);

  return {
    isLoading,
    hasAccess,
    allFeatures,
    activeFeatures,
    hasActiveSubscription
  };
}
