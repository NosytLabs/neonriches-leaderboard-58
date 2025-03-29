
import { UserProfile, TeamType, UserTier, UserGender } from '@/types/user';

// Function to ensure a user object is in the expected format
export const ensureUser = (user: any): UserProfile => {
  // Make sure all essential properties are present
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email,
    profileImage: user.profileImage || '',
    bio: user.bio || '',
    totalSpent: user.totalSpent || user.amountSpent || user.spentAmount || 0,
    amountSpent: user.amountSpent || user.spentAmount || user.totalSpent || 0,
    spentAmount: user.spentAmount || user.amountSpent || user.totalSpent || 0,
    rank: user.rank || 0,
    team: user.team as TeamType || null,
    tier: user.tier as UserTier || 'free',
    previousRank: user.previousRank || user.rank || 0,
    joinedAt: user.joinedAt || user.joinDate || user.createdAt || new Date().toISOString(),
    joinDate: user.joinDate || user.createdAt || user.joinedAt || new Date().toISOString(),
    createdAt: user.createdAt || user.joinDate || user.joinedAt || new Date().toISOString(),
    gender: user.gender as UserGender || 'neutral',
    profileViews: user.profileViews || 0,
    profileClicks: user.profileClicks || 0,
    followers: user.followers || 0,
    following: user.following || 0,
    spendStreak: user.spendStreak || 0,
    walletBalance: user.walletBalance || 0,
    cosmetics: user.cosmetics || {},
    socialLinks: user.socialLinks || [],
    profileImages: user.profileImages || [],
    profileBoosts: user.profileBoosts || [],
    badges: user.badges || [],
    activeTitle: user.activeTitle || null,
    settings: user.settings || {
      showRank: true,
      showTeam: true,
      showSpending: true,
      publicProfile: true,
      allowMessages: true,
      emailNotifications: true,
      darkMode: true,
      language: 'en'
    },
    isVIP: user.isVIP || false,
    certificateNFT: user.certificateNFT || null,
    subscription: user.subscription || null,
    boosts: user.boosts || user.profileBoosts || [],
    walletAddress: user.walletAddress || null
  };
};

export default {
  ensureUser
};
