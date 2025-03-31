
import { MockeryAction, ShameAction } from '@/types/mockery-types';
import { AlertCircle, Egg, Hammer, Crown, Theater } from 'lucide-react';
import React from 'react';

// Get shame action title
export const getShameActionTitle = (action: ShameAction): string => {
  const titles: Record<ShameAction, string> = {
    'tomatoes': 'Throw Rotten Tomatoes',
    'eggs': 'Throw Eggs',
    'crown': 'Mock with Crown',
    'jester': 'Jesters Mockery'
  };
  return titles[action] || 'Mock User';
};

// Get shame action description
export const getShameActionDescription = (action: ShameAction): string => {
  const descriptions: Record<ShameAction, string> = {
    'tomatoes': 'Pelt this user with rotten tomatoes for all to see.',
    'eggs': 'Shower this user with eggs, leaving them visually disgraced for 24 hours.',
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
    'crown': 0.75,
    'jester': 0.60
  };
  return prices[action] || 0.25;
};

// Get shame action icon
export const getShameActionIcon = (action: ShameAction) => {
  const icons: Record<ShameAction, React.FC<any>> = {
    'tomatoes': AlertCircle,
    'eggs': Egg,
    'crown': Crown,
    'jester': Theater
  };
  return icons[action] || AlertCircle;
};

// Get shame action message
export const getShameActionMessage = (action: ShameAction, username: string): string => {
  const messages: Record<ShameAction, string> = {
    'tomatoes': `You've pelted ${username} with rotten tomatoes!`,
    'eggs': `You've egged ${username}!`,
    'crown': `You've mocked ${username} with a ridiculous crown!`,
    'jester': `You've made ${username} the court jester!`
  };
  return messages[action] || `You've publicly mocked ${username}!`;
};

// Added missing functions that were causing errors
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  // Weekly discounted actions (for simplicity, just eggs)
  const discountedActions: ShameAction[] = ['eggs'];
  return discountedActions.includes(action);
};

export const getWeeklyDiscountedAction = (): ShameAction => {
  // For fixed content, always return eggs as the discounted action
  return 'eggs';
};

export const getDiscountedShamePrice = (action: ShameAction): number => {
  const originalPrice = getShameActionPrice(action);
  // Apply a 50% discount
  return originalPrice * 0.5;
};

