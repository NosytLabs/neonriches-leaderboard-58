
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { LucideIcon, Target, Egg, Crown, Shield, User, Clock } from 'lucide-react';

/**
 * Get a display name for a mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    'taunt': 'Taunt',
    'shame': 'Shame',
    'jester': 'Jester',
    'mock': 'Mock',
    'challenge': 'Challenge',
    'joust': 'Joust',
    'duel': 'Duel',
    'tomatoes': 'Rotten Tomatoes',
    'eggs': 'Rancid Eggs',
    'stocks': 'Public Stocks',
    'crown': 'Fool\'s Crown',
    'putridEggs': 'Putrid Eggs',
    'silence': 'Royal Silence',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'protection': 'Royal Protection'
  };

  return names[action] || action;
};

/**
 * Get a description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    'taunt': 'Taunt your opponent with a custom message',
    'shame': 'Publicly shame someone for all to see',
    'jester': 'Mark them as the court jester',
    'mock': 'Mock your opponent with a custom message',
    'challenge': 'Challenge someone to increase their spending',
    'joust': 'Challenge a rival to a spending joust',
    'duel': 'Initiate a spending duel with another user',
    'tomatoes': 'Splatter their profile with rotten tomatoes for 24 hours',
    'eggs': 'Pelt their profile with rancid eggs for 24 hours',
    'stocks': 'Lock them in the public stocks for all to see for 3 days',
    'crown': 'Force them to wear a fool\'s crown for a week',
    'putridEggs': 'Assault them with the most putrid eggs in the kingdom for 3 days',
    'silence': 'Prevent them from speaking in public forums for 12 hours',
    'courtJester': 'Assign them as your personal jester for 3 days',
    'smokeBomb': 'Drop a smoke bomb on their profile for 24 hours',
    'protection': 'Protect yourself from mockery for 3 days'
  };

  return descriptions[action] || 'Apply a mysterious effect';
};

/**
 * Get the price for a mockery action
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    'taunt': 5,
    'shame': 10,
    'jester': 15,
    'mock': 5,
    'challenge': 20,
    'joust': 50,
    'duel': 100,
    'tomatoes': 5,
    'eggs': 10,
    'stocks': 20,
    'crown': 100,
    'putridEggs': 25,
    'silence': 30,
    'courtJester': 50,
    'smokeBomb': 15,
    'protection': 75
  };

  return prices[action] || 5;
};

/**
 * Get the color for a mockery action icon
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colors: Record<MockeryAction, string> = {
    'taunt': '#ef4444',
    'shame': '#ef4444',
    'jester': '#a855f7',
    'mock': '#ef4444',
    'challenge': '#3b82f6',
    'joust': '#f59e0b',
    'duel': '#f59e0b',
    'tomatoes': '#ef4444',
    'eggs': '#f59e0b',
    'stocks': '#6b7280',
    'crown': '#f59e0b',
    'putridEggs': '#22c55e',
    'silence': '#3b82f6',
    'courtJester': '#a855f7',
    'smokeBomb': '#6b7280',
    'protection': '#22c55e'
  };

  return colors[action] || '#6b7280';
};

/**
 * Get the tier for a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    'taunt': 'common',
    'shame': 'common',
    'jester': 'uncommon',
    'mock': 'common',
    'challenge': 'uncommon',
    'joust': 'rare',
    'duel': 'legendary',
    'tomatoes': 'common',
    'eggs': 'uncommon',
    'stocks': 'rare',
    'crown': 'legendary',
    'putridEggs': 'rare',
    'silence': 'epic',
    'courtJester': 'rare',
    'smokeBomb': 'uncommon',
    'protection': 'legendary'
  };

  return tiers[action] || 'common';
};

/**
 * Get color class based on mockery tier
 */
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  switch (tier) {
    case 'legendary':
      return 'text-royal-gold';
    case 'epic':
      return 'text-purple-500';
    case 'rare': 
      return 'text-blue-500';
    case 'uncommon':
      return 'text-green-500';
    case 'common':
    default:
      return 'text-gray-400';
  }
};

/**
 * Get the discounted price for a mockery action
 */
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const regularPrice = getMockeryActionPrice(action);
  return regularPrice * 0.5; // 50% discount
};

/**
 * Get the cost of a mockery action
 */
export const getMockeryCost = (action: MockeryAction): number => {
  return getMockeryActionPrice(action);
};

/**
 * Get weekly discount status
 */
export const hasWeeklyDiscount = (): boolean => {
  // Mock implementation
  return true;
};

export default {
  getMockeryName,
  getMockeryDescription,
  getMockeryActionPrice,
  getMockeryActionIconColor,
  getMockeryTier,
  getMockeryTierColorClass,
  getDiscountedShamePrice,
  getMockeryCost,
  hasWeeklyDiscount
};
