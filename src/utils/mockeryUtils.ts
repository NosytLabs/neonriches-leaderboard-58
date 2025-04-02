
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { mockeryActionIcons } from './mockeryActionUtils';

// Mapping of mockery actions to their display names
export const mockeryNames: Record<string, string> = {
  'tomato': 'Tomatoes',
  'egg': 'Eggs',
  'rotten_egg': 'Rotten Eggs',
  'flame': 'Flame',
  'heart': 'Heart',
  'thumbs_down': 'Thumbs Down',
  'skull': 'Skull',
  'crown': 'Mock Crown',
  'putridEgg': 'Putrid Egg',
  'stocks': 'Stocks',
  'jester': 'Jester Hat',
  'mock': 'Mock',
  'challenge': 'Challenge',
  'joust': 'Joust',
  'duel': 'Duel',
  'silence': 'Silence',
  'laugh': 'Laugh',
  'fish': 'Fish',
  'taunt': 'Taunt',
  'thumbsDown': 'Thumbs Down',
  'trumpet': 'Trumpet',
  'confetti': 'Confetti',
  'shame': 'Public Shame',
  'courtJester': 'Court Jester',
  'smokeBomb': 'Smoke Bomb',
  'protection': 'Royal Protection',
  'royal_decree': 'Royal Decree',
  'shame_certificate': 'Shame Certificate',
  'insult': 'Insult',
  'humiliate': 'Humiliate'
};

// Descriptions for mockery actions
export const mockeryDescriptions: Record<string, string> = {
  'tomato': 'Throw virtual tomatoes at this user.',
  'egg': 'Throw virtual eggs at this user.',
  'rotten_egg': 'Throw virtual rotten eggs at this user.',
  'flame': 'Roast this user with a flame.',
  'heart': 'Show affection to this user.',
  'thumbs_down': 'Show disapproval to this user.',
  'skull': 'Mark this user as defeated.',
  'crown': 'Crown this user mockingly.',
  'putridEgg': 'Throw a putrid egg at this user.',
  'stocks': 'Put this user in virtual stocks for public display.',
  'jester': 'Make this user your court jester.',
  'mock': 'Mock this user.',
  'challenge': 'Challenge this user to a competition.',
  'joust': 'Challenge this user to a joust.',
  'duel': 'Challenge this user to a duel.',
  'silence': 'Silence this user temporarily.',
  'laugh': 'Laugh at this user.',
  'fish': 'Slap this user with a virtual fish.',
  'taunt': 'Taunt this user.',
  'thumbsDown': 'Show disapproval to this user.',
  'trumpet': 'Announce this user\'s shame.',
  'confetti': 'Shower this user with mocking confetti.',
  'shame': 'Publicly shame this user.',
  'courtJester': 'Designate this user as your court jester.',
  'smokeBomb': 'Throw a smoke bomb at this user.',
  'protection': 'Protect yourself from mockery.',
  'royal_decree': 'Issue a royal decree against this user.',
  'shame_certificate': 'Issue a certificate of shame to this user.',
  'insult': 'Insult this user.',
  'humiliate': 'Humiliate this user.'
};

// Get mockery name
export const getMockeryName = (action: MockeryAction | string): string => {
  return mockeryNames[action as string] || 'Mock';
};

// Get mockery description
export const getMockeryDescription = (action: MockeryAction | string): string => {
  return mockeryDescriptions[action as string] || 'Mock this user.';
};

// Get mockery tier
export const getMockeryTier = (action: MockeryAction | string): MockeryTier => {
  const tierMap: Record<string, MockeryTier> = {
    'tomato': 'common',
    'egg': 'common',
    'flame': 'uncommon',
    'heart': 'common',
    'thumbs_down': 'common',
    'skull': 'rare',
    'crown': 'rare',
    'putridEgg': 'uncommon',
    'stocks': 'epic',
    'jester': 'epic',
    'mock': 'common',
    'challenge': 'uncommon',
    'joust': 'rare',
    'duel': 'rare',
    'silence': 'epic',
    'laugh': 'common',
    'fish': 'uncommon',
    'taunt': 'common',
    'thumbsDown': 'common',
    'trumpet': 'uncommon',
    'confetti': 'uncommon',
    'shame': 'rare',
    'courtJester': 'epic',
    'smokeBomb': 'rare',
    'protection': 'legendary',
    'royal_decree': 'legendary',
    'shame_certificate': 'epic',
    'insult': 'common',
    'humiliate': 'rare'
  };
  
  return tierMap[action as string] || 'common';
};

// Get mockery costs
export const getMockeryCost = (action: MockeryAction | string): number => {
  const costMap: Record<string, number> = {
    'tomato': 25,
    'egg': 50,
    'flame': 75,
    'heart': 10,
    'thumbs_down': 15,
    'skull': 100,
    'crown': 150,
    'putridEgg': 75,
    'stocks': 200,
    'jester': 250,
    'mock': 10,
    'challenge': 50,
    'joust': 100,
    'duel': 150,
    'silence': 300,
    'laugh': 25,
    'fish': 50,
    'taunt': 25,
    'thumbsDown': 15,
    'trumpet': 50,
    'confetti': 75,
    'shame': 100,
    'courtJester': 250,
    'smokeBomb': 150,
    'protection': 500,
    'royal_decree': 1000,
    'shame_certificate': 300,
    'insult': 25,
    'humiliate': 125
  };
  
  return costMap[action as string] || 10;
};

// Get mockery action icon color
export const getMockeryActionIconColor = (action: MockeryAction | string): string => {
  const colorMap: Record<string, string> = {
    'tomato': 'text-red-500',
    'egg': 'text-yellow-500',
    'flame': 'text-orange-500',
    'heart': 'text-pink-500',
    'thumbs_down': 'text-blue-500',
    'skull': 'text-gray-700',
    'crown': 'text-yellow-400',
    'putridEgg': 'text-green-600',
    'stocks': 'text-gray-600',
    'jester': 'text-purple-500',
    'mock': 'text-cyan-500',
    'challenge': 'text-red-600',
    'joust': 'text-amber-700',
    'duel': 'text-red-700',
    'silence': 'text-gray-400',
    'laugh': 'text-yellow-400',
    'fish': 'text-blue-400',
    'taunt': 'text-red-400',
    'thumbsDown': 'text-blue-500',
    'trumpet': 'text-yellow-600',
    'confetti': 'text-pink-400',
    'shame': 'text-red-600',
    'courtJester': 'text-purple-500',
    'smokeBomb': 'text-gray-500',
    'protection': 'text-indigo-500',
    'royal_decree': 'text-purple-700',
    'shame_certificate': 'text-red-800',
    'insult': 'text-orange-400',
    'humiliate': 'text-red-700'
  };
  
  return colorMap[action as string] || 'text-gray-500';
};

// Get mockery tier color class
export const getMockeryTierColorClass = (tier: string | MockeryTier): string => {
  const tierColorClasses: Record<string, string> = {
    'common': 'text-gray-300',
    'uncommon': 'text-green-300',
    'rare': 'text-blue-300',
    'epic': 'text-purple-300',
    'legendary': 'text-orange-300',
    'royal': 'text-royal-gold'
  };
  
  return tierColorClasses[tier as string] || 'text-gray-300';
};

// Export mockery action price for back-compat
export const getMockeryActionPrice = getMockeryCost;
