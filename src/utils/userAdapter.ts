
import { UserProfile, UserTier } from '@/types/user';

/**
 * Ensures a user object has all required properties, filling in defaults if needed
 * @param user Partial user profile or user ID
 * @returns Complete user profile
 */
export const ensureUser = (user: Partial<UserProfile> | string): UserProfile => {
  if (typeof user === 'string') {
    // If just an ID is provided, create a minimal valid user object
    return {
      id: user,
      username: 'user_' + user.substring(0, 6),
      displayName: 'User',
      totalSpent: 0,
      rank: 0,
      joinedAt: new Date().toISOString()
    };
  }
  
  // Ensure all required fields are present
  return {
    id: user.id || 'unknown',
    username: user.username || 'anonymous',
    displayName: user.displayName || user.username || 'Anonymous User',
    email: user.email,
    profileImage: user.profileImage,
    bio: user.bio,
    totalSpent: user.totalSpent || user.amountSpent || user.spentAmount || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    spentAmount: user.spentAmount || user.totalSpent || 0,
    spendStreak: user.spendStreak || 0,
    rank: user.rank || 0,
    previousRank: user.previousRank,
    tier: user.tier || 'basic' as UserTier,
    team: user.team,
    gender: user.gender,
    joinedAt: user.joinedAt || user.createdAt || new Date().toISOString(),
    joinDate: user.joinDate,
    createdAt: user.createdAt,
    walletBalance: user.walletBalance || 0,
    profileViews: user.profileViews || 0,
    profileClicks: user.profileClicks || 0,
    followers: user.followers || 0,
    following: user.following || 0,
    profileBoosts: user.profileBoosts || [],
    cosmetics: user.cosmetics || {},
    subscription: user.subscription,
    settings: user.settings,
    socialLinks: user.socialLinks || [],
    badges: user.badges || [],
    walletAddress: user.walletAddress
  };
};

export default ensureUser;
