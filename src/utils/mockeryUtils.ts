
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { mockeryDescriptions, mockeryShortDescriptions } from './mockery/mockery-descriptions';

/**
 * Get the display name for a mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<string, string> = {
    tomato: 'Tomato',
    egg: 'Egg',
    rotten_egg: 'Rotten Egg',
    flame: 'Flame',
    heart: 'Heart',
    thumbs_down: 'Thumbs Down',
    laugh: 'Laugh',
    skull: 'Skull',
    crown: 'Crown',
    putridEgg: 'Putrid Egg',
    stocks: 'Stocks',
    jester: 'Jester',
    mock: 'Mock',
    challenge: 'Challenge',
    joust: 'Joust',
    duel: 'Duel',
    silence: 'Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    protection: 'Protection',
    taunt: 'Taunt',
    fish: 'Fish',
    thumbsDown: 'Thumbs Down',
    trumpet: 'Trumpet',
    confetti: 'Confetti',
    shame: 'Shame',
    royal_decree: 'Royal Decree',
    shame_certificate: 'Shame Certificate',
    insult: 'Insult',
    humiliate: 'Humiliation'
  };
  
  return names[action as string] || action.toString();
};

/**
 * Get the description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  // Use the provided mockery descriptions if available
  if (mockeryDescriptions[action]) {
    return mockeryDescriptions[action];
  }
  
  // Fallback descriptions
  const descriptions: Record<string, string> = {
    tomato: 'Throw a tomato at the user',
    egg: 'Throw an egg at the user',
    rotten_egg: 'Throw a rotten egg at the user',
    flame: 'Set the user on fire',
    heart: 'Show some love to the user',
    thumbs_down: 'Show disapproval to the user',
    laugh: 'Laugh at the user',
    skull: 'Mark the user with a skull',
    crown: 'Crown the user as royalty',
    putridEgg: 'Throw a putrid egg at the user',
    stocks: 'Put the user in stocks',
    jester: 'Make the user a jester',
    mock: 'Mock the user',
    challenge: 'Challenge the user',
    joust: 'Challenge the user to a joust',
    duel: 'Challenge the user to a duel',
    silence: 'Silence the user',
    courtJester: 'Make the user a court jester',
    smokeBomb: 'Throw a smoke bomb at the user',
    protection: 'Protect the user',
    taunt: 'Taunt the user',
    fish: 'Slap the user with a fish',
    thumbsDown: 'Show disapproval to the user',
    trumpet: 'Sound a trumpet at the user',
    confetti: 'Throw confetti at the user',
    shame: 'Shame the user publicly',
    royal_decree: 'Issue a royal decree against the user',
    shame_certificate: 'Award a certificate of shame',
    insult: 'Deliver a royal insult',
    humiliate: 'Publicly humiliate the user'
  };
  
  return descriptions[action as string] || `Use ${getMockeryName(action)} on the user`;
};

/**
 * Get the tier of a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
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
    mock: 'common',
    challenge: 'uncommon',
    joust: 'rare',
    duel: 'epic',
    silence: 'epic',
    courtJester: 'rare',
    smokeBomb: 'rare',
    protection: 'legendary',
    laugh: 'common',
    fish: 'uncommon',
    taunt: 'uncommon',
    thumbsDown: 'common',
    trumpet: 'uncommon',
    confetti: 'rare',
    shame: 'epic',
    royal_decree: 'legendary',
    shame_certificate: 'epic',
    insult: 'rare',
    humiliate: 'epic'
  };
  
  return tiers[action as string] || 'common';
};

/**
 * Get the cost of a mockery action
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const costs: Record<string, number> = {
    tomato: 5,
    egg: 10,
    rotten_egg: 15,
    flame: 25,
    heart: 15,
    thumbs_down: 5,
    laugh: 5,
    skull: 25,
    crown: 100,
    putridEgg: 20,
    stocks: 50,
    jester: 30,
    mock: 10,
    challenge: 20,
    joust: 30,
    duel: 40,
    silence: 50,
    courtJester: 40,
    smokeBomb: 30,
    protection: 75,
    taunt: 15,
    fish: 15,
    thumbsDown: 5,
    trumpet: 45,
    confetti: 50,
    shame: 40,
    royal_decree: 600,
    shame_certificate: 250,
    insult: 100,
    humiliate: 300
  };
  
  return costs[action as string] || 10;
};

/**
 * Get the color class for a mockery tier
 */
export const getMockeryTierColorClass = (tier: string): string => {
  const colorClasses: Record<string, string> = {
    common: 'text-gray-300',
    uncommon: 'text-green-300',
    rare: 'text-blue-300',
    epic: 'text-purple-300',
    legendary: 'text-orange-300'
  };
  return colorClasses[tier] || 'text-gray-300';
};

/**
 * Get the icon color for a mockery action
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colors: Record<string, string> = {
    tomato: '#ff6347',
    egg: '#f0e68c',
    rotten_egg: '#8b8878',
    flame: '#ff4500',
    heart: '#ff69b4',
    thumbs_down: '#cd5c5c',
    skull: '#dcdcdc',
    crown: '#ffd700',
    putridEgg: '#9acd32',
    stocks: '#8b4513',
    jester: '#9370db',
    mock: '#87ceeb',
    challenge: '#ff8c00',
    joust: '#4682b4',
    duel: '#b22222',
    silence: '#778899',
    courtJester: '#ba55d3',
    smokeBomb: '#708090',
    protection: '#4169e1',
    laugh: '#ffa500',
    fish: '#40e0d0',
    taunt: '#d2691e',
    thumbsDown: '#cd5c5c',
    trumpet: '#daa520',
    confetti: '#ff00ff',
    shame: '#dc143c',
    royal_decree: '#800080',
    shame_certificate: '#a0522d',
    insult: '#ff6347',
    humiliate: '#8b0000'
  };
  
  return colors[action as string] || '#aaaaaa';
};

/**
 * Get action icon for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction): any => {
  // Import icons lazily to avoid circular dependencies
  const { 
    AlertTriangle, Crown, ThumbsDown, MessageCircle, 
    Shield, Volume2, PartyPopper, Fish, Music, 
    Egg, Award, Flame, Sword
  } = require('lucide-react');
  
  const icons: Record<string, any> = {
    tomato: AlertTriangle,
    egg: Egg,
    rotten_egg: Egg,
    flame: Flame,
    heart: AlertTriangle,
    thumbs_down: ThumbsDown,
    skull: AlertTriangle,
    crown: Crown,
    putridEgg: Egg,
    stocks: AlertTriangle,
    jester: Crown,
    mock: MessageCircle,
    challenge: Award,
    joust: Sword,
    duel: Sword,
    silence: Volume2,
    courtJester: Crown,
    smokeBomb: AlertTriangle,
    protection: Shield,
    laugh: PartyPopper,
    fish: Fish,
    taunt: MessageCircle,
    thumbsDown: ThumbsDown,
    trumpet: Music,
    confetti: PartyPopper,
    shame: AlertTriangle,
    royal_decree: Crown,
    shame_certificate: Award,
    insult: MessageCircle,
    humiliate: AlertTriangle
  };
  
  return icons[action as string] || AlertTriangle;
};

// Alias for backward compatibility
export const getMockeryActionDisplayName = getMockeryName;

// Export all functions for use in other files
export default {
  getMockeryName,
  getMockeryDescription,
  getMockeryTier,
  getMockeryActionPrice,
  getMockeryTierColorClass,
  getMockeryActionIconColor,
  getMockeryActionIcon,
  getMockeryActionDisplayName
};
