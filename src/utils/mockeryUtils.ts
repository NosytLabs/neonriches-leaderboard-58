
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { AlertTriangle, Crown, Egg, Flame, Heart, Skull, ThumbsDown, Trophy, Users, Coffee, UserMinus, Feather, Music, Lightbulb, Ghost } from 'lucide-react';

// Mock descriptions for each mockery action
export const mockeryDescriptions: Record<string, string> = {
  tomato: 'Throw a tomato at the target',
  egg: 'Throw an egg at the target',
  rotten_egg: 'Throw a rotten egg at the target',
  flame: 'Roast the target with a flame',
  heart: 'Show ironic love to the target',
  thumbs_down: 'Give the target a thumbs down',
  skull: 'Mark the target as defeated',
  crown: 'Mockingly crown the target',
  putridEgg: 'Throw a putrid egg at the target',
  stocks: 'Put the target in the public stocks',
  jester: 'Designate the target as a jester',
  mock: 'Openly mock the target',
  challenge: 'Challenge the target to a duel',
  joust: 'Joust with the target',
  duel: 'Duel the target',
  silence: 'Silence the target for a period',
  laugh: 'Laugh at the target',
  fish: 'Slap the target with a fish',
  taunt: 'Taunt the target',
  thumbsDown: 'Give the target a thumbs down',
  trumpet: 'Sound a mocking trumpet',
  confetti: 'Throw ironic confetti',
  shame: 'Publicly shame the target',
  courtJester: 'Make the target your court jester',
  smokeBomb: 'Throw a smoke bomb at the target',
  protection: 'Buy protection from mockery',
  royal_decree: 'Issue a royal decree against the target',
  shame_certificate: 'Issue a certificate of shame',
  insult: 'Publicly insult the target',
  humiliate: 'Humiliate the target'
};

// Get a readable name for mockery action
export const getMockeryName = (action: string): string => {
  // Convert camelCase/snake_case to readable format
  return action
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase());
};

// Get the cost for a mockery action
export const getMockeryCost = (action: string): number => {
  const costs: Record<string, number> = {
    tomato: 5,
    egg: 10,
    rotten_egg: 20,
    flame: 15,
    heart: 5,
    thumbs_down: 5,
    skull: 25,
    crown: 50,
    putridEgg: 25,
    stocks: 75,
    jester: 25,
    mock: 15,
    challenge: 30,
    joust: 40,
    duel: 35,
    silence: 45,
    laugh: 10,
    fish: 15,
    taunt: 10,
    thumbsDown: 5,
    trumpet: 15,
    confetti: 10,
    shame: 20,
    courtJester: 30,
    smokeBomb: 25,
    protection: 75,
    royal_decree: 100,
    shame_certificate: 90,
    insult: 15,
    humiliate: 25
  };
  
  return costs[action] || 15;
};

// Get mockery tier based on action
export const getMockeryTier = (action: string): MockeryTier => {
  const tiers: Record<string, MockeryTier> = {
    tomato: 'common',
    egg: 'common',
    rotten_egg: 'uncommon',
    flame: 'uncommon',
    heart: 'common',
    thumbs_down: 'common',
    skull: 'rare',
    crown: 'epic',
    putridEgg: 'rare',
    stocks: 'epic',
    jester: 'rare',
    mock: 'uncommon',
    challenge: 'rare',
    joust: 'epic',
    duel: 'rare',
    silence: 'epic',
    laugh: 'common',
    fish: 'uncommon',
    taunt: 'common',
    thumbsDown: 'common',
    trumpet: 'uncommon',
    confetti: 'common',
    shame: 'rare',
    courtJester: 'epic',
    smokeBomb: 'uncommon',
    protection: 'legendary',
    royal_decree: 'legendary',
    shame_certificate: 'epic',
    insult: 'uncommon',
    humiliate: 'rare'
  };
  
  return tiers[action] || 'common';
};

// Get icon color class based on mockery action
export const getMockeryActionIconColor = (action: string): string => {
  const colorClasses: Record<string, string> = {
    tomato: 'text-red-500',
    egg: 'text-yellow-200',
    rotten_egg: 'text-green-600',
    flame: 'text-orange-500',
    heart: 'text-pink-500',
    thumbs_down: 'text-red-400',
    skull: 'text-gray-300',
    crown: 'text-yellow-500',
    putridEgg: 'text-green-700',
    stocks: 'text-brown-500',
    jester: 'text-purple-400',
    mock: 'text-gray-400',
    challenge: 'text-red-700',
    joust: 'text-indigo-500',
    duel: 'text-red-800',
    silence: 'text-blue-600',
    laugh: 'text-yellow-400',
    fish: 'text-blue-400',
    taunt: 'text-orange-300',
    thumbsDown: 'text-red-400',
    trumpet: 'text-yellow-600',
    confetti: 'text-pink-400',
    shame: 'text-red-500',
    courtJester: 'text-purple-500',
    smokeBomb: 'text-gray-500',
    protection: 'text-blue-500',
    royal_decree: 'text-royal-gold',
    shame_certificate: 'text-red-600',
    insult: 'text-orange-600',
    humiliate: 'text-purple-600'
  };
  
  return colorClasses[action] || 'text-gray-300';
};

// Get action icon component
export const getMockeryActionIcon = (action: string) => {
  switch(action) {
    case 'crown':
      return Crown;
    case 'skull':
      return Skull;
    case 'flame':
      return Flame;
    case 'heart':
      return Heart;
    case 'thumbs_down':
    case 'thumbsDown':
      return ThumbsDown;
    case 'trophy':
      return Trophy;
    case 'team':
      return Users;
    default:
      return AlertTriangle;
  }
};

// Export all utilities
export default {
  mockeryDescriptions,
  getMockeryName,
  getMockeryCost,
  getMockeryTier,
  getMockeryActionIconColor,
  getMockeryActionIcon
};
