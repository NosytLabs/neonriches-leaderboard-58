
import React from 'react';
import { MockeryAction, MockeryTier, ShameAction } from '@/types/mockery-types';
import {
  Target, Egg, Trash2, Crown, Shield, 
  Skull, Ghost, Rat, UserX, UserX2, 
  Flame, ZapOff, HeartCrack, ThumbsDown,
  Bomb, Sparkles, Trophy, Hammer, Tomato
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Weekly discount configuration
const WEEKLY_DISCOUNT_PERCENT = 50;
const WEEKLY_DISCOUNTED_ACTION: ShameAction = 'tomatoes';

// Mockery action titles
export const getMockeryActionTitle = (action: MockeryAction): string => {
  const titles: Record<string, string> = {
    'tomatoes': 'Throw Rotten Tomatoes',
    'eggs': 'Throw Putrid Eggs',
    'stocks': 'Place in Stocks',
    'crown': 'Remove Crown',
    'protection': 'Remove Protection',
    'dragon': 'Dragon Curse',
    'demon': 'Demon Curse',
    'silence': 'Silence User',
    'courtJester': 'Court Jester',
    'putridEggs': 'Putrid Eggs',
    'smokeBomb': 'Smoke Bomb',
    'glitterBomb': 'Glitter Bomb',
    'royalPie': 'Royal Pie',
    'jokeCrown': 'Joke Crown',
    'memeFrame': 'Meme Frame',
    'roast': 'Royal Roast',
    'ridicule': 'Public Ridicule',
    'humiliate': 'Humiliate',
    'expose': 'Expose',
    'mock': 'Mock',
    'taunt': 'Taunt',
    'jest': 'Jest',
    'defeat': 'Defeat',
    'dunce': 'Dunce Cap',
    'jester': 'Jester Hat',
    'troll': 'Troll',
    'peasant': 'Demote to Peasant',
    'target': 'Target',
    'challenge': 'Challenge',
    'ghost': 'Ghost',
    'dungeons': 'Dungeons',
    'immune': 'Immune',
    'rat': 'Rat',
    'skeleton': 'Skeleton',
    'pawn': 'Pawn',
    'guillotine': 'Guillotine',
    'removal': 'Removal',
    'shame': 'Public Shame'
  };
  return titles[action] || 'Mock User';
};

// Mockery action descriptions
export const getMockeryActionDescription = (action: MockeryAction): string => {
  const descriptions: Record<string, string> = {
    'tomatoes': 'Pelt this user with rotten tomatoes for all to see. A classic form of medieval public shaming.',
    'eggs': 'Shower this user with putrid eggs, leaving them smelly and disgraced for 24 hours.',
    'stocks': 'Lock this user in the public stocks, the ultimate medieval punishment for ostentatious spending.',
    'crown': 'Remove this user\'s crown, stripping them of their royal status temporarily.',
    'protection': 'Remove this user\'s protection shield, leaving them vulnerable to mockery.',
    'dragon': 'Curse this user with the dragon\'s breath, marking them with fiery shame.',
    'demon': 'Inflict a demonic curse, transforming their profile into something sinister.',
    'silence': 'Silence this user temporarily, preventing them from participating in discussions.',
    'courtJester': 'Turn this user into the court jester, forcing them to entertain the kingdom.',
    // More descriptions...
    'shame': 'Subject this user to public mockery and shame.'
  };
  return descriptions[action] || 'Subject this user to public mockery';
};

// Mockery action prices
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<string, number> = {
    'tomatoes': 0.25,
    'eggs': 0.50,
    'stocks': 1.00,
    'crown': 5.00,
    'protection': 5.00,
    'dragon': 10.00,
    'demon': 10.00,
    'silence': 2.50,
    'courtJester': 3.00,
    'putridEggs': 0.75,
    'smokeBomb': 1.50,
    'glitterBomb': 1.50,
    'royalPie': 2.00,
    'jokeCrown': 5.00,
    'memeFrame': 2.00,
    'roast': 1.00,
    'ridicule': 1.50,
    'humiliate': 2.00,
    'expose': 3.00,
    'mock': 0.50,
    'taunt': 0.25,
    'jest': 0.50,
    'defeat': 3.00,
    'dunce': 1.00,
    'jester': 1.50,
    'troll': 1.25,
    'peasant': 2.00,
    'target': 0.50,
    'challenge': 1.00,
    'ghost': 3.50,
    'dungeons': 4.00,
    'immune': 7.50,
    'rat': 1.00,
    'skeleton': 2.00,
    'pawn': 1.00,
    'guillotine': 7.50,
    'removal': 5.00,
    'shame': 0.50
  };
  return prices[action] || 0.50;
};

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction): LucideIcon => {
  const icons: Record<string, LucideIcon> = {
    'tomatoes': Tomato,
    'eggs': Egg,
    'stocks': Hammer,
    'crown': Crown,
    'protection': Shield,
    'dragon': Flame,
    'demon': Skull,
    'silence': ZapOff,
    'courtJester': HeartCrack,
    'putridEggs': Egg,
    'smokeBomb': Bomb,
    'glitterBomb': Sparkles,
    'royalPie': Trash2,
    'jokeCrown': Crown,
    'memeFrame': Trash2,
    'roast': Flame,
    'ridicule': ThumbsDown,
    'humiliate': ThumbsDown,
    'expose': UserX,
    'mock': UserX2,
    'taunt': ThumbsDown,
    'jest': HeartCrack,
    'defeat': Skull,
    'dunce': Trash2,
    'jester': Trash2,
    'troll': Ghost,
    'peasant': UserX,
    'target': Target,
    'challenge': Trophy,
    'ghost': Ghost,
    'dungeons': Skull,
    'immune': Shield,
    'rat': Rat,
    'skeleton': Skull,
    'pawn': UserX,
    'guillotine': UserX2,
    'removal': UserX
  };
  return icons[action] || Target;
};

// Get mockery tier
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<string, MockeryTier> = {
    'tomatoes': 'basic',
    'eggs': 'basic',
    'stocks': 'basic',
    'crown': 'royal',
    'protection': 'premium',
    'dragon': 'legendary',
    'demon': 'legendary',
    'silence': 'premium',
    'courtJester': 'premium',
    'putridEggs': 'basic',
    'smokeBomb': 'premium',
    'glitterBomb': 'premium',
    'royalPie': 'premium',
    'jokeCrown': 'royal',
    'memeFrame': 'premium',
    'roast': 'basic',
    'ridicule': 'premium',
    'humiliate': 'premium',
    'expose': 'royal',
    'mock': 'basic',
    'taunt': 'basic',
    'jest': 'basic',
    'defeat': 'royal',
    'dunce': 'premium',
    'jester': 'premium',
    'troll': 'premium',
    'peasant': 'premium',
    'target': 'basic',
    'challenge': 'premium',
    'ghost': 'royal',
    'dungeons': 'royal',
    'immune': 'royal',
    'rat': 'premium',
    'skeleton': 'premium',
    'pawn': 'premium',
    'guillotine': 'royal',
    'removal': 'royal'
  };
  return tiers[action] || 'basic';
};

// Get mockery tier color class
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colorClasses: Record<string, string> = {
    'basic': 'text-gray-400',
    'premium': 'text-purple-400',
    'royal': 'text-royal-gold',
    'legendary': 'text-amber-500',
    'rare': 'text-blue-400',
    'epic': 'text-purple-500',
    'common': 'text-gray-300',
    'uncommon': 'text-green-400',
    'silver': 'text-gray-400',
    'bronze': 'text-amber-600'
  };
  return colorClasses[tier] || 'text-gray-400';
};

// Get active mockery class
export const getActiveMockeryClass = (action: MockeryAction): string => {
  const effectClasses: Record<string, string> = {
    'tomatoes': 'bg-red-500/20 border-red-600/30',
    'eggs': 'bg-yellow-500/20 border-yellow-600/30',
    'stocks': 'bg-gray-500/20 border-gray-600/30',
    'crown': 'bg-amber-500/20 border-amber-600/30',
    'protection': 'bg-blue-500/20 border-blue-600/30',
    'dragon': 'bg-orange-500/20 border-orange-600/30',
    'demon': 'bg-red-900/20 border-red-900/30',
    'silence': 'bg-gray-700/20 border-gray-800/30',
    'courtJester': 'bg-purple-500/20 border-purple-600/30',
    'putridEggs': 'bg-green-700/20 border-green-800/30',
    'smokeBomb': 'bg-gray-400/20 border-gray-500/30',
    'glitterBomb': 'bg-pink-400/20 border-pink-500/30'
  };
  return effectClasses[action] || 'bg-gray-500/20 border-gray-600/30';
};

// Get mockery effect class
export const getMockeryEffectClass = (action: MockeryAction): string => {
  return getActiveMockeryClass(action);
};

// Get mockery effect duration in hours
export const getMockeryEffectDuration = (action: MockeryAction): number => {
  const durations: Record<string, number> = {
    'tomatoes': 24,
    'eggs': 24,
    'stocks': 24,
    'crown': 48,
    'protection': 24,
    'dragon': 72,
    'demon': 72,
    'silence': 24,
    'courtJester': 48,
    'putridEggs': 24,
    'smokeBomb': 24,
    'glitterBomb': 24,
    'royalPie': 24,
    'jokeCrown': 48
  };
  return durations[action] || 24;
};

// Get mockery cooldown in seconds
export const getMockeryCooldown = (action: MockeryAction): number => {
  const cooldowns: Record<string, number> = {
    'tomatoes': 300,
    'eggs': 300,
    'stocks': 300,
    'crown': 1800,
    'protection': 1800,
    'dragon': 3600,
    'demon': 3600,
    'silence': 900,
    'courtJester': 1200
  };
  return cooldowns[action] || 300;
};

// Get mockery duration in hours
export const getMockeryDuration = (action: MockeryAction): number => {
  return getMockeryEffectDuration(action);
};

// Get mockery price
export const getMockeryPrice = (action: MockeryAction): number => {
  return getMockeryActionPrice(action);
};

// Check if action has weekly discount
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  return action === WEEKLY_DISCOUNTED_ACTION;
};

// Get weekly discounted action
export const getWeeklyDiscountedAction = (): ShameAction => {
  return WEEKLY_DISCOUNTED_ACTION;
};

// Get discounted price for shame action
export const getDiscountedShamePrice = (action: ShameAction): number => {
  const regularPrice = getMockeryActionPrice(action);
  const discountMultiplier = (100 - WEEKLY_DISCOUNT_PERCENT) / 100;
  return hasWeeklyDiscount(action) 
    ? Number((regularPrice * discountMultiplier).toFixed(2)) 
    : regularPrice;
};

// Get shame action price
export const getShameActionPrice = (action: ShameAction): number => {
  return getMockeryActionPrice(action);
};

// Get shame action message
export const getShameActionMessage = (action: ShameAction, username: string): string => {
  const messages: Record<string, string> = {
    'tomatoes': `You've pelted ${username} with rotten tomatoes!`,
    'eggs': `You've egged ${username} with putrid eggs!`,
    'stocks': `You've locked ${username} in the public stocks!`,
    'shame': `You've publicly shamed ${username}!`
  };
  return messages[action] || `You've publicly mocked ${username}!`;
};

// Render mockery icon component
export const renderMockeryIcon = (action: MockeryAction, className: string = "h-4 w-4") => {
  const IconComponent = getMockeryActionIcon(action);
  return React.createElement(IconComponent, { className });
};

// Get mockery action icon color
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colors: Record<string, string> = {
    'tomatoes': 'text-red-500',
    'eggs': 'text-yellow-500',
    'stocks': 'text-gray-500',
    'crown': 'text-amber-500',
    'protection': 'text-blue-500',
    'dragon': 'text-orange-500',
    'demon': 'text-red-900',
    'silence': 'text-gray-700',
    'courtJester': 'text-purple-500'
  };
  return colors[action] || 'text-gray-500';
};

// For backward compatibility
export const getMockeryName = getMockeryActionTitle;
export const getMockeryDescription = getMockeryActionDescription;
export const getMockeryCost = getMockeryActionPrice;
