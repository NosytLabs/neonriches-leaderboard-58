
import { LucideProps } from 'lucide-react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IconStyle = 'default' | 'medieval' | 'pixel' | 'outlined';
export type IconColor = 'default' | 'primary' | 'secondary' | 'accent' | 'muted' | 'gold' | 'silver' | 'royal' | 'crimson' | 'navy' | 'bronze' | 'purple';

export interface IconProps {
  name: string;
  size?: IconSize | number;
  color?: IconColor;
  className?: string;
  style?: IconStyle;
}

export type MedievalIconName = 
  | 'crown'
  | 'shield'
  | 'sword'
  | 'scroll'
  | 'heart'
  | 'medal'
  | 'trophy'
  | 'key'
  | 'coins'
  | 'gem'
  | 'seal';

export type MedievalIconSize = IconSize;
export type MedievalIconColor = IconColor;

export interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
  animate?: boolean;
}

export const iconSizeMap = {
  'xs': 'h-3 w-3',
  'sm': 'h-4 w-4',
  'md': 'h-5 w-5',
  'lg': 'h-6 w-6',
  'xl': 'h-8 w-8',
  '2xl': 'h-10 w-10'
};

export const iconColorMap = {
  'default': 'text-white',
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'accent': 'text-accent',
  'muted': 'text-muted-foreground',
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'royal': 'text-royal-blue',
  'crimson': 'text-royal-crimson',
  'navy': 'text-royal-navy',
  'bronze': 'text-amber-700',
  'purple': 'text-purple-500'
};
