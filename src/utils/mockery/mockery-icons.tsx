
import React from 'react';
import { MockeryAction } from '@/types/mockery-types';
import { Egg, Crown, Lock, Target, CircleAlert, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// TomatoIcon component
export const TomatoIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="13" r="8" />
    <path d="M12 5c0-1 1-2 3-2s3 1 3 4c0 1.5-.5 2-1 3" />
    <path d="M8 13c-2.5-2.5-3-5-1-9 4 2 6 4 8 9" />
  </svg>
);

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction): LucideIcon | React.FC<{ className?: string; size?: number }> => {
  const icons: Record<string, LucideIcon | React.FC<{ className?: string; size?: number }>> = {
    'tomatoes': TomatoIcon,
    'eggs': Egg,
    'crown': Crown,
    'stocks': Lock,
    'jester': Target,
    'protection': Shield,
    'shame': Target,
    'target': Target,
    'putridEggs': Egg,
    'silence': Target,
    'courtJester': Target,
    'smokeBomb': Target,
    'immune': Shield,
    'dunce': Target,
    'glitterBomb': Target,
    'royalPie': Target,
    'jokeCrown': Crown,
    'memeFrame': Target,
    'roast': Target,
    'ridicule': Target,
    'humiliate': Target,
    'expose': Target,
    'mock': Target,
    'taunt': Target,
    'guillotine': Target,
    'dungeons': Target,
    'removal': Target,
    'troll': Target,
    'peasant': Target,
    'rat': Target,
    'ghost': Target,
    'skeleton': Target,
    'zombie': Target,
    'witch': Target,
    'monster': Target,
    'dragon': Target,
    'jest': Target,
    'challenge': Target,
    'defeat': Target,
    'laughing': Target
  };
  
  return icons[action] || CircleAlert;
};

// Get color for the mockery action icon
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colors: Record<string, string> = {
    'tomatoes': 'text-red-500',
    'eggs': 'text-yellow-500',
    'crown': 'text-yellow-400',
    'stocks': 'text-gray-500',
    'jester': 'text-purple-500',
    'protection': 'text-green-500',
    'shame': 'text-red-500',
    'target': 'text-blue-500',
    'putridEggs': 'text-yellow-500',
    'silence': 'text-gray-400',
    'courtJester': 'text-purple-500',
    'smokeBomb': 'text-gray-500',
    'immune': 'text-green-500',
    'dunce': 'text-yellow-500',
    'glitterBomb': 'text-yellow-300',
    'royalPie': 'text-amber-500',
    'jokeCrown': 'text-yellow-400',
    'memeFrame': 'text-blue-500',
    'roast': 'text-red-500',
    'ridicule': 'text-orange-500',
    'humiliate': 'text-red-800',
    'expose': 'text-red-400',
    'mock': 'text-red-300',
    'taunt': 'text-red-400',
    'guillotine': 'text-red-700',
    'dungeons': 'text-gray-700',
    'removal': 'text-gray-500',
    'troll': 'text-green-700',
    'peasant': 'text-amber-700',
    'rat': 'text-gray-500',
    'ghost': 'text-white',
    'skeleton': 'text-gray-200',
    'zombie': 'text-green-600',
    'witch': 'text-purple-700',
    'monster': 'text-green-800',
    'dragon': 'text-red-600',
    'jest': 'text-purple-400',
    'challenge': 'text-orange-600',
    'defeat': 'text-gray-400',
    'laughing': 'text-yellow-500'
  };
  
  return colors[action] || 'text-gray-500';
};

// Export aliases for compatibility
export const getMockeryIcon = getMockeryActionIcon;
export const getMockeryIconColor = getMockeryActionIconColor;

export type { LucideIcon };
