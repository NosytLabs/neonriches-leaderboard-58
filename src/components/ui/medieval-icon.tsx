
import React from 'react';
import { cn } from '@/lib/utils';
import { MedievalIconName, MedievalIconColor, IconSize } from '@/types/ui/icon-types';

interface MedievalIconProps {
  name: MedievalIconName;
  size?: IconSize;
  color?: MedievalIconColor | string;
  className?: string;
  animated?: boolean;
  style?: 'default' | 'outline' | 'solid';
}

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  color = 'gold',
  className,
  animated = false,
  style = 'default'
}) => {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12',
    '2xl': 'w-16 h-16'
  };
  
  const colorClasses = {
    default: 'text-white',
    gold: 'text-royal-gold',
    royal: 'text-royal-purple',
    silver: 'text-gray-300',
    bronze: 'text-amber-700',
    red: 'text-red-500',
    blue: 'text-blue-500',
    green: 'text-green-500',
    purple: 'text-purple-500'
  };
  
  const styleClasses = {
    default: '',
    outline: 'stroke-[1.5] fill-none',
    solid: 'fill-current'
  };
  
  const animationClasses = animated ? 'transform transition-transform hover:scale-110' : '';
  
  return (
    <div className={cn(
      sizeClasses[size as keyof typeof sizeClasses],
      colorClasses[color as keyof typeof colorClasses] || colorClasses.gold,
      styleClasses[style],
      animationClasses,
      className
    )}>
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <use href={`/assets/medieval-icons.svg#${name}`} />
      </svg>
    </div>
  );
};

export default MedievalIcon;
