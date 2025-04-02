
import { LeaderboardUser, TeamColor } from '@/types/mockery-types';
import { toTeamColor } from '@/utils/typeConverters';

/**
 * Adapts raw leaderboard data to the LeaderboardUser type
 */
export function adaptLeaderboardUser(data: any): LeaderboardUser {
  // Ensure team is a valid TeamColor
  const team = toTeamColor(data.team);
  
  return {
    id: data.id || `leaderboard-${Date.now()}`,
    userId: data.userId || data.id,
    username: data.username || 'Anonymous',
    displayName: data.displayName || data.username || 'Anonymous',
    profileImage: data.profileImage || data.avatarUrl || '/placeholder-avatar.png',
    totalSpent: data.totalSpent || data.amountSpent || data.spentAmount || 0,
    amountSpent: data.amountSpent || data.totalSpent || data.spentAmount || 0,
    rank: data.rank || 0,
    team: team,
    tier: data.tier || 'basic',
    spendStreak: data.spendStreak || 0,
    walletBalance: data.walletBalance || 0,
    previousRank: data.previousRank || data.rank || 0,
    joinDate: data.joinDate || data.joinedDate || data.createdAt || new Date().toISOString(),
    isVerified: data.isVerified || false,
    rankChange: data.rankChange !== undefined ? data.rankChange : (data.previousRank ? data.previousRank - data.rank : 0),
    spendChange: data.spendChange || 0,
    isProtected: data.isProtected || false
  };
}

export default {
  adaptLeaderboardUser
};
