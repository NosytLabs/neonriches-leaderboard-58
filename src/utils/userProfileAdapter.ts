
import { UserProfile } from '@/types/user-consolidated';
import { UserProfile as UserProfileLegacy } from '@/types/user';
import { TeamColor } from '@/types/mockery-types';
import { toTeamColor } from '@/utils/typeConverters';

/**
 * Adapts a user profile update object to ensure it has the correct types
 * This makes it easier to update user profiles with proper type checking
 */
export const adaptUserProfileUpdate = (updateData: Partial<UserProfile>): Partial<UserProfile> => {
  // Create a cleaned update object
  const updatedProfile: Partial<UserProfile> = { ...updateData };
  
  // Ensure team is a valid TeamColor if present
  if (updatedProfile.team) {
    updatedProfile.team = toTeamColor(updatedProfile.team);
  }
  
  // Ensure required fields have default values
  if (updatedProfile.displayName === undefined && updateData.username) {
    updatedProfile.displayName = updateData.username;
  }
  
  if (updatedProfile.totalSpent === undefined && updateData.amountSpent !== undefined) {
    updatedProfile.totalSpent = updateData.amountSpent;
  }
  
  if (updatedProfile.amountSpent === undefined && updateData.totalSpent !== undefined) {
    updatedProfile.amountSpent = updateData.totalSpent;
  }
  
  if (updatedProfile.walletBalance === undefined) {
    updatedProfile.walletBalance = 0;
  }
  
  return updatedProfile;
};

/**
 * Converts between user profile types safely
 */
export const convertUserProfile = (user: any): UserProfile => {
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    tier: user.tier || 'basic',
    team: user.team || 'none',
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
      showSpending: true
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
    isVerified: Boolean(user.isVerified),
    isProtected: Boolean(user.isProtected),
    isVIP: Boolean(user.isVIP),
    isFounder: Boolean(user.isFounder),
    isAdmin: Boolean(user.isAdmin)
  };
};

export default adaptUserProfileUpdate;
