
import { LucideProps } from 'lucide-react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IconColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'muted' | string;
export type IconStyle = 'default' | 'outline' | 'solid';

export interface IconProps extends Omit<LucideProps, 'ref'> {
  icon: string;
  name?: string; // Alias for icon for backward compatibility
  size?: IconSize;
  color?: IconColor;
  animated?: boolean;
  style?: IconStyle;
  className?: string;
}

export type MedievalIconName = 
  | 'crown' 
  | 'scepter' 
  | 'scroll' 
  | 'shield' 
  | 'sword' 
  | 'helmet' 
  | 'castle' 
  | 'dragon'
  | 'knight'
  | 'throne';

export interface MedievalIconProps {
  name: MedievalIconName;
  size?: IconSize;
  color?: IconColor;
  className?: string;
  animated?: boolean;
}

export const iconSizeMap = {
  'xs': 16,
  'sm': 18,
  'md': 24,
  'lg': 32,
  'xl': 40,
  '2xl': 48,
};

export const iconColorMap = {
  'default': 'currentColor',
  'primary': 'var(--primary)',
  'secondary': 'var(--secondary)',
  'success': 'var(--success)',
  'warning': 'var(--warning)',
  'error': 'var(--error)',
  'info': 'var(--info)',
  'muted': 'var(--muted)',
};
