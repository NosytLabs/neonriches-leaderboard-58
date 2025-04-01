
import { MedievalIconSize } from '@/types/ui/icon-types';

export type DecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface SizeClass {
  container: string;
  border: string;
  icon: MedievalIconSize;
}

export const sizeClasses: Record<DecorationSize, SizeClass> = {
  xs: { container: 'w-6 h-6', border: 'border-1', icon: 'xs' },
  sm: { container: 'w-8 h-8', border: 'border-1', icon: 'sm' },
  md: { container: 'w-12 h-12', border: 'border-2', icon: 'md' },
  lg: { container: 'w-16 h-16', border: 'border-2', icon: 'lg' },
  xl: { container: 'w-24 h-24', border: 'border-3', icon: 'xl' }
};
