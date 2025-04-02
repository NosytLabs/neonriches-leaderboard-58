
import { MockeryAction } from '@/types/mockery-types';
import { normalizeMockeryAction } from './mockeryNormalizer';
import {
  Target, Egg, Crown, Lock, MessageSquareOff, Flame,
  ThumbsDown, Heart, Skull, Laugh, Fish, Award, Bell
} from 'lucide-react';

// Available mockery actions for the UI
export const VALID_MOCKERY_ACTIONS: MockeryAction[] = [
  'tomato',
  'egg',
  'rotten_egg',
  'crown',
  'stocks',
  'jester',
  'mock',
  'shame',
  'laugh',
  'fish',
  'protection'
];

// Get display name for mockery action
export const getMockeryActionDisplayName = (action: string): string => {
  const normalizedAction = normalizeMockeryAction(action);
  
  const displayNames: Record<string, string> = {
    'tomato': 'Throw Tomatoes',
    'egg': 'Throw Eggs',
    'rotten_egg': 'Throw Rotten Eggs',
    'crown': 'Crown of Shame',
    'stocks': 'Public Stocks',
    'jester': 'Jester\'s Hat',
    'mock': 'Public Mockery',
    'shame': 'Public Shaming',
    'laugh': 'Public Laughter',
    'fish': 'Fish Slap',
    'protection': 'Royal Protection'
  };
  
  return displayNames[normalizedAction] || 'Unknown Action';
};

// Get icon component for mockery action
export const getMockeryActionIcon = (action: string) => {
  const normalizedAction = normalizeMockeryAction(action);
  
  const icons: Record<string, React.ElementType> = {
    'tomato': Target,
    'egg': Egg,
    'rotten_egg': Egg,
    'crown': Crown,
    'stocks': Lock,
    'jester': Crown,
    'mock': Skull,
    'shame': Bell,
    'laugh': Laugh,
    'fish': Fish,
    'protection': Award
  };
  
  return icons[normalizedAction] || Target;
};

// Get price for mockery action
export const getMockeryActionPrice = (action: string): number => {
  const normalizedAction = normalizeMockeryAction(action);
  
  const prices: Record<string, number> = {
    'tomato': 50,
    'egg': 75,
    'rotten_egg': 100,
    'crown': 200,
    'stocks': 250,
    'jester': 150,
    'mock': 50,
    'shame': 125,
    'laugh': 75,
    'fish': 100,
    'protection': 500
  };
  
  return prices[normalizedAction] || 50;
};

// Group mockery actions by category
export const getMockeryActionsByCategory = () => {
  return {
    'common': ['tomato', 'egg', 'mock', 'laugh'],
    'uncommon': ['rotten_egg', 'fish', 'shame'],
    'rare': ['jester', 'crown'],
    'epic': ['stocks'],
    'legendary': ['protection']
  };
};

export default {
  VALID_MOCKERY_ACTIONS,
  getMockeryActionDisplayName,
  getMockeryActionIcon,
  getMockeryActionPrice,
  getMockeryActionsByCategory
};
