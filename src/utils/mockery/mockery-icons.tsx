
import React from 'react';
import { 
  Egg, 
  Crown, 
  Lock, 
  Target, 
  AlertCircle,
  Bell,
  Ghost,
  VolumeX,
  Smile
} from 'lucide-react';
import { MockeryAction } from '@/types/mockery-types';

// Custom tomato icon component
export const TomatoIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className, 
  size = 24 
}) => (
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
    <circle cx="12" cy="14" r="8" />
    <path d="M12 6v4" />
    <path d="M10 4c0-1.45.44-2 2-2s2 .55 2 2-.44 2-2 2-2-.55-2-2z" />
    <path d="M14.5 14.5c-.5.5-2.5.5-3 0s-.5-2.5 0-3 2.5-.5 3 0 .5 2.5 0 3z" />
  </svg>
);

// Function to get the icon for a mockery action
export function getMockeryActionIcon(action: MockeryAction): React.FC<{ className?: string; size?: number }> {
  switch (action) {
    case 'tomatoes':
      return TomatoIcon;
    case 'eggs':
      return Egg;
    case 'crown':
      return Crown;
    case 'stocks':
      return Lock;
    case 'target':
      return Target;
    case 'shame':
      return AlertCircle;
    case 'challenge':
      return Bell;
    case 'ghost':
      return Ghost;
    case 'silence':
      return VolumeX;
    case 'jester':
    case 'courtJester':
      return Smile;
    case 'protection':
      return Lock;
    default:
      return AlertCircle;
  }
}

// Get mockery action icon color
export function getMockeryActionIconColor(action: MockeryAction): string {
  // Default colors for different mockery actions
  const colors: Record<string, string> = {
    'tomatoes': 'text-red-500',
    'eggs': 'text-yellow-500',
    'crown': 'text-yellow-400',
    'stocks': 'text-gray-500',
    'jester': 'text-purple-500',
    'protection': 'text-green-500',
    'shame': 'text-red-500',
    'target': 'text-red-400',
    'challenge': 'text-orange-400',
    'ghost': 'text-blue-300',
    'putridEggs': 'text-green-400',
    'silence': 'text-gray-400',
    'courtJester': 'text-purple-400',
    'smokeBomb': 'text-gray-500'
  };
  
  return colors[action] || 'text-gray-400';
};
