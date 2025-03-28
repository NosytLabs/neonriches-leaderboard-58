
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { RoyalButtonVariant } from '@/types/user';

interface RoyalButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: RoyalButtonVariant;
  shimmer?: boolean;
  glow?: boolean;
  icon?: React.ReactNode;
  href?: string;
}

const RoyalButton: React.FC<RoyalButtonProps> = ({
  variant = 'royal',
  shimmer = false,
  glow = false,
  icon,
  className,
  children,
  href,
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
      case 'glass':
        return 'bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-black/30 text-white';
      case 'outline':
        return 'bg-transparent border border-white/20 hover:bg-white/10 text-white';
      case 'goldOutline':
        return 'bg-transparent border border-royal-gold/40 hover:bg-royal-gold/10 text-royal-gold';
      case 'crimsonOutline':
        return 'bg-transparent border border-royal-crimson/40 hover:bg-royal-crimson/10 text-royal-crimson';
      case 'navyOutline':
        return 'bg-transparent border border-royal-navy/40 hover:bg-royal-navy/10 text-royal-navy';
      case 'mahogany':
        return 'bg-gradient-to-r from-red-900 via-red-800 to-red-700 hover:opacity-90 text-white';
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
  
  const ButtonContent = () => (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  // Return a link if href is provided, otherwise return a button
  if (href) {
    return (
      <a 
        className={cn("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2", buttonClasses)}
        href={href}
        {...props}
      >
        <ButtonContent />
      </a>
    );
  }
  
  return (
    <Button className={buttonClasses} {...props}>
      <ButtonContent />
    </Button>
  );
};

export default RoyalButton;
