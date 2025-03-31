
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { UserTier } from '@/types/team';

export type Feature = 
  | 'premium_mockery'
  | 'advanced_analytics'
  | 'custom_profile'
  | 'royal_certificate'
  | 'priority_support'
  | 'exclusive_cosmetics'
  | 'team_benefits'
  | 'mockery_protection'
  | 'marketing_dashboard';

interface FeatureAccessHook {
  isUserPro: boolean;
  canAccessFeature: (feature: Feature) => boolean;
  getUpgradeUrl: (featureId?: string) => string;
  getPricingForTier: (tier: UserTier) => number;
}

// Feature tiers map
const FEATURE_TIERS: Record<Feature, UserTier[]> = {
  premium_mockery: ['premium', 'royal', 'elite', 'legendary', 'founder'],
  advanced_analytics: ['premium', 'royal', 'elite', 'legendary', 'founder'],
  custom_profile: ['basic', 'premium', 'royal', 'elite', 'legendary', 'founder'],
  royal_certificate: ['royal', 'elite', 'legendary', 'founder'],
  priority_support: ['premium', 'royal', 'elite', 'legendary', 'founder'],
  exclusive_cosmetics: ['premium', 'royal', 'elite', 'legendary', 'founder'],
  team_benefits: ['basic', 'premium', 'royal', 'elite', 'legendary', 'founder'],
  mockery_protection: ['premium', 'royal', 'elite', 'legendary', 'founder'],
  marketing_dashboard: ['premium', 'royal', 'elite', 'legendary', 'founder']
};

// Tier pricing
const TIER_PRICING: Record<UserTier, number> = {
  free: 0,
  basic: 9.99,
  premium: 19.99,
  royal: 49.99,
  elite: 99.99,
  legendary: 199.99,
  founder: 499.99,
  pro: 29.99,
  vip: 149.99,
  standard: 14.99,
  silver: 79.99,
  gold: 129.99,
  platinum: 249.99,
  diamond: 299.99,
  bronze: 39.99
};

/**
 * Hook for checking feature access based on user tier
 */
const useFeatureAccess = (): FeatureAccessHook => {
  const { user } = useAuth();
  const [isUserPro, setIsUserPro] = useState<boolean>(false);
  
  useEffect(() => {
    // Determine if user is a pro user (has any paid tier)
    if (user && user.tier) {
      setIsUserPro(user.tier !== 'free' && user.tier !== 'basic');
    } else {
      setIsUserPro(false);
    }
  }, [user]);
  
  /**
   * Check if the user can access a specific feature
   */
  const canAccessFeature = (feature: Feature): boolean => {
    if (!user || !user.tier) return false;
    
    // If feature isn't in the map, default to false
    if (!FEATURE_TIERS[feature]) return false;
    
    // Check if user's tier is included in the feature's allowed tiers
    return FEATURE_TIERS[feature].includes(user.tier as UserTier);
  };
  
  /**
   * Get the pricing page URL, optionally filtered to a specific feature
   */
  const getUpgradeUrl = (featureId?: string): string => {
    let url = '/pricing';
    
    if (featureId) {
      url += `?feature=${featureId}`;
    }
    
    return url;
  };
  
  /**
   * Get the price for a specific tier
   */
  const getPricingForTier = (tier: UserTier): number => {
    return TIER_PRICING[tier] || 0;
  };
  
  return {
    isUserPro,
    canAccessFeature,
    getUpgradeUrl,
    getPricingForTier
  };
};

export default useFeatureAccess;
export { useFeatureAccess };
