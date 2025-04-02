
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { Target, Crown, Egg, AlertCircle, UserX, VolumeX, CloudFog, Users, MessageCircle, Shield } from 'lucide-react';
import TomatoIcon from '@/components/icons/TomatoIcon';

// Helper function to get mockery action name
export const getMockeryName = (action: MockeryAction): string => {
  const actionNames: Record<MockeryAction, string> = {
    'tomato': 'Rotten Tomatoes',
    'egg': 'Egg Barrage',
    'putridEgg': 'Putrid Eggs',
    'stocks': 'Public Stocks',
    'crown': 'Crown Theft',
    'jester': 'Jester Humiliation',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'silence': 'Royal Silencing',
    'shame': 'Walk of Shame',
    'protection': 'Royal Protection',
    'taunt': 'Royal Taunt',
    'mock': 'Public Mockery',
    'challenge': 'Challenge',
    'joust': 'Joust',
    'duel': 'Duel',
    'thumbsDown': 'Thumbs Down'
  };
  
  return actionNames[action as MockeryAction] || 'Unknown Mockery';
};

// Helper function to get mockery description
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    'tomato': 'Throw rotten tomatoes at a noble.',
    'egg': 'Pelt a noble with eggs.',
    'putridEgg': 'Throw putrid eggs that leave a lasting stench.',
    'crown': 'Temporarily steal a noble\'s crown.',
    'stocks': 'Put a noble in the public stocks.',
    'jester': 'Force a noble to dress as a jester.',
    'courtJester': 'Make the noble your personal court jester.',
    'smokeBomb': 'Temporarily obscure a noble\'s profile with smoke.',
    'silence': 'Prevent a noble from speaking in public forums.',
    'shame': 'Force a noble on a public walk of shame.',
    'protection': 'Shield yourself from mockery.',
    'taunt': 'Publicly taunt another noble.',
    'mock': 'Mock another noble publicly.',
    'challenge': 'Challenge a noble to a contest.',
    'joust': 'Challenge a noble to a joust.',
    'duel': 'Challenge a noble to a duel.',
    'thumbsDown': 'Express your disapproval of a noble.'
  };
  
  return descriptions[action as MockeryAction] || 'A mysterious form of mockery.';
};

// Helper function to get mockery action price
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    'tomato': 50,
    'egg': 75,
    'putridEgg': 100,
    'stocks': 150,
    'crown': 200,
    'jester': 125,
    'courtJester': 300,
    'smokeBomb': 175,
    'silence': 250,
    'shame': 100,
    'protection': 300,
    'taunt': 50,
    'mock': 75,
    'challenge': 100,
    'joust': 200,
    'duel': 250,
    'thumbsDown': 25
  };
  
  return prices[action as MockeryAction] || 100;
};

// Legacy alias for getMockeryActionPrice for backward compatibility
export const getMockeryCost = getMockeryActionPrice;

// Helper function to get mockery tier
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    'tomato': 'common',
    'egg': 'common',
    'putridEgg': 'uncommon',
    'stocks': 'rare',
    'crown': 'epic',
    'jester': 'uncommon',
    'courtJester': 'legendary',
    'smokeBomb': 'rare',
    'silence': 'epic',
    'shame': 'uncommon',
    'protection': 'legendary',
    'taunt': 'common',
    'mock': 'common',
    'challenge': 'uncommon',
    'joust': 'rare',
    'duel': 'epic',
    'thumbsDown': 'common'
  };
  
  return tiers[action as MockeryAction] || 'common';
};

// Helper function to get mockery tier color class
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const tierColors: Record<MockeryTier, string> = {
    'common': 'text-gray-300',
    'uncommon': 'text-green-400',
    'rare': 'text-blue-400',
    'epic': 'text-purple-400',
    'legendary': 'text-orange-400',
    'royal': 'text-royal-gold',
    'basic': 'text-white',
    'premium': 'text-yellow-300',
    'silver': 'text-gray-300',
    'bronze': 'text-amber-600',
    'standard': 'text-white'
  };
  
  return tierColors[tier] || 'text-white';
};

// Helper function to get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction) => {
  const icons: Record<MockeryAction, any> = {
    'tomato': TomatoIcon,
    'egg': Egg,
    'putridEgg': Egg,
    'stocks': AlertCircle,
    'crown': Crown,
    'jester': Users,
    'courtJester': Users,
    'smokeBomb': CloudFog,
    'silence': VolumeX,
    'shame': UserX,
    'protection': Shield,
    'taunt': MessageCircle,
    'mock': UserX,
    'challenge': Target,
    'joust': Target,
    'duel': Target,
    'thumbsDown': UserX
  };
  
  return icons[action as MockeryAction] || Target;
};

// Helper function to get mockery action icon color
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colors: Record<MockeryAction, string> = {
    'tomato': '#e53e3e',
    'egg': '#f6e05e',
    'putridEgg': '#68d391',
    'stocks': '#a0aec0',
    'crown': '#f6ad55',
    'jester': '#9f7aea',
    'courtJester': '#ed64a6',
    'smokeBomb': '#718096',
    'silence': '#4299e1',
    'shame': '#f56565',
    'protection': '#48bb78',
    'taunt': '#ecc94b',
    'mock': '#38b2ac',
    'challenge': '#f56565',
    'joust': '#805ad5',
    'duel': '#e53e3e',
    'thumbsDown': '#a0aec0'
  };
  
  return colors[action as MockeryAction] || '#a0aec0';
};
