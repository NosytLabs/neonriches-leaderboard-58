
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
  | 'purple';

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
  | 'purple';

export interface BaseDecorationProps {
  size?: MedievalDecorationSize;
  color?: MedievalDecorationColor;
  className?: string;
  animate?: boolean;
  children?: ReactNode;
  glow?: boolean;
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
  color?: 'default' | 'royal' | 'crimson' | 'gold' | 'purple';
  width?: 'full' | 'auto';
  className?: string;
  align?: 'left' | 'center' | 'right';
  glow?: boolean;
  animated?: boolean;
}

