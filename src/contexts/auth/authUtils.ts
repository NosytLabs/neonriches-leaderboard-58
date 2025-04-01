
import { UserProfile } from '@/types/user';
import { UserCosmetics } from '@/types/cosmetics';
import { ProfileBoost } from '@/types/user';

/**
 * Creates a default user object with initial values
 */
export const getDefaultUser = (email: string, username: string): UserProfile => {
  const now = new Date().toISOString();
  
  // Initialize cosmetics with empty arrays for each category
  const cosmetics: UserCosmetics = {
    border: [],
    color: [],
    font: [],
    emoji: [],
    title: [],
    background: [],
    effect: [],
    badge: [],
    theme: []
  };
  
  // Add some starter cosmetics for new users
  cosmetics.border.push('starter-border');
  cosmetics.color.push('starter-color');
  cosmetics.title.push('newcomer');
  
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
    joinedDate: now,
    createdAt: now,
    updatedAt: now,
    isVerified: false,
    cosmetics,
    activeTitle: 'newcomer',
    spendStreak: 0,
    gender: 'male',
    profileViews: 0,
    profileClicks: 0,
    followers: [] as string[],
    following: [] as string[],
    isVIP: false,
    settings: {
      showRank: true,
      showTeam: true,
      showSpending: true,
      showEmailOnProfile: false,
      allowMessages: true,
      emailNotifications: false,
      darkMode: true,
      language: 'en',
      rankChangeAlerts: false
    },
    profileBoosts: []
  };
};

/**
 * Adds a profile boost with specified duration in days
 */
export const addProfileBoostWithDays = (user: UserProfile, days: number, strength: number = 1, type: string = 'general'): ProfileBoost[] => {
  if (!user) return [];
  
  const now = new Date();
  const endDate = new Date();
  endDate.setDate(now.getDate() + days);
  
  const profileBoost: ProfileBoost = {
    id: `boost-${Date.now()}`,
    startDate: now.toISOString(),
    endDate: endDate.toISOString(),
    level: strength,
    type,
    strength,
    appliedBy: 'user',
    isActive: true
  };
  
  const profileBoosts = user.profileBoosts || [];
  return [...profileBoosts, profileBoost];
};

/**
 * Adds a cosmetic to a user by category string
 */
export const addCosmeticByCategoryString = (user: UserProfile, cosmeticId: string, category: string): UserCosmetics => {
  if (!user || !cosmeticId || !category) return user.cosmetics || {};
  
  const cosmetics = { ...(user.cosmetics || {}) } as UserCosmetics;
  
  // Map legacy category names to the current property names
  const categoryMap: Record<string, keyof UserCosmetics> = {
    'borders': 'border',
    'colors': 'color',
    'fonts': 'font',
    'emojis': 'emoji',
    'titles': 'title',
    'backgrounds': 'background',
    'effects': 'effect',
    'badges': 'badge',
    'themes': 'theme',
    'border': 'border',
    'color': 'color',
    'font': 'font',
    'emoji': 'emoji',
    'title': 'title',
    'background': 'background',
    'effect': 'effect',
    'badge': 'badge',
    'theme': 'theme'
  };
  
  // Get the correct property name
  const propertyName = categoryMap[category] || category as keyof UserCosmetics;
  
  // Initialize the property as an array if it doesn't exist
  if (!cosmetics[propertyName]) {
    cosmetics[propertyName] = [];
  }
  
  // Add cosmetic if it doesn't already exist
  const currentItems = cosmetics[propertyName] as string[];
  if (!currentItems.includes(cosmeticId)) {
    cosmetics[propertyName] = [...currentItems, cosmeticId];
  }
  
  return cosmetics;
};

/**
 * Calculates user tier based on spending
 */
export const calculateUserTier = (totalSpent: number): UserProfile['tier'] => {
  if (totalSpent >= 1000) return 'royal';
  if (totalSpent >= 500) return 'platinum';
  if (totalSpent >= 200) return 'gold';
  if (totalSpent >= 50) return 'silver';
  return 'bronze';
};

/**
 * Gets the background CSS class for a user tier
 */
export const getTierBackgroundClass = (tier: UserProfile['tier']): string => {
  switch (tier) {
    case 'bronze': return 'bg-amber-900/20';
    case 'silver': return 'bg-slate-400/20';
    case 'gold': return 'bg-yellow-500/20';
    case 'platinum': return 'bg-indigo-400/20';
    case 'royal': return 'bg-royal-gold/20';
    case 'premium': return 'bg-purple-500/20';
    case 'pro': return 'bg-blue-500/20';
    case 'basic': return 'bg-green-500/20';
    case 'free': return 'bg-gray-500/20';
    default: return 'bg-gray-600/20';
  }
};

/**
 * Gets the text color CSS class for a user tier
 */
export const getTierTextClass = (tier: UserProfile['tier']): string => {
  switch (tier) {
    case 'bronze': return 'text-amber-600';
    case 'silver': return 'text-slate-400';
    case 'gold': return 'text-yellow-500';
    case 'platinum': return 'text-indigo-400';
    case 'royal': return 'text-royal-gold';
    case 'premium': return 'text-purple-500';
    case 'pro': return 'text-blue-500';
    case 'basic': return 'text-green-500';
    case 'free': return 'text-gray-400';
    default: return 'text-gray-400';
  }
};

/**
 * Gets the border color CSS class for a user tier
 */
export const getTierBorderClass = (tier: UserProfile['tier']): string => {
  switch (tier) {
    case 'bronze': return 'border-amber-600/30';
    case 'silver': return 'border-slate-400/30';
    case 'gold': return 'border-yellow-500/30';
    case 'platinum': return 'border-indigo-400/30';
    case 'royal': return 'border-royal-gold/30';
    case 'premium': return 'border-purple-500/30';
    case 'pro': return 'border-blue-500/30';
    case 'basic': return 'border-green-500/30';
    case 'free': return 'border-gray-400/30';
    default: return 'border-gray-400/30';
  }
};

/**
 * Gets amount needed to reach next tier
 */
export const getAmountToNextTier = (totalSpent: number): { amount: number; nextTier: UserProfile['tier'] } => {
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

export const mockProfileBoost = (overrides = {}): ProfileBoost => {
  return {
    id: `boost_${Math.random().toString(36).substr(2, 9)}`,
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    level: Math.floor(Math.random() * 3) + 1,
    type: 'visibility',
    strength: Math.floor(Math.random() * 5) + 1,
    appliedBy: `user_${Math.random().toString(36).substr(2, 9)}`,
    isActive: true
  };
};
