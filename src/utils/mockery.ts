
/**
 * Utilities for mockery system
 */
import { MockeryAction } from '@/types/mockery-types';
import { Egg, Flame, Heart, ThumbsDown, Laugh, Skull, Crown } from 'lucide-react';

/**
 * Get the display name for a mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  const nameMap: Record<string, string> = {
    tomato: 'Rotten Tomato',
    egg: 'Egg',
    putridEgg: 'Putrid Egg',
    rotten_egg: 'Rotten Egg',
    flame: 'Flame',
    heart: 'Heart',
    thumbs_down: 'Thumbs Down',
    laugh: 'Laugh',
    skull: 'Skull',
    crown: 'Crown',
    stocks: 'Stocks',
    jester: 'Jester',
    shame: 'Shame Bell',
    silence: 'Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    protection: 'Protection',
    taunt: 'Taunt',
    mock: 'Mock',
    challenge: 'Challenge',
    joust: 'Joust',
    duel: 'Duel',
    fish: 'Fish Slap',
    thumbsDown: 'Thumbs Down'
  };
  
  return nameMap[action] || 'Unknown';
};

/**
 * Get a description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptionMap: Record<string, string> = {
    tomato: 'Throw a rotten tomato at the target',
    egg: 'Throw an egg at the target',
    putridEgg: 'Throw a particularly smelly egg',
    rotten_egg: 'Throw a rotten egg that will really stink',
    flame: 'Set their reputation on fire',
    heart: 'Show some love instead of mockery',
    thumbs_down: 'Express your disapproval',
    laugh: 'Laugh at their misfortune',
    skull: 'Send a deadly reminder',
    crown: 'Crown them sarcastically',
    stocks: 'Place them in public stocks for ridicule',
    jester: 'Make them look like a fool',
    shame: 'Ring the shame bell',
    silence: 'Silence them temporarily',
    courtJester: 'Elevate them to royal jester status',
    smokeBomb: 'Create confusion with a smoke bomb',
    protection: 'Protect them from mockery',
    taunt: 'Taunt them mercilessly',
    mock: 'Mock them with words',
    challenge: 'Issue a formal challenge',
    joust: 'Challenge them to a joust',
    duel: 'Challenge them to a duel',
    fish: 'Slap them with a fish',
    thumbsDown: 'Show your disapproval'
  };
  
  return descriptionMap[action] || 'Unknown action';
};

/**
 * Get the icon component for a mockery action
 */
export const getMockeryIcon = (action: MockeryAction) => {
  const iconMap: Record<string, any> = {
    tomato: {
      icon: '🍅',
      component: null
    },
    egg: {
      icon: '🥚',
      component: Egg
    },
    putridEgg: {
      icon: '🥚',
      component: Egg
    },
    rotten_egg: {
      icon: '🥚',
      component: Egg
    },
    flame: {
      icon: '🔥',
      component: Flame
    },
    heart: {
      icon: '❤️',
      component: Heart
    },
    thumbs_down: {
      icon: '👎',
      component: ThumbsDown
    },
    laugh: {
      icon: '😂',
      component: Laugh
    },
    skull: {
      icon: '💀',
      component: Skull
    },
    crown: {
      icon: '👑',
      component: Crown
    },
    stocks: {
      icon: '🔒',
      component: null
    },
    jester: {
      icon: '🃏',
      component: null
    },
    shame: {
      icon: '🔔',
      component: null
    },
    silence: {
      icon: '🤐',
      component: null
    },
    courtJester: {
      icon: '👑🃏',
      component: null
    },
    smokeBomb: {
      icon: '💨',
      component: null
    },
    protection: {
      icon: '🛡️',
      component: null
    },
    taunt: {
      icon: '🤪',
      component: null
    },
    mock: {
      icon: '😜',
      component: null
    },
    challenge: {
      icon: '⚔️',
      component: null
    },
    joust: {
      icon: '🏇',
      component: null
    },
    duel: {
      icon: '🔫',
      component: null
    },
    fish: {
      icon: '🐟',
      component: null
    },
    thumbsDown: {
      icon: '👎',
      component: ThumbsDown
    }
  };
  
  return iconMap[action] || { icon: '❓', component: null };
};

export default {
  getMockeryName,
  getMockeryDescription,
  getMockeryIcon
};
