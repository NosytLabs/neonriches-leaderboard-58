
import { User } from '@/types/user';

/**
 * Ensures that a user object has all the required properties for API operations
 * This is helpful for dealing with potential type mismatches between different versions of the User type
 */
export const ensureUser = (user: any): User => {
  if (!user) return null;
  
  return {
    id: user.id || '',
    email: user.email || '',
    username: user.username || '',
    createdAt: user.createdAt || new Date().toISOString(),
    displayName: user.displayName || user.username || '',
    profileImage: user.profileImage || '',
    bio: user.bio || '',
    isAdmin: user.isAdmin || false,
    team: user.team || null,
    tier: user.tier || 'basic',
    walletBalance: user.walletBalance || 0,
    totalSpent: user.totalSpent || user.amountSpent || user.spentAmount || 0,
    amountSpent: user.amountSpent || user.totalSpent || user.spentAmount || 0,
    spentAmount: user.spentAmount || user.totalSpent || user.amountSpent || 0,
    cosmetics: user.cosmetics || {
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
    activeTitle: user.activeTitle || null,
    walletAddress: user.walletAddress || null,
    subscription: user.subscription || {
      status: 'active',
      tier: 'basic',
      interval: 'monthly',
      startDate: new Date().toISOString(),
      endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
      autoRenew: true,
      features: []
    },
    joinDate: user.joinDate || user.createdAt || new Date().toISOString(),
    joinedAt: user.joinedAt || user.createdAt || new Date().toISOString(),
    rank: user.rank || 0,
    previousRank: user.previousRank || 0
  };
};

export default ensureUser;
