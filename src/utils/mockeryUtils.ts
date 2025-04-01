
import { Egg, Lock, Target, Flame, Crown, User, Volume2, VolumeX, CloudFog, AlertCircle, Shield } from 'lucide-react';
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { TomatoIcon } from '@/components/icons';

/**
 * Get the name of a mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    stocks: 'Stocks Punishment',
    crown: 'Crown of Shame',
    jester: 'Jester\'s Hat',
    putridEggs: 'Putrid Eggs',
    silence: 'Royal Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    shame: 'Public Shame',
    protection: 'Royal Protection',
    taunt: 'Noble Taunt',
    mock: 'Mockery',
    challenge: 'Royal Challenge',
    joust: 'Knight\'s Joust',
    duel: 'Noble\'s Duel'
  };
  
  return names[action] || 'Unknown Action';
};

/**
 * Get the tier of a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'common',
    jester: 'common',
    stocks: 'uncommon',
    shame: 'uncommon',
    smokeBomb: 'uncommon',
    putridEggs: 'rare',
    silence: 'rare',
    courtJester: 'rare',
    crown: 'legendary',
    protection: 'legendary',
    taunt: 'common',
    mock: 'uncommon',
    challenge: 'rare',
    joust: 'epic',
    duel: 'legendary'
  };
  
  return tiers[action] || 'common';
};

/**
 * Get the cost of a mockery action
 */
export const getMockeryCost = (action: MockeryAction): number => {
  const tierCosts: Record<MockeryTier, number> = {
    common: 5,
    uncommon: 15,
    rare: 30,
    epic: 50,
    legendary: 100,
    royal: 150,
    basic: 5,
    premium: 25,
    silver: 10,
    bronze: 5
  };
  
  const tier = getMockeryTier(action);
  return tierCosts[tier] || 5;
};

/**
 * Get the description of a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Throw rotten tomatoes at this user, making their profile appear as though stained with tomato juice for 24 hours.',
    eggs: 'Throw rotten eggs at this user, making their profile appear with egg stains for 24 hours.',
    stocks: 'Put this user in the village stocks for public ridicule for 48 hours.',
    crown: 'Make this user wear a crown of shame for 72 hours, visible to all other users.',
    jester: 'Force this user to wear the jester\'s hat for 48 hours.',
    putridEggs: 'Throw exceptionally rotten eggs at the user, causing a more pronounced effect than regular eggs.',
    silence: 'Prevent this user from posting in public threads for 24 hours.',
    courtJester: 'Assign this user as the court jester, forcing them to entertain others for 72 hours.',
    smokeBomb: 'Drop a smoke bomb on this user, hiding their profile picture for 48 hours.',
    shame: 'Bring public shame to this user, broadcasting their misdeeds to all other users.',
    protection: 'Protect yourself from mockery actions for 48 hours.',
    taunt: 'Display a taunting message on the user\'s profile for 24 hours.',
    mock: 'Mock this user publicly with a customized message.',
    challenge: 'Challenge this user to an honor duel, publicly demanding a response.',
    joust: 'Force this user into a public joust for 72 hours.',
    duel: 'Initiate a noble\'s duel with this user, with high stakes for both participants.'
  };
  
  return descriptions[action] || 'Perform a mockery action on this user.';
};

/**
 * Get the tier color class for a mockery tier
 */
export const getMockeryTierColorClass = (tier: MockeryTier | string): string => {
  const colorClasses: Record<string, string> = {
    common: 'text-gray-300',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-royal-gold',
    royal: 'text-royal-gold',
    basic: 'text-gray-300',
    premium: 'text-blue-400',
    silver: 'text-slate-300',
    bronze: 'text-amber-600'
  };
  
  return colorClasses[tier] || colorClasses.common;
};

/**
 * Get the icon for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction) => {
  const iconMap = {
    tomatoes: TomatoIcon,
    eggs: Egg,
    stocks: Lock,
    crown: Crown,
    jester: User,
    putridEggs: Egg,
    silence: VolumeX,
    courtJester: User,
    smokeBomb: CloudFog,
    shame: AlertCircle,
    protection: Shield,
    taunt: Volume2,
    mock: User,
    challenge: Flame,
    joust: Target,
    duel: Target
  };

  return iconMap[action] || Target;
};

/**
 * Get the icon color for a mockery action
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colorMap = {
    tomatoes: 'text-red-500',
    eggs: 'text-amber-300',
    stocks: 'text-slate-400',
    crown: 'text-royal-gold',
    jester: 'text-purple-400',
    putridEggs: 'text-green-400',
    silence: 'text-blue-400',
    courtJester: 'text-pink-400',
    smokeBomb: 'text-gray-400',
    shame: 'text-red-400',
    protection: 'text-emerald-400',
    taunt: 'text-yellow-400',
    mock: 'text-teal-400',
    challenge: 'text-orange-400',
    joust: 'text-indigo-400',
    duel: 'text-red-600'
  };

  return colorMap[action] || 'text-gray-400';
};

/**
 * Get the action price for mockery actions
 */
export const getShameActionPrice = (action: MockeryAction): number => {
  return getMockeryCost(action);
};

/**
 * Check if there's a weekly discount available
 */
export const hasWeeklyDiscount = (): boolean => {
  // Determine if it's a discount week (e.g., first week of the month)
  const today = new Date();
  const dayOfMonth = today.getDate();
  return dayOfMonth <= 7; // First week of the month
};

/**
 * Get the discounted price for a mockery action
 */
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const basePrice = getMockeryCost(action);
  return Math.floor(basePrice * 0.75); // 25% discount
};

/**
 * Get the weekly discounted action
 */
export const getWeeklyDiscountedAction = (): MockeryAction => {
  const weekOfMonth = Math.ceil(new Date().getDate() / 7);
  
  // Rotate the discounted action based on the week of the month
  const actions: MockeryAction[] = ['tomatoes', 'eggs', 'stocks', 'jester', 'crown'];
  const index = (weekOfMonth - 1) % actions.length;
  
  return actions[index];
};
