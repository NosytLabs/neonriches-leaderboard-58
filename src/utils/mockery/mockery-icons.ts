
import React from 'react';
import { Target, Shield, Bomb, Crown, AlertCircle, Feather, Skull, ThumbsDown, LucideProps } from 'lucide-react';
import { MockeryAction } from '@/types/mockery';

type IconComponent = React.ComponentType<LucideProps>;

// Export utility function to get mockery action icon component
export const getMockeryIcon = (action: MockeryAction): IconComponent => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
    case 'putridEggs':
      return Target;
    case 'stocks':
    case 'dunce':
    case 'silence':
      return AlertCircle;
    case 'courtJester':
    case 'jest':
      return Feather;
    case 'smokeBomb':
    case 'glitterBomb':
      return Bomb;
    case 'protection':
    case 'immune':
      return Shield;
    case 'guillotine':
    case 'dungeons':
      return Skull;
    case 'crown':
    case 'target':
    case 'challenge':
      return Crown;
    default:
      return ThumbsDown;
  }
};

// Export utility function to get mockery action icon color
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  if (action === 'shame' || action === 'tomatoes') {
    return "text-red-500";
  }
  else if (action === 'taunt' || action === 'eggs') {
    return "text-yellow-500";
  }
  else if (action === 'ridicule' || action === 'putridEggs') {
    return "text-orange-500";
  }
  else if (action === 'jester' || action === 'courtJester') {
    return "text-purple-500";
  }
  else if (action === 'mock' || action === 'dunce') {
    return "text-blue-500";
  }
  else if (action === 'humiliate' || action === 'silence') {
    return "text-indigo-500";
  }
  else if (action === 'expose' || action === 'glitterBomb') {
    return "text-pink-500";
  }
  else if (action === 'guillotine' || action === 'smokeBomb') {
    return "text-stone-500";
  }
  else if (action === 'dungeons' || action === 'defeat') {
    return "text-slate-500";
  }
  else if (action === 'removal' || action === 'challenge') {
    return "text-amber-500";
  }
  else if (action === 'roast') {
    return "text-rose-500";
  }
  else if (action === 'royalPie') {
    return "text-royal-crimson";
  }
  else if (action === 'jokeCrown') {
    return "text-royal-gold";
  }
  else if (action === 'memeFrame') {
    return "text-royal-purple";
  }
  else {
    return "text-gray-500";
  }
};

export const getMockeryActionIcon = (action: MockeryAction): IconComponent => {
  // Reusing the getMockeryIcon function for now, but can be extended
  return getMockeryIcon(action);
};
