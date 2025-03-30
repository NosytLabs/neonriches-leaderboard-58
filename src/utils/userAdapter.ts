
import { UserProfile } from '@/types/user';

/**
 * Adapts a UserProfile to a full User object
 * This is used to handle cases where older components expect a User structure
 */
export const adaptUserProfileToUser = (profile: UserProfile) => {
  if (!profile) return null;
  
  return {
    ...profile,
    // Ensure required fields exist
    id: profile.id,
    username: profile.username,
    email: profile.email || '',
    amountSpent: profile.totalSpent || profile.amountSpent || 0,
    spentAmount: profile.totalSpent || profile.amountSpent || 0,
    walletBalance: profile.walletBalance || 0,
    rank: profile.rank || 0,
    previousRank: profile.previousRank || profile.rank || 0,
    tier: profile.tier || 'basic',
    team: profile.team || 'none',
    joinDate: profile.joinedAt ? profile.joinedAt.toISOString() : new Date().toISOString(),
    createdAt: profile.joinedAt ? profile.joinedAt.toISOString() : new Date().toISOString(),
    cosmetics: profile.cosmetics || {
      badges: [],
      titles: [],
      borders: [],
      effects: [],
      emojis: [],
      fonts: [],
      colors: [],
      backgrounds: []
    },
    settings: profile.settings || {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: false,
      soundEffects: true,
      showEmailOnProfile: false,
      rankChangeAlerts: true,
      teamChangeAlerts: true,
      spendingAlerts: true,
      mockeryAlerts: true,
      shameAlerts: true,
      animationEffects: true,
      showStatusInLeaderboard: true,
      displayRankChanges: true,
      enableMockeryEffects: true,
      receiveRoyalAnnouncements: true,
      language: 'en'
    }
  };
};

export default adaptUserProfileToUser;
