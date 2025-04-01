
import React from 'react';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/utils/formatters/currencyFormatters';

interface SpendAmountProps {
  amount: number;
  className?: string;
  showPrefix?: boolean;
  showSimplified?: boolean;
  textSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  color?: 'default' | 'gold' | 'royal' | 'crimson';
}

const SpendAmount: React.FC<SpendAmountProps> = ({
  amount,
  className,
  showPrefix = true,
  showSimplified = false,
  textSize = 'md',
  color = 'default'
}) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  };
  
  const colorClasses = {
    default: 'text-white',
    gold: 'text-royal-gold',
    royal: 'text-royal-purple',
    crimson: 'text-royal-crimson',
  };

  const getFormattedAmount = () => {
    const prefix = showPrefix ? '$' : '';
    
    if (showSimplified) {
      if (amount >= 1000000) {
        return `${prefix}${(amount / 1000000).toFixed(1)}M`;
      } else if (amount >= 1000) {
        return `${prefix}${(amount / 1000).toFixed(1)}K`;
      }
    }
    
    return `${prefix}${formatCurrency(amount)}`;
  };

  return (
    <span className={cn(sizeClasses[textSize], colorClasses[color], 'font-medium', className)}>
      {getFormattedAmount()}
    </span>
  );
};

export { SpendAmount };
