
import { MockeryAction, MockeryTier } from '@/types/mockery';

/**
 * Get tier for a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
    case 'putridEggs':
      return 'common';
    case 'stocks':
    case 'dunce':
    case 'silence':
    case 'courtJester':
      return 'uncommon';
    case 'smokeBomb':
    case 'jest':
    case 'glitterBomb':
    case 'royalPie':
    case 'memeFrame':
      return 'rare';
    case 'defeat':
    case 'guillotine':
    case 'dungeons':
    case 'roast':
    case 'jokeCrown':
      return 'epic';
    case 'removal':
    case 'crown':
    case 'challenge':
    case 'target':
    case 'immune':
    case 'protection':
      return 'legendary';
    default:
      return 'common';
  }
};

/**
 * Get CSS color class for a mockery tier
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
      return 'text-yellow-400';
    case 'basic':
      return 'text-gray-400';
    case 'premium':
      return 'text-blue-400';
    case 'royal':
      return 'text-royal-gold';
    default:
      return 'text-gray-400';
  }
};

/**
 * Get icon color for a mockery action
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const tier = getMockeryTier(action);
  return getMockeryTierColorClass(tier);
};

export { getMockeryTier, getMockeryTierColorClass, getMockeryActionIconColor };
