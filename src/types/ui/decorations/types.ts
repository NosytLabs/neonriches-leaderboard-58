
import { CSSProperties } from 'react';

export type DecorationColor = 'default' | 'primary' | 'secondary' | 'accent' | 'royal' | 'gold' | 'silver' | 'bronze' | 'navy';
export type DecorationSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface BaseDecorationProps {
  className?: string;
  style?: CSSProperties;
  color?: DecorationColor;
  size?: DecorationSize;
  animate?: boolean;
  animated?: boolean;
}

export interface BorderPatternProps extends BaseDecorationProps {
  variant?: 'royal' | 'standard' | 'simple';
}

// Common utility functions for decorations
export const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
  xl: 'w-32 h-32',
  '2xl': 'w-48 h-48'
};

export const getColorClass = (color: DecorationColor = 'default'): string => {
  switch (color) {
    case 'primary':
      return 'text-primary';
    case 'secondary':
      return 'text-secondary';
    case 'accent':
      return 'text-accent';
    case 'royal':
      return 'text-royal-gold';
    case 'gold':
      return 'text-yellow-500';
    case 'silver':
      return 'text-gray-300';
    case 'bronze':
      return 'text-amber-700';
    case 'navy':
      return 'text-blue-900';
    default:
      return 'text-foreground';
  }
};
