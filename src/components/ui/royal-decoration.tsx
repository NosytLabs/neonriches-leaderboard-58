
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from './medieval-icon';

type DecorationVariant = 
  | 'corner-flourish'
  | 'border-pattern'
  | 'royal-banner'
  | 'coat-of-arms'
  | 'crossed-swords'
  | 'royal-insignia';

type DecorationPosition = 
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center'
  | 'left-center'
  | 'right-center';

interface RoyalDecorationProps {
  variant: DecorationVariant;
  position?: DecorationPosition;
  color?: 'gold' | 'crimson' | 'navy' | 'default' | 'bronze' | 'silver';
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
  className?: string;
}

const RoyalDecoration: React.FC<RoyalDecorationProps> = ({
  variant,
  position = 'top-left',
  color = 'gold',
  size = 'md',
  animate = false,
  className
}) => {
  const positionClasses = {
    'top-left': 'absolute top-0 left-0',
    'top-right': 'absolute top-0 right-0',
    'bottom-left': 'absolute bottom-0 left-0',
    'bottom-right': 'absolute bottom-0 right-0',
    'top-center': 'absolute top-0 left-1/2 -translate-x-1/2',
    'bottom-center': 'absolute bottom-0 left-1/2 -translate-x-1/2',
    'left-center': 'absolute left-0 top-1/2 -translate-y-1/2',
    'right-center': 'absolute right-0 top-1/2 -translate-y-1/2',
  };

  // Define a mapping from decoration sizes to icon sizes
  const sizeToIconSizeMap: Record<string, MedievalIcon['size']> = {
    'sm': 'sm',
    'md': 'md',
    'lg': 'lg'
  };

  const sizeClasses = {
    sm: {
      container: 'w-12 h-12',
      icon: sizeToIconSizeMap['sm'],
      border: 'w-8 h-8'
    },
    md: {
      container: 'w-16 h-16',
      icon: sizeToIconSizeMap['md'],
      border: 'w-12 h-12'
    },
    lg: {
      container: 'w-24 h-24',
      icon: sizeToIconSizeMap['lg'],
      border: 'w-16 h-16'
    }
  };

  const renderDecoration = () => {
    switch (variant) {
      case 'corner-flourish':
        return (
          <div className={cn(
            'relative',
            sizeClasses[size].container,
            className
          )}>
            <div className={cn(
              'absolute border-t-2 border-l-2',
              sizeClasses[size].border,
              color === 'gold' ? 'border-royal-gold/70' : 
              color === 'crimson' ? 'border-royal-crimson/70' :
              color === 'navy' ? 'border-royal-navy/70' :
              color === 'bronze' ? 'border-amber-700/70' :
              color === 'silver' ? 'border-gray-400/70' :
              'border-white/40'
            )}></div>
            <div className={cn(
              'absolute',
              sizeClasses[size].container,
              animate ? 'animate-pulse-slow' : ''
            )} style={{ transform: 'rotate(-45deg)', opacity: 0.2 }}>
              <MedievalIcon name="pattern" size={sizeClasses[size].icon} color={color} />
            </div>
          </div>
        );
        
      case 'border-pattern':
        return (
          <div className={cn(
            'relative',
            sizeClasses[size].container,
            className
          )}>
            <div className={cn(
              'absolute inset-0 opacity-20',
              animate ? 'animate-spin-slow' : ''
            )}>
              <MedievalIcon name="pattern" size={sizeClasses[size].icon} color={color} />
            </div>
          </div>
        );
        
      case 'royal-banner':
        return (
          <div className={cn(
            'relative flex items-center justify-center',
            sizeClasses[size].container,
            className
          )}>
            <div className={cn(
              'absolute w-full h-1/3',
              color === 'gold' ? 'bg-royal-gold/30' : 
              color === 'crimson' ? 'bg-royal-crimson/30' :
              color === 'navy' ? 'bg-royal-navy/30' :
              color === 'bronze' ? 'bg-amber-700/30' :
              color === 'silver' ? 'bg-gray-400/30' :
              'bg-white/20'
            )}>
              {animate && (
                <div className="absolute inset-0 royal-shine"></div>
              )}
            </div>
            <div className="absolute z-10">
              <MedievalIcon 
                name={color === 'gold' ? 'crown' : 
                     color === 'crimson' ? 'sword' :
                     color === 'navy' ? 'shield' :
                     'seal'
                } 
                size="sm" 
                color={color} 
                animate={animate} 
              />
            </div>
          </div>
        );
        
      case 'coat-of-arms':
        return (
          <div className={cn(
            'relative',
            sizeClasses[size].container,
            className
          )}>
            <MedievalIcon name="shield" size={sizeClasses[size].icon} color={color} animate={animate} />
          </div>
        );
        
      case 'crossed-swords':
        return (
          <div className={cn(
            'relative',
            sizeClasses[size].container,
            className
          )}>
            <div className="absolute transform -rotate-45">
              <MedievalIcon name="sword" size={sizeClasses[size].icon} color={color} animate={animate} />
            </div>
            <div className="absolute transform rotate-45">
              <MedievalIcon name="sword" size={sizeClasses[size].icon} color={color} animate={animate} />
            </div>
          </div>
        );
        
      case 'royal-insignia':
        return (
          <div className={cn(
            'relative',
            sizeClasses[size].container,
            className
          )}>
            <div className="absolute inset-0 flex items-center justify-center">
              <MedievalIcon name="crown" size={sizeClasses[size].icon} color={color} animate={animate} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className={cn(
                'absolute rounded-full',
                sizeClasses[size].border,
                color === 'gold' ? 'border-royal-gold' : 
                color === 'crimson' ? 'border-royal-crimson' :
                color === 'navy' ? 'border-royal-navy' :
                color === 'bronze' ? 'border-amber-700' :
                color === 'silver' ? 'border-gray-400' :
                'border-white/40',
                'border-2'
              )}></div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={cn(positionClasses[position], 'pointer-events-none')}>
      {renderDecoration()}
    </div>
  );
};

export default RoyalDecoration;
