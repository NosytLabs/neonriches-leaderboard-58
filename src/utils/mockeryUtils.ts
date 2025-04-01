
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { Crown, Egg, Target, ShieldAlert, UserX, AlertTriangle, Flame, Award, Music } from 'lucide-react';

/**
 * Returns a human-readable name for the mockery action
 * @param action The mockery action
 * @returns The display name for the action
 */
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<string, string> = {
    tomatoes: 'Tomatoes',
    eggs: 'Eggs',
    putridEggs: 'Putrid Eggs',
    crown: 'Crown of Shame',
    stocks: 'Stocks',
    jester: 'Jester Hat',
    shame: 'Bell of Shame',
    silence: 'Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    protection: 'Royal Protection',
    taunt: 'Royal Taunt',
    mock: 'Public Mockery',
    challenge: 'Noble Challenge',
    joust: 'Royal Joust',
    duel: 'Aristocratic Duel'
  };
  
  return names[action] || 'Unknown Action';
};

/**
 * Returns a description for the mockery action
 * @param action The mockery action
 * @returns The description of what the action does
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<string, string> = {
    tomatoes: 'Throw virtual tomatoes at the user\'s profile',
    eggs: 'Throw virtual eggs at the user\'s profile',
    putridEggs: 'Throw foul-smelling eggs that linger longer',
    crown: 'Place a crown of shame on the user\'s profile',
    stocks: 'Put the user in stocks for public humiliation',
    jester: 'Force the user to wear a jester hat on their profile',
    shame: 'Ring the bell of shame on the user\'s profile',
    silence: 'Prevent the user from posting for a short period',
    courtJester: 'Appoint the user as the official court jester',
    smokeBomb: 'Temporarily obscure the user\'s profile with smoke',
    protection: 'Shield yourself from mockery for a limited time',
    taunt: 'Display a taunting message on their profile',
    mock: 'Create a public notice of mockery',
    challenge: 'Challenge them to a public contest of status',
    joust: 'Challenge them to a royal joust',
    duel: 'Challenge them to a high-stakes duel'
  };
  
  return descriptions[action] || 'An unknown form of mockery';
};

/**
 * Get the price for a mockery action
 * @param action The mockery action
 * @returns The price in USD
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<string, number> = {
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
 * Alias for getMockeryActionPrice for backward compatibility
 */
export const getShameActionPrice = getMockeryActionPrice;

/**
 * Alias for getMockeryActionPrice
 */
export const getMockeryCost = getMockeryActionPrice;

/**
 * Get mockery tier based on action
 * @param action The mockery action
 * @returns The tier (e.g., 'common', 'rare', etc.)
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<string, MockeryTier> = {
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
 * Get mockery tier color class for UI
 * @param tier The mockery tier
 * @returns CSS class for the tier color
 */
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colorClasses: Record<string, string> = {
    common: 'text-gray-300 border-gray-300',
    uncommon: 'text-green-400 border-green-400',
    rare: 'text-blue-400 border-blue-400',
    epic: 'text-purple-400 border-purple-400',
    legendary: 'text-yellow-400 border-yellow-400',
    royal: 'text-red-400 border-red-400',
    basic: 'text-gray-300 border-gray-300',
    premium: 'text-blue-400 border-blue-400',
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
  const icons: Record<string, any> = {
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
    mock: Target,
    challenge: Target,
    joust: Target,
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
  const colors: Record<string, string> = {
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
 * Get discounted price for a mockery action
 * @param action The mockery action
 * @param userTier Optional user tier for additional discounts
 * @returns The discounted price
 */
export const getDiscountedMockeryPrice = (action: MockeryAction, userTier: string = 'basic'): number => {
  const regularPrice = getMockeryActionPrice(action);
  
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
  
  return Math.max(0.5, regularPrice * (1 - discountRate));
};

/**
 * Check if there's currently a weekly discount active
 * @returns Whether there's a discount active
 */
export const hasWeeklyDiscount = (): boolean => {
  // For demo purposes, let's say stocks is discounted this week
  return true;
};

/**
 * Get the weekly discounted mockery action
 * @returns The discounted action
 */
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // For now, let's hardcode it to 'stocks'
  return 'stocks';
};

/**
 * Get the discounted price for a shame action
 * @param action The mockery action
 * @param userTier Optional user tier for additional discounts
 * @returns The discounted price
 */
export const getDiscountedShamePrice = (action: MockeryAction, userTier: string = 'basic'): number => {
  return getDiscountedMockeryPrice(action, userTier);
};
