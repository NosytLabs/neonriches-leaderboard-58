
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { PRODUCT_FEATURES } from '@/config/subscriptions';

// Define a Feature type to use in the FeatureAccessCard component
export type Feature = string;

export interface FeatureAccessHook {
  hasActiveSubscription: boolean;
  isLoading: boolean;
  canAccessFeature: (featureName: string) => boolean;
  requiredTierForFeature: (featureName: string) => string;
  hasAccess: (featureName: Feature) => boolean;
}

// This hook checks if the user has access to specific features
export function useFeatureAccess(): FeatureAccessHook {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [hasActiveSubscription, setHasActiveSubscription] = useState(false);

  // Feature to tier mapping - maps each feature to the minimum tier required
  const featureToTierMap: Record<string, string> = {
    // Basic tier features (available to all users)
    'basic_profile': 'standard',
    'leaderboard_presence': 'standard',
    'team_affiliation': 'standard',
    'profile_boost_eligible': 'standard',
    
    // Premium tier features
    'premium_profile': 'premium',
    'multiple_images': 'premium',
    'multiple_links': 'premium',
    'rgb_borders': 'premium',
    'video_embeds': 'premium',
    'analytics_basic': 'premium',
    'discount_boosts': 'premium',
    
    // Royal tier features
    'royal_styling': 'royal',
    'permanent_boost': 'royal',
    'exclusive_effects': 'royal',
    'mockery_immunity': 'royal',
    'analytics_advanced': 'royal',
    'team_leadership': 'royal'
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
    const userTier = user.subscription?.tier || user.tier || 'standard';
    
    // Tier hierarchy for access control
    const tierHierarchy = {
      'standard': 1,
      'premium': 2,
      'royal': 3
    };
    
    // Get numeric values for comparison
    const requiredLevel = tierHierarchy[requiredTier as keyof typeof tierHierarchy] || 0;
    const userLevel = tierHierarchy[userTier as keyof typeof tierHierarchy] || 0;
    
    // User can access if their tier is equal or higher than required
    return userLevel >= requiredLevel;
  };

  // Get the required tier for a feature
  const requiredTierForFeature = (featureName: string): string => {
    return featureToTierMap[featureName] || 'premium';
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
