
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
  purchaseFeatureIndividually: (featureId: string) => Promise<boolean>;
  getMarketingFeaturePriceId: (featureId: string) => string | null;
}

// This hook checks if the user has access to specific features
export function useFeatureAccess(): FeatureAccessHook {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [hasActiveSubscription, setHasActiveSubscription] = useState(false);

  // Feature to tier mapping - maps each feature to the minimum tier required
  const featureToTierMap: Record<string, string> = {
    // Free tier features (available to all users)
    'basic_profile': 'free',
    'leaderboard_presence': 'free',
    'team_affiliation': 'free',
    'profile_boost_eligible': 'free',
    'basic_marketing': 'free',
    
    // Standard tier features
    'weekly_events_access': 'standard',
    
    // Premium tier features
    'premium_profile': 'premium',
    'multiple_images': 'premium',
    'multiple_links': 'premium',
    'rgb_borders': 'premium',
    'video_embeds': 'premium',
    'analytics_basic': 'premium',
    'marketing_dashboard': 'premium',
    'profile_promotion': 'premium',
    
    // Royal tier features
    'royal_styling': 'royal',
    'permanent_boost': 'royal',
    'exclusive_effects': 'royal',
    'mockery_immunity': 'royal',
    'analytics_advanced': 'royal',
    'team_leadership': 'royal',
    'priority_placement': 'royal',
    'audience_demographics': 'royal'
  };

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        // Check if the user has an active subscription
        const hasSubscription = Boolean(
          user?.subscription && 
          user.subscription.status === 'active' &&
          user.subscription.tier !== 'free'
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
    
    // Everyone has access to free tier features
    const requiredTier = featureToTierMap[featureName] || 'royal';
    if (requiredTier === 'free') return true;
    
    // Check if user has individually purchased this feature
    if (user.purchasedFeatures && user.purchasedFeatures.includes(featureName)) {
      return true;
    }
    
    const userTier = user.subscription?.tier || user.tier || 'free';
    
    // Tier hierarchy for access control
    const tierHierarchy = {
      'free': 0,
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
  
  // Function to purchase a feature individually
  const purchaseFeatureIndividually = async (featureId: string): Promise<boolean> => {
    // In a real app, this would redirect to a Stripe checkout or similar
    console.log(`Purchasing feature ${featureId} individually`);
    
    // Mock implementation - in real app this would call a payment gateway
    try {
      // Here we would actually call the payment API
      const success = true; // Mock success
      
      if (success && user) {
        // In a real app, this would be handled by a webhook after successful payment
        const purchasedFeatures = user.purchasedFeatures || [];
        if (!purchasedFeatures.includes(featureId)) {
          purchasedFeatures.push(featureId);
          // Update user profile - this is just mock code
          // In a real app, this would be handled server-side
          console.log(`Feature ${featureId} purchased successfully!`);
        }
      }
      
      return success;
    } catch (error) {
      console.error('Error purchasing feature:', error);
      return false;
    }
  };
  
  // Get the price ID for a marketing feature
  const getMarketingFeaturePriceId = (featureId: string): string | null => {
    // In a real app, this would look up the price ID from your backend or config
    // Mock implementation
    const priceIdMap: Record<string, string> = {
      'basic_analytics': 'price_marketing_basic_analytics',
      'advanced_analytics': 'price_marketing_advanced_analytics',
      'promotion_tools': 'price_marketing_promotion_tools',
      'audience_insights': 'price_marketing_audience_insights'
    };
    
    return priceIdMap[featureId] || null;
  };

  return {
    hasActiveSubscription,
    isLoading,
    canAccessFeature,
    requiredTierForFeature,
    hasAccess,
    purchaseFeatureIndividually,
    getMarketingFeaturePriceId
  };
}
