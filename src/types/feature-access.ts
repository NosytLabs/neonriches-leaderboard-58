
// Feature access types
import { UserTier } from './user-types';

export type Feature = 
  | 'premium_analytics'
  | 'custom_profile'
  | 'marketing_dashboard'
  | 'advanced_stats'
  | 'tracking_links' 
  | 'profile_followers'
  | 'rank_certificates' 
  | 'profile_boosts' 
  | 'auto_promotions'
  | 'advertising_slots'
  | 'premium_support';

export interface FeatureRequirements {
  tier?: UserTier;
  rank?: number;
  spendAmount?: number;
  isMember?: boolean;
  isPro?: boolean;
}

export interface FeatureAccess {
  isLoading: boolean;
  canAccessFeature: (feature: Feature) => boolean;
  getUpgradeUrl: (feature: Feature) => string;
  isUserPro: () => boolean;
  getMarketingFeaturePriceId: (feature: Feature) => string;
  purchaseFeatureIndividually: (feature: Feature) => Promise<any>;
}

// Export types
export { Feature, FeatureRequirements, FeatureAccess };
