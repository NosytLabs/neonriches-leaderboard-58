
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface RoyalButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'royal' | 'royalGold' | 'royalPurple' | 'royalNavy' | 'royalCrimson';
  shimmer?: boolean;
  glow?: boolean;
  icon?: React.ReactNode;
}

const RoyalButton: React.FC<RoyalButtonProps> = ({
  variant = 'royal',
  shimmer = false,
  glow = false,
  icon,
  className,
  children,
  ...props
}) => {
  // Get classes based on the variant
  const getVariantClasses = () => {
    switch (variant) {
      case 'royalGold':
        return 'bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-500 hover:opacity-90 text-black';
      case 'royalPurple':
        return 'bg-gradient-to-r from-purple-700 via-purple-600 to-violet-600 hover:opacity-90 text-white';
      case 'royalNavy':
        return 'bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 hover:opacity-90 text-white';
      case 'royalCrimson':
        return 'bg-gradient-to-r from-red-800 via-red-700 to-red-600 hover:opacity-90 text-white';
      case 'royal':
      default:
        return 'bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy hover:opacity-90 text-white';
    }
  };
  
  // Construct the class string
  const buttonClasses = cn(
    getVariantClasses(),
    shimmer && 'royal-text-shimmer',
    glow && 'royal-shadow',
    className
  );
  
  return (
    <Button className={buttonClasses} {...props}>
      {icon}
      {children}
    </Button>
  );
};

export default RoyalButton;
