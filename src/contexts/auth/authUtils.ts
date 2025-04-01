
import { UserProfile } from '@/types/user-consolidated';

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
    team: userData.team || 'none',
    tier: userData.tier || 'free',
    rank: userData.rank || 0,
    previousRank: userData.previousRank || 0,
    walletBalance: userData.walletBalance || 0,
    totalSpent: userData.totalSpent || userData.amountSpent || 0,
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
  const userPermissions = user.permissions || [];
  
  // Check if any of the required permissions match the user's permissions
  return requiredPermissions.some(permission => 
    userPermissions.includes(permission)
  );
};
