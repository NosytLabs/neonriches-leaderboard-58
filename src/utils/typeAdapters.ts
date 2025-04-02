
import { LeaderboardUser as LeaderboardUserMockery } from '@/types/mockery-types';
import { LeaderboardUser as LeaderboardUserRegular } from '@/types/leaderboard';
import { UserProfile as UserConsolidated } from '@/types/user-consolidated';
import { UserProfile as UserRegular } from '@/types/user';
import { TeamColor } from '@/types/team';
import { UserSettings as UserSettingsConsolidated } from '@/types/user-consolidated';
import { UserSettings as UserSettingsRegular } from '@/types/user';

// Helper to cast profileVisibility to appropriate type
const adaptProfileVisibility = (visibility: string | undefined): 'public' | 'private' | 'followers' | 'friends' => {
  if (visibility === 'public' || visibility === 'private' || visibility === 'followers' || visibility === 'friends') {
    return visibility;
  }
  return 'public';
};

/**
 * Adapts a mockery-type LeaderboardUser to the standard LeaderboardUser type
 */
export const adaptLeaderboardUser = (user: LeaderboardUserMockery | Partial<LeaderboardUserRegular>): LeaderboardUserRegular => {
  return {
    id: user.id || '',
    userId: user.userId || user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    profileImage: user.profileImage || user.avatarUrl || '',
    avatarUrl: user.avatarUrl || user.profileImage || '',
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    tier: user.tier || 'basic',
    team: user.team || 'none',
    isVerified: user.isVerified || false,
    isProtected: user.isProtected || false,
    spendStreak: user.spendStreak || 0,
    rankChange: user.rankChange || 0,
    spendChange: user.spendChange || 0,
    walletBalance: user.walletBalance || 0
  };
};

/**
 * Adapts user settings from consolidated to regular type
 */
const adaptSettings = (settings: UserSettingsConsolidated | UserSettingsRegular | undefined): UserSettingsRegular => {
  if (!settings) {
    return {
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
      showTeam: true,
      showSpending: true
    };
  }

  return {
    profileVisibility: adaptProfileVisibility(settings.profileVisibility),
    allowProfileLinks: settings.allowProfileLinks !== false,
    theme: settings.theme || 'dark',
    notifications: settings.notifications !== false,
    emailNotifications: settings.emailNotifications || false,
    marketingEmails: settings.marketingEmails || false,
    showRank: settings.showRank !== false,
    darkMode: settings.darkMode !== false,
    soundEffects: settings.soundEffects !== false,
    showBadges: settings.showBadges !== false,
    showTeam: settings.showTeam !== false,
    showSpending: settings.showSpending !== false
  };
};

/**
 * Adapts a user profile from consolidated type to regular type
 */
export const adaptUserProfile = (user: UserConsolidated | Partial<UserRegular>): UserRegular => {
  // Ensure we have default values for required properties
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    team: (user.team as TeamColor) || 'none',
    tier: user.tier || 'basic',
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
    settings: adaptSettings(user.settings),
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
    profileBoosts: user.profileBoosts || [],
    isVerified: user.isVerified || false,
    isProtected: user.isProtected || false,
    isVIP: user.isVIP || false,
    isFounder: user.isFounder || false,
    isAdmin: user.isAdmin || false,
    spendStreak: user.spendStreak || 0
  };
};

/**
 * Create UserSubscription with required fields
 */
export const createUserSubscription = (
  planId: string,
  nextBillingDate: string,
  status: 'active' | 'cancelled' | 'expired' | 'pending' | 'paused',
  tier: string
) => {
  return {
    id: planId,
    planId,
    nextBillingDate,
    status,
    tier,
    startDate: new Date().toISOString()
  };
};

/**
 * Ensures the leaderboard filter has all required properties
 */
export const createLeaderboardFilter = (partial: Partial<any>) => {
  return {
    team: partial.team || 'all',
    tier: partial.tier || 'all',
    timeframe: partial.timeframe || 'all',
    search: partial.search || '',
    sortBy: partial.sortBy || 'rank',
    sortDirection: partial.sortDirection || 'asc',
    limit: partial.limit || 10,
    sort: partial.sort || 'rank'
  };
};
