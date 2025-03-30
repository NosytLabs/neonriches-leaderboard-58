
import { ReactNode } from 'react';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type MedievalIconColor = 
  | 'default'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'crimson'
  | 'navy'
  | 'royal'
  | 'purple'
  | 'platinum';

export interface BaseDecorationProps {
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
  animate?: boolean;
  children?: ReactNode;
  glow?: boolean;
  icon?: ReactNode;
  container?: string;
  border?: string;
}

export const sizeClasses: Record<MedievalIconSize, string> = {
  'xs': 'h-4 w-4',
  'sm': 'h-6 w-6',
  'md': 'h-8 w-8',
  'lg': 'h-12 w-12',
  'xl': 'h-16 w-16',
  '2xl': 'h-24 w-24'
};

export const getColorClass = (color: MedievalIconColor): string => {
  switch (color) {
    case 'gold':
      return 'text-royal-gold';
    case 'silver':
      return 'text-gray-300';
    case 'bronze':
      return 'text-amber-600';
    case 'crimson':
      return 'text-royal-crimson';
    case 'navy':
      return 'text-royal-navy';
    case 'royal':
      return 'text-royal-purple';
    case 'purple':
      return 'text-purple-500';
    case 'platinum':
      return 'text-slate-300';
    default:
      return 'text-white';
  }
};

export const toMedievalIconColor = (color: string): MedievalIconColor => {
  switch (color) {
    case 'gold':
    case 'silver':
    case 'bronze':
    case 'crimson':
    case 'navy':
    case 'royal':
    case 'purple':
    case 'platinum':
      return color as MedievalIconColor;
    default:
      return 'default';
  }
};

export type RoyalDividerVariant = 
  | 'line'
  | 'double'
  | 'fancy'
  | 'scroll'
  | 'quill'
  | 'treasure'
  | 'ornate'
  | 'simple';

export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  color?: 'default' | 'royal' | 'crimson' | 'gold' | 'purple';
  width?: 'full' | 'auto';
  className?: string;
  align?: 'left' | 'center' | 'right';
  glow?: boolean;
  animated?: boolean;
  label?: string;
}
