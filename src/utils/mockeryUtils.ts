
import React from 'react';
import { Egg, Lock, Target, Flame, Crown, User, Volume2, VolumeX, CloudFog, AlertCircle, Shield } from 'lucide-react';
import { MockeryAction, MockeryTier } from '@/types/mockery';
import TomatoIcon from '@/components/icons/TomatoIcon';

// Export TomatoIcon so it's available when importing
export { default as TomatoIcon } from '@/components/icons/TomatoIcon';

/**
 * Get the name of a mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Rotten Tomatoes';
    case 'eggs':
      return 'Egg Barrage';
    case 'putridEggs':
      return 'Putrid Eggs';
    case 'stocks':
      return 'Public Stocks';
    case 'crown':
      return 'Crown Theft';
    case 'jester':
      return 'Jester Humiliation';
    case 'courtJester':
      return 'Court Jester';
    case 'smokeBomb':
      return 'Smoke Bomb';
    case 'silence':
      return 'Royal Silencing';
    case 'shame':
      return 'Walk of Shame';
    case 'protection':
      return 'Royal Protection';
    case 'taunt':
      return 'Royal Taunt';
    case 'mock':
      return 'Public Mockery';
    case 'challenge':
      return 'Challenge';
    case 'joust':
      return 'Joust';
    case 'duel':
      return 'Duel';
    default:
      return 'Unknown Mockery';
  }
};

/**
 * Get the description of a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Throw rotten tomatoes at a noble.';
    case 'eggs':
      return 'Pelt a noble with eggs.';
    case 'putridEggs':
      return 'Throw putrid eggs that leave a lasting stench.';
    case 'crown':
      return 'Temporarily steal a noble\'s crown.';
    case 'stocks':
      return 'Put a noble in the public stocks.';
    case 'jester':
      return 'Force a noble to dress as a jester.';
    case 'courtJester':
      return 'Make the noble your personal court jester.';
    case 'smokeBomb':
      return 'Temporarily obscure a noble\'s profile with smoke.';
    case 'silence':
      return 'Prevent a noble from speaking in public forums.';
    case 'shame':
      return 'Force a noble on a public walk of shame.';
    case 'protection':
      return 'Shield yourself from mockery.';
    case 'taunt':
      return 'Publicly taunt another noble.';
    case 'mock':
      return 'Mock another noble publicly.';
    case 'challenge':
      return 'Challenge a noble to a contest.';
    case 'joust':
      return 'Challenge a noble to a joust.';
    case 'duel':
      return 'Challenge a noble to a duel.';
    default:
      return 'A mysterious form of mockery.';
  }
};

/**
 * Get the tier of a mockery action
 */
export const getMockeryTier = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
    case 'taunt':
    case 'mock':
      return 'Common';
    case 'stocks':
    case 'jester':
    case 'challenge':
    case 'shame':
      return 'Uncommon';
    case 'putridEggs':
    case 'smokeBomb':
    case 'joust':
      return 'Rare';
    case 'courtJester':
    case 'silence':
      return 'Epic';
    case 'crown':
    case 'protection':
    case 'duel':
      return 'Legendary';
    default:
      return 'Common';
  }
};

/**
 * Get the action icon component
 */
export const getMockeryActionIcon = (action: MockeryAction): React.FC<{ className?: string }> => {
  switch (action) {
    case 'tomatoes':
      return TomatoIcon;
    case 'eggs':
    case 'putridEggs':
      return Egg;
    case 'stocks':
      return Lock;
    case 'crown':
      return Crown;
    case 'jester':
    case 'courtJester':
    case 'mock':
      return User;
    case 'smokeBomb':
      return CloudFog;
    case 'silence':
      return VolumeX;
    case 'taunt':
      return Volume2;
    case 'shame':
      return AlertCircle;
    case 'protection':
      return Shield;
    case 'challenge':
      return Flame;
    case 'joust':
    case 'duel':
      return Target;
    default:
      return Target;
  }
};

/**
 * Get the cost of a mockery action
 */
export const getMockeryCost = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 5;
    case 'eggs':
      return 10;
    case 'stocks':
      return 25;
    case 'jester':
      return 15;
    case 'crown':
      return 100;
    case 'putridEggs':
      return 30;
    case 'silence':
      return 75;
    case 'courtJester':
      return 50;
    case 'smokeBomb':
      return 20;
    case 'shame':
      return 15;
    case 'protection':
      return 150;
    case 'taunt':
      return 5;
    case 'mock':
      return 10;
    case 'challenge':
      return 25;
    case 'joust':
      return 75;
    case 'duel':
      return 150;
    default:
      return 10;
  }
};

/**
 * Get the CSS color class for a mockery tier
 */
export const getMockeryTierColorClass = (tier: string): string => {
  switch (tier) {
    case 'Common':
      return 'text-gray-400 border-gray-400';
    case 'Uncommon':
      return 'text-green-400 border-green-400';
    case 'Rare':
      return 'text-blue-400 border-blue-400';
    case 'Epic':
      return 'text-purple-400 border-purple-400';
    case 'Legendary':
      return 'text-royal-gold border-royal-gold';
    default:
      return 'text-gray-400 border-gray-400';
  }
};

/**
 * Get the color for a mockery action icon
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return '#EF4444';
    case 'eggs':
      return '#F59E0B';
    case 'putridEggs':
      return '#10B981';
    case 'stocks':
      return '#6B7280';
    case 'crown':
      return '#D4AF37';
    case 'jester':
      return '#8B5CF6';
    case 'courtJester':
      return '#EC4899';
    case 'smokeBomb':
      return '#9CA3AF';
    case 'silence':
      return '#3B82F6';
    case 'shame':
      return '#EF4444';
    case 'protection':
      return '#10B981';
    case 'taunt':
      return '#F59E0B';
    case 'mock':
      return '#14B8A6';
    case 'challenge':
      return '#F97316';
    case 'joust':
      return '#6366F1';
    case 'duel':
      return '#DC2626';
    default:
      return '#6B7280';
  }
};
