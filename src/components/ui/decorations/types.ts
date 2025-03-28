
import { MedievalIconColor, MedievalIconName, MedievalIconSize } from '@/components/ui/medieval-icon';

export type DecorationSize = MedievalIconSize;
export type DecorationColor = MedievalIconColor;

export type DecorationVariant = 
  'corner-flourish' | 
  'border-pattern' | 
  'royal-banner' | 
  'coat-of-arms' | 
  'crossed-swords' | 
  'royal-insignia';

export type DecorationPosition = 
  'top-left' | 
  'top-right' | 
  'bottom-left' | 
  'bottom-right' | 
  'top-center' | 
  'bottom-center' |
  'center-left' |
  'center-right' |
  'center';

export interface BaseDecorationProps {
  color?: DecorationColor;
  size?: DecorationSize;
  animate?: boolean;
  className?: string;
}

export const sizeClasses: Record<MedievalIconSize, { container: string, icon: MedievalIconSize, border: string }> = {
  'xs': { container: 'h-4 w-4', icon: 'xs', border: 'border-2' },
  'sm': { container: 'h-6 w-6', icon: 'sm', border: 'border-2' },
  'md': { container: 'h-8 w-8', icon: 'md', border: 'border-2' },
  'lg': { container: 'h-10 w-10', icon: 'lg', border: 'border-3' },
  'xl': { container: 'h-12 w-12', icon: 'xl', border: 'border-3' },
  '2xl': { container: 'h-16 w-16', icon: '2xl', border: 'border-4' }
};

export const positionClasses: Record<DecorationPosition, string> = {
  'top-left': 'absolute top-0 left-0',
  'top-right': 'absolute top-0 right-0',
  'bottom-left': 'absolute bottom-0 left-0',
  'bottom-right': 'absolute bottom-0 right-0',
  'top-center': 'absolute top-0 left-1/2 transform -translate-x-1/2',
  'bottom-center': 'absolute bottom-0 left-1/2 transform -translate-x-1/2',
  'center-left': 'absolute top-1/2 left-0 transform -translate-y-1/2',
  'center-right': 'absolute top-1/2 right-0 transform -translate-y-1/2',
  'center': 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
};

export const getColorClass = (color: DecorationColor, type: 'bg' | 'border' | 'text'): string => {
  switch (color) {
    case 'gold':
      return type === 'bg' ? 'bg-royal-gold/20' : 
             type === 'border' ? 'border-royal-gold' : 'text-royal-gold';
    case 'silver':
      return type === 'bg' ? 'bg-gray-300/20' : 
             type === 'border' ? 'border-gray-300' : 'text-gray-300';
    case 'bronze':
      return type === 'bg' ? 'bg-amber-600/20' : 
             type === 'border' ? 'border-amber-600' : 'text-amber-600';
    case 'copper':
      return type === 'bg' ? 'bg-amber-600/20' : 
             type === 'border' ? 'border-amber-600' : 'text-amber-600';
    case 'red':
      return type === 'bg' ? 'bg-royal-crimson/20' : 
             type === 'border' ? 'border-royal-crimson' : 'text-royal-crimson';
    case 'crimson':
      return type === 'bg' ? 'bg-royal-crimson/20' : 
             type === 'border' ? 'border-royal-crimson' : 'text-royal-crimson';
    case 'blue':
      return type === 'bg' ? 'bg-royal-navy/20' : 
             type === 'border' ? 'border-royal-navy' : 'text-royal-navy';
    case 'navy':
      return type === 'bg' ? 'bg-royal-navy/20' : 
             type === 'border' ? 'border-royal-navy' : 'text-royal-navy';
    case 'green':
      return type === 'bg' ? 'bg-emerald-500/20' : 
             type === 'border' ? 'border-emerald-500' : 'text-emerald-500';
    case 'emerald':
      return type === 'bg' ? 'bg-emerald-500/20' : 
             type === 'border' ? 'border-emerald-500' : 'text-emerald-500';
    case 'purple':
      return type === 'bg' ? 'bg-purple-600/20' : 
             type === 'border' ? 'border-purple-600' : 'text-purple-600';
    case 'amber':
      return type === 'bg' ? 'bg-amber-500/20' : 
             type === 'border' ? 'border-amber-500' : 'text-amber-500';
    case 'default':
      return type === 'bg' ? 'bg-gray-200/20' : 
             type === 'border' ? 'border-gray-200' : 'text-gray-200';
    case 'white':
      return type === 'bg' ? 'bg-white/20' : 
             type === 'border' ? 'border-white' : 'text-white';
    default:
      return type === 'bg' ? 'bg-gray-200/20' : 
             type === 'border' ? 'border-gray-200' : 'text-gray-200';
  }
};

export const toMedievalIconColor = (color: DecorationColor): MedievalIconColor => {
  return color;
};
