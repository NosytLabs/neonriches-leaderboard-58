
import { User } from '@/types/user';

/**
 * Ensures a user object has all required properties
 * This is useful when working with user objects that may come from different sources
 * and might be missing some expected properties
 */
export const ensureUser = (user: any): User => {
  if (!user) {
    throw new Error('User object is null or undefined');
  }
  
  // Create a new user object with default values for missing properties
  const ensuredUser: User = {
    id: user.id || '',
    username: user.username || '',
    email: user.email || '',
    displayName: user.displayName || user.username || '',
    profileImage: user.profileImage || user.avatar || '',
    bio: user.bio || '',
    tier: user.tier || 'bronze',
    role: user.role || 'user',
    team: user.team || null,
    rank: user.rank || 0,
    walletBalance: user.walletBalance || 0,
    walletAddress: user.walletAddress || '',
    totalSpent: user.totalSpent || user.amountSpent || user.spentAmount || 0,
    spentAmount: user.spentAmount || user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || user.spentAmount || 0,
    joinDate: user.joinDate || user.createdAt || new Date().toISOString(),
    createdAt: user.createdAt || user.joinDate || new Date().toISOString(),
    updatedAt: user.updatedAt || new Date().toISOString(),
    isVerified: user.isVerified || false,
    cosmetics: user.cosmetics || {
      borders: [],
      colors: [],
      fonts: [],
      emojis: [],
      titles: [],
      backgrounds: [],
      effects: [],
      badges: [],
      themes: [],
    },
    subscription: user.subscription || null,
    activeTitle: user.activeTitle || null,
    socialLinks: user.socialLinks || {},
  };
  
  return ensuredUser;
};

/**
 * Formats a user's display name
 */
export const formatDisplayName = (user: User | null): string => {
  if (!user) return '';
  
  if (user.displayName) {
    return user.displayName;
  }
  
  return user.username;
};

/**
 * Gets user's tier color class
 */
export const getUserTierColor = (tier?: string): string => {
  switch (tier) {
    case 'bronze':
      return 'text-amber-600';
    case 'silver':
      return 'text-slate-400';
    case 'gold':
      return 'text-yellow-500';
    case 'platinum':
      return 'text-indigo-400';
    case 'royal':
      return 'text-royal-gold';
    default:
      return 'text-gray-400';
  }
};

/**
 * Gets user's tier badge class
 */
export const getUserTierBadgeClass = (tier?: string): string => {
  switch (tier) {
    case 'bronze':
      return 'bg-amber-600/20 text-amber-600 border-amber-600/30';
    case 'silver':
      return 'bg-slate-400/20 text-slate-400 border-slate-400/30';
    case 'gold':
      return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
    case 'platinum':
      return 'bg-indigo-400/20 text-indigo-400 border-indigo-400/30';
    case 'royal':
      return 'bg-royal-gold/20 text-royal-gold border-royal-gold/30';
    default:
      return 'bg-gray-400/20 text-gray-400 border-gray-400/30';
  }
};

/**
 * Checks if a user has a specific cosmetic
 */
export const userHasCosmetic = (user: User, cosmeticId: string, category: string): boolean => {
  if (!user.cosmetics) return false;
  
  const categoryKey = category as keyof typeof user.cosmetics;
  const cosmetics = user.cosmetics[categoryKey];
  
  if (!cosmetics || !Array.isArray(cosmetics)) return false;
  
  return cosmetics.includes(cosmeticId);
};

/**
 * Gets initials from user's name
 */
export const getUserInitials = (user: User | null): string => {
  if (!user) return '';
  
  const name = user.displayName || user.username;
  
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};
