
import React from 'react';
import { Crown, Sparkles, Shield, Trophy } from 'lucide-react';

interface RoyalDividerProps {
  variant?: 'crown' | 'sparkles' | 'shield' | 'trophy' | 'line';
  label?: string;
  className?: string;
  color?: 'purple' | 'gold' | 'blue' | 'default';
}

const RoyalDivider = ({ 
  variant = 'crown',
  label,
  className = '',
  color = 'default'
}: RoyalDividerProps) => {
  const getColorClass = () => {
    switch (color) {
      case 'purple': return 'from-purple-500/30 via-purple-500/50 to-purple-500/30';
      case 'gold': return 'from-amber-500/30 via-amber-500/50 to-amber-500/30';
      case 'blue': return 'from-blue-500/30 via-blue-500/50 to-blue-500/30';
      default: return 'from-transparent via-amber-500/40 to-transparent';
    }
  };
  
  const getIconColor = () => {
    switch (color) {
      case 'purple': return 'text-purple-500';
      case 'gold': return 'text-amber-500';
      case 'blue': return 'text-blue-500';
      default: return 'text-amber-500';
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
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/10 via-amber-500/10 to-blue-500/10 rounded-full blur-md -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
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
