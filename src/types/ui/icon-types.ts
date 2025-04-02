
import { LucideProps } from 'lucide-react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | number;
export type IconColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'muted' | 'gold' | 'silver' | 'crimson' | 'emerald' | 'royal' | string;
export type IconStyle = 'default' | 'outline' | 'solid' | 'medieval';

export interface IconProps {
  icon?: string;
  name?: string; // Alias for icon for backward compatibility
  size?: IconSize;
  color?: IconColor;
  animated?: boolean;
  style?: IconStyle;
  className?: string;
}

export type MedievalIconName = 
  | 'crown' 
  | 'scepter' 
  | 'scroll' 
  | 'shield' 
  | 'sword' 
  | 'helmet' 
  | 'castle' 
  | 'dragon'
  | 'knight'
  | 'throne'
  | 'coin'
  | 'coins'
  | 'chalice'
  | 'flag'
  | 'tower'
  | 'treasure-chest'
  | 'banner'
  | 'key';

export interface MedievalIconProps {
  name: MedievalIconName;
  size?: IconSize;
  color?: IconColor;
  className?: string;
  animated?: boolean;
}

export const iconSizeMap = {
  'xs': 'w-3 h-3',
  'sm': 'w-4 h-4',
  'md': 'w-6 h-6',
  'lg': 'w-8 h-8',
  'xl': 'w-10 h-10',
  '2xl': 'w-12 h-12',
  '3xl': 'w-16 h-16',
  '4xl': 'w-20 h-20'
};

export const iconColorMap = {
  'default': 'text-foreground',
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'success': 'text-green-500',
  'warning': 'text-yellow-500',
  'error': 'text-red-500',
  'info': 'text-blue-500',
  'muted': 'text-muted-foreground',
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'crimson': 'text-royal-crimson',
  'emerald': 'text-emerald-500',
  'royal': 'text-royal-purple'
};
