
import React from 'react';

export type DecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type DecorationColor = 'royal' | 'gold' | 'silver' | 'bronze' | 'red' | 'blue' | 'green' | 'purple' | 'default';
export type MedievalIconName = 'crown' | 'sword' | 'shield' | 'chalice' | 'scroll' | 'dragon' | 'castle' | 'knight' | 'banner';
export type MedievalIconColor = 'gold' | 'silver' | 'bronze' | 'red' | 'blue' | 'green' | 'purple' | 'royal';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type IconColor = 'royal' | 'gold' | 'silver' | 'bronze' | 'red' | 'blue' | 'green' | 'purple' | 'default';

export interface DecorationProps {
  className?: string;
  size?: DecorationSize | number;
  color?: DecorationColor;
  rotate?: number;
  flip?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  animateOnHover?: boolean;
  children?: React.ReactNode;
}

export const sizeClasses: Record<DecorationSize, string> = {
  'xs': 'w-4 h-4',
  'sm': 'w-6 h-6',
  'md': 'w-8 h-8',
  'lg': 'w-12 h-12',
  'xl': 'w-16 h-16',
  '2xl': 'w-24 h-24',
  '3xl': 'w-32 h-32'
};

export const getColorClass = (color: DecorationColor): string => {
  switch (color) {
    case 'royal': return 'text-royal-gold';
    case 'gold': return 'text-yellow-400';
    case 'silver': return 'text-gray-300';
    case 'bronze': return 'text-amber-600';
    case 'red': return 'text-red-500';
    case 'blue': return 'text-blue-500';
    case 'green': return 'text-green-500';
    case 'purple': return 'text-purple-500';
    default: return 'text-gray-200';
  }
};

export const toMedievalIconColor = (color: string): MedievalIconColor => {
  switch (color) {
    case 'royal': return 'royal';
    case 'gold': return 'gold';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    case 'red': return 'red';
    case 'blue': return 'blue';
    case 'green': return 'green';
    case 'purple': return 'purple';
    default: return 'gold';
  }
};
