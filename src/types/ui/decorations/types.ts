
import React from 'react';

export type MedievalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type MedievalIconColor = 'gold' | 'silver' | 'royal' | 'crimson' | 'default' | 'purple';

export interface BaseDecorationProps {
  size?: MedievalSize;
  color?: MedievalIconColor;
  className?: string;
  animate?: boolean;
  icon?: React.ReactNode;
}

export type RoyalDividerVariant = 'line' | 'fancy' | 'double' | 'simple' | 'ornate';

export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  color?: 'default' | 'gold' | 'royal' | 'crimson' | 'purple';
  className?: string;
  label?: string;
  vertical?: boolean;
}

export type MedievalIconName = 
  | 'crown' 
  | 'shield' 
  | 'sword' 
  | 'scroll' 
  | 'potion' 
  | 'castle' 
  | 'warning' 
  | 'goblet' 
  | 'gift' 
  | 'image' 
  | 'key' 
  | 'wallet' 
  | 'medal' 
  | 'heart';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type MedievalDecorationType = 'border-pattern' | 'coat-of-arms' | 'corner-flourish' | 'crossed-swords' | 'royal-banner' | 'royal-insignia';

export type MedievalDecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type MedievalDecorationColor = 'gold' | 'silver' | 'royal' | 'crimson' | 'bronze';

export const sizeClasses = {
  xs: 'w-4 h-4',
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
  '2xl': 'w-24 h-24'
};

export const getColorClass = (color: MedievalIconColor): string => {
  switch (color) {
    case 'gold':
      return 'text-yellow-400';
    case 'silver':
      return 'text-gray-300';
    case 'royal':
      return 'text-purple-500';
    case 'crimson':
      return 'text-red-600';
    case 'purple':
      return 'text-purple-600';
    default:
      return 'text-white';
  }
};

export const toMedievalIconColor = (color: string): MedievalIconColor => {
  switch (color) {
    case 'gold':
    case 'yellow':
      return 'gold';
    case 'silver':
    case 'gray':
      return 'silver';
    case 'royal':
    case 'purple':
      return 'royal';
    case 'crimson':
    case 'red':
      return 'crimson';
    default:
      return 'default';
  }
};
