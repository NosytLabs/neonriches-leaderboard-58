
import { MockeryAction } from '@/types/mockery-types';
import { 
  Egg, 
  ThumbsDown, 
  Crown, 
  Flame, 
  Skull, 
  Heart, 
  Music, 
  Confetti, 
  AlertTriangle,
  ShieldAlert,
  Laugh,
  Feather,
  MessageCircle 
} from 'lucide-react';

// Define mockery action display names
export const getMockeryActionDisplayName = (action: MockeryAction): string => {
  const displayNames: Record<MockeryAction, string> = {
    tomato: 'Tomato',
    egg: 'Egg',
    rotten_egg: 'Rotten Egg',
    flame: 'Flame',
    heart: 'Heart',
    thumbs_down: 'Thumbs Down',
    skull: 'Skull',
    crown: 'Mock Crown',
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
    laugh: 'Laugh',
    fish: 'Fish',
    taunt: 'Taunt',
    thumbsDown: 'Thumbs Down',
    trumpet: 'Trumpet',
    confetti: 'Confetti',
    shame: 'Shame',
    royal_decree: 'Royal Decree',
    shame_certificate: 'Shame Certificate',
    insult: 'Insult',
    humiliate: 'Humiliate'
  };
  
  return displayNames[action] || 'Unknown';
};

// Define mockery action icons (mapping to Lucide icons)
export const mockeryActionIcons: Record<MockeryAction, any> = {
  tomato: AlertTriangle,
  egg: Egg,
  rotten_egg: Egg,
  flame: Flame,
  heart: Heart,
  thumbs_down: ThumbsDown,
  skull: Skull,
  crown: Crown,
  putridEgg: Egg,
  stocks: ShieldAlert,
  jester: Laugh,
  mock: MessageCircle,
  challenge: AlertTriangle,
  joust: AlertTriangle,
  duel: AlertTriangle,
  silence: AlertTriangle,
  courtJester: Laugh,
  smokeBomb: AlertTriangle,
  protection: ShieldAlert,
  laugh: Laugh,
  fish: Feather,
  taunt: MessageCircle,
  thumbsDown: ThumbsDown,
  trumpet: Music,
  confetti: Confetti,
  shame: AlertTriangle,
  royal_decree: Crown,
  shame_certificate: AlertTriangle,
  insult: MessageCircle,
  humiliate: AlertTriangle
};

// Define mockery action descriptions
export const getMockeryActionDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomato: 'Throw a tomato at the user',
    egg: 'Throw an egg at the user',
    rotten_egg: 'Throw a rotten egg at the user',
    flame: 'Flame the user with a hot take',
    heart: 'Show some ironic love',
    thumbs_down: 'Give a thumbs down',
    skull: 'Mark as defeated',
    crown: 'Crown them mockingly',
    putridEgg: 'Throw a putrid egg at the user',
    stocks: 'Put the user in stocks for public mockery',
    jester: 'Mark as a jester',
    mock: 'Mock the user',
    challenge: 'Challenge the user',
    joust: 'Joust with the user',
    duel: 'Challenge to a duel',
    silence: 'Silence the user temporarily',
    courtJester: 'Designate as court jester',
    smokeBomb: 'Leave a smoke bomb',
    protection: 'Add protection from mockery',
    laugh: 'Laugh at the user',
    fish: 'Slap with a fish',
    taunt: 'Taunt the user',
    thumbsDown: 'Give a thumbs down gesture',
    trumpet: 'Play a mocking tune',
    confetti: 'Throw ironic confetti',
    shame: 'Public shaming',
    royal_decree: 'Issue a royal decree of shame',
    shame_certificate: 'Issue a certificate of shame',
    insult: 'Insult the user',
    humiliate: 'Publicly humiliate'
  };
  
  return descriptions[action] || 'Mock the user';
};

// Define mockery action tiers
export const getMockeryActionTier = (action: MockeryAction): string => {
  const tiers: Record<MockeryAction, string> = {
    tomato: 'common',
    egg: 'common',
    rotten_egg: 'uncommon',
    flame: 'uncommon',
    heart: 'common',
    thumbs_down: 'common',
    skull: 'uncommon',
    crown: 'rare',
    putridEgg: 'uncommon',
    stocks: 'rare',
    jester: 'uncommon',
    mock: 'common',
    challenge: 'uncommon',
    joust: 'rare',
    duel: 'rare',
    silence: 'epic',
    courtJester: 'rare',
    smokeBomb: 'epic',
    protection: 'legendary',
    laugh: 'common',
    fish: 'uncommon',
    taunt: 'common',
    thumbsDown: 'common',
    trumpet: 'uncommon',
    confetti: 'uncommon',
    shame: 'rare',
    royal_decree: 'legendary',
    shame_certificate: 'rare',
    insult: 'common',
    humiliate: 'rare'
  };
  
  return tiers[action] || 'common';
};
