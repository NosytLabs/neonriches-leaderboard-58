
import React from 'react';
import { MockeryAction } from '@/types/mockery-types';
import { Egg, Crown, Lock, Target, CircleAlert } from 'lucide-react';
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
    'protection': Target,
    'shame': Target
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
    'shame': 'text-red-500'
  };
  
  return colors[action] || 'text-gray-500';
};

// Export aliases for compatibility
export const getMockeryIcon = getMockeryActionIcon;
export const getMockeryIconColor = getMockeryActionIconColor;

export type { LucideIcon };
