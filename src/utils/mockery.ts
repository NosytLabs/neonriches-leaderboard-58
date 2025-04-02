
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { 
  Egg, 
  Crown, 
  Flame, 
  Heart, 
  Skull, 
  ThumbsDown,
  ShieldAlert,
  MessageSquareOff,
  PartyPopper
} from 'lucide-react';

// Get the appropriate icon for a mockery action
export const getMockeryIcon = (action: MockeryAction): React.FC => {
  switch (action) {
    case 'tomato':
      return PartyPopper;
    case 'egg':
      return Egg;
    case 'crown':
      return Crown;
    case 'flame':
      return Flame;
    case 'heart':
      return Heart;
    case 'skull':
      return Skull;
    case 'thumbs_down':
      return ThumbsDown;
    case 'protection':
      return ShieldAlert;
    case 'silence':
      return MessageSquareOff;
    default:
      return PartyPopper;
  }
};

// Alias for backward compatibility
export const getMockeryActionIcon = getMockeryIcon;

// Get the display name for a mockery action
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
    shame: 'Shame',
    silence: 'Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    protection: 'Protection',
    taunt: 'Taunt',
    mock: 'Mock',
    challenge: 'Challenge',
    joust: 'Joust',
    duel: 'Duel',
    fish: 'Fish',
    thumbsDown: 'Thumbs Down'
  };
  
  return names[action] || action;
};

// Get the description for a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
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
    shame: 'Shame the user',
    silence: 'Silence the user',
    courtJester: 'Make the user a court jester',
    smokeBomb: 'Throw a smoke bomb at the user',
    protection: 'Protect the user',
    taunt: 'Taunt the user',
    mock: 'Mock the user',
    challenge: 'Challenge the user',
    joust: 'Challenge the user to a joust',
    duel: 'Challenge the user to a duel',
    fish: 'Slap the user with a fish',
    thumbsDown: 'Show disapproval to the user'
  };
  
  return descriptions[action] || `Use ${getMockeryName(action)} on the user`;
};

// Get the tier of a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<string, MockeryTier> = {
    tomato: 'common',
    egg: 'common',
    rotten_egg: 'uncommon',
    flame: 'rare',
    heart: 'uncommon',
    thumbs_down: 'common',
    laugh: 'common',
    skull: 'rare',
    crown: 'legendary',
    putridEgg: 'rare',
    stocks: 'epic',
    jester: 'rare',
    shame: 'epic',
    silence: 'epic',
    courtJester: 'epic',
    smokeBomb: 'rare',
    protection: 'legendary',
    taunt: 'uncommon',
    mock: 'common',
    challenge: 'uncommon',
    joust: 'rare',
    duel: 'epic',
    fish: 'uncommon',
    thumbsDown: 'common'
  };
  
  return tiers[action] || 'common';
};

// Get the cost of a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
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
    shame: 40,
    silence: 50,
    courtJester: 40,
    smokeBomb: 30,
    protection: 75,
    taunt: 15,
    mock: 10,
    challenge: 20,
    joust: 30,
    duel: 40,
    fish: 15,
    thumbsDown: 5
  };
  
  return costs[action] || 10;
};

export default {
  getMockeryIcon,
  getMockeryName,
  getMockeryDescription,
  getMockeryTier,
  getMockeryCost,
  getMockeryActionIcon
};
