
import { LeaderboardUser } from '@/types/mockery-types';
import { toTeamColor } from './typeConverter';

/**
 * Adapts a raw user object to the LeaderboardUser interface
 */
export const adaptToLeaderboardUser = (rawUser: any): LeaderboardUser => {
  return {
    id: rawUser.id || '',
    userId: rawUser.userId || '',
    username: rawUser.username || 'Anonymous',
    displayName: rawUser.displayName || rawUser.username || 'Anonymous',
    profileImage: rawUser.profileImage || rawUser.avatarUrl || '/placeholder-avatar.svg',
    isVerified: !!rawUser.isVerified,
    rank: rawUser.rank || 0,
    previousRank: rawUser.previousRank || rawUser.rank || 0,
    team: toTeamColor(rawUser.team),
    tier: rawUser.tier || 'basic',
    totalSpent: rawUser.totalSpent || rawUser.amountSpent || 0,
    amountSpent: rawUser.amountSpent || rawUser.totalSpent || 0,
    spendStreak: rawUser.spendStreak || 0,
    // Optional properties that match the expanded LeaderboardUser type
    rankChange: rawUser.rankChange || 0,
    spendChange: rawUser.spendChange || 0,
    isProtected: !!rawUser.isProtected,
    avatarUrl: rawUser.avatarUrl || rawUser.profileImage || '/placeholder-avatar.svg'
  };
};

export default {
  adaptToLeaderboardUser
};
