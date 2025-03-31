
import { MockeryAction, ShameAction } from '@/types/mockery';
import { AlertCircle, Egg, Hammer, Crown, Theater, Shield, Bell } from 'lucide-react';
import React from 'react';

// Get shame action title
export const getShameActionTitle = (action: ShameAction): string => {
  const titles: Record<string, string> = {
    'tomatoes': 'Throw Rotten Tomatoes',
    'eggs': 'Throw Eggs',
    'crown': 'Mock with Crown',
    'jester': 'Jesters Mockery',
    'stocks': 'Place in Stocks',
    'shame': 'Public Shaming',
    'protection': 'Royal Protection'
  };
  return titles[action] || 'Mock User';
};

// Get shame action description
export const getShameActionDescription = (action: ShameAction): string => {
  const descriptions: Record<string, string> = {
    'tomatoes': 'Pelt this user with rotten tomatoes for all to see.',
    'eggs': 'Shower this user with eggs, leaving them visually disgraced for 24 hours.',
    'crown': 'Place a ridiculous crown on their head to mock their royal aspirations.',
    'jester': 'Mark them as the court jester, subjecting them to ridicule.',
    'stocks': 'Place this user in the public stocks for all to shame.',
    'shame': 'Subject this user to public mockery and shame.',
    'protection': 'Grant royal protection against mockery for 7 days.'
  };
  return descriptions[action] || 'Subject this user to public mockery';
};

// Get shame action price
export const getShameActionPrice = (action: ShameAction): number => {
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

// Get shame action icon
export const getShameActionIcon = (action: ShameAction) => {
  const icons: Record<string, React.FC<any>> = {
    'tomatoes': AlertCircle,
    'eggs': Egg,
    'crown': Crown,
    'jester': Theater,
    'stocks': Hammer,
    'shame': Bell,
    'protection': Shield
  };
  return icons[action] || AlertCircle;
};

// Get shame action message
export const getShameActionMessage = (action: ShameAction, username: string): string => {
  const messages: Record<string, string> = {
    'tomatoes': `You've pelted ${username} with rotten tomatoes!`,
    'eggs': `You've egged ${username}!`,
    'crown': `You've mocked ${username} with a ridiculous crown!`,
    'jester': `You've made ${username} the court jester!`,
    'stocks': `You've placed ${username} in the stocks!`,
    'shame': `You've publicly shamed ${username}!`,
    'protection': `You've granted ${username} royal protection!`
  };
  return messages[action] || `You've publicly mocked ${username}!`;
};

// Add weekly discount functions
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
