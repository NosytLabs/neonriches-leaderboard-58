
import { ReactNode } from 'react';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type MedievalIconColor = 'gold' | 'silver' | 'bronze' | 'purple' | 'green' | 'red' | 'blue' | 'default' | 'royal';
export type MedievalIconName = 'crown' | 'sword' | 'shield' | 'scroll' | 'key' | 'goblet' | 'treasure' | 'castle' | 'dragon' | 'knight' | 'banner';
export type MedievalDecorationType = 'border' | 'icon' | 'flourish' | 'banner' | 'insignia';
export type MedievalDecorationSize = MedievalIconSize;
export type MedievalDecorationColor = MedievalIconColor;

export interface BaseDecorationProps {
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
  children?: ReactNode;
}

export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'ornate' | 'simple';

export interface RoyalDividerProps extends BaseDecorationProps {
  variant?: RoyalDividerVariant;
  label?: string;
  labelPosition?: 'left' | 'center' | 'right';
  color?: MedievalIconColor | 'royal' | 'gold' | 'default' | 'crimson' | 'purple';
}

// Utility functions for handling decoration sizes and colors
export const sizeClasses: Record<MedievalIconSize, string> = {
  'xs': 'w-3 h-3',
  'sm': 'w-4 h-4',
  'md': 'w-6 h-6',
  'lg': 'w-8 h-8',
  'xl': 'w-10 h-10',
  '2xl': 'w-12 h-12'
};

export const getColorClass = (color: MedievalIconColor): string => {
  switch (color) {
    case 'gold': return 'text-royal-gold';
    case 'silver': return 'text-gray-300';
    case 'bronze': return 'text-amber-600';
    case 'purple': return 'text-royal-purple';
    case 'green': return 'text-emerald-500';
    case 'red': return 'text-royal-crimson';
    case 'blue': return 'text-royal-navy';
    case 'royal': return 'text-royal-gold';
    default: return 'text-white';
  }
};

export const toMedievalIconColor = (color: string): MedievalIconColor => {
  switch (color) {
    case 'gold': return 'gold';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    case 'purple': return 'purple';
    case 'green': return 'green';
    case 'red': return 'red';
    case 'blue': return 'blue';
    case 'royal': return 'royal';
    default: return 'default';
  }
};
