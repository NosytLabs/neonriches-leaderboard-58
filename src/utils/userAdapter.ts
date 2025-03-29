
import { User, UserProfile } from '@/types/user';

/**
 * Adapts a User object to a UserProfile object
 */
export const adaptUserToUserProfile = (user: User): UserProfile => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    displayName: user.displayName,
    joinedAt: user.joinedAt || user.createdAt,
    rank: user.rank,
    amountSpent: user.amountSpent,
    walletBalance: user.walletBalance,
    profileImage: user.profileImage,
    bio: user.bio,
    team: user.team,
    tier: user.tier,
    gender: user.gender,
    spendStreak: user.spendStreak,
    totalSpent: user.totalSpent || user.amountSpent,
    spentAmount: user.spentAmount || user.amountSpent,
    followers: user.followers,
    following: user.following
  };
};

/**
 * Adapts a UserProfile object to a User object
 */
export const adaptUserProfileToUser = (profile: UserProfile): User => {
  return {
    id: profile.id,
    username: profile.username,
    email: profile.email,
    displayName: profile.displayName,
    joinedAt: profile.joinedAt,
    createdAt: profile.joinedAt,
    rank: profile.rank,
    amountSpent: profile.amountSpent,
    walletBalance: profile.walletBalance,
    profileImage: profile.profileImage,
    bio: profile.bio,
    team: profile.team,
    tier: profile.tier,
    gender: profile.gender,
    spendStreak: profile.spendStreak,
    totalSpent: profile.totalSpent || profile.amountSpent,
    spentAmount: profile.spentAmount || profile.amountSpent,
    followers: profile.followers,
    following: profile.following
  };
};

export default {
  adaptUserToUserProfile,
  adaptUserProfileToUser
};
