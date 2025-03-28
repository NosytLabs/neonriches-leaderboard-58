
import React from 'react';
import { cn } from '@/lib/utils';
import MedievalIcon from './medieval-icon';
import { RoyalDividerVariant } from '@/types/royal-divider-types';

type RoyalDividerColor = 'gold' | 'silver' | 'royal' | 'crimson' | 'navy' | 'purple';

interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  label?: string;
  color?: RoyalDividerColor;
  className?: string;
}

const RoyalDivider: React.FC<RoyalDividerProps> = ({
  variant = 'line',
  label,
  color = 'gold',
  className,
}) => {
  // Get color classes based on the color prop
  const getColorClasses = (color: RoyalDividerColor) => {
    switch (color) {
      case 'gold':
        return 'text-royal-gold border-royal-gold/30';
      case 'silver':
        return 'text-gray-300 border-gray-300/30';
      case 'royal':
        return 'royal-gradient border-white/20';
      case 'crimson':
        return 'text-royal-crimson border-royal-crimson/30';
      case 'navy':
        return 'text-royal-navy border-royal-navy/30';
      case 'purple':
        return 'text-royal-purple border-royal-purple/30';
      default:
        return 'text-royal-gold border-royal-gold/30';
    }
  };
  
  const colorClasses = getColorClasses(color);
  
  // Render different divider variants
  const renderDivider = () => {
    switch (variant) {
      case 'crown':
        return (
          <div className={cn('flex items-center w-full', className)}>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-current opacity-30"></div>
            {label ? (
              <div className="mx-4 flex items-center">
                <MedievalIcon name="crown" size="sm" className="mr-2" />
                <span className="text-xs font-bold tracking-wider">{label}</span>
                <MedievalIcon name="crown" size="sm" className="ml-2" />
              </div>
            ) : (
              <div className="mx-4">
                <MedievalIcon name="crown" size="sm" />
              </div>
            )}
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-current opacity-30"></div>
          </div>
        );
        
      case 'scroll':
        return (
          <div className={cn('flex items-center w-full', className)}>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-current opacity-30"></div>
            {label ? (
              <div className="mx-4 flex items-center">
                <MedievalIcon name="scroll" size="sm" className="mr-2" />
                <span className="text-xs font-bold tracking-wider">{label}</span>
                <MedievalIcon name="scroll" size="sm" className="ml-2" />
              </div>
            ) : (
              <div className="mx-4">
                <MedievalIcon name="scroll" size="sm" />
              </div>
            )}
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-current opacity-30"></div>
          </div>
        );
        
      case 'quill':
        return (
          <div className={cn('flex items-center w-full', className)}>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-current opacity-30"></div>
            {label ? (
              <div className="mx-4 flex items-center">
                <MedievalIcon name="quill" size="sm" className="mr-2" />
                <span className="text-xs font-bold tracking-wider">{label}</span>
                <MedievalIcon name="quill" size="sm" className="ml-2" />
              </div>
            ) : (
              <div className="mx-4">
                <MedievalIcon name="quill" size="sm" />
              </div>
            )}
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-current opacity-30"></div>
          </div>
        );
        
      case 'treasure':
        return (
          <div className={cn('flex items-center w-full', className)}>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-current opacity-30"></div>
            {label ? (
              <div className="mx-4 flex items-center">
                <MedievalIcon name="gem" size="sm" className="mr-2" />
                <span className="text-xs font-bold tracking-wider">{label}</span>
                <MedievalIcon name="gem" size="sm" className="ml-2" />
              </div>
            ) : (
              <div className="mx-4">
                <MedievalIcon name="gem" size="sm" />
              </div>
            )}
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-current opacity-30"></div>
          </div>
        );
        
      case 'chalice':
        return (
          <div className={cn('flex items-center w-full', className)}>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-current opacity-30"></div>
            {label ? (
              <div className="mx-4 flex items-center">
                <MedievalIcon name="chalice" size="sm" className="mr-2" />
                <span className="text-xs font-bold tracking-wider">{label}</span>
                <MedievalIcon name="chalice" size="sm" className="ml-2" />
              </div>
            ) : (
              <div className="mx-4">
                <MedievalIcon name="chalice" size="sm" />
              </div>
            )}
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-current opacity-30"></div>
          </div>
        );
        
      case 'double':
        return (
          <div className={cn('relative py-4', className)}>
            <div className="absolute inset-0 flex items-center">
              <div className="h-[2px] w-full border-t border-b border-current opacity-30"></div>
            </div>
            {label && (
              <div className="relative flex justify-center">
                <span className="bg-background px-4 text-xs font-medium">{label}</span>
              </div>
            )}
          </div>
        );
        
      case 'ornate':
        return (
          <div className={cn('flex items-center w-full', className)}>
            <div className="h-px flex-1 bg-current opacity-30"></div>
            <div className="mx-2 opacity-50">❦</div>
            {label && <div className="px-2 text-xs font-medium">{label}</div>}
            <div className="mx-2 opacity-50">❦</div>
            <div className="h-px flex-1 bg-current opacity-30"></div>
          </div>
        );
        
      case 'simple':
      case 'line':
      default:
        return (
          <div className={cn('flex items-center w-full', className)}>
            <div className="h-px flex-1 bg-current opacity-30"></div>
            {label && (
              <div className="mx-2 text-xs font-bold tracking-wider">{label}</div>
            )}
            <div className="h-px flex-1 bg-current opacity-30"></div>
          </div>
        );
    }
  };
  
  return (
    <div className={cn(colorClasses, 'w-full')}>
      {renderDivider()}
    </div>
  );
};

export default RoyalDivider;
