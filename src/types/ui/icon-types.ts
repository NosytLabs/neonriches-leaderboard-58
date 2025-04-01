
import { LucideIcon } from 'lucide-react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type IconColor = 'royal' | 'gold' | 'silver' | 'bronze' | 'red' | 'blue' | 'green' | 'purple' | 'crimson' | 'emerald' | 'default';

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
  | 'coins'
  | 'treasure' 
  | 'treasure-chest'
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
  | 'key'
  | 'tower'
  | 'Crown'
  | 'Scroll'
  | 'Shield'
  | 'Coins'
  | 'Sparkles'
  | 'Trophy'
  | 'Users'
  | 'User';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'purple'
  | 'royal'
  | 'crimson'
  | 'emerald'
  | 'default';

export interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  animated?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface IconProps {
  name?: string;
  icon?: LucideIcon | string;
  size?: IconSize | number;
  color?: string;
  className?: string;
  animated?: boolean;
  style?: 'default' | 'medieval';
  onClick?: () => void;
}

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  loading?: 'eager' | 'lazy';
  quality?: number;
  placeholder?: string;
  placeholderColor?: string;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
  objectFit?: string;
  format?: string;
  importance?: string;
}

// Icon size mapping
export const iconSizeMap: Record<MedievalIconSize, string> = {
  'xs': 'w-3 h-3',
  'sm': 'w-4 h-4',
  'md': 'w-6 h-6',
  'lg': 'w-8 h-8',
  'xl': 'w-10 h-10',
  '2xl': 'w-12 h-12',
  '3xl': 'w-16 h-16'
};

// Icon color mapping
export const iconColorMap: Record<MedievalIconColor, string> = {
  'default': 'text-white',
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'bronze': 'text-amber-700',
  'red': 'text-red-500',
  'blue': 'text-blue-500',
  'green': 'text-green-500',
  'purple': 'text-purple-500',
  'royal': 'text-royal-purple',
  'crimson': 'text-royal-crimson',
  'emerald': 'text-emerald-500'
};
