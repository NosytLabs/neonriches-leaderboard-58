
import React from 'react';
import { MedievalIconProps } from '@/types/ui/icon-types';

const MedievalIcon: React.FC<MedievalIconProps> = ({ 
  name, 
  size = 'md', 
  color = 'default',
  className = '',
  animated = false
}) => {
  // Size mappings to Tailwind classes
  const sizeMap = {
    'xs': 'h-4 w-4',
    'sm': 'h-5 w-5',
    'md': 'h-6 w-6',
    'lg': 'h-8 w-8',
    'xl': 'h-10 w-10',
    '2xl': 'h-12 w-12'
  };
  
  // Color mappings to Tailwind classes
  const colorMap = {
    'default': 'text-foreground',
    'primary': 'text-primary',
    'secondary': 'text-secondary',
    'gold': 'text-royal-gold',
    'red': 'text-red-500',
    'blue': 'text-blue-500',
    'green': 'text-green-500',
    'purple': 'text-purple-500'
  };
  
  // Map icon names to SVG paths
  const getIconPath = () => {
    switch (name) {
      case 'crown':
        return 'M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4zm0 4l-4 2v3c0 3.16 1.8 6.12 4 7.26 2.2-1.14 4-4.1 4-7.26V7l-4-2z';
      case 'scepter':
        return 'M18 3v2H6V3h12zM4 7h16v2H4V7zm-2 4h20v2H2v-2zm2 4h16v2H4v-2zm2 4h12v2H6v-2z';
      case 'scroll':
        return 'M17 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H7V5h10v14z';
      case 'shield':
        return 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z';
      case 'sword':
        return 'M14.5 17.5L3 6V3h3l11.5 11.5-3 3z';
      case 'helmet':
        return 'M12 2L2 7v8a11 11 0 0 0 20 0V7l-10-5zm0 2.6l7 3.5v5.1a8 8 0 0 1-14 0V8.1l7-3.5z';
      case 'castle':
        return 'M6 22v-4H4V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11h2V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11h-2v4h6v-2H4v2h2z';
      case 'dragon':
        return 'M20 5l-5 3-3-5 6-1 2 3zm-7 2l2 4-4-1 2-3zM4 19l4-3-2-4-4 5 2 2z';
      case 'knight':
        return 'M12 2L9 5h6l-3-3zm-5 5v2h10V7H7zm0 4v8h10v-8H7zm5 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z';
      case 'throne':
        return 'M5 21h14v-2H5v2zm7-11.89l7 3.11V10l-7-4-7 4v2.22l7-3.11zM5 17h14V9H5v8z';
      default:
        return 'M12 2L2 7v10l10 5 10-5V7L12 2z'; // Default shield/emblem shape
    }
  };
  
  // Animation class based on the animated prop
  const animationClass = animated ? 'animate-pulse' : '';
  
  // Get size and color classes
  const sizeClass = sizeMap[size] || sizeMap.md;
  const colorClass = colorMap[color as keyof typeof colorMap] || colorMap.default;
  
  return (
    <svg 
      className={`${sizeClass} ${colorClass} ${animationClass} ${className}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={getIconPath()} />
    </svg>
  );
};

export default MedievalIcon;
