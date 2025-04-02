
import React, { CSSProperties } from 'react';
import { LucideProps } from 'lucide-react';

// Extended type for IconStyle to include 'default' and 'medieval'
export type IconStyle = 'default' | 'medieval' | 'royal' | 'vintage';

// Extended MedievalIconSize to include the value used in the codebase
export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type MedievalIconColor = 'default' | 'primary' | 'secondary' | 'gold' | 'royal' | 'accent';
export type MedievalIconName = 
  | 'crown' 
  | 'sword' 
  | 'shield' 
  | 'scroll' 
  | 'chalice' 
  | 'castle' 
  | 'dragon' 
  | 'knight' 
  | 'king' 
  | 'queen' 
  | 'treasure-chest';

// Make IconProps extend LucideProps but allow for IconStyle
export interface IconProps extends Omit<LucideProps, 'ref'> {
  icon?: string;
  name?: string;
  size?: string | number;
  color?: string;
  style?: IconStyle | CSSProperties;
  className?: string;
  animated?: boolean;
}

export interface MedievalIconProps {
  name: MedievalIconName | string;
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
  animated?: boolean;
}

export const iconSizeMap: Record<string, string> = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
  '2xl': 'w-10 h-10'
};

export const iconColorMap: Record<string, string> = {
  default: 'text-current',
  primary: 'text-primary',
  secondary: 'text-secondary',
  gold: 'text-royal-gold',
  royal: 'text-royal-purple',
  accent: 'text-accent'
};
