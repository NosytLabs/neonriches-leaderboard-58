
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { BadgeDollarSign, Crown, Egg, Mic, Swords, Tractor, User2, ShieldAlert, Laugh } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    'tomatoes': 10,
    'eggs': 15,
    'crown': 30,
    'stocks': 25,
    'jester': 20,
    'putridEggs': 35,
    'silence': 40,
    'courtJester': 50,
    'smokeBomb': 45,
    'shame': 60,
    'protection': 75,
    'challenge': 85,
    'taunt': 30,
    'mock': 20,
    'joust': 100,
    'duel': 150
  };

  return prices[action] || 20;
};

export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    'tomatoes': 'Throw Tomatoes',
    'eggs': 'Throw Eggs',
    'crown': 'Steal Crown',
    'stocks': 'Put in Stocks',
    'jester': 'Jester Hat',
    'putridEggs': 'Putrid Eggs',
    'silence': 'Royal Silence',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'shame': 'Walk of Shame',
    'protection': 'Royal Protection',
    'challenge': 'Royal Challenge',
    'taunt': 'Noble Taunt',
    'mock': 'Public Mockery',
    'joust': 'Royal Joust',
    'duel': 'Noble Duel'
  };

  return names[action] || 'Unknown Mockery';
};

export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    'tomatoes': 'Throw tomatoes at this noble for all to see.',
    'eggs': 'Pelt this user with eggs in public ridicule.',
    'crown': 'Temporarily steal their royal crown.',
    'stocks': 'Place them in the public stocks for 24 hours.',
    'jester': 'Force them to wear a jester hat for 24 hours.',
    'putridEggs': 'Assault their profile with putrid eggs for maximum shame.',
    'silence': 'Prevent them from speaking in public forums for 12 hours.',
    'courtJester': 'Demote them to court jester for 48 hours.',
    'smokeBomb': 'Obscure their profile with smoke for 6 hours.',
    'shame': 'Submit them to a public walk of shame.',
    'protection': 'Protect yourself from mockery for 48 hours.',
    'challenge': 'Challenge to a duel of honor.',
    'taunt': 'Publicly taunt this noble before others.',
    'mock': 'Mock them with satirical commentary.',
    'joust': 'Challenge to a royal joust with high stakes.',
    'duel': 'Issue a formal noble duel for ultimate stakes.'
  };

  return descriptions[action] || 'Unknown mockery action';
};

export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    'tomatoes': 'common',
    'eggs': 'common',
    'mock': 'common',
    'jester': 'uncommon',
    'crown': 'uncommon',
    'taunt': 'uncommon',
    'stocks': 'rare',
    'smokeBomb': 'rare',
    'putridEggs': 'rare',
    'silence': 'epic',
    'courtJester': 'epic',
    'shame': 'legendary',
    'challenge': 'legendary',
    'joust': 'legendary',
    'protection': 'royal',
    'duel': 'royal'
  };

  return tiers[action] || 'common';
};

export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colorClasses: Record<MockeryTier, string> = {
    'common': 'text-gray-300',
    'uncommon': 'text-green-400',
    'rare': 'text-blue-400',
    'epic': 'text-purple-400',
    'legendary': 'text-yellow-400',
    'royal': 'text-royal-gold'
  };

  return colorClasses[tier] || 'text-gray-300';
};

export const getMockeryActionIcon = (action: MockeryAction): LucideIcon => {
  const icons: Record<MockeryAction, LucideIcon> = {
    'tomatoes': Tractor,
    'eggs': Egg,
    'crown': Crown,
    'stocks': ShieldAlert,
    'jester': Laugh,
    'putridEggs': Egg,
    'silence': Mic,
    'courtJester': User2,
    'smokeBomb': ShieldAlert,
    'shame': Laugh,
    'protection': ShieldAlert,
    'challenge': Swords,
    'taunt': Mic,
    'mock': Laugh,
    'joust': Swords,
    'duel': Swords
  };

  return icons[action] || Laugh;
};

export const getMockeryDuration = (action: MockeryAction): number => {
  // Return duration in hours
  const durations: Record<MockeryAction, number> = {
    'tomatoes': 6,
    'eggs': 12,
    'crown': 24,
    'stocks': 24,
    'jester': 24,
    'putridEggs': 36,
    'silence': 12,
    'courtJester': 48,
    'smokeBomb': 6,
    'shame': 72,
    'protection': 48,
    'challenge': 24,
    'taunt': 12,
    'mock': 24,
    'joust': 48,
    'duel': 72
  };

  return durations[action] || 24;
};
