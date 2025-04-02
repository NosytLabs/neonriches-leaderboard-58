
import { UserProfile as ConsolidatedUserProfile, UserSettings, UserSubscription } from '@/types/user-consolidated';
import { UserProfile as UserProfileType } from '@/types/user';
import { TeamColor } from '@/types/mockery-types';
import { toTeamColor } from './typeConverter';

/**
 * Convert a consolidated user profile to ensure compatibility with components
 * that expect a UserProfileType
 */
export const convertToUserProfile = (user: ConsolidatedUserProfile): UserProfileType => {
  return {
    id: user.id,
    username: user.username,
    displayName: user.displayName,
    email: user.email || '',
    profileImage: user.profileImage,
    bio: user.bio || '',
    joinedDate: user.joinedDate,
    team: toTeamColor(user.team) as TeamColor,
    tier: user.tier,
    rank: user.rank,
    previousRank: user.previousRank,
    totalSpent: user.totalSpent,
    amountSpent: user.amountSpent,
    walletBalance: user.walletBalance,
    isVerified: user.isVerified || false,
    isProtected: user.isProtected || false,
    isVIP: user.isVIP || false,
    isFounder: user.isFounder || false,
    settings: {
      ...user.settings,
      theme: user.settings.theme as "royal" | "dark" | "light" | "system",
    },
    cosmetics: user.cosmetics || {},
    profileBoosts: user.profileBoosts || [],
    spendStreak: user.spendStreak,
    following: user.following || [],
    followers: user.followers || []
  };
};

/**
 * Adapts a user profile to ensure compatibility across different parts of the app
 */
export const adaptUserProfile = (user: any): UserProfileType => {
  if (!user) return null as any;
  
  const consolidatedUser: ConsolidatedUserProfile = {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '/assets/default-avatar.png',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    team: toTeamColor(user.team),
    tier: user.tier || 'basic',
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
    spendStreak: user.spendStreak || 0,
    isVerified: !!user.isVerified,
    isProtected: !!user.isProtected,
    isVIP: !!user.isVIP,
    isFounder: !!user.isFounder,
    settings: {
      profileVisibility: user.settings?.profileVisibility || 'public',
      allowProfileLinks: user.settings?.allowProfileLinks !== false,
      theme: user.settings?.theme || 'dark',
      notifications: user.settings?.notifications !== false,
      emailNotifications: user.settings?.emailNotifications || false,
      marketingEmails: user.settings?.marketingEmails || false,
      showRank: user.settings?.showRank !== false,
      darkMode: user.settings?.darkMode !== false,
      soundEffects: user.settings?.soundEffects !== false,
      showBadges: user.settings?.showBadges !== false,
      showTeam: user.settings?.showTeam !== false,
      showSpending: user.settings?.showSpending !== false
    },
    profileBoosts: user.profileBoosts || [],
    cosmetics: user.cosmetics || {},
    followers: user.followers || [],
    following: user.following || []
  };
  
  return convertToUserProfile(consolidatedUser);
};

/**
 * Adapt a subscription object to ensure it contains all required fields
 */
export const adaptSubscription = (subscription: any): UserSubscription => {
  if (!subscription) {
    return {
      id: '',
      tier: 'basic',
      status: 'expired',
      startDate: new Date().toISOString(),
      planId: '',
      nextBillingDate: ''
    };
  }

  return {
    id: subscription.id || `sub_${Date.now()}`,
    tier: subscription.tier || 'basic',
    status: subscription.status || 'active',
    startDate: subscription.startDate || new Date().toISOString(),
    endDate: subscription.endDate,
    autoRenew: subscription.autoRenew,
    planId: subscription.planId || '',
    nextBillingDate: subscription.nextBillingDate || '',
    cancelAtPeriodEnd: subscription.cancelAtPeriodEnd
  };
};

export default {
  convertToUserProfile,
  adaptUserProfile,
  adaptSubscription
};
