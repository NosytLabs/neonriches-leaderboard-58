
import { SVGProps } from 'react';

export type MedievalIconName = 
  | 'crown' 
  | 'scroll' 
  | 'sword' 
  | 'shield' 
  | 'castle' 
  | 'goblet' 
  | 'dragon' 
  | 'treasure';

export type MedievalIconColor = 'gold' | 'silver' | 'royal' | 'crimson' | 'primary' | 'secondary';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  name: MedievalIconName;
  color?: MedievalIconColor;
  size?: MedievalIconSize;
  animated?: boolean;
  className?: string;
}

export const iconSizeMap: Record<MedievalIconSize, string> = {
  'xs': 'w-4 h-4',
  'sm': 'w-5 h-5',
  'md': 'w-6 h-6',
  'lg': 'w-8 h-8',
  'xl': 'w-10 h-10'
};

export const iconColorMap: Record<MedievalIconColor, string> = {
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'royal': 'text-royal-purple',
  'crimson': 'text-royal-crimson',
  'primary': 'text-primary',
  'secondary': 'text-secondary'
};
