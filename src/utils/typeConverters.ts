
import { LeaderboardUser } from '@/types/leaderboard';
import { UserProfile } from '@/types/user';
import { TeamColor, UserTier } from '@/types/mockery-types';

/**
 * Safely converts any string to TeamColor type
 */
export const toTeamColor = (team: string | null | undefined): TeamColor => {
  if (!team) return 'none';
  
  // Check if the string is a valid TeamColor
  const validTeamColors: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral'];
  if (validTeamColors.includes(team as TeamColor)) {
    return team as TeamColor;
  }
  
  // Default to 'none' if not valid
  return 'none';
};

/**
 * Safely converts string to UserTier
 */
export const toUserTier = (tier: string | null | undefined): UserTier => {
  if (!tier) return 'free';
  
  const validTiers: UserTier[] = ['free', 'basic', 'premium', 'elite', 'royal', 'founder'];
  if (validTiers.includes(tier as UserTier)) {
    return tier as UserTier;
  }
  
  return 'free';
};

/**
 * Convert LeaderboardUser to UserProfile
 */
export const toUserProfile = (user: LeaderboardUser): UserProfile => {
  return {
    id: user.id || user.userId,
    username: user.username,
    displayName: user.displayName || user.username,
    profileImage: user.profileImage || user.avatarUrl || '',
    joinedDate: user.joinedDate || new Date().toISOString(),
    isVerified: user.isVerified || false,
    team: toTeamColor(user.team),
    tier: toUserTier(user.tier),
    rank: user.rank || 0,
    previousRank: user.previousRank || user.rank || 0,
    walletBalance: user.walletBalance || 0,
    totalSpent: user.totalSpent || 0,
    amountSpent: user.totalSpent || 0,
    isProtected: user.isProtected || false,
    spendStreak: user.spendStreak || 0
  };
};

/**
 * Ensure a value is a string ID
 * @param id - The ID (could be number or string)
 * @returns A string ID
 */
export const ensureStringId = (id: string | number): string => {
  return String(id);
};
