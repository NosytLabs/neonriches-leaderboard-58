
import { AlertTriangle, Crown, Egg, ThumbsDown, Target, UserX, Trash2 } from 'lucide-react';
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

// Mockery action tier labels
export const mockeryTierLabel: Record<MockeryTier, string> = {
  'common': 'Common',
  'uncommon': 'Uncommon',
  'rare': 'Rare',
  'epic': 'Epic',
  'legendary': 'Legendary'
};

// Mockery action display names
export const mockeryActionDisplayNames: Record<MockeryAction, string> = {
  'tomato': 'Throw Tomato',
  'egg': 'Throw Egg',
  'putridEgg': 'Throw Putrid Egg',
  'crown': 'Mock Crown',
  'thumbsDown': 'Thumbs Down',
  'mock': 'Public Mockery',
  'stocks': 'Put in Stocks',
  'jester': 'Make Jester',
  'taunt': 'Royal Taunt'
};

// Mockery action icons mapping
export const mockeryActionIcons: Record<MockeryAction, any> = {
  'tomato': Target,
  'egg': Egg,
  'putridEgg': Trash2,
  'crown': Crown,
  'thumbsDown': ThumbsDown,
  'mock': UserX,
  'stocks': AlertTriangle,
  'jester': Crown,
  'taunt': AlertTriangle
};

// Helper functions
export const getMockeryActionDisplayName = (action: MockeryAction): string => {
  return mockeryActionDisplayNames[action] || action;
};

export const getMockeryActionIcon = (action: MockeryAction) => {
  return mockeryActionIcons[action] || AlertTriangle;
};

export const getMockeryActionIconClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomato': return 'text-red-500';
    case 'egg': return 'text-yellow-500';
    case 'putridEgg': return 'text-green-500';
    case 'crown': return 'text-purple-500';
    case 'thumbsDown': return 'text-blue-500';
    case 'mock': return 'text-orange-500';
    case 'stocks': return 'text-indigo-500';
    case 'jester': return 'text-pink-500';
    case 'taunt': return 'text-teal-500';
    default: return 'text-gray-500';
  }
};

export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomato': return 10;
    case 'egg': return 25;
    case 'putridEgg': return 50;
    case 'crown': return 100;
    case 'thumbsDown': return 5;
    case 'mock': return 15;
    case 'stocks': return 75;
    case 'jester': return 35;
    case 'taunt': return 20;
    default: return 10;
  }
};

export default {
  mockeryTierLabel,
  mockeryActionDisplayNames,
  mockeryActionIcons,
  getMockeryActionDisplayName,
  getMockeryActionIcon,
  getMockeryActionIconClass,
  getMockeryActionPrice
};
