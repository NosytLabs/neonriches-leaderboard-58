
import { LucideIcon } from 'lucide-react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type MedievalIconSize = IconSize;

export type IconColor = 
  | 'default'
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'purple' 
  | 'crimson' 
  | 'navy' 
  | 'royal'
  | string;

export type MedievalIconColor = IconColor;

export type IconStyle = 'default' | 'medieval' | 'fantasy' | 'royal';

export interface IconProps {
  icon?: string | LucideIcon;
  size?: IconSize | number;
  color?: IconColor | string;
  className?: string;
  onClick?: () => void;
  name?: string;
  animated?: boolean;
  style?: IconStyle;
}

export interface MedievalIconProps {
  name: string;
  size?: MedievalIconSize; 
  color?: MedievalIconColor;
  className?: string;
  onClick?: () => void;
  animated?: boolean;
}

// Map of size values to Tailwind classes
export const iconSizeMap: Record<IconSize, string> = {
  'xs': 'w-4 h-4',
  'sm': 'w-5 h-5',
  'md': 'w-6 h-6',
  'lg': 'w-8 h-8',
  'xl': 'w-10 h-10',
  '2xl': 'w-12 h-12'
};

// Map of color values to Tailwind classes
export const iconColorMap: Record<IconColor, string> = {
  'default': 'text-white',
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'bronze': 'text-amber-600',
  'red': 'text-red-500',
  'blue': 'text-blue-500',
  'green': 'text-green-500',
  'purple': 'text-purple-500',
  'crimson': 'text-royal-crimson',
  'royal': 'text-royal-purple',
  'navy': 'text-royal-navy'
};
