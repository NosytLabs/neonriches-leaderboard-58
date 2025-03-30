
import { useMemo } from 'react';
import { 
  getUserTier, 
  getTierDetails, 
  getNextTierDetails, 
  getProgressToNextTier,
  getAmountToNextTier,
  getAllTiers
} from '@/services/tierService';
import { TierDetails, UserTier } from '@/types/tier';

interface UseTierProps {
  userSpend?: number;
  currentTier?: UserTier;
}

interface TierInfo {
  currentTier: UserTier;
  currentTierDetails: TierDetails;
  nextTierDetails: TierDetails | null;
  progressToNextTier: number;
  amountToNextTier: number;
  allTiers: TierDetails[];
  isMaxTier: boolean;
}

/**
 * Hook to manage all tier-related functionality 
 */
export const useTier = ({ userSpend = 0, currentTier }: UseTierProps = {}): TierInfo => {
  // If currentTier is provided, use it; otherwise calculate from spend
  const tier = useMemo(() => 
    currentTier || getUserTier(userSpend), 
    [currentTier, userSpend]
  );
  
  const tierDetails = useMemo(() => 
    getTierDetails(tier), 
    [tier]
  );
  
  const nextTier = useMemo(() => 
    getNextTierDetails(userSpend), 
    [userSpend]
  );
  
  const progress = useMemo(() => 
    getProgressToNextTier(userSpend), 
    [userSpend]
  );
  
  const amountNeeded = useMemo(() => 
    getAmountToNextTier(userSpend), 
    [userSpend]
  );
  
  const allTierOptions = useMemo(() => 
    getAllTiers(), 
    []
  );
  
  return {
    currentTier: tier,
    currentTierDetails: tierDetails,
    nextTierDetails: nextTier,
    progressToNextTier: progress,
    amountToNextTier: amountNeeded,
    allTiers: allTierOptions,
    isMaxTier: nextTier === null
  };
};
