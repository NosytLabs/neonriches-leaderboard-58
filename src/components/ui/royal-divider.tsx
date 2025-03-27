
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
      case 'purple': return 'from-royal-purple/30 via-royal-purple/50 to-royal-purple/30';
      case 'gold': return 'from-royal-gold/30 via-royal-gold/50 to-royal-gold/30';
      case 'blue': return 'from-royal-blue/30 via-royal-blue/50 to-royal-blue/30';
      default: return 'from-transparent via-royal-gold/40 to-transparent';
    }
  };
  
  const getIconColor = () => {
    switch (color) {
      case 'purple': return 'text-royal-purple';
      case 'gold': return 'text-royal-gold';
      case 'blue': return 'text-royal-blue';
      default: return 'text-royal-gold';
    }
  };
  
  const renderIcon = () => {
    const iconColorClass = getIconColor();
    
    switch (variant) {
      case 'crown':
        return <Crown size={28} className={iconColorClass} />;
      case 'sparkles':
        return <Sparkles size={28} className={iconColorClass} />;
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
            <div className="transition-all duration-300 ease-in-out group-hover:scale-110">
              {renderIcon()}
            </div>
            <div className="absolute -inset-3 bg-royal-gold/10 rounded-full blur-md -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
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
