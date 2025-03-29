
import { User, UserProfile, TeamType } from '@/types/user';

/**
 * Converts a UserProfile to a User object
 * This helps bridge the gap between different user representations in the system
 */
export function adaptUserProfileToUser(profile: UserProfile): User {
  return {
    ...profile,
    // Ensure all required fields are present
    spentTotal: profile.totalSpent || profile.amountSpent || profile.spentTotal || 0,
    totalSpent: profile.totalSpent || profile.amountSpent || profile.spentTotal || 0,
    amountSpent: profile.amountSpent || profile.totalSpent || profile.spentTotal || 0,
    joinedAt: profile.joinedAt || (profile.joined ? new Date(profile.joined).toISOString() : new Date().toISOString()),
    joined: profile.joined || new Date(profile.joinedAt || new Date()),
    // Set defaults for other core properties if missing
    walletBalance: profile.walletBalance || 0,
    rank: profile.rank || 0,
    tier: profile.tier || 'basic',
    role: profile.role || 'user',
    team: profile.team || null
  };
}

/**
 * Converts a User to a UserProfile object
 */
export function adaptUserToUserProfile(user: User): UserProfile {
  return {
    ...user,
    // Ensure all required fields are present
    totalSpent: user.totalSpent || user.amountSpent || user.spentTotal || 0,
    spentTotal: user.spentTotal || user.totalSpent || user.amountSpent || 0, 
    amountSpent: user.amountSpent || user.totalSpent || user.spentTotal || 0,
    joinedAt: user.joinedAt || (user.joined ? new Date(user.joined).toISOString() : new Date().toISOString()),
    joined: user.joined || new Date(user.joinedAt || new Date()),
    // Set defaults for other core properties if missing
    walletBalance: user.walletBalance || 0,
    rank: user.rank || 0,
    tier: user.tier || 'basic',
    role: user.role || 'user',
    team: user.team || null
  };
}

/**
 * Creates a leaderboard user from a standard user
 */
export function createLeaderboardUser(user: Partial<User>) {
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    profileImage: user.profileImage || '',
    tier: user.tier || 'basic',
    team: user.team || null,
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    amountSpent: user.amountSpent || user.totalSpent || user.spentTotal || 0,
    avatarUrl: user.avatarUrl || user.profileImage || '',
    isVerified: user.isVerified || false,
    isProtected: false
  };
}

export default {
  adaptUserProfileToUser,
  adaptUserToUserProfile,
  createLeaderboardUser
};
