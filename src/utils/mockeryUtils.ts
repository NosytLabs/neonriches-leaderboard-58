
import { MockeryAction, MockeryTier, TeamColor } from '@/types/mockery-types';
import { Crown, Egg, Target, TrendingDown, Award, Shield, Trash } from 'lucide-react';

/**
 * Get a display name for a mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Throw Tomatoes',
    eggs: 'Throw Rotten Eggs',
    stocks: 'Place in Stocks',
    jester: 'Make a Jester',
    crown: 'Award Fake Crown',
    shame: 'Public Shaming',
    protection: 'Royal Protection',
    derank: 'Force Derank',
    gift: 'Royal Gift',
    humiliate: 'Royal Humiliation',
    praise: 'Royal Praise',
    bribe: 'Royal Bribery'
  };
  
  return names[action] || 'Royal Mockery';
};

/**
 * Get a description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Throw rotten tomatoes at this user. A medieval classic!',
    eggs: 'Hurl rotten eggs for maximum embarrassment.',
    stocks: 'Place this noble in the stocks for public ridicule.',
    jester: 'Mock them as the court jester for all to see.',
    crown: 'Award them a crown of sarcasm and fool\'s gold.',
    shame: 'Call for public shaming! Shame! Shame! Shame!',
    protection: 'Grant royal protection against mockery for a limited time.',
    derank: 'Force this user down a rank in the leaderboard.',
    gift: 'Bestow a gift upon this loyal subject.',
    humiliate: 'Subject them to royal humiliation rituals.',
    praise: 'Shower them with royal praise and admiration.',
    bribe: 'Offer a royal bribe to secure their loyalty.'
  };
  
  return descriptions[action] || 'Apply royal mockery to this user.';
};

/**
 * Get the icon component for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction) => {
  const icons = {
    tomatoes: Target,
    eggs: Egg,
    stocks: Trash,
    jester: TrendingDown,
    crown: Crown,
    shame: TrendingDown,
    protection: Shield,
    derank: TrendingDown,
    gift: Award,
    humiliate: TrendingDown,
    praise: Award,
    bribe: Award
  };
  
  return icons[action] || Crown;
};

/**
 * Get the tier for a mockery action
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
    derank: 'epic',
    gift: 'legendary',
    humiliate: 'legendary',
    praise: 'legendary',
    bribe: 'epic'
  };
  
  return tiers[action] || 'common';
};

/**
 * Get the color class for a mockery tier
 */
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colors = {
    common: 'text-gray-300',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-royal-gold'
  };
  
  return colors[tier] || colors.common;
};

/**
 * Get mockery action price
 */
export const getMockeryCost = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    tomatoes: 50,
    eggs: 100,
    stocks: 250,
    jester: 500,
    crown: 1000,
    shame: 2000,
    protection: 5000,
    derank: 10000,
    gift: 25000,
    humiliate: 50000,
    praise: 100000,
    bribe: 250000
  };
  
  return prices[action] || 100;
};

/**
 * Get shame action price based on mockery action
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  return getMockeryCost(action);
};

/**
 * Get shame tier prices
 */
export const getShameTierPrices = (tier: string): number => {
  const tierPrices: Record<string, number> = {
    'free': 50,
    'basic': 100,
    'premium': 200,
    'pro': 300,
    'royal': 500,
    'legendary': 1000
  };
  
  return tierPrices[tier] || 100;
};
