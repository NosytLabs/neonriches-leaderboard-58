
import { MockeryAction, MockeryTier, TeamColor } from '@/types/mockery';
import TomatoIcon from '@/components/icons/TomatoIcon';
import { Egg, Lock, Target, Flame, Crown, User, Volume2, VolumeX, CloudFog, AlertCircle, Shield } from 'lucide-react';

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
 * Get the price for a mockery action
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 5;
    case 'eggs':
      return 10;
    case 'stocks':
      return 20;
    case 'crown':
      return 100;
    case 'jester':
      return 15;
    case 'putridEggs':
      return 25;
    case 'silence':
      return 30;
    case 'courtJester':
      return 50;
    case 'smokeBomb':
      return 15;
    case 'shame':
      return 10;
    case 'protection':
      return 75;
    case 'taunt':
      return 5;
    case 'mock':
      return 10;
    case 'challenge':
      return 20;
    case 'joust':
      return 30;
    case 'duel':
      return 50;
    default:
      return 5;
  }
};

/**
 * Get the discounted price for a mockery action
 */
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const regularPrice = getMockeryActionPrice(action);
  return Math.floor(regularPrice * 0.5);
};

/**
 * Check if the action has a weekly discount
 */
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return action === getWeeklyDiscountedAction();
};

/**
 * Get the action that is discounted this week
 */
export const getWeeklyDiscountedAction = (): MockeryAction => {
  return 'stocks';
};

/**
 * Get the tier of a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
    case 'jester':
    case 'taunt':
    case 'mock':
      return 'common';
    case 'stocks':
    case 'shame':
    case 'smokeBomb':
    case 'challenge':
      return 'uncommon';
    case 'putridEggs':
    case 'silence':
    case 'courtJester':
    case 'joust':
      return 'rare';
    case 'crown':
    case 'protection':
    case 'duel':
      return 'legendary';
    default:
      return 'common';
  }
};

/**
 * Get the cost of a mockery action (alias for getMockeryActionPrice)
 */
export const getMockeryCost = getMockeryActionPrice;

/**
 * Get icon for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return { icon: TomatoIcon, color: 'text-red-500' };
    case 'eggs':
      return { icon: Egg, color: 'text-amber-300' };
    case 'stocks':
      return { icon: Lock, color: 'text-slate-400' };
    case 'crown':
      return { icon: Crown, color: 'text-royal-gold' };
    case 'jester':
      return { icon: User, color: 'text-purple-400' };
    case 'putridEggs':
      return { icon: Egg, color: 'text-green-400' };
    case 'silence':
      return { icon: VolumeX, color: 'text-blue-400' };
    case 'courtJester':
      return { icon: User, color: 'text-pink-400' };
    case 'smokeBomb':
      return { icon: CloudFog, color: 'text-gray-400' };
    case 'shame':
      return { icon: AlertCircle, color: 'text-red-400' };
    case 'protection':
      return { icon: Shield, color: 'text-emerald-400' };
    case 'taunt':
      return { icon: Volume2, color: 'text-yellow-400' };
    case 'mock':
      return { icon: User, color: 'text-teal-400' };
    case 'challenge':
      return { icon: Flame, color: 'text-orange-400' };
    case 'joust':
      return { icon: Target, color: 'text-indigo-400' };
    case 'duel':
      return { icon: Target, color: 'text-red-600' };
    default:
      return { icon: Target, color: 'text-gray-400' };
  }
};

export default {
  getMockeryName,
  getMockeryActionIcon,
  getMockeryActionPrice,
  getMockeryTier,
  getMockeryCost,
  getDiscountedShamePrice,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction
};
