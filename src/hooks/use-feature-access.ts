
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
  'profile-links': 'basic',
  'profile-stats': 'premium',
  'profile-views': 'basic',
  'profile-badges': 'premium',
  
  'profile-cosmetics': 'basic',
  'profile-marketing': 'premium',
  'profile-analytics': 'premium',
  'profile-boost': 'premium',
  
  'profile-verification': 'premium',
  'profile-custom-domain': 'premium',
  
  'chat-access': 'basic',
  'chat-premium': 'premium',
};

export interface FeatureAccess {
  hasFeature: (feature: Feature) => boolean;
  getRequiredTier: (feature: Feature) => UserTier;
  getUserTier: () => UserTier;
  isUserPro?: (user: UserProfile) => boolean;
  getUpgradeUrl?: (feature: Feature) => string;
}

export const tierValues: Record<UserTier, number> = {
  'free': 0,
  'basic': 1,
  'plus': 2,
  'premium': 3,
  'royal': 4,
  'diamond': 5,
  'pro': 3
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

  return {
    hasFeature,
    getRequiredTier,
    getUserTier,
    isUserPro,
    getUpgradeUrl
  };
};

export default useFeatureAccess;
