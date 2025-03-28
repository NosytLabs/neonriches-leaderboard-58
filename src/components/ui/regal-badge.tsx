
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getSpendingTierLabel, getSpendingTierBadgeClass } from "@/lib/colors";
import { UserTier } from "@/types/user";
import { Check, Crown, Shield, Award } from "lucide-react";

interface RegalBadgeProps {
  tier: UserTier;
  className?: string;
  size?: 'sm' | 'default' | 'lg';
  showLabel?: boolean;
  isVerified?: boolean;
  isFounder?: boolean;
  isVIP?: boolean;
}

const RegalBadge = ({ 
  tier, 
  className, 
  size = 'default', 
  showLabel = true,
  isVerified = false,
  isFounder = false,
  isVIP = false
}: RegalBadgeProps) => {
  const tierLabel = getSpendingTierLabel(tier);
  const badgeClass = getSpendingTierBadgeClass(tier);
  
  const sizeClass = size === 'sm' 
    ? 'px-2 py-0.5 text-xs' 
    : size === 'lg' 
      ? 'px-4 py-1.5 text-base' 
      : 'px-3 py-1 text-sm';

  // Add icons based on special status
  const renderIcon = () => {
    if (isFounder) {
      return (
        <div className="mr-1.5 flex items-center justify-center">
          <div className="relative">
            <Crown size={size === 'sm' ? 12 : size === 'lg' ? 20 : 16} className="text-royal-gold" />
            <div className="absolute inset-0 animate-pulse-slow opacity-60 text-royal-gold">
              <Crown size={size === 'sm' ? 12 : size === 'lg' ? 20 : 16} />
            </div>
          </div>
        </div>
      );
    }
    
    if (isVIP) {
      return (
        <div className="mr-1.5 flex items-center justify-center">
          <Shield size={size === 'sm' ? 12 : size === 'lg' ? 20 : 16} className="text-royal-purple" />
        </div>
      );
    }
    
    if (isVerified) {
      return (
        <div className="mr-1.5 flex items-center justify-center">
          <div className="relative bg-royal-blue rounded-full p-0.5">
            <Check size={size === 'sm' ? 8 : size === 'lg' ? 14 : 10} className="text-white" />
          </div>
        </div>
      );
    }
    
    return null;
  };

  return (
    <Badge 
      className={cn(
        badgeClass, 
        sizeClass, 
        "flex items-center", 
        isFounder ? "animate-border-pulse-flame" : "",
        className
      )}
    >
      {renderIcon()}
      {showLabel ? tierLabel : tier.charAt(0).toUpperCase() + tier.slice(1)}
      
      {/* Gold seal for founder */}
      {isFounder && (
        <div className="ml-1.5 relative">
          <Award 
            size={size === 'sm' ? 12 : size === 'lg' ? 18 : 14} 
            className="text-royal-gold animate-pulse-slow" 
          />
        </div>
      )}
    </Badge>
  );
};

export default RegalBadge;
