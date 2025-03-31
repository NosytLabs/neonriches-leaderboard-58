
import { MockeryAction } from '@/types/mockery-types';
import { Egg, Hammer, AlertCircle } from 'lucide-react';
import React from 'react';

// For backward compatibility
type ShameAction = 'tomatoes' | 'eggs' | 'stocks' | 'shame';

// Weekly discount configuration
const WEEKLY_DISCOUNT_PERCENT = 50;
const WEEKLY_DISCOUNTED_ACTION: MockeryAction = 'tomatoes';

// Get shame action title
export const getShameActionTitle = (action: MockeryAction): string => {
  const titles: Record<string, string> = {
    'tomatoes': 'Throw Rotten Tomatoes',
    'eggs': 'Throw Putrid Eggs',
    'stocks': 'Place in Stocks',
    'shame': 'Public Shaming'
  };
  return titles[action] || 'Mock User';
};

// Get shame action description
export const getShameActionDescription = (action: MockeryAction): string => {
  const descriptions: Record<string, string> = {
    'tomatoes': 'Pelt this user with rotten tomatoes for all to see. A classic form of medieval public shaming.',
    'eggs': 'Shower this user with putrid eggs, leaving them smelly and disgraced for 24 hours.',
    'stocks': 'Lock this user in the public stocks, the ultimate medieval punishment for ostentatious spending.',
    'shame': 'Subject this user to public mockery and shame.'
  };
  return descriptions[action] || 'Subject this user to public mockery';
};

// Get shame action price
export const getShameActionPrice = (action: MockeryAction): number => {
  const prices: Record<string, number> = {
    'tomatoes': 0.25,
    'eggs': 0.50,
    'stocks': 1.00,
    'shame': 0.25
  };
  return prices[action] || 0.25;
};

// Get shame action icon
export const getShameActionIcon = (action: MockeryAction) => {
  const icons: Record<string, React.FC<any>> = {
    'tomatoes': AlertCircle, // Changed from Tomato to AlertCircle
    'eggs': Egg,
    'stocks': Hammer,
    'shame': AlertCircle // Changed from Tomato to AlertCircle
  };
  return icons[action] || AlertCircle;
};

// Check if an action has a weekly discount
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return action === WEEKLY_DISCOUNTED_ACTION;
};

// Get the weekly discounted action
export const getWeeklyDiscountedAction = (): MockeryAction => {
  return WEEKLY_DISCOUNTED_ACTION;
};

// Get discounted price for a shame action
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const regularPrice = getShameActionPrice(action);
  const discountMultiplier = (100 - WEEKLY_DISCOUNT_PERCENT) / 100;
  return hasWeeklyDiscount(action) 
    ? Number((regularPrice * discountMultiplier).toFixed(2)) 
    : regularPrice;
};

// Get shame action message
export const getShameActionMessage = (action: MockeryAction, username: string): string => {
  const messages: Record<string, string> = {
    'tomatoes': `You've pelted ${username} with rotten tomatoes!`,
    'eggs': `You've egged ${username} with putrid eggs!`,
    'stocks': `You've locked ${username} in the public stocks!`,
    'shame': `You've publicly shamed ${username}!`
  };
  return messages[action] || `You've publicly mocked ${username}!`;
};
