
import React from 'react';
import { MockeryAction, MockeryTier, TeamColor } from '@/types/mockery';
import { LucideIcon } from 'lucide-react';
import { getMockeryActionIcon } from './mockery/mockery-icons';

/**
 * Get display name for a mockery action
 */
export function getMockeryName(action: MockeryAction): string {
  const names: Record<string, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    crown: 'Mock Crown',
    stocks: 'Public Stocks',
    jester: 'Court Jester',
    protection: 'Royal Protection',
    shame: 'Public Shame',
    putridEggs: 'Putrid Eggs',
    silence: 'Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb'
  };
  return names[action] || 'Unknown Mockery';
}

/**
 * Get description for a mockery action
 */
export function getMockeryDescription(action: MockeryAction): string {
  const descriptions: Record<string, string> = {
    tomatoes: 'Throw rotten tomatoes at this user to humiliate them publicly.',
    eggs: 'Throw rotten eggs at this user to make them stink of shame.',
    crown: 'Place a ridiculous crown on their head to mock their achievements.',
    stocks: 'Lock them in the royal stocks for public ridicule.',
    jester: 'Force them to wear the court jester outfit for all to see.',
    protection: 'Protect a target from mockery for a period',
    shame: 'Publicly shame this user for all to see.',
    putridEggs: 'Throw extra putrid eggs for maximum stench.',
    silence: 'Silence this user from the public court.',
    courtJester: 'Make them the official court jester.',
    smokeBomb: 'Throw a smoke bomb to temporarily hide their profile.'
  };
  return descriptions[action] || 'A mysterious form of mockery.';
}

/**
 * Get the cost for a mockery action
 */
export function getMockeryCost(action: MockeryAction): number {
  const costs: Record<string, number> = {
    tomatoes: 0.25,
    eggs: 0.50,
    crown: 3.00,
    stocks: 0.75,
    jester: 1.50,
    protection: 3.00,
    shame: 0.25,
    putridEggs: 0.75,
    silence: 1.50,
    courtJester: 1.50,
    smokeBomb: 0.75
  };
  return costs[action] || 0.25;
}

/**
 * Get the mockery tier
 */
export function getMockeryTier(action: MockeryAction): MockeryTier {
  const tiers: Record<string, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'common',
    crown: 'legendary',
    stocks: 'uncommon',
    jester: 'uncommon',
    protection: 'legendary',
    shame: 'common',
    putridEggs: 'uncommon',
    silence: 'epic',
    courtJester: 'rare',
    smokeBomb: 'epic'
  };
  return tiers[action] || 'common';
}

/**
 * Get the color class for a mockery tier
 */
export function getMockeryTierColorClass(tier: MockeryTier): string {
  const colors: Record<string, string> = {
    common: 'text-gray-400',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-yellow-400'
  };
  return colors[tier] || 'text-gray-400';
}

/**
 * Get the color class for a mockery action icon
 */
export function getMockeryActionIconColor(action: MockeryAction): string {
  const colors: Record<string, string> = {
    tomatoes: 'text-red-500',
    eggs: 'text-yellow-500',
    crown: 'text-yellow-400',
    stocks: 'text-gray-500',
    jester: 'text-purple-500',
    protection: 'text-green-500',
    shame: 'text-red-500',
    putridEggs: 'text-green-600',
    silence: 'text-indigo-400',
    courtJester: 'text-purple-400',
    smokeBomb: 'text-gray-400'
  };
  return colors[action] || 'text-gray-400';
}

/**
 * Get the duration for a mockery action in hours
 */
export function getMockeryDuration(action: MockeryAction): number {
  const durations: Record<string, number> = {
    tomatoes: 24,
    eggs: 48,
    crown: 72,
    stocks: 24,
    jester: 48,
    protection: 168, // 7 days
    shame: 24,
    putridEggs: 48,
    silence: 12,
    courtJester: 72,
    smokeBomb: 6
  };
  return durations[action] || 24;
}

/**
 * Get the CSS class for an active mockery
 */
export function getActiveMockeryClass(action: MockeryAction): string {
  const classes: Record<string, string> = {
    tomatoes: 'tomato-stain',
    eggs: 'egg-stain',
    crown: 'mock-crown',
    stocks: 'in-stocks',
    jester: 'jester-outfit',
    protection: 'royal-protection',
    shame: 'public-shame',
    putridEggs: 'putrid-stain',
    silence: 'silenced-effect',
    courtJester: 'court-jester',
    smokeBomb: 'smoke-effect'
  };
  return classes[action] || '';
}

/**
 * Get the weekly discounted action
 */
export function getWeeklyDiscountedAction(): MockeryAction {
  // In a real app, this would come from an API or be date-based
  // For now, just a static value based on the current week
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  const actions: MockeryAction[] = ['tomatoes', 'eggs', 'stocks', 'crown', 'jester'];
  return actions[weekNumber % actions.length];
}

/**
 * Check if an action has a weekly discount
 */
export function hasWeeklyDiscount(action: MockeryAction): boolean {
  return action === getWeeklyDiscountedAction();
}

/**
 * Get the discounted price for a mockery action
 */
export function getDiscountedShamePrice(action: MockeryAction): number {
  return getShameActionPrice(action) * 0.5;
}

/**
 * Get the standard price for a shame action
 */
export function getShameActionPrice(action: MockeryAction): number {
  return getMockeryCost(action);
}

/**
 * Get action message for a mockery
 */
export function getShameActionMessage(action: MockeryAction, username: string): string {
  const messages: Record<string, string> = {
    tomatoes: `${username} has been pelted with rotten tomatoes!`,
    eggs: `${username} stinks of rotten eggs!`,
    crown: `${username} wears a fool's crown!`,
    stocks: `${username} has been locked in the public stocks!`,
    jester: `${username} has been dressed as the court jester!`,
    protection: `${username} is now protected from mockery.`,
    shame: `${username} has been publicly shamed!`,
    putridEggs: `${username} reeks of putrid eggs!`,
    silence: `${username} has been silenced from the court!`,
    courtJester: `${username} is now the official court jester!`,
    smokeBomb: `${username}'s profile is engulfed in smoke!`
  };
  return messages[action] || `${username} has been mocked!`;
}

/**
 * Helper function to render mockery icon with proper color
 */
export function renderMockeryIcon(action: MockeryAction, size = 16, className = ''): React.ReactNode {
  const IconComponent = getMockeryActionIcon(action);
  const colorClass = getMockeryActionIconColor(action);
  
  return React.createElement(IconComponent, { 
    className: `${colorClass} ${className}`,
    size: size
  });
}

// Alias functions for backward compatibility
export const getMockeryActionTitle = getMockeryName;
export const getMockeryActionDescription = getMockeryDescription;
export const getMockeryActionPrice = getMockeryCost;
