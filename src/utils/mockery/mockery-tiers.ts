
import { MockeryAction, MockeryTier } from '@/types/mockery';

/**
 * Get the tier for a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
      return 'common';
    case 'stocks':
    case 'dunce':
      return 'uncommon';
    case 'jester':
    case 'taunt':
      return 'rare';
    case 'crown':
    case 'shame':
      return 'epic';
    case 'putridEggs':
    case 'silence':
      return 'legendary';
    default:
      return 'common';
  }
};

/**
 * Get color class for a mockery tier
 */
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common':
      return 'text-gray-400';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    default:
      return 'text-gray-400';
  }
};

export default {
  getMockeryTier,
  getMockeryTierColorClass
};
