
import { User, UserProfile, UserTier } from '@/types/user';

/**
 * Adapts a UserProfile to a User object
 * @param profile UserProfile to adapt
 * @returns User object
 */
export const adaptUserProfileToUser = (profile: UserProfile): User => {
  return {
    ...profile,
    createdAt: profile.joinedAt || profile.joinDate, 
    // Set sensible defaults if properties are missing
    role: profile.role || 'user',
    tier: profile.tier || 'basic' as UserTier
  };
};

/**
 * Ensures that we have a valid User object even when working with partial data
 * @param userLike Partial user object or profile
 * @returns Full User object with defaults for missing properties
 */
export const ensureUser = (userLike: Partial<UserProfile> | Partial<User>): User => {
  const defaultUser: User = {
    id: userLike.id || 'guest',
    username: userLike.username || 'guest',
    displayName: userLike.displayName || userLike.username || 'Guest User',
    tier: userLike.tier || 'basic' as UserTier,
    role: 'user',
    team: userLike.team || null,
    rank: userLike.rank || 0,
    walletBalance: userLike.walletBalance || 0,
    totalSpent: userLike.totalSpent || userLike.amountSpent || userLike.spentAmount || 0,
    joinDate: userLike.joinDate || userLike.joinedAt || new Date().toISOString(),
    joinedAt: userLike.joinedAt || userLike.joinDate || new Date().toISOString(),
    avatarUrl: userLike.avatarUrl || userLike.profileImage,
    lastActive: userLike.lastActive || new Date().toISOString()
  };

  return {
    ...defaultUser,
    ...userLike,
    // Ensure these critical properties are set
    id: userLike.id || defaultUser.id,
    username: userLike.username || defaultUser.username,
    role: (userLike as User).role || defaultUser.role,
    tier: userLike.tier || defaultUser.tier
  };
};

export default adaptUserProfileToUser;
