
import { LucideProps } from 'lucide-react';
import { ElementType } from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type IconColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'muted' | 'royal' | 'default';
export type IconStyle = 'default' | 'solid' | 'outline' | 'duo';

export interface IconProps extends LucideProps {
  name?: string;
  size?: IconSize | number;
  color?: IconColor | string;
  className?: string;
}

export interface LucideIcon extends ElementType<LucideProps> {}

export const iconSizeMap: Record<IconSize, string> = {
  'xs': 'h-3 w-3',
  'sm': 'h-4 w-4',
  'md': 'h-5 w-5',
  'lg': 'h-6 w-6',
  'xl': 'h-8 w-8',
  '2xl': 'h-10 w-10',
  '3xl': 'h-12 w-12',
  '4xl': 'h-16 w-16'
};

export const iconColorMap: Record<IconColor, string> = {
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'success': 'text-green-500',
  'danger': 'text-red-500',
  'warning': 'text-amber-500',
  'info': 'text-blue-500',
  'muted': 'text-muted-foreground',
  'royal': 'text-royal-gold',
  'default': 'text-foreground'
};
