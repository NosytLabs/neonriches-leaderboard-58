
import { ReactNode } from 'react';
import { MedievalIconColor, MedievalIconName } from '@/types/ui/icon-types';

export type MedievalDecorationType = 
  | 'border'
  | 'corner'
  | 'pattern'
  | 'banner'
  | 'insignia'
  | 'divider'
  | 'shield'
  | 'crossed-swords'
  | 'coat-of-arms';

export type MedievalDecorationColor = 
  | 'gold'
  | 'silver'
  | 'crimson' 
  | 'royal'
  | 'purple'
  | 'navy'
  | 'platinum';

export type MedievalDecorationSize = 
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl';

export interface BaseDecorationProps {
  color?: MedievalDecorationColor;
  size?: MedievalDecorationSize;
  className?: string;
  style?: React.CSSProperties;
  animate?: boolean;
  container?: {
    className?: string;
    style?: React.CSSProperties;
  };
  icon?: {
    name: MedievalIconName;
    color: MedievalIconColor;
    size: MedievalDecorationSize;
    animate?: boolean;
  };
  border?: {
    className?: string;
    style?: React.CSSProperties;
  };
}

export type RoyalDividerVariant = 
  | 'line' 
  | 'double' 
  | 'fancy' 
  | 'ornate' 
  | 'simple' 
  | 'treasure' 
  | 'quill';

export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  color?: 'default' | 'gold' | 'crimson' | 'royal' | 'purple';
  className?: string;
  withIcon?: boolean;
  iconName?: MedievalIconName;
  label?: string | ReactNode;
}
