
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { Egg, Crown, Smile, Lock, Skull, VolumeX, Glasses, Cloud, Shield, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import TomatoIcon from '@/components/icons/TomatoIcon';

// Map mockery actions to their icon components
export const getMockeryActionIcon = (action: MockeryAction): LucideIcon => {
  const icons: Record<string, LucideIcon> = {
    tomatoes: TomatoIcon as unknown as LucideIcon,
    eggs: Egg,
    crown: Crown,
    jester: Smile,
    stocks: Lock,
    putridEggs: Egg,
    silence: VolumeX,
    courtJester: Glasses,
    smokeBomb: Cloud,
    shame: Skull,
    protection: Shield,
    taunt: Target,
    mock: Target,
    challenge: Target,
    joust: Target,
    duel: Target
  };
  return icons[action] || Target;
};

// Get color for mockery action icon
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colors: Record<string, string> = {
    tomatoes: 'text-red-500',
    eggs: 'text-amber-300',
    crown: 'text-royal-gold',
    jester: 'text-purple-400',
    stocks: 'text-slate-400',
    putridEggs: 'text-green-400',
    silence: 'text-blue-400',
    courtJester: 'text-pink-400',
    smokeBomb: 'text-gray-400',
    shame: 'text-red-400',
    protection: 'text-emerald-400',
    taunt: 'text-red-400',
    mock: 'text-yellow-400',
    challenge: 'text-blue-400',
    joust: 'text-purple-400',
    duel: 'text-orange-400'
  };
  return colors[action] || 'text-gray-400';
};

// Get mockery name for display
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<string, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rancid Eggs',
    stocks: 'Public Stocks',
    crown: 'Fool\'s Crown',
    jester: 'Jester\'s Hat',
    putridEggs: 'Putrid Eggs',
    silence: 'Royal Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    shame: 'Public Shame',
    protection: 'Royal Protection',
    taunt: 'Royal Taunt',
    mock: 'Public Mockery',
    challenge: 'Royal Challenge',
    joust: 'Royal Joust',
    duel: 'Royal Duel'
  };

  return names[action] || String(action);
};

// Get mockery description for display
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<string, string> = {
    tomatoes: 'Splatter their profile with rotten tomatoes for 24 hours',
    eggs: 'Pelt their profile with rancid eggs for 24 hours',
    stocks: 'Lock them in the public stocks for all to see for 3 days',
    crown: 'Force them to wear a fool\'s crown for a week',
    jester: 'Dress them as a court jester for 24 hours',
    putridEggs: 'Assault them with the most putrid eggs in the kingdom for 3 days',
    silence: 'Prevent them from speaking in public forums for 12 hours',
    courtJester: 'Assign them as your personal jester for 3 days',
    smokeBomb: 'Drop a smoke bomb on their profile for 24 hours',
    shame: 'Ring the bell of shame on their profile for 24 hours',
    protection: 'Protect yourself from mockery for 3 days',
    taunt: 'Challenge them to a public duel of honor',
    mock: 'Subject them to public ridicule',
    challenge: 'Issue a formal challenge to their honor',
    joust: 'Challenge them to a spending joust',
    duel: 'Engage in a spending duel for glory'
  };

  return descriptions[action] || 'Apply a mysterious effect';
};

// Get the price for a mockery action
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<string, number> = {
    tomatoes: 5,
    eggs: 10,
    stocks: 20,
    crown: 100,
    jester: 15,
    putridEggs: 25,
    silence: 30,
    courtJester: 50,
    smokeBomb: 15,
    shame: 10,
    protection: 75,
    taunt: 5,
    mock: 10,
    challenge: 25,
    joust: 50,
    duel: 100
  };

  return prices[action] || 5;
};

// Alias for backward compatibility
export const getShameActionPrice = getMockeryActionPrice;

// Get the tier of a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<string, MockeryTier> = {
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

// Get color class for a mockery tier
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colors: Record<string, string> = {
    common: 'text-gray-400',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-yellow-400',
    royal: 'text-yellow-300',
    basic: 'text-white',
    premium: 'text-indigo-400',
    silver: 'text-gray-300',
    bronze: 'text-amber-600'
  };
  
  return colors[tier] || 'text-white';
};

// Alias for backward compatibility
export const getShameActionTier = getMockeryTier;

// Get discounted price for mockery action
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const regularPrice = getMockeryActionPrice(action);
  // 50% discount
  return regularPrice * 0.5;
};

// Check if an action has a weekly discount
export const hasWeeklyDiscount = (action?: MockeryAction): boolean => {
  // For demo purposes, let's say stocks is discounted this week
  const discountedAction = getWeeklyDiscountedAction();
  return action === discountedAction;
};

// Get the action that is discounted this week
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // This would typically be fetched from an API or database
  return 'stocks';
};

// Get the cost of a mockery
export const getMockeryCost = (action: MockeryAction): number => {
  return getMockeryActionPrice(action);
};

// Aliases for backward compatibility
export const getMockeryActionTitle = getMockeryName;
export const getMockeryActionDescription = getMockeryDescription;
