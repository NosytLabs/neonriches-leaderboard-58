
// This file is maintained for backward compatibility
// Import and re-export from our new service
import { 
  getUserTier,
  getTierDetails,
  getNextTierDetails,
  getProgressToNextTier,
  getAllTiers
} from '@/services/tierService';
import { TierDetails, UserTier } from '@/types/tier';
import { tiers } from '@/data/tierData';

// Re-export types for backward compatibility
export type { UserTier };
export { tiers };

// Re-export functions
export {
  getUserTier,
  getTierDetails,
  getNextTierDetails,
  getProgressToNextTier
};
