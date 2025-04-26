
import { MockeryAction, MockeryTier, UserTier } from '@/types/mockery';
import { Crown, Egg, Target, Shield, Heart, Flame, MessageSquare } from 'lucide-react';

/**
 * Get the display name for a mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  const nameMap: Record<string, string> = {
    egg: 'Egg',
    crown: 'Royal Crown',
    target: 'Target',
    protection: 'Protection',
    heart: 'Heart',
    flame: 'Flame',
    message: 'Message',
    tomato: 'Tomato',
    tomatoes: 'Tomatoes',
    stocks: 'Stocks',
    shame: 'Public Shame',
    jester: 'Jester',
    mock: 'Mockery',
    putridEgg: 'Putrid Egg',
    rotten_egg: 'Rotten Egg',
    thumbs_down: 'Thumbs Down',
    courtJester: 'Court Jester',
    silence: 'Silence',
    taunt: 'Taunt',
    smokeBomb: 'Smoke Bomb',
    challenge: 'Challenge',
    joust: 'Joust',
    duel: 'Royal Duel',
    royal_decree: 'Royal Decree',
    skull: 'Skull',
    laugh: 'Laugh'
  };
  
  return nameMap[action] || action;
};

/**
 * Get the tier for a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tierMap: Record<string, MockeryTier> = {
    egg: 'common',
    tomato: 'common',
    tomatoes: 'common',
    message: 'common',
    mock: 'common',
    thumbs_down: 'common',
    laugh: 'common',
    
    putridEgg: 'rare',
    rotten_egg: 'rare',
    flame: 'rare',
    stocks: 'rare',
    taunt: 'rare',
    
    jester: 'epic',
    courtJester: 'epic',
    shame: 'epic',
    smokeBomb: 'epic',
    skull: 'epic',
    
    challenge: 'legendary',
    joust: 'legendary',
    duel: 'legendary',
    
    crown: 'mythic',
    royal_decree: 'mythic'
  };
  
  return tierMap[action] || 'common';
};

/**
 * Get the cost for a mockery action
 */
export const getMockeryCost = (action: MockeryAction): number => {
  const tier = getMockeryTier(action);
  
  const tierCostMap: Record<MockeryTier, number> = {
    common: 50,
    rare: 100,
    epic: 250,
    legendary: 500,
    mythic: 1000
  };
  
  return tierCostMap[tier];
};

/**
 * Get the icon component for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction) => {
  const iconMap: Record<string, any> = {
    egg: Egg,
    crown: Crown,
    target: Target,
    protection: Shield,
    heart: Heart,
    flame: Flame,
    message: MessageSquare,
    // Add more mappings as needed
  };
  
  return iconMap[action] || MessageSquare;
};

/**
 * Get the description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptionMap: Record<string, string> = {
    egg: 'Throw an egg at this user.',
    crown: 'Bestow a royal crown upon this user.',
    target: 'Place a target on this user.',
    protection: 'Shield this user from mockery.',
    heart: 'Show some love to this user.',
    flame: 'Roast this user with a flame.',
    message: 'Send a special message to this user.',
    tomato: 'Throw a tomato at this user.',
    tomatoes: 'Pelt this user with multiple tomatoes.',
    stocks: 'Put this user in the stocks for public display.',
    shame: 'Publicly shame this user on the leaderboard.',
    jester: 'Mark this user as the court jester.',
    // Add more descriptions as needed
  };
  
  return descriptionMap[action] || 'Apply this mockery action to the user.';
};

/**
 * Get action name for display
 */
export const getMockeryActionName = (action: MockeryAction): string => {
  return getMockeryName(action);
};

/**
 * Get mockery effect CSS class
 */
export const getMockeryEffect = (action: MockeryAction): string => {
  const effectMap: Record<string, string> = {
    egg: 'animate-bounce',
    crown: 'animate-pulse text-yellow-500',
    target: 'animate-spin text-red-500',
    protection: 'animate-pulse text-blue-500',
    heart: 'animate-pulse text-pink-500',
    flame: 'animate-pulse text-orange-500',
    message: 'animate-bounce text-gray-500',
    // Add more effects as needed
  };
  
  return effectMap[action] || '';
};
