
import { ShameAction } from '../hooks/useShameEffect';

// Base prices for shame actions
const basePrices: Record<ShameAction, number> = {
  tomatoes: 0.5,
  eggs: 1.5,
  stocks: 3.0
};

// Weekly discount configuration (in a real app, would come from backend)
const weeklyDiscountConfig = {
  discountedAction: 'tomatoes' as ShameAction,
  discountPercentage: 50,
  isFireSaleMonth: false,
  fireSaleDiscountPercentage: 30,
  fireSaleFeaturedCategories: ['tomatoes', 'eggs']
};

// Get base price for shame action
export const getShameActionPrice = (action: ShameAction): number => {
  return basePrices[action] || 0.5;
};

// Check if the action has weekly discount
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  return action === weeklyDiscountConfig.discountedAction;
};

// Get discounted price
export const getDiscountedShamePrice = (action: ShameAction): number => {
  const basePrice = getShameActionPrice(action);
  const discount = weeklyDiscountConfig.discountPercentage / 100;
  return basePrice * (1 - discount);
};

// Get shame action title
export const getShameActionTitle = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw Tomatoes';
    case 'eggs': return 'Throw Rotten Eggs';
    case 'stocks': return 'Place in Stocks';
    default: return 'Public Shaming';
  }
};

// Get shame action description
export const getShameActionDescription = (action: ShameAction, username: string): string => {
  switch (action) {
    case 'tomatoes':
      return `Show your disdain for ${username} by pelting them with ripe, juicy tomatoes! They'll appear tomato-splattered for 24 hours.`;
    case 'eggs':
      return `Express your royal disapproval of ${username} with a barrage of rotten eggs! They'll appear egg-covered for 24 hours.`;
    case 'stocks':
      return `Put ${username} in the medieval stocks for all to see! They'll be displayed in stocks for 24 hours.`;
    default:
      return `Publicly shame ${username} for their misdeeds!`;
  }
};

// Get shame action icon
export const getShameActionIcon = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes': return '🍅';
    case 'eggs': return '🥚';
    case 'stocks': return '🪵';
    default: return '📜';
  }
};

// Get shame action color
export const getShameActionColor = (action: ShameAction): { bg: string, text: string, border: string } => {
  switch (action) {
    case 'tomatoes':
      return {
        bg: 'bg-red-500/20',
        text: 'text-red-400',
        border: 'border-red-500/30'
      };
    case 'eggs':
      return {
        bg: 'bg-yellow-500/20',
        text: 'text-yellow-400',
        border: 'border-yellow-500/30'
      };
    case 'stocks':
      return {
        bg: 'bg-amber-800/20',
        text: 'text-amber-600',
        border: 'border-amber-800/30'
      };
    default:
      return {
        bg: 'bg-white/10',
        text: 'text-white/80',
        border: 'border-white/20'
      };
  }
};

// Get weekly discounted action
export const getWeeklyDiscountedAction = (): ShameAction => {
  return weeklyDiscountConfig.discountedAction;
};

// Get weekly discount percentage
export const getWeeklyDiscountPercentage = (): number => {
  return weeklyDiscountConfig.discountPercentage;
};

// Check if it's a fire sale month
export const isFireSaleMonth = (): boolean => {
  return weeklyDiscountConfig.isFireSaleMonth;
};

// Get fire sale discount percentage
export const getFireSaleDiscountPercentage = (): number => {
  return weeklyDiscountConfig.fireSaleDiscountPercentage;
};

// Get fire sale featured categories
export const getFireSaleFeaturedCategories = (): string[] => {
  return weeklyDiscountConfig.fireSaleFeaturedCategories;
};
