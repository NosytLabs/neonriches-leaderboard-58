// Import necessary types
import { UserTier, TierDetails } from '@/types/tier';

// Convert the tiers object to an array so it can be iterated
const tiersList: TierDetails[] = [
  {
    id: 'free',
    name: 'Free Tier',
    description: 'Basic features for everyone',
    features: ['Limited profile visibility', 'Basic analytics'],
    color: 'gray',
    spendRequirement: 0
  },
  {
    id: 'basic',
    name: 'Basic Tier',
    description: 'Enhanced features for casual spenders',
    features: ['Increased profile visibility', 'Basic analytics', 'Team chat access'],
    color: 'blue',
    spendRequirement: 100
  },
  {
    id: 'premium',
    name: 'Premium Tier',
    description: 'Advanced features for serious spenders',
    features: ['Full profile visibility', 'Advanced analytics', 'Premium badge'],
    color: 'purple',
    spendRequirement: 500
  },
  {
    id: 'royal',
    name: 'Royal Tier',
    description: 'Elite features for the biggest spenders',
    features: ['Maximum visibility', 'Full analytics', 'Royal badge', 'Custom profile effects'],
    color: 'gold',
    spendRequirement: 1000
  }
];

// Create a map for easy access by id
const tiersMap: Record<string, TierDetails> = tiersList.reduce((acc, tier) => {
  acc[tier.id] = tier;
  return acc;
}, {} as Record<string, TierDetails>);

// Convert user spend amount to a tier
export const getUserTier = (amountSpent: number): UserTier => {
  if (amountSpent >= 1000) return 'royal';
  if (amountSpent >= 500) return 'premium';
  if (amountSpent >= 100) return 'basic';
  return 'free';
};

// Get details for a specific tier
export const getTierDetails = (tier: UserTier): TierDetails => {
  return tiersMap[tier] || tiersMap.free;
};

// Get the next tier based on amount spent
export const getNextTierDetails = (amountSpent: number): TierDetails | null => {
  const currentTier = getUserTier(amountSpent);
  
  // Find the index of the current tier
  const currentIndex = tiersList.findIndex(tier => tier.id === currentTier);
  
  // If we're at the max tier, return null
  if (currentIndex === tiersList.length - 1) {
    return null;
  }
  
  // Return the next tier
  return tiersList[currentIndex + 1];
};

// Get progress to next tier as a percentage
export const getProgressToNextTier = (amountSpent: number): number => {
  const currentTier = getUserTier(amountSpent);
  const nextTier = getNextTierDetails(amountSpent);
  
  if (!nextTier) return 100; // Already at max tier
  
  const currentTierDetails = getTierDetails(currentTier);
  const minAmount = currentTierDetails.spendRequirement;
  const maxAmount = nextTier.spendRequirement;
  
  const progress = ((amountSpent - minAmount) / (maxAmount - minAmount)) * 100;
  return Math.min(Math.max(progress, 0), 100); // Clamp between 0-100
};

// Get amount needed to reach the next tier
export const getAmountToNextTier = (amountSpent: number): number => {
  const nextTier = getNextTierDetails(amountSpent);
  if (!nextTier) return 0; // Already at max tier
  
  return Math.max(nextTier.spendRequirement - amountSpent, 0);
};

// Get all available tiers
export const getAllTiers = (): TierDetails[] => {
  return tiersList;
};
