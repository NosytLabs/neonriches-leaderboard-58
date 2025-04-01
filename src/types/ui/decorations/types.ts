
export type DecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type DecorationColor = 'default' | 'gold' | 'royal' | 'crimson' | 'navy' | 'purple';

export interface BaseDecorationProps {
  size?: DecorationSize;
  color?: DecorationColor;
  className?: string;
  animate?: boolean;
}

export type RoyalDividerColor = 'default' | 'royal' | 'gold' | 'crimson' | 'navy' | 'purple';

export const sizeClasses: Record<DecorationSize, {
  container: string;
  icon: string;
  border: string;
}> = {
  'xs': {
    container: 'w-4 h-4',
    icon: 'xs',
    border: 'w-3 h-3'
  },
  'sm': {
    container: 'w-6 h-6',
    icon: 'sm',
    border: 'w-5 h-5'
  },
  'md': {
    container: 'w-8 h-8',
    icon: 'md',
    border: 'w-7 h-7'
  },
  'lg': {
    container: 'w-10 h-10',
    icon: 'lg',
    border: 'w-9 h-9'
  },
  'xl': {
    container: 'w-12 h-12',
    icon: 'xl',
    border: 'w-11 h-11'
  },
  '2xl': {
    container: 'w-16 h-16',
    icon: '2xl',
    border: 'w-14 h-14'
  }
};

export const getColorClass = (color: DecorationColor): string => {
  switch (color) {
    case 'gold':
      return 'text-royal-gold';
    case 'royal':
      return 'text-royal-purple';
    case 'crimson':
      return 'text-royal-crimson';
    case 'navy':
      return 'text-royal-navy';
    case 'purple':
      return 'text-purple-500';
    default:
      return 'text-white/70';
  }
};
