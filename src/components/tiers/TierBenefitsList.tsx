
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserTier } from '@/types/tier';
import { getTierDetails } from '@/services/tierService';

interface TierBenefitsListProps {
  tier: UserTier;
  className?: string;
}

const TierBenefitsList: React.FC<TierBenefitsListProps> = ({
  tier,
  className
}) => {
  const tierDetails = getTierDetails(tier);
  
  return (
    <ul className={cn('space-y-2', className)}>
      {tierDetails.benefits.map((benefit, index) => (
        <li key={index} className="flex items-start">
          <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
          <span className="text-white/80 text-sm">{benefit}</span>
        </li>
      ))}
    </ul>
  );
};

export default TierBenefitsList;
