
import { UserTier } from '@/types/tier';

// Update to use an array instead of an object to support iteration methods
export interface TierDetails {
  id: UserTier;
  name: string;
  description: string;
  features: string[];
  color: string;
  spendRequirement?: number; // Add this property
  label: string;
  benefits: string[];
  icon?: string;
  minSpend: number;
  maxSpend?: number;
}

// Convert to an array of tier details
export const tiers: TierDetails[] = [
  {
    id: 'free',
    name: 'Free Tier',
    description: 'Basic features for casual users',
    features: ['Basic profile', 'Public leaderboard access', 'Limited daily votes'],
    color: 'gray',
    spendRequirement: 0,
    label: 'Free',
    benefits: ['Basic profile', 'Public leaderboard access', 'Limited daily votes'],
    minSpend: 0,
    maxSpend: 99,
    icon: 'shield'
  },
  {
    id: 'basic',
    name: 'Basic Tier',
    description: 'Enhanced features for regular users',
    features: ['Custom profile', 'Team access', 'Daily votes', 'Enhanced visibility'],
    color: 'blue',
    spendRequirement: 100,
    label: 'Basic',
    benefits: ['Custom profile', 'Team access', 'Daily votes', 'Enhanced visibility'],
    minSpend: 100,
    maxSpend: 499,
    icon: 'sword'
  },
  {
    id: 'premium',
    name: 'Premium Tier',
    description: 'Advanced features for dedicated users',
    features: ['Premium profile', 'Team leadership', 'Priority votes', 'Enhanced visibility', 'Special recognition'],
    color: 'purple',
    spendRequirement: 500,
    label: 'Premium',
    benefits: ['Premium profile', 'Team leadership', 'Priority votes', 'Enhanced visibility', 'Special recognition'],
    minSpend: 500,
    maxSpend: 999,
    icon: 'crown'
  },
  {
    id: 'royal',
    name: 'Royal Tier',
    description: 'Elite features for top spenders',
    features: ['Royal profile', 'Council membership', 'Unlimited votes', 'Maximum visibility', 'Exclusive recognition', 'Royal certificates'],
    color: 'gold',
    spendRequirement: 1000,
    label: 'Royal',
    benefits: ['Royal profile', 'Council membership', 'Unlimited votes', 'Maximum visibility', 'Exclusive recognition', 'Royal certificates'],
    minSpend: 1000,
    maxSpend: 4999,
    icon: 'crown'
  },
  // Add more tiers as needed
  {
    id: 'founder',
    name: 'Founder Tier',
    description: 'Exclusive tier for founding members',
    features: ['All Royal features', 'Permanent recognition', 'Exclusive access', 'Direct influence'],
    color: 'royal-gold',
    spendRequirement: 5000,
    label: 'Founder',
    benefits: ['All Royal features', 'Permanent recognition', 'Exclusive access', 'Direct influence'],
    minSpend: 5000,
    icon: 'diamond'
  }
];

// Get all available tiers
export const getAllTiers = (): TierDetails[] => {
  return tiers;
};

// Get user tier based on spend amount
export const getUserTier = (spendAmount: number): UserTier => {
  // Sort tiers by spend requirement (highest first)
  const sortedTiers = [...tiers].sort((a, b) => 
    (b.spendRequirement || 0) - (a.spendRequirement || 0)
  );
  
  // Find the highest tier the user qualifies for
  const qualifiedTier = sortedTiers.find(tier => 
    spendAmount >= (tier.spendRequirement || 0)
  );
  
  return qualifiedTier?.id || 'free';
};

// Get tier by ID
export const getTierDetails = (tierId: UserTier): TierDetails => {
  const tier = tiers.find(tier => tier.id === tierId);
  if (!tier) {
    return tiers[0]; // Return free tier as fallback
  }
  return tier;
};

// Get next tier details
export const getNextTierDetails = (spendAmount: number): TierDetails | null => {
  const currentTier = getUserTier(spendAmount);
  const currentTierIndex = tiers.findIndex(tier => tier.id === currentTier);
  
  // If user is already at the highest tier
  if (currentTierIndex >= tiers.length - 1) {
    return null;
  }
  
  return tiers[currentTierIndex + 1];
};

// Get progress to next tier as percentage
export const getProgressToNextTier = (spendAmount: number): number => {
  const currentTier = getUserTier(spendAmount);
  const currentTierDetails = getTierDetails(currentTier);
  const nextTierDetails = getNextTierDetails(spendAmount);
  
  if (!nextTierDetails) {
    return 100; // Already at max tier
  }
  
  const currentReq = currentTierDetails.spendRequirement || 0;
  const nextReq = nextTierDetails.spendRequirement || 0;
  const range = nextReq - currentReq;
  const spentInRange = spendAmount - currentReq;
  
  return Math.min(100, Math.max(0, (spentInRange / range) * 100));
};

// Get amount needed to reach next tier
export const getAmountToNextTier = (spendAmount: number): number => {
  const nextTierDetails = getNextTierDetails(spendAmount);
  
  if (!nextTierDetails) {
    return 0; // Already at max tier
  }
  
  const nextReq = nextTierDetails.spendRequirement || 0;
  return Math.max(0, nextReq - spendAmount);
};

// Get tiers above the current tier
export const getHigherTiers = (currentTier: UserTier): TierDetails[] => {
  const currentIndex = tiers.findIndex(tier => tier.id === currentTier);
  return tiers.filter((_, index) => index > currentIndex);
};

// Check if a user qualifies for a tier upgrade
export const checkTierUpgrade = (currentTier: UserTier, spendAmount: number): { qualifies: boolean, newTier: TierDetails } => {
  const qualifiedTier = getTierDetails(getUserTier(spendAmount));
  return {
    qualifies: qualifiedTier.id !== currentTier,
    newTier: qualifiedTier
  };
};
