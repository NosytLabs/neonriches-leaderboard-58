
import React from 'react';
import { Crown as LucideCrown } from 'lucide-react';
import { iconSizeMap, iconColorMap } from '@/types/ui/icon-types';
import { cn } from '@/lib/utils';

interface CrownProps {
  className?: string;
  size?: string | number;
  color?: string;
}

const Crown: React.FC<CrownProps> = ({ className = "", size = "md", color = "default" }) => {
  // Get appropriate size class
  const sizeClass = typeof size === 'string' 
    ? (size in iconSizeMap ? iconSizeMap[size as keyof typeof iconSizeMap] : iconSizeMap.md)
    : `h-${size} w-${size}`;
  
  // Get appropriate color class
  const colorClass = typeof color === 'string' && color in iconColorMap 
    ? iconColorMap[color as keyof typeof iconColorMap] 
    : 'text-current';
  
  return <LucideCrown className={cn(sizeClass, colorClass, className)} />;
};

export default Crown;
