
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { Crown, Egg, Fish, Gift, ThumbsDown, Carrot } from 'lucide-react';

// Map mockery actions to their display names
export const getMockeryName = (action: MockeryAction): string => {
  const mockeryNames: Record<MockeryAction, string> = {
    'eggs': 'Rotten Eggs',
    'fish': 'Stinky Fish',
    'thumbsDown': 'Royal Disapproval',
    'tomatoes': 'Rotten Tomatoes',
    'crown': 'Tilted Crown',
    'gift': 'Dubious Gift',
    'carrot': 'Golden Carrot',
    'putridEggs': 'Putrid Eggs',
    'stocks': 'Public Stocks',
    'jester': 'Jester Mockery',
    'shame': 'Public Shame',
    'silence': 'Royal Silence',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'protection': 'Royal Protection',
    'taunt': 'Royal Taunt',
    'mock': 'Public Mockery',
    'challenge': 'Royal Challenge',
    'joust': 'Royal Joust',
    'duel': 'Royal Duel'
  };
  
  return mockeryNames[action] || 'Unknown Mockery';
};

// Get descriptions for mockery actions
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    'eggs': 'Throw rotten eggs at this user to show your disgust',
    'fish': 'Slap them with a stinky fish from the royal pond',
    'thumbsDown': 'Express your royal disapproval of their spending habits',
    'tomatoes': 'Classic! Throw some rotten tomatoes their way',
    'crown': 'Tilt their crown to show they are unworthy',
    'gift': 'Give them a mysterious gift (it might not be pleasant)',
    'carrot': 'Award them a golden carrot for their ridiculous spending',
    'putridEggs': 'Throw the foulest eggs at your target',
    'stocks': 'Lock someone in the public stocks for all to see',
    'jester': 'Turn someone into the court jester for a day',
    'shame': 'Publicly shame someone for their actions',
    'silence': 'Silence someone from certain channels temporarily',
    'courtJester': 'Make someone the official court jester',
    'smokeBomb': 'Deploy a smoke bomb to disappear from view',
    'protection': 'Grant royal protection against mockery actions',
    'taunt': 'Issue a formal taunt to challenge someone',
    'mock': 'Mock someone with formalized ridicule',
    'challenge': 'Formally challenge someone to a contest',
    'joust': 'Challenge someone to a virtual joust for honor',
    'duel': 'Demand satisfaction through a gentlemanly duel'
  };
  
  return descriptions[action] || 'A mysterious form of mockery';
};

// Get mockery tier (rarity) for each action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    'eggs': 'common',
    'tomatoes': 'common',
    'fish': 'uncommon',
    'thumbsDown': 'uncommon',
    'gift': 'rare',
    'crown': 'epic',
    'carrot': 'legendary',
    'putridEggs': 'uncommon',
    'stocks': 'rare',
    'jester': 'rare',
    'shame': 'epic',
    'silence': 'rare',
    'courtJester': 'epic',
    'smokeBomb': 'uncommon',
    'protection': 'legendary',
    'taunt': 'common',
    'mock': 'common',
    'challenge': 'uncommon',
    'joust': 'epic',
    'duel': 'legendary'
  };
  
  return tiers[action] || 'common';
};

// Get the cost of each mockery action
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    'eggs': 5,
    'tomatoes': 10,
    'fish': 15,
    'thumbsDown': 20,
    'gift': 30,
    'crown': 50,
    'carrot': 100,
    'putridEggs': 20,
    'stocks': 35,
    'jester': 40,
    'shame': 60,
    'silence': 45,
    'courtJester': 55,
    'smokeBomb': 25,
    'protection': 75,
    'taunt': 15,
    'mock': 10,
    'challenge': 30,
    'joust': 50,
    'duel': 80
  };
  
  return costs[action] || 10;
};

// Alias for getMockeryActionPrice for backward compatibility
export const getMockeryCost = getMockeryActionPrice;

// Get icon for each mockery action
export const getMockeryActionIcon = (action: MockeryAction) => {
  const icons: Record<string, any> = {
    'eggs': Egg,
    'fish': Fish, 
    'thumbsDown': ThumbsDown,
    'tomatoes': ThumbsDown, // Using ThumbsDown as placeholder since Tomato isn't available
    'crown': Crown,
    'gift': Gift,
    'carrot': Carrot,
    'putridEggs': Egg,
    'stocks': ThumbsDown,
    'jester': Crown,
    'shame': ThumbsDown,
    'silence': ThumbsDown,
    'courtJester': Crown,
    'smokeBomb': ThumbsDown,
    'protection': Crown,
    'taunt': ThumbsDown,
    'mock': ThumbsDown,
    'challenge': Crown,
    'joust': Crown,
    'duel': Crown
  };
  
  return icons[action] || ThumbsDown;
};

// Get color for each mockery action icon
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colors: Record<MockeryAction, string> = {
    'eggs': 'text-yellow-300',
    'tomatoes': 'text-red-500',
    'fish': 'text-blue-400',
    'thumbsDown': 'text-gray-400',
    'gift': 'text-purple-400',
    'crown': 'text-yellow-400',
    'carrot': 'text-orange-400',
    'putridEggs': 'text-green-500',
    'stocks': 'text-amber-600',
    'jester': 'text-purple-500',
    'shame': 'text-royal-crimson',
    'silence': 'text-gray-400',
    'courtJester': 'text-indigo-400',
    'smokeBomb': 'text-gray-600',
    'protection': 'text-green-400',
    'taunt': 'text-orange-500',
    'mock': 'text-blue-500',
    'challenge': 'text-teal-500',
    'joust': 'text-indigo-600',
    'duel': 'text-red-600'
  };
  
  return colors[action] || 'text-gray-400';
};

// Add the function to get tier color class
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colorClasses: Record<MockeryTier, string> = {
    'common': 'text-gray-300',
    'uncommon': 'text-green-400',
    'rare': 'text-blue-400',
    'epic': 'text-purple-400',
    'legendary': 'text-royal-gold',
    'royal': 'text-royal-gold',
    'basic': 'text-gray-300',
    'premium': 'text-purple-400',
    'silver': 'text-gray-400',
    'bronze': 'text-amber-600'
  };
  
  return colorClasses[tier] || 'text-gray-300';
};
