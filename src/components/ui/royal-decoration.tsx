
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  MedievalDecorationColor, 
  MedievalSize, 
  MedievalDecorationType, 
  getColorClass 
} from '@/types/ui/decorations/types';

interface RoyalDecorationProps {
  type?: string;
  color?: MedievalDecorationColor;
  size?: MedievalSize;
  className?: string;
  position?: string;
  animate?: boolean;
}

const RoyalDecoration: React.FC<RoyalDecorationProps> = ({
  type = 'top',
  color = 'gold',
  size = 'md',
  className = '',
  position,
  animate
}) => {
  const colorClass = getColorClass(color as MedievalDecorationColor);
  
  const sizeClasses = {
    xs: 'h-4 w-16',
    sm: 'h-6 w-24',
    md: 'h-8 w-32',
    lg: 'h-10 w-40',
    xl: 'h-12 w-48',
    '2xl': 'h-16 w-64'
  };
  
  const sizeClass = sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.md;
  
  const getDecorationPath = () => {
    if (type === 'top') {
      return (
        <path 
          d="M10,10 C30,5 70,5 90,10 L90,20 C70,15 30,15 10,20 Z" 
          className={colorClass}
          fill="currentColor"
        />
      );
    } else if (type === 'bottom') {
      return (
        <path 
          d="M10,20 C30,25 70,25 90,20 L90,10 C70,15 30,15 10,10 Z" 
          className={colorClass}
          fill="currentColor"
        />
      );
    } else {
      return (
        <rect 
          x="10" 
          y="10" 
          width="80" 
          height="10" 
          rx="2" 
          className={colorClass}
          fill="currentColor"
        />
      );
    }
  };
  
  return (
    <div className={cn("relative inline-block", className)}>
      <svg
        viewBox="0 0 100 30"
        className={cn(sizeClass, "mx-auto")}
        xmlns="http://www.w3.org/2000/svg"
      >
        {getDecorationPath()}
      </svg>
    </div>
  );
};

export default RoyalDecoration;
