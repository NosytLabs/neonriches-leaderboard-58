
import { ReactNode } from 'react';
import { Size, MedievalColor } from '@/types/common';

export type DecorationSize = Size;
export type DecorationColor = 'gold' | 'silver' | 'crimson' | 'emerald' | 'royal' | 'default';
export type MedievalIconSize = Size;
export type MedievalIconColor = MedievalColor;

export interface DecorationProps {
  size?: DecorationSize;
  color?: DecorationColor;
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  children?: ReactNode;
  animated?: boolean;
  animate?: boolean;
}

// Alias for backward compatibility
export type BaseDecorationProps = DecorationProps;

export type DecorationType = 
  | 'royal-insignia'
  | 'corner-flourish'
  | 'coat-of-arms'
  | 'crossed-swords'
  | 'royal-banner'
  | 'border-pattern';

// Helper functions for decoration components
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

export const getColorClass = (color: DecorationColor): string => {
  const colorClasses: Record<DecorationColor, string> = {
    'gold': 'text-royal-gold',
    'silver': 'text-gray-300',
    'crimson': 'text-royal-crimson',
    'emerald': 'text-emerald-500',
    'royal': 'text-purple-500',
    'default': 'text-white'
  };
  return colorClasses[color] || colorClasses.default;
};

export const toMedievalIconColor = (color: DecorationColor): MedievalIconColor => {
  if (color === 'default') return 'gold';
  return color as MedievalIconColor;
};
