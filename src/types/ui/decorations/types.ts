
import { MedievalColor, Size } from '@/types/common';

export type DecorationPosition = 
  | 'top-left' 
  | 'top-right' 
  | 'bottom-left' 
  | 'bottom-right' 
  | 'top-center' 
  | 'bottom-center' 
  | 'center';

export type DecorationColor = MedievalColor;
export type DecorationSize = Size;
export type MedievalSize = Size;
export type MedievalIconSize = Size | number;

export interface BaseDecorationProps {
  size?: DecorationSize;
  color?: DecorationColor;
  className?: string;
  animate?: boolean;
  icon?: string;
}

export interface RoyalDecorationProps extends BaseDecorationProps {
  type?: string;
  position?: DecorationPosition;
  animate?: boolean;
  variant?: string;
}
