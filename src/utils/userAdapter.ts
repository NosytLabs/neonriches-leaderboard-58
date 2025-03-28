
import { User, UserProfile } from "@/types/user";

/**
 * Ensures we have a full User object by filling in default values if needed
 * @param user Partial user object
 * @returns Complete User object with all required fields
 */
export const ensureUser = (user: UserProfile): User => {
  return {
    ...user,
    isAuthenticated: true,
    isAdmin: user.role === 'admin',
    isVerified: user.isVerified || false,
    lastLogin: user.lastLoginDate || new Date().toISOString()
  };
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
  };
};

export default {
  ensureUser,
  adaptToUser
};
