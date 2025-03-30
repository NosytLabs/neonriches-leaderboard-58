
import { LucideProps } from 'lucide-react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type MedievalIconColor = 'default' | 'gold' | 'silver' | 'crimson' | 'royal' | 'navy' | 'bronze' | 'purple';
export type MedievalIconName = 
  | 'crown' 
  | 'shield' 
  | 'sword' 
  | 'scroll' 
  | 'heart' 
  | 'trophy' 
  | 'coins' 
  | 'key' 
  | 'seal' 
  | 'medal' 
  | 'gem' 
  | 'wallet'
  | 'castle'
  | string;

export interface IconProps extends Omit<LucideProps, 'color'> {
  name: MedievalIconName | string;
  size?: IconSize | number;
  color?: MedievalIconColor | string;
}

export type MedievalDecorationColor = 'gold' | 'silver' | 'crimson' | 'royal' | 'purple';
export type MedievalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface MedievalDecorationProps {
  color?: MedievalDecorationColor;
  size?: MedievalSize;
  className?: string;
}
