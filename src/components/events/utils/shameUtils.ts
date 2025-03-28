
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

// Get color classes for shame action
export const getShameActionColor = (action: ShameAction): { bg: string, border: string, text: string } => {
  switch (action) {
    case 'tomatoes':
      return {
        bg: 'bg-red-500/10',
        border: 'border-red-500/30',
        text: 'text-red-400'
      };
    case 'eggs':
      return {
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/30',
        text: 'text-yellow-400'
      };
    case 'stocks':
      return {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        text: 'text-purple-400'
      };
    default:
      return {
        bg: 'bg-white/10',
        border: 'border-white/30',
        text: 'text-white'
      };
  }
};

// Get title for a shame action
export const getShameActionTitle = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw Tomatoes';
    case 'eggs': return 'Throw Rotten Eggs';
    case 'stocks': return 'Place in Stocks';
    default: return 'Public Shame';
  }
};

// Get description for a shame action
export const getShameActionDescription = (action: ShameAction, username: string): string => {
  switch (action) {
    case 'tomatoes':
      return `Pelt ${username} with rotten tomatoes for all to see. A classic form of medieval public ridicule.`;
    case 'eggs':
      return `Hurl rotten eggs at ${username}, covering them in putrid yolk. The stench will follow them for a day.`;
    case 'stocks':
      return `Place ${username} in the public stocks for a day. The ultimate medieval humiliation.`;
    default:
      return `Publicly shame ${username} for all the kingdom to see.`;
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
