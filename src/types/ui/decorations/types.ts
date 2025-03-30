
// Decoration-related types
import { ReactNode } from 'react';

export type MedievalDecorationType = 
  | 'flourish' 
  | 'crest' 
  | 'banner' 
  | 'seal' 
  | 'scroll' 
  | 'border'
  | 'ribbon'
  | 'frame'
  | 'shield'
  | 'corner'
  | 'divider'
  | 'top'
  | 'bottom';

export type MedievalDecorationColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'red' 
  | 'blue' 
  | 'green'
  | 'purple'
  | 'royal'
  | 'default';

export type MedievalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'red' 
  | 'blue' 
  | 'green'
  | 'purple'
  | 'royal'
  | 'default';

export type MedievalIconName = 
  | 'crown' 
  | 'swords' 
  | 'shield' 
  | 'scroll' 
  | 'goblet'
  | 'coin'
  | 'key'
  | 'castle'
  | 'dragon'
  | 'horse'
  | 'knight'
  | 'queen'
  | 'king';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface BaseDecorationProps {
  size?: MedievalSize;
  color?: MedievalDecorationColor;
  className?: string;
  children?: ReactNode;
}

export interface RoyalDecorationProps extends BaseDecorationProps {
  type?: MedievalDecorationType;
  position?: string;
  animate?: boolean;
  variant?: string;
}

export interface RoyalDividerProps extends BaseDecorationProps {
  style?: 'line' | 'double' | 'fancy';
  color?: 'royal' | 'gold' | 'default' | 'crimson';
}

// Size classes for different element sizes
export const sizeClasses: Record<MedievalSize, string> = {
  'xs': 'h-4 w-4',
  'sm': 'h-6 w-6',
  'md': 'h-8 w-8',
  'lg': 'h-12 w-12',
  'xl': 'h-16 w-16',
  '2xl': 'h-24 w-24'
};

// Utility function to get color class based on medieval color
export const getColorClass = (color: MedievalIconColor): string => {
  switch (color) {
    case 'purple': return 'text-purple-500';
    case 'green': return 'text-green-500';
    case 'red': return 'text-red-500';
    case 'blue': return 'text-blue-500';
    case 'royal': return 'text-royal-gold';
    case 'gold': return 'text-yellow-400';
    case 'silver': return 'text-gray-400';
    case 'bronze': return 'text-amber-700';
    case 'default': return 'text-gray-200';
    default: return 'text-gray-200';
  }
};

// Convert to medieval icon color
export const toMedievalIconColor = (color: string): MedievalIconColor => {
  switch (color) {
    case 'purple': return 'purple';
    case 'green': return 'green';
    case 'red': return 'red';
    case 'blue': return 'blue';
    case 'royal': return 'royal';
    case 'gold': return 'gold';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    default: return 'default';
  }
};

// Export types and utilities
export { 
  MedievalDecorationType, 
  MedievalDecorationColor, 
  MedievalSize,
  sizeClasses,
  getColorClass,
  toMedievalIconColor,
  MedievalIconColor,
  MedievalIconName,
  MedievalIconSize
};
