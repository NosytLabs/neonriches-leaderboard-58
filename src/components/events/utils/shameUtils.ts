
import { ShameAction } from '../hooks/useShameEffect';

// Predefined weekly discounts for demonstration
const WEEKLY_DISCOUNTS: { [key: string]: ShameAction } = {
  '0': 'tomatoes',  // Sundays
  '1': 'eggs',      // Mondays
  '2': 'stocks',    // Tuesdays
  '3': 'tomatoes',  // Wednesdays
  '4': 'eggs',      // Thursdays
  '5': 'stocks',    // Fridays
  '6': 'tomatoes'   // Saturdays
};

// Standard prices for shame actions
const SHAME_PRICES: { [key in ShameAction]: number } = {
  'tomatoes': 0.50,
  'eggs': 0.75,
  'stocks': 1.00
};

// Get the current day of the week
export const getCurrentDayOfWeek = (): string => {
  return new Date().getDay().toString();
};

// Get the current month
export const getCurrentMonth = (): number => {
  return new Date().getMonth();
};

// Get this week's featured discounted action
export const getWeeklyDiscountedAction = (): ShameAction => {
  const dayOfWeek = getCurrentDayOfWeek();
  return WEEKLY_DISCOUNTS[dayOfWeek];
};

// Check if an action has a weekly discount
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  return getWeeklyDiscountedAction() === action;
};

// Get the regular price for a shame action
export const getShameActionPrice = (action: ShameAction): number => {
  return SHAME_PRICES[action];
};

// Get the weekly discount percentage for an action
export const getWeeklyDiscountPercentage = (action: ShameAction): number => {
  return hasWeeklyDiscount(action) ? 50 : 0;
};

// Get the discounted price for a shame action
export const getDiscountedShamePrice = (action: ShameAction): number => {
  const regularPrice = getShameActionPrice(action);
  const discountPercentage = getWeeklyDiscountPercentage(action);
  return regularPrice * (1 - (discountPercentage / 100));
};

// Get icon for a shame action
export const getShameActionIcon = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes': return '🍅';
    case 'eggs': return '🥚';
    case 'stocks': return '🪵';
    default: return '📜';
  }
};

// Check if it's a Fire Sale month (quarterly: March, June, September, December)
export const isFireSaleMonth = (): boolean => {
  const month = getCurrentMonth();
  // Fire Sale happens every quarter (months 2, 5, 8, 11) - March, June, September, December
  return month === 2 || month === 5 || month === 8 || month === 11;
};

// Get the Fire Sale discount percentage
export const getFireSaleDiscountPercentage = (): number => {
  // Random discount between 30-70%
  // You could make this deterministic based on the month if needed
  const baseDiscount = 30;
  const additionalDiscount = Math.floor(Math.random() * 40); // 0-40 additional discount
  return baseDiscount + additionalDiscount;
};

// Get the Fire Sale featured categories
export const getFireSaleFeaturedCategories = (): string[] => {
  const month = getCurrentMonth();
  
  // Define different categories for different Fire Sale months
  switch(month) {
    case 2: // March - Focus on profile aesthetics
      return ['border', 'background', 'effect'];
    case 5: // June - Focus on status items
      return ['title', 'badge', 'effect'];
    case 8: // September - Focus on interactive elements
      return ['animation', 'banner', 'avatar'];
    case 11: // December - Holiday special with all categories
      return ['border', 'background', 'title', 'badge', 'effect'];
    default:
      return ['border', 'background', 'effect'];
  }
};
