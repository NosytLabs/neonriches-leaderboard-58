
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { Crown, Egg, Lock, BadgeAlert, ShieldX, Award, Star, Zap, DollarSign } from 'lucide-react';

/**
 * Get the display name for a mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Throw Tomatoes',
    eggs: 'Throw Rotten Eggs',
    stocks: 'Place in Stocks',
    jester: 'Royal Jester',
    crown: 'Sarcastic Crown',
    shame: 'Public Shaming',
    protection: 'Royal Protection',
    gift: 'Royal Gift',
    humiliate: 'Public Humiliation',
    praise: 'False Praise',
    bribe: 'Royal Bribery'
  };
  
  return names[action] || 'Unknown Mockery';
};

/**
 * Get the description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Throw digital tomatoes at the user, marking their profile for cosmetic ridicule.',
    eggs: 'Throw digital rotten eggs, creating a cosmetic effect on their profile.',
    stocks: 'Put the user in digital stocks, displaying a stocks icon on their profile temporarily.',
    jester: 'Make this user the Royal Jester for cosmetic effect on their profile.',
    crown: 'Give this user a sarcastic crown that highlights their spending in a mocking way.',
    shame: 'Publicly shame this user with a "Shame" banner displayed on their profile.',
    protection: 'Protect your profile from mockery effects for a limited time.',
    gift: 'Send a gift of digital currency to this user, but make it look like mockery.',
    humiliate: 'Apply a full humiliation effect to their profile, combining multiple mockery effects.',
    praise: 'Offer false praise that actually highlights their spending in a mocking way.',
    bribe: 'Bribe a royal guard to temporarily boost your position on the leaderboard.'
  };
  
  return descriptions[action] || 'An unknown form of mockery';
};

/**
 * Get the tier of a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'common',
    stocks: 'uncommon',
    jester: 'uncommon',
    crown: 'rare',
    shame: 'rare',
    protection: 'epic',
    gift: 'epic',
    humiliate: 'legendary',
    praise: 'legendary',
    bribe: 'legendary'
  };
  
  return tiers[action] || 'common';
};

/**
 * Get the price for a mockery action
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    tomatoes: 50,
    eggs: 100,
    stocks: 250,
    jester: 500,
    crown: 1000,
    shame: 2000,
    protection: 5000,
    gift: 25000,
    humiliate: 50000,
    praise: 100000,
    bribe: 250000
  };
  
  return prices[action] || 100;
};

/**
 * Get the icon component for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction) => {
  const icons: Record<string, any> = {
    tomatoes: BadgeAlert,
    eggs: Egg,
    stocks: Lock,
    jester: ShieldX,
    crown: Crown,
    shame: BadgeAlert,
    protection: Crown,
    gift: Award,
    humiliate: Star,
    praise: Award,
    bribe: DollarSign
  };
  
  return icons[action] || Zap;
};

/**
 * Get the color for a mockery action icon
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colors: Record<string, string> = {
    tomatoes: 'text-red-500',
    eggs: 'text-yellow-500',
    stocks: 'text-slate-400',
    jester: 'text-purple-500',
    crown: 'text-royal-gold',
    shame: 'text-red-600',
    protection: 'text-emerald-500',
    gift: 'text-blue-500',
    humiliate: 'text-red-700',
    praise: 'text-royal-gold',
    bribe: 'text-green-500'
  };
  
  return colors[action] || 'text-gray-400';
};

/**
 * Alias for getMockeryActionPrice to match shameUtils
 */
export const getShameActionPrice = getMockeryActionPrice;

/**
 * Get the cost of a mockery action (alias for getMockeryActionPrice)
 */
export const getMockeryCost = getMockeryActionPrice;
