
// Re-export all mockery utility functions from the organized structure
export * from './mockery-names';
export * from './mockery-descriptions';
export * from './mockery-costs';
export * from './mockery-icons';
export * from './mockery-tiers';
export * from './mockery-effects';
export * from './mockery-durations';

// Create missing functions that are imported elsewhere
export const getMockeryActionIconColor = (action: any): string => {
  const colorClasses: Record<string, string> = {
    tomatoes: 'text-red-500',
    eggs: 'text-yellow-500',
    putridEggs: 'text-green-500',
    dungeons: 'text-gray-700',
    immune: 'text-blue-400',
    crown: 'text-yellow-400',
    stocks: 'text-brown-500',
    dunce: 'text-orange-400',
    jester: 'text-purple-400',
    courtJester: 'text-purple-600',
    jest: 'text-purple-300',
    silence: 'text-gray-400',
    smokeBomb: 'text-gray-600',
    glitterBomb: 'text-pink-400',
    royalPie: 'text-white',
    protection: 'text-green-400',
    defeat: 'text-red-600',
    taunt: 'text-orange-500'
  };
  
  return colorClasses[action] || 'text-gray-400';
};

// Add missing utility functions
export const getMockeryEffectClass = (action: any): string => {
  const effectClasses: Record<string, string> = {
    tomatoes: 'shame-effect-tomatoes',
    eggs: 'shame-effect-eggs',
    putridEggs: 'shame-effect-putrid-eggs',
    dungeons: 'shame-effect-dungeons',
    stocks: 'shame-effect-stocks',
    dunce: 'shame-effect-dunce',
    jester: 'shame-effect-jester', 
    mockery: 'shame-effect-general',
    protection: 'protection-effect',
    shame: 'shame-effect-general',
    silence: 'shame-effect-silence',
    courtJester: 'shame-effect-court-jester',
    smokeBomb: 'shame-effect-smoke',
    glitterBomb: 'shame-effect-glitter',
    guillotine: 'shame-effect-guillotine',
    royalPie: 'shame-effect-pie'
  };

  return effectClasses[action] || 'shame-effect-general';
};

export const getMockeryCooldown = (action: string, tier: string): number => {
  const cooldowns: Record<string, number> = {
    'basic': 3600, // 1 hour
    'premium': 1800, // 30 minutes
    'royal': 900, // 15 minutes
    'legendary': 300 // 5 minutes
  };
  
  return cooldowns[tier] || 3600;
};

export const hasWeeklyDiscount = (action: string): boolean => {
  const WEEKLY_DISCOUNTED_ACTION = 'tomatoes';
  return action === WEEKLY_DISCOUNTED_ACTION;
};

export const getWeeklyDiscountedAction = (): string => {
  return 'tomatoes';
};

export const getShameActionPrice = (action: string): number => {
  const prices: Record<string, number> = {
    'tomatoes': 0.25,
    'eggs': 0.50,
    'putridEggs': 0.75,
    'stocks': 1.00,
    'shame': 0.25
  };
  
  return prices[action] || 0.25;
};

export const getDiscountedShamePrice = (action: string): number => {
  const regularPrice = getShameActionPrice(action);
  const WEEKLY_DISCOUNT_PERCENT = 50;
  const discountMultiplier = (100 - WEEKLY_DISCOUNT_PERCENT) / 100;
  
  return hasWeeklyDiscount(action) 
    ? Number((regularPrice * discountMultiplier).toFixed(2)) 
    : regularPrice;
};

export const getShameActionMessage = (action: string, username: string): string => {
  const messages: Record<string, string> = {
    'tomatoes': `You've pelted ${username} with rotten tomatoes!`,
    'eggs': `You've egged ${username} with eggs!`,
    'putridEggs': `You've pelted ${username} with putrid eggs!`,
    'stocks': `You've locked ${username} in the public stocks!`,
    'shame': `You've publicly shamed ${username}!`
  };
  
  return messages[action] || `You've mocked ${username}!`;
};

// Import types
import { MockeryAction, ExtendedMockeryAction, MockeryTier, ShameAction } from '@/types/mockery-types';

// Re-export types
export type { MockeryAction, ExtendedMockeryAction, MockeryTier, ShameAction };

// Create a helper function to render mockery icons with React
import React from 'react';
import { getMockeryActionIcon } from './mockery-icons';

/**
 * Render a mockery action icon with the given size and className
 */
export const renderMockeryIcon = (action: MockeryAction, className: string = "h-4 w-4") => {
  const IconComponent = getMockeryActionIcon(action);
  return <IconComponent className={className} />;
};

// Create a price function that combines tier and action
export const getMockeryPrice = (action: MockeryAction, tier: MockeryTier): number => {
  const basePrice = getMockeryActionPrice(action);
  const tierMultiplier = {
    common: 1,
    uncommon: 1.5,
    rare: 2,
    epic: 2.5,
    legendary: 3,
    basic: 1,
    premium: 2,
    royal: 3,
    bronze: 1,
    silver: 1.5
  }[tier] || 1;
  
  return basePrice * tierMultiplier;
};
