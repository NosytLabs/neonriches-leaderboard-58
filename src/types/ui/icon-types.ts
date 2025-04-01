
import { LucideIcon } from 'lucide-react';

// Basic icon properties
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type IconColor = 
  | 'primary' 
  | 'secondary' 
  | 'muted' 
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'royal'
  | 'gold'
  | 'silver'
  | 'crimson'
  | 'bronze'
  | 'red'
  | 'blue'
  | 'green'
  | 'purple'
  | 'navy';

export type IconStyle = 'default' | 'medieval' | 'outline' | 'solid';

// Base icon props without icon name
export interface BaseIconProps {
  size?: IconSize | number;
  color?: IconColor | string;
  className?: string;
  animated?: boolean;
  style?: IconStyle;
}

// Full icon props with icon name
export interface IconProps extends BaseIconProps {
  name: string;
}

// Medieval icon types
export type MedievalIconName = 
  | 'crown'
  | 'shield'
  | 'sword'
  | 'banner'
  | 'scroll'
  | 'goblet'
  | 'castle'
  | 'dragon'
  | 'knight'
  | 'king'
  | 'queen'
  | 'jester'
  | 'wizard'
  | 'coin'
  | 'treasure'
  | 'horse'
  | 'fleur'
  | 'chalice'
  | 'throne'
  | 'crossed-swords'
  | 'helmet'
  | 'bow'
  | 'arrow'
  | 'candle'
  | 'torch'
  | 'flag'
  | 'axe'
  | 'mace';

export type MedievalIconColor = 
  | 'gold'
  | 'royal'
  | 'silver'
  | 'bronze'
  | 'red'
  | 'blue'
  | 'green'
  | 'purple';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Size mapping for consistent styling
export const iconSizeMap: Record<IconSize, string> = {
  'xs': 'w-3 h-3',
  'sm': 'w-4 h-4',
  'md': 'w-6 h-6',
  'lg': 'w-8 h-8',
  'xl': 'w-10 h-10',
  '2xl': 'w-12 h-12'
};

// Color mapping for consistent styling
export const iconColorMap: Record<string, string> = {
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'muted': 'text-muted-foreground',
  'accent': 'text-accent',
  'info': 'text-blue-500',
  'success': 'text-green-500',
  'warning': 'text-amber-500',
  'danger': 'text-red-500',
  'royal': 'text-royal-purple',
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'bronze': 'text-amber-700',
  'crimson': 'text-royal-crimson',
  'red': 'text-red-500',
  'blue': 'text-blue-500',
  'green': 'text-green-500',
  'purple': 'text-purple-500',
  'navy': 'text-royal-navy',
  'default': 'text-current'
};
