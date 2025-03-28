
import { MockeryAction, MockeryTier } from '@/types/mockery';

export const getMockeryTierColor = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common':
      return 'text-gray-300';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    case 'basic':
      return 'text-white';
    case 'royal':
      return 'text-royal-crimson';
    case 'advanced':
      return 'text-royal-navy';
    default:
      return 'text-gray-300';
  }
};

export const getMockeryTierLabel = (tier: MockeryTier): string => {
  return tier.charAt(0).toUpperCase() + tier.slice(1);
};

export const convertToBasicAction = (action: string): MockeryAction => {
  // Convert to a valid MockeryAction
  if (
    action === 'tomatoes' ||
    action === 'eggs' ||
    action === 'stocks' ||
    action === 'silence' ||
    action === 'courtJester' ||
    action === 'jester' ||
    action === 'dunce' ||
    action === 'roast' ||
    action === 'ridicule' ||
    action === 'taunt' ||
    action === 'drama'
  ) {
    return action as MockeryAction;
  }
  
  // Default fallback
  return 'taunt';
};
