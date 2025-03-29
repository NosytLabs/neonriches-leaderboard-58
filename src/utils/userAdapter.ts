
import { User, UserProfile } from '@/types/user';

// Adapter function to convert UserProfile to User
export const adaptUserProfileToUser = (profile: UserProfile): User => {
  return {
    id: profile.id || '',
    username: profile.username || '',
    displayName: profile.displayName || profile.username || '',
    email: profile.email || '',
    profileImage: profile.profileImage || '',
    walletBalance: profile.walletBalance || 0,
    amountSpent: profile.amountSpent || profile.spentAmount || 0,
    team: profile.team || null,
    tier: profile.tier || 'basic',
    spendStreak: 0, // Default value
    joinDate: profile.joinDate || profile.createdAt || new Date().toISOString(),
    createdAt: profile.createdAt || profile.joinDate || new Date().toISOString(),
    rank: profile.rank || 0
  };
};

// Adapter function to convert User to UserProfile
export const adaptUserToUserProfile = (user: User): UserProfile => {
  return {
    id: user.id,
    username: user.username,
    displayName: user.displayName || user.username,
    email: user.email || '',
    profileImage: user.profileImage,
    walletBalance: user.walletBalance || 0,
    amountSpent: user.amountSpent,
    spentAmount: user.amountSpent,
    team: user.team,
    tier: user.tier || 'basic',
    rank: user.rank || 0,
    joinDate: user.joinDate,
    joinedAt: user.createdAt,
    createdAt: user.createdAt,
    profileViews: 0,
    followers: 0,
    following: 0,
    cosmetics: {
      borders: [],
      colors: [],
      fonts: [],
      emojis: [],
      titles: [],
      backgrounds: [],
      effects: [],
      badges: [],
      themes: []
    },
    socialLinks: [],
    profileImages: []
  };
};
