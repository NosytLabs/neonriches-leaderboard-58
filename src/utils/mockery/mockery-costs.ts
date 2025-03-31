
import { MockeryAction } from '@/types/mockery-types';

// Get cost for a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    tomatoes: 0.25,
    eggs: 0.50,
    crown: 1.00,
    stocks: 0.50,
    jester: 0.75,
    protection: 5.00,
    shame: 0.25
  };
  
  return costs[action] || 0.25;
};

// For backward compatibility
export const getMockeryActionPrice = getMockeryCost;

// Weekly discount utilities
export const hasWeeklyDiscount = (action: string): boolean => {
  return action === 'eggs';
};

export const getWeeklyDiscountedAction = (): string => {
  return 'eggs';
};

export const getDiscountedShamePrice = (action: string): number => {
  const originalPrice = typeof action === 'string' ? 
    parseFloat(action) : 
    getShameActionPrice(action);
    
  // Apply a 50% discount
  return originalPrice * 0.5;
};

export const getShameActionPrice = (action: string): number => {
  const prices: Record<string, number> = {
    'tomatoes': 0.25,
    'eggs': 0.50,
    'crown': 1.00,
    'stocks': 0.50,
    'jester': 0.75,
    'protection': 5.00,
    'shame': 0.25
  };
  
  return prices[action] || 0.25;
};
