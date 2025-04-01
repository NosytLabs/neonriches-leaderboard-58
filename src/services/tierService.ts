
import { UserTier } from '@/types/user';

// Update to use an array instead of an object to support iteration methods
export interface TierDetails {
  id: UserTier;
  name: string;
  description: string;
  features: string[];
  color: string;
  spendRequirement?: number; // Add this property
}

// Convert to an array of tier details
export const tiers: TierDetails[] = [
  {
    id: 'free',
    name: 'Free Tier',
    description: 'Basic features for casual users',
    features: ['Basic profile', 'Public leaderboard access', 'Limited daily votes'],
    color: 'gray',
    spendRequirement: 0
  },
  {
    id: 'basic',
    name: 'Basic Tier',
    description: 'Enhanced features for regular users',
    features: ['Custom profile', 'Team access', 'Daily votes', 'Enhanced visibility'],
    color: 'blue',
    spendRequirement: 100
  },
  {
    id: 'premium',
    name: 'Premium Tier',
    description: 'Advanced features for dedicated users',
    features: ['Premium profile', 'Team leadership', 'Priority votes', 'Enhanced visibility', 'Special recognition'],
    color: 'purple',
    spendRequirement: 500
  },
  {
    id: 'royal',
    name: 'Royal Tier',
    description: 'Elite features for top spenders',
    features: ['Royal profile', 'Council membership', 'Unlimited votes', 'Maximum visibility', 'Exclusive recognition', 'Royal certificates'],
    color: 'gold',
    spendRequirement: 1000
  },
  // Add more tiers as needed
  {
    id: 'founder',
    name: 'Founder Tier',
    description: 'Exclusive tier for founding members',
    features: ['All Royal features', 'Permanent recognition', 'Exclusive access', 'Direct influence'],
    color: 'royal-gold',
    spendRequirement: 5000
  }
];

// Get all available tiers
export const getAllTiers = () => {
  return tiers;
};

// Get tier by ID
export const getTierById = (tierId: string): TierDetails | undefined => {
  return tiers.find(tier => tier.id === tierId);
};

// Get tier by spend amount
export const getTierBySpend = (spendAmount: number): TierDetails => {
  // Sort tiers by spend requirement (highest first)
  const sortedTiers = [...tiers].sort((a, b) => 
    (b.spendRequirement || 0) - (a.spendRequirement || 0)
  );
  
  // Find the highest tier the user qualifies for
  const qualifiedTier = sortedTiers.find(tier => 
    spendAmount >= (tier.spendRequirement || 0)
  );
  
  return qualifiedTier || tiers[0]; // Default to first tier if no match
};

// Get tier progression details for a user
export const getTierProgression = (currentTier: string, spendAmount: number) => {
  // Sort tiers by spend requirement
  const sortedTiers = [...tiers].sort((a, b) => 
    (a.spendRequirement || 0) - (b.spendRequirement || 0)
  );
  
  const currentIndex = sortedTiers.findIndex(tier => tier.id === currentTier);
  const nextTier = sortedTiers[currentIndex + 1];
  
  if (!nextTier) {
    return {
      currentTier: sortedTiers[currentIndex],
      nextTier: null,
      progress: 100,
      remaining: 0
    };
  }
  
  const currentReq = sortedTiers[currentIndex]?.spendRequirement || 0;
  const nextReq = nextTier.spendRequirement || 0;
  const range = nextReq - currentReq;
  const spentInRange = spendAmount - currentReq;
  const progress = Math.min(100, Math.max(0, (spentInRange / range) * 100));
  const remaining = nextReq - spendAmount;
  
  return {
    currentTier: sortedTiers[currentIndex],
    nextTier,
    progress,
    remaining
  };
};

// Get tiers above the current tier
export const getHigherTiers = (currentTier: string) => {
  const currentIndex = tiers.findIndex(tier => tier.id === currentTier);
  return tiers.filter((_, index) => index > currentIndex);
};

// Check if a user qualifies for a tier upgrade
export const checkTierUpgrade = (currentTier: string, spendAmount: number) => {
  const qualifiedTier = getTierBySpend(spendAmount);
  return {
    qualifies: qualifiedTier.id !== currentTier,
    newTier: qualifiedTier
  };
};
