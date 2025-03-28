
import { User, UserProfile } from '@/types/user';

/**
 * Adapts a UserProfile to a User object
 */
export const adaptUserProfileToUser = (profile: UserProfile): User => {
  return {
    ...profile,
    isAuthenticated: true,
    isAdmin: false,
    isVerified: true,
    lastLogin: new Date().toISOString()
  };
};

/**
 * Alias for adaptUserProfileToUser for backward compatibility
 */
export const adaptToUser = adaptUserProfileToUser;

/**
 * Converts any boolean-like string to actual boolean
 * Used for fixing "string" is not assignable to type "boolean" errors
 */
export const toBooleanSafe = (value: any): boolean => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const normalized = value.toLowerCase().trim();
    return normalized === 'true' || normalized === 'yes' || normalized === '1';
  }
  return Boolean(value);
};

export default {
  adaptUserProfileToUser,
  adaptToUser,
  toBooleanSafe
};
