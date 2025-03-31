
import { SVGProps } from 'react';

export type MedievalIconName = 
  | 'crown' 
  | 'scroll' 
  | 'sword' 
  | 'shield' 
  | 'castle' 
  | 'goblet' 
  | 'dragon' 
  | 'treasure'
  | 'coins'
  | 'key'
  | 'gem'
  | 'medal'
  | 'heart'
  | 'trophy'
  | 'seal'
  | 'sparkles'
  | 'users'
  | 'user';

export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'royal' 
  | 'crimson' 
  | 'primary' 
  | 'secondary'
  | 'default'
  | 'navy'
  | 'bronze'
  | 'purple'
  | 'emerald'
  | 'muted'
  | 'accent';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  name: MedievalIconName;
  color?: MedievalIconColor;
  size?: MedievalIconSize | number;
  animated?: boolean;
  className?: string;
}

export const iconSizeMap: Record<MedievalIconSize, string> = {
  'xs': 'w-4 h-4',
  'sm': 'w-5 h-5',
  'md': 'w-6 h-6',
  'lg': 'w-8 h-8',
  'xl': 'w-10 h-10',
  '2xl': 'w-12 h-12',
  '3xl': 'w-16 h-16',
  '4xl': 'w-20 h-20'
};

export const iconColorMap: Record<MedievalIconColor, string> = {
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'royal': 'text-royal-purple',
  'crimson': 'text-royal-crimson',
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'default': 'text-white',
  'navy': 'text-blue-900',
  'bronze': 'text-amber-700',
  'purple': 'text-purple-500',
  'emerald': 'text-emerald-500',
  'muted': 'text-muted-foreground',
  'accent': 'text-accent'
};

// Type alias for backward compatibility
export type IconSize = MedievalIconSize;
export type IconColor = MedievalIconColor;
