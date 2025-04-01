
import React from 'react';
import { cn } from '@/lib/utils';

type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'ornate' | 'simple' | 'scroll';
type RoyalDividerColor = 'default' | 'royal' | 'crimson' | 'gold' | 'purple';

interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  color?: RoyalDividerColor;
  className?: string;
  withIcon?: boolean;
  iconClassName?: string;
  text?: string;
  textClassName?: string;
}

const getColorClass = (color: RoyalDividerColor) => {
  switch (color) {
    case 'royal': return 'from-royal-navy via-royal-blue to-royal-navy';
    case 'crimson': return 'from-crimson-dark via-crimson to-crimson-dark';
    case 'gold': return 'from-royal-gold/60 via-royal-gold to-royal-gold/60';
    case 'purple': return 'from-purple-900 via-purple-600 to-purple-900';
    default: return 'from-gray-700 via-gray-500 to-gray-700';
  }
};

const RoyalDivider: React.FC<RoyalDividerProps> = ({
  variant = 'line',
  color = 'default',
  className = '',
  withIcon = false,
  iconClassName = '',
  text,
  textClassName = ''
}) => {
  const colorClass = getColorClass(color);
  
  const renderLine = () => (
    <div className={cn('h-px bg-gradient-to-r', colorClass, className)} />
  );
  
  const renderDouble = () => (
    <div className={cn('flex flex-col space-y-1', className)}>
      <div className={cn('h-px bg-gradient-to-r', colorClass)} />
      <div className={cn('h-px bg-gradient-to-r', colorClass)} />
    </div>
  );
  
  const renderFancy = () => (
    <div className={cn('relative flex items-center', className)}>
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
      <div className={cn('absolute left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center', iconClassName)}>
        <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-royal-gold to-amber-500" />
      </div>
    </div>
  );
  
  const renderOrnate = () => (
    <div className={cn('relative flex items-center', className)}>
      <div className={cn('flex-grow h-px bg-gradient-to-r', colorClass)} />
      {withIcon && (
        <div className={cn('absolute left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center', iconClassName)}>
          <svg className="w-6 h-6 text-royal-gold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      )}
    </div>
  );
  
  const renderSimple = () => (
    <div className={cn('h-px bg-gray-700', className)} />
  );
  
  const renderScroll = () => (
    <div className={cn('relative flex items-center my-4', className)}>
      <div className={cn('flex-grow h-px bg-gradient-to-r', colorClass)} />
      {text && (
        <div className={cn('absolute left-1/2 -translate-x-1/2 px-4 py-1 bg-gray-900 text-royal-gold font-medieval', textClassName)}>
          {text}
        </div>
      )}
      <div className="absolute left-0 -top-1 w-4 h-4 bg-gray-900 rounded-full border border-royal-gold/50" />
      <div className="absolute right-0 -top-1 w-4 h-4 bg-gray-900 rounded-full border border-royal-gold/50" />
    </div>
  );
  
  if (variant === 'double') return renderDouble();
  if (variant === 'fancy') return renderFancy();
  if (variant === 'ornate') return renderOrnate();
  if (variant === 'simple') return renderSimple();
  if (variant === 'scroll') return renderScroll();
  
  return renderLine();
};

export default RoyalDivider;
