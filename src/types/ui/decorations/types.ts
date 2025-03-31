
import { ReactNode } from 'react';

export type DecorationColor = 'gold' | 'silver' | 'royal' | 'crimson' | 'default';
export type DecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type DecorationPosition = 
  | 'top-left' 
  | 'top-right' 
  | 'bottom-left' 
  | 'bottom-right' 
  | 'center' 
  | 'top-center' 
  | 'bottom-center';

export interface DecorationProps {
  color?: DecorationColor;
  size?: DecorationSize;
  position?: DecorationPosition;
  className?: string;
  animate?: boolean;
}

export const sizeClasses: Record<DecorationSize, string> = {
  'xs': 'w-8 h-8',
  'sm': 'w-12 h-12',
  'md': 'w-16 h-16',
  'lg': 'w-24 h-24',
  'xl': 'w-32 h-32',
  '2xl': 'w-40 h-40'
};

export const getColorClass = (color: DecorationColor = 'default'): string => {
  const colorMap: Record<DecorationColor, string> = {
    'gold': 'text-royal-gold',
    'silver': 'text-gray-300',
    'royal': 'text-royal-purple',
    'crimson': 'text-royal-crimson',
    'default': 'text-gray-400'
  };
  
  return colorMap[color];
};
