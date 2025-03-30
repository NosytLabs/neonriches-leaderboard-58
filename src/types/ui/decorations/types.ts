
import { ReactNode } from 'react';

export type MedievalIconName = 
  | 'crown'
  | 'scroll'
  | 'shield'
  | 'sword'
  | 'goblet'
  | 'castle'
  | 'dragon'
  | 'knight'
  | 'banner'
  | 'torch'
  | 'quill'
  | 'treasure'
  | 'coin'
  | 'key'
  | 'seal'
  | 'fleurDeLis';

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

export type MedievalDecorationType = 
  | 'border'
  | 'corner'
  | 'banner'
  | 'shield'
  | 'frame'
  | 'divider'
  | 'scroll'
  | 'crown'
  | 'coat-of-arms'
  | 'crossed-swords'
  | 'royal-insignia'
  | 'flourish';

export type MedievalDecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type MedievalDecorationColor = 
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
  size?: MedievalDecorationSize;
  color?: MedievalDecorationColor;
  className?: string;
  animate?: boolean;
  children?: ReactNode;
  glow?: boolean;
  icon?: MedievalIconName;
}

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
  color?: 'default' | 'royal' | 'crimson' | 'gold' | 'purple' | 'silver';
  width?: 'full' | 'auto';
  className?: string;
  align?: 'left' | 'center' | 'right';
  glow?: boolean;
  animated?: boolean;
  label?: string;
  withIcon?: boolean;
  icon?: ReactNode;
}

// Helper functions for medieval decoration types
export const sizeClasses: Record<MedievalSize, string> = {
  xs: "w-4 h-4",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
  "2xl": "w-24 h-24"
};

export const toMedievalIconColor = (color: MedievalIconColor): string => {
  switch (color) {
    case 'gold': return 'text-royal-gold';
    case 'silver': return 'text-gray-300';
    case 'bronze': return 'text-amber-600';
    case 'royal': return 'text-royal-purple';
    case 'crimson': return 'text-royal-crimson';
    case 'emerald': return 'text-emerald-500';
    case 'azure': return 'text-blue-400';
    default: return 'text-gray-100';
  }
};

export const getColorClass = (color: MedievalDecorationColor): string => {
  switch (color) {
    case 'gold': return 'text-royal-gold stroke-royal-gold';
    case 'silver': return 'text-gray-300 stroke-gray-300';
    case 'royal': return 'text-royal-purple stroke-royal-purple';
    case 'crimson': return 'text-royal-crimson stroke-royal-crimson';
    case 'emerald': return 'text-emerald-500 stroke-emerald-500';
    case 'azure': return 'text-blue-400 stroke-blue-400';
    case 'bronze': return 'text-amber-600 stroke-amber-600';
    case 'navy': return 'text-blue-800 stroke-blue-800';
    case 'platinum': return 'text-gray-100 stroke-gray-100';
    default: return 'text-gray-100 stroke-gray-100';
  }
};

// Add missing MedievalSize type
export type MedievalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
