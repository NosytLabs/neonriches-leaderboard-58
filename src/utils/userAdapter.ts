
import { UserProfile } from '@/types/user-consolidated';

/**
 * Adapts a user profile object to ensure it has all required properties
 * for components that expect the UserProfile type
 */
export const adaptToUserProfile = (user: any): UserProfile => {
  if (!user) {
    throw new Error('Cannot adapt null or undefined user');
  }
  
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '/assets/default-avatar.png',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    tier: user.tier || 'basic',
    team: user.team || 'none',
    rank: user.rank || 0,
    previousRank: user.previousRank || user.rank || 0,
    totalSpent: user.totalSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
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
    spendStreak: user.spendStreak || 0,
    profileViews: user.profileViews || 0,
    profileClicks: user.profileClicks || 0,
    subscription: user.subscription || null,
    purchasedFeatures: user.purchasedFeatures || [],
    certificates: user.certificates || [],
    gender: user.gender || 'prefer-not-to-say'
  };
};

export default adaptToUserProfile;
