
import { CSSProperties } from 'react';
import { LucideProps } from 'lucide-react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconColor = 'default' | 'primary' | 'secondary' | 'accent' | 'warning' | 'danger' | 'success' | 'info' | 'royal' | 'gold';
export type IconStyle = 'default' | 'outline' | 'solid' | 'medieval';
export type IconAnimation = 'none' | 'spin' | 'pulse' | 'bounce' | 'shake';

export interface BaseIconProps {
  name: string;
  size?: IconSize;
  color?: IconColor;
  className?: string;
  style?: IconStyle | CSSProperties;
  animation?: IconAnimation;
}

export interface IconProps extends Omit<LucideProps, 'color'> {
  size?: IconSize;
  color?: IconColor;
  style?: IconStyle | CSSProperties;
  animate?: boolean;
  animated?: boolean;
}

export interface MedievalIconProps {
  name: string;
  size?: IconSize;
  color?: IconColor;
  className?: string;
  animate?: boolean;
}

export interface AnimatedIconProps extends IconProps {
  animation: IconAnimation;
  duration?: number;
  iterationCount?: number | 'infinite';
}
