
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { Crown, Egg, Target, ShieldAlert, UserX, AlertTriangle, Flame, Award, Shield } from 'lucide-react';

/**
 * Get the price for a mockery action
 * @param action The mockery action
 * @returns The price in USD
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    tomatoes: 1,
    eggs: 2,
    putridEggs: 3,
    crown: 5,
    stocks: 7,
    jester: 10,
    shame: 15,
    silence: 20,
    courtJester: 25,
    smokeBomb: 30,
    protection: 35,
    taunt: 5,
    mock: 7,
    challenge: 10,
    joust: 15,
    duel: 20
  };
  
  return prices[action] || 5;
};

/**
 * For backward compatibility 
 */
export const getShameActionPrice = getMockeryActionPrice;

/**
 * Get mockery tier based on action
 * @param action The mockery action
 * @returns The tier (e.g., 'common', 'rare', etc.)
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'common',
    putridEggs: 'uncommon',
    crown: 'uncommon',
    stocks: 'rare',
    jester: 'rare',
    shame: 'epic',
    silence: 'epic',
    courtJester: 'legendary',
    smokeBomb: 'legendary',
    protection: 'royal',
    taunt: 'common',
    mock: 'uncommon',
    challenge: 'rare',
    joust: 'epic',
    duel: 'legendary'
  };
  
  return tiers[action] || 'common';
};

/**
 * Get mockery cost
 * @param action The mockery action
 * @returns The cost in dollars
 */
export const getMockeryCost = (action: MockeryAction): number => {
  return getMockeryActionPrice(action);
};

/**
 * Get mockery tier color class for UI
 * @param tier The mockery tier
 * @returns CSS class for the tier color
 */
export const getMockeryTierColorClass = (tier: string): string => {
  const colorClasses: Record<string, string> = {
    common: 'text-gray-300 border-gray-300',
    uncommon: 'text-green-400 border-green-400',
    rare: 'text-blue-400 border-blue-400',
    epic: 'text-purple-400 border-purple-400',
    legendary: 'text-yellow-400 border-yellow-400',
    royal: 'text-red-400 border-red-400',
    basic: 'text-gray-300 border-gray-300',
    premium: 'text-purple-400 border-purple-400',
    silver: 'text-gray-300 border-gray-300',
    bronze: 'text-amber-600 border-amber-600'
  };
  
  return colorClasses[tier] || colorClasses['common'];
};

/**
 * Get mockery action icon component
 * @param action The mockery action
 * @returns The icon component
 */
export const getMockeryActionIcon = (action: MockeryAction) => {
  const icons: Record<MockeryAction, any> = {
    tomatoes: Target,
    eggs: Egg,
    putridEggs: Egg,
    crown: Crown,
    stocks: AlertTriangle,
    jester: Award,
    shame: Flame,
    silence: UserX,
    courtJester: Award,
    smokeBomb: Target,
    protection: ShieldAlert,
    taunt: Target,
    mock: Flame,
    challenge: Shield,
    joust: Shield,
    duel: Target
  };
  
  return icons[action] || Target;
};

/**
 * Get mockery action icon color
 * @param action The mockery action
 * @returns The color string for the icon
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colors: Record<MockeryAction, string> = {
    tomatoes: 'text-red-500',
    eggs: 'text-yellow-200',
    putridEggs: 'text-green-300',
    crown: 'text-yellow-400',
    stocks: 'text-brown-500',
    jester: 'text-purple-400',
    shame: 'text-red-600',
    silence: 'text-gray-400',
    courtJester: 'text-purple-600',
    smokeBomb: 'text-gray-500',
    protection: 'text-blue-400',
    taunt: 'text-orange-400',
    mock: 'text-pink-400',
    challenge: 'text-blue-500',
    joust: 'text-green-500',
    duel: 'text-red-700'
  };
  
  return colors[action] || 'text-gray-400';
};

/**
 * Check if there's currently a weekly discount active
 * @returns Whether there's a discount active
 */
export const hasWeeklyDiscount = (): boolean => {
  // For this example, we'll just return true
  // In production, this would check against the backend
  return true;
};

/**
 * Get the currently discounted mockery action for the week
 * @returns The discounted mockery action
 */
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // For this example, we'll just return a fixed action
  // In production, this would fetch from the backend
  return 'crown';
};

/**
 * Get a discounted price for a shame action
 * @param action The mockery action
 * @param userTier The user's tier
 * @returns The discounted price
 */
export const getDiscountedShamePrice = (action: MockeryAction, userTier: string = 'basic'): number => {
  const originalPrice = getMockeryActionPrice(action);
  
  if (!hasWeeklyDiscount() || getWeeklyDiscountedAction() !== action) {
    return originalPrice;
  }
  
  // Apply different discount rates based on tier
  const discountRates: Record<string, number> = {
    free: 0.1, // 10% discount
    basic: 0.15, // 15% discount
    premium: 0.25, // 25% discount
    royal: 0.33, // 33% discount
    founder: 0.50, // 50% discount,
    noble: 0.40, // 40% discount
  };
  
  const discountRate = discountRates[userTier.toLowerCase()] || 0.1;
  
  return Math.max(0.5, originalPrice * (1 - discountRate));
};

/**
 * Get all available mockery actions
 * @returns Array of all mockery actions
 */
export const getAllMockeryActions = (): MockeryAction[] => {
  return [
    'tomatoes',
    'eggs',
    'putridEggs',
    'crown',
    'stocks',
    'jester',
    'shame',
    'silence',
    'courtJester',
    'smokeBomb',
    'protection',
    'taunt',
    'mock',
    'challenge',
    'joust',
    'duel'
  ];
};
