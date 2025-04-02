
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { AlertTriangle, Egg, Crown, ThumbsDown, AlertCircle, Lock, Smile, User, UserX, MessageSquare } from 'lucide-react';

// Mockery tier label mapping
export const mockeryTierLabels: Record<string, string> = {
  'common': 'Common',
  'uncommon': 'Uncommon',
  'rare': 'Rare', 
  'epic': 'Epic',
  'legendary': 'Legendary',
  'royal': 'Royal',
  'basic': 'Basic',
  'premium': 'Premium',
  'silver': 'Silver',
  'gold': 'Gold',
  'bronze': 'Bronze'
};

// Get mockery action display name
export function getMockeryActionName(action: MockeryAction): string {
  const actionNames: Record<string, string> = {
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
  
  return actionNames[action] || 'Unknown Action';
}

// Alias for backward compatibility
export const getMockeryActionDisplayName = getMockeryActionName;

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

// Get icon for mockery action
export function getMockeryActionIcon(action: MockeryAction) {
  return mockeryActionIcons[action] || AlertTriangle;
}
