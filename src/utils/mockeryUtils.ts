
import { MockeryAction, MockeryTier } from "@/types/mockery";

export type ExtendedMockeryAction = MockeryAction | 'protected' | 'immune' | 'jester' | 'dunce' | 'roast' | 'ridicule' | 'taunt' | 'drama';

export const getMockeryActionIcon = (action: ExtendedMockeryAction): string => {
  switch (action) {
    case 'tomatoes': return '🍅';
    case 'eggs': return '🥚';
    case 'stocks': return '🪵';
    case 'silence': return '🔇';
    case 'courtJester': return '🃏';
    case 'protected': return '🛡️';
    case 'immune': return '👑';
    case 'jester': return '🎭';
    case 'dunce': return '📝';
    case 'roast': return '🔥';
    case 'ridicule': return '😂';
    case 'taunt': return '👋';
    case 'drama': return '🎭';
    default: return '❓';
  }
};

export const getMockeryActionTitle = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Tomatoes';
    case 'eggs': return 'Eggs';
    case 'stocks': return 'Public Stocks';
    case 'silence': return 'Royal Silence';
    case 'courtJester': return 'Court Jester';
    default: return 'Unknown Action';
  }
};

export const getMockeryActionDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw tomatoes at this user, marking their profile for 24 hours';
    case 'eggs': return 'Throw eggs at this user, marking their profile for 48 hours';
    case 'stocks': return 'Put this user in the public stocks for 72 hours of shame';
    case 'silence': return 'Silence this user in team chat for 24 hours';
    case 'courtJester': return 'Force this user to wear the jester hat for 48 hours';
    default: return 'Unknown mockery action';
  }
};

export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 5;
    case 'eggs': return 10;
    case 'stocks': return 25;
    case 'silence': return 50;
    case 'courtJester': return 100;
    default: return 0;
  }
};

export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  // This is just a placeholder - in reality you might check against a list of
  // discounted actions for the current week
  return ['tomatoes', 'eggs'].includes(action);
};

export const getDiscountedMockeryPrice = (action: MockeryAction): number => {
  const originalPrice = getMockeryActionPrice(action);
  if (hasWeeklyDiscount(action)) {
    return originalPrice * 0.7; // 30% discount
  }
  return originalPrice;
};

export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes': return 'common';
    case 'eggs': return 'uncommon';
    case 'stocks': return 'rare';
    case 'silence': return 'epic';
    case 'courtJester': return 'legendary';
    default: return 'common';
  }
};

export const getMockeryTierColor = (tier: MockeryTier): string | { text: string, bg: string, border: string } => {
  switch (tier) {
    case 'common':
      return {
        text: 'text-white/80',
        bg: 'bg-white/10',
        border: 'border-white/20'
      };
    case 'uncommon':
      return {
        text: 'text-green-400',
        bg: 'bg-green-500/20',
        border: 'border-green-500/30'
      };
    case 'rare':
      return {
        text: 'text-blue-400',
        bg: 'bg-blue-500/20',
        border: 'border-blue-500/30'
      };
    case 'epic':
      return {
        text: 'text-purple-300',
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/30'
      };
    case 'legendary':
      return {
        text: 'text-amber-300',
        bg: 'bg-gradient-to-r from-red-500/20 to-amber-500/20',
        border: 'border-amber-500/30'
      };
    default:
      return {
        text: 'text-white/80',
        bg: 'bg-white/10',
        border: 'border-white/20'
      };
  }
};

export const getMockeryTierLabel = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common': return 'Common';
    case 'uncommon': return 'Uncommon';
    case 'rare': return 'Rare';
    case 'epic': return 'Epic';
    case 'legendary': return 'Legendary';
    default: return 'Unknown';
  }
};

export const getMockeryTierText = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common': return 'Simple mockery for everyday use';
    case 'uncommon': return 'Slightly more impressive than common mockery';
    case 'rare': return 'Truly distinctive forms of public humiliation';
    case 'epic': return 'Legendary acts of mockery that will be remembered';
    case 'legendary': return 'The ultimate expression of royal ridicule';
    default: return 'Unknown tier';
  }
};
