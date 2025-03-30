import { User, UserProfile } from '@/types/user';

// Convert UserProfile to User
export const adaptUserProfileToUser = (profile: UserProfile): User => {
  if (!profile) return {} as User;
  
  return {
    ...profile,
    // Ensure all required properties exist for User type
    id: profile.id || '',
    username: profile.username || '',
    displayName: profile.displayName || profile.username || '',
    email: profile.email || '',
    profileImage: profile.profileImage || '',
    tier: profile.tier || 'free',
    walletBalance: profile.walletBalance || 0,
    totalSpent: profile.totalSpent || profile.amountSpent || profile.spentAmount || 0,
    rank: profile.rank || 0,
    joinedAt: profile.joinedAt || new Date().toISOString(),
    team: profile.team || null,
    amountSpent: profile.amountSpent || profile.totalSpent || profile.spentAmount || 0,
    spentAmount: profile.spentAmount || profile.totalSpent || profile.amountSpent || 0,
    mockeryCount: profile.mockeryCount || 0,
    isProtected: profile.isProtected || false
  };
};

// Convert User to UserProfile
export const adaptUserToUserProfile = (user: User): UserProfile => {
  if (!user) return {} as UserProfile;
  
  return {
    ...user,
    // Ensure all required properties exist for UserProfile type
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '',
    tier: user.tier || 'free',
    walletBalance: user.walletBalance || 0,
    totalSpent: user.totalSpent || user.amountSpent || user.spentAmount || 0,
    rank: user.rank || 0,
    joinedAt: user.joinedAt || user.createdAt || new Date().toISOString(),
    team: user.team || null
  };
};

// Merge user data from an API with existing user data
export const mergeUserData = (existingUser: User, apiUserData: Partial<User>): User => {
  return {
    ...existingUser,
    ...apiUserData,
    // Keep cosmetics and other complex objects if they exist in the API response
    cosmetics: apiUserData.cosmetics || existingUser.cosmetics,
    settings: apiUserData.settings || existingUser.settings,
    profileBoosts: apiUserData.profileBoosts || existingUser.profileBoosts
  };
};
