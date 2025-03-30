
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface RoyalButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: 'default' | 'royal' | 'gold' | 'emerald' | 'royalGold' | 'royalCrimson' | 'royalNavy' | 'royalPurple' | 'glass' | 'outline' | 'mahogany' | 'goldOutline' | 'crimsonOutline' | 'navyOutline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  glow?: boolean;
  shimmer?: boolean;
  icon?: React.ReactNode;
}

const RoyalButton: React.FC<RoyalButtonProps> = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  glow = false,
  shimmer = false,
  icon,
  ...props
}) => {
  const variantClasses = {
    default: 'bg-purple-600 hover:bg-purple-700 text-white',
    royal: 'bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-800 hover:to-indigo-900 text-white',
    gold: 'bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black font-medium',
    emerald: 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white',
    royalGold: 'bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-black font-medium',
    royalCrimson: 'bg-gradient-to-r from-red-700 to-rose-600 hover:from-red-800 hover:to-rose-700 text-white',
    royalNavy: 'bg-gradient-to-r from-blue-800 to-indigo-700 hover:from-blue-900 hover:to-indigo-800 text-white',
    royalPurple: 'bg-gradient-to-r from-purple-800 to-violet-700 hover:from-purple-900 hover:to-violet-800 text-white',
    glass: 'glass-morphism border-white/10 hover:bg-white/10 text-white',
    outline: 'bg-transparent border border-white/20 hover:bg-white/10 text-white',
    mahogany: 'bg-gradient-to-r from-red-900 to-amber-900 hover:from-red-950 hover:to-amber-950 text-white',
    goldOutline: 'bg-transparent border border-royal-gold/50 text-royal-gold hover:bg-royal-gold/10',
    crimsonOutline: 'bg-transparent border border-royal-crimson/50 text-royal-crimson hover:bg-royal-crimson/10',
    navyOutline: 'bg-transparent border border-royal-navy/50 text-royal-navy hover:bg-royal-navy/10'
  };

  const sizeButtonClasses = {
    default: 'py-2 px-4',
    sm: 'py-1 px-3 text-sm',
    lg: 'py-3 px-6 text-lg',
    icon: 'p-2'
  };

  const glowClass = glow ? 
    variant === 'gold' || variant === 'royalGold' ? 'shadow-glow-gold' : 
    variant === 'royal' || variant === 'royalPurple' ? 'shadow-glow-purple' :
    variant === 'royalCrimson' ? 'shadow-glow-crimson' :
    'shadow-glow-default' : '';

  const shimmerClass = shimmer ? 'royal-shimmer' : '';

  return (
    <Button
      className={cn(
        'font-medieval transition-all shadow-md flex items-center justify-center gap-2',
        variantClasses[variant],
        sizeButtonClasses[size],
        glowClass,
        shimmerClass,
        className
      )}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </Button>
  );
};

export default RoyalButton;
export type { RoyalButtonProps };
