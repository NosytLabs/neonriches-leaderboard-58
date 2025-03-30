
import { ReactNode } from 'react';

// Basic decoration types
export type MedievalDecorationType = 
  | 'scroll' 
  | 'shield' 
  | 'crown'
  | 'sword'
  | 'banner'
  | 'crest'
  | 'ornament'
  | 'flourish'
  | 'corners'
  | 'border'
  | 'frame'
  | 'divider'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right';

export type MedievalDecorationColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze'
  | 'crimson'
  | 'royal'
  | 'navy'
  | 'default'
  | 'red'
  | 'green'
  | 'blue'
  | 'purple';

export type MedievalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Base properties for all medieval decorations
export interface BaseDecorationProps {
  size?: MedievalSize;
  color?: MedievalDecorationColor;
  children?: ReactNode;
  className?: string;
  animate?: boolean;
  position?: string;
  container?: boolean;
  border?: boolean;
  icon?: string;
}

// Royal divider specific props
export interface RoyalDividerProps extends BaseDecorationProps {
  variant?: RoyalDividerVariant;
  color?: 'royal' | 'gold' | 'default' | 'crimson' | 'purple';
}

export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'ornate' | 'simple';

// Helper functions for size classes
export const sizeClasses = {
  'xs': 'h-4 w-4',
  'sm': 'h-6 w-6',
  'md': 'h-8 w-8',
  'lg': 'h-12 w-12',
  'xl': 'h-16 w-16',
  '2xl': 'h-24 w-24'
};

// Helper function for color classes
export const getColorClass = (color: MedievalDecorationColor) => {
  switch (color) {
    case 'gold':
      return 'text-royal-gold';
    case 'silver':
      return 'text-gray-300';
    case 'bronze':
      return 'text-amber-600';
    case 'crimson':
      return 'text-royal-crimson';
    case 'royal':
      return 'text-royal-purple';
    case 'navy':
      return 'text-royal-navy';
    case 'red':
      return 'text-red-500';
    case 'green':
      return 'text-green-500';
    case 'blue':
      return 'text-blue-500';
    default:
      return 'text-gray-300';
  }
};

// Medieval icon types
export type MedievalIconName = string;
export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze'
  | 'crimson'
  | 'navy'
  | 'purple'
  | 'emerald'
  | 'royal'
  | 'default'
  | 'red'
  | 'green'
  | 'blue';

export type MedievalIconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | number;

// Helper function to convert colors
export const toMedievalIconColor = (color: MedievalDecorationColor): MedievalIconColor => {
  if (color === 'default') return 'default';
  return color as MedievalIconColor;
};
