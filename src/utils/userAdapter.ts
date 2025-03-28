import { User, UserProfile } from '@/types/user';

/**
 * Adapts a UserProfile to a User object with authentication properties
 */
export const adaptToUser = (profile: UserProfile | null | undefined): User | null => {
  if (!profile) return null;
  
  return {
    ...profile,
    isAuthenticated: true,
    isAdmin: false,
    isVerified: true,
    lastLogin: new Date().toISOString()
  };
};

/**
 * Utility for safely using a UserProfile in places that expect a User
 * This should eventually be refactored to properly use User objects
 */
export const ensureUser = (profileOrUser: UserProfile | User | null | undefined): User | null => {
  if (!profileOrUser) return null;
  
  // Check if it's already a User
  if ('isAuthenticated' in profileOrUser) {
    return profileOrUser;
  }
  
  // Otherwise adapt it
  return adaptToUser(profileOrUser);
};

export default adaptToUser;
