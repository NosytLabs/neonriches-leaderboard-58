
import { User, UserProfile } from '@/types/user';

/**
 * Converts a UserProfile object to a User object
 */
export const adaptUserProfileToUser = (profile: UserProfile): User => {
  return {
    id: profile.id,
    username: profile.username,
    displayName: profile.displayName || profile.username,
    profileImage: profile.profileImage,
    email: profile.email,
    bio: profile.bio || '',
    rank: profile.rank || 0,
    tier: profile.tier || 'free',
    team: profile.team,
    gender: profile.gender,
    joinedAt: profile.joinedAt, // Accept date type
    lastActive: profile.lastActive ? new Date(profile.lastActive) : new Date(),
    amountSpent: profile.amountSpent || 0,
    totalSpent: profile.totalSpent || profile.amountSpent || 0,
    isActive: profile.isActive !== undefined ? profile.isActive : true,
    isVerified: profile.isVerified || false,
    isBanned: profile.isBanned || false,
    role: profile.role || 'user',
    badges: profile.badges || [],
    cosmetics: profile.cosmetics || {
      badges: [],
      titles: [],
      borders: [],
      effects: [],
      emojis: [],
      fonts: [],
      colors: [],
      backgrounds: []
    }
  };
};

/**
 * Converts a User object to a UserProfile object
 */
export const adaptUserToUserProfile = (user: User): UserProfile => {
  return {
    id: user.id,
    username: user.username,
    displayName: user.displayName || user.username,
    profileImage: user.profileImage,
    email: user.email,
    bio: user.bio || '',
    rank: user.rank || 0,
    tier: user.tier || 'free',
    team: user.team,
    gender: user.gender,
    joinedAt: user.joinedAt, // Accept date type
    lastActive: user.lastActive || new Date(),
    amountSpent: user.amountSpent || 0,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    isActive: user.isActive !== undefined ? user.isActive : true,
    isVerified: user.isVerified || false,
    isBanned: user.isBanned || false,
    role: user.role || 'user',
    badges: user.badges || [],
    cosmetics: user.cosmetics || {
      badges: [],
      titles: [],
      borders: [],
      effects: [],
      emojis: [],
      fonts: [],
      colors: [],
      backgrounds: []
    }
  };
};

/**
 * Ensures a user object is properly formatted, handling partial users
 */
export const ensureUser = (user: User | UserProfile | Partial<User>): User => {
  if (!user) {
    throw new Error("Cannot ensure a null or undefined user");
  }
  
  // Create a base user object with default values
  const baseUser: User = {
    id: user.id || '',
    username: user.username || 'anonymous',
    displayName: user.displayName || user.username || 'Anonymous User',
    profileImage: user.profileImage || '',
    email: user.email || '',
    bio: user.bio || '',
    rank: user.rank || 0,
    tier: user.tier || 'free',
    team: user.team || null,
    gender: user.gender || 'neutral',
    joinedAt: user.joinedAt || new Date(),
    lastActive: user.lastActive || new Date(),
    amountSpent: user.amountSpent || 0,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    isActive: user.isActive !== undefined ? user.isActive : true,
    isVerified: user.isVerified || false,
    isBanned: user.isBanned || false,
    role: user.role || 'user',
    badges: user.badges || [],
    cosmetics: user.cosmetics || {
      badges: [],
      titles: [],
      borders: [],
      effects: [],
      emojis: [],
      fonts: [],
      colors: [],
      backgrounds: []
    }
  };
  
  return baseUser;
};
