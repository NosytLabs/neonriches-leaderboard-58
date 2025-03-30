
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface RoyalButtonProps extends ButtonProps {
  variant?: 'default' | 'royal' | 'gold' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
}

const RoyalButton: React.FC<RoyalButtonProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  ...props
}) => {
  const variantClasses = {
    default: 'bg-purple-600 hover:bg-purple-700 text-white',
    royal: 'bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-800 hover:to-indigo-900 text-white',
    gold: 'bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black font-medium',
    emerald: 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white',
  };

  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4',
    lg: 'py-3 px-6 text-lg',
  };

  return (
    <Button
      className={cn(
        'font-medieval transition-all shadow-md',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default RoyalButton;
