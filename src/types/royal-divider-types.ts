
import { ReactNode } from 'react';

export type RoyalButtonVariant = 
  | 'royal'
  | 'royalGold'
  | 'royalPurple'
  | 'royalNavy'
  | 'royalCrimson'
  | 'glass'
  | 'outline'
  | 'goldOutline'
  | 'crimsonOutline'
  | 'navyOutline'
  | 'mahogany';

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
