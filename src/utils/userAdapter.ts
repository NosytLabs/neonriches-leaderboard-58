
import { User, UserProfile, LeaderboardUser } from '@/types/user';

/**
 * Adapts a UserProfile to a User
 */
export const adaptUserProfileToUser = (profile: UserProfile): User => {
  return {
    id: profile.id,
    username: profile.username,
    email: profile.email,
    profileImage: profile.profileImage,
    amountSpent: profile.amountSpent,
    walletBalance: profile.walletBalance,
    rank: profile.rank,
    previousRank: profile.previousRank,
    spendStreak: profile.spendStreak,
    tier: profile.tier,
    team: profile.team,
    gender: profile.gender,
    joinedAt: profile.joinedAt,
    socialLinks: profile.socialLinks,
    createdAt: profile.createdAt,
    isAuthenticated: profile.isAuthenticated,
    isAdmin: profile.isAdmin,
    isVerified: profile.isVerified,
    lastLogin: profile.lastLogin,
    activeTitle: profile.activeTitle,
    cosmetics: profile.cosmetics
  };
};

/**
 * Ensures we're working with a User object
 */
export const ensureUser = (user: User | UserProfile): User => {
  if ((user as UserProfile).bio !== undefined) {
    return adaptUserProfileToUser(user as UserProfile);
  }
  return user as User;
};

/**
 * Adapts a User to a LeaderboardUser
 */
export const adaptUserToLeaderboardUser = (user: User): LeaderboardUser => {
  return {
    id: user.id,
    username: user.username,
    amountSpent: user.amountSpent,
    rank: user.rank,
    team: user.team || null,
    tier: user.tier,
    profileImage: user.profileImage,
    gender: user.gender,
    avatarUrl: user.profileImage,
  };
};
