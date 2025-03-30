
/**
 * Utility functions for adapting user data
 */
import { User, UserProfile } from '@/types/user';

/**
 * Ensures we have a valid user object, providing defaults for missing properties
 * @param user User object, potentially with missing fields
 * @returns Complete user object with all required fields
 */
export default function ensureUser(user: Partial<User> | null | undefined): User {
  if (!user) {
    return createDefaultUser();
  }

  // Create a complete user with all required fields
  return {
    id: user.id || 'guest',
    username: user.username || 'guest',
    displayName: user.displayName || 'Guest User',
    email: user.email || '',
    profileImage: user.profileImage || '/placeholder.svg',
    joinedAt: user.joinedAt || new Date().toISOString(),
    createdAt: user.createdAt || new Date().toISOString(),
    tier: user.tier || 'free',
    team: user.team || 'red',
    rank: user.rank || 0,
    walletBalance: user.walletBalance || 0,
    amountSpent: user.amountSpent || 0,
    // Add any additional fields with their default values
    gender: user.gender || 'neutral',
    profileViews: user.profileViews || 0,
    profileClicks: user.profileClicks || 0,
    followers: user.followers || 0,
    following: user.following || 0,
    lastActive: user.lastActive || new Date().toISOString(),
    totalSpent: user.totalSpent || 0,
    role: user.role || 'user',
    cosmetics: user.cosmetics || {},
    ...user, // Keep any additional properties from the original user
  };
}

/**
 * Converts a UserProfile to a full User object
 * @param profile UserProfile to convert
 * @returns User object with all required fields
 */
export function adaptUserProfileToUser(profile: UserProfile | null | undefined): User {
  if (!profile) {
    return createDefaultUser();
  }

  return {
    ...profile,
    createdAt: profile.createdAt || profile.joinedAt,
    totalSpent: profile.totalSpent || profile.amountSpent || 0,
    role: profile.role || 'user',
  };
}

/**
 * Creates a default user object with placeholder values
 * @returns Default user object
 */
function createDefaultUser(): User {
  return {
    id: 'guest',
    username: 'guest',
    displayName: 'Guest User',
    email: '',
    profileImage: '/placeholder.svg',
    joinedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    tier: 'free',
    team: 'red',
    rank: 0,
    walletBalance: 0,
    amountSpent: 0,
    gender: 'neutral',
    profileViews: 0,
    profileClicks: 0,
    followers: 0,
    following: 0,
    lastActive: new Date().toISOString(),
    totalSpent: 0,
    role: 'user',
  };
}
