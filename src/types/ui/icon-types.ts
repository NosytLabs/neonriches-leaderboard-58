
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | number;
export type IconColor = 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'danger' | 'muted' | 'royal' | 'gold' | 'silver' | 'current' | string;
export type IconStyle = 'default' | 'medieval' | 'outline' | 'solid';

// Map of size classes for different icon sizes
export const iconSizeMap: Record<string, string> = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10',
  '2xl': 'w-12 h-12',
  '3xl': 'w-16 h-16',
};

// Map of color classes for different icon colors
export const iconColorMap: Record<string, string> = {
  default: 'text-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  info: 'text-blue-500',
  success: 'text-green-500',
  warning: 'text-yellow-500',
  danger: 'text-red-500',
  muted: 'text-muted-foreground',
  royal: 'text-royal-gold',
  gold: 'text-amber-400',
  silver: 'text-slate-300',
  current: 'text-current',
};

export interface IconProps {
  name: string;
  size?: IconSize;
  color?: IconColor;
  className?: string;
  style?: IconStyle;
  [key: string]: any;
}

// Medieval icon types
export type MedievalIconName = 
  'crown' | 'shield' | 'sword' | 'scroll' | 'heart' | 'medal' | 'trophy' | 
  'key' | 'coins' | 'gem' | 'seal' | 'dragon' | 'castle' | 'flag' | 
  'horse' | 'knight' | 'king' | 'queen' | 'jester' | 'chalice' | 'throne' | 
  'tower' | 'user' | 'users' | 'sparkles' | 'fire' | 'water' | 'earth' | 
  'air' | 'sun' | 'moon' | 'star' | 'potion' | 'book' | 'quill' | 'parchment';

export type MedievalIconColor = 
  'gold' | 'silver' | 'bronze' | 'steel' | 'royal' | 'crimson' | 
  'emerald' | 'sapphire' | 'amber' | 'jade' | 'obsidian' | 'default';

export type MedievalIconSize = 
  'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | number;

export interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
  animate?: boolean;
}

// Helper function to convert any string to a valid medieval icon name
export function toMedievalIconName(name: string): MedievalIconName {
  const lowerName = name.toLowerCase();
  
  // Map common names to valid medieval icon names
  const nameMap: Record<string, MedievalIconName> = {
    'crown': 'crown',
    'shield': 'shield',
    'sword': 'sword',
    'scroll': 'scroll',
    'heart': 'heart',
    'medal': 'medal',
    'trophy': 'trophy',
    'key': 'key',
    'coins': 'coins',
    'coin': 'coins',
    'money': 'coins',
    'gem': 'gem',
    'seal': 'seal',
    'dragon': 'dragon',
    'castle': 'castle',
    'flag': 'flag',
    'horse': 'horse',
    'knight': 'knight',
    'king': 'king',
    'queen': 'queen',
    'jester': 'jester',
    'chalice': 'chalice',
    'throne': 'throne',
    'tower': 'tower',
    'user': 'user',
    'users': 'users',
    'sparkles': 'sparkles',
    'sparkle': 'sparkles',
    'fire': 'fire',
    'water': 'water',
    'earth': 'earth',
    'air': 'air',
    'sun': 'sun',
    'moon': 'moon',
    'star': 'star',
    'potion': 'potion',
    'book': 'book',
    'quill': 'quill',
    'parchment': 'parchment',
  };
  
  return nameMap[lowerName] || 'crown';
}

// Helper function to convert any string to a valid medieval icon color
export function toMedievalIconColor(color: string): MedievalIconColor {
  const lowerColor = color.toLowerCase();
  
  const colorMap: Record<string, MedievalIconColor> = {
    'gold': 'gold',
    'silver': 'silver',
    'bronze': 'bronze',
    'steel': 'steel',
    'royal': 'royal',
    'crimson': 'crimson',
    'emerald': 'emerald',
    'sapphire': 'sapphire',
    'amber': 'amber',
    'jade': 'jade',
    'obsidian': 'obsidian',
    'default': 'default',
  };
  
  return colorMap[lowerColor] || 'default';
}

// Type for icon adapters (for use with different icon libraries)
export interface IconAdapter {
  (name: string): ReactNode;
}
