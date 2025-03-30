
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ButtonProps } from '@/components/ui/button';

interface RoyalButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'default' | 'gold' | 'purple' | 'crimson' | 'royalGold' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  animated?: boolean;
}

const RoyalButton: React.FC<RoyalButtonProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  glow = false,
  animated = false,
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'gold':
        return 'bg-royal-gold text-black hover:bg-royal-gold/90' + (glow ? ' shadow-glow-gold' : '');
      case 'purple':
        return 'bg-royal-purple hover:bg-royal-purple/90' + (glow ? ' shadow-glow-purple' : '');
      case 'crimson':
        return 'bg-royal-crimson hover:bg-royal-crimson/90' + (glow ? ' shadow-glow-crimson' : '');
      default:
        return 'glass-morphism border-white/10 hover:bg-white/10';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1 text-sm';
      case 'lg':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2';
    }
  };

  const animationClass = animated ? 'animate-pulse' : '';

  // Map our component variants to the Button component variants
  const buttonVariant = 
    variant === 'gold' ? 'gold' : 
    variant === 'purple' ? 'purple' : 
    variant === 'crimson' ? 'crimson' :
    variant === 'royalGold' ? 'royalGold' :
    variant === 'default' ? 'default' : 'glass';

  return (
    <Button
      className={cn(
        getVariantClasses(),
        getSizeClasses(),
        animationClass,
        className
      )}
      variant={buttonVariant as ButtonProps['variant']}
      {...props}
    >
      {children}
    </Button>
  );
};

export default RoyalButton;
