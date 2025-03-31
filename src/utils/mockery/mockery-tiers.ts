
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

// Get tier for a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'common',
    crown: 'uncommon',
    stocks: 'common',
    jester: 'uncommon',
    protection: 'legendary',
    shame: 'common'
  };
  
  return tiers[action] || 'common';
};

// Get display color for a mockery tier
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colors: Record<MockeryTier, string> = {
    common: 'text-blue-400',
    uncommon: 'text-cyan-400',
    rare: 'text-indigo-400',
    epic: 'text-pink-400',
    legendary: 'text-emerald-400',
    basic: 'text-blue-400',
    premium: 'text-cyan-400',
    royal: 'text-indigo-400'
  };
  
  return colors[tier] || 'text-gray-400';
};
