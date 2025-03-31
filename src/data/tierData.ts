
import { TierDetails } from "@/types/tier";

export const tiers: TierDetails[] = [
  {
    name: 'basic',
    label: 'Free',
    minSpend: 0,
    maxSpend: 99,
    color: 'text-white/70',
    benefits: [
      'Basic profile customization',
      'Standard leaderboard visibility',
      'Participation in public events'
    ],
    marketingBenefits: [
      'Basic profile visibility',
      'Standard click tracking',
      'Public profile page'
    ],
    icon: 'user'
  },
  {
    name: 'bronze',
    label: 'Bronze',
    minSpend: 100,
    maxSpend: 999,
    color: 'text-amber-600',
    benefits: [
      'All Free benefits',
      'Team chat access',
      'Bronze profile banner',
      'One mockery action per week'
    ],
    marketingBenefits: [
      'Enhanced profile visibility',
      'Basic click analytics',
      'Social media links',
      'Custom profile banner'
    ],
    icon: 'shield'
  },
  {
    name: 'silver',
    label: 'Silver',
    minSpend: 1000,
    maxSpend: 9999,
    color: 'text-gray-300',
    benefits: [
      'All Bronze benefits',
      'Profile animation effects',
      'Advanced profile customization',
      'Three mockery actions per week'
    ],
    marketingBenefits: [
      'Increased profile visibility',
      'Detailed click analytics',
      'Weekly visibility in Spotlight',
      'Custom profile effects'
    ],
    icon: 'sword'
  },
  {
    name: 'gold',
    label: 'Royal Gold',
    minSpend: 10000,
    maxSpend: null,
    color: 'text-royal-gold',
    benefits: [
      'All Silver benefits',
      'Featured on homepage rotation',
      'Royal council voting power',
      'Unlimited mockery actions'
    ],
    marketingBenefits: [
      'Premium homepage Spotlight placement',
      'Full analytics dashboard',
      'Custom animated effects',
      'Exclusive profile customization',
      'Priority placement in all leaderboards'
    ],
    icon: 'crown'
  }
];

// Export user benefits based on spending amount
export const getUserTier = (amountSpent: number): TierDetails => {
  for (let i = tiers.length - 1; i >= 0; i--) {
    const tier = tiers[i];
    if (amountSpent >= tier.minSpend && (tier.maxSpend === null || amountSpent <= tier.maxSpend)) {
      return tier;
    }
  }
  return tiers[0]; // Default to basic tier
};

// Get marketing benefit description by tier name
export const getMarketingBenefitsByTier = (tierName: string): string[] => {
  const tier = tiers.find(t => t.name === tierName) || tiers[0];
  return tier.marketingBenefits || [];
};
