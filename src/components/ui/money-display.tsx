
import React from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';
import { formatCurrency } from '@/utils/formatters';

interface MoneyDisplayProps {
  amount: number;
  currency?: 'USD' | 'SOL' | 'coins';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showIcon?: boolean;
  animated?: boolean;
  variant?: 'default' | 'gradient' | 'outline' | 'premium';
  className?: string;
}

const MoneyDisplay: React.FC<MoneyDisplayProps> = ({
  amount,
  currency = 'USD',
  size = 'md',
  showIcon = true,
  animated = false,
  variant = 'default',
  className
}) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const iconSizes = {
    xs: 'xs',
    sm: 'xs',
    md: 'sm',
    lg: 'sm',
    xl: 'md'
  } as const;

  const variantClasses = {
    default: 'text-foreground',
    gradient: 'bg-gradient-to-r from-amber-500 to-yellow-300 text-transparent bg-clip-text font-bold',
    outline: 'text-foreground',
    premium: 'bg-gradient-to-r from-purple-500 via-pink-400 to-amber-300 text-transparent bg-clip-text font-bold'
  };

  const currencyIcons = {
    USD: 'dollar',
    SOL: 'SunMedium',
    coins: 'coin'
  };

  const iconName = currencyIcons[currency];
  const formattedAmount = formatCurrency(amount);

  return (
    <div 
      className={cn(
        'inline-flex items-center gap-1',
        sizeClasses[size],
        variantClasses[variant],
        variant === 'outline' && 'border border-foreground/20 rounded-full px-2 py-0.5',
        animated && 'group transition-all duration-300',
        animated && variant === 'default' && 'hover:text-amber-400',
        animated && variant === 'outline' && 'hover:border-amber-400 hover:text-amber-400',
        className
      )}
    >
      {showIcon && (
        <Icon
          name={iconName as any}
          size={iconSizes[size]}
          animated={animated}
          className={cn(
            animated && 'group-hover:scale-110 transition-transform duration-300',
            variant === 'gradient' && 'text-amber-500',
            variant === 'premium' && 'text-purple-500'
          )}
        />
      )}
      <span className={cn(
        'font-medium',
        animated && 'transition-all duration-300'
      )}>
        {formattedAmount}
      </span>
    </div>
  );
};

export default MoneyDisplay;
