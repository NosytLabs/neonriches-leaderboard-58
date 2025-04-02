
import React, { CSSProperties } from 'react';
import type { LucideProps } from 'lucide-react';

// Define MedievalIconName type
export type MedievalIconName = 
  | 'crown' 
  | 'scroll'
  | 'shield'
  | 'sword'
  | 'banner'
  | 'goblet'
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
  | 'mace'
  | 'castle'
  | 'goblet'
  | 'tower';  // Add 'tower' to the list

// Define icon sizes
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type MedievalIconSize = IconSize;

// Size map for icons
export const iconSizeMap: Record<IconSize, string> = {
  'xs': 'h-3 w-3',
  'sm': 'h-4 w-4',
  'md': 'h-6 w-6',
  'lg': 'h-8 w-8',
  'xl': 'h-12 w-12',
  '2xl': 'h-16 w-16'
};

// Define icon colors
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
  | 'royal'
  | string;

// Color map for icons
export const iconColorMap: Record<string, string> = {
  'default': 'text-white',
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'bronze': 'text-amber-600',
  'red': 'text-red-500',
  'blue': 'text-blue-500',
  'green': 'text-green-500',
  'purple': 'text-purple-500',
  'crimson': 'text-royal-crimson',
  'royal': 'text-royal-purple'
};

// Define icon style
export type IconStyle = 'default' | 'medieval' | string;

// Icon props interface
export interface IconProps extends Omit<LucideProps, 'style'> {
  name?: string;
  icon?: string;
  iconName?: string; // Add support for iconName prop
  size?: IconSize | number;
  color?: IconColor;
  style?: IconStyle | CSSProperties;
  animated?: boolean;
}

// Medieval Icon props
export interface MedievalIconProps extends IconProps {
  name: MedievalIconName | string;
}

// Icon adapter props interface
export interface IconAdapterProps {
  icon: string;
  name?: string;
  size?: IconSize | string;
  color?: IconColor | string;
  className?: string;
  style?: string | CSSProperties;
  animated?: boolean;
}

// Export all types
export {
  IconProps,
  MedievalIconProps,
  IconAdapterProps,
  IconSize,
  IconColor,
  IconStyle,
  MedievalIconName,
  MedievalIconSize,
  iconSizeMap,
  iconColorMap
};
