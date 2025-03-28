
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getSpendingTierLabel, getSpendingTierBadgeClass } from "@/lib/colors";
import { UserTier } from "@/types/user";

interface RegalBadgeProps {
  tier: UserTier;
  className?: string;
  size?: 'sm' | 'default' | 'lg';
  showLabel?: boolean;
}

const RegalBadge = ({ tier, className, size = 'default', showLabel = true }: RegalBadgeProps) => {
  const tierLabel = getSpendingTierLabel(tier);
  const badgeClass = getSpendingTierBadgeClass(tier);
  
  const sizeClass = size === 'sm' 
    ? 'px-2 py-0.5 text-xs' 
    : size === 'lg' 
      ? 'px-4 py-1.5 text-base' 
      : 'px-3 py-1 text-sm';

  return (
    <Badge className={cn(badgeClass, sizeClass, className)}>
      {showLabel ? tierLabel : tier.charAt(0).toUpperCase() + tier.slice(1)}
    </Badge>
  );
};

export default RegalBadge;
