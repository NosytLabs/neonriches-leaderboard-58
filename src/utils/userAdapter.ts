
import { TeamType, UserProfile } from '@/types/user';
import { UserProfile as AuthUserProfile } from '@/contexts/auth/types';

/**
 * Ensures a UserProfile object has a valid rank value
 */
export const ensureRank = (user: UserProfile | Partial<UserProfile>): UserProfile => {
  return {
    ...user,
    rank: user.rank || 0
  } as UserProfile;
};

/**
 * Converts a UserProfile to an AuthUserProfile
 */
export const convertToAuthUserProfile = (user: UserProfile): AuthUserProfile => {
  // Ensure the team is compatible with AuthUserProfile's TeamType
  let team: 'red' | 'green' | 'blue' | 'none' = 'none';
  
  if (user.team === 'red' || user.team === 'green' || user.team === 'blue') {
    team = user.team;
  }
  
  return {
    ...user,
    team,
    // Add any missing required properties
    badges: user.badges || []
  } as AuthUserProfile;
};

/**
 * Converts an AuthUserProfile to a UserProfile
 */
export const convertToUserProfile = (user: AuthUserProfile): UserProfile => {
  // Ensure the team is compatible with UserProfile's TeamType
  let team: TeamType | null = null;
  
  if (user.team === 'red' || user.team === 'green' || user.team === 'blue') {
    team = user.team;
  }
  
  // Fix any avatarUrl and lastActive fields
  const avatarUrl = user.avatarUrl || user.profileImage;
  const lastActive = user.lastActive || new Date().toISOString();
  
  return {
    ...user,
    team,
    avatarUrl,
    lastActive,
    // Ensure required fields are present
    rank: user.rank || 0,
    joinedAt: user.joinedAt || new Date().toISOString()
  } as UserProfile;
};

/**
 * Ensures a user object is a valid UserProfile
 */
export const ensureUser = (user: Partial<UserProfile> | AuthUserProfile): UserProfile => {
  // Check if this is likely an AuthUserProfile
  if ('role' in user && typeof user.role === 'string') {
    return convertToUserProfile(user as AuthUserProfile);
  }
  
  return {
    ...user,
    // Ensure required fields
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || '',
    totalSpent: user.totalSpent || 0,
    rank: user.rank || 0,
    joinedAt: user.joinedAt || new Date().toISOString(),
  } as UserProfile;
};

export default {
  ensureRank,
  convertToAuthUserProfile,
  convertToUserProfile,
  ensureUser
};
