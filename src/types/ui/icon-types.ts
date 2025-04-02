
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
