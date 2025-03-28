
import React from 'react';
import { Button, ButtonProps } from './button';
import { cn } from '@/lib/utils';

type RoyalButtonVariant = 
  | 'default' 
  | 'destructive' 
  | 'outline' 
  | 'secondary' 
  | 'ghost' 
  | 'link' 
  | 'royal' 
  | 'royalGold' 
  | 'royalPurple' 
  | 'royalCrimson' 
  | 'royalNavy' 
  | 'royalVelvet' 
  | 'glass' 
  | 'goldOutline' 
  | 'crimsonOutline' 
  | 'navyOutline'
  | 'mahogany';

interface RoyalButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: RoyalButtonVariant;
  shimmer?: boolean;
  glow?: boolean;
  icon?: React.ReactNode;
}

const RoyalButton: React.FC<RoyalButtonProps> = ({ 
  children, 
  variant = 'default',
  className,
  shimmer = false,
  glow = false,
  icon,
  ...props 
}) => {
  const getButtonClass = () => {
    switch (variant) {
      case 'royalGold':
        return 'bg-gradient-to-r from-royal-gold/80 to-amber-500/80 hover:from-royal-gold hover:to-amber-500 text-black border-royal-gold/50';
      case 'royalPurple':
        return 'bg-gradient-to-r from-royal-purple/80 to-purple-500/80 hover:from-royal-purple hover:to-purple-500 text-white border-royal-purple/50';
      case 'royalCrimson':
        return 'bg-gradient-to-r from-royal-crimson/80 to-red-500/80 hover:from-royal-crimson hover:to-red-500 text-white border-royal-crimson/50';
      case 'royalNavy':
        return 'bg-gradient-to-r from-royal-navy/80 to-blue-500/80 hover:from-royal-navy hover:to-blue-500 text-white border-royal-navy/50';
      case 'royalVelvet':
        return 'bg-gradient-to-r from-purple-900/80 to-purple-600/80 hover:from-purple-900 hover:to-purple-600 text-white border-purple-800/50';
      case 'royal':
        return 'bg-gradient-to-r from-royal-purple/80 to-royal-gold/80 hover:from-royal-purple hover:to-royal-gold text-white border-royal-purple/30';
      case 'glass':
        return 'glass-morphism border-white/10 hover:bg-white/10 text-white';
      case 'mahogany':
        return 'bg-gradient-to-r from-amber-900/80 to-red-900/80 hover:from-amber-900 hover:to-red-900 text-white border-amber-800/50';
      case 'goldOutline':
        return 'bg-transparent border-royal-gold/50 text-royal-gold hover:bg-royal-gold/10';
      case 'crimsonOutline':
        return 'bg-transparent border-royal-crimson/50 text-royal-crimson hover:bg-royal-crimson/10';
      case 'navyOutline':
        return 'bg-transparent border-royal-navy/50 text-royal-navy hover:bg-royal-navy/10';
      default:
        return '';
    }
  };

  const shimmerClass = shimmer ? 'royal-text-shimmer' : '';
  const glowClass = glow ? 'royal-shine' : '';
  
  // Cast variant to ButtonProps['variant'] to avoid TypeScript error
  const buttonVariant = ['royalGold', 'royalPurple', 'royalCrimson', 'royalNavy', 'royal', 'glass', 'mahogany', 'royalVelvet', 'goldOutline', 'crimsonOutline', 'navyOutline'].includes(variant) 
    ? 'default' 
    : (variant as ButtonProps['variant']);
  
  return (
    <Button
      variant={buttonVariant}
      className={cn(getButtonClass(), shimmerClass, glowClass, className)}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Button>
  );
};

export default RoyalButton;
