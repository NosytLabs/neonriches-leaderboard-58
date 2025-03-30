
import { ReactNode } from 'react';

export type MedievalDecorationColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze'
  | 'royal-gold' 
  | 'royal-purple' 
  | 'royal-crimson'
  | 'muted-gold'
  | 'parchment'
  | 'aged-paper'
  | 'dark-wood'
  | 'light-wood'
  | 'stone'
  | 'iron'
  | 'brass'
  | 'copper'
  | 'purple'
  | 'red'
  | 'green'
  | 'blue';

export type MedievalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type MedievalIconColor = 'gold' | 'silver' | 'royal-gold' | 'royal-purple' | 'royal-crimson' | 'muted-gold';

export interface BaseDecorationProps {
  className?: string;
  size?: MedievalSize;
  color?: MedievalDecorationColor;
  children?: ReactNode;
  animate?: boolean;
  icon?: ReactNode;
}

export interface RoyalDividerProps extends BaseDecorationProps {
  type?: 'line' | 'double' | 'fancy';
  color?: 'royal' | 'gold' | 'default' | 'crimson';
}
