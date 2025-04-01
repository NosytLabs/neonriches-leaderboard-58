
import { UserProfile } from '@/types/user-consolidated';
import { ProfileBoost } from '@/types/boost';
import { TeamColor } from '@/types/team';
import { UserCosmetics } from '@/types/cosmetics';
import { UserSettings } from '@/types/user-consolidated';
import { UserTier } from '@/types/user';
import { toTeamColor } from '@/utils/typeConverters';

interface ProcessUserOptions {
  // Add any options for processing user data
  includePrivateData?: boolean;
}

/**
 * Process user data from the server to match the frontend User type
 * @param userData - Raw user data from the server
 * @param options - Processing options
 * @returns - Processed user data
 */
export const processUser = (
  userData: any, 
  options: ProcessUserOptions = {}
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
    team: userData.team ? toTeamColor(userData.team) : 'none' as TeamColor,
    tier: userData.tier || 'free',
    rank: userData.rank || 0,
    previousRank: userData.previousRank || 0,
    walletBalance: userData.walletBalance || 0,
    totalSpent: userData.totalSpent || userData.amountSpent || 0,
    amountSpent: userData.amountSpent || userData.totalSpent || 0,
    // Add other fields as needed
  };
  
  // Optional fields
  if (userData.followers) {
    user.followers = Array.isArray(userData.followers) ? userData.followers : [];
  }
  
  if (userData.following) {
    user.following = Array.isArray(userData.following) ? userData.following : [];
  }
  
  if (userData.cosmetics) {
    user.cosmetics = userData.cosmetics;
  }
  
  if (userData.achievements) {
    user.achievements = userData.achievements;
  }
  
  if (userData.settings) {
    user.settings = userData.settings;
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
export const addProfileBoostWithDays = (user: UserProfile, days: number, level: number = 1, type: string = 'general'): ProfileBoost[] => {
  if (!user) return [];
  
  const now = new Date();
  const endDate = new Date();
  endDate.setDate(now.getDate() + days);
  
  const profileBoost: ProfileBoost = {
    id: `boost-${Date.now()}`,
    startDate: now.toISOString(),
    endDate: endDate.toISOString(),
    level,
    type,
    strength: level,
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
  if (Array.isArray(cosmetics[cosmeticKey]) && !cosmetics[cosmeticKey].includes(cosmeticId)) {
    cosmetics[cosmeticKey] = [...(cosmetics[cosmeticKey] as string[]), cosmeticId];
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
