
import React from 'react';
import { Crown, Star, Shield, GemIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoyalDividerProps {
  variant?: 'line' | 'crown' | 'stars' | 'shield';
  label?: string;
  color?: 'gold' | 'crimson' | 'navy' | 'royal';
  className?: string;
}

const RoyalDivider: React.FC<RoyalDividerProps> = ({
  variant = 'line',
  label,
  color = 'gold',
  className
}) => {
  // Define color classes
  const colorClasses = {
    gold: 'text-royal-gold border-royal-gold/30',
    crimson: 'text-royal-crimson border-royal-crimson/30',
    navy: 'text-royal-navy border-royal-navy/30',
    royal: 'royal-gradient border-white/20'
  };
  
  // Get the icon based on variant
  const getIconComponent = () => {
    switch (variant) {
      case 'crown':
        return <Crown size={18} className={color === 'royal' ? 'text-royal-gold' : ''} />;
      case 'stars':
        return <Star size={18} className={color === 'royal' ? 'text-royal-gold' : ''} />;
      case 'shield':
        return <Shield size={18} className={color === 'royal' ? 'text-royal-gold' : ''} />;
      default:
        return null;
    }
  };
  
  return (
    <div className={cn('royal-divider', className)}>
      <div className={`h-px flex-grow ${colorClasses[color].split(' ')[1]}`}></div>
      {(label || variant !== 'line') && (
        <div className={`flex items-center px-3 font-royal text-xs ${colorClasses[color].split(' ')[0]}`}>
          {variant !== 'line' && getIconComponent()}
          {label && <span className={variant !== 'line' ? 'ml-2' : ''}>{label}</span>}
        </div>
      )}
      <div className={`h-px flex-grow ${colorClasses[color].split(' ')[1]}`}></div>
    </div>
  );
};

export default RoyalDivider;
