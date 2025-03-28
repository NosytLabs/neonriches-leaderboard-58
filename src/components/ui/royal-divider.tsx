
import React from 'react';
import { cn } from '@/lib/utils';
import { Crown, Scroll, Shield, Swords } from 'lucide-react';

type DividerVariant = 'line' | 'ornate' | 'double' | 'dotted' | 'scrollwork' | 'crown' | 'scroll' | 'quill' | 'treasure';
type DividerColor = 'gold' | 'crimson' | 'navy' | 'purple' | 'royal';
type DividerIcon = 'crown' | 'scroll' | 'shield' | 'swords' | 'none';

interface RoyalDividerProps {
  variant?: DividerVariant;
  color?: DividerColor;
  label?: string;
  icon?: DividerIcon;
  className?: string;
}

const RoyalDivider: React.FC<RoyalDividerProps> = ({
  variant = 'line',
  color = 'gold',
  label,
  icon = 'none',
  className
}) => {
  // Color classes
  const colorMap: Record<DividerColor, string> = {
    gold: 'from-transparent via-royal-gold/30 to-transparent',
    crimson: 'from-transparent via-royal-crimson/30 to-transparent',
    navy: 'from-transparent via-royal-navy/30 to-transparent',
    purple: 'from-transparent via-royal-purple/30 to-transparent',
    royal: 'from-royal-gold/10 via-royal-purple/30 to-royal-gold/10'
  };

  // Icon components
  const IconComponent = () => {
    switch (icon) {
      case 'crown':
        return <Crown className="h-4 w-4" />;
      case 'scroll':
        return <Scroll className="h-4 w-4" />;
      case 'shield':
        return <Shield className="h-4 w-4" />;
      case 'swords':
        return <Swords className="h-4 w-4" />;
      default:
        return null;
    }
  };

  // Variant styles
  const getVariantClass = () => {
    switch (variant) {
      case 'ornate':
        return `h-[3px] bg-gradient-to-r ${colorMap[color]} relative before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-${color === 'royal' ? 'royal-gold' : `royal-${color}`}/50 before:-top-[3px] before:left-1/4 after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full after:bg-${color === 'royal' ? 'royal-gold' : `royal-${color}`}/50 after:-top-[3px] after:right-1/4`;
      case 'double':
        return `h-[5px] bg-transparent border-t border-b border-${color === 'royal' ? 'royal-gold' : `royal-${color}`}/30`;
      case 'dotted':
        return `h-[1px] border-dotted border-t-2 border-${color === 'royal' ? 'royal-gold' : `royal-${color}`}/30`;
      case 'scrollwork':
        return `h-[1px] bg-gradient-to-r ${colorMap[color]} relative before:content-['❧'] before:absolute before:text-${color === 'royal' ? 'royal-gold' : `royal-${color}`} before:-top-[10px] before:left-1/4 before:text-sm after:content-['❧'] after:absolute after:text-${color === 'royal' ? 'royal-gold' : `royal-${color}`} after:-top-[10px] after:right-1/4 after:transform after:scale-x-[-1] after:text-sm`;
      case 'crown':
        return `h-[1px] bg-gradient-to-r ${colorMap[color]} relative before:content-['👑'] before:absolute before:text-${color === 'royal' ? 'royal-gold' : `royal-${color}`} before:-top-[10px] before:left-1/2 before:transform before:-translate-x-1/2 before:text-sm`;
      case 'scroll':
        return `h-[1px] bg-gradient-to-r ${colorMap[color]} relative before:content-['📜'] before:absolute before:text-${color === 'royal' ? 'royal-gold' : `royal-${color}`} before:-top-[10px] before:left-1/2 before:transform before:-translate-x-1/2 before:text-sm`;
      case 'quill':
        return `h-[1px] bg-gradient-to-r ${colorMap[color]} relative before:content-['✒️'] before:absolute before:text-${color === 'royal' ? 'royal-gold' : `royal-${color}`} before:-top-[10px] before:left-1/2 before:transform before:-translate-x-1/2 before:text-sm`;
      case 'treasure':
        return `h-[1px] bg-gradient-to-r ${colorMap[color]} relative before:content-['💰'] before:absolute before:text-${color === 'royal' ? 'royal-gold' : `royal-${color}`} before:-top-[10px] before:left-1/2 before:transform before:-translate-x-1/2 before:text-sm`;
      case 'line':
      default:
        return `h-[1px] bg-gradient-to-r ${colorMap[color]}`;
    }
  };

  return (
    <div className={cn("w-full flex items-center gap-3", className)}>
      <div className={cn("flex-grow", getVariantClass())} />
      
      {label && (
        <div className={cn(
          "px-3 flex items-center gap-2 whitespace-nowrap text-xs uppercase tracking-wider font-medium",
          `text-${color === 'royal' ? 'royal-gold' : `royal-${color}`}`
        )}>
          {icon !== 'none' && (
            <span className={`text-${color === 'royal' ? 'royal-gold' : `royal-${color}`}`}>
              <IconComponent />
            </span>
          )}
          {label}
        </div>
      )}
      
      <div className={cn("flex-grow", getVariantClass())} />
    </div>
  );
};

export default RoyalDivider;
