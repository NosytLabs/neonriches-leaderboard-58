
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
    joinedAt: typeof profile.joinedAt === 'string' ? new Date(profile.joinedAt) : profile.joinedAt,
    lastActive: profile.lastActive ? new Date(profile.lastActive) : new Date(),
    amountSpent: profile.amountSpent || 0,
    isActive: profile.isActive !== undefined ? profile.isActive : true,
    isVerified: profile.isVerified || false,
    isBanned: profile.isBanned || false,
    roles: profile.roles || [],
    badges: profile.badges || []
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
    joinedAt: user.joinedAt,
    lastActive: user.lastActive || new Date(),
    amountSpent: user.amountSpent || 0,
    isActive: user.isActive !== undefined ? user.isActive : true,
    isVerified: user.isVerified || false,
    isBanned: user.isBanned || false,
    roles: user.roles || [],
    badges: user.badges || []
  };
};
