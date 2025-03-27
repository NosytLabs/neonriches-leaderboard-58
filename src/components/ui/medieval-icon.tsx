
import React from 'react';
import { cn } from '@/lib/utils';

export type MedievalIconName = 
  | 'crown' 
  | 'scroll' 
  | 'seal' 
  | 'coins' 
  | 'pattern';

interface MedievalIconProps {
  name: MedievalIconName;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animate?: boolean;
  color?: 'gold' | 'crimson' | 'navy' | 'default';
}

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  className,
  animate = false,
  color = 'default'
}) => {
  const sizesMap = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };
  
  const animationClass = animate 
    ? name === 'crown' ? 'animate-crown-glow'
    : name === 'scroll' ? 'animate-quill-write'
    : name === 'seal' ? 'animate-seal-stamp'
    : name === 'coins' ? 'animate-coin-flip'
    : ''
    : '';
  
  const colorFilter = 
    color === 'gold' ? 'brightness-110 sepia(0.3) hue-rotate(5deg) saturate(1.5)'
    : color === 'crimson' ? 'brightness-90 sepia(0.3) hue-rotate(300deg) saturate(1.5)'
    : color === 'navy' ? 'brightness-90 sepia(0.3) hue-rotate(180deg) saturate(1.5)'
    : '';
    
  const getIconPath = (): string => {
    switch (name) {
      case 'crown':
        return '/throne-assets/crown-icon.svg';
      case 'scroll':
        return '/throne-assets/scroll-icon.svg';
      case 'seal':
        return '/throne-assets/royal-seal.svg';
      case 'coins':
        return '/throne-assets/coin-stack.svg';
      case 'pattern':
        return '/throne-assets/medieval-patterns.svg';
      default:
        return '/throne-assets/crown-icon.svg';
    }
  };

  return (
    <div className={cn(
      sizesMap[size],
      animationClass,
      colorFilter,
      'relative inline-block',
      className
    )}>
      <img 
        src={getIconPath()} 
        alt={`${name} icon`} 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default MedievalIcon;
