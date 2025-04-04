
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { Crown, Egg, Flame, Heart, Laugh, Shield, Skull, ThumbsDown, Snowflake } from 'lucide-react';

// Define mockery tier badge colors
export const mockeryTierBadgeColors: Record<MockeryTier, string> = {
  basic: 'bg-gray-100 text-gray-800 border-gray-200',
  common: 'bg-green-100 text-green-800 border-green-200',
  uncommon: 'bg-blue-100 text-blue-800 border-blue-200',
  rare: 'bg-purple-100 text-purple-800 border-purple-200',
  epic: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  legendary: 'bg-red-100 text-red-800 border-red-200',
  advanced: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  royal: 'bg-pink-100 text-pink-800 border-pink-200'
};

// Helper function to get mockery icon
export const getMockeryIcon = (action: MockeryAction) => {
  const iconMap = {
    mock: Laugh,
    thumbsDown: ThumbsDown,
    tomato: Flame,
    shame: Snowflake,
    egg: Egg,
    crown: Crown,
    heart: Heart,
    skull: Skull,
    protection: Shield,
    laugh: Laugh,
    thumbs_down: ThumbsDown,
    // Map other actions to appropriate icons
    // Default to Laugh for unknown actions
  };

  return iconMap[action] || Laugh;
};

// Helper function to get mockery color based on tier
export const getMockeryColor = (tier: MockeryTier): string => {
  const colorMap: Record<MockeryTier, string> = {
    basic: '#9CA3AF',
    common: '#10B981',
    uncommon: '#3B82F6',
    rare: '#8B5CF6',
    epic: '#F59E0B',
    legendary: '#EF4444',
    advanced: '#6366F1',
    royal: '#EC4899'
  };

  return colorMap[tier] || colorMap.basic;
};

// Export utility functions
export { getMockeryIcon, getMockeryColor };
