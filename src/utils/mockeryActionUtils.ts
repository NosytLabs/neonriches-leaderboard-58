
import { MockeryAction } from '@/types/mockery-types';
import { Egg, Crown, Target, Music, ThumbsDown, Tomato } from 'lucide-react';

// Map mockery actions to their respective Lucide icons
export const mockeryActionIcons: Record<MockeryAction, any> = {
  'tomatoes': Tomato,
  'eggs': Egg,
  'crown': Crown,
  'stocks': ThumbsDown,
  'jester': Music,
  'shame': ThumbsDown,
  'target': Target,
  'mock': ThumbsDown
};

// Get icon component for a mockery action
export const getMockeryActionIcon = (action: MockeryAction) => {
  return mockeryActionIcons[action] || mockeryActionIcons.mock;
};

// Get display name for a mockery action
export const getMockeryActionName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    'tomatoes': 'Throw Tomatoes',
    'eggs': 'Throw Eggs',
    'crown': 'Steal Crown',
    'stocks': 'Public Stocks',
    'jester': 'Jester Mockery',
    'shame': 'Public Shame',
    'target': 'Mark Target',
    'mock': 'Mock'
  };
  
  return names[action] || 'Unknown Action';
};
