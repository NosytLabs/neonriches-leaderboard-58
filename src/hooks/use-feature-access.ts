
import { useAuth } from '@/contexts/auth';

interface FeatureAccessHook {
  canAccessFeature: (featureId: string) => boolean;
  isUserPro: boolean;
  isUserRoyal: boolean;
  getUserTier: () => string;
}

/**
 * Custom hook for checking feature access based on user tier
 */
export const useFeatureAccess = (): FeatureAccessHook => {
  const { user } = useAuth();
  
  // Premium tier hierarchy from lowest to highest
  const tierHierarchy = ['basic', 'bronze', 'silver', 'gold', 'premium', 'royal'];
  
  /**
   * Check if user has access to a specific feature
   */
  const canAccessFeature = (featureId: string): boolean => {
    if (!user) return false;
    
    // Check if user has directly purchased the feature
    if (user.purchasedFeatures && user.purchasedFeatures.includes(featureId)) {
      return true;
    }
    
    // Check feature access based on tier
    const userTier = getUserTier();
    
    // Define which features are available at which tiers
    const tierFeatures: Record<string, string[]> = {
      'basic': [
        'basic_profile',
        'basic_mockery',
        'leaderboard_view'
      ],
      'bronze': [
        'basic_profile',
        'basic_mockery',
        'leaderboard_view',
        'profile_badges',
        'basic_analytics'
      ],
      'silver': [
        'basic_profile',
        'basic_mockery',
        'leaderboard_view',
        'profile_badges',
        'basic_analytics',
        'silver_mockery',
        'team_benefits'
      ],
      'gold': [
        'basic_profile',
        'basic_mockery',
        'leaderboard_view',
        'profile_badges',
        'basic_analytics',
        'silver_mockery',
        'team_benefits',
        'gold_mockery',
        'profile_animations',
        'marketing_dashboard'
      ],
      'premium': [
        'basic_profile',
        'basic_mockery',
        'leaderboard_view',
        'profile_badges',
        'basic_analytics',
        'silver_mockery',
        'team_benefits',
        'gold_mockery',
        'profile_animations',
        'marketing_dashboard',
        'premium_mockery',
        'advanced_analytics',
        'custom_profile'
      ],
      'royal': [
        'basic_profile',
        'basic_mockery',
        'leaderboard_view',
        'profile_badges',
        'basic_analytics',
        'silver_mockery',
        'team_benefits',
        'gold_mockery',
        'profile_animations',
        'marketing_dashboard',
        'premium_mockery',
        'advanced_analytics',
        'custom_profile',
        'royal_mockery',
        'royal_protection',
        'custom_titles',
        'featured_placement'
      ]
    };
    
    // Get features available for user's tier
    const availableFeatures = tierFeatures[userTier] || tierFeatures.basic;
    
    return availableFeatures.includes(featureId);
  };
  
  /**
   * Get user's subscription tier
   */
  const getUserTier = (): string => {
    if (!user) return 'basic';
    
    // Check for the tier from user object
    const tier = user.tier || 'basic';
    
    return tier.toLowerCase();
  };
  
  /**
   * Check if user has a pro-level subscription
   */
  const isUserPro = (): boolean => {
    const userTier = getUserTier();
    const proTiers = ['gold', 'premium', 'royal'];
    
    return proTiers.includes(userTier);
  };
  
  /**
   * Check if user has royal tier
   */
  const isUserRoyal = (): boolean => {
    return getUserTier() === 'royal';
  };
  
  return {
    canAccessFeature,
    isUserPro: isUserPro(),
    isUserRoyal: isUserRoyal(),
    getUserTier
  };
};

export default useFeatureAccess;
