
import { AlertTriangle, Crown, Egg, ThumbsDown, Target, UserX, Trash2 } from 'lucide-react';
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

// Map mockery actions to their display names
export const mockeryNames: Record<string, string> = {
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

// Map mockery actions to their costs
export const mockeryCosts: Record<string, number> = {
  'tomato': 10,
  'egg': 25,
  'putridEgg': 50,
  'crown': 100,
  'thumbsDown': 5,
  'mock': 15,
  'stocks': 75,
  'jester': 35,
  'taunt': 20
};

// Map mockery actions to their descriptions
export const mockeryDescriptions: Record<string, string> = {
  'tomato': 'Throw a tomato at this user, marking them with a tomato for 24 hours.',
  'egg': 'Throw an egg at this user, marking them with an egg for 48 hours.',
  'putridEgg': 'Throw a putrid egg at this user, marking them with a putrid egg for 72 hours.',
  'crown': 'Give this user a mockery crown, making them look ridiculous for a week.',
  'thumbsDown': 'Show your disapproval of this user with a thumbs down.',
  'mock': 'Publicly mock this user, sending a message to the kingdom.',
  'stocks': 'Put this user in the stocks for 24 hours.',
  'jester': 'Force this user to wear a jester\'s hat for 3 days.',
  'taunt': 'Taunt this user with a royal message.'
};

// Map mockery actions to their tiers
export const mockeryTiers: Record<string, MockeryTier> = {
  'tomato': 'common',
  'egg': 'uncommon',
  'putridEgg': 'rare',
  'crown': 'epic',
  'thumbsDown': 'common',
  'mock': 'uncommon',
  'stocks': 'rare',
  'jester': 'uncommon',
  'taunt': 'common'
};

// Returns the icon component for a mockery action
export const getMockeryActionIconComponent = (action: MockeryAction) => {
  switch (action) {
    case 'tomato': return Target;
    case 'egg': return Egg;
    case 'putridEgg': return Trash2;
    case 'crown': return Crown;
    case 'thumbsDown': return ThumbsDown;
    case 'mock': return UserX;
    case 'stocks': return AlertTriangle;
    case 'jester': return Crown;
    case 'taunt': return AlertTriangle;
    default: return AlertTriangle;
  }
};

// Get the color for a mockery action icon
export const getMockeryActionIconColor = (action: MockeryAction): string => {
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

// Helper functions
export const getMockeryName = (action: MockeryAction): string => {
  return mockeryNames[action] || action;
};

export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  return mockeryTiers[action] || 'common';
};

export const getMockeryCost = (action: MockeryAction): number => {
  return mockeryCosts[action] || 10;
};

export const getMockeryDescription = (action: MockeryAction): string => {
  return mockeryDescriptions[action] || 'Mock this user';
};

export const getMockeryActionIcon = (action: MockeryAction) => {
  return getMockeryActionIconComponent(action);
};

export default {
  mockeryNames,
  mockeryCosts,
  mockeryDescriptions,
  mockeryTiers,
  getMockeryName,
  getMockeryTier,
  getMockeryCost,
  getMockeryDescription,
  getMockeryActionIcon,
  getMockeryActionIconColor
};
