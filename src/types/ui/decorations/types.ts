
import { ReactNode } from 'react';

export type MedievalIconName = 
  | 'crown' 
  | 'sword' 
  | 'shield' 
  | 'dragon' 
  | 'castle' 
  | 'scroll'
  | 'goblet'
  | 'helmet'
  | 'horse'
  | 'knight'
  | 'fleur-de-lis';

export type MedievalIconSize = 
  | 'xs' 
  | 'sm' 
  | 'md' 
  | 'lg' 
  | 'xl' 
  | '2xl'
  | '3xl'
  | '4xl';

export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'royal' 
  | 'crimson'
  | 'navy'
  | 'emerald'
  | 'amber'
  | 'azure'
  | 'default';

export type MedievalDecorationSize = 
  | 'xs' 
  | 'sm' 
  | 'md' 
  | 'lg' 
  | 'xl' 
  | '2xl'
  | '3xl'
  | '4xl';

export type MedievalDecorationColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'royal' 
  | 'crimson'
  | 'navy'
  | 'emerald'
  | 'amber'
  | 'default';

export type MedievalDecorationType = 
  | 'corner' 
  | 'border' 
  | 'divider' 
  | 'banner'
  | 'crest'
  | 'scroll'
  | 'shield';

export interface BaseDecorationProps {
  className?: string;
  size?: MedievalDecorationSize;
  color?: MedievalDecorationColor;
  type?: MedievalDecorationType;
  animate?: boolean;
  icon?: MedievalIconName;
}

export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'ornate' | 'simple';

export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  className?: string;
  color?: 'default' | 'royal' | 'gold' | 'crimson' | 'purple';
}

// Helper functions for decoration components
export const getColorClass = (color: MedievalDecorationColor): string => {
  switch (color) {
    case 'gold':
      return 'text-royal-gold';
    case 'silver':
      return 'text-gray-300';
    case 'bronze':
      return 'text-amber-600';
    case 'royal':
      return 'text-royal-purple';
    case 'crimson':
      return 'text-royal-crimson';
    case 'navy':
      return 'text-royal-navy';
    case 'emerald':
      return 'text-emerald-500';
    case 'amber':
      return 'text-amber-500';
    default:
      return 'text-white/80';
  }
};

export const toMedievalIconColor = (color: MedievalDecorationColor): MedievalIconColor => {
  return color as MedievalIconColor;
};

// Size class mapping
export const sizeClasses: Record<MedievalIconSize, string> = {
  'xs': 'w-4 h-4',
  'sm': 'w-6 h-6',
  'md': 'w-8 h-8',
  'lg': 'w-10 h-10',
  'xl': 'w-12 h-12',
  '2xl': 'w-16 h-16',
  '3xl': 'w-20 h-20',
  '4xl': 'w-24 h-24'
};
