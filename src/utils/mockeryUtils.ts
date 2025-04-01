
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { UserTier } from '@/types/user';
import { Icon } from 'lucide-react';
import { 
  Target, 
  Crown, 
  Egg, 
  MessageSquare, 
  Shield, 
  AlertTriangle, 
  Feather,
  Tomato,
  Zap,
  User,
  Trash
} from 'lucide-react';

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction): typeof Icon => {
  const icons: Record<string, typeof Icon> = {
    'tomatoes': Tomato,
    'eggs': Egg,
    'crown': Crown,
    'stocks': AlertTriangle,
    'jester': Feather,
    'shame': Target,
    'silence': MessageSquare,
    'protection': Shield,
    'taunt': MessageSquare,
    'mock': User,
    'challenge': Zap,
    'joust': Zap,
    'duel': Zap,
    'courtJester': Feather,
    'smokeBomb': Trash
  };
  
  return icons[action] || Target;
};

// Get mockery action display name
export const getMockeryName = (action: MockeryAction): string => {
  const displayNames: Record<string, string> = {
    'tomatoes': 'Throw Tomatoes',
    'eggs': 'Toss Eggs',
    'flowers': 'Shower with Flowers',
    'crown': 'Mock Coronation',
    'stocks': 'Public Stocks',
    'jester': 'Jester Hat',
    'shame': 'Public Shame',
    'silence': 'Royal Silence',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'protection': 'Royal Protection',
    'taunt': 'Royal Taunt',
    'mock': 'Royal Mockery',
    'challenge': 'Royal Challenge',
    'joust': 'Royal Joust',
    'duel': 'Royal Duel'
  };
  
  return displayNames[action] || 'Unknown Action';
};

// Get mockery action description
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<string, string> = {
    'tomatoes': 'Throw tomatoes at this user as a sign of mockery.',
    'eggs': 'Toss eggs at this user in public view.',
    'flowers': 'Ironically shower with flowers as mock celebration.',
    'crown': 'Place a mock crown on their head.',
    'stocks': 'Place this user in the public stocks for all to see.',
    'jester': 'Force them to wear a jester hat for 24 hours.',
    'shame': 'Publicly shame this user in the town square.',
    'silence': 'Prevent this user from sending messages for 1 hour.',
    'courtJester': 'Appoint them as the court jester for a day.',
    'smokeBomb': 'Disappear their profile in a cloud of smoke.',
    'protection': 'Shield yourself from mockery for 48 hours.',
    'taunt': 'Taunt this user with a royal message.',
    'mock': 'Mock this user with royal disdain.',
    'challenge': 'Challenge this user to a royal contest.',
    'joust': 'Challenge this user to a royal joust.',
    'duel': 'Challenge this user to a royal duel.'
  };
  
  return descriptions[action] || 'A mysterious royal mockery.';
};

// Get mockery action tier
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<string, MockeryTier> = {
    'tomatoes': 'common',
    'eggs': 'common',
    'flowers': 'uncommon',
    'crown': 'epic',
    'stocks': 'rare',
    'jester': 'rare',
    'shame': 'epic',
    'silence': 'legendary',
    'courtJester': 'legendary',
    'smokeBomb': 'epic',
    'protection': 'legendary',
    'taunt': 'uncommon',
    'mock': 'common',
    'challenge': 'rare',
    'joust': 'epic',
    'duel': 'legendary'
  };
  
  return tiers[action] || 'common';
};

// Get mockery action price based on its tier
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<string, number> = {
    'tomatoes': 50,
    'eggs': 75,
    'flowers': 100,
    'crown': 500,
    'stocks': 250,
    'jester': 250,
    'shame': 400,
    'silence': 1000,
    'courtJester': 750,
    'smokeBomb': 500,
    'protection': 400,
    'taunt': 150,
    'mock': 100,
    'challenge': 300,
    'joust': 500,
    'duel': 1000
  };
  
  return prices[action] || 50;
};

// Alias for compatibility
export const getMockeryCost = getMockeryActionPrice;

// Get color for mockery action icon
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colors: Record<string, string> = {
    'tomatoes': '#e53e3e',
    'eggs': '#ecc94b',
    'flowers': '#38a169',
    'crown': '#d69e2e',
    'stocks': '#718096',
    'jester': '#9f7aea',
    'shame': '#e53e3e',
    'silence': '#2b6cb0',
    'courtJester': '#9f7aea',
    'smokeBomb': '#718096',
    'protection': '#2b6cb0',
    'taunt': '#e53e3e',
    'mock': '#718096',
    'challenge': '#d69e2e',
    'joust': '#d69e2e',
    'duel': '#9f7aea'
  };
  
  return colors[action] || '#718096';
};

// Get color class for mockery tier
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colorClasses: Record<MockeryTier, string> = {
    'common': 'text-gray-300',
    'uncommon': 'text-green-400',
    'rare': 'text-blue-400',
    'epic': 'text-purple-400',
    'legendary': 'text-orange-400'
  };
  
  return colorClasses[tier] || 'text-gray-300';
};

// Export getShameActionPrice for compatibility with shameUtils
export const getShameActionPrice = getMockeryActionPrice;
