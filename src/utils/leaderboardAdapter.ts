
import { LeaderboardUser } from '@/types/mockery-types';
import { TeamColor } from '@/types/user';

/**
 * Adapts a user object to ensure it matches the LeaderboardUser interface
 * @param user - The user object to adapt
 * @returns A LeaderboardUser object
 */
export const adaptToLeaderboardUser = (user: any): LeaderboardUser => {
  return {
    userId: user.userId || user.id, // Make sure userId is set
    id: user.id,
    username: user.username,
    displayName: user.displayName || user.username,
    profileImage: user.profileImage || '',
    tier: user.tier || 'basic',
    team: user.team as TeamColor || 'none' as TeamColor,
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    walletBalance: user.walletBalance || 0,
    isVerified: Boolean(user.isVerified),
    isProtected: Boolean(user.isProtected),
    spendStreak: user.spendStreak || 0,
    spendChange: user.spendChange || 0,
    rankChange: user.rankChange || 0,
    spentAmount: user.spentAmount || user.totalSpent || 0
  };
};

/**
 * Batch converts an array of user objects to LeaderboardUser objects
 * @param users - Array of user objects
 * @returns Array of LeaderboardUser objects
 */
export const adaptMultipleToLeaderboardUsers = (users: any[]): LeaderboardUser[] => {
  return users.map(adaptToLeaderboardUser);
};
