
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

/**
 * Get the mockery tier
 */
export function getMockeryTier(action: MockeryAction): MockeryTier {
  const tiers: Record<string, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'common',
    crown: 'uncommon',
    stocks: 'common',
    jester: 'uncommon',
    protection: 'legendary',
    shame: 'common',
    target: 'common',
    challenge: 'rare',
    ghost: 'epic',
    putridEggs: 'uncommon',
    silence: 'epic',
    courtJester: 'rare',
    smokeBomb: 'legendary'
  };
  
  return tiers[action] || 'common';
}

/**
 * Get color class for a mockery tier
 */
export function getMockeryTierColorClass(tier: MockeryTier): string {
  const colors: Record<string, string> = {
    common: 'text-gray-400',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-yellow-400',
    royal: 'text-yellow-300',
    basic: 'text-white',
    premium: 'text-indigo-400',
    silver: 'text-gray-300',
    bronze: 'text-amber-600'
  };
  
  return colors[tier] || 'text-white';
}
