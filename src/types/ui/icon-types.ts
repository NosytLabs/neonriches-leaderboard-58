
import { CSSProperties } from 'react';
import { LucideProps } from 'lucide-react';

export type IconType = 
  | 'crown'
  | 'coins'
  | 'throne'
  | 'shield'
  | 'sword'
  | 'scroll'
  | 'chalice'
  | 'key'
  | 'seal'
  | 'quill'
  | 'treasure'
  | 'medal'
  | 'certificate'
  | 'flag'
  | 'banner'
  | 'helm'
  | 'dragon'
  | 'castle'
  | 'knight'
  | 'king'
  | 'queen'
  | 'jester'
  | 'wizard'
  | 'torch'
  | 'medieval';

export type IconStyle = 
  | 'default'
  | 'solid'
  | 'outline'
  | 'duotone'
  | 'royal'
  | 'pixel'
  | 'medieval'
  | 'vintage';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | number;

export interface IconProps extends Omit<LucideProps, "color"> {
  type?: IconType;
  name?: string;
  style?: IconStyle | string;
  size?: IconSize;
  color?: string;
  secondaryColor?: string;
  className?: string;
  animate?: boolean;
}

export type MedievalIconName = string;
export type IconColor = string;
export type MedievalIconColor = string;
