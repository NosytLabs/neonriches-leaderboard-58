
import { ShameAction, MockeryAction } from '@/types/mockery';
import { 
  Egg, 
  TrendingDown, 
  Tomato, 
  Crown, 
  Laugh, 
  Shield
} from 'lucide-react';
import React from 'react';

// Get the current weekly discounted action (would normally come from API/backend)
export const getWeeklyDiscountedAction = (): ShameAction => {
  // Use current week number to determine which action has a discount
  const date = new Date();
  const weekNum = Math.floor((date.getDate() - 1) / 7) + 1;
  
  // Rotate discount based on week number
  switch (weekNum % 3) {
    case 0: return 'tomatoes';
    case 1: return 'eggs';
    case 2: return 'stocks';
    default: return 'tomatoes';
  }
};

// Check if a specific action is discounted this week
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  return action === getWeeklyDiscountedAction();
};

// Base prices for each shame action
export const getShameActionPrice = (action: ShameAction): number => {
  switch (action) {
    case 'tomatoes': return 0.25;
    case 'eggs': return 0.50;
    case 'stocks': return 1.00;
    default: return 0.25;
  }
};

// Get discounted price (50% off)
export const getDiscountedShamePrice = (action: ShameAction): number => {
  return getShameActionPrice(action) * 0.5;
};

// Helper functions for shame action metadata
export const getShameActionIcon = (action: ShameAction | MockeryAction) => {
  switch (action) {
    case 'tomatoes': return <Tomato className="h-4 w-4" />;
    case 'eggs': return <Egg className="h-4 w-4" />;
    case 'stocks': return <TrendingDown className="h-4 w-4" />;
    default: return <Crown className="h-4 w-4" />;
  }
};

export const getShameActionTitle = (action: ShameAction | MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw Tomatoes';
    case 'eggs': return 'Throw Eggs';
    case 'stocks': return 'Tank Stocks';
    default: return 'Unknown Action';
  }
};

export const getShameActionDescription = (action: ShameAction | MockeryAction, username?: string): string => {
  const targetText = username ? ` on ${username}` : '';
  
  switch (action) {
    case 'tomatoes': 
      return `Shower your target with virtual tomatoes${targetText}, showing your disagreement in the most medieval way possible.`;
    case 'eggs': 
      return `Nothing says disapproval like eggs${targetText}. Digital and mess-free but gets the point across.`;
    case 'stocks': 
      return `Tank their virtual status${targetText} by showing everyone their stocks are falling.`;
    default: 
      return `Take action against this user${targetText}.`;
  }
};

// Check if we're in a fire sale month
export const isFireSaleMonth = (): boolean => {
  const currentMonth = new Date().getMonth();
  // Fire sale during summer months (June, July, August)
  return [5, 6, 7].includes(currentMonth);
};

// Get fire sale discount percentage
export const getFireSaleDiscountPercentage = (): number => {
  return isFireSaleMonth() ? 40 : 0;
};

export default {
  getWeeklyDiscountedAction,
  hasWeeklyDiscount,
  getShameActionPrice,
  getDiscountedShamePrice,
  getShameActionIcon,
  getShameActionTitle,
  getShameActionDescription,
  isFireSaleMonth,
  getFireSaleDiscountPercentage
};
