
import React from 'react';

export type MedievalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type MedievalIconName = 
  | 'crown'
  | 'sword'
  | 'shield'
  | 'scroll'
  | 'castle'
  | 'dragon'
  | 'goblet'
  | 'banner'
  | 'axe'
  | 'flourish';

export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'crimson' 
  | 'royal' 
  | 'navy' 
  | 'emerald'
  | 'purple'
  | 'bronze';

export type MedievalDecorationColor = 
  | 'gold' 
  | 'silver' 
  | 'crimson' 
  | 'royal' 
  | 'navy' 
  | 'emerald'
  | 'purple';

export type MedievalIconProps = {
  name: MedievalIconName;
  size?: MedievalSize;
  color?: MedievalIconColor;
  className?: string;
  solid?: boolean;
};

export type MedievalDecorationProps = {
  type?: 'top' | 'bottom' | 'left' | 'right' | 'corner';
  color?: MedievalDecorationColor;
  size?: MedievalSize;
  className?: string;
};

// Helper functions
export const sizeClasses = (size: MedievalSize = 'md'): string => {
  const sizes: Record<MedievalSize, string> = {
    'xs': 'w-4 h-4',
    'sm': 'w-6 h-6',
    'md': 'w-8 h-8',
    'lg': 'w-10 h-10',
    'xl': 'w-12 h-12',
    '2xl': 'w-16 h-16'
  };
  
  return sizes[size] || sizes.md;
};

export const getColorClass = (color: MedievalDecorationColor = 'gold'): string => {
  const colors: Record<MedievalDecorationColor, string> = {
    'gold': 'text-yellow-400',
    'silver': 'text-gray-300',
    'crimson': 'text-red-600',
    'royal': 'text-purple-700',
    'navy': 'text-blue-800',
    'emerald': 'text-emerald-500',
    'purple': 'text-purple-500'
  };
  
  return colors[color] || colors.gold;
};

export const toMedievalIconColor = (color?: string): MedievalIconColor => {
  if (!color) return 'gold';
  
  switch (color.toLowerCase()) {
    case 'gold':
    case 'yellow':
      return 'gold';
    case 'silver':
    case 'gray':
      return 'silver';
    case 'crimson':
    case 'red':
      return 'crimson';
    case 'royal':
    case 'purple':
      return 'royal';
    case 'navy':
    case 'blue':
      return 'navy';
    case 'emerald':
    case 'green':
      return 'emerald';
    case 'bronze':
    case 'brown':
      return 'bronze';
    default:
      return 'gold';
  }
};
