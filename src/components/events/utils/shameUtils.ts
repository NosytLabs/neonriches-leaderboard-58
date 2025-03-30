
import { ShameAction } from '../hooks/useShameEffect';

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

export default {
  getWeeklyDiscountedAction,
  hasWeeklyDiscount,
  getShameActionPrice,
  getDiscountedShamePrice
};
