
import { UserProfile as ConsolidatedUserProfile } from '@/types/user-consolidated';
import { UserProfile as UserProfileType } from '@/types/user';
import { User } from '@/types/user';
import { safeToString } from '@/utils/stringUtils';

/**
 * Convert between different user types in the application
 * This is necessary because different parts of the application 
 * expect slightly different user interfaces.
 */

/**
 * Converts a user from the consolidated type to the legacy user type
 * Makes sure required fields are properly set and types match
 */
export const convertToLegacyUser = (user: ConsolidatedUserProfile): User => {
  return {
    id: user.id,
    username: user.username,
    displayName: user.displayName || user.username,
    profileImage: user.profileImage || '',
    bio: user.bio || '',
    // Ensure joinedDate is always set
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    isVerified: user.isVerified || false,
    following: Array.isArray(user.following) ? user.following : [],
    followers: Array.isArray(user.followers) ? user.followers : [],
    achievements: user.achievements || [],
    badges: user.badges || [],
    team: user.team || null,
    tier: user.tier || 'basic',
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || 0,
    // Ensure amountSpent is always set as it's required in legacy User
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
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
    settings: user.settings || {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: true,
      marketingEmails: false,
      showRank: true,
      darkMode: true,
      soundEffects: true,
      showBadges: true,
      showTeam: true,
      showSpending: true
    },
    socialLinks: Array.isArray(user.socialLinks) ? user.socialLinks : [],
    profileBoosts: user.profileBoosts || [],
    spendStreak: user.spendStreak || 0,
    mockeryStats: { received: 0, deployed: 0 },
    certificateNFT: user.certificateNFT?.mintAddress ? {
      mintAddress: user.certificateNFT.mintAddress,
      mintDate: user.certificateNFT.dateIssued || new Date().toISOString()
    } : undefined
  };
};

/**
 * Converts a legacy user to the consolidated type
 */
export const convertToConsolidatedUser = (user: User): ConsolidatedUserProfile => {
  return {
    id: safeToString(user.id),
    username: user.username,
    displayName: user.displayName,
    email: '', // Default empty string for email
    profileImage: user.profileImage,
    bio: user.bio || '',
    joinedDate: user.joinedDate,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent,
    walletBalance: user.walletBalance || 0,
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    tier: user.tier || 'basic',
    team: user.team,
    isVerified: user.isVerified || false,
    isFounder: false, // Default value
    cosmetics: user.cosmetics,
    settings: {
      profileVisibility: user.settings?.profileVisibility || 'public',
      allowProfileLinks: user.settings?.allowProfileLinks || true,
      theme: user.settings?.theme || 'dark',
      notifications: user.settings?.notifications || true,
      emailNotifications: user.settings?.emailNotifications || false,
      marketingEmails: user.settings?.marketingEmails || false,
      showRank: user.settings?.showRank || true,
      darkMode: user.settings?.darkMode || true,
      soundEffects: user.settings?.soundEffects || true,
      showBadges: user.settings?.showBadges || true,
      newFollowerAlerts: user.settings?.newFollowerAlerts || false,
      teamNotifications: user.settings?.teamNotifications || false,
      showTeam: user.settings?.showTeam || true,
      showSpending: user.settings?.showSpending || true
    },
    profileBoosts: user.profileBoosts || [],
    socialLinks: user.socialLinks || [],
    followers: user.followers || [],
    following: user.following || [],
    achievements: user.achievements || [],
    badges: user.badges || [],
    spendStreak: user.spendStreak || 0
  };
};

/**
 * Ensures a user has all required properties for the User type
 */
export const ensureUserHasRequiredProps = (user: Partial<User>): User => {
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    profileImage: user.profileImage || '',
    bio: user.bio || '',
    joinedDate: user.joinedDate || new Date().toISOString(),
    isVerified: user.isVerified || false,
    following: user.following || [],
    followers: user.followers || [],
    achievements: user.achievements || [],
    badges: user.badges || [],
    team: user.team || null,
    tier: user.tier || 'basic',
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || 0,
    // Set amountSpent for compatibility
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
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
      showEmailOnProfile: false,
      rankChangeAlerts: false,
      showTeam: true,
      showSpending: true
    },
    socialLinks: user.socialLinks || [],
    profileBoosts: user.profileBoosts || [],
    spendStreak: user.spendStreak || 0,
    mockeryStats: user.mockeryStats || { received: 0, deployed: 0 },
    certificateNFT: user.certificateNFT
  };
};
