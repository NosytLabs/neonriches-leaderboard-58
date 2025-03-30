
import { Size } from '../../common';
import { ReactNode } from 'react';

export type MedievalIconColor = string;
export type MedievalDecorationColor = string;

/**
 * Size classes for medieval decorations
 */
export const sizeClasses: Record<Size, string> = {
  'xs': 'h-4 w-4',
  'sm': 'h-6 w-6',
  'md': 'h-8 w-8',
  'lg': 'h-12 w-12',
  'xl': 'h-16 w-16',
  '2xl': 'h-24 w-24',
  '3xl': 'h-32 w-32',
  '4xl': 'h-40 w-40'
};

/**
 * Convert a string color to a medieval icon color
 */
export const toMedievalIconColor = (color: string): MedievalIconColor => {
  return color as MedievalIconColor;
};

/**
 * Get CSS color class for a medieval decoration
 */
export const getColorClass = (color: MedievalIconColor): string => {
  switch (color) {
    case 'bronze': return 'text-amber-700';
    case 'silver': return 'text-gray-400';
    case 'gold': return 'text-yellow-500';
    case 'royal': return 'text-royal-gold';
    case 'purple': return 'text-purple-500';
    case 'green': return 'text-green-500';
    case 'red': return 'text-red-500';
    case 'blue': return 'text-blue-500';
    default: return 'text-gray-300';
  }
};

export interface BaseDecorationProps {
  size?: Size;
  color?: MedievalIconColor;
  className?: string;
}

export interface RoyalDecorationProps extends Omit<BaseDecorationProps, 'color'> {
  children?: ReactNode;
  color?: 'royal' | 'gold' | 'default' | 'crimson';
}
