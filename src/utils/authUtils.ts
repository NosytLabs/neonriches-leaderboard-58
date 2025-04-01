
// Authentication utility functions and constants
import { UserTier, UserProfile, TeamColor } from '@/types/user';
import { ProfileBoost } from '@/types/boost';
import { UserCosmetics } from '@/types/cosmetics';
import { UserSettings } from '@/types/user-consolidated';

// Default notifications configuration for new users
export const defaultNotifications = {
  email: true,
  push: true,
  in_app: true,
  rankChanges: true
};

// Update the notifications object to include in_app
export const updateNotifications = (notifications: any) => {
  return {
    ...notifications,
    in_app: notifications.in_app ?? true
  };
};

// User authentication states
export const AUTH_STATES = {
  AUTHENTICATED: 'authenticated',
  UNAUTHENTICATED: 'unauthenticated',
  LOADING: 'loading'
};

// Parse JWT token
export const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

// Check if token is expired
export const isTokenExpired = (token: string) => {
  const decodedToken = parseJwt(token);
  if (!decodedToken) return true;
  
  const currentTime = Date.now() / 1000;
  return decodedToken.exp < currentTime;
};

// Format display name from user data
export const formatDisplayName = (user: UserProfile | null) => {
  if (!user) return '';
  return user.displayName || user.username || 'Anonymous User';
};

// Get user initials for avatars
export const getUserInitials = (user: UserProfile | null) => {
  if (!user) return 'U';
  
  const displayName = formatDisplayName(user);
  return displayName
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');
};

/**
 * Creates a default user object with initial values
 */
export const getDefaultUser = (email: string, username: string): UserProfile => {
  const now = new Date().toISOString();
  
  return {
    id: `user-${Date.now()}`,
    email,
    username,
    displayName: username,
    profileImage: `https://api.dicebear.com/7.x/personas/svg?seed=${username}`,
    bio: '',
    tier: 'basic' as UserTier,
    team: 'none' as TeamColor,
    rank: 0,
    walletBalance: 5.00, // Starting balance
    totalSpent: 0,
    amountSpent: 0,
    joinedDate: now,
    createdAt: now, // Add createdAt instead of joinDate
    isVerified: false,
    cosmetics: {
      border: ['starter-border'],
      color: ['starter-color'],
      font: [],
      emoji: [],
      title: ['newcomer'],
      background: [],
      effect: [],
      badge: [],
      theme: []
    } as UserCosmetics,
    settings: {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: false,
      marketingEmails: false,
      showRank: true,
      darkMode: true,
      soundEffects: true,
      showEmailOnProfile: false,
      rankChangeAlerts: false,
      showTeam: true,
      showSpending: true,
      showBadges: true
    },
    followers: [] as string[], // Fix type for followers
    following: [] as string[], // Fix type for following
    spendStreak: 0
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
    isActive: true // Add the missing isActive property
  };
  
  const profileBoosts = user.profileBoosts || [];
  return [...profileBoosts, profileBoost];
};

/**
 * Adds a cosmetic to a user by category string
 */
export const addCosmeticByCategoryString = (user: UserProfile, cosmeticId: string, category: string): UserCosmetics => {
  if (!user || !cosmeticId || !category) return user.cosmetics as UserCosmetics;
  
  const cosmetics = { ...user.cosmetics } as UserCosmetics;
  
  // Handle legacy field names
  let fieldName = category;
  if (category === 'borders') fieldName = 'border';
  if (category === 'colors') fieldName = 'color';
  if (category === 'fonts') fieldName = 'font';
  if (category === 'emojis') fieldName = 'emoji';
  if (category === 'titles') fieldName = 'title';
  if (category === 'backgrounds') fieldName = 'background';
  if (category === 'effects') fieldName = 'effect';
  if (category === 'badges') fieldName = 'badge';
  if (category === 'themes') fieldName = 'theme';
  
  // Convert category to a valid key
  const cosmeticKey = fieldName as keyof UserCosmetics;
  
  // Ensure the category exists and is an array
  if (!cosmetics[cosmeticKey]) {
    cosmetics[cosmeticKey] = [];
  }
  
  // Add cosmetic if it doesn't already exist
  if (cosmetics[cosmeticKey] && !cosmetics[cosmeticKey].includes(cosmeticId)) {
    // Using type assertion to ensure TypeScript understands this is a string array
    const currentItems = cosmetics[cosmeticKey] as string[];
    cosmetics[cosmeticKey] = [...currentItems, cosmeticId];
  }
  
  return cosmetics;
};

/**
 * Calculates user tier based on spending
 */
export const calculateUserTier = (totalSpent: number): UserTier => {
  if (totalSpent >= 1000) return 'royal';
  if (totalSpent >= 500) return 'platinum';
  if (totalSpent >= 200) return 'gold';
  if (totalSpent >= 50) return 'silver';
  return 'bronze';
};

/**
 * Gets the background CSS class for a user tier
 */
export const getTierBackgroundClass = (tier: UserTier): string => {
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
    case 'diamond': return 'bg-cyan-500/20';
    case 'founder': return 'bg-emerald-500/20';
    case 'vip': return 'bg-pink-500/20';
    default: return 'bg-gray-600/20';
  }
};

/**
 * Gets the text color CSS class for a user tier
 */
export const getTierTextClass = (tier: UserTier): string => {
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
    case 'diamond': return 'text-cyan-500';
    case 'founder': return 'text-emerald-500';
    case 'vip': return 'text-pink-500';
    default: return 'text-gray-400';
  }
};

/**
 * Gets the border color CSS class for a user tier
 */
export const getTierBorderClass = (tier: UserTier): string => {
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
    case 'diamond': return 'border-cyan-500/30';
    case 'founder': return 'border-emerald-500/30';
    case 'vip': return 'border-pink-500/30';
    default: return 'border-gray-400/30';
  }
};

/**
 * Gets amount needed to reach next tier
 */
export const getAmountToNextTier = (totalSpent: number): { amount: number; nextTier: UserTier } => {
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

export const createMockUser = (overrides = {}) => {
  return {
    id: `user_${Math.random().toString(36).substr(2, 9)}`,
    username: `user_${Math.random().toString(36).substr(2, 5)}`,
    displayName: 'Test User',
    profileImage: `https://api.dicebear.com/7.x/personas/svg?seed=${Math.random()}`,
    bio: 'This is a test user account',
    joinedDate: new Date().toISOString(),
    rank: Math.floor(Math.random() * 1000) + 1,
    previousRank: Math.floor(Math.random() * 1000) + 1,
    totalSpent: Math.floor(Math.random() * 10000),
    amountSpent: Math.floor(Math.random() * 10000),
    walletBalance: Math.floor(Math.random() * 5000),
    tier: 'basic',
    team: 'blue',
    isVerified: Math.random() > 0.5,
    isVIP: Math.random() > 0.8,
    followers: [] as string[], // Fix the type for followers
    following: [] as string[], // Fix the type for following
    profileViews: Math.floor(Math.random() * 500),
    profileClicks: Math.floor(Math.random() * 200),
    spendStreak: Math.floor(Math.random() * 10),
    lastActive: new Date().toISOString(),
    settings: {
      profileVisibility: "public",
      allowProfileLinks: true,
      theme: "dark",
      notifications: true,
      emailNotifications: false,
      marketingEmails: false,
      showRank: true,
      darkMode: true,
      soundEffects: true,
      showEmailOnProfile: false,
      rankChangeAlerts: false,
      showTeam: true,
      showSpending: true,
      showBadges: true
    },
    ...overrides
  };
};
