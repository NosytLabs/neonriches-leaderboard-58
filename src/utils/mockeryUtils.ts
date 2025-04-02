
import { MockeryAction } from '@/types/mockery-types';
import { AlertTriangle, Egg, Crown, ThumbsDown, AlertCircle, Lock, Smile, User, UserX, MessageSquare } from 'lucide-react';

// Mockery action display names
export const mockeryActionNames: Record<string, string> = {
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

// Mockery action costs
export const mockeryActionCosts: Record<string, number> = {
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

// Mockery action descriptions
export const mockeryActionDescriptions: Record<string, string> = {
  'tomato': 'Throw virtual tomatoes at a user, a classic form of public mockery.',
  'egg': 'Throw eggs at your target, messier than tomatoes and more expensive.',
  'putridEgg': 'Throw rotten eggs for maximum embarrassment.',
  'crown': 'Temporarily remove someone\'s royal status symbol.',
  'thumbsDown': 'Express your disapproval of someone\'s spending habits.',
  'mock': 'Make fun of someone with a custom message.',
  'stocks': 'Put someone in the virtual stocks for public ridicule.',
  'jester': 'Force someone to wear a jester outfit on their profile.',
  'courtJester': 'Appoint someone as the court jester, a more elaborate punishment.',
  'silence': 'Prevent someone from using mockery actions temporarily.',
  'taunt': 'Send a taunting message to someone.',
  'smokeBomb': 'Create confusion with a smoke bomb, hiding your actions.',
  'protection': 'Shield yourself from mockery for a period of time.',
  'shame': 'Publicly declare someone\'s spending as shameful.',
  'challenge': 'Challenge someone to a spending contest.',
  'joust': 'Enter a jousting contest with virtual lances.',
  'duel': 'Challenge someone to a spending duel with high stakes.',
  'royal_decree': 'Issue a royal decree that others must follow.',
  'flame': 'Roast someone with a fiery criticism.',
  'heart': 'Show unexpected affection to confuse your rival.',
  'skull': 'Send an ominous warning of mockery to come.',
  'thumbs_down': 'A simple gesture of disapproval.',
  'laugh': 'Laugh at someone\'s futile attempts to rise in rank.',
  'rotten_egg': 'The most disgusting projectile available.'
};

// Mockery action icons
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

// Normalize a mockery action to ensure it's valid
export function normalizeMockeryAction(action: string): MockeryAction {
  // Check if the action is a valid MockeryAction
  const validActions = Object.keys(mockeryActionNames);
  if (validActions.includes(action)) {
    return action as MockeryAction;
  }
  
  // Default to 'mock' if the action is not valid
  return 'mock';
}

// Get mockery action display name
export function getMockeryActionDisplayName(action: string): string {
  return mockeryActionNames[action] || 'Unknown Action';
}

// Get mockery action icon
export function getMockeryActionIcon(action: string) {
  return mockeryActionIcons[action] || AlertTriangle;
}

// Get cost for a mockery action
export function getMockeryCost(action: string): number {
  return mockeryActionCosts[action] || 5;
}

// Get description for a mockery action
export function getMockeryDescription(action: string): string {
  return mockeryActionDescriptions[action] || 'No description available';
}

export const getDiscountedMockeryCost = (action: string): number => {
  const cost = getMockeryCost(action);
  return Math.floor(cost * 0.75); // 25% discount
};
