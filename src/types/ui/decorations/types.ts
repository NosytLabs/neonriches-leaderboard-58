
import { ReactNode } from 'react';

export type MedievalIconName = 
  | 'crown' 
  | 'shield' 
  | 'sword' 
  | 'castle' 
  | 'dragon' 
  | 'knight' 
  | 'scroll' 
  | 'goblet' 
  | 'crossbow' 
  | 'coin';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MedievalIconColor = 'gold' | 'silver' | 'bronze' | 'iron' | 'steel' | 'ruby' | 'emerald' | 'sapphire' | 'amethyst' | 'copper' | 'platinum' | 'brass' | 'purple';

export type MedievalDecorationType = 
  | 'border' 
  | 'corner' 
  | 'divider' 
  | 'frame' 
  | 'accent';

export type MedievalDecorationSize = 'sm' | 'md' | 'lg' | 'xl';
export type MedievalDecorationColor = 'gold' | 'silver' | 'royal' | 'bronze' | 'emerald' | 'ruby' | 'sapphire' | 'dark';

export interface BaseDecorationProps {
  className?: string;
  color?: MedievalDecorationColor;
  size?: MedievalDecorationSize;
  children?: ReactNode;
}

export type RoyalDividerVariant = 'line' | 'fancy' | 'double' | 'ornate' | 'simple';

export interface RoyalDividerProps extends BaseDecorationProps {
  variant?: RoyalDividerVariant;
  text?: string;
  align?: 'left' | 'center' | 'right';
  color?: 'royal' | 'gold' | 'crimson' | 'default' | 'purple';
}
