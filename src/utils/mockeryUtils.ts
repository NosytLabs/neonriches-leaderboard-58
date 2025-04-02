
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

/**
 * Get the name of a mockery action
 * @param action - The mockery action type
 * @returns The human-readable name for the action
 */
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    'tomatoes': 'Throw Tomatoes',
    'eggs': 'Rotten Eggs',
    'pie': 'Pie to the Face',
    'fish': 'Slap with Fish',
    'carrot': 'Golden Carrot',
    'flowers': 'Royal Flowers',
    'gold': 'Golden Shower',
    'jester': 'Make a Jester',
    'crown': 'Sarcastic Crown',
    'stocks': 'Public Stocks',
    'shame': 'Public Shame',
    'protection': 'Royal Protection',
    'mock': 'Royal Mockery',
    'denounce': 'Royal Denouncement',
    'taunt': 'Royal Taunt',
    'challenge': 'Royal Challenge',
    'joust': 'Royal Joust',
    'duel': 'Royal Duel',
    'putridEggs': 'Putrid Eggs',
    'silence': 'Silence',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'thumbsDown': 'Thumbs Down'
  };
  
  return names[action] || 'Unknown Action';
};

/**
 * Get the description of a mockery action
 * @param action - The mockery action type
 * @returns The description of the action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    'tomatoes': 'Throw rotten tomatoes at this peasant! A medieval classic.',
    'eggs': 'Hurl rotten eggs for maximum embarrassment.',
    'pie': 'A cream pie right to the face. How humiliating!',
    'fish': 'Slap them with a fish. It leaves a lingering smell.',
    'carrot': 'Award a golden carrot for their efforts.',
    'flowers': 'Send royal flowers as a token of appreciation.',
    'gold': 'Shower them with gold coins (purely cosmetic).',
    'jester': 'Make them wear the jester's hat for all to see.',
    'crown': 'Crown them as the royal fool.',
    'stocks': 'Place this noble in the stocks for public ridicule.',
    'shame': 'Shame! Shame! Shame! Ring the bell of shame.',
    'protection': 'Grant royal protection against mockery.',
    'mock': 'Mock them publicly in the royal court.',
    'denounce': 'Denounce them as a pretender to the throne.',
    'taunt': 'Taunt them with royal insults.',
    'challenge': 'Challenge them to prove their worth.',
    'joust': 'Challenge them to a royal joust.',
    'duel': 'Challenge them to a royal duel.',
    'putridEggs': 'The most disgusting eggs in the kingdom.',
    'silence': 'Silence them from the royal court.',
    'courtJester': 'Force them to entertain the court.',
    'smokeBomb': 'Throw a smoke bomb to create confusion.',
    'thumbsDown': 'Show your disapproval with a royal thumbs down.'
  };
  
  return descriptions[action] || 'No description available.';
};

/**
 * Get the tier of a mockery action
 * @param action - The mockery action type
 * @returns The tier of the action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    'tomatoes': 'common',
    'eggs': 'common',
    'pie': 'uncommon',
    'fish': 'uncommon',
    'carrot': 'rare',
    'flowers': 'rare',
    'gold': 'epic',
    'jester': 'epic',
    'crown': 'legendary',
    'stocks': 'legendary',
    'shame': 'royal',
    'protection': 'royal',
    'mock': 'uncommon',
    'denounce': 'rare',
    'taunt': 'common',
    'challenge': 'epic',
    'joust': 'legendary',
    'duel': 'royal',
    'putridEggs': 'uncommon',
    'silence': 'epic',
    'courtJester': 'rare',
    'smokeBomb': 'uncommon',
    'thumbsDown': 'common'
  };
  
  return tiers[action] || 'common';
};

/**
 * Get the price of a mockery action
 * @param action - The mockery action type
 * @returns The price of the action
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    'tomatoes': 5,
    'eggs': 10,
    'pie': 15,
    'fish': 20,
    'carrot': 25,
    'flowers': 30,
    'gold': 50,
    'jester': 75,
    'crown': 100,
    'stocks': 150,
    'shame': 200,
    'protection': 500,
    'mock': 25,
    'denounce': 50,
    'taunt': 10,
    'challenge': 100,
    'joust': 250,
    'duel': 500,
    'putridEggs': 15,
    'silence': 100,
    'courtJester': 75,
    'smokeBomb': 30,
    'thumbsDown': 5
  };
  
  return prices[action] || 10;
};

/**
 * Get the icon class for a mockery action
 * @param action - The mockery action type
 * @returns The CSS class for the action icon
 */
export const getMockeryIconClass = (action: MockeryAction): string => {
  const icons: Record<MockeryAction, string> = {
    'tomatoes': 'tomato',
    'eggs': 'egg',
    'pie': 'pie',
    'fish': 'fish',
    'carrot': 'carrot',
    'flowers': 'flower',
    'gold': 'coins',
    'jester': 'jester',
    'crown': 'crown',
    'stocks': 'stocks',
    'shame': 'bell',
    'protection': 'shield',
    'mock': 'frown',
    'denounce': 'x',
    'taunt': 'message-square',
    'challenge': 'flag',
    'joust': 'swords',
    'duel': 'swords-crossed',
    'putridEggs': 'egg-rotten',
    'silence': 'x-circle',
    'courtJester': 'theatre',
    'smokeBomb': 'cloud',
    'thumbsDown': 'thumbs-down'
  };
  
  return icons[action] || 'help-circle';
};

/**
 * Get the color for a mockery tier
 * @param tier - The mockery tier
 * @returns The color class for the tier
 */
export const getMockeryTierColor = (tier: MockeryTier): string => {
  const colors: Record<MockeryTier, string> = {
    'common': 'text-gray-400',
    'uncommon': 'text-green-400',
    'rare': 'text-blue-400',
    'epic': 'text-purple-400',
    'legendary': 'text-orange-400',
    'royal': 'text-royal-gold',
    'basic': 'text-gray-300',
    'premium': 'text-amber-300',
    'standard': 'text-indigo-400',
    'silver': 'text-gray-300',
    'bronze': 'text-amber-600'
  };
  
  return colors[tier] || 'text-gray-400';
};

// Export all utilities
export {
  getMockeryName,
  getMockeryDescription,
  getMockeryTier,
  getMockeryActionPrice,
  getMockeryIconClass,
  getMockeryTierColor
};
