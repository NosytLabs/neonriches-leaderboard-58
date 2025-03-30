
import { HTMLAttributes } from 'react';

export type DecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type DecorationColor = 'gold' | 'silver' | 'royal' | 'crimson' | 'default';
export type DecorationType = 'banner' | 'scroll' | 'crown' | 'shield' | 'swords';

export interface BaseDecorationProps extends HTMLAttributes<HTMLDivElement> {
  size?: DecorationSize;
  color?: DecorationColor;
  position?: string;
  type?: string;
  variant?: string;
  animate?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export type MedievalIconColor = 'gold' | 'silver' | 'royal' | 'crimson' | 'default';
export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export const sizeClasses = {
  'xs': 'w-6 h-6',
  'sm': 'w-8 h-8',
  'md': 'w-12 h-12',
  'lg': 'w-16 h-16',
  'xl': 'w-20 h-20',
  '2xl': 'w-24 h-24',
  '3xl': 'w-32 h-32',
  '4xl': 'w-40 h-40'
};

export const toMedievalIconColor = (color: DecorationColor): string => {
  switch (color) {
    case 'gold': return 'text-royal-gold';
    case 'silver': return 'text-gray-300';
    case 'royal': return 'text-royal-purple';
    case 'crimson': return 'text-royal-crimson';
    default: return 'text-white';
  }
};

export const getColorClass = (color: DecorationColor): string => {
  switch (color) {
    case 'gold': return 'text-royal-gold border-royal-gold/50';
    case 'silver': return 'text-gray-300 border-gray-300/50';
    case 'royal': return 'text-royal-purple border-royal-purple/50';
    case 'crimson': return 'text-royal-crimson border-royal-crimson/50';
    default: return 'text-white border-white/50';
  }
};
