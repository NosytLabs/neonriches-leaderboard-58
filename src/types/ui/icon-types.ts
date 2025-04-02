
import { LucideProps } from 'lucide-react';
import { CSSProperties } from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | string;
export type IconStyle = 'default' | 'medieval';
export type MedievalIconName = 'crown' | 'sword' | 'shield' | 'scroll' | 'potion' | 'coin' | 'key' | 'dagger' | 'banner';
export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MedievalIconColor = 'gold' | 'silver' | 'crimson' | 'royal' | 'emerald' | 'default';

export interface IconProps extends Omit<LucideProps, 'ref'> {
  name: string;
  size?: IconSize;
  className?: string;
  style?: CSSProperties;
  color?: string;
  animated?: boolean;
  icon?: string;
}

export const iconSizeMap: Record<string, string> = {
  'xs': 'w-3 h-3',
  'sm': 'w-4 h-4',
  'md': 'w-6 h-6',
  'lg': 'w-8 h-8',
  'xl': 'w-10 h-10',
  '2xl': 'w-12 h-12',
  '3xl': 'w-16 h-16'
};

export const iconColorMap: Record<string, string> = {
  'default': 'text-current',
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'muted': 'text-muted-foreground',
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'crimson': 'text-royal-crimson',
  'royal': 'text-royal-purple',
  'emerald': 'text-emerald-500'
};
