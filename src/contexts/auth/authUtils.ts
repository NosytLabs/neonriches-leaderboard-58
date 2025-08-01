import { UserProfile } from '@/types/user-consolidated';
import { ProfileBoost } from '@/types/boost';
import { UserCosmetics } from '@/types/cosmetics';
import { TeamColor } from '@/types/team';
import { UserSettings } from '@/types/user-consolidated';
import { UserTier } from '@/types/user';

/**
 * Creates a demo user profile for testing purposes
 */
export const createDemoUserProfile = (id: string = 'demo-user', username: string = 'demo_user'): UserProfile => {
  return {
    id: id,
    username: username,
    displayName: `${username.charAt(0).toUpperCase()}${username.slice(1)}`,
    email: `${username}@example.com`,
    profileImage: 'https://via.placeholder.com/150',
    bio: 'This is a demo user for testing purposes.',
    joinedDate: new Date().toISOString(),
    isVerified: true,
    team: 'red',
    tier: 'premium',
    rank: 42,
    previousRank: 45,
    walletBalance: 1000,
    totalSpent: 500,
    amountSpent: 500,
    profileBoosts: [],
    cosmetics: {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    },
    spendStreak: 0,
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
      showBadges: true,
      showTeam: true,
      showSpending: true
    }
  };
};

/**
 * Process user data from the server to match the frontend User type
 * @param userData - Raw user data from the server
 * @returns - Processed user data
 */
export const processUser = (
  userData: any, 
): UserProfile | null => {
  if (!userData) return null;
  
  // Normalize the data fields from various possible sources
  const user: UserProfile = {
    id: userData.id || userData.userId || '',
    username: userData.username || '',
    displayName: userData.displayName || userData.userName || userData.username || '',
    email: userData.email || '',
    profileImage: userData.profileImage || userData.avatar || '',
    bio: userData.bio || '',
    joinedDate: userData.joinedDate || userData.joinDate || userData.createdAt || new Date().toISOString(),
    isVerified: Boolean(userData.isVerified),
    team: userData.team || 'none' as TeamColor,
    tier: userData.tier || 'free',
    rank: userData.rank || 0,
    previousRank: userData.previousRank || 0,
    walletBalance: userData.walletBalance || 0,
    totalSpent: userData.totalSpent || userData.amountSpent || 0,
    amountSpent: userData.amountSpent || userData.totalSpent || 0,
    profileBoosts: userData.profileBoosts || [],
    cosmetics: userData.cosmetics || {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    },
    spendStreak: userData.spendStreak || 0,
    settings: userData.settings || {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'dark',
      notifications: true,
      emailNotifications: false,
      marketingEmails: false,
      showRank: true,
      darkMode: true,
      soundEffects: true,
      showBadges: true,
      showEmailOnProfile: false,
      rankChangeAlerts: false,
      showTeam: true,
      showSpending: true
    }
  };
  
  // Optional fields
  if (userData.followers) {
    user.followers = Array.isArray(userData.followers) ? userData.followers : [];
  }
  
  if (userData.following) {
    user.following = Array.isArray(userData.following) ? userData.following : [];
  }
  
  if (userData.achievements) {
    user.achievements = userData.achievements;
  }
  
  return user;
};

/**
 * Sanitize user data for storage or transmission
 * @param user - User data to sanitize
 * @returns Sanitized user data
 */
export const sanitizeUserData = (user: UserProfile): Partial<UserProfile> => {
  if (!user) return {};
  
  // Create a copy without sensitive information
  const sanitizedUser = { ...user };
  
  // Remove sensitive information
  delete (sanitizedUser as any).token;
  delete (sanitizedUser as any).refreshToken;
  delete (sanitizedUser as any).passwordHash;
  
  return sanitizedUser;
};

/**
 * Check if the user has the required permissions
 * @param user - User to check
 * @param requiredPermissions - Permissions needed
 * @returns Boolean indicating if user has permission
 */
export const hasPermission = (
  user: UserProfile | null, 
  requiredPermissions: string[]
): boolean => {
  if (!user) return false;
  
  // If no permissions are required, grant access
  if (!requiredPermissions || requiredPermissions.length === 0) {
    return true;
  }
  
  // Check if user has the permissions
  const userPermissions = (user as any).permissions || [];
  
  // Check if any of the required permissions match the user's permissions
  return requiredPermissions.some(permission => 
    userPermissions.includes(permission)
  );
};

/**
 * Adds a profile boost with specified duration in days
 */
export const addProfileBoostWithDays = (
  user: UserProfile,
  boostType: string,  // Use simple string for easier compatibility
  durationDays: number = 30
): ProfileBoost[] => {
  if (!user) return [];

  const now = new Date();
  const endDate = new Date();
  endDate.setDate(now.getDate() + durationDays);

  // Create a compatible profile boost that works with both types
  const newBoost: any = {
    id: `boost-${Date.now()}`,
    userId: user.id,
    effectId: boostType,
    type: boostType,
    startTime: now.toISOString(),
    endTime: endDate.toISOString(),
    active: true,
    startDate: now.toISOString(),
    endDate: endDate.toISOString(),
    level: 1,
    isActive: true,
    strength: 1,
    appliedBy: 'system',
    value: 1
  };

  const existingBoosts = user.profileBoosts || [];
  return [...existingBoosts, newBoost];
};

/**
 * Adds a cosmetic to a user by category string
 */
export const addCosmeticByCategoryString = (
  user: UserProfile,
  cosmeticId: string,
  category: string
): UserCosmetics => {
  if (!user || !cosmeticId || !category) {
    return user?.cosmetics || { 
      border: [], color: [], font: [], emoji: [], title: [],
      background: [], effect: [], badge: [], theme: []
    };
  }

  // Ensure cosmetics object exists
  const cosmetics = { ...(user.cosmetics || {}) };

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

  // Make sure the field exists as array
  if (!cosmetics[fieldName]) {
    cosmetics[fieldName] = [];
  }

  // Only add if it doesn't already exist
  const currentItems = Array.isArray(cosmetics[fieldName]) 
    ? cosmetics[fieldName] as string[]
    : [];

  if (!currentItems.includes(cosmeticId)) {
    cosmetics[fieldName] = [...currentItems, cosmeticId];
  }

  return cosmetics as UserCosmetics;
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

export default {
  createDemoUserProfile,
  addProfileBoostWithDays,
  addCosmeticByCategoryString
};
