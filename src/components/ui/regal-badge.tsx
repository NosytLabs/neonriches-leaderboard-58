
import React from 'react';
import { cn } from '@/lib/utils';
import { Crown, Award, Shield, Gem, Coins, Sparkles } from 'lucide-react';
import { 
  getSpendingTier, 
  getSpendingTierLabel, 
  getSpendingTierBadgeClass 
} from '@/lib/colors';

interface RegalBadgeProps {
  tier: string | number;
  amountSpent?: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  showAmount?: boolean;
  className?: string;
  animate?: boolean;
}

const RegalBadge: React.FC<RegalBadgeProps> = ({
  tier,
  amountSpent,
  size = 'md',
  showLabel = true,
  showAmount = false,
  className,
  animate = false,
}) => {
  // If tier is a number (amount spent), convert it to tier string
  const tierName = typeof tier === 'number' 
    ? getSpendingTier(tier) 
    : (tier as string);
  
  const tierLabel = getSpendingTierLabel(tierName);
  const badgeClass = getSpendingTierBadgeClass(tierName);
  
  const sizeClasses = {
    sm: 'text-xs p-1',
    md: 'text-sm p-2',
    lg: 'text-base p-3'
  };
  
  const iconSizes = {
    sm: 12,
    md: 16,
    lg: 20
  };
  
  const renderTierIcon = () => {
    switch (tierName) {
      case 'whale':
        return <Crown size={iconSizes[size]} className="text-royal-purple" />;
      case 'shark':
        return <Shield size={iconSizes[size]} className="text-royal-crimson" />;
      case 'dolphin':
        return <Award size={iconSizes[size]} className="text-royal-navy" />;
      case 'fish':
        return <Gem size={iconSizes[size]} className="text-blue-500" />;
      case 'octopus':
        return <Sparkles size={iconSizes[size]} className="text-purple-500" />;
      case 'crab':
        return <Coins size={iconSizes[size]} className="text-amber-700" />;
      default:
        return <Coins size={iconSizes[size]} className="text-gray-500" />;
    }
  };

  return (
    <div className={cn(
      'inline-flex items-center gap-1.5 rounded-full',
      badgeClass,
      sizeClasses[size],
      animate && 'animate-pulse-slow',
      className
    )}>
      <div className="relative">
        {animate && <div className="absolute -inset-0.5 rounded-full blur-[1px] opacity-70" style={{ background: 'inherit' }}></div>}
        {renderTierIcon()}
      </div>
      
      {showLabel && (
        <span className="font-medium">
          {tierLabel}
        </span>
      )}
      
      {showAmount && amountSpent !== undefined && (
        <span className="text-xs opacity-80 ml-1">
          (${amountSpent.toLocaleString()})
        </span>
      )}
    </div>
  );
};

export default RegalBadge;
