
import React from 'react';
import { Crown, Scroll, Feather, Map, Trophy, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoyalDividerProps {
  variant?: 'line' | 'crown' | 'ornate' | 'scroll' | 'quill' | 'treasure' | 'trophy' | 'shield';
  label?: string;
  className?: string;
  color?: 'royal' | 'gold' | 'crimson' | 'navy' | 'purple';
  animate?: boolean;
}

const RoyalDivider: React.FC<RoyalDividerProps> = ({
  variant = 'line',
  label,
  className,
  color = 'royal',
  animate = false
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

  const getIcon = () => {
    switch (variant) {
      case 'crown':
        return <Crown className={cn("h-5 w-5", colorMap[color], animate && "animate-crown-glow")} />;
      case 'scroll':
        return <Scroll className={cn("h-5 w-5", colorMap[color], animate && "animate-quill-write")} />;
      case 'quill':
        return <Feather className={cn("h-5 w-5", colorMap[color], animate && "animate-quill-write")} />;
      case 'treasure':
        return <Map className={cn("h-5 w-5", colorMap[color], animate && "animate-sparkle")} />;
      case 'trophy':
        return <Trophy className={cn("h-5 w-5", colorMap[color], animate && "animate-sparkle")} />;
      case 'shield':
        return <Shield className={cn("h-5 w-5", colorMap[color], animate && "animate-bounce-subtle")} />;
      default:
        return null;
    }
  };

  return (
    <div className={cn('flex items-center w-full my-8', className)}>
      <div className={cn('flex-grow h-px', getLineColor())}></div>
      
      {variant !== 'line' && (
        <div className="flex items-center mx-4 relative">
          <div className="absolute -inset-3 bg-royal-gold/10 rounded-full blur-md"></div>
          {getIcon()}
          {label && (
            <span className={cn("text-xs font-medieval tracking-widest mx-3 uppercase", colorMap[color])}>
              {label}
            </span>
          )}
        </div>
      )}
      
      {variant === 'line' && label && (
        <div className="mx-4">
          <span className={cn("text-xs font-medieval tracking-widest px-4 py-1 rounded-full bg-foreground/5", colorMap[color])}>
            {label}
          </span>
        </div>
      )}
      
      <div className={cn('flex-grow h-px', getLineColor())}></div>
      
      {/* Gold dust effect */}
      {animate && (
        <>
          <div className="absolute left-1/4 -top-1 transform -translate-x-1/2">
            <div className={cn("h-2 w-2 rounded-full animate-sparkle", 
              color === 'gold' ? 'bg-royal-gold/60' : 
              color === 'crimson' ? 'bg-royal-crimson/60' : 
              color === 'navy' ? 'bg-royal-navy/60' : 
              color === 'purple' ? 'bg-royal-purple/60' : 'bg-white/40')}>
            </div>
          </div>
          <div className="absolute right-1/4 -top-1 transform translate-x-1/2" style={{ animationDelay: '0.5s' }}>
            <div className={cn("h-2 w-2 rounded-full animate-sparkle", 
              color === 'gold' ? 'bg-royal-gold/60' : 
              color === 'crimson' ? 'bg-royal-crimson/60' : 
              color === 'navy' ? 'bg-royal-navy/60' : 
              color === 'purple' ? 'bg-royal-purple/60' : 'bg-white/40')}>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RoyalDivider;
