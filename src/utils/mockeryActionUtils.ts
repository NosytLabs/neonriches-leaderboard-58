
import { AlertTriangle, Egg, Flame, Target, Crown, Heart, ThumbsDown, Skull, Lock, Music, Smile } from 'lucide-react';
import { MockeryAction } from '@/types/mockery-types';

/**
 * Get the display name for a mockery action
 */
export const getMockeryActionDisplayName = (action: string | MockeryAction): string => {
  const displayNames: Record<string, string> = {
    'tomato': 'Throw Tomatoes',
    'egg': 'Throw Eggs',
    'rotten_egg': 'Throw Rotten Eggs',
    'flame': 'Flame',
    'heart': 'Heart',
    'thumbs_down': 'Thumbs Down',
    'skull': 'Skull',
    'crown': 'Crown',
    'putridEgg': 'Putrid Egg',
    'stocks': 'Put in Stocks',
    'jester': 'Make a Jester',
    'mock': 'Mock',
    'challenge': 'Challenge',
    'joust': 'Joust',
    'duel': 'Duel',
    'silence': 'Silence',
    'laugh': 'Laugh',
    'fish': 'Fish',
    'taunt': 'Taunt',
    'thumbsDown': 'Thumbs Down',
    'trumpet': 'Trumpet',
    'confetti': 'Confetti',
    'shame': 'Shame',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'protection': 'Protection',
    'royal_decree': 'Royal Decree',
    'shame_certificate': 'Shame Certificate',
    'insult': 'Insult',
    'humiliate': 'Humiliate'
  };
  
  return displayNames[action as string] || 'Unknown Action';
};

/**
 * Get the icon component for a mockery action
 */
export const getMockeryActionIcon = (action: string | MockeryAction) => {
  const normalizedAction = String(action).toLowerCase();
  
  switch (normalizedAction) {
    case 'tomato':
      return Target;
    case 'egg':
    case 'rotten_egg':
    case 'putridegg':
      return Egg;
    case 'flame':
      return Flame;
    case 'heart':
      return Heart;
    case 'thumbs_down':
    case 'thumbsdown':
      return ThumbsDown;
    case 'skull':
      return Skull;
    case 'crown':
      return Crown;
    case 'stocks':
      return Lock;
    case 'jester':
    case 'courtjester':
      return Music;
    case 'laugh':
    case 'mock':
    case 'taunt':
    case 'confetti':
      return Smile;
    default:
      return AlertTriangle;
  }
};

// This object maps mockery actions to their icon components for direct usage
export const mockeryActionIcons: Record<string, any> = {
  'tomato': Target,
  'egg': Egg,
  'rotten_egg': Egg,
  'flame': Flame,
  'heart': Heart,
  'thumbs_down': ThumbsDown,
  'thumbsDown': ThumbsDown,
  'skull': Skull,
  'crown': Crown,
  'putridEgg': Egg,
  'stocks': Lock,
  'jester': Music,
  'mock': Smile,
  'laugh': Smile,
  'taunt': Smile,
  'trumpet': Music,
  'confetti': Smile,
  'shame': AlertTriangle,
  'courtJester': Music,
  'smokeBomb': AlertTriangle,
  'protection': Crown,
  'royal_decree': Crown,
  'shame_certificate': AlertTriangle,
  'insult': AlertTriangle,
  'humiliate': AlertTriangle
};
