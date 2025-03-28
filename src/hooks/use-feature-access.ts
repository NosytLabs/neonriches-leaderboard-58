
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

// Define a Feature type to use in the FeatureAccessCard component
export type Feature = string;

export interface FeatureAccessHook {
  hasActiveSubscription: boolean;
  isLoading: boolean;
  canAccessFeature: (featureName: string) => boolean;
  requiredTierForFeature: (featureName: string) => string;
  hasAccess: (featureName: Feature) => boolean; // Added missing method
}

// This hook checks if the user has access to specific features
export function useFeatureAccess(): FeatureAccessHook {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [hasActiveSubscription, setHasActiveSubscription] = useState(false);

  // Feature to tier mapping
  const featureToTierMap: Record<string, string> = {
    'basic-profile': 'free',
    'profile-views': 'free',
    'single-link': 'free',
    'basic-customization': 'free',
    'extended-profile': 'pro',
    'multiple-images': 'pro',
    'multiple-links': 'pro',
    'rgb-customization': 'pro',
    'video-embeds': 'pro',
    'click-tracking': 'pro',
    'html-marketing': 'royal',
    'premium-effects': 'royal',
    'boosted-visibility': 'royal',
    'priority-placement': 'royal',
    'exclusive-cosmetics': 'royal'
  };

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        // Check if the user has an active subscription
        const hasSubscription = Boolean(
          user?.subscription && 
          user.subscription.status === 'active'
        );
        
        setHasActiveSubscription(hasSubscription);
      } catch (error) {
        console.error("Error checking subscription:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSubscription();
  }, [user]);

  // Check if the user can access a specific feature
  const canAccessFeature = (featureName: string): boolean => {
    if (!user) return false;
    
    const requiredTier = featureToTierMap[featureName] || 'royal';
    const userTier = user.subscription?.tier || user.tier || 'free';
    
    // Tier hierarchy for access control
    const tierHierarchy = {
      'free': 0,
      'crab': 1,
      'fish': 2,
      'octopus': 3,
      'dolphin': 4,
      'shark': 5,
      'whale': 6,
      'pro': 7,
      'royal': 8
    };
    
    // Get numeric values for comparison
    const requiredLevel = tierHierarchy[requiredTier as keyof typeof tierHierarchy] || 0;
    const userLevel = tierHierarchy[userTier as keyof typeof tierHierarchy] || 0;
    
    // User can access if their tier is equal or higher than required
    return userLevel >= requiredLevel;
  };

  // Get the required tier for a feature
  const requiredTierForFeature = (featureName: string): string => {
    return featureToTierMap[featureName] || 'pro';
  };

  // Add the hasAccess method as an alias to canAccessFeature for consistency
  const hasAccess = (featureName: Feature): boolean => {
    return canAccessFeature(featureName);
  };

  return {
    hasActiveSubscription,
    isLoading,
    canAccessFeature,
    requiredTierForFeature,
    hasAccess
  };
}
