
/**
 * Type adapter utilities for handling type compatibility between different interfaces
 */
import { LeaderboardUser as LeaderboardUserMockery } from '@/types/mockery-types';
import { LeaderboardUser as LeaderboardUserRegular } from '@/types/leaderboard';
import { UserProfile as UserConsolidated } from '@/types/user-consolidated';
import { UserProfile as UserRegular } from '@/types/user';
import { TeamColor } from '@/types/team';

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
      showTeam: true,
      showSpending: true
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
 * Adapts a user profile from regular type to consolidated type
 */
export const adaptToConsolidatedUser = (user: UserRegular | Partial<UserConsolidated>): UserConsolidated => {
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    team: user.team || 'none',
    tier: user.tier || 'basic',
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || 0,
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
      showTeam: true,
      showSpending: true
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
    profileBoosts: user.profileBoosts || [],
    spendStreak: user.spendStreak || 0,
    isVerified: user.isVerified || false,
    isProtected: user.isProtected || false,
    isVIP: user.isVIP || false,
    isFounder: user.isFounder || false,
    isAdmin: user.isAdmin || false
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
