
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction): string => {
  const icons: Record<MockeryAction, string> = {
    'tomatoes': '🍅',
    'eggs': '🥚',
    'flowers': '🌹',
    'applause': '👏',
    'crown': '👑',
    'jester': '🃏',
    'sword': '⚔️',
    'shield': '🛡️',
    'dragon': '🐉',
    'gold': '💰',
    'scroll': '📜',
    'potion': '🧪',
    'gift': '🎁'
  };
  
  return icons[action] || '❓';
};

// Get mockery action display name
export const getMockeryActionDisplayName = (action: MockeryAction): string => {
  const displayNames: Record<MockeryAction, string> = {
    'tomatoes': 'Throw Tomatoes',
    'eggs': 'Toss Eggs',
    'flowers': 'Shower with Flowers',
    'applause': 'Sarcastic Applause',
    'crown': 'Mock Coronation',
    'jester': 'Jester Hat',
    'sword': 'Challenge to Duel',
    'shield': 'Public Defense',
    'dragon': 'Dragon Flame',
    'gold': 'Gold Shower',
    'scroll': 'Royal Decree',
    'potion': 'Mysterious Potion',
    'gift': 'Surprise Gift'
  };
  
  return displayNames[action] || 'Unknown Action';
};

// Get mockery action tier
export const getMockeryActionTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    'tomatoes': 'common',
    'eggs': 'common',
    'flowers': 'uncommon',
    'applause': 'uncommon',
    'crown': 'epic',
    'jester': 'rare',
    'sword': 'epic',
    'shield': 'rare',
    'dragon': 'legendary',
    'gold': 'epic',
    'scroll': 'rare',
    'potion': 'uncommon',
    'gift': 'rare'
  };
  
  return tiers[action] || 'common';
};

// Get mockery action price based on its tier
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    'tomatoes': 50,
    'eggs': 75,
    'flowers': 100,
    'applause': 100,
    'crown': 500,
    'jester': 250,
    'sword': 450,
    'shield': 300,
    'dragon': 1000,
    'gold': 400,
    'scroll': 250,
    'potion': 150,
    'gift': 200
  };
  
  return prices[action] || 50;
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
