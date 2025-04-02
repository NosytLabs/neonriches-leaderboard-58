
import { LucideProps } from "lucide-react";
import * as React from "react";

// Common icon size type used across the application
export type IconSize = 
  | 'xs' 
  | 'sm' 
  | 'md' 
  | 'lg' 
  | 'xl' 
  | '2xl' 
  | '3xl'
  | '4xl'
  | number;

// Common icon color type used across the application
export type IconColor = 
  | 'default'
  | 'muted'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'royal'
  | 'gold'
  | 'silver'
  | 'crimson'
  | 'emerald'
  | 'red'
  | 'blue'
  | 'green'
  | 'purple'
  | string;

// Common icon style type
export type IconStyle = 'default' | 'medieval' | 'outline' | 'solid' | 'thin' | 'duotone';

// Icon component props for the main Icon component
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'size' | 'color'> {
  name?: string;
  icon?: string;
  size?: IconSize;
  color?: IconColor;
  className?: string;
  animated?: boolean;
  style?: IconStyle;
}

// Map of icon sizes to Tailwind classes for consistent sizing
export const iconSizeMap = {
  'xs': 'h-3 w-3',
  'sm': 'h-4 w-4',
  'md': 'h-5 w-5',
  'lg': 'h-6 w-6',
  'xl': 'h-8 w-8',
  '2xl': 'h-10 w-10',
  '3xl': 'h-12 w-12',
  '4xl': 'h-16 w-16'
};

// Map of icon colors to Tailwind classes
export const iconColorMap = {
  'default': 'text-foreground',
  'muted': 'text-muted-foreground',
  'accent': 'text-accent-foreground',
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'info': 'text-blue-500',
  'success': 'text-green-500',
  'warning': 'text-yellow-500',
  'danger': 'text-red-500',
  'royal': 'text-purple-500',
  'gold': 'text-yellow-400',
  'silver': 'text-gray-300',
  'crimson': 'text-royal-crimson',
  'emerald': 'text-emerald-500',
  'red': 'text-red-500',
  'blue': 'text-blue-500',
  'green': 'text-green-500',
  'purple': 'text-purple-500'
};

// Lucide icon type for type safety
export type LucideIcon = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

// Medieval icon types
export type MedievalIconName = 
  | 'crown'
  | 'shield'
  | 'sword'
  | 'castle'
  | 'chalice'
  | 'dragon'
  | 'flag'
  | 'fleur-de-lis'
  | 'goblet'
  | 'knight'
  | 'royal-crown'
  | 'scroll'
  | 'throne'
  | 'tower'
  | 'treasure-chest'
  | 'coat-of-arms'
  | 'medal'
  | 'gem'
  | 'heart'
  | 'trophy'
  | 'key'
  | 'coins'
  | 'wallet'
  | 'seal'
  | 'sparkles'
  | 'user'
  | 'users'
  | 'Crown'
  | 'Scroll'
  | 'Coins'
  | 'Shield'
  | 'Sparkles'
  | 'Trophy'
  | 'Users'
  | 'User'
  | 'banner'
  | 'dagger'
  | 'coin'
  | 'potion'
  | 'treasure-chest'
  | string;

export type MedievalIconColor = IconColor;

export interface MedievalIconProps {
  name: MedievalIconName;
  size?: IconSize;
  color?: MedievalIconColor;
  className?: string;
  animated?: boolean;
}
