
import { IconColor } from '@/types/ui/icon-types';

/**
 * Utility to get appropriate Tailwind color classes for icon colors
 */
export const getColorClass = (color: IconColor | string): string => {
  switch (color) {
    case 'gold':
      return 'text-royal-gold';
    case 'royal':
      return 'text-royal-purple';
    case 'crimson':
      return 'text-royal-crimson';
    case 'silver':
      return 'text-gray-300';
    case 'bronze':
      return 'text-amber-600';
    case 'red':
      return 'text-red-500';
    case 'blue':
      return 'text-blue-500';
    case 'green':
      return 'text-green-500';
    case 'purple':
      return 'text-purple-500';
    case 'navy':
      return 'text-royal-navy';
    default:
      return 'text-white';
  }
};

/**
 * Utility to get appropriate Tailwind background color classes
 */
export const getBgColorClass = (color: IconColor | string, opacity: number = 20): string => {
  const opacityValue = opacity.toString();
  
  switch (color) {
    case 'gold':
      return `bg-royal-gold/${opacityValue}`;
    case 'royal':
      return `bg-royal-purple/${opacityValue}`;
    case 'crimson':
      return `bg-royal-crimson/${opacityValue}`;
    case 'silver':
      return `bg-gray-300/${opacityValue}`;
    case 'bronze':
      return `bg-amber-600/${opacityValue}`;
    case 'red':
      return `bg-red-500/${opacityValue}`;
    case 'blue':
      return `bg-blue-500/${opacityValue}`;
    case 'green':
      return `bg-green-500/${opacityValue}`;
    case 'purple':
      return `bg-purple-500/${opacityValue}`;
    case 'navy':
      return `bg-royal-navy/${opacityValue}`;
    default:
      return `bg-white/${opacityValue}`;
  }
};

/**
 * Utility to get appropriate Tailwind border color classes
 */
export const getBorderColorClass = (color: IconColor | string, opacity: number = 30): string => {
  const opacityValue = opacity.toString();
  
  switch (color) {
    case 'gold':
      return `border-royal-gold/${opacityValue}`;
    case 'royal':
      return `border-royal-purple/${opacityValue}`;
    case 'crimson':
      return `border-royal-crimson/${opacityValue}`;
    case 'silver':
      return `border-gray-300/${opacityValue}`;
    case 'bronze':
      return `border-amber-600/${opacityValue}`;
    case 'red':
      return `border-red-500/${opacityValue}`;
    case 'blue':
      return `border-blue-500/${opacityValue}`;
    case 'green':
      return `border-green-500/${opacityValue}`;
    case 'purple':
      return `border-purple-500/${opacityValue}`;
    case 'navy':
      return `border-royal-navy/${opacityValue}`;
    default:
      return `border-white/${opacityValue}`;
  }
};
