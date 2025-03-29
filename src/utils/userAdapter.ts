
import { User, UserProfile } from '@/types/user';

/**
 * Adapts a UserProfile to a User object
 * @param profile The UserProfile to adapt
 * @returns A User object
 */
export const adaptUserProfileToUser = (profile: UserProfile): User => {
  return {
    ...profile,
    createdAt: profile.createdAt || profile.joinDate || profile.joinedAt || new Date().toISOString(),
    isAuthenticated: profile.isAuthenticated || true,
    isAdmin: profile.role === 'admin' || !!profile.isAdmin,
    isVerified: profile.isVerified || false,
    lastLogin: profile.lastLoginDate || profile.lastActive || new Date().toISOString(),
    // Ensure totalSpent is defined even if it's missing from profile
    totalSpent: profile.totalSpent || profile.amountSpent || profile.spentAmount || 0
  };
};

/**
 * Ensures that a UserProfile or partial UserProfile is converted to a User object
 * @param profile The UserProfile or partial UserProfile to ensure
 * @returns A User object
 */
export const ensureUser = (profile: UserProfile | Partial<UserProfile> | null): User => {
  if (!profile) {
    throw new Error('Profile is required');
  }

  // Create a valid UserProfile with required fields
  const validProfile: UserProfile = {
    id: profile.id || `user_${Date.now()}`,
    username: profile.username || 'Anonymous',
    email: profile.email || 'anonymous@example.com',
    walletBalance: profile.walletBalance || 0,
    createdAt: profile.createdAt || profile.joinDate || profile.joinedAt || new Date().toISOString(),
    totalSpent: profile.totalSpent || profile.amountSpent || profile.spentAmount || 0,
    joinDate: profile.joinDate || profile.joinedAt || new Date().toISOString(),
    joinedAt: profile.joinedAt || profile.joinDate || new Date().toISOString(),
    ...profile
  };

  return adaptUserProfileToUser(validProfile);
};
