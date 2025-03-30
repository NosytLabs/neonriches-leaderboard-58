
import { ReactNode } from 'react';
import { CSSProperties } from 'react';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'default' 
  | 'crimson' 
  | 'royal' 
  | 'navy' 
  | 'purple';

export type MedievalIconName = 
  | 'crown' 
  | 'shield' 
  | 'sword' 
  | 'scroll' 
  | 'castle' 
  | 'dragon' 
  | 'helmet' 
  | 'banner' 
  | 'goblet' 
  | 'knight' 
  | 'axe' 
  | 'coins';

export type MedievalDecorationType = 
  | 'border-pattern' 
  | 'corner-flourish' 
  | 'royal-banner' 
  | 'coat-of-arms' 
  | 'crossed-swords' 
  | 'royal-insignia';

export type MedievalDecorationSize = MedievalIconSize;
export type MedievalDecorationColor = MedievalIconColor;

export type MedievalSize = MedievalIconSize;

export type DecorationPosition = 
  | 'top-left' 
  | 'top-right' 
  | 'bottom-left' 
  | 'bottom-right' 
  | 'top' 
  | 'bottom' 
  | 'left' 
  | 'right';

export interface BaseDecorationProps {
  color?: MedievalIconColor;
  size?: MedievalIconSize;
  animate?: boolean;
  className?: string;
  icon?: ReactNode;
  container?: string;
  border?: string;
}

export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'ornate' | 'simple';

export interface RoyalDividerProps extends Omit<BaseDecorationProps, 'color'> {
  variant?: RoyalDividerVariant;
  label?: string;
  color?: 'royal' | 'gold' | 'crimson' | 'default' | 'purple';
}

export const sizeClasses: Record<MedievalIconSize, string> = {
  'xs': 'w-3 h-3',
  'sm': 'w-4 h-4',
  'md': 'w-6 h-6',
  'lg': 'w-8 h-8',
  'xl': 'w-12 h-12'
};

export const getColorClass = (color: MedievalIconColor): string => {
  switch (color) {
    case 'gold': return 'text-royal-gold';
    case 'silver': return 'text-gray-300';
    case 'bronze': return 'text-amber-600';
    case 'crimson': return 'text-royal-crimson';
    case 'royal': return 'text-royal-purple';
    case 'navy': return 'text-royal-navy';
    case 'purple': return 'text-purple-500';
    default: return 'text-foreground';
  }
};

export const toMedievalIconColor = (color: string): MedievalIconColor => {
  switch (color) {
    case 'gold': return 'gold';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    case 'crimson': return 'crimson';
    case 'royal': return 'royal';
    case 'navy': return 'navy';
    case 'purple': return 'purple';
    default: return 'default';
  }
};
