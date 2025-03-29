
import { ReactNode } from 'react';

export type MedievalDecorationColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'royal' 
  | 'crimson'
  | 'navy'
  | 'platinum';

export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'royal' 
  | 'crimson'
  | 'navy'
  | 'platinum';

export type MedievalSize = 'sm' | 'md' | 'lg' | 'xl';

export interface BaseDecorationProps {
  className?: string;
  size?: MedievalSize;
  color?: MedievalDecorationColor;
  animate?: boolean;
  icon?: ReactNode;
  container?: string;
  border?: string;
}

export interface RoyalDividerProps extends BaseDecorationProps {
  className?: string;
  variant?: 'fancy' | 'line' | 'double' | 'ornate' | 'simple';
  color?: 'default' | 'royal' | 'gold' | 'crimson' | 'purple';
}

export type RoyalDividerVariant = 'fancy' | 'line' | 'double' | 'ornate' | 'simple';

export const MEDIEVAL_ICON_COLORS: Record<MedievalIconColor, string> = {
  gold: 'text-royal-gold',
  silver: 'text-gray-300',
  bronze: 'text-amber-700',
  royal: 'text-royal-purple',
  crimson: 'text-royal-crimson',
  navy: 'text-royal-navy',
  platinum: 'text-indigo-300'
};

export const MedievalDecorationSize = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

export type MedievalIconName = 
  | 'crown' 
  | 'shield' 
  | 'sword' 
  | 'scroll' 
  | 'chalice' 
  | 'castle' 
  | 'fleurDeLis';

export type MedievalIconSize = 'sm' | 'md' | 'lg' | 'xl';

export type MedievalDecorationType = 
  | 'flourish' 
  | 'border' 
  | 'corner' 
  | 'divider' 
  | 'banner';

export type MedievalDecorationSize = 'sm' | 'md' | 'lg' | 'xl';

// Helper functions
export function toMedievalIconColor(color: MedievalDecorationColor): MedievalIconColor {
  return color as MedievalIconColor;
}

export function getColorClass(color: MedievalDecorationColor, prefix: string = 'text'): string {
  switch (color) {
    case 'gold': return `${prefix}-royal-gold`;
    case 'silver': return `${prefix}-gray-300`;
    case 'bronze': return `${prefix}-amber-700`;
    case 'royal': return `${prefix}-royal-purple`;
    case 'crimson': return `${prefix}-royal-crimson`;
    case 'navy': return `${prefix}-royal-navy`;
    case 'platinum': return `${prefix}-indigo-300`;
    default: return `${prefix}-royal-gold`;
  }
}

export const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6', 
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};
