
// Define the base types for decoration components
import { ReactNode } from 'react';
import { IconSize, IconColor } from '@/types/ui/icon-types';

export interface BaseDecorationProps {
  color?: IconColor | string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
  animated?: boolean;  // Alternative prop name for animation support
  className?: string;
  icon?: ReactNode;
}

export type DecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const sizeClasses: Record<DecorationSize, string> = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24'
};

export const getColorClass = (color: string): string => {
  switch (color) {
    case 'gold':
      return 'text-royal-gold';
    case 'royal':
      return 'text-royal-purple';
    case 'crimson':
      return 'text-royal-crimson';
    case 'navy':
      return 'text-royal-navy';
    default:
      return 'text-white';
  }
};
