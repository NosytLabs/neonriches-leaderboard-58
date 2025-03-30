
import React from 'react';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type MedievalIconName = string;
export type MedievalIconColor = 'default' | 'gold' | 'silver' | 'bronze' | 'royal' | 'crimson' | 'navy' | 'purple' | 'emerald' | 'azure' | 'platinum';

export type MedievalDecorationType = 'border' | 'corner' | 'crest' | 'scroll' | 'banner' | 'shield' | 'crown';
export type MedievalDecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MedievalDecorationColor = 'default' | 'gold' | 'silver' | 'royal' | 'crimson';
export type MedievalSize = MedievalIconSize;

export interface BaseDecorationProps {
  size?: MedievalDecorationSize;
  color?: MedievalDecorationColor;
  className?: string;
  children?: React.ReactNode;
}

export interface RoyalDividerProps {
  variant?: 'line' | 'double' | 'fancy';
  color?: 'default' | 'royal' | 'gold' | 'crimson';
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export type RoyalDividerVariant = 'line' | 'double' | 'fancy';

export const toMedievalIconColor = (color: string): MedievalIconColor => {
  if (color === 'gold' || color === 'silver' || color === 'bronze' || color === 'royal' || 
      color === 'crimson' || color === 'navy' || color === 'purple' || color === 'emerald' || 
      color === 'azure' || color === 'platinum') {
    return color as MedievalIconColor;
  }
  return 'default';
};

export const getColorClass = (color: MedievalDecorationColor): string => {
  switch (color) {
    case 'gold':
      return 'text-royal-gold';
    case 'silver':
      return 'text-gray-300';
    case 'royal':
      return 'text-royal-purple';
    case 'crimson':
      return 'text-royal-crimson';
    default:
      return 'text-gray-200';
  }
};

export const sizeClasses: Record<MedievalDecorationSize, string> = {
  'xs': 'w-4 h-4',
  'sm': 'w-6 h-6',
  'md': 'w-8 h-8',
  'lg': 'w-10 h-10',
  'xl': 'w-12 h-12'
};
