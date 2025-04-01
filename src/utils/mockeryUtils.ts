
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
    'carrot': 'Golden Carrot'
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
    'carrot': 'Award them a golden carrot for their ridiculous spending'
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
    'carrot': 'legendary'
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
    'carrot': 100
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
    'carrot': Carrot
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
    'carrot': 'text-orange-400'
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
    'legendary': 'text-royal-gold'
  };
  
  return colorClasses[tier] || 'text-gray-300';
};
