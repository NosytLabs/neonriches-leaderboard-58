
import { MedievalColor, Size } from '@/types/common';
import { MedievalIconColor, MedievalIconSize } from '@/types/ui/decorations/types';

export const sizeClasses: Record<Size, string> = {
  'xs': 'w-4 h-4',
  'sm': 'w-6 h-6',
  'md': 'w-8 h-8',
  'lg': 'w-10 h-10',
  'xl': 'w-12 h-12',
  '2xl': 'w-16 h-16',
  '3xl': 'w-20 h-20',
  '4xl': 'w-24 h-24'
};

export const toMedievalIconColor = (color: MedievalIconColor): string => {
  const colorMap: Record<MedievalColor, string> = {
    'default': 'text-gray-200',
    'bronze': 'text-amber-700',
    'silver': 'text-gray-300',
    'gold': 'text-royal-gold',
    'royal': 'text-purple-500',
    'purple': 'text-purple-500',
    'green': 'text-emerald-500',
    'red': 'text-royal-crimson',
    'blue': 'text-royal-navy',
    'crimson': 'text-royal-crimson'
  };
  
  return colorMap[color as MedievalColor] || colorMap.default;
};

export const getColorClass = (color: MedievalIconColor): string => {
  const colorMap: Record<MedievalColor, string> = {
    'default': 'border-gray-300 text-gray-200',
    'bronze': 'border-amber-700 text-amber-700',
    'silver': 'border-gray-300 text-gray-300',
    'gold': 'border-royal-gold text-royal-gold',
    'royal': 'border-purple-500 text-purple-500',
    'purple': 'border-purple-500 text-purple-500',
    'green': 'border-emerald-500 text-emerald-500',
    'red': 'border-royal-crimson text-royal-crimson',
    'blue': 'border-royal-navy text-royal-navy',
    'crimson': 'border-royal-crimson text-royal-crimson'
  };
  
  return colorMap[color as MedievalColor] || colorMap.default;
};
