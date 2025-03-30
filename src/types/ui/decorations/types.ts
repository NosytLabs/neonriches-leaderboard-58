
import { ReactNode } from 'react';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MedievalIconName = 'shield' | 'sword' | 'crown' | 'scroll' | 'goblet' | 'helmet' | 'castle' | 'dragon' | 'knight';
export type MedievalIconColor = 'gold' | 'silver' | 'bronze' | 'royal' | 'default';

export type MedievalSize = MedievalIconSize;
export type MedievalDecorationSize = MedievalIconSize;
export type MedievalDecorationType = 'top' | 'bottom' | 'left' | 'right' | 'corners' | 'full';

export interface BaseDecorationProps {
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
  animate?: boolean;
  icon?: ReactNode;
  container?: ReactNode;
  border?: ReactNode;
}

export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'ornate' | 'simple';

export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  color?: 'default' | 'royal' | 'gold' | 'crimson' | 'purple';
  className?: string;
}
