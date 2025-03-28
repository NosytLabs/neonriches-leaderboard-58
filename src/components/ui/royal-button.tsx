
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { RoyalButtonVariant } from '@/types/royal-divider-types';

interface RoyalButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: RoyalButtonVariant;
  shimmer?: boolean;
  glow?: boolean;
  icon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const RoyalButton: React.FC<RoyalButtonProps> = ({
  variant = 'royal',
  shimmer = false,
  glow = false,
  icon,
  className,
  children,
  href,
  target,
  rel,
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
        return 'bg-transparent border border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-500';
      case 'crimsonOutline':
        return 'bg-transparent border border-red-500/50 hover:bg-red-500/10 text-red-500';
      case 'navyOutline':
        return 'bg-transparent border border-blue-500/50 hover:bg-blue-500/10 text-blue-500';
      case 'mahogany':
        return 'bg-gradient-to-r from-red-800 via-red-900 to-red-950 hover:opacity-90 text-white';
      default: // royal
        return 'bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 hover:opacity-90 text-white';
    }
  };

  const buttonClasses = cn(
    'font-medium transition-all focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black',
    getVariantClasses(),
    shimmer && 'animate-shimmer bg-[length:200%_100%]',
    glow && 'shadow-glow',
    className
  );

  // Render as a link or button
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={cn('inline-flex items-center justify-center rounded-md px-4 py-2 text-sm', buttonClasses)}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <Button className={buttonClasses} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Button>
  );
};

export default RoyalButton;
