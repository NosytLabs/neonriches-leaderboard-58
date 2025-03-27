import React from 'react';
import { Crown, Scroll, Feather, Map } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoyalDividerProps {
  variant?: 'line' | 'crown' | 'ornate' | 'scroll' | 'quill' | 'treasure';
  label?: string;
  className?: string;
  color?: 'royal' | 'gold' | 'crimson' | 'navy' | 'purple';
}

const RoyalDivider: React.FC<RoyalDividerProps> = ({
  variant = 'line',
  label,
  className,
  color = 'royal'
}) => {
  const colorMap = {
    royal: 'royal-gradient',
    gold: 'text-royal-gold',
    crimson: 'text-royal-crimson',
    navy: 'text-royal-navy',
    purple: 'text-royal-purple'
  };
  
  const getLineColor = () => {
    switch (color) {
      case 'gold': return 'border-royal-gold/30';
      case 'crimson': return 'border-royal-crimson/30';
      case 'navy': return 'border-royal-navy/30';
      case 'purple': return 'border-royal-purple/30';
      default: return 'border-white/20';
    }
  };

  const renderDivider = () => {
    switch (variant) {
      case 'crown':
        return (
          <div className={cn('flex items-center w-full my-6', className)}>
            <div className={cn('flex-grow border-t', getLineColor())}></div>
            <div className="flex items-center mx-4">
              {label && (
                <span className={cn("text-xs font-royal tracking-widest mx-2", colorMap[color])}>
                  {label}
                </span>
              )}
              <Crown className={cn("h-4 w-4", colorMap[color])} />
            </div>
            <div className={cn('flex-grow border-t', getLineColor())}></div>
          </div>
        );
        
      case 'scroll':
        return (
          <div className={cn('flex items-center w-full my-6', className)}>
            <div className={cn('flex-grow border-t', getLineColor())}></div>
            <div className="flex items-center mx-4">
              <Scroll className={cn("h-4 w-4 mr-2", colorMap[color])} />
              {label && (
                <span className={cn("text-xs font-royal tracking-widest", colorMap[color])}>
                  {label}
                </span>
              )}
            </div>
            <div className={cn('flex-grow border-t', getLineColor())}></div>
          </div>
        );
      
      case 'quill':
        return (
          <div className={cn('flex items-center w-full my-6 relative', className)}>
            <div className={cn('flex-grow border-t', getLineColor())}></div>
            <div className="flex items-center mx-4">
              <Feather className={cn("h-4 w-4 mr-2 animate-quill-write", colorMap[color])} />
              {label && (
                <span className={cn("text-xs font-royal tracking-widest", colorMap[color])}>
                  {label}
                </span>
              )}
            </div>
            <div className={cn('flex-grow border-t', getLineColor())}></div>
          </div>
        );
        
      case 'treasure':
        return (
          <div className={cn('flex items-center w-full my-6 relative', className)}>
            <div className={cn('flex-grow h-px', getLineColor())}></div>
            <div className="flex items-center mx-4 relative">
              <div className="absolute -inset-3 bg-royal-gold/10 rounded-full blur-md"></div>
              {label && (
                <span className={cn("text-xs font-royal tracking-widest px-3 relative z-10", colorMap[color])}>
                  {label}
                </span>
              )}
            </div>
            <div className={cn('flex-grow h-px', getLineColor())}></div>
            
            {/* Gold dust effect */}
            <div className="absolute left-1/4 -top-1 transform -translate-x-1/2">
              <div className={cn("h-2 w-2 rounded-full animate-sparkle", color === 'gold' ? 'bg-royal-gold/60' : color === 'crimson' ? 'bg-royal-crimson/60' : color === 'navy' ? 'bg-royal-navy/60' : color === 'purple' ? 'bg-royal-purple/60' : 'bg-white/40')}></div>
            </div>
            <div className="absolute right-1/4 -top-1 transform translate-x-1/2" style={{ animationDelay: '0.5s' }}>
              <div className={cn("h-2 w-2 rounded-full animate-sparkle", color === 'gold' ? 'bg-royal-gold/60' : color === 'crimson' ? 'bg-royal-crimson/60' : color === 'navy' ? 'bg-royal-navy/60' : color === 'purple' ? 'bg-royal-purple/60' : 'bg-white/40')}></div>
            </div>
          </div>
        );
        
      case 'ornate':
        return (
          <div className={cn('flex items-center w-full my-6 relative', className)}>
            <div className={cn('flex-grow h-px', getLineColor())}></div>
            <div className="flex items-center mx-3">
              {label && (
                <span className={cn("text-xs font-royal tracking-widest bg-background px-3 relative z-10", colorMap[color])}>
                  {label}
                </span>
              )}
            </div>
            <div className={cn('flex-grow h-px', getLineColor())}></div>
            
            {/* Ornate decorations */}
            <div className="absolute left-1/4 -top-1 transform -translate-x-1/2">
              <div className={cn("h-2 w-2 rotate-45", color === 'gold' ? 'bg-royal-gold/30' : color === 'crimson' ? 'bg-royal-crimson/30' : color === 'navy' ? 'bg-royal-navy/30' : color === 'purple' ? 'bg-royal-purple/30' : 'bg-white/20')}></div>
            </div>
            <div className="absolute right-1/4 -top-1 transform translate-x-1/2">
              <div className={cn("h-2 w-2 rotate-45", color === 'gold' ? 'bg-royal-gold/30' : color === 'crimson' ? 'bg-royal-crimson/30' : color === 'navy' ? 'bg-royal-navy/30' : color === 'purple' ? 'bg-royal-purple/30' : 'bg-white/20')}></div>
            </div>
          </div>
        );
        
      default: // line
        return (
          <div className={cn('flex items-center w-full my-6', className)}>
            <div className={cn('flex-grow border-t', getLineColor())}></div>
            {label && (
              <span className={cn("text-xs font-royal tracking-widest mx-4", colorMap[color])}>
                {label}
              </span>
            )}
            <div className={cn('flex-grow border-t', getLineColor())}></div>
          </div>
        );
    }
  };

  return renderDivider();
};

export default RoyalDivider;
