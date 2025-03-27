
import React from 'react';
import { Crown, Sparkles, Shield, Trophy } from 'lucide-react';

interface RoyalDividerProps {
  variant?: 'crown' | 'sparkles' | 'shield' | 'trophy' | 'line';
  label?: string;
  className?: string;
  color?: 'crimson' | 'gold' | 'navy' | 'default' | 'royal';
}

const RoyalDivider = ({ 
  variant = 'crown',
  label,
  className = '',
  color = 'default'
}: RoyalDividerProps) => {
  const getColorClass = () => {
    switch (color) {
      case 'crimson': return 'from-royal-crimson/30 via-royal-crimson/50 to-royal-crimson/30';
      case 'gold': return 'from-royal-gold/30 via-royal-gold/50 to-royal-gold/30';
      case 'navy': return 'from-royal-navy/30 via-royal-navy/50 to-royal-navy/30';
      case 'royal': return 'from-royal-crimson/30 via-royal-gold/50 to-royal-navy/30';
      default: return 'from-transparent via-royal-gold/40 to-transparent';
    }
  };
  
  const getIconColor = () => {
    switch (color) {
      case 'crimson': return 'text-royal-crimson';
      case 'gold': return 'text-royal-gold';
      case 'navy': return 'text-royal-navy';
      case 'royal': return 'text-royal-gold';
      default: return 'text-royal-gold';
    }
  };
  
  const renderIcon = () => {
    const iconColorClass = getIconColor();
    
    switch (variant) {
      case 'crown':
        return <Crown size={28} className={`${iconColorClass} animate-crown-glow`} />;
      case 'sparkles':
        return <Sparkles size={28} className={`${iconColorClass} animate-pulse-slow`} />;
      case 'shield':
        return <Shield size={28} className={iconColorClass} />;
      case 'trophy':
        return <Trophy size={28} className={iconColorClass} />;
      default:
        return null;
    }
  };
  
  const gradientClass = getColorClass();
  
  return (
    <div className={`flex items-center justify-center w-full my-10 ${className}`}>
      {variant === 'line' ? (
        <div className="w-full max-w-4xl mx-auto flex items-center">
          <div className={`h-px bg-gradient-to-r ${gradientClass} flex-grow`}></div>
          {label && (
            <span className="mx-6 text-white/60 text-sm font-royal uppercase tracking-wider px-4">{label}</span>
          )}
          <div className={`h-px bg-gradient-to-r ${gradientClass} flex-grow`}></div>
        </div>
      ) : (
        <div className="w-full max-w-4xl mx-auto flex items-center">
          <div className={`h-px bg-gradient-to-r ${gradientClass} flex-grow`}></div>
          <div className="relative mx-5 py-3 group">
            <div className="transition-all duration-300 ease-in-out group-hover:scale-110 royal-sparkle">
              {renderIcon()}
            </div>
            <div className="absolute -inset-3 bg-gradient-to-r from-royal-crimson/10 via-royal-gold/10 to-royal-navy/10 rounded-full blur-md -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            {label && (
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-white/60 text-xs font-royal uppercase tracking-wider">{label}</span>
            )}
          </div>
          <div className={`h-px bg-gradient-to-r ${gradientClass} flex-grow`}></div>
        </div>
      )}
    </div>
  );
};

export default RoyalDivider;
