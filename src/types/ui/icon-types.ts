
import { ReactNode } from 'react';

// Define the standard icon sizes
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;

// Define the standard icon colors
export type IconColor = 
  | 'default' 
  | 'primary' 
  | 'secondary' 
  | 'muted' 
  | 'accent' 
  | 'destructive' 
  | 'gold' 
  | 'white' 
  | 'black' 
  | string;

// Define the standard icon styles
export type IconStyle = 'default' | 'medieval' | 'outline' | 'filled' | 'duotone';

// Define the icon name type for medieval icons
export type MedievalIconName = 
  | 'crown'
  | 'sword'
  | 'shield'
  | 'scroll'
  | 'potion'
  | 'key'
  | 'chest'
  | 'coin'
  | 'gem'
  | 'throne'
  | 'castle'
  | 'dragon'
  | 'knight'
  | 'goblet'
  | 'banner'
  | 'helmet'
  | 'quill'
  | 'book'
  | 'map'
  | 'compass'
  | string;

// Define the icon name type for regular icons
export type IconName = string;

// Define the icon color type for medieval icons
export type MedievalIconColor = IconColor;

// Export the size and color maps for reference
export const iconSizeMap = {
  'xs': 'h-3 w-3',
  'sm': 'h-4 w-4',
  'md': 'h-6 w-6',
  'lg': 'h-8 w-8',
  'xl': 'h-10 w-10',
  '2xl': 'h-12 w-12',
};

export const iconColorMap = {
  'default': 'text-foreground',
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'muted': 'text-muted-foreground',
  'accent': 'text-accent',
  'destructive': 'text-destructive',
  'gold': 'text-royal-gold',
  'white': 'text-white',
  'black': 'text-black',
};

// Props for the Icon component
export interface IconProps {
  icon?: string;
  name?: string;
  size?: IconSize;
  color?: IconColor;
  className?: string;
  animated?: boolean;
  style?: IconStyle | React.CSSProperties;
  [key: string]: any;
}

// Props for the MedievalIcon component
export interface MedievalIconProps {
  name: MedievalIconName;
  size?: IconSize;
  color?: MedievalIconColor;
  className?: string;
  animated?: boolean;
  [key: string]: any;
}
