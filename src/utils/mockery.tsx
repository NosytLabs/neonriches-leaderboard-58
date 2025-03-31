
import React from 'react';
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { AlertCircle, Egg, Crown, Theater, Target, Shield, Bell, MessageSquare, Ban, UserX, Angry, Feather } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Get the appropriate icon for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction | string): LucideIcon => {
  const icons: Record<string, LucideIcon> = {
    'tomatoes': AlertCircle,
    'eggs': Egg,
    'crown': Crown,
    'jester': Theater,
    'stocks': UserX,
    'shame': Bell,
    'protection': Shield,
    'target': Target,
    'putridEggs': Egg,
    'silence': Ban,
    'courtJester': Theater,
    'smokeBomb': AlertCircle,
    'dunce': AlertCircle,
    'glitterBomb': Crown,
    'royalPie': AlertCircle,
    'jokeCrown': Crown,
    'memeFrame': Feather,
    'roast': Angry,
    'ridicule': MessageSquare,
    'humiliate': Bell,
    'expose': AlertCircle,
    'mock': Theater,
    'taunt': MessageSquare,
    'guillotine': AlertCircle,
    'dungeons': AlertCircle,
    'removal': UserX
  };
  return icons[action] || Target;
};

/**
 * Get the display title for a mockery action
 */
export const getMockeryActionTitle = (action: MockeryAction | string): string => {
  const titles: Record<string, string> = {
    'tomatoes': 'Throw Tomatoes',
    'eggs': 'Throw Eggs',
    'crown': 'Mock Crown',
    'jester': 'Court Jester',
    'stocks': 'Place in Stocks',
    'shame': 'Public Shaming',
    'protection': 'Royal Protection',
    'target': 'Target Mark',
    'putridEggs': 'Putrid Eggs',
    'silence': 'Silence Decree',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'dunce': 'Dunce Cap',
    'glitterBomb': 'Glitter Bomb',
    'royalPie': 'Royal Pie',
    'jokeCrown': 'Joke Crown',
    'memeFrame': 'Meme Frame',
    'roast': 'Royal Roast',
    'ridicule': 'Public Ridicule',
    'humiliate': 'Royal Humiliation',
    'expose': 'Public Exposure',
    'mock': 'Mock Royalty',
    'taunt': 'Royal Taunt',
    'guillotine': 'The Guillotine',
    'dungeons': 'Royal Dungeons',
    'removal': 'Royal Removal'
  };
  return titles[action] || action.charAt(0).toUpperCase() + action.slice(1);
};

/**
 * Get a description for a mockery action
 */
export const getMockeryActionDescription = (action: MockeryAction | string): string => {
  const descriptions: Record<string, string> = {
    'tomatoes': 'Pelt this user with rotten tomatoes for all to see.',
    'eggs': 'Shower this user with eggs, leaving them visually disgraced for 24 hours.',
    'crown': 'Place a ridiculous crown on their head to mock their royal aspirations.',
    'jester': 'Mark them as the court jester, subjecting them to ridicule.',
    'stocks': 'Place this user in the public stocks for all to shame.',
    'shame': 'Subject this user to public mockery and shame.',
    'protection': 'Grant royal protection against mockery for 7 days.',
    'target': 'Mark this user as a target for mockery.',
    'putridEggs': 'Throw putrid eggs that smell worse than regular eggs.',
    'silence': 'Silence this user with a royal decree.',
    'courtJester': 'Make them the official court jester, subject to extreme ridicule.',
    'smokeBomb': 'Deploy a smoke bomb to obscure their presence.',
    'dunce': 'Place a dunce cap on their head for all to see.',
    'glitterBomb': 'Throw a glitter bomb, making them sparkle in shame.',
    'royalPie': 'Throw a royal pie at their face, classic comedy.',
    'jokeCrown': 'Place a joke crown that makes ridiculous sounds.',
    'memeFrame': 'Frame their profile in a meme-worthy border.',
    'roast': 'Deliver a scorching royal roast to their reputation.',
    'ridicule': 'Subject them to public ridicule from the masses.',
    'humiliate': 'Humiliate them in the royal court with a decree.',
    'expose': 'Expose their follies to the entire kingdom.',
    'mock': 'Mock their royal aspirations with satirical symbols.',
    'taunt': 'Taunt them with royal insults and jeers.',
    'guillotine': 'Place their profile in a virtual guillotine.',
    'dungeons': 'Send them to the royal dungeons for a time-out.',
    'removal': 'Remove their privileges and displays of status.'
  };
  return descriptions[action] || 'Apply mockery to this user.';
};

/**
 * Get the price of a mockery action
 */
export const getMockeryActionPrice = (action: MockeryAction | string): number => {
  const prices: Record<string, number> = {
    'tomatoes': 0.25,
    'eggs': 0.50,
    'crown': 0.75,
    'jester': 0.60,
    'stocks': 1.00,
    'shame': 1.25,
    'protection': 5.00,
    'target': 0.30,
    'putridEggs': 0.75,
    'silence': 2.00,
    'courtJester': 3.00,
    'smokeBomb': 1.50,
    'dunce': 0.35,
    'glitterBomb': 1.75,
    'royalPie': 0.80,
    'jokeCrown': 1.25,
    'memeFrame': 0.90,
    'roast': 0.40,
    'ridicule': 0.60,
    'humiliate': 1.50,
    'expose': 2.50,
    'mock': 0.30,
    'taunt': 0.45,
    'guillotine': 3.00,
    'dungeons': 4.00,
    'removal': 5.00
  };
  return prices[action] || 0.25;
};

/**
 * Get the tier of a mockery action
 */
export const getMockeryTier = (action: MockeryAction | string): MockeryTier => {
  const tiers: Record<string, MockeryTier> = {
    'tomatoes': 'common',
    'eggs': 'common',
    'crown': 'uncommon',
    'jester': 'uncommon',
    'stocks': 'rare',
    'shame': 'rare',
    'protection': 'legendary',
    'target': 'common',
    'putridEggs': 'uncommon',
    'silence': 'rare',
    'courtJester': 'epic',
    'smokeBomb': 'uncommon',
    'dunce': 'common',
    'glitterBomb': 'epic',
    'royalPie': 'uncommon',
    'jokeCrown': 'rare',
    'memeFrame': 'uncommon',
    'roast': 'common',
    'ridicule': 'uncommon',
    'humiliate': 'rare',
    'expose': 'epic',
    'mock': 'common',
    'taunt': 'uncommon',
    'guillotine': 'epic',
    'dungeons': 'legendary',
    'removal': 'legendary',
    'troll': 'uncommon',
    'peasant': 'common',
    'rat': 'common',
    'ghost': 'uncommon',
    'skeleton': 'uncommon',
    'zombie': 'uncommon',
    'witch': 'rare',
    'monster': 'rare',
    'dragon': 'legendary',
    'jest': 'uncommon',
    'challenge': 'rare',
    'defeat': 'rare',
    'immune': 'legendary',
    'laughing': 'common'
  };
  return tiers[action] || 'common';
};

/**
 * Get the CSS color class for a mockery tier
 */
export const getMockeryTierColorClass = (tier: MockeryTier | string): string => {
  const colorClasses: Record<string, string> = {
    'common': 'text-gray-400',
    'uncommon': 'text-green-400',
    'rare': 'text-blue-400',
    'epic': 'text-purple-400',
    'legendary': 'text-royal-gold',
    'standard': 'text-white',
    'premium': 'text-amber-400',
    'royal': 'text-royal-gold'
  };
  return colorClasses[tier] || 'text-gray-400';
};

/**
 * Get the duration of a mockery action in hours
 */
export const getMockeryActionDuration = (action: MockeryAction | string): number => {
  const durations: Record<string, number> = {
    'tomatoes': 4,
    'eggs': 8,
    'crown': 12,
    'jester': 12,
    'stocks': 24,
    'shame': 24,
    'protection': 168, // 7 days
    'target': 6,
    'putridEggs': 12,
    'silence': 36,
    'courtJester': 48,
    'smokeBomb': 8,
    'dunce': 6,
    'glitterBomb': 12,
    'royalPie': 8,
    'jokeCrown': 24,
    'memeFrame': 12,
    'roast': 6,
    'ridicule': 12,
    'humiliate': 24,
    'expose': 48,
    'mock': 4,
    'taunt': 6,
    'guillotine': 48,
    'dungeons': 72,
    'removal': 168 // 7 days
  };
  return durations[action] || 4;
};

/**
 * Get CSS class for active mockery status
 */
export const getActiveMockeryClass = (action: MockeryAction | null): string => {
  if (!action) return '';
  
  const classes: Record<string, string> = {
    'tomatoes': 'border-red-500 bg-red-500/10',
    'eggs': 'border-yellow-500 bg-yellow-500/10',
    'crown': 'border-royal-gold bg-royal-gold/10',
    'jester': 'border-purple-500 bg-purple-500/10',
    'stocks': 'border-blue-500 bg-blue-500/10',
    'shame': 'border-red-800 bg-red-800/10',
    'protection': 'border-green-500 bg-green-500/10',
    'target': 'border-orange-500 bg-orange-500/10',
    'putridEggs': 'border-green-800 bg-green-800/10',
    'silence': 'border-gray-500 bg-gray-500/10',
    'courtJester': 'border-fuchsia-500 bg-fuchsia-500/10',
    'smokeBomb': 'border-gray-400 bg-gray-400/10',
    'dunce': 'border-amber-300 bg-amber-300/10',
    'glitterBomb': 'border-pink-400 bg-pink-400/10',
    'royalPie': 'border-brown-400 bg-brown-400/10',
    'jokeCrown': 'border-yellow-300 bg-yellow-300/10',
    'memeFrame': 'border-blue-300 bg-blue-300/10'
  };
  
  return classes[action] || '';
};

/**
 * Get the appropriate color for a mockery action icon
 */
export const getMockeryActionIconColor = (action: MockeryAction | string): string => {
  const tier = getMockeryTier(action);
  return getMockeryTierColorClass(tier);
};

// For backward compatibility
export const getMockeryName = getMockeryActionTitle;
export const getMockeryDescription = getMockeryActionDescription;
export const getMockeryCost = getMockeryActionPrice;
