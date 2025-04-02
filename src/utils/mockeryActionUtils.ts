
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { Box, Egg, ThumbsDown, Crown, Lock, CircleDashed, Laugh, MessageSquare, Flame, Skull, Heart } from 'lucide-react';

// Map mockery tiers to display strings
export const mockeryTierLabels: Partial<Record<MockeryTier, string>> = {
  common: 'Common',
  uncommon: 'Uncommon',
  rare: 'Rare',
  epic: 'Epic',
  legendary: 'Legendary',
  royal: 'Royal',
  basic: 'Basic',
  premium: 'Premium',
  silver: 'Silver',
  gold: 'Gold'
};

// Map mockery actions to display names
export const mockeryActionNames: Partial<Record<MockeryAction, string>> = {
  tomato: 'Rotten Tomato',
  egg: 'Egg Splat',
  putridEgg: 'Putrid Egg',
  crown: 'Topple Crown',
  thumbsDown: 'Royal Disapproval',
  mock: 'Public Mockery',
  stocks: 'In the Stocks',
  jester: 'Court Jester',
  courtJester: 'Court Jester',
  silence: 'Royal Silence',
  taunt: 'Royal Taunt',
  smokeBomb: 'Smoke Bomb',
  protection: 'Royal Protection',
  shame: 'Public Shaming',
  challenge: 'Royal Challenge',
  joust: 'Royal Joust',
  duel: 'Royal Duel',
  royal_decree: 'Royal Decree',
  flame: 'Flame',
  heart: 'Heart',
  skull: 'Skull',
  thumbs_down: 'Thumbs Down',
  rotten_egg: 'Rotten Egg'
};

// Map mockery actions to icon components
export const mockeryActionIcons: Partial<Record<MockeryAction, any>> = {
  tomato: Box,
  egg: Egg,
  putridEgg: Egg,
  crown: Crown,
  thumbsDown: ThumbsDown,
  mock: MessageSquare,
  stocks: Lock,
  jester: Laugh,
  courtJester: Laugh,
  silence: CircleDashed,
  taunt: MessageSquare,
  smokeBomb: Box,
  protection: Crown,
  shame: ThumbsDown,
  challenge: Flame,
  joust: Box,
  duel: Box,
  royal_decree: Crown,
  flame: Flame,
  heart: Heart,
  skull: Skull,
  thumbs_down: ThumbsDown,
  rotten_egg: Egg
};

// Helper to get the appropriate icon for a mockery action
export const getMockeryActionIcon = (action: MockeryAction): any => {
  return mockeryActionIcons[action] || Box;
};

// Helper to get the display name for a mockery action
export const getMockeryActionDisplayName = (action: MockeryAction): string => {
  return mockeryActionNames[action] || 'Unknown Action';
};

// Helper to get the color for a mockery action icon
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  switch (action) {
    case 'tomato':
      return 'text-red-500';
    case 'egg':
    case 'putridEgg':
    case 'rotten_egg':
      return 'text-yellow-200';
    case 'crown':
    case 'royal_decree':
      return 'text-royal-gold';
    case 'jester':
    case 'courtJester':
      return 'text-purple-400';
    case 'thumbsDown':
    case 'thumbs_down':
    case 'shame':
      return 'text-red-400';
    case 'protection':
      return 'text-blue-300';
    case 'silence':
      return 'text-gray-400';
    case 'flame':
      return 'text-orange-500';
    case 'heart':
      return 'text-pink-500';
    case 'skull':
      return 'text-gray-200';
    default:
      return 'text-white';
  }
};
