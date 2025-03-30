
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Sword, 
  Crown, 
  Award, 
  Diamond 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserTier } from '@/types/tier';
import { getTierDetails } from '@/services/tierService';

interface TierBadgeProps {
  tier: UserTier;
  showIcon?: boolean;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const TierBadge: React.FC<TierBadgeProps> = ({
  tier,
  showIcon = true,
  showLabel = true,
  size = 'md',
  className
}) => {
  const tierDetails = getTierDetails(tier);
  
  // Map tier icons to Lucide components
  const getIcon = () => {
    switch (tierDetails.icon) {
      case 'shield': return <Shield className={iconSize} />;
      case 'sword': return <Sword className={iconSize} />;
      case 'crown': return <Crown className={iconSize} />;
      case 'scepter': 
      case 'throne': return <Award className={iconSize} />;
      case 'diamond': return <Diamond className={iconSize} />;
      default: return <Shield className={iconSize} />;
    }
  };
  
  // Size mappings
  const iconSize = size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4';
  const textSize = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';
  const paddingSize = size === 'sm' ? 'px-2 py-0.5' : size === 'lg' ? 'px-3 py-1.5' : 'px-2.5 py-1';
  
  return (
    <Badge 
      variant="outline" 
      className={cn(
        paddingSize,
        textSize,
        'font-medium bg-black/20',
        `${tierDetails.color}`,
        'border-current/20',
        'flex items-center gap-1.5',
        className
      )}
    >
      {showIcon && getIcon()}
      {showLabel && tierDetails.label}
    </Badge>
  );
};

export default TierBadge;
