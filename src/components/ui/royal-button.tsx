
import React from 'react';
import { Button, ButtonProps } from './button';
import { cn } from '@/lib/utils';

interface RoyalButtonProps extends ButtonProps {
  variant?: 'default' | 'royal' | 'royalGold' | 'royalPurple' | 'outline' | 'destructive' | 'ghost';
}

const RoyalButton: React.FC<RoyalButtonProps> = ({ 
  children, 
  variant = 'default',
  className,
  ...props 
}) => {
  const getButtonClass = () => {
    switch (variant) {
      case 'royalGold':
        return 'bg-gradient-to-r from-royal-gold/80 to-amber-500/80 hover:from-royal-gold hover:to-amber-500 text-black border-royal-gold/50';
      case 'royalPurple':
        return 'bg-gradient-to-r from-royal-purple/80 to-purple-500/80 hover:from-royal-purple hover:to-purple-500 text-white border-royal-purple/50';
      case 'royal':
        return 'bg-gradient-to-r from-royal-purple/80 to-royal-gold/80 hover:from-royal-purple hover:to-royal-gold text-white border-royal-purple/30';
      default:
        return '';
    }
  };
  
  return (
    <Button
      variant={variant === 'royalGold' || variant === 'royalPurple' || variant === 'royal' ? 'default' : variant}
      className={cn(getButtonClass(), className)}
      {...props}
    >
      {children}
    </Button>
  );
};

export default RoyalButton;
