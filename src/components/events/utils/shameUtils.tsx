
import { MockeryAction, ShameAction } from '@/types/mockery';
import { Egg, Hammer, AlertCircle } from 'lucide-react';
import React from 'react';

// Weekly discount configuration
const WEEKLY_DISCOUNT_PERCENT = 50;
const WEEKLY_DISCOUNTED_ACTION: ShameAction = 'tomatoes';

// Get shame action title
export const getShameActionTitle = (action: ShameAction): string => {
  const titles: Record<ShameAction, string> = {
    'tomatoes': 'Throw Rotten Tomatoes',
    'eggs': 'Throw Putrid Eggs',
    'stocks': 'Place in Stocks',
    'shame': 'Public Shaming',
    'crown': 'Mock with Crown',
    'jester': 'Jesters Mockery'
  };
  return titles[action] || 'Mock User';
};

// Get shame action description
export const getShameActionDescription = (action: ShameAction): string => {
  const descriptions: Record<ShameAction, string> = {
    'tomatoes': 'Pelt this user with rotten tomatoes for all to see. A classic form of medieval public shaming.',
    'eggs': 'Shower this user with putrid eggs, leaving them smelly and disgraced for 24 hours.',
    'stocks': 'Lock this user in the public stocks, the ultimate medieval punishment for ostentatious spending.',
    'shame': 'Subject this user to public mockery and shame.',
    'crown': 'Place a ridiculous crown on their head to mock their royal aspirations.',
    'jester': 'Mark them as the court jester, subjecting them to ridicule.'
  };
  return descriptions[action] || 'Subject this user to public mockery';
};

// Get shame action price
export const getShameActionPrice = (action: ShameAction): number => {
  const prices: Record<ShameAction, number> = {
    'tomatoes': 0.25,
    'eggs': 0.50,
    'stocks': 1.00,
    'shame': 0.25,
    'crown': 0.75,
    'jester': 0.60
  };
  return prices[action] || 0.25;
};

// Get shame action icon
export const getShameActionIcon = (action: ShameAction) => {
  const icons: Record<ShameAction, React.FC<any>> = {
    'tomatoes': AlertCircle, // Changed from Tomato to AlertCircle
    'eggs': Egg,
    'stocks': Hammer,
    'shame': AlertCircle, // Changed from Tomato to AlertCircle
    'crown': AlertCircle,
    'jester': AlertCircle
  };
  return icons[action] || AlertCircle;
};

// Check if an action has a weekly discount
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  return action === WEEKLY_DISCOUNTED_ACTION;
};

// Get the weekly discounted action
export const getWeeklyDiscountedAction = (): ShameAction => {
  return WEEKLY_DISCOUNTED_ACTION;
};

// Get discounted price for a shame action
export const getDiscountedShamePrice = (action: ShameAction): number => {
  const regularPrice = getShameActionPrice(action);
  const discountMultiplier = (100 - WEEKLY_DISCOUNT_PERCENT) / 100;
  return hasWeeklyDiscount(action) 
    ? Number((regularPrice * discountMultiplier).toFixed(2)) 
    : regularPrice;
};

// Get shame action message
export const getShameActionMessage = (action: ShameAction, username: string): string => {
  const messages: Record<ShameAction, string> = {
    'tomatoes': `You've pelted ${username} with rotten tomatoes!`,
    'eggs': `You've egged ${username} with putrid eggs!`,
    'stocks': `You've locked ${username} in the public stocks!`,
    'shame': `You've publicly shamed ${username}!`,
    'crown': `You've mocked ${username} with a ridiculous crown!`,
    'jester': `You've made ${username} the court jester!`
  };
  return messages[action] || `You've publicly mocked ${username}!`;
};
