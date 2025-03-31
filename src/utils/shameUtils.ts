
import { MockeryAction, MockeryTier } from '@/types/mockery';

/**
 * Determine if there is a weekly discount for mockery actions
 */
export const hasWeeklyDiscount = (): boolean => {
  // For demo purposes, we'll just use day of week
  const now = new Date();
  const dayOfWeek = now.getDay();
  
  // Let's say discounts are on weekends (Saturday and Sunday)
  return dayOfWeek === 0 || dayOfWeek === 6;
};

/**
 * Get the mockery action that is discounted this week
 */
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // For demo purposes, rotate through actions based on week number
  const now = new Date();
  const weekNumber = Math.floor(now.getDate() / 7);
  
  const actions: MockeryAction[] = [
    'tomatoes', 'eggs', 'putridEggs', 'jester', 'crown',
    'shame', 'silence', 'courtJester', 'smokeBomb', 'protection'
  ];
  
  return actions[weekNumber % actions.length];
};

/**
 * Get the price of a mockery action
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  // Base prices for mockery actions
  const prices: Record<MockeryAction, number> = {
    tomatoes: 5,
    eggs: 10,
    stocks: 15,
    crown: 50,
    jester: 20,
    putridEggs: 25,
    silence: 35,
    courtJester: 40,
    smokeBomb: 30,
    shame: 15,
    protection: 100
  };
  
  return prices[action] || 10; // Default to 10 if action not found
};

/**
 * Get the discounted price for a mockery action
 */
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const originalPrice = getShameActionPrice(action);
  // 50% discount
  return originalPrice * 0.5;
};

/**
 * Get the icon color for a mockery action
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  // Map actions to colors
  const colors: Record<MockeryAction, string> = {
    tomatoes: '#f44336', // red
    eggs: '#ffeb3b',     // yellow
    stocks: '#795548',   // brown
    crown: '#ffd700',    // gold
    jester: '#9c27b0',   // purple
    putridEggs: '#8bc34a', // light green
    silence: '#607d8b',  // blue grey
    courtJester: '#e91e63', // pink
    smokeBomb: '#9e9e9e', // grey
    shame: '#ff5722',    // deep orange
    protection: '#2196f3' // blue
  };
  
  return colors[action] || '#9e9e9e'; // default to grey
};

/**
 * Get the mockery name for display
 */
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Throw Tomatoes',
    eggs: 'Throw Eggs',
    stocks: 'Put in Stocks',
    crown: 'Crown of Shame',
    jester: 'Jester Hat',
    putridEggs: 'Putrid Eggs',
    silence: 'Royal Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    shame: 'Public Shame',
    protection: 'Royal Protection'
  };
  
  return names[action] || action;
};

/**
 * Get the mockery description
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Throw tomatoes at the user for 1 hour.',
    eggs: 'Throw eggs at the user for 2 hours.',
    stocks: 'Put the user in stocks for 3 hours.',
    crown: 'Place a crown of shame on the user for a full day.',
    jester: 'Force the user to wear a jester hat for 4 hours.',
    putridEggs: 'Launch putrid eggs that stink for 6 hours.',
    silence: 'Prevent the user from commenting for 8 hours.',
    courtJester: 'Make the user the official court jester for 12 hours.',
    smokeBomb: 'Set off a smoke bomb on their profile for 3 hours.',
    shame: 'Ring the bell of shame on their profile for 5 hours.',
    protection: 'Protect yourself from mockery for 24 hours.'
  };
  
  return descriptions[action] || 'Apply a mysterious mockery to the user.';
};

/**
 * Get color class for mockery tier
 */
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colorClasses: Record<MockeryTier, string> = {
    common: 'text-gray-400 border-gray-400',
    uncommon: 'text-green-400 border-green-400',
    rare: 'text-blue-400 border-blue-400',
    epic: 'text-purple-400 border-purple-400',
    legendary: 'text-yellow-400 border-yellow-400'
  };
  
  return colorClasses[tier] || 'text-gray-400 border-gray-400';
};

/**
 * Get the mockery action icon
 */
export const getMockeryActionIcon = (action: MockeryAction): string => {
  const icons: Record<MockeryAction, string> = {
    tomatoes: '🍅',
    eggs: '🥚',
    stocks: '🔒',
    crown: '👑',
    jester: '🤡',
    putridEggs: '🥚',
    silence: '🤐',
    courtJester: '🎭',
    smokeBomb: '💨',
    shame: '🔔',
    protection: '🛡️'
  };
  
  return icons[action] || '❓';
};

export default {
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getShameActionPrice,
  getDiscountedShamePrice,
  getMockeryActionIconColor,
  getMockeryName,
  getMockeryDescription,
  getMockeryTierColorClass,
  getMockeryActionIcon
};
