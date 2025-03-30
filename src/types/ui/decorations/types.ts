
import { ReactNode } from 'react';
import { MedievalIconColor } from '@/types/ui/icon-types';

export type MedievalDecorationColor = string;

export interface BaseDecorationProps {
  size?: number | string;
  color?: MedievalDecorationColor;
  className?: string;
  children?: ReactNode;
}

export interface RoyalDividerProps extends Omit<BaseDecorationProps, 'color'> {
  label?: string;
  variant?: 'line' | 'double' | 'fancy';
  color?: 'royal' | 'gold' | 'default' | 'crimson';
}

export const sizeClasses = {
  xs: 'h-2 w-2',
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
  '2xl': 'h-12 w-12',
  '3xl': 'h-16 w-16',
  '4xl': 'h-20 w-20',
};

export const getColorClass = (color: MedievalIconColor | string): string => {
  switch (color) {
    case 'bronze': return 'text-amber-600';
    case 'purple': return 'text-purple-500';
    case 'green': return 'text-emerald-500';
    case 'red': return 'text-red-500';
    case 'blue': return 'text-blue-500';
    case 'royal': return 'text-royal-purple';
    default: return 'text-royal-gold';
  }
};

export const toMedievalIconColor = (color: string): MedievalIconColor => {
  switch (color) {
    case 'bronze': return 'bronze';
    case 'purple': return 'purple';
    case 'green': return 'green';
    case 'red': return 'red';
    case 'blue': return 'blue';
    case 'royal': return 'royal';
    default: return 'default';
  }
};

export type RoyalDecorationProps = BaseDecorationProps;
