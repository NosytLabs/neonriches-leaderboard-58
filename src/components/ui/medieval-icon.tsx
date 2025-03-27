
import React from 'react';
import { cn } from '@/lib/utils';

export type MedievalIconName = 
  | 'crown' 
  | 'scroll' 
  | 'seal' 
  | 'coins' 
  | 'pattern'
  | 'sword'
  | 'parchment'
  | 'treasure'
  | 'chalice'
  | 'key'
  | 'shield'
  | 'quill'
  | 'torch';

interface MedievalIconProps {
  name: MedievalIconName;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  animate?: boolean;
  color?: 'gold' | 'crimson' | 'navy' | 'default' | 'bronze' | 'silver' | 'mahogany';
}

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  className,
  animate = false,
  color = 'default'
}) => {
  const sizesMap = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-24 h-24'
  };
  
  const animationClass = animate 
    ? name === 'crown' ? 'animate-crown-glow'
    : name === 'scroll' || name === 'parchment' ? 'animate-quill-write'
    : name === 'seal' ? 'animate-seal-stamp'
    : name === 'coins' || name === 'treasure' ? 'animate-coin-flip'
    : name === 'sword' ? 'animate-bounce-subtle'
    : name === 'quill' ? 'animate-quill-write'
    : name === 'torch' ? 'animate-flame-flicker'
    : ''
    : '';
  
  const colorFilter = 
    color === 'gold' ? 'brightness-110 sepia(0.3) hue-rotate(5deg) saturate(1.5)'
    : color === 'crimson' ? 'brightness-90 sepia(0.3) hue-rotate(300deg) saturate(1.5)'
    : color === 'navy' ? 'brightness-90 sepia(0.3) hue-rotate(180deg) saturate(1.5)'
    : color === 'bronze' ? 'brightness-90 sepia(0.3) hue-rotate(30deg) saturate(1.2)'
    : color === 'silver' ? 'brightness-110 saturate(0) hue-rotate(10deg)'
    : color === 'mahogany' ? 'brightness-90 sepia(0.4) hue-rotate(350deg) saturate(1.7)'
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
      case 'sword':
        return '/throne-assets/medieval-sword.svg';
      case 'parchment':
        return '/throne-assets/parchment-scroll.svg';
      case 'treasure':
        return '/throne-assets/treasure-chest.svg';
      case 'chalice':
        return '/throne-assets/chalice.svg';
      case 'key':
        return '/throne-assets/royal-key.svg';
      case 'shield':
        return '/throne-assets/shield-emblem.svg';
      case 'quill':
        return '/throne-assets/quill-pen.svg';
      case 'torch':
        return '/throne-assets/medieval-torch.svg';
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
