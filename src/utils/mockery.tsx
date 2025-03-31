
import React from 'react';
import { MockeryAction, MockeryTier, ExtendedMockeryAction } from '@/types/mockery';
import { AlertCircle, Egg, Crown, Theater, Target, Shield, Bell } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Get the display title for a mockery action
 */
export const getMockeryActionTitle = (action: MockeryAction | string): string => {
  const titles: Record<string, string> = {
    'tomatoes': 'Throw Tomatoes',
    'eggs': 'Throw Eggs',
    'crown': 'Mock Crown',
    'jester': 'Court Jester',
    'stocks': 'Place in Stocks',
    'shame': 'Public Shaming',
    'protection': 'Royal Protection'
  };
  return titles[action] || action.charAt(0).toUpperCase() + action.slice(1);
};

/**
 * Get a description for a mockery action
 */
export const getMockeryActionDescription = (action: MockeryAction | string): string => {
  const descriptions: Record<string, string> = {
    'tomatoes': 'Pelt this user with rotten tomatoes for all to see.',
    'eggs': 'Shower this user with eggs, leaving them visually disgraced for 24 hours.',
    'crown': 'Place a ridiculous crown on their head to mock their royal aspirations.',
    'jester': 'Mark them as the court jester, subjecting them to ridicule.',
    'stocks': 'Place this user in the public stocks for all to shame.',
    'shame': 'Subject this user to public mockery and shame.',
    'protection': 'Grant royal protection against mockery for 7 days.'
  };
  return descriptions[action] || 'Apply mockery to this user.';
};

/**
 * Get the price of a mockery action
 */
export const getMockeryActionPrice = (action: MockeryAction | string): number => {
  const prices: Record<string, number> = {
    'tomatoes': 0.25,
    'eggs': 0.50,
    'crown': 0.75,
    'jester': 0.60,
    'stocks': 1.00,
    'shame': 1.25,
    'protection': 5.00
  };
  return prices[action] || 0.25;
};

/**
 * Get the tier of a mockery action
 */
export const getMockeryTier = (action: MockeryAction | string): MockeryTier => {
  const tiers: Record<string, MockeryTier> = {
    'tomatoes': 'common',
    'eggs': 'common',
    'crown': 'uncommon',
    'jester': 'uncommon',
    'stocks': 'rare',
    'shame': 'rare',
    'protection': 'legendary'
  };
  return tiers[action] || 'common';
};

/**
 * Get the CSS color class for a mockery tier
 */
export const getMockeryTierColorClass = (tier: MockeryTier | string): string => {
  const colorClasses: Record<string, string> = {
    'common': 'text-gray-400',
    'uncommon': 'text-green-400',
    'rare': 'text-blue-400',
    'epic': 'text-purple-400',
    'legendary': 'text-royal-gold'
  };
  return colorClasses[tier] || 'text-gray-400';
};

/**
 * Get the appropriate icon for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction | string): LucideIcon => {
  const icons: Record<string, LucideIcon> = {
    'tomatoes': AlertCircle,
    'eggs': Egg,
    'crown': Crown,
    'jester': Theater,
    'stocks': AlertCircle,
    'shame': Bell,
    'protection': Shield
  };
  return icons[action] || Target;
};

/**
 * Get the appropriate color for a mockery action icon
 */
export const getMockeryActionIconColor = (action: MockeryAction | string): string => {
  const tier = getMockeryTier(action);
  return getMockeryTierColorClass(tier);
};

/**
 * Get the duration of a mockery action in hours
 */
export const getMockeryActionDuration = (action: MockeryAction | string): number => {
  const durations: Record<string, number> = {
    'tomatoes': 4,
    'eggs': 8,
    'crown': 12,
    'jester': 12,
    'stocks': 24,
    'shame': 24,
    'protection': 168 // 7 days
  };
  return durations[action] || 4;
};

/**
 * Get CSS class for active mockery status
 */
export const getActiveMockeryClass = (action: MockeryAction | null): string => {
  if (!action) return '';
  
  const classes: Record<string, string> = {
    'tomatoes': 'border-red-500 bg-red-500/10',
    'eggs': 'border-yellow-500 bg-yellow-500/10',
    'crown': 'border-royal-gold bg-royal-gold/10',
    'jester': 'border-purple-500 bg-purple-500/10',
    'stocks': 'border-blue-500 bg-blue-500/10',
    'shame': 'border-red-800 bg-red-800/10',
    'protection': 'border-green-500 bg-green-500/10'
  };
  
  return classes[action] || '';
};

// For backward compatibility
export const getMockeryName = getMockeryActionTitle;
export const getMockeryDescription = getMockeryActionDescription;
export const getMockeryCost = getMockeryActionPrice;
