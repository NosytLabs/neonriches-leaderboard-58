
import { LucideIcon } from 'lucide-react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IconColor = 'royal' | 'gold' | 'silver' | 'bronze' | 'red' | 'blue' | 'green' | 'purple';

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
  | 'mace'
  | 'key';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type MedievalIconColor = 
  | 'gold' 
  | 'royal' 
  | 'silver' 
  | 'bronze' 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'purple' 
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
  icon: LucideIcon | string;
  size?: IconSize | number;
  color?: string;
  className?: string;
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
