
import React from 'react';
import { Crown, Sparkles, Shield } from 'lucide-react';

interface RoyalDividerProps {
  variant?: 'crown' | 'sparkles' | 'shield' | 'line';
  label?: string;
  className?: string;
}

const RoyalDivider = ({ 
  variant = 'crown',
  label,
  className = ''
}: RoyalDividerProps) => {
  const renderIcon = () => {
    switch (variant) {
      case 'crown':
        return <Crown size={24} className="text-royal-gold" />;
      case 'sparkles':
        return <Sparkles size={24} className="text-royal-gold" />;
      case 'shield':
        return <Shield size={24} className="text-royal-gold" />;
      default:
        return null;
    }
  };
  
  return (
    <div className={`flex items-center justify-center w-full my-8 ${className}`}>
      {variant === 'line' ? (
        <div className="w-full max-w-4xl mx-auto flex items-center">
          <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent flex-grow"></div>
          {label && (
            <span className="mx-4 text-white/50 text-sm font-royal uppercase tracking-wider px-4">{label}</span>
          )}
          <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent flex-grow"></div>
        </div>
      ) : (
        <div className="w-full max-w-4xl mx-auto flex items-center">
          <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent flex-grow"></div>
          <div className="relative mx-4 py-2">
            {renderIcon()}
            <div className="absolute -inset-2 bg-royal-gold/10 rounded-full blur-md -z-10"></div>
            {label && (
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-white/50 text-xs font-royal uppercase tracking-wider">{label}</span>
            )}
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent flex-grow"></div>
        </div>
      )}
    </div>
  );
};

export default RoyalDivider;
