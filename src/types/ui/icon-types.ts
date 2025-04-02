
import { CSSProperties, ReactNode } from 'react';
import { LucideProps } from 'lucide-react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
export type IconColor = 
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'muted'
  | 'royal'
  | 'gold'
  | 'crimson'
  | 'purple'
  | string;
export type IconStyle = 'default' | 'outline' | 'filled' | 'duotone' | 'royal';

export type MedievalIconName = 
  | 'crown' 
  | 'scroll' 
  | 'chalice' 
  | 'shield' 
  | 'sword' 
  | 'castle' 
  | 'dragon' 
  | 'knight' 
  | 'tower' 
  | 'flag';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps extends LucideProps {
  icon?: string;
  name?: string;
  iconName?: string;
  size?: IconSize;
  color?: IconColor;
  style?: IconStyle | CSSProperties;
  animated?: boolean;
}

export interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: string;
  className?: string;
}

export interface IconAdapterProps {
  name: string;
  size?: string | number;
  color?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  children?: ReactNode;
}

// Size mapping for icon components
export const iconSizeMap: Record<IconSize | string, string> = {
  'xs': 'h-3 w-3',
  'sm': 'h-4 w-4',
  'md': 'h-5 w-5',
  'lg': 'h-6 w-6',
  'xl': 'h-8 w-8',
  '2xl': 'h-10 w-10',
};

// Color mapping for icon components
export const iconColorMap: Record<IconColor | string, string> = {
  'default': 'text-foreground',
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'accent': 'text-accent',
  'muted': 'text-muted-foreground',
  'royal': 'text-royal-gold',
  'gold': 'text-yellow-500',
  'crimson': 'text-red-600',
  'purple': 'text-purple-500',
};
