
import { UserProfile } from '@/types/user';
import { ProfileBoost } from '@/types/user';
import { MockeryTier } from '@/types/mockery-types';

/**
 * Ensures the user profile has totalSpent and amountSpent properties
 */
export const ensureTotalSpent = (user: UserProfile): UserProfile & { totalSpent: number; amountSpent: number } => {
  return {
    ...user,
    totalSpent: typeof user.totalSpent === 'number' ? user.totalSpent : (user.amountSpent || 0),
    amountSpent: typeof user.amountSpent === 'number' ? user.amountSpent : (user.totalSpent || 0),
  };
};

/**
 * Adapts the user profile from the consolidated format to the standard format
 * by ensuring profile boosts have required properties
 */
export const adaptToStandardUserProfile = (user: UserProfile & { totalSpent: number; amountSpent: number }): UserProfile => {
  // Ensure profileBoosts is an array and each boost has required properties
  const adaptedProfileBoosts = Array.isArray(user.profileBoosts) 
    ? user.profileBoosts.map(boost => ({
        ...boost,
        level: boost.level ?? 1,
        isActive: boost.isActive ?? true,
        strength: boost.strength ?? 1,
        appliedBy: boost.appliedBy ?? 'system'
      }))
    : [];

  return {
    ...user,
    // Ensure all required properties are present
    tier: user.tier || 'basic',
    team: user.team || 'none',
    profileBoosts: adaptedProfileBoosts,
    // Use joinedDate as the standard field for when user joined
    joinedDate: user.joinedDate || user.joinDate || user.joinedAt || user.createdAt || new Date().toISOString()
  };
};

/**
 * Ensures required fields are present in a boost
 */
export const ensureBoostHasRequiredFields = (boost: Partial<ProfileBoost>): ProfileBoost => {
  return {
    id: boost.id || `boost-${Date.now()}`,
    type: boost.type || 'standard',
    startDate: boost.startDate || new Date().toISOString(),
    endDate: boost.endDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    level: boost.level || 1,
    isActive: boost.isActive !== undefined ? boost.isActive : true,
    strength: boost.strength || 1,
    appliedBy: boost.appliedBy || 'system',
  };
};

/**
 * Add mockery utils
 */
export const getMockeryTierColorClass = (tier: string): string => {
  const colorClasses: Record<string, string> = {
    'common': 'text-gray-300',
    'uncommon': 'text-green-400',
    'rare': 'text-blue-400',
    'epic': 'text-purple-400',
    'legendary': 'text-orange-400',
    'royal': 'text-royal-gold'
  };
  
  return colorClasses[tier] || 'text-gray-300';
};
