
import { User, UserProfile, UserTier, Team, UserGender } from '@/types/user';

// Ensure user object has all required fields
export const ensureUser = (userData: Partial<User>): User => {
  const defaultUser: User = {
    id: userData.id || '',
    username: userData.username || 'anonymous',
    email: userData.email,
    displayName: userData.displayName || userData.username || 'Anonymous User',
    walletBalance: userData.walletBalance || 0,
    rank: userData.rank || 999999,
    previousRank: userData.previousRank,
    team: userData.team || null,
    profileImage: userData.profileImage || '/placeholder.svg',
    bio: userData.bio || '',
    gender: userData.gender || 'other',
    joinedAt: userData.joinedAt || new Date().toISOString(),
    lastActive: userData.lastActive || new Date().toISOString(),
    isVerified: userData.isVerified || false,
    isVIP: userData.isVIP || false,
    isModerator: userData.isModerator || false,
    isAdmin: userData.isAdmin || false,
    isProtected: userData.isProtected || false,
    isBanned: userData.isBanned || false,
    achievements: userData.achievements || [],
    socialLinks: userData.socialLinks || [],
    settings: userData.settings || {
      theme: 'dark',
      notifications: true,
      emailNotifications: false,
      soundEffects: true,
      showRank: true,
      showTotalSpent: true,
    },
    cosmetics: userData.cosmetics || {
      badges: [],
      titles: [],
      borders: [],
      effects: [],
      emojis: [],
      fonts: [],
      colors: [],
      backgrounds: [],
    },
    subscription: userData.subscription,
    profileBoosts: userData.profileBoosts || [],
    statistics: userData.statistics || {},
    notifications: userData.notifications || 0,
    tier: userData.tier || 'free',
    amountSpent: userData.amountSpent || userData.totalSpent || userData.spentAmount || 0,
    createdAt: userData.createdAt || userData.joinedAt || new Date().toISOString(),
    updatedAt: userData.updatedAt || new Date().toISOString(),
  };

  return defaultUser;
};

// Validate tier type
export const validateTier = (tier: any): UserTier => {
  const validTiers: UserTier[] = [
    'free', 'basic', 'royal', 'premium', 'pro', 'founder', 'whale', 'shark', 'dolphin'
  ];
  
  return validTiers.includes(tier as UserTier) ? (tier as UserTier) : 'free';
};

// Validate team type
export const validateTeam = (team: any): Team | null => {
  if (!team) return null;
  
  const validTeams: Team[] = ['red', 'green', 'blue'];
  return validTeams.includes(team as Team) ? (team as Team) : null;
};

// Validate gender type
export const validateGender = (gender: any): UserGender => {
  const validGenders: UserGender[] = ['male', 'female', 'non-binary', 'other'];
  return validGenders.includes(gender as UserGender) ? (gender as UserGender) : 'other';
};

// Convert raw user data from API to User type
export const adaptUser = (rawUser: any): User => {
  const user: User = {
    id: rawUser.id || rawUser.user_id || '',
    username: rawUser.username || '',
    email: rawUser.email,
    displayName: rawUser.display_name || rawUser.displayName,
    walletBalance: Number(rawUser.wallet_balance || rawUser.walletBalance || 0),
    rank: Number(rawUser.rank || 999999),
    previousRank: rawUser.previous_rank ? Number(rawUser.previous_rank) : undefined,
    team: validateTeam(rawUser.team),
    profileImage: rawUser.profile_image || rawUser.profileImage || rawUser.avatar_url,
    bio: rawUser.bio,
    gender: validateGender(rawUser.gender),
    joinedAt: rawUser.joined_at || rawUser.joinedAt || rawUser.created_at,
    lastActive: rawUser.last_active || rawUser.lastActive,
    isVerified: Boolean(rawUser.is_verified || rawUser.isVerified),
    isVIP: Boolean(rawUser.is_vip || rawUser.isVIP),
    isModerator: Boolean(rawUser.is_moderator || rawUser.isModerator),
    isAdmin: Boolean(rawUser.is_admin || rawUser.isAdmin),
    isProtected: Boolean(rawUser.is_protected || rawUser.isProtected),
    isBanned: Boolean(rawUser.is_banned || rawUser.isBanned),
    tier: validateTier(rawUser.tier),
    amountSpent: Number(rawUser.amount_spent || rawUser.amountSpent || rawUser.total_spent || 0),
    createdAt: rawUser.created_at || rawUser.createdAt,
    updatedAt: rawUser.updated_at || rawUser.updatedAt,
  };

  return ensureUser(user);
};
