
export type DecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface SizeClass {
  container: string;
  border: string;
  icon: DecorationSize;
}

export interface BaseDecorationProps {
  color?: string;
  size?: DecorationSize;
  animate?: boolean;
  animated?: boolean;
  icon?: string;
  className?: string;
}

export type MedievalIconColor = 'gold' | 'royal' | 'silver' | 'bronze' | 'red' | 'blue' | 'green' | 'purple' | 'default';

export const sizeClasses: Record<DecorationSize, SizeClass> = {
  xs: {
    container: 'w-6 h-6',
    border: 'border-1',
    icon: 'xs'
  },
  sm: {
    container: 'w-8 h-8',
    border: 'border-1',
    icon: 'sm'
  },
  md: {
    container: 'w-12 h-12',
    border: 'border-2',
    icon: 'md'
  },
  lg: {
    container: 'w-16 h-16',
    border: 'border-2',
    icon: 'lg'
  },
  xl: {
    container: 'w-24 h-24',
    border: 'border-3',
    icon: 'xl'
  }
};

export const getColorClass = (color: string, type: 'bg' | 'border' | 'text' = 'border') => {
  const colorMap: Record<string, Record<string, string>> = {
    gold: {
      bg: 'bg-royal-gold/20',
      border: 'border-royal-gold/30',
      text: 'text-royal-gold'
    },
    royal: {
      bg: 'bg-royal-purple/20',
      border: 'border-royal-purple/30',
      text: 'text-royal-purple'
    },
    silver: {
      bg: 'bg-gray-300/20',
      border: 'border-gray-300/30',
      text: 'text-gray-300'
    },
    bronze: {
      bg: 'bg-amber-700/20',
      border: 'border-amber-700/30',
      text: 'text-amber-700'
    },
    red: {
      bg: 'bg-red-500/20',
      border: 'border-red-500/30',
      text: 'text-red-500'
    },
    blue: {
      bg: 'bg-blue-500/20',
      border: 'border-blue-500/30',
      text: 'text-blue-500'
    },
    green: {
      bg: 'bg-green-500/20',
      border: 'border-green-500/30',
      text: 'text-green-500'
    },
    purple: {
      bg: 'bg-purple-500/20',
      border: 'border-purple-500/30',
      text: 'text-purple-500'
    },
    default: {
      bg: 'bg-white/10',
      border: 'border-white/20',
      text: 'text-white/80'
    }
  };

  const colorKey = color in colorMap ? color : 'default';
  return colorMap[colorKey][type];
};

export const toMedievalIconColor = (color: string): MedievalIconColor => {
  switch (color) {
    case 'gold': return 'gold';
    case 'royal': return 'royal';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    case 'red': return 'red';
    case 'blue': return 'blue';
    case 'green': return 'green';
    case 'purple': return 'purple';
    default: return 'default';
  }
};
