
import { UserProfile } from '@/types/user';
import { UserTier } from '@/types/user-types';

export type Feature = 
  | 'profile-links'
  | 'profile-stats'
  | 'profile-views'
  | 'profile-badges'
  | 'profile-cosmetics'
  | 'profile-marketing'
  | 'profile-analytics'
  | 'profile-boost'
  | 'profile-verification';

export interface FeatureRequirements {
  [key: string]: UserTier;
}

export const featureRequirements: FeatureRequirements = {
  'profile-links': 'basic' as UserTier,
  'profile-stats': 'premium' as UserTier,
  'profile-views': 'basic' as UserTier,
  'profile-badges': 'premium' as UserTier,
  
  'profile-cosmetics': 'basic' as UserTier,
  'profile-marketing': 'premium' as UserTier,
  'profile-analytics': 'premium' as UserTier,
  'profile-boost': 'premium' as UserTier,
  
  'profile-verification': 'premium' as UserTier,
  'profile-custom-domain': 'premium' as UserTier,
  
  'chat-access': 'basic' as UserTier,
  'chat-premium': 'premium' as UserTier,
};

export interface FeatureAccess {
  hasFeature: (feature: Feature) => boolean;
  getRequiredTier: (feature: Feature) => UserTier;
  getUserTier: () => UserTier;
  isUserPro?: (user: UserProfile) => boolean;
  getUpgradeUrl?: (feature: Feature) => string;
  canAccessFeature?: (feature: Feature) => boolean;
  isLoading?: boolean;
  purchaseFeatureIndividually?: (featureId: string) => Promise<boolean>;
  getMarketingFeaturePriceId?: (featureId: string) => string;
}

export const tierValues: Record<UserTier, number> = {
  'free': 0,
  'basic': 1,
  'plus': 2,
  'premium': 3,
  'royal': 4,
  'diamond': 5,
  'pro': 3,
  'gold': 4,
  'silver': 2,
  'bronze': 1,
  'platinum': 5
};

export const useFeatureAccess = (user: UserProfile | null): FeatureAccess => {
  const getUserTier = (): UserTier => {
    return user?.tier || 'free';
  };

  const getRequiredTier = (feature: Feature): UserTier => {
    return featureRequirements[feature] || 'free';
  };

  const hasFeature = (feature: Feature): boolean => {
    if (!user) return false;
    
    const userTier = getUserTier();
    const requiredTier = getRequiredTier(feature);
    
    return tierValues[userTier] >= tierValues[requiredTier];
  };

  const isUserPro = (userToCheck: UserProfile): boolean => {
    return tierValues[userToCheck?.tier || 'free'] >= tierValues['premium'];
  };

  const getUpgradeUrl = (feature: Feature): string => {
    return `/subscription?feature=${feature}`;
  };

  const canAccessFeature = (feature: Feature): boolean => {
    return hasFeature(feature);
  };

  return {
    hasFeature,
    getRequiredTier,
    getUserTier,
    isUserPro,
    getUpgradeUrl,
    canAccessFeature,
    isLoading: false
  };
};

export default useFeatureAccess;
