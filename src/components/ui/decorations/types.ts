
import { MedievalIconName, MedievalIconSize, MedievalIconColor } from '@/components/ui/medieval-icon';

export type DecorationVariant = 
  | 'corner-flourish'
  | 'border-pattern'
  | 'royal-banner'
  | 'coat-of-arms'
  | 'crossed-swords'
  | 'royal-insignia';

export type DecorationPosition = 
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center'
  | 'left-center'
  | 'right-center';

export type DecorationColor = 'gold' | 'crimson' | 'navy' | 'default' | 'bronze' | 'silver';
export type DecorationSize = 'sm' | 'md' | 'lg';

export interface BaseDecorationProps {
  color?: DecorationColor;
  size?: DecorationSize;
  animate?: boolean;
  className?: string;
}

export const positionClasses: Record<DecorationPosition, string> = {
  'top-left': 'absolute top-0 left-0',
  'top-right': 'absolute top-0 right-0',
  'bottom-left': 'absolute bottom-0 left-0',
  'bottom-right': 'absolute bottom-0 right-0',
  'top-center': 'absolute top-0 left-1/2 -translate-x-1/2',
  'bottom-center': 'absolute bottom-0 left-1/2 -translate-x-1/2',
  'left-center': 'absolute left-0 top-1/2 -translate-y-1/2',
  'right-center': 'absolute right-0 top-1/2 -translate-y-1/2',
};

export const sizeClasses: Record<DecorationSize, {
  container: string,
  icon: MedievalIconSize,
  border: string
}> = {
  sm: {
    container: 'w-12 h-12',
    icon: 'sm',
    border: 'w-8 h-8'
  },
  md: {
    container: 'w-16 h-16',
    icon: 'md',
    border: 'w-12 h-12'
  },
  lg: {
    container: 'w-24 h-24',
    icon: 'lg',
    border: 'w-16 h-16'
  }
};

export const getColorClass = (color: DecorationColor, element: 'border' | 'bg') => {
  if (element === 'border') {
    return color === 'gold' ? 'border-royal-gold/70' : 
          color === 'crimson' ? 'border-royal-crimson/70' :
          color === 'navy' ? 'border-royal-navy/70' :
          color === 'bronze' ? 'border-amber-700/70' :
          color === 'silver' ? 'border-gray-400/70' :
          'border-white/40';
  } else {
    return color === 'gold' ? 'bg-royal-gold/30' : 
          color === 'crimson' ? 'bg-royal-crimson/30' :
          color === 'navy' ? 'bg-royal-navy/30' :
          color === 'bronze' ? 'bg-amber-700/30' :
          color === 'silver' ? 'bg-gray-400/30' :
          'bg-white/20';
  }
};

// Helper to convert decoration color to medieval icon color
export const toMedievalIconColor = (color: DecorationColor): MedievalIconColor => {
  switch (color) {
    case 'gold': return 'gold';
    case 'crimson': return 'crimson';
    case 'navy': return 'navy';
    case 'bronze': return 'bronze';
    case 'silver': return 'silver';
    default: return 'default';
  }
};
