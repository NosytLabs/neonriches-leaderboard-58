
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

// Map of mockery action descriptions
export const mockeryDescriptions: Record<string, string> = {
  tomato: "Throw a tomato at the target, causing temporary embarrassment.",
  egg: "Pelt the target with eggs, creating a messy situation.",
  putridEgg: "Throw a rotten egg that leaves a lingering unpleasant odor.",
  crown: "Topple the target's crown, reducing their royal status temporarily.",
  thumbsDown: "Express your disapproval of the target's actions.",
  mock: "Openly mock the target with jeering and ridicule.",
  stocks: "Place the target in the public stocks for all to see.",
  jester: "Assign the target a jester hat, making them the butt of jokes.",
  courtJester: "Demote the target to court jester, requiring them to entertain the court.",
  silence: "Temporarily prevent the target from speaking in royal discussions.",
  taunt: "Taunt the target with insulting words and gestures.",
  smokeBomb: "Throw a smoke bomb that temporarily obscures the target's visibility.",
  protection: "Shield yourself from mockery with royal protection.",
  shame: "Publicly shame the target for their dishonorable behavior.",
  challenge: "Challenge the target to prove their worth.",
  joust: "Challenge the target to a virtual jousting match.",
  duel: "Engage the target in a prestigious royal duel.",
  royal_decree: "Issue a royal decree declaring the target's embarrassment.",
  flame: "Publicly flame the target with harsh criticism.",
  heart: "Show unexpected affection to confuse the target.",
  skull: "Send an ominous skull as a warning to the target.",
  thumbs_down: "Publicly show disapproval of the target's contributions.",
  laugh: "Dismissively laugh at the target's efforts or statements.",
  rotten_egg: "Assault with an egg that has far exceeded its shelf life"
};

// Get the display name for a mockery action
export const getMockeryName = (action: MockeryAction | string): string => {
  const names: Record<string, string> = {
    'tomato': 'Tomato',
    'egg': 'Egg',
    'rotten_egg': 'Rotten Egg',
    'flame': 'Flame',
    'heart': 'Heart',
    'thumbs_down': 'Thumbs Down',
    'laugh': 'Laugh',
    'skull': 'Skull',
    'crown': 'Crown',
    'putridEgg': 'Putrid Egg',
    'stocks': 'Stocks',
    'jester': 'Jester',
    'shame': 'Shame',
    'silence': 'Silence',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'protection': 'Protection',
    'taunt': 'Taunt',
    'mock': 'Mock',
    'challenge': 'Challenge',
    'joust': 'Joust',
    'duel': 'Duel',
    'royal_decree': 'Royal Decree',
    'fish': 'Fish',
    'thumbsDown': 'Thumbs Down'
  };
  
  return names[action] || String(action);
};

// Get the description for a mockery action
export const getMockeryDescription = (action: MockeryAction | string): string => {
  return mockeryDescriptions[action] || `Use ${getMockeryName(action)} on the user`;
};

// Get the tier of a mockery action
export const getMockeryTier = (action: MockeryAction | string): MockeryTier => {
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
    thumbsDown: 'common',
    royal_decree: 'legendary'
  };
  
  return tiers[action] || 'common';
};

// Get the cost of a mockery action
export const getMockeryCost = (action: MockeryAction | string): number => {
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
    thumbsDown: 5,
    royal_decree: 80
  };
  
  return costs[action] || 10;
};

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

// Get the discounted price for a mockery action
export const getDiscountedShamePrice = (action: MockeryAction | string): number => {
  const originalPrice = getMockeryCost(action);
  return Math.round(originalPrice * 0.75); // 25% discount
};

// Alias for backward compatibility
export const getMockeryActionIcon = getMockeryIcon;
