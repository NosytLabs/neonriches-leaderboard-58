
import { MockeryAction } from '@/types/mockery';
import { MOCKERY_COSTS } from '@/utils/mockeryUtils';

// Get the price of a shame action
export const getShameActionPrice = (action: MockeryAction): number => {
  return MOCKERY_COSTS[action] || 10;
};

// Check if there's a weekly discount on a shame action
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  // Mock implementation - in a real app this would check against current promotions
  const discountedActions = ['tomatoes', 'eggs', 'roast'];
  return discountedActions.includes(action);
};

// Get the discounted price of a shame action
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const basePrice = getShameActionPrice(action);
  return Math.round(basePrice * 0.5); // 50% discount
};

// Get the maximum discount percentage for a shame action
export const getMaxDiscountPercentage = (): number => {
  return 50; // 50% discount
};

// Get the remaining time for the current discount period
export const getDiscountTimeRemaining = (): number => {
  // Mock implementation - in a real app this would calculate based on actual discount period
  const now = new Date();
  const endOfWeek = new Date();
  endOfWeek.setDate(endOfWeek.getDate() + (7 - endOfWeek.getDay()));
  endOfWeek.setHours(23, 59, 59, 999);
  
  return endOfWeek.getTime() - now.getTime();
};

// Format the discount time remaining as a human-readable string
export const formatDiscountTimeRemaining = (): string => {
  const timeRemaining = getDiscountTimeRemaining();
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  return `${days}d ${hours}h`;
};
