
export type UserTier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'royal';

export interface TierDetails {
  name: UserTier;
  label: string;
  minSpend: number;
  maxSpend: number | null;
  color: string;
  benefits: string[];
  icon: string;
}

export const tiers: TierDetails[] = [
  {
    name: 'bronze',
    label: 'Bronze Noble',
    minSpend: 0,
    maxSpend: 99,
    color: 'text-amber-700',
    benefits: [
      'Basic profile customization',
      'Standard leaderboard visibility',
      'Participation in public events'
    ],
    icon: 'shield'
  },
  {
    name: 'silver',
    label: 'Silver Baron',
    minSpend: 100,
    maxSpend: 499,
    color: 'text-gray-400',
    benefits: [
      'All Bronze benefits',
      'Team chat access',
      'Silver profile banner',
      'One free mockery action per week'
    ],
    icon: 'sword'
  },
  {
    name: 'gold',
    label: 'Gold Count',
    minSpend: 500,
    maxSpend: 1999,
    color: 'text-amber-500',
    benefits: [
      'All Silver benefits',
      'Profile animation effects',
      'Advanced profile customization',
      'Three free mockery actions per week'
    ],
    icon: 'crown'
  },
  {
    name: 'platinum',
    label: 'Platinum Duke',
    minSpend: 2000,
    maxSpend: 9999,
    color: 'text-cyan-400',
    benefits: [
      'All Gold benefits',
      'Featured on homepage rotation',
      'Royal council voting power (x2)',
      'Five free mockery actions per week'
    ],
    icon: 'scepter'
  },
  {
    name: 'diamond',
    label: 'Diamond Marquess',
    minSpend: 10000,
    maxSpend: 49999,
    color: 'text-blue-400',
    benefits: [
      'All Platinum benefits',
      'Custom profile title',
      'Ability to create private events',
      'Team chat moderation powers',
      'Ten free mockery actions per week'
    ],
    icon: 'diamond'
  },
  {
    name: 'royal',
    label: 'Royal Monarch',
    minSpend: 50000,
    maxSpend: null,
    color: 'text-purple-500',
    benefits: [
      'All Diamond benefits',
      'Custom profile aesthetics',
      'Featured permanently on front page',
      'Admin console access',
      'Unlimited mockery actions'
    ],
    icon: 'throne'
  }
];

export const getUserTier = (spend: number): UserTier => {
  const tier = tiers.find(tier => {
    return spend >= tier.minSpend && (tier.maxSpend === null || spend <= tier.maxSpend);
  });
  
  return tier ? tier.name : 'bronze';
};

export const getTierDetails = (tierName: UserTier): TierDetails => {
  const tier = tiers.find(t => t.name === tierName);
  return tier || tiers[0]; // Default to bronze if tier not found
};

export const getNextTierDetails = (currentSpend: number): TierDetails | null => {
  const currentTier = getUserTier(currentSpend);
  const currentTierIndex = tiers.findIndex(tier => tier.name === currentTier);
  
  if (currentTierIndex >= tiers.length - 1) {
    return null; // Already at the highest tier
  }
  
  return tiers[currentTierIndex + 1];
};

export const getProgressToNextTier = (currentSpend: number): number => {
  const currentTier = getUserTier(currentSpend);
  const currentTierDetails = getTierDetails(currentTier);
  const nextTierDetails = getNextTierDetails(currentSpend);
  
  if (!nextTierDetails) {
    return 100; // Already at max tier
  }
  
  const rangeSize = nextTierDetails.minSpend - currentTierDetails.minSpend;
  const progress = ((currentSpend - currentTierDetails.minSpend) / rangeSize) * 100;
  
  return Math.min(Math.max(0, progress), 100); // Clamp between 0-100
};
