
import { LucideIcon } from 'lucide-react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IconColor = 'default' | 'primary' | 'secondary' | 'muted' | 'accent' | 'gold' | 'silver' | 'crimson';
export type IconStyle = 'default' | 'medieval';
export type MedievalIconName = 'crown' | 'shield' | 'sword' | 'scroll' | 'chalice';

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
