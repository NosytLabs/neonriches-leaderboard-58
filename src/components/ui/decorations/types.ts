
import { MedievalIconColor, MedievalIconName, MedievalIconSize } from '@/components/ui/medieval-icon';

export type DecorationSize = MedievalIconSize;
export type DecorationColor = MedievalIconColor;

export interface BaseDecorationProps {
  color?: DecorationColor;
  size?: DecorationSize;
  animate?: boolean;
  className?: string;
}

export const sizeClasses: Record<DecorationSize, { container: string, icon: MedievalIconSize }> = {
  'xs': { container: 'h-4 w-4', icon: 'xs' },
  'sm': { container: 'h-6 w-6', icon: 'sm' },
  'md': { container: 'h-8 w-8', icon: 'md' },
  'lg': { container: 'h-10 w-10', icon: 'lg' },
  'xl': { container: 'h-12 w-12', icon: 'xl' },
  '2xl': { container: 'h-16 w-16', icon: '2xl' }
};

export const toMedievalIconColor = (color: DecorationColor): MedievalIconColor => {
  return color;
};
