
import { ReactNode } from 'react';

export type MedievalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type MedievalIconName = 
  | 'crown' 
  | 'shield' 
  | 'sword' 
  | 'castle' 
  | 'dragon' 
  | 'knight' 
  | 'scroll' 
  | 'chalice' 
  | 'banner'
  | 'coat-of-arms'
  | 'corner-flourish'
  | 'crossed-swords'
  | 'royal-banner'
  | 'royal-insignia';

export type MedievalIconColor = 
  | 'default' 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'royal' 
  | 'crimson' 
  | 'emerald' 
  | 'azure';

export type MedievalDecorationColor = 
  | 'gold' 
  | 'silver' 
  | 'royal' 
  | 'crimson' 
  | 'emerald' 
  | 'azure' 
  | 'bronze'
  | 'navy'
  | 'platinum';

export type MedievalDecorationType = 
  | 'coat-of-arms' 
  | 'corner-flourish' 
  | 'crossed-swords' 
  | 'royal-banner' 
  | 'royal-insignia';

export interface BaseDecorationProps {
  color?: MedievalDecorationColor;
  size?: MedievalSize;
  className?: string;
  animate?: boolean;
  icon?: MedievalIconName;
}

export interface MedievalDecorationProps extends BaseDecorationProps {
  type: MedievalDecorationType;
}

export type RoyalDividerVariant = 'line' | 'double' | 'fancy';

export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  color?: 'default' | 'royal' | 'gold' | 'crimson';
  className?: string;
  withIcon?: boolean;
  icon?: ReactNode;
  label?: string;
}

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
