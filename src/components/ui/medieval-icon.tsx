
import React from 'react';
import { MedievalIconProps, iconSizeMap, iconColorMap } from '@/types/ui/icon-types';
import { cn } from '@/lib/utils';

const MedievalIcon: React.FC<MedievalIconProps> = ({ 
  name, 
  size = 'md', 
  color = 'default',
  className = '',
  animated = false
}) => {
  // Size mappings to Tailwind classes
  const sizeClass = typeof size === 'number' 
    ? `h-${size} w-${size}` 
    : (iconSizeMap[size] || iconSizeMap.md);
  
  // Color mappings to Tailwind classes
  const colorClass = iconColorMap[color as keyof typeof iconColorMap] || color;
  
  // Animation class based on the animated prop
  const animationClass = animated ? 'animate-pulse' : '';
  
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
      case 'coins':
        return 'M15 9c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-1-6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-8 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm8 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z';
      case 'coin':
        return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z';
      case 'chalice':
        return 'M10 1h4v2h2v3l-1 1v12h-6V7l-1-1V3h2V1zm1 5v10h2V6h-2z';
      case 'flag':
        return 'M4 2v20h2v-7h14l-2-5 2-5H6V2H4zm4 4h10l-1 3 1 3H8V6z';
      case 'tower':
        return 'M12 1L2 7v2h20V7L12 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM4 11h4v12H4V11zm6 0h4v12h-4V11zm6 0h4v12h-4V11z';
      case 'banner':
        return 'M4 3h16c0 4-3.33 5.33-5 6-.67 0-1-.33-1-1V7H10v1c0 .67-.33 1-1 1-1.67-.67-5-2-5-6zm0 13v4h16v-4l-8-3-8 3z';
      case 'treasure-chest':
        return 'M4 4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4zm0 2h16v4H4V6zm0 6h16v6H4v-6zm4 2v2h8v-2H8z';
      case 'key':
        return 'M7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.6-4c-.8-2.3-3-4-5.6-4-3.3 0-6 2.7-6 6s2.7 6 6 6c2.6 0 4.8-1.7 5.6-4H16v4h4v-4h4v-4H12.6z';
      default:
        return 'M12 2L2 7v10l10 5 10-5V7L12 2z'; // Default shield/emblem shape
    }
  };
  
  return (
    <svg 
      className={cn(sizeClass, colorClass, animationClass, className)}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={getIconPath()} />
    </svg>
  );
};

export default MedievalIcon;
