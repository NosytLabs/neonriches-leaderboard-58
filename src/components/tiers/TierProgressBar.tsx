
import React from 'react';
import { cn } from '@/lib/utils';
import { useTier } from '@/hooks/useTier';
import { formatCurrency } from '@/utils/formatters';

interface TierProgressBarProps {
  currentSpend: number;
  className?: string;
  showLabels?: boolean;
  height?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const TierProgressBar: React.FC<TierProgressBarProps> = ({
  currentSpend,
  className,
  showLabels = true,
  height = 'md',
  animated = true
}) => {
  const { 
    currentTierDetails, 
    nextTierDetails, 
    progressToNextTier, 
    amountToNextTier,
    isMaxTier
  } = useTier({ userSpend: currentSpend });
  
  // Determine bar height based on prop
  const barHeight = height === 'sm' ? 'h-1.5' : height === 'lg' ? 'h-3' : 'h-2';
  
  // Handle gradient color based on tier
  const getGradient = () => {
    switch (currentTierDetails.name) {
      case 'bronze': return 'from-amber-700 to-amber-600';
      case 'silver': return 'from-gray-400 to-gray-300';
      case 'gold': return 'from-amber-500 to-yellow-400';
      case 'platinum': return 'from-cyan-400 to-cyan-300';
      case 'diamond': return 'from-blue-400 to-blue-300';
      case 'royal': return 'from-purple-500 to-purple-400';
      default: return 'from-amber-700 to-amber-600';
    }
  };
  
  return (
    <div className={cn('space-y-2', className)}>
      <div className={`w-full ${barHeight} bg-white/10 rounded-full overflow-hidden`}>
        <div 
          className={cn(
            `${barHeight} bg-gradient-to-r`,
            getGradient(),
            animated && 'transition-all duration-1000 ease-out'
          )} 
          style={{ width: `${progressToNextTier}%` }}
        />
      </div>
      
      {showLabels && (
        <div className="flex justify-between text-xs text-white/70">
          <div>{currentTierDetails.label}</div>
          <div>
            {isMaxTier ? (
              <span className="text-purple-400">Max Tier Reached</span>
            ) : (
              <>
                {formatCurrency(amountToNextTier)} more to <span className={nextTierDetails?.color}>
                  {nextTierDetails?.label}
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TierProgressBar;
