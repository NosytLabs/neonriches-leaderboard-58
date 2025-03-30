
import { LucideProps } from 'lucide-react';
import { CSSProperties } from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type MedievalIconColor = 
  | 'default' 
  | 'gold' 
  | 'silver' 
  | 'crimson' 
  | 'royal' 
  | 'navy' 
  | 'bronze' 
  | 'purple';

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

export type IconColor = MedievalIconColor | string;

export interface IconProps extends Omit<LucideProps, 'color'> {
  name: MedievalIconName | string;
  size?: IconSize | number;
  color?: IconColor;
  style?: 'default' | 'medieval' | string | CSSProperties;
}

export type MedievalDecorationColor = 'gold' | 'silver' | 'crimson' | 'royal' | 'purple' | 'navy' | 'platinum';
export type MedievalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface MedievalDecorationProps {
  color?: MedievalDecorationColor;
  size?: MedievalSize;
  className?: string;
}

export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'ornate' | 'simple' | 'treasure' | 'quill';
