
import { UserProfile as UserProfileConsolidated } from '@/types/user-consolidated';
import { UserProfile } from '@/types/user';

/**
 * Adapts a user profile from the consolidated format to the standard format
 * Ensures all required fields are present in the target type
 */
export const adaptToUserProfile = (
  consolidatedUser: UserProfileConsolidated
): UserProfile => {
  // Create a new user profile with all required fields
  return {
    id: consolidatedUser.id,
    username: consolidatedUser.username,
    displayName: consolidatedUser.displayName,
    email: consolidatedUser.email,
    profileImage: consolidatedUser.profileImage,
    bio: consolidatedUser.bio || '',
    joinedDate: consolidatedUser.joinedDate,
    tier: consolidatedUser.tier,
    team: consolidatedUser.team,
    rank: consolidatedUser.rank,
    previousRank: consolidatedUser.previousRank || 0,
    totalSpent: consolidatedUser.totalSpent || 0,
    amountSpent: consolidatedUser.amountSpent || consolidatedUser.totalSpent || 0,
    walletBalance: consolidatedUser.walletBalance || 0,
    isVerified: consolidatedUser.isVerified || false,
    isFounder: consolidatedUser.isFounder || false,
    isVIP: consolidatedUser.isVIP || false,
    settings: consolidatedUser.settings || {
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
    cosmetics: consolidatedUser.cosmetics || {
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
    following: consolidatedUser.following || [],
    followers: consolidatedUser.followers || [],
    spendStreak: consolidatedUser.spendStreak || 0
  };
};

/**
 * Adapts a user profile from the standard format to the consolidated format
 */
export const adaptToConsolidatedProfile = (
  standardUser: UserProfile
): UserProfileConsolidated => {
  return {
    id: standardUser.id,
    username: standardUser.username,
    displayName: standardUser.displayName,
    email: standardUser.email || '',
    profileImage: standardUser.profileImage,
    bio: standardUser.bio || '',
    joinedDate: standardUser.joinedDate,
    tier: standardUser.tier,
    team: standardUser.team,
    rank: standardUser.rank,
    previousRank: standardUser.previousRank || 0,
    totalSpent: standardUser.totalSpent || standardUser.amountSpent || 0,
    amountSpent: standardUser.amountSpent || standardUser.totalSpent || 0,
    walletBalance: standardUser.walletBalance || 0,
    isVerified: standardUser.isVerified || false,
    isFounder: standardUser.isFounder || false,
    isVIP: standardUser.isVIP || false,
    settings: standardUser.settings || {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: false,
      marketingEmails: false,
      showRank: true,
      darkMode: true,
      soundEffects: true,
      showBadges: false,
      showEmailOnProfile: false,
      rankChangeAlerts: false,
      showTeam: true,
      showSpending: true
    },
    cosmetics: standardUser.cosmetics,
    following: standardUser.following || [],
    followers: standardUser.followers || [],
    spendStreak: standardUser.spendStreak || 0
  };
};
