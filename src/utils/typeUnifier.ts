
import { UserProfile } from '@/types/user-consolidated';
import { toTeamColor } from './typeConverters';

/**
 * Convert any user object to a standardized UserProfile
 * This handles differences in property names and ensures all required fields exist
 */
export function toStandardUserProfile(userData: any): UserProfile {
  if (!userData) return null as unknown as UserProfile;
  
  return {
    id: userData.id || userData.userId || '',
    username: userData.username || '',
    displayName: userData.displayName || userData.userName || userData.username || '',
    email: userData.email || '',
    profileImage: userData.profileImage || userData.avatar || '',
    bio: userData.bio || '',
    joinedDate: userData.joinedDate || userData.joinDate || userData.createdAt || new Date().toISOString(),
    isVerified: Boolean(userData.isVerified),
    team: toTeamColor(userData.team || 'none'),
    tier: userData.tier || 'free',
    rank: userData.rank || 0,
    previousRank: userData.previousRank || 0,
    walletBalance: userData.walletBalance || 0,
    totalSpent: userData.totalSpent || userData.amountSpent || 0,
    amountSpent: userData.amountSpent || userData.totalSpent || 0,
    profileBoosts: userData.profileBoosts || [],
    cosmetics: userData.cosmetics || {
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
      showEmailOnProfile: false,
      rankChangeAlerts: false,
      showTeam: true,
      showSpending: true
    },
    followers: Array.isArray(userData.followers) ? userData.followers : [],
    following: Array.isArray(userData.following) ? userData.following : [],
    achievements: userData.achievements || [],
    gender: userData.gender || 'none',
  };
}

/**
 * Convert a standard UserProfile to a component-specific UserProfile format
 * This function can be extended as needed for specific components
 */
export function toUserProfile(standardProfile: UserProfile): UserProfile {
  return standardProfile;
}

/**
 * Ensure that user data has all required fields for a UserProfile
 * This is useful when handling incomplete user data from different sources
 */
export function ensureUserProfile(userData: Partial<UserProfile>): UserProfile {
  return toStandardUserProfile(userData);
}
