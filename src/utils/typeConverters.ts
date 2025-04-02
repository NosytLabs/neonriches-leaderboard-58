
import { LeaderboardUser } from '@/types/leaderboard';
import { UserProfile } from '@/types/user';
import { TeamColor } from '@/types/user-types';

/**
 * Convert a string to a valid TeamColor
 * @param team - The team string to convert
 * @returns A valid TeamColor
 */
export const toTeamColor = (team: string | null | undefined): TeamColor => {
  if (!team) return 'none';
  
  const validTeamColors: Record<string, TeamColor> = {
    'red': 'red',
    'blue': 'blue',
    'green': 'green',
    'gold': 'gold',
    'purple': 'purple',
    'silver': 'silver',
    'bronze': 'bronze',
    'neutral': 'neutral',
    'none': 'none'
  };
  
  return validTeamColors[team.toLowerCase()] || 'none';
};

/**
 * Convert a LeaderboardUser to a UserProfile
 * @param leaderboardUser - The LeaderboardUser to convert
 * @returns A UserProfile object
 */
export const leaderboardUserToProfile = (leaderboardUser: LeaderboardUser): UserProfile => {
  // Create a base UserProfile with required fields
  return {
    id: leaderboardUser.userId || leaderboardUser.id,
    username: leaderboardUser.username,
    displayName: leaderboardUser.displayName || leaderboardUser.username,
    email: leaderboardUser.email || '',
    profileImage: leaderboardUser.profileImage || leaderboardUser.avatarUrl || '',
    bio: leaderboardUser.bio || '',
    joinedDate: leaderboardUser.joinedDate || leaderboardUser.joinedAt || leaderboardUser.joinDate || new Date().toISOString(),
    tier: leaderboardUser.tier as any,
    team: toTeamColor(leaderboardUser.team),
    rank: leaderboardUser.rank,
    previousRank: leaderboardUser.previousRank || 0,
    totalSpent: leaderboardUser.totalSpent,
    amountSpent: leaderboardUser.amountSpent || leaderboardUser.totalSpent,
    walletBalance: leaderboardUser.walletBalance || 0,
    isVerified: leaderboardUser.isVerified || false,
    cosmetics: { border: [], color: [], font: [], emoji: [], title: [], background: [], effect: [], badge: [], theme: [] },
    settings: leaderboardUser.settings || {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: false,
      marketingEmails: false,
      showRank: true,
      darkMode: true,
      soundEffects: true,
      showBadges: true,
      showEmailOnProfile: false,
      rankChangeAlerts: false,
      showTeam: true,
      showSpending: true
    },
    spendStreak: leaderboardUser.spendStreak || 0
  };
};

/**
 * Convert an array of LeaderboardUsers to UserProfiles
 * @param leaderboardUsers - Array of LeaderboardUser objects
 * @returns Array of UserProfile objects
 */
export const leaderboardUsersToProfiles = (leaderboardUsers: LeaderboardUser[]): UserProfile[] => {
  return leaderboardUsers.map(leaderboardUserToProfile);
};
