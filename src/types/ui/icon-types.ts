
import { LucideProps } from 'lucide-react';
import { CSSProperties } from 'react';

// Define icon size options
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

// Define icon color options
export type IconColor = 
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'royal'
  | 'white'
  | 'black';

// Define icon style options
export type IconStyle =
  | 'default'
  | 'filled'
  | 'outlined'
  | 'rounded'
  | 'medieval'
  | 'royal';

// Define medieval icon names
export type MedievalIconName = 
  | 'crown' 
  | 'sword' 
  | 'shield' 
  | 'dragon'
  | 'castle'
  | 'scroll'
  | 'key'
  | 'coin'
  | 'coins'
  | 'chest'
  | 'throne'
  | 'treasure-chest';

// Icon props interface extending Lucide props
export interface IconProps extends LucideProps {
  size?: IconSize;
  color?: IconColor;
  style?: IconStyle | CSSProperties;
}

// Medieval Icon props
export interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: IconColor;
  animated?: boolean;
}

// Icon adapter props for compatibility with different icon systems
export interface IconAdapterProps {
  name: string;
  size?: IconSize | string | number;
  color?: IconColor | string;
  style?: IconStyle | CSSProperties;
}

// Size mapping for consistent sizing across icon systems
export const iconSizeMap: Record<IconSize, string> = {
  'xs': '0.75rem',
  'sm': '1rem',
  'md': '1.25rem',
  'lg': '1.5rem',
  'xl': '2rem',
  '2xl': '2.5rem',
  '3xl': '3rem',
  '4xl': '4rem'
};

// Color mapping for consistent colors across icon systems
export const iconColorMap: Record<IconColor, string> = {
  'default': 'currentColor',
  'primary': 'var(--color-primary)',
  'secondary': 'var(--color-secondary)',
  'success': 'var(--color-success)',
  'warning': 'var(--color-warning)',
  'error': 'var(--color-error)',
  'gold': 'var(--color-royal-gold)',
  'silver': 'var(--color-silver)',
  'bronze': 'var(--color-bronze)',
  'royal': 'var(--color-royal-purple)',
  'white': 'white',
  'black': 'black'
};

// Use export type for better TS compatibility with isolatedModules
export type { IconProps, MedievalIconProps, IconAdapterProps, IconSize, IconColor, IconStyle, MedievalIconName, MedievalIconSize };
export { iconSizeMap, iconColorMap };
