
/**
 * User type converter utility to handle different user profile types across the application
 */
import { TeamColor } from '@/types/mockery-types';
import { UserProfile as ConsolidatedUserProfile } from '@/types/user-consolidated'; 
import { UserProfile } from '@/types/user';
import { toTeamColor } from './typeConverters';

/**
 * Convert from UserProfile to ConsolidatedUserProfile
 */
export const toConsolidatedUserProfile = (user: UserProfile | null): ConsolidatedUserProfile | null => {
  if (!user) return null;
  
  return {
    ...user,
    // Ensure required fields are present
    displayName: user.displayName || user.username || '',
    tier: user.tier || 'basic',
    team: typeof user.team === 'string' ? user.team : 'none',
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    settings: {
      ...user.settings,
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
      showSpending: user.settings?.showSpending !== false,
    },
    profileBoosts: user.profileBoosts || [],
    cosmetics: user.cosmetics || {}
  };
};

/**
 * Convert from ConsolidatedUserProfile to UserProfile
 */
export const toUserProfile = (user: ConsolidatedUserProfile | null): UserProfile | null => {
  if (!user) return null;
  
  return {
    ...user,
    // If team is a string, convert it to TeamColor
    team: toTeamColor(user.team) as TeamColor,
    tier: user.tier || 'basic',
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    // Ensure settings has the correct type
    settings: {
      ...user.settings,
      theme: (user.settings?.theme as any) || 'dark'
    }
  };
};

/**
 * Ensure a user has all properties required by UserProfile
 */
export const ensureUserProfile = (user: Partial<UserProfile>): UserProfile => {
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    profileImage: user.profileImage || '/assets/default-avatar.png',
    bio: user.bio || '',
    joinedDate: user.joinedDate || new Date().toISOString(),
    team: toTeamColor(user.team) as TeamColor,
    tier: user.tier || 'basic',
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || 0,
    amountSpent: user.amountSpent || 0,
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
      showSpending: true,
    },
    cosmetics: user.cosmetics || {},
    profileBoosts: user.profileBoosts || []
  };
};

/**
 * Ensure a user has all properties required by ConsolidatedUserProfile
 */
export const ensureConsolidatedUserProfile = (user: Partial<ConsolidatedUserProfile>): ConsolidatedUserProfile => {
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '/assets/default-avatar.png',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
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
      showSpending: true,
    },
    profileBoosts: user.profileBoosts || [],
    cosmetics: user.cosmetics || {},
    spendStreak: user.spendStreak || 0,
    profileViews: user.profileViews || 0,
    profileClicks: user.profileClicks || 0,
    subscription: user.subscription || null,
    purchasedFeatures: user.purchasedFeatures || [],
    certificateNFT: user.certificateNFT || undefined,
    gender: user.gender || 'prefer-not-to-say',
  };
};

export default {
  toConsolidatedUserProfile,
  toUserProfile,
  ensureUserProfile,
  ensureConsolidatedUserProfile
};
