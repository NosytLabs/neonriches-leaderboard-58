
import React from 'react';
import { cn } from '@/lib/utils';
import { RoyalDividerVariant } from '@/types/user';
import { Crown, Sword, Shield, Scroll, Feather, Gem, Coins } from 'lucide-react';

interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  className?: string;
  color?: 'gold' | 'silver' | 'crimson' | 'navy' | 'royal';
  label?: string; // Added missing property
  animated?: boolean;
}

const RoyalDivider: React.FC<RoyalDividerProps> = ({
  variant = 'line',
  color = 'gold',
  className,
  label
}) => {
  // Map colors to Tailwind classes
  const colorClasses = {
    gold: 'text-royal-gold',
    silver: 'text-gray-300',
    crimson: 'text-royal-crimson',
    navy: 'text-royal-navy',
    royal: 'text-royal-gold', // Map 'royal' to gold for backward compatibility
  };
  
  const colorClass = colorClasses[color] || colorClasses.gold;
  
  // Base divider styles
  const baseStyles = cn(
    'flex items-center justify-center my-6',
    className
  );
  
  // Render different divider styles based on variant
  switch (variant) {
    case 'crown':
      return (
        <div className={baseStyles}>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <span className={cn("mx-4", colorClass)}>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="feather feather-crown"
            >
              <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
            </svg>
          </span>
          {label && (
            <span className={cn("mx-2 text-sm font-medieval", colorClass)}>
              {label}
            </span>
          )}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      );
      
    case 'sword':
      return (
        <div className={baseStyles}>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <span className={cn("mx-4 transform rotate-45", colorClass)}>⚔️</span>
          {label && (
            <span className={cn("mx-2 text-sm font-medieval", colorClass)}>
              {label}
            </span>
          )}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      );
      
    case 'shield':
      return (
        <div className={baseStyles}>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <span className={cn("mx-4", colorClass)}>🛡️</span>
          {label && (
            <span className={cn("mx-2 text-sm font-medieval", colorClass)}>
              {label}
            </span>
          )}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      );
      
    case 'scroll':
      return (
        <div className={baseStyles}>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <span className={cn("mx-4", colorClass)}>📜</span>
          {label && (
            <span className={cn("mx-2 text-sm font-medieval", colorClass)}>
              {label}
            </span>
          )}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      );
      
    case 'double':
      return (
        <div className={baseStyles}>
          <div className="w-full flex flex-col space-y-1">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          {label && (
            <span className={cn("mx-4 text-sm font-medieval", colorClass)}>
              {label}
            </span>
          )}
          <div className="w-full flex flex-col space-y-1">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>
      );
      
    case 'quill':
      return (
        <div className={baseStyles}>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <span className={cn("mx-4", colorClass)}>✒️</span>
          {label && (
            <span className={cn("mx-2 text-sm font-medieval", colorClass)}>
              {label}
            </span>
          )}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      );
      
    case 'treasure':
      return (
        <div className={baseStyles}>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <span className={cn("mx-4", colorClass)}>💰</span>
          {label && (
            <span className={cn("mx-2 text-sm font-medieval", colorClass)}>
              {label}
            </span>
          )}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      );
      
    case 'ornate':
      return (
        <div className={baseStyles}>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <span className={cn("mx-4", colorClass)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 6.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 7c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"/>
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
            </svg>
          </span>
          {label && (
            <span className={cn("mx-2 text-sm font-medieval", colorClass)}>
              {label}
            </span>
          )}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      );
      
    case 'line':
    default:
      return (
        <div className={baseStyles}>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          {label && (
            <span className={cn("mx-4 text-sm font-medieval px-2", colorClass)}>
              {label}
            </span>
          )}
        </div>
      );
  }
};

export default RoyalDivider;
