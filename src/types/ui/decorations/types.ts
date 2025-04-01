
import { MedievalIconColor } from '@/types/ui/icon-types';

export type DecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type DecorationColor = MedievalIconColor;
export type RoyalDividerColor = 'royal' | 'gold' | 'default' | 'crimson';

export interface BaseDecorationProps {
  size?: DecorationSize;
  color?: DecorationColor;
  animate?: boolean;
  className?: string;
}

export interface PositionedDecorationProps extends BaseDecorationProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
}
