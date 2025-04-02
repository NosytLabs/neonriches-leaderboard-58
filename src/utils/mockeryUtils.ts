
import { MockeryAction } from '@/types/mockery-types';
import { AlertTriangle, Egg, Crown, ThumbsDown, AlertCircle, Lock, Smile, User, UserX, MessageSquare } from 'lucide-react';

// Get the cost for a mockery action
export function getMockeryCost(action: MockeryAction): number {
  const costs: Record<string, number> = {
    'tomato': 5,
    'egg': 10,
    'putridEgg': 15,
    'crown': 100,
    'thumbsDown': 1,
    'mock': 2,
    'stocks': 25,
    'jester': 20,
    'courtJester': 30,
    'silence': 15,
    'taunt': 3,
    'smokeBomb': 8,
    'protection': 50,
    'shame': 20,
    'challenge': 15,
    'joust': 30,
    'duel': 50,
    'royal_decree': 200,
    'flame': 5,
    'heart': 2,
    'skull': 10,
    'thumbs_down': 1,
    'laugh': 2,
    'rotten_egg': 12
  };
  
  return costs[action] || 5;
}

// Get the name for a mockery action
export function getMockeryName(action: MockeryAction): string {
  const names: Record<string, string> = {
    'tomato': 'Throw Tomatoes',
    'egg': 'Throw Eggs',
    'putridEgg': 'Throw Putrid Eggs',
    'crown': 'Flip Crown',
    'thumbsDown': 'Thumbs Down',
    'mock': 'Mock',
    'stocks': 'Place in Stocks',
    'jester': 'Make Jester',
    'courtJester': 'Court Jester',
    'silence': 'Silence',
    'taunt': 'Taunt',
    'smokeBomb': 'Smoke Bomb',
    'protection': 'Protection',
    'shame': 'Shame',
    'challenge': 'Challenge',
    'joust': 'Joust',
    'duel': 'Duel',
    'royal_decree': 'Royal Decree',
    'flame': 'Flame',
    'heart': 'Heart',
    'skull': 'Skull',
    'thumbs_down': 'Thumbs Down',
    'laugh': 'Laugh',
    'rotten_egg': 'Rotten Egg'
  };
  
  return names[action] || 'Unknown Action';
}

// Get the tier for a mockery action
export function getMockeryTier(action: MockeryAction): string {
  const tiers: Record<string, string> = {
    'tomato': 'common',
    'egg': 'common',
    'putridEgg': 'uncommon',
    'crown': 'rare',
    'thumbsDown': 'common',
    'mock': 'common',
    'stocks': 'uncommon',
    'jester': 'uncommon',
    'courtJester': 'rare',
    'silence': 'uncommon',
    'taunt': 'common',
    'smokeBomb': 'uncommon',
    'protection': 'rare',
    'shame': 'uncommon',
    'challenge': 'uncommon',
    'joust': 'rare',
    'duel': 'rare',
    'royal_decree': 'legendary',
    'flame': 'common',
    'heart': 'common',
    'skull': 'uncommon',
    'thumbs_down': 'common',
    'laugh': 'common',
    'rotten_egg': 'uncommon'
  };
  
  return tiers[action] || 'common';
}

// Icons for mockery actions
export const mockeryActionIcons: Record<string, any> = {
  'tomato': AlertCircle,
  'egg': Egg,
  'putridEgg': Egg,
  'crown': Crown,
  'thumbsDown': ThumbsDown,
  'mock': MessageSquare,
  'stocks': Lock,
  'jester': User,
  'courtJester': User,
  'taunt': MessageSquare,
  'laugh': Smile,
  'flame': AlertTriangle,
  'heart': Crown,
  'skull': AlertTriangle,
  'thumbs_down': ThumbsDown,
  'rotten_egg': Egg,
  'shame': UserX,
  'challenge': AlertTriangle,
  'joust': AlertTriangle,
  'duel': AlertTriangle,
  'royal_decree': Crown,
  'protection': Crown,
  'silence': UserX,
  'smokeBomb': AlertCircle
};

// Get the icon for a mockery action
export function getMockeryActionIcon(action: MockeryAction) {
  return mockeryActionIcons[action] || AlertTriangle;
}

// Descriptions for mockery actions
export const mockeryDescriptions: Record<string, string> = {
  'tomato': 'Throw virtual tomatoes at the user, causing temporary embarrassment.',
  'egg': 'Pelt the user with eggs, leaving a messy display on their profile.',
  'putridEgg': 'Cover the user in putrid eggs, causing a foul odor indicator on their profile.',
  'crown': 'Temporarily flip the crown of a royal user, causing momentary embarrassment.',
  'thumbsDown': 'Express disapproval with a simple thumbs down gesture.',
  'mock': 'Publicly mock the user with a custom message.',
  'stocks': 'Place the user in virtual stocks for public ridicule.',
  'jester': 'Force the user to wear a jester hat on their profile.',
  'courtJester': 'Designate the user as the Court Jester, adding special animations to their profile.',
  'silence': 'Temporarily restrict the user from posting in public forums.',
  'taunt': 'Send a taunting message to the user.',
  'smokeBomb': 'Temporarily obscure the user\'s profile with smoke effects.',
  'protection': 'Shield yourself from mockery attempts for a period of time.',
  'shame': 'Publicly shame the user with a ceremony.',
  'challenge': 'Challenge the user to a spending duel.',
  'joust': 'Engage in a virtual jousting match with the user.',
  'duel': 'Challenge the user to a formal duel of honor.',
  'royal_decree': 'Issue a binding royal decree as a high-ranking member.',
  'flame': 'Send a fiery message of disapproval.',
  'heart': 'Send a supportive heart to the user.',
  'skull': 'Send an ominous skull symbol to the user.',
  'thumbs_down': 'Express disapproval with a thumbs down.',
  'laugh': 'Publicly laugh at the user.',
  'rotten_egg': 'Throw particularly foul eggs at the user.'
};
