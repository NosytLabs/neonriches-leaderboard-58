
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { AlertCircle, Egg, Crown, Award, UserX, CloudOff, Flag, MessageCircle, Laugh, Swords, Shield } from 'lucide-react';

/**
 * Get the appropriate icon for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes': return AlertCircle;
    case 'eggs': return Egg;
    case 'putridEggs': return Egg;
    case 'crown': return Crown;
    case 'stocks': return Award;
    case 'jester': return Award;
    case 'shame': return UserX;
    case 'silence': return UserX;
    case 'courtJester': return Award;
    case 'smokeBomb': return CloudOff;
    case 'protection': return Shield;
    case 'taunt': return MessageCircle;
    case 'mock': return Laugh;
    case 'challenge': return Flag;
    case 'joust': return Swords;
    case 'duel': return Shield;
    default: return AlertCircle;
  }
};

/**
 * Get the tier of a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'crown':
    case 'jester':
      return 'legendary';
    case 'shame':
    case 'courtJester':
    case 'duel':
      return 'epic';
    case 'stocks':
    case 'silence':
    case 'joust':
      return 'rare';
    case 'putridEggs':
    case 'challenge':
    case 'mock':
      return 'uncommon';
    case 'tomatoes':
    case 'eggs':
    case 'smokeBomb':
    case 'protection':
    case 'taunt':
      return 'common';
    default:
      return 'common';
  }
};

/**
 * Get the price of a mockery action
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'crown': return 1000;
    case 'jester': return 800;
    case 'shame': return 500;
    case 'courtJester': return 400;
    case 'stocks': return 300;
    case 'silence': return 250;
    case 'putridEggs': return 150;
    case 'smokeBomb': return 100;
    case 'tomatoes': return 50;
    case 'eggs': return 30;
    case 'protection': return 200;
    case 'taunt': return 75;
    case 'mock': return 100;
    case 'challenge': return 150;
    case 'joust': return 300;
    case 'duel': return 450;
    default: return 50;
  }
};

/**
 * Alias for getMockeryActionPrice to maintain backward compatibility
 */
export const getMockeryCost = getMockeryActionPrice;

/**
 * Get the color of a mockery action icon
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'text-red-500';
    case 'eggs': return 'text-yellow-500';
    case 'putridEggs': return 'text-green-500';
    case 'crown': return 'text-royal-gold';
    case 'stocks': return 'text-amber-600';
    case 'jester': return 'text-purple-500';
    case 'shame': return 'text-royal-crimson';
    case 'silence': return 'text-gray-400';
    case 'courtJester': return 'text-indigo-400';
    case 'smokeBomb': return 'text-gray-600';
    case 'protection': return 'text-green-400';
    case 'taunt': return 'text-orange-500';
    case 'mock': return 'text-blue-500';
    case 'challenge': return 'text-teal-500';
    case 'joust': return 'text-indigo-600';
    case 'duel': return 'text-red-600';
    default: return 'text-gray-400';
  }
};
