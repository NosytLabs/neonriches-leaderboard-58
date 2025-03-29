
import { User, UserProfile, TeamType } from '@/types/user';

// Convert User to UserProfile format
export const ensureUserProfile = (user: User | UserProfile): UserProfile => {
  // Already a UserProfile if it doesn't have uid
  if (!('uid' in user)) {
    return user as UserProfile;
  }

  // Convert from User to UserProfile
  return {
    id: user.id || user.uid || '',
    username: user.username,
    displayName: user.displayName,
    profileImage: user.profileImage,
    bio: user.bio,
    email: user.email,
    tier: user.tier,
    team: user.team,
    rank: user.rank,
    previousRank: user.previousRank,
    amountSpent: user.amountSpent || user.spentAmount || 0,
    spentAmount: user.amountSpent || user.spentAmount || 0,
    walletBalance: user.walletBalance || 0,
    joinedAt: user.joinedAt || user.joinDate || user.createdAt,
    joinDate: user.joinedAt || user.joinDate || user.createdAt,
    createdAt: user.createdAt,
    lastLogin: user.lastLogin,
    isAuthenticated: user.isAuthenticated,
    isAdmin: user.isAdmin,
    isVIP: user.isVIP,
    cosmetics: user.cosmetics,
    spendStreak: user.spendStreak || 0,
    profileBoosts: user.profileBoosts || [],
    settings: user.settings,
    socialLinks: user.socialLinks || [],
    badges: user.badges || [],
    activeTitle: user.activeTitle,
    activeMockeryEffects: user.activeMockeryEffects,
    certificateNFT: user.certificateNFT
  };
};

// Convert UserProfile to User format
export const ensureUser = (userProfile: UserProfile | User): User => {
  // Already a User if it has uid
  if ('uid' in userProfile) {
    return userProfile as User;
  }

  // Convert from UserProfile to User
  return {
    id: userProfile.id,
    uid: userProfile.id,
    username: userProfile.username,
    displayName: userProfile.displayName,
    profileImage: userProfile.profileImage,
    bio: userProfile.bio,
    email: userProfile.email,
    tier: userProfile.tier,
    team: userProfile.team,
    rank: userProfile.rank,
    previousRank: userProfile.previousRank,
    amountSpent: userProfile.amountSpent || userProfile.spentAmount || 0,
    spentAmount: userProfile.amountSpent || userProfile.spentAmount || 0,
    walletBalance: userProfile.walletBalance || 0,
    joinedAt: userProfile.joinedAt || userProfile.joinDate || userProfile.createdAt,
    joinDate: userProfile.joinedAt || userProfile.joinDate || userProfile.createdAt,
    createdAt: userProfile.createdAt,
    lastLogin: userProfile.lastLogin,
    isAuthenticated: userProfile.isAuthenticated,
    isAdmin: userProfile.isAdmin,
    isVIP: userProfile.isVIP,
    cosmetics: userProfile.cosmetics,
    spendStreak: userProfile.spendStreak || 0,
    profileBoosts: userProfile.profileBoosts || [],
    settings: userProfile.settings,
    socialLinks: userProfile.socialLinks || [],
    badges: userProfile.badges || [],
    activeTitle: userProfile.activeTitle,
    activeMockeryEffects: userProfile.activeMockeryEffects,
    certificateNFT: userProfile.certificateNFT
  };
};

// Create a partial user object with default values
export const createPartialUser = (partialUser: Partial<User>): Partial<User> => {
  return {
    ...partialUser,
    rank: partialUser.rank || 999,
    previousRank: partialUser.previousRank || partialUser.rank || 999,
    amountSpent: partialUser.amountSpent || partialUser.spentAmount || 0,
    profileImage: partialUser.profileImage || partialUser.avatarUrl,
    isAuthenticated: partialUser.isAuthenticated || partialUser.isVerified || false,
  };
};

export default ensureUser;
