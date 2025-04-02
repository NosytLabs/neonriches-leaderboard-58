
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { AlertCircle, Crown, Egg, Award, ShieldCheck, CloudOff, UserX, Shield, MessageCircle, Laugh, Flag, Swords } from 'lucide-react';

/**
 * Get a friendly display name for a mockery action
 */
export function getMockeryName(action: string): string {
  const displayNames: Record<string, string> = {
    tomato: 'Tomato',
    egg: 'Egg',
    putridEgg: 'Putrid Egg',
    thumbs_down: 'Thumbs Down',
    thumbsDown: 'Thumbs Down',
    crown: 'Crown',
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
    laugh: 'Laugh',
    fish: 'Fish',
    taunt: 'Taunt',
    shame: 'Shame',
    flame: 'Flame',
    heart: 'Heart',
    skull: 'Skull',
    rotten_egg: 'Rotten Egg'
  };
  
  return displayNames[action] || 'Unknown';
}

/**
 * Get description text for a mockery action
 */
export function getMockeryDescription(action: string): string {
  const descriptions: Record<string, string> = {
    tomato: 'Throw tomatoes at your rival to publicly humiliate them.',
    egg: 'Throw eggs to make a messy statement.',
    putridEgg: 'Launch a particularly smelly egg for maximum embarrassment.',
    thumbs_down: 'Show your disapproval with a thumbs down.',
    thumbsDown: 'Show your disapproval with a thumbs down.',
    crown: 'Award a sarcastic crown to mock their regal aspirations.',
    stocks: 'Place them in the stocks for public ridicule.',
    jester: 'Label them as the court jester.',
    mock: 'Mock them with public ridicule.',
    challenge: 'Issue a formal spending challenge.',
    joust: 'Challenge them to a spending joust.',
    duel: 'Initiate a wealth duel with high stakes.',
    silence: 'Silence them temporarily in the chat.',
    courtJester: 'Designate them as the official court jester.',
    smokeBomb: 'Drop a smoke bomb to cause confusion.',
    protection: 'Grant royal protection against mockery.',
    laugh: 'Laugh at their expense publicly.',
    fish: 'Slap them with a fish for old-school mockery.',
    taunt: 'Taunt them with a provocative message.',
    shame: 'Subject them to public shame.',
    flame: 'Flame them with criticism.',
    heart: 'Send an ironic heart of pity.',
    skull: 'Send a foreboding skull as a warning.',
    rotten_egg: 'Throw a rotten egg that causes a stink.'
  };
  
  return descriptions[action] || 'Apply mockery to this user.';
}

/**
 * Get the cost of a mockery action
 */
export function getMockeryActionPrice(action: string): number {
  const prices: Record<string, number> = {
    tomato: 10,
    egg: 25,
    putridEgg: 50,
    thumbs_down: 5,
    thumbsDown: 5,
    crown: 100,
    stocks: 75,
    jester: 35,
    mock: 15,
    challenge: 40,
    joust: 60,
    duel: 80,
    silence: 120,
    courtJester: 65,
    smokeBomb: 45,
    protection: 200,
    laugh: 20,
    fish: 30,
    taunt: 15,
    shame: 55,
    flame: 15,
    heart: 10,
    skull: 30,
    rotten_egg: 40
  };
  
  return prices[action] || 10;
}

/**
 * Get the appropriate icon component for a mockery action
 */
export function getMockeryActionIcon(action: string) {
  const icons: Record<string, any> = {
    tomato: AlertCircle,
    egg: Egg,
    putridEgg: Egg,
    thumbs_down: Shield,
    thumbsDown: Shield,
    crown: Crown,
    stocks: Award,
    jester: Award,
    mock: Laugh,
    challenge: Flag,
    joust: Swords,
    duel: Shield,
    silence: UserX,
    courtJester: Award,
    smokeBomb: CloudOff,
    protection: ShieldCheck,
    laugh: Laugh,
    fish: Shield,
    taunt: MessageCircle,
    shame: UserX
  };
  
  return icons[action] || AlertCircle;
}

/**
 * Get the tier/rarity of a mockery action
 */
export function getMockeryTier(action: string): MockeryTier {
  const tiers: Record<string, MockeryTier> = {
    tomato: 'common',
    egg: 'uncommon',
    putridEgg: 'rare',
    thumbs_down: 'common',
    thumbsDown: 'common',
    crown: 'legendary',
    stocks: 'epic',
    jester: 'rare',
    mock: 'common',
    challenge: 'uncommon',
    joust: 'rare',
    duel: 'epic',
    silence: 'legendary',
    courtJester: 'epic',
    smokeBomb: 'rare',
    protection: 'legendary',
    laugh: 'common',
    fish: 'uncommon',
    taunt: 'common',
    shame: 'rare',
    flame: 'common',
    heart: 'common',
    skull: 'uncommon',
    rotten_egg: 'rare',
    royal: 'royal'
  };
  
  return tiers[action] || 'common';
}

/**
 * Get the color class for a mockery tier
 */
export function getMockeryTierColorClass(tier: MockeryTier): string {
  const colorClasses: Record<MockeryTier, string> = {
    common: 'text-gray-400 border-gray-400',
    uncommon: 'text-green-400 border-green-400',
    rare: 'text-blue-400 border-blue-400',
    epic: 'text-purple-400 border-purple-400',
    legendary: 'text-royal-gold border-royal-gold',
    royal: 'text-royal-gold border-royal-gold'
  };
  
  return colorClasses[tier] || 'text-gray-400 border-gray-400';
}

/**
 * Get the color for a mockery action icon
 */
export function getMockeryActionIconColor(action: string): string {
  const colors: Record<string, string> = {
    tomato: '#f44336',
    egg: '#ffeb3b',
    putridEgg: '#8bc34a',
    thumbs_down: '#2196f3',
    thumbsDown: '#2196f3',
    crown: '#ffc107',
    stocks: '#795548',
    jester: '#9c27b0',
    mock: '#03a9f4',
    challenge: '#4caf50',
    joust: '#673ab7',
    duel: '#e91e63',
    silence: '#607d8b',
    courtJester: '#9575cd',
    smokeBomb: '#455a64',
    protection: '#66bb6a',
    laugh: '#29b6f6',
    fish: '#26a69a',
    taunt: '#ff9800',
    shame: '#f44336',
    flame: '#ff5722',
    heart: '#e91e63',
    skull: '#212121',
    rotten_egg: '#827717'
  };
  
  return colors[action] || '#9e9e9e';
}

/**
 * Get the cost of a mockery action
 */
export function getMockeryCost(action: string): number {
  return getMockeryActionPrice(action);
}

export default {
  getMockeryName,
  getMockeryDescription,
  getMockeryActionPrice,
  getMockeryActionIcon,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryActionIconColor,
  getMockeryCost
};
