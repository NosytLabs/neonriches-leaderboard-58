
import { IconProps, MedievalIconSize, MedievalIconColor } from '@/types/ui/icon-types';

export interface BaseDecorationProps {
  className?: string;
  style?: 'default' | 'medieval' | 'royal' | 'navy';
  animated?: boolean;
}

export interface MedievalDecorationProps extends BaseDecorationProps {
  size?: MedievalIconSize;
  color?: MedievalIconColor;
}

export interface IconDecorationProps extends MedievalDecorationProps {
  icon: string;
}

export interface TextDecorationProps extends BaseDecorationProps {
  text: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface BorderPatternProps extends BaseDecorationProps {
  pattern?: 'solid' | 'dashed' | 'dotted' | 'ornate' | 'royal';
  width?: number;
  height?: number;
}

export interface SwordProps extends BaseDecorationProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  crossed?: boolean;
}

export interface BannerProps extends BaseDecorationProps {
  text?: string;
  icon?: string;
  onHover?: () => void;
}
