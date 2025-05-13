
import React from 'react';

export const iconSizeMap = {
  'xs': 'h-3 w-3',
  'sm': 'h-4 w-4',
  'md': 'h-5 w-5',
  'lg': 'h-6 w-6',
  'xl': 'h-8 w-8',
  '2xl': 'h-10 w-10',
};

export const iconColorMap = {
  'default': 'text-foreground',
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'muted': 'text-muted-foreground',
  'accent': 'text-accent',
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'crimson': 'text-royal-crimson',
};

export type IconSize = keyof typeof iconSizeMap;
export type IconColor = keyof typeof iconColorMap;
export type IconStyle = 'default' | 'medieval';

export type MedievalIconName = 
  | 'crown'
  | 'shield'
  | 'sword'
  | 'castle'
  | 'chalice'
  | 'dragon'
  | 'flag'
  | 'fleur-de-lis'
  | 'goblet'
  | 'knight'
  | 'royal-crown'
  | 'scroll'
  | 'throne'
  | 'tower'
  | 'treasure-chest'
  | 'coat-of-arms'
  | 'medal'
  | 'gem'
  | 'heart'
  | 'trophy'
  | 'key'
  | 'coins'
  | 'wallet'
  | 'seal'
  | 'sparkles'
  | 'user'
  | 'users'
  | 'Crown'
  | 'Scroll'
  | 'Coins'
  | 'Shield'
  | 'Sparkles'
  | 'Trophy'
  | 'Users'
  | 'User'
  | 'banner'
  | 'dagger'
  | 'coin'
  | 'potion'
  | 'treasure-chest';

export interface IconProps {
  icon?: string;
  name?: string;
  iconName?: string;
  size?: IconSize | number;
  color?: IconColor | string;
  className?: string;
  animated?: boolean;
  style?: IconStyle | React.CSSProperties;
  [key: string]: any;
}

export interface MedievalIconProps {
  name: MedievalIconName;
  size?: IconSize;
  color?: IconColor;
  className?: string;
  animated?: boolean;
}
