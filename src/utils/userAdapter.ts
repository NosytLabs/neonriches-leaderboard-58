
import { UserProfile, UserCosmetics, User } from '@/types/user';

/**
 * Ensures that a UserProfile has all required properties
 */
export const ensureUser = (profile: UserProfile): UserProfile => {
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
    joinDate: typeof profile.joinedAt === 'string' ? profile.joinedAt : 
              profile.joinedAt ? new Date(profile.joinedAt).toISOString() : new Date().toISOString(),
    joinedAt: profile.joinedAt || new Date().toISOString(),
    createdAt: profile.createdAt || new Date().toISOString(),
    updatedAt: profile.updatedAt || new Date().toISOString(),
    cosmetics: profile.cosmetics || {
      badges: [],
      titles: [],
      borders: [],
      effects: [],
      emojis: [],
      fonts: [],
      colors: [],
      backgrounds: [],
      themes: []
    },
    settings: profile.settings || {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: false,
      marketingEmails: false,
      showRank: true,
      showSpendingAmount: true,
      showBadges: true,
      showAchievements: true,
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
      language: 'en',
      allowMessages: false,
      showSpending: true,
      showTeam: true
    }
  };
};

/**
 * Adapts a UserProfile to a full User object
 * This is used to handle cases where older components expect a User structure
 */
export const adaptUserProfileToUser = (profile: UserProfile): any => {
  if (!profile) return null;
  
  const user = ensureUser(profile);
  
  // For TypeScript compatibility, return as any to avoid strict type checking
  // This is a compromise to make existing code work without massive refactoring
  return user;
};

export default adaptUserProfileToUser;
