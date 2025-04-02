
import { UserProfile } from '@/types/user-consolidated';
import { TeamColor, UserTier } from '@/types/mockery-types';

/**
 * Creates a demo user profile for testing purposes
 */
export const createDemoUserProfile = (): UserProfile => {
  const demoUser: UserProfile = {
    id: 'demo-user-123',
    username: 'demo_user',
    displayName: 'Demo User',
    email: 'demo@example.com',
    profileImage: '/assets/images/avatars/default.png',
    bio: 'This is a demo user for testing purposes.',
    joinedDate: new Date().toISOString(),
    tier: 'basic',
    team: 'blue' as TeamColor,
    rank: 999,
    previousRank: 1000,
    totalSpent: 0,
    amountSpent: 0,
    walletBalance: 100,
    isVerified: false,
    isProtected: false,
    spendStreak: 0,
    settings: {
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
    cosmetics: {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    }
  };
  
  return demoUser;
};

/**
 * Normalize user data to ensure it meets UserProfile requirements
 */
export const normalizeUserProfile = (user: any): UserProfile => {
  // Ensure all required fields are present
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || user.avatarUrl || '',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    tier: user.tier || 'basic',
    team: user.team || 'none',
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
    isVerified: Boolean(user.isVerified),
    isProtected: Boolean(user.isProtected),
    spendStreak: user.spendStreak || 0,
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
    }
  };
};

export default {
  createDemoUserProfile,
  normalizeUserProfile
};
