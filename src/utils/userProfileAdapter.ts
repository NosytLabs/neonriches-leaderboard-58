
import { UserProfile } from '@/types/user-consolidated';
import { TeamColor, UserTier } from '@/types/mockery-types';
import { UserSubscription } from '@/types/user-consolidated';
import { ensureTeamColor, ensureUserTier } from '@/utils/typeUnifier';

export const adaptUserProfile = (userData: any): UserProfile => {
  if (!userData) {
    throw new Error('Cannot adapt null user data');
  }
  
  return {
    id: userData.id || '',
    username: userData.username || '',
    displayName: userData.displayName || userData.username || 'Anonymous User',
    email: userData.email || '',
    profileImage: userData.profileImage || '/assets/default-avatar.png',
    bio: userData.bio || '',
    joinedDate: userData.joinedDate || userData.joinDate || userData.createdAt || new Date().toISOString(),
    totalSpent: userData.totalSpent || userData.amountSpent || 0,
    team: ensureTeamColor(userData.team),
    joinDate: userData.joinDate || userData.joinedDate || userData.createdAt,
    createdAt: userData.createdAt || userData.joinedDate || userData.joinDate,
    isVerified: userData.isVerified || false,
    isProtected: userData.isProtected || false,
    isVIP: userData.isVIP || false,
    isFounder: userData.isFounder || false,
    isAdmin: userData.isAdmin || false,
    tier: ensureUserTier(userData.tier),
    rank: userData.rank || 0,
    previousRank: userData.previousRank || 0,
    amountSpent: userData.amountSpent || userData.totalSpent || 0,
    walletBalance: userData.walletBalance || 0,
    spendStreak: userData.spendStreak || 0,
    settings: userData.settings || {
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
    profileBoosts: userData.profileBoosts || [],
    cosmetics: userData.cosmetics || {},
    followers: userData.followers || [],
    following: userData.following || [],
    achievements: userData.achievements || [],
    badges: userData.badges || [],
    socialLinks: userData.socialLinks || [],
    profileViews: userData.profileViews || 0,
    profileClicks: userData.profileClicks || 0,
    boostCount: userData.boostCount || 0,
    purchasedFeatures: userData.purchasedFeatures || [],
    gender: userData.gender || 'prefer-not-to-say',
    lastActive: userData.lastActive || userData.lastLogin || new Date().toISOString(),
    activeTitle: userData.activeTitle || '',
    subscription: userData.subscription || null,
    certificateNFT: userData.certificateNFT || null
  };
};

export const adaptSubscription = (subscriptionData: any): UserSubscription => {
  if (!subscriptionData) {
    return null as any;
  }
  
  return {
    id: subscriptionData.id || `sub_${Math.random().toString(36).substring(2, 15)}`,
    planId: subscriptionData.planId || '',
    status: subscriptionData.status || 'active',
    startDate: subscriptionData.startDate || new Date().toISOString(),
    endDate: subscriptionData.endDate,
    autoRenew: subscriptionData.autoRenew ?? true,
    cancelAtPeriodEnd: subscriptionData.cancelAtPeriodEnd ?? false,
    nextBillingDate: subscriptionData.nextBillingDate || '',
    tier: subscriptionData.tier || 'basic'
  };
};
