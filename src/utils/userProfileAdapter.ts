
import { UserProfile } from '@/types/user';
import { TeamColor } from '@/types/mockery-types';
import { toTeamColor, toThemeValue, toUserTier } from './typeConverter';

/**
 * Adapts a subscription object to ensure compatibility
 */
export const adaptSubscription = (subscription: any) => {
  if (!subscription) return null;
  
  return {
    planId: subscription.planId || subscription.id || '',
    nextBillingDate: subscription.nextBillingDate || subscription.endDate || '',
    status: subscription.status || 'active',
    tier: subscription.tier || 'basic'
  };
};

/**
 * Adapts user profile data to ensure compatibility across different parts of the app
 */
export const adaptUserProfile = (user: any): UserProfile => {
  if (!user) return null as any;
  
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '/assets/default-avatar.png',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    team: toTeamColor(user.team || 'none') as TeamColor,
    tier: toUserTier(user.tier || 'basic'),
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
    isAdmin: !!user.isAdmin,
    settings: {
      profileVisibility: user.settings?.profileVisibility || 'public',
      allowProfileLinks: user.settings?.allowProfileLinks !== false,
      theme: toThemeValue(user.settings?.theme || 'dark'),
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
    profileBoosts: user.profileBoosts || []
  };
};

export default {
  adaptSubscription,
  adaptUserProfile
};
