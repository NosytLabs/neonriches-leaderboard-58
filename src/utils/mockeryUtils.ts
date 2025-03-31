
import { MockeryAction, MockeryTier } from '@/types/mockery';

/**
 * Get the name of a mockery action
 * @param action The mockery action
 * @returns A human-readable name
 */
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    'tomatoes': 'Rotten Tomatoes',
    'eggs': 'Rancid Eggs',
    'stocks': 'Public Stocks',
    'crown': 'Fool\'s Crown',
    'jester': 'Jester\'s Hat',
    'putridEggs': 'Putrid Eggs',
    'silence': 'Royal Silence',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'shame': 'Public Shame',
    'protection': 'Royal Protection'
  };

  return names[action] || action;
};

/**
 * Get the description of a mockery action
 * @param action The mockery action
 * @returns A description of what the mockery action does
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    'tomatoes': 'Splatter their profile with rotten tomatoes for 24 hours',
    'eggs': 'Pelt their profile with rancid eggs for 24 hours',
    'stocks': 'Lock them in the public stocks for all to see for 3 days',
    'crown': 'Force them to wear a fool\'s crown for a week',
    'jester': 'Dress them as a court jester for 24 hours',
    'putridEggs': 'Assault them with the most putrid eggs in the kingdom for 3 days',
    'silence': 'Prevent them from speaking in public forums for 12 hours',
    'courtJester': 'Assign them as your personal jester for 3 days',
    'smokeBomb': 'Drop a smoke bomb on their profile for 24 hours',
    'shame': 'Ring the bell of shame on their profile for 24 hours',
    'protection': 'Protect yourself from mockery for 3 days'
  };

  return descriptions[action] || 'Apply a mysterious effect';
};

/**
 * Get the icon color for a mockery action
 * @param action The mockery action
 * @returns A color string for the icon
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colors: Record<MockeryAction, string> = {
    'tomatoes': '#ef4444',
    'eggs': '#eab308',
    'stocks': '#6b7280',
    'crown': '#f59e0b',
    'jester': '#8b5cf6',
    'putridEggs': '#84cc16',
    'silence': '#3b82f6',
    'courtJester': '#ec4899',
    'smokeBomb': '#0ea5e9',
    'shame': '#dc2626',
    'protection': '#10b981'
  };

  return colors[action] || '#6b7280';
};

/**
 * Get the tier of a mockery action
 * @param action The mockery action
 * @returns The rarity tier
 */
export const getMockeryActionTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    'tomatoes': 'common',
    'eggs': 'common',
    'jester': 'common',
    'stocks': 'uncommon',
    'shame': 'uncommon',
    'smokeBomb': 'uncommon',
    'putridEggs': 'rare',
    'silence': 'rare',
    'courtJester': 'rare',
    'crown': 'legendary',
    'protection': 'legendary'
  };

  return tiers[action] || 'common';
};

/**
 * Get the price of a mockery action
 * @param action The mockery action
 * @returns The price in dollars
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryTier, number> = {
    'common': 5,
    'uncommon': 10,
    'rare': 20,
    'epic': 50,
    'legendary': 100
  };

  const tier = getMockeryActionTier(action);
  return prices[tier];
};

export default {
  getMockeryName,
  getMockeryDescription,
  getMockeryActionIconColor,
  getMockeryActionTier,
  getMockeryActionPrice
};
