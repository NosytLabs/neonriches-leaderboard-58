
import { ReactNode } from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IconColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'muted' | string;
export type IconStyle = 'default' | 'solid' | 'outline' | 'duotone';

export interface IconProps {
  icon?: string;
  name?: string;
  size?: IconSize;
  color?: IconColor;
  className?: string;
  animated?: boolean;
  style?: IconStyle | string;
  children?: ReactNode;
  [key: string]: any;
}

export interface MedievalIconProps {
  name?: string;
  icon?: string;
  size?: IconSize;
  color?: string;
  className?: string;
  animated?: boolean;
}

export type MedievalIconName = 
  | 'crown' 
  | 'scroll'
  | 'shield'
  | 'sword'
  | 'banner'
  | 'goblet'
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
  | 'castle'
  | 'goblet';

export type MedievalIconColor = 
  | 'default'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'red'
  | 'blue'
  | 'green'
  | 'purple'
  | 'crimson'
  | 'royal'
  | string;
