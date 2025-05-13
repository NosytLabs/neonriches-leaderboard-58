
import { SVGProps, CSSProperties } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon?: string;
  name?: string;  // For backward compatibility
  iconName?: string;  // Alternative prop name
  size?: IconSize | number;
  color?: IconColor | string;
  className?: string;
  animated?: boolean;
  style?: IconStyle | CSSProperties;
}

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export type IconColor = 
  | 'default' 
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'gold'
  | 'royal'
  | 'crimson'
  | 'navy';

export type IconStyle = 
  | 'default'
  | 'medieval'
  | 'royal'
  | 'modern';

export const iconSizeMap: Record<IconSize, string> = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
  '2xl': 'h-10 w-10',
  '3xl': 'h-12 w-12',
  '4xl': 'h-16 w-16',
};

export const iconColorMap: Record<IconColor, string> = {
  default: 'text-current',
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  gold: 'text-royal-gold',
  royal: 'text-royal-purple',
  crimson: 'text-royal-crimson',
  navy: 'text-royal-navy'
};

export interface IconSystem {
  name: string;
  path: string;
}
