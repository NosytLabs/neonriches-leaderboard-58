
import { User, UserCosmetics } from '@/types/user';

/**
 * Creates a default user object with initial values
 */
export const getDefaultUser = (email: string, username: string): User => {
  const now = new Date().toISOString();
  
  // Initialize cosmetics with empty arrays for each category
  const cosmetics: UserCosmetics = {
    borders: [],
    colors: [],
    fonts: [],
    emojis: [],
    titles: [],
    backgrounds: [],
    effects: [],
    badges: [],
    themes: [],
    socialLinks: {}
  };
  
  // Add some starter cosmetics for new users
  cosmetics.borders.push('starter-border');
  cosmetics.colors.push('starter-color');
  cosmetics.titles.push('newcomer');
  
  return {
    id: `user-${Date.now()}`,
    email,
    username,
    displayName: username,
    profileImage: `https://api.dicebear.com/7.x/personas/svg?seed=${username}`,
    bio: '',
    tier: 'bronze',
    role: 'user',
    team: null,
    rank: 0,
    walletBalance: 5.00, // Starting balance
    totalSpent: 0,
    spentAmount: 0,
    amountSpent: 0,
    joinDate: now,
    createdAt: now,
    updatedAt: now,
    isVerified: false,
    cosmetics,
    activeTitle: 'newcomer'
  };
};

/**
 * Calculates user tier based on spending
 */
export const calculateUserTier = (totalSpent: number): User['tier'] => {
  if (totalSpent >= 1000) return 'royal';
  if (totalSpent >= 500) return 'platinum';
  if (totalSpent >= 200) return 'gold';
  if (totalSpent >= 50) return 'silver';
  return 'bronze';
};

/**
 * Gets the background CSS class for a user tier
 */
export const getTierBackgroundClass = (tier: User['tier']): string => {
  switch (tier) {
    case 'bronze': return 'bg-amber-900/20';
    case 'silver': return 'bg-slate-400/20';
    case 'gold': return 'bg-yellow-500/20';
    case 'platinum': return 'bg-indigo-400/20';
    case 'royal': return 'bg-royal-gold/20';
    default: return 'bg-gray-600/20';
  }
};

/**
 * Gets the text color CSS class for a user tier
 */
export const getTierTextClass = (tier: User['tier']): string => {
  switch (tier) {
    case 'bronze': return 'text-amber-600';
    case 'silver': return 'text-slate-400';
    case 'gold': return 'text-yellow-500';
    case 'platinum': return 'text-indigo-400';
    case 'royal': return 'text-royal-gold';
    default: return 'text-gray-400';
  }
};

/**
 * Gets the border color CSS class for a user tier
 */
export const getTierBorderClass = (tier: User['tier']): string => {
  switch (tier) {
    case 'bronze': return 'border-amber-600/30';
    case 'silver': return 'border-slate-400/30';
    case 'gold': return 'border-yellow-500/30';
    case 'platinum': return 'border-indigo-400/30';
    case 'royal': return 'border-royal-gold/30';
    default: return 'border-gray-400/30';
  }
};

/**
 * Gets amount needed to reach next tier
 */
export const getAmountToNextTier = (totalSpent: number): { amount: number; nextTier: User['tier'] } => {
  if (totalSpent < 50) {
    return { amount: 50 - totalSpent, nextTier: 'silver' };
  } else if (totalSpent < 200) {
    return { amount: 200 - totalSpent, nextTier: 'gold' };
  } else if (totalSpent < 500) {
    return { amount: 500 - totalSpent, nextTier: 'platinum' };
  } else if (totalSpent < 1000) {
    return { amount: 1000 - totalSpent, nextTier: 'royal' };
  }
  // Already at highest tier
  return { amount: 0, nextTier: 'royal' };
};
