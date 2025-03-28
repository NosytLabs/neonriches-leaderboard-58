
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

export const getMockeryTierColor = (tier: MockeryTier): { text: string, border: string } => {
  switch (tier) {
    case 'common':
      return { text: 'text-gray-300', border: 'border-gray-300/30' };
    case 'uncommon':
      return { text: 'text-green-400', border: 'border-green-400/30' };
    case 'rare':
      return { text: 'text-blue-400', border: 'border-blue-400/30' };
    case 'epic':
      return { text: 'text-purple-400', border: 'border-purple-400/30' };
    case 'legendary':
      return { text: 'text-royal-gold', border: 'border-royal-gold/30' };
    case 'basic':
      return { text: 'text-white', border: 'border-white/30' };
    case 'royal':
      return { text: 'text-royal-crimson', border: 'border-royal-crimson/30' };
    case 'advanced':
      return { text: 'text-royal-navy', border: 'border-royal-navy/30' };
    default:
      return { text: 'text-gray-300', border: 'border-gray-300/30' };
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

export const getMockeryActionDescription = (action: ExtendedMockeryAction, username: string = ''): string => {
  switch (action) {
    case 'tomatoes':
      return `Throw virtual tomatoes at ${username || 'this user'}, marking their profile with tomato stains for 1 day.`;
    case 'eggs':
      return `Throw virtual eggs at ${username || 'this user'}, leaving their profile with egg splatter for 2 days.`;
    case 'stocks':
      return `Put ${username || 'this user'} in virtual stocks, displaying them on the town square for 3 days.`;
    case 'silence':
      return `Silence ${username || 'this user'} temporarily, preventing them from commenting for 12 hours.`;
    case 'courtJester':
      return `Appoint ${username || 'this user'} as the Royal Court Jester for a week, with a special badge of shame.`;
    default:
      return `Apply this mockery action to ${username || 'the selected user'}.`;
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
