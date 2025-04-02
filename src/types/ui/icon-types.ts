
import React, { CSSProperties } from 'react';
import { LucideProps } from 'lucide-react';

// Extended type for IconStyle to include 'default' and 'medieval'
export type IconStyle = 'default' | 'medieval' | 'royal' | 'vintage';

// Extended MedievalIconSize to include the value used in the codebase
export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type MedievalIconColor = 
  | 'default' 
  | 'primary' 
  | 'secondary' 
  | 'gold' 
  | 'royal' 
  | 'accent'
  | 'silver'
  | 'crimson'
  | 'emerald'
  | 'bronze'
  | 'red'
  | 'blue'
  | 'green'
  | 'purple';

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
  | 'treasure-chest'
  | 'flag'
  | 'throne'
  | 'tower'
  | 'banner'
  | 'coin'
  | 'coins'
  | 'key'
  | 'dagger'
  | 'potion'
  | 'goblet'
  | 'fleur'
  | 'horse'
  | 'wizard'
  | 'jester'
  | 'treasure'
  | 'crossed-swords'
  | 'helmet'
  | 'bow'
  | 'arrow'
  | 'candle'
  | 'torch'
  | 'flag'
  | 'axe'
  | 'mace';

// Use CSSProperties for the style properties when needed
export interface IconProps extends LucideProps {
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

// Export IconSize for use in other types
export type IconSize = MedievalIconSize;
export type IconColor = MedievalIconColor;

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
  accent: 'text-accent',
  silver: 'text-gray-300',
  crimson: 'text-royal-crimson',
  emerald: 'text-emerald-500',
  bronze: 'text-amber-600',
  red: 'text-red-500',
  blue: 'text-blue-500',
  green: 'text-green-500',
  purple: 'text-purple-500'
};
