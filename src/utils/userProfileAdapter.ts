
import { UserProfile } from '@/types/user-consolidated';
import { UserProfile as UserProfileLegacy } from '@/types/user';
import { TeamColor } from '@/types/mockery-types';
import { toTeamColor } from '@/utils/typeConverters';

/**
 * Converts a consolidated UserProfile to a legacy UserProfile type
 */
export function convertToLegacyUserProfile(user: UserProfile): UserProfileLegacy {
  // Ensure the team is a valid TeamColor
  const team = toTeamColor(user.team);
  
  return {
    id: user.id,
    username: user.username,
    displayName: user.displayName,
    email: user.email,
    profileImage: user.profileImage,
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    isVerified: user.isVerified || false,
    team: team,
    tier: user.tier,
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
    settings: {
      profileVisibility: (user.settings?.profileVisibility as "public" | "private" | "followers" | "friends") || 'public',
      allowProfileLinks: Boolean(user.settings?.allowProfileLinks),
      theme: (user.settings?.theme as "light" | "dark" | "royal" | "system") || 'dark',
      notifications: Boolean(user.settings?.notifications),
      emailNotifications: Boolean(user.settings?.emailNotifications),
      marketingEmails: Boolean(user.settings?.marketingEmails),
      showRank: Boolean(user.settings?.showRank),
      darkMode: Boolean(user.settings?.darkMode),
      soundEffects: Boolean(user.settings?.soundEffects),
      showBadges: Boolean(user.settings?.showBadges),
      showTeam: Boolean(user.settings?.showTeam),
      showSpending: Boolean(user.settings?.showSpending)
    },
    profileBoosts: user.profileBoosts || [],
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
    spendStreak: user.spendStreak || 0
  };
}

/**
 * Converts a legacy UserProfile to a consolidated UserProfile type
 */
export function convertToConsolidatedUserProfile(user: UserProfileLegacy): UserProfile {
  return {
    id: user.id,
    username: user.username,
    displayName: user.displayName || user.username,
    email: user.email || '',
    profileImage: user.profileImage,
    bio: user.bio || '',
    joinedDate: user.joinedDate,
    team: user.team || 'none',
    tier: user.tier || 'basic',
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
      showTeam: true,
      showSpending: true
    },
    profileBoosts: user.profileBoosts || [],
    cosmetics: user.cosmetics,
    spendStreak: user.spendStreak || 0
  };
}

/**
 * Converts subscription data to the format expected by the user type
 */
export function adaptSubscription(subscription: any): UserProfile['subscription'] {
  if (!subscription) return null;
  
  return {
    id: subscription.id || `sub-${Date.now()}`,
    tier: subscription.tier || 'basic',
    status: (subscription.status as "active" | "cancelled" | "expired" | "pending" | "paused") || 'pending',
    startDate: subscription.startDate || new Date().toISOString(),
    endDate: subscription.endDate,
    autoRenew: subscription.autoRenew || false,
    planId: subscription.planId || '',
    nextBillingDate: subscription.nextBillingDate || '',
    cancelAtPeriodEnd: subscription.cancelAtPeriodEnd || false
  };
}

export default {
  convertToLegacyUserProfile,
  convertToConsolidatedUserProfile,
  adaptSubscription
};
