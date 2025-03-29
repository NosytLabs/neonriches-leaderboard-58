
import { User } from '@/types/user';

// Ensure User object has all required properties
export const ensureUser = (user: any): User => {
  return {
    id: user.id || '',
    username: user.username || '',
    email: user.email,
    displayName: user.displayName,
    profileImage: user.profileImage,
    bio: user.bio,
    tier: user.tier,
    role: user.role,
    team: user.team,
    rank: user.rank,
    previousRank: user.previousRank,
    walletBalance: user.walletBalance || 0,
    walletAddress: user.walletAddress,
    totalSpent: user.totalSpent || 0,
    spentAmount: user.spentAmount || 0,
    amountSpent: user.amountSpent || 0,
    joinDate: user.joinDate,
    joinedAt: user.joinedAt,
    createdAt: user.createdAt || new Date().toISOString(),
    updatedAt: user.updatedAt,
    isVerified: user.isVerified,
    cosmetics: user.cosmetics,
    subscription: user.subscription,
    activeTitle: user.activeTitle,
    socialLinks: user.socialLinks,
    badges: user.badges || [],
    spendStreak: user.spendStreak || 0,
    gender: user.gender,
    profileViews: user.profileViews || 0,
    profileClicks: user.profileClicks || 0,
    followers: user.followers || 0,
    following: user.following || 0,
    isVIP: user.isVIP || false,
    settings: user.settings,
    profileBoosts: user.profileBoosts || [],
    certificateNFT: user.certificateNFT
  };
};

// Convert a user profile from the API to a User object
export const adaptUserProfileToUser = (userProfile: any): User => {
  return ensureUser(userProfile);
};
