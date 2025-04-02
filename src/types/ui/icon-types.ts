
import { LucideProps } from 'lucide-react';
import { CSSProperties } from 'react';

// Define icon size options
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

// Define medieval icon size options
export type MedievalIconSize = IconSize;

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
  | 'black'
  | 'crimson'
  | 'emerald'
  | 'red'
  | 'blue'
  | 'green'
  | 'purple';

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
  | 'treasure-chest'
  | 'chalice'
  | 'flag'
  | 'tower'
  | 'banner'
  | 'dagger'
  | 'potion';

// Icon props interface
export interface IconProps {
  name?: string;
  icon?: string;
  iconName?: string;
  size?: IconSize | number;
  color?: IconColor | string;
  className?: string;
  style?: IconStyle | CSSProperties;
  animated?: boolean;
  [key: string]: any;
}

// Medieval Icon props
export interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: IconColor;
  animated?: boolean;
  className?: string;
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
  'xs': 'w-3 h-3',
  'sm': 'w-4 h-4',
  'md': 'w-6 h-6',
  'lg': 'w-8 h-8',
  'xl': 'w-10 h-10',
  '2xl': 'w-12 h-12',
  '3xl': 'w-16 h-16',
  '4xl': 'w-20 h-20'
};

// Color mapping for consistent colors across icon systems
export const iconColorMap: Record<IconColor, string> = {
  'default': 'text-foreground',
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'success': 'text-green-500',
  'warning': 'text-amber-500',
  'error': 'text-red-500',
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'bronze': 'text-amber-700',
  'royal': 'text-royal-purple',
  'white': 'text-white',
  'black': 'text-black',
  'crimson': 'text-royal-crimson',
  'emerald': 'text-emerald-500',
  'red': 'text-red-500',
  'blue': 'text-blue-500',
  'green': 'text-green-500',
  'purple': 'text-purple-500'
};
