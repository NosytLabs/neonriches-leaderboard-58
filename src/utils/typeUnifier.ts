
import { LeaderboardUser } from '@/types/leaderboard-types';

/**
 * Standard user profile type to unify different user interfaces
 */
export interface StandardUserProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  profileImage?: string;
  avatarUrl?: string;
  totalSpent: number;
  rank?: number;
  tier?: string;
  team?: string;
  walletBalance?: number;
  isVIP?: boolean;
  isVerified?: boolean;
  isProtected?: boolean;
  spendStreak?: number;
  joinedDate?: string;
  lastActive?: string;
}

/**
 * Convert any user object to a standardized user profile
 */
export const toStandardUserProfile = (user: any): StandardUserProfile => {
  return {
    id: user.id || user.userId || '',
    username: user.username || '',
    displayName: user.displayName || user.name || '',
    email: user.email || '',
    profileImage: user.profileImage || user.avatarUrl || user.avatar || '/assets/default-avatar.png',
    avatarUrl: user.avatarUrl || user.profileImage || user.avatar || '/assets/default-avatar.png',
    totalSpent: user.totalSpent || user.amountSpent || user.amount || 0,
    rank: user.rank || 999,
    tier: user.tier || 'basic',
    team: user.team || 'neutral',
    walletBalance: user.walletBalance || 0,
    isVIP: user.isVIP || false,
    isVerified: user.isVerified || false,
    isProtected: user.isProtected || false,
    spendStreak: user.spendStreak || 0,
    joinedDate: user.joinedDate || new Date().toISOString(),
    lastActive: user.lastActive || new Date().toISOString(),
  };
};

/**
 * Convert a standard user profile to a LeaderboardUser
 */
export const toLeaderboardUser = (user: StandardUserProfile): LeaderboardUser => {
  return {
    id: user.id,
    userId: user.id,
    username: user.username,
    displayName: user.displayName,
    profileImage: user.profileImage,
    avatarUrl: user.avatarUrl,
    rank: user.rank || 999,
    tier: user.tier,
    team: user.team,
    totalSpent: user.totalSpent,
    amountSpent: user.totalSpent,
    walletBalance: user.walletBalance,
    isVerified: user.isVerified,
    isProtected: user.isProtected,
    spendStreak: user.spendStreak
  };
};

/**
 * Convert a standard user profile to a UserProfile (for compatibility)
 */
export const toUserProfile = (user: StandardUserProfile): any => {
  return {
    ...user,
    // Add any specific fields needed for UserProfile that might not be in StandardUserProfile
  };
};
