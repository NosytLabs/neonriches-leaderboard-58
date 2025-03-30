
import { ReactNode } from 'react';

export type MedievalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type MedievalIconColor = 'gold' | 'silver' | 'royal' | 'crimson' | 'default';
export type MedievalDecorationColor = 'gold' | 'silver' | 'royal' | 'crimson';

export interface MedievalDecorationProps {
  size?: MedievalSize;
  color?: MedievalIconColor;
  className?: string;
  children?: ReactNode;
}

export interface BaseDecorationProps {
  size?: MedievalSize;
  color?: MedievalIconColor;
  className?: string;
}
