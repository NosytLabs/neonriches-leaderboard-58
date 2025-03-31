
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { Target, Crown, Egg } from 'lucide-react';

export const getMockeryActionIcon = (action: MockeryAction) => {
  const icons: Record<string, any> = {
    'tomatoes': Target,
    'eggs': Egg,
    'crown': Crown,
    'stocks': Target,
    'jester': Crown,
    'putridEggs': Egg,
    'silence': Target,
    'courtJester': Crown,
    'smokeBomb': Target,
    'shame': Target,
    'protection': Shield
  };
  return icons[action] || Target;
};

export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    'tomatoes': 'common',
    'eggs': 'uncommon',
    'crown': 'legendary',
    'stocks': 'rare',
    'jester': 'uncommon',
    'putridEggs': 'rare',
    'silence': 'epic',
    'courtJester': 'rare',
    'smokeBomb': 'epic',
    'shame': 'common',
    'protection': 'legendary'
  };
  return tiers[action] || 'common';
};

export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colors: Record<MockeryTier, string> = {
    'common': 'text-white',
    'uncommon': 'text-green-400',
    'rare': 'text-blue-400',
    'epic': 'text-purple-400',
    'legendary': 'text-royal-gold'
  };
  return colors[tier] || 'text-white';
};

export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const tier = getMockeryTier(action);
  return getMockeryTierColorClass(tier);
};

// Adding missing Shield import
import { Shield } from 'lucide-react';
