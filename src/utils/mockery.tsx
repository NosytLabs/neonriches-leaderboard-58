
import React from 'react';
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { getMockeryActionIcon, getMockeryActionIconColor } from './mockery/mockery-icons';

// Get the display name for a mockery action
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<string, string> = {
    'tomatoes': 'Rotten Tomatoes',
    'eggs': 'Rotten Eggs',
    'crown': 'Fool\'s Crown',
    'stocks': 'Public Stocks',
    'jester': 'Court Jester',
    'protection': 'Royal Protection',
    'shame': 'Royal Shame'
  };
  
  return names[action] || 'Unknown Mockery';
};

// Get the description for a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<string, string> = {
    'tomatoes': 'Throw rotten tomatoes at this user',
    'eggs': 'Pelt this user with rotten eggs',
    'crown': 'Place a ridiculous crown on their profile',
    'stocks': 'Lock them in the public stocks',
    'jester': 'Make them wear the jester\'s hat',
    'protection': 'Protect yourself from mockery',
    'shame': 'Publicly shame this user'
  };
  
  return descriptions[action] || 'A mysterious form of mockery';
};

// Get the cost for a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<string, number> = {
    'tomatoes': 1.00,
    'eggs': 1.25,
    'crown': 2.50,
    'stocks': 3.00,
    'jester': 5.00,
    'protection': 10.00,
    'shame': 1.50
  };
  
  return costs[action] || 1.00;
};

// Get the tier for a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<string, MockeryTier> = {
    'tomatoes': 'common',
    'eggs': 'common',
    'crown': 'uncommon',
    'stocks': 'common',
    'jester': 'uncommon',
    'protection': 'legendary',
    'shame': 'common'
  };
  
  return tiers[action] || 'common';
};

// Get the CSS class for a mockery tier
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colors: Record<MockeryTier, string> = {
    'common': 'text-gray-400',
    'uncommon': 'text-green-400',
    'rare': 'text-blue-400',
    'epic': 'text-purple-400',
    'legendary': 'text-yellow-400',
    'basic': 'text-gray-400',
    'premium': 'text-blue-400',
    'royal': 'text-yellow-400',
    'silver': 'text-gray-400',
    'bronze': 'text-amber-700'
  };
  
  return colors[tier] || 'text-gray-400';
};

// Get the rarity for a mockery tier
export const getMockeryTierRarity = (tier: MockeryTier): string => {
  const rarities: Record<MockeryTier, string> = {
    'common': 'Common',
    'uncommon': 'Uncommon',
    'rare': 'Rare',
    'epic': 'Epic',
    'legendary': 'Legendary',
    'basic': 'Basic',
    'premium': 'Premium',
    'royal': 'Royal',
    'silver': 'Silver',
    'bronze': 'Bronze'
  };
  
  return rarities[tier] || 'Common';
};

// Get the duration for a mockery action in hours
export const getMockeryDuration = (action: MockeryAction): number => {
  const durations: Record<string, number> = {
    'tomatoes': 24,
    'eggs': 48,
    'crown': 72,
    'stocks': 24,
    'jester': 48,
    'protection': 168, // 7 days
    'shame': 24
  };
  
  return durations[action] || 24;
};

// Check if there's a weekly discount for a mockery action
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return action === getWeeklyDiscountedAction();
};

// Get the weekly discounted action
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // This would normally be dynamic based on the current week,
  // but we'll use a fixed value for simplicity
  return 'eggs';
};

// Get the discounted price for a mockery action
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const basePrice = getMockeryCost(action);
  return basePrice * 0.75; // 25% discount
};

// Get the price for a shame action
export const getShameActionPrice = (action: MockeryAction): number => {
  return hasWeeklyDiscount(action) ? getDiscountedShamePrice(action) : getMockeryCost(action);
};

// Get a message for a shame action
export const getShameActionMessage = (action: MockeryAction, username: string): string => {
  const messages: Record<string, string> = {
    'tomatoes': `You've thrown rotten tomatoes at ${username}!`,
    'eggs': `You've pelted ${username} with rotten eggs!`,
    'crown': `You've placed a fool\'s crown on ${username}!`,
    'stocks': `You've locked ${username} in the public stocks!`,
    'jester': `You've made ${username} wear the jester\'s hat!`,
    'protection': `You've bought royal protection for yourself!`,
    'shame': `You've publicly shamed ${username}!`
  };
  
  return messages[action] || `You've mocked ${username}!`;
};

// Get CSS class for active mockery
export const getActiveMockeryClass = (action?: MockeryAction): string => {
  const classes: Record<string, string> = {
    'tomatoes': 'mockery-tomatoes',
    'eggs': 'mockery-eggs',
    'crown': 'mockery-crown',
    'stocks': 'mockery-stocks',
    'jester': 'mockery-jester',
    'protection': 'mockery-protection',
    'shame': 'mockery-shame'
  };
  
  return action ? (classes[action] || '') : '';
};

// Render mockery icon
export const renderMockeryIcon = (action: MockeryAction, size = 24): JSX.Element => {
  const Icon = getMockeryActionIcon(action);
  const color = getMockeryActionIconColor(action);
  
  return <Icon className={`${color}`} size={size} />;
};
