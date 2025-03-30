
import { ReactNode } from 'react';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type MedievalIconColor = 'gold' | 'silver' | 'bronze' | 'royal' | 'crimson' | 'navy' | 'default';
export type MedievalDecorationType = 'border' | 'corner' | 'divider' | 'insignia' | 'banner' | 'coat' | 'swords';
export type MedievalDecorationSize = MedievalIconSize;

export interface BaseDecorationProps {
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
  children?: ReactNode;
}

export interface RoyalDividerProps extends BaseDecorationProps {
  variant?: 'line' | 'double' | 'fancy' | 'simple' | 'ornate';
  color?: 'default' | 'royal' | 'gold' | 'crimson' | 'purple';
}

export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'simple' | 'ornate';

// Utility functions
export const getColorClass = (color: MedievalIconColor): string => {
  switch (color) {
    case 'gold': return 'text-royal-gold';
    case 'silver': return 'text-gray-300';
    case 'bronze': return 'text-amber-700';
    case 'royal': return 'text-royal-purple';
    case 'crimson': return 'text-royal-crimson';
    case 'navy': return 'text-royal-navy';
    default: return 'text-white';
  }
};

export const toMedievalIconColor = (color?: string): MedievalIconColor => {
  if (!color) return 'default';
  
  switch (color.toLowerCase()) {
    case 'gold': return 'gold';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    case 'royal': return 'royal';
    case 'crimson': return 'crimson';
    case 'navy': return 'navy';
    default: return 'default';
  }
};

export const sizeClasses: Record<MedievalIconSize, string> = {
  'xs': 'h-4 w-4',
  'sm': 'h-5 w-5',
  'md': 'h-6 w-6',
  'lg': 'h-8 w-8',
  'xl': 'h-12 w-12',
  '2xl': 'h-16 w-16'
};
