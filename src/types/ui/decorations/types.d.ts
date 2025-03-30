
import { ReactNode } from 'react';

export type DecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type DecorationColor = 'gold' | 'silver' | 'crimson' | 'emerald' | 'royal' | 'default';
export type IconSize = DecorationSize;
export type MedievalIconColor = 'gold' | 'silver' | 'crimson' | 'emerald' | 'royal' | 'default';

export interface DecorationProps {
  size?: DecorationSize;
  color?: DecorationColor;
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  children?: ReactNode;
}

export type DecorationType = 
  | 'royal-insignia'
  | 'corner-flourish'
  | 'coat-of-arms'
  | 'crossed-swords'
  | 'royal-banner'
  | 'border-pattern';
