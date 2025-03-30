
import { CSSProperties } from 'react';

// Define basic types for medieval decorations
export type MedievalDecorationType = 
  'frame' | 
  'border' | 
  'corner' | 
  'divider' | 
  'flourish' | 
  'shield' | 
  'crest' | 
  'seal' | 
  'coat-of-arms' | 
  'banner' |
  'top' |
  'bottom';

export type MedievalDecorationColor = 
  'gold' | 
  'silver' | 
  'bronze' | 
  'crimson' | 
  'navy' | 
  'emerald' | 
  'purple' | 
  'black' | 
  'white' |
  'default' |
  'red' |
  'green' |
  'blue';

export type MedievalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Base properties for all decorations
export interface BaseDecorationProps {
  type?: MedievalDecorationType;
  color?: MedievalDecorationColor;
  size?: MedievalSize;
  className?: string;
  position?: string;
  animate?: boolean;
  icon?: string;
}

// Specific types for different decorations
export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'ornate' | 'simple';

export interface RoyalDividerProps extends BaseDecorationProps {
  variant?: RoyalDividerVariant;
  color?: 'royal' | 'gold' | 'default' | 'crimson' | 'purple';
}

// Utility functions 
export const sizeClasses = {
  xs: 'h-6 w-6',
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
  xl: 'h-24 w-24',
  '2xl': 'h-32 w-32'
};

export const getColorClass = (color: MedievalDecorationColor): string => {
  switch (color) {
    case 'gold': return 'text-royal-gold';
    case 'silver': return 'text-gray-300';
    case 'bronze': return 'text-amber-600';
    case 'crimson': return 'text-royal-crimson';
    case 'navy': return 'text-royal-navy';
    case 'emerald': return 'text-emerald-500';
    case 'purple': return 'text-purple-600';
    case 'black': return 'text-gray-900';
    case 'white': return 'text-white';
    case 'red': return 'text-red-500';
    case 'green': return 'text-green-500';
    case 'blue': return 'text-blue-500';
    default: return 'text-foreground';
  }
};

// Icon color mapping utilities
export type MedievalIconColor = 
  'default' | 
  'primary' | 
  'secondary' | 
  'accent' | 
  'white' | 
  'black' | 
  'gold' | 
  'silver' | 
  'bronze' | 
  'crimson' | 
  'navy' | 
  'emerald' | 
  'purple' |
  'royal' |
  'copper';

export type MedievalIconName = string;
export type MedievalIconSize = MedievalSize;

export const toMedievalIconColor = (color: MedievalDecorationColor): MedievalIconColor => {
  switch (color) {
    case 'gold': return 'gold';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    case 'crimson': return 'crimson';
    case 'navy': return 'navy';
    case 'emerald': return 'emerald';
    case 'purple': return 'purple';
    case 'black': return 'black';
    case 'white': return 'white';
    case 'red': return 'crimson';
    case 'green': return 'emerald';
    case 'blue': return 'navy';
    default: return 'default';
  }
};

// Export everything needed
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
