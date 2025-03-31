
import { ShameAction } from '@/types/mockery-types';
import { Egg, Hammer, Tomato } from 'lucide-react';
import React from 'react';

// Weekly discount configuration
const WEEKLY_DISCOUNT_PERCENT = 50;
const WEEKLY_DISCOUNTED_ACTION: ShameAction = 'tomatoes';

// Get shame action title
export const getShameActionTitle = (action: ShameAction): string => {
  const titles: Record<ShameAction, string> = {
    'tomatoes': 'Throw Rotten Tomatoes',
    'eggs': 'Throw Putrid Eggs',
    'stocks': 'Place in Stocks'
  };
  return titles[action] || 'Mock User';
};

// Get shame action description
export const getShameActionDescription = (action: ShameAction): string => {
  const descriptions: Record<ShameAction, string> = {
    'tomatoes': 'Pelt this user with rotten tomatoes for all to see. A classic form of medieval public shaming.',
    'eggs': 'Shower this user with putrid eggs, leaving them smelly and disgraced for 24 hours.',
    'stocks': 'Lock this user in the public stocks, the ultimate medieval punishment for ostentatious spending.'
  };
  return descriptions[action] || 'Subject this user to public mockery';
};

// Get shame action price
export const getShameActionPrice = (action: ShameAction): number => {
  const prices: Record<ShameAction, number> = {
    'tomatoes': 0.25,
    'eggs': 0.50,
    'stocks': 1.00
  };
  return prices[action] || 0.25;
};

// Get shame action icon
export const getShameActionIcon = (action: ShameAction) => {
  const icons: Record<ShameAction, React.FC<any>> = {
    'tomatoes': Tomato,
    'eggs': Egg,
    'stocks': Hammer
  };
  return icons[action] || Tomato;
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
    'stocks': `You've locked ${username} in the public stocks!`
  };
  return messages[action] || `You've publicly mocked ${username}!`;
};
