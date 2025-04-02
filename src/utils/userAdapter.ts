
import { UserProfile } from '@/types/user-consolidated';
import { TeamColor, UserTier } from '@/types/mockery-types';
import { toTeamColor, toUserTier } from '@/utils/typeConverters';

/**
 * Adapts any user object to ensure it conforms to the standard UserProfile type
 * with all required properties correctly typed
 */
export const adaptToStandardUserProfile = (user: Partial<UserProfile>): UserProfile => {
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    tier: toUserTier(user.tier) as UserTier,
    team: toTeamColor(user.team) as TeamColor,
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
    settings: user.settings || {
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
      showSpending: true,
      newFollowerAlerts: false,
      teamNotifications: false,
      language: 'en',
      publicProfile: true,
      shameAlerts: false,
      allowMessages: true
    },
    cosmetics: user.cosmetics || {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    },
    isVerified: !!user.isVerified,
    isProtected: !!user.isProtected,
    isFounder: !!user.isFounder,
    isVIP: !!user.isVIP,
    isAdmin: !!user.isAdmin,
    followers: user.followers || [],
    following: user.following || [],
    achievements: user.achievements || [],
    badges: user.badges || [],
    profileBoosts: user.profileBoosts || [],
    socialLinks: user.socialLinks || [],
    spendStreak: user.spendStreak || 0,
    profileViews: user.profileViews || 0,
    profileClicks: user.profileClicks || 0,
    gender: user.gender || 'prefer-not-to-say',
    lastActive: user.lastActive || new Date().toISOString(),
    boostCount: user.boostCount || 0,
    purchasedFeatures: user.purchasedFeatures || [],
    teamRank: user.teamRank || 0
  };
};

/**
 * Adapts a user object to ensure it matches the LeaderboardUser interface
 */
export const adaptToLeaderboardUser = (user: any): any => {
  return {
    id: user.id || '',
    userId: user.userId || user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    profileImage: user.profileImage || user.avatarUrl || '',
    tier: toUserTier(user.tier),
    team: toTeamColor(user.team) as TeamColor,
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    walletBalance: user.walletBalance || 0,
    totalSpent: user.totalSpent || user.amountSpent || user.spentAmount || 0,
    amountSpent: user.amountSpent || user.totalSpent || user.spentAmount || 0,
    isVerified: !!user.isVerified,
    isProtected: !!user.isProtected,
    spendStreak: user.spendStreak || 0,
    joinDate: user.joinDate || user.joinedDate || user.createdAt || '',
    // Additional fields
    rankChange: user.rankChange || 0,
    spendChange: user.spendChange || 0,
    avatarUrl: user.avatarUrl || user.profileImage || ''
  };
};

export default {
  adaptToStandardUserProfile,
  adaptToLeaderboardUser
};
