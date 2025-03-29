import { User, UserProfile } from '@/types/user';

/**
 * Adapts a UserProfile to a User type
 * @param profile The user profile to adapt
 * @returns A User object
 */
export const adaptUserProfileToUser = (profile: UserProfile): User => {
  return {
    id: profile.id,
    username: profile.username,
    displayName: profile.displayName || profile.username,
    email: profile.email || '',
    profileImage: profile.profileImage || '',
    bio: profile.bio || '',
    rank: profile.rank || 0,
    joinDate: profile.joinDate || profile.joinedAt || new Date().toISOString(),
    joinedAt: profile.joinedAt || profile.joinDate || new Date().toISOString(),
    amountSpent: profile.amountSpent || profile.totalSpent || 0,
    totalSpent: profile.totalSpent || profile.amountSpent || 0,
    spentAmount: profile.spentAmount || profile.totalSpent || profile.amountSpent || 0,
    walletBalance: profile.walletBalance || 0,
    tier: profile.tier || 'free',
    team: profile.team || null,
    roles: profile.roles || [],
    badges: profile.badges || [],
    activeTitle: profile.activeTitle || '',
    cosmetics: profile.cosmetics || {},
    subscription: profile.subscription || null,
    spendStreak: profile.spendStreak || 0,
    lastActive: new Date().toISOString(),
    createdAt: profile.createdAt || profile.joinDate || profile.joinedAt || new Date().toISOString(),
    settings: profile.settings || {
      showRank: true,
      showTeam: true,
      showSpending: true,
      publicProfile: true,
      allowMessages: true,
      emailNotifications: true,
      darkMode: true,
      language: 'en'
    },
    socialLinks: profile.socialLinks || []
  };
};

/**
 * Ensures that a user object is a valid User type
 * @param user The user object to ensure
 * @returns A validated User object
 */
export const ensureUser = (user: any): User => {
  if (!user) {
    throw new Error('User is required');
  }

  // If it's already a valid User, return it
  if (
    user.id &&
    user.username &&
    user.displayName &&
    user.joinedAt !== undefined
  ) {
    return user as User;
  }

  // Otherwise, adapt it
  return adaptUserProfileToUser(user as UserProfile);
};

export default adaptUserProfileToUser;
