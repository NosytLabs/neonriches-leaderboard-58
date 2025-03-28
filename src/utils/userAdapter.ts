
import { User, UserProfile, UserCosmetics } from "@/types/user";

/**
 * Ensures we have a full User object by filling in default values if needed
 * @param user Partial user object
 * @returns Complete User object with all required fields
 */
export const ensureUser = (user: Partial<UserProfile>): User => {
  return {
    ...user,
    isAuthenticated: true,
    isAdmin: user.role === 'admin',
    isVerified: user.isVerified || false,
    lastLogin: user.lastLoginDate || new Date().toISOString(),
    id: user.id || '',
    username: user.username || '',
    totalSpent: user.totalSpent || user.amountSpent || user.spentAmount || 0,
    walletBalance: user.walletBalance || 0,
    tier: user.tier || 'basic',
    joinDate: user.joinDate || user.joinedAt || new Date().toISOString()
  } as User;
};

/**
 * Adapts a user object to a UserProfile
 * @param user User object
 * @returns UserProfile object
 */
export const adaptToUser = (user: User): UserProfile => {
  const { isAuthenticated, isAdmin, isVerified, lastLogin, ...profile } = user;
  return {
    ...profile,
    role: isAdmin ? 'admin' : 'user',
    isVerified,
    lastLoginDate: lastLogin
  } as UserProfile;
};

/**
 * Converts a UserProfile to a User object
 * @param profile UserProfile object
 * @returns User object
 */
export const adaptUserProfileToUser = (profile: UserProfile): User => {
  return ensureUser(profile);
};

/**
 * Safely converts a string to a boolean
 * @param value String value to convert
 * @param defaultValue Default value if conversion fails
 * @returns Boolean value
 */
export const toBooleanSafe = (value: string | undefined | null, defaultValue = false): boolean => {
  if (value === undefined || value === null) return defaultValue;
  return value.toLowerCase() === 'true';
};

export default {
  ensureUser,
  adaptToUser,
  adaptUserProfileToUser,
  toBooleanSafe
};
