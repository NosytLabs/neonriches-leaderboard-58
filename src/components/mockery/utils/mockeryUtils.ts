
import { MockeryAction, MockeryTier } from '@/types/mockery';

export type ExtendedMockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'stocks' 
  | 'silence' 
  | 'courtJester' 
  | 'jester' 
  | 'dunce' 
  | 'roast' 
  | 'ridicule' 
  | 'taunt' 
  | 'drama';

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

export const getMockeryActionIcon = (action: ExtendedMockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return '🍅';
    case 'eggs':
      return '🥚';
    case 'stocks':
      return '🔒';
    case 'silence':
      return '🤐';
    case 'courtJester':
      return '🃏';
    case 'jester':
      return '🎭';
    case 'dunce':
      return '🧢';
    case 'roast':
      return '🔥';
    case 'ridicule':
      return '😂';
    case 'taunt':
      return '🤡';
    case 'drama':
      return '🎭';
    default:
      return '❓';
  }
};

export const getMockeryActionTitle = (action: ExtendedMockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw Tomatoes';
    case 'eggs':
      return 'Throw Eggs';
    case 'stocks':
      return 'Put in Stocks';
    case 'silence':
      return 'Royal Silence';
    case 'courtJester':
      return 'Court Jester';
    case 'jester':
      return 'Jester Cap';
    case 'dunce':
      return 'Dunce Cap';
    case 'roast':
      return 'Royal Roast';
    case 'ridicule':
      return 'Public Ridicule';
    case 'taunt':
      return 'Royal Taunt';
    case 'drama':
      return 'Court Drama';
    default:
      return 'Unknown Action';
  }
};

export const getMockeryActionDescription = (action: ExtendedMockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw virtual tomatoes at this user, marking their profile with tomato stains for 1 day.';
    case 'eggs':
      return 'Throw virtual eggs at this user, leaving their profile with egg splatter for 2 days.';
    case 'stocks':
      return 'Put this user in virtual stocks, displaying them on the town square for 3 days.';
    case 'silence':
      return 'Silence this user temporarily, preventing them from commenting for 12 hours.';
    case 'courtJester':
      return 'Appoint this user as the Royal Court Jester for a week, with a special badge of shame.';
    default:
      return 'Apply this mockery action to the selected user.';
  }
};

export const getMockeryActionPrice = (action: ExtendedMockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 0.50;
    case 'eggs':
      return 1.00;
    case 'stocks':
      return 2.50;
    case 'silence':
      return 5.00;
    case 'courtJester':
      return 10.00;
    default:
      return 1.00;
  }
};

export const getMockeryActionLabel = (action: ExtendedMockeryAction): string => {
  return getMockeryActionTitle(action);
};

export const hasWeeklyDiscount = (action: ExtendedMockeryAction): boolean => {
  // Example implementation - can be updated with real business logic
  return ['tomatoes', 'eggs'].includes(action);
};

export const getDiscountedMockeryPrice = (action: ExtendedMockeryAction): number => {
  const basePrice = getMockeryActionPrice(action);
  return hasWeeklyDiscount(action) ? basePrice * 0.75 : basePrice;
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
