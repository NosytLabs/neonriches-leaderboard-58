
import { useState } from 'react';
import { UserProfile } from '@/types/user';
import { UserTier } from '@/types/tier';

export interface FeatureAccess {
  canAccess: (featureName: string) => boolean;
  isPremiumFeature: (featureName: string) => boolean;
  getUpgradeInfo: (featureName: string) => { 
    requiredTier: UserTier, 
    description: string 
  };
  userHasFeature: (featureName: string) => boolean;
}

// Feature tiers mapping
const featureTiers: Record<string, UserTier> = {
  'custom-profile': 'basic',
  'profile-boost': 'premium',
  'achievement-showcase': 'basic',
  'team-chat': 'premium',
  'royal-council': 'royal',
  'stats-analytics': 'premium',
  'market-visibility': 'premium',
  'animated-effects': 'premium',
  'mockery-powers': 'premium',
  'custom-titles': 'royal',
  'priority-support': 'royal',
  'private-messaging': 'basic',
  'verified-badge': 'premium',
  'certificate-nft': 'royal',
  'wishing-well': 'basic',
  'shameless-promotion': 'premium'
};

// Feature descriptions
const featureDescriptions: Record<string, string> = {
  'custom-profile': 'Customize your profile with themes and colors',
  'profile-boost': 'Boost your profile visibility in the leaderboard',
  'achievement-showcase': 'Display your achievements on your profile',
  'team-chat': 'Access to exclusive team chat rooms',
  'royal-council': 'Participate in the Royal Council forums',
  'stats-analytics': 'View detailed spending and activity analytics',
  'market-visibility': 'Enhanced visibility features for your profile',
  'animated-effects': 'Unlock animated profile effects',
  'mockery-powers': 'Use mockery powers on other users',
  'custom-titles': 'Create and use custom titles',
  'priority-support': 'Get priority support from the royal court',
  'private-messaging': 'Send private messages to other users',
  'verified-badge': 'Get a verified badge on your profile',
  'certificate-nft': 'Mint your rank certificate as an NFT',
  'wishing-well': 'Access to the Wishing Well feature',
  'shameless-promotion': 'Promote your profile on the leaderboard'
};

// Tier hierarchy for comparison
const tierHierarchy: Record<UserTier, number> = {
  'free': 0,
  'basic': 1,
  'plus': 2,
  'premium': 3,
  'pro': 4,
  'royal': 5,
  'founder': 6,
  'whale': 7,
  'shark': 8
};

const useFeatureAccess = (user?: UserProfile): FeatureAccess => {
  const [purchasedFeatures] = useState<string[]>(user?.purchasedFeatures || []);

  const canAccess = (featureName: string): boolean => {
    // Direct purchase access
    if (purchasedFeatures.includes(featureName)) {
      return true;
    }

    // Tier-based access
    const requiredTier = featureTiers[featureName] || 'royal';
    const userTier = user?.tier || 'free';

    return tierHierarchy[userTier] >= tierHierarchy[requiredTier];
  };

  const isPremiumFeature = (featureName: string): boolean => {
    const requiredTier = featureTiers[featureName] || 'royal';
    return tierHierarchy[requiredTier] >= tierHierarchy['premium'];
  };

  const getUpgradeInfo = (featureName: string) => {
    const requiredTier = featureTiers[featureName] || 'royal';
    const description = featureDescriptions[featureName] || 'Unlock premium features';
    
    return { requiredTier, description };
  };

  const userHasFeature = (featureName: string): boolean => {
    return purchasedFeatures.includes(featureName);
  };

  return {
    canAccess,
    isPremiumFeature,
    getUpgradeInfo,
    userHasFeature
  };
};

export default useFeatureAccess;
