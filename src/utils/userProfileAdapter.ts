
import { UserProfile } from '@/types/user';
import { TeamColor } from '@/types/mockery-types';
import { toTeamColor } from './typeConverters';

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
    isAdmin: !!user.isAdmin,
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
    profileBoosts: user.profileBoosts || []
  };
};

export default {
  adaptSubscription,
  adaptUserProfile
};
