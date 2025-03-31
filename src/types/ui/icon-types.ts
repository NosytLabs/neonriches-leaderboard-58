
import { ComponentPropsWithoutRef } from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type IconColor = 'default' | 'primary' | 'secondary' | 'destructive' | 'muted' | 'accent' | 'royal' | 'gold' | 'crimson' | string;
export type IconStyle = 'default' | 'medieval' | 'outline' | 'solid' | 'duotone';

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  name?: string;
  type?: string;
  size?: IconSize | number;
  color?: IconColor;
  className?: string;
  style?: IconStyle;
  animate?: boolean;
}

export interface MedievalIconProps extends IconProps {
  medieval?: boolean;
}
