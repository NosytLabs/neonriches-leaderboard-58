
import { User, UserProfile } from '@/types/user';

/**
 * Adapts a UserProfile to a User object
 * @param profile The UserProfile to adapt
 * @returns A User object
 */
export const adaptUserProfileToUser = (profile: UserProfile): User => {
  return {
    ...profile,
    isAuthenticated: true,
    isAdmin: profile.role === 'admin',
    isVerified: profile.isVerified || false,
    lastLogin: profile.lastLoginDate || profile.lastActive || new Date().toISOString(),
    // Ensure totalSpent is defined even if it's missing from profile
    totalSpent: profile.totalSpent || profile.amountSpent || profile.spentAmount || 0
  };
};
