
import { LucideProps } from 'lucide-react';
import { ElementRef, ComponentPropsWithoutRef } from 'react';

export interface IconAdapterProps {
  color?: string;
  size?: string | number;
  strokeWidth?: number;
}

export interface IconProps extends LucideProps, IconAdapterProps {
  iconName?: string;
  name?: string;
  icon?: string;
  animated?: boolean;
  style?: 'default' | 'outline' | 'solid' | 'royal' | 'minimalist';
}

export interface IconVariants {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'royal' | string;
  animated?: boolean;
  style?: 'default' | 'outline' | 'solid' | 'royal' | 'minimalist';
}

export type IconElement = ElementRef<'svg'>;
export type IconElementProps = ComponentPropsWithoutRef<'svg'>;

export interface IconComponentProps extends IconElementProps, IconVariants {
  iconName: string;
}
