
import { User, UserProfile } from '@/types/user';
import { UserCosmeticState } from '@/types/cosmetics';

/**
 * Adapts a raw user object to a UserProfile object
 */
export const adaptUserToProfile = (user: User): UserProfile => {
  return {
    id: user.id,
    username: user.username,
    displayName: user.displayName || user.username,
    email: user.email || '',
    profileImage: user.profileImage || user.avatarUrl || '',
    bio: user.bio || '',
    joinDate: user.joinDate || user.createdAt || '',
    tier: user.tier,
    team: user.team,
    rank: user.rank || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    walletBalance: user.walletBalance || 0,
    previousRank: user.previousRank || 0,
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
    } as UserCosmeticState,
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
      showEmailOnProfile: false,
      rankChangeAlerts: false
    },
    followers: user.followers || 0,
    following: user.following || 0,
    isVerified: user.isVerified || false,
    isFounder: user.isVIP || false
  };
};

/**
 * Adapts a UserProfile object to a User object
 */
export const adaptProfileToUser = (profile: UserProfile): User => {
  return {
    id: profile.id,
    username: profile.username,
    displayName: profile.displayName,
    email: profile.email,
    profileImage: profile.profileImage,
    bio: profile.bio,
    joinDate: profile.joinDate,
    tier: profile.tier,
    team: profile.team,
    rank: profile.rank,
    amountSpent: profile.amountSpent,
    walletBalance: profile.walletBalance,
    previousRank: profile.previousRank,
    followers: profile.followers,
    following: profile.following,
    isVerified: profile.isVerified,
    isVIP: profile.isFounder
  };
};

// This is just an alias to make it clearer when we are adapting a user profile to a user
export const adaptUserProfileToUser = adaptProfileToUser;
