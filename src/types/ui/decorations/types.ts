
import { ReactNode } from 'react';

export type DecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type DecorationColor = 'gold' | 'royal' | 'crimson' | 'navy' | 'emerald' | 'purple' | 'white' | 'black' | 'default';
export type MedievalIconColor = 'gold' | 'silver' | 'bronze' | 'royal' | 'crimson' | 'navy' | 'emerald' | 'white' | 'black';

export type DecorationType = 
  | 'coat-of-arms' 
  | 'crossed-swords' 
  | 'royal-banner' 
  | 'royal-insignia'
  | 'corner-flourish'
  | 'border-pattern';

export interface DecorationProps {
  size?: DecorationSize;
  color?: DecorationColor;
  className?: string;
  animated?: boolean;
  children?: ReactNode;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  rotation?: number;
  mirror?: boolean;
}

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export interface IconSizeMap {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
  '3xl': number;
  '4xl': number;
}

export const getColorClass = (color: DecorationColor | undefined): string => {
  switch (color) {
    case 'gold': return 'text-royal-gold';
    case 'royal': return 'text-royal-purple';
    case 'crimson': return 'text-royal-crimson';
    case 'navy': return 'text-royal-navy';
    case 'emerald': return 'text-emerald-500';
    case 'purple': return 'text-purple-500';
    case 'white': return 'text-white';
    case 'black': return 'text-black';
    default: return 'text-royal-gold';
  }
};

export const sizeClasses: Record<DecorationSize, string> = {
  'xs': 'w-6 h-6',
  'sm': 'w-8 h-8',
  'md': 'w-12 h-12',
  'lg': 'w-16 h-16',
  'xl': 'w-24 h-24',
  '2xl': 'w-32 h-32',
  '3xl': 'w-48 h-48',
  '4xl': 'w-64 h-64'
};
