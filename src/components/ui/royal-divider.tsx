
import React from 'react';
import { cn } from '@/lib/utils';

export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'ornate' | 'crown' | 'simple';
export type RoyalDividerColor = 'default' | 'royal' | 'gold' | 'crimson' | 'purple';

export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  color?: RoyalDividerColor;
  className?: string;
  text?: string;
}

const RoyalDivider: React.FC<RoyalDividerProps> = ({
  variant = 'line',
  color = 'default',
  className = '',
  text
}) => {
  const getColorClasses = (dividerColor: RoyalDividerColor): string => {
    const colorMap: Record<RoyalDividerColor, string> = {
      default: 'border-white/20',
      royal: 'border-royal-blue',
      gold: 'border-royal-gold',
      crimson: 'border-royal-crimson',
      purple: 'border-purple-500'
    };
    
    return colorMap[dividerColor] || colorMap.default;
  };
  
  const getTextColorClasses = (dividerColor: RoyalDividerColor): string => {
    const colorMap: Record<RoyalDividerColor, string> = {
      default: 'text-white/60',
      royal: 'text-royal-blue',
      gold: 'text-royal-gold',
      crimson: 'text-royal-crimson',
      purple: 'text-purple-500'
    };
    
    return colorMap[dividerColor] || colorMap.default;
  };
  
  const renderDivider = () => {
    const colorClass = getColorClasses(color);
    const textColorClass = getTextColorClasses(color);
    
    switch (variant) {
      case 'double':
        return (
          <div className="flex items-center w-full">
            <div className={cn('flex-grow border-t-2', colorClass)}></div>
            {text && (
              <>
                <span className={cn('px-3 text-sm font-medium', textColorClass)}>{text}</span>
                <div className={cn('flex-grow border-t-2', colorClass)}></div>
              </>
            )}
          </div>
        );
      
      case 'fancy':
        return (
          <div className="flex items-center w-full">
            <div className={cn('flex-grow h-px', colorClass, 'bg-gradient-to-r from-transparent to-current')}></div>
            {text && (
              <>
                <span className={cn('px-3 text-sm font-medium', textColorClass)}>{text}</span>
                <div className={cn('flex-grow h-px', colorClass, 'bg-gradient-to-l from-transparent to-current')}></div>
              </>
            )}
          </div>
        );
      
      case 'ornate':
        return (
          <div className="flex items-center w-full">
            <div className={cn('flex-grow border-t', colorClass)}></div>
            <div className={cn('mx-2 w-2 h-2 rounded-full', colorClass.replace('border', 'bg'))}></div>
            {text && (
              <>
                <span className={cn('px-3 text-sm font-medium', textColorClass)}>{text}</span>
                <div className={cn('mx-2 w-2 h-2 rounded-full', colorClass.replace('border', 'bg'))}></div>
              </>
            )}
            <div className={cn('flex-grow border-t', colorClass)}></div>
          </div>
        );

      case 'crown':
        return (
          <div className="flex items-center w-full">
            <div className={cn('flex-grow border-t', colorClass)}></div>
            <div className={cn('mx-2 text-lg', textColorClass)}>♔</div>
            {text && (
              <>
                <span className={cn('px-3 text-sm font-medium', textColorClass)}>{text}</span>
                <div className={cn('mx-2 text-lg', textColorClass)}>♔</div>
              </>
            )}
            <div className={cn('flex-grow border-t', colorClass)}></div>
          </div>
        );

      case 'simple':
        return (
          <div className="flex items-center w-full">
            <div className={cn('flex-grow h-px', colorClass.replace('border', 'bg'))}></div>
            {text && (
              <span className={cn('px-3 text-sm font-medium', textColorClass)}>{text}</span>
            )}
            <div className={cn('flex-grow h-px', colorClass.replace('border', 'bg'))}></div>
          </div>
        );
      
      case 'line':
      default:
        return (
          <div className="flex items-center w-full">
            <div className={cn('flex-grow border-t', colorClass)}></div>
            {text && (
              <span className={cn('px-3 text-sm font-medium', textColorClass)}>{text}</span>
            )}
          </div>
        );
    }
  };
  
  return (
    <div className={cn('my-4', className)}>
      {renderDivider()}
    </div>
  );
};

export default RoyalDivider;
