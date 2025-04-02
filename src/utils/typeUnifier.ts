
import { UserProfile as ConsolidatedUserProfile } from '@/types/user-consolidated';
import { UserProfile as StandardUserProfile } from '@/types/user';
import { LeaderboardUser } from '@/types/leaderboard';
import { TeamColor, UserTier, MockeryAction } from '@/types/mockery-types';

/**
 * Ensures a value is a valid TeamColor or returns 'none' as default
 */
export const ensureTeamColor = (team?: string | null): TeamColor => {
  if (!team) return 'none';
  
  const validTeamColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 'none', 
    'neutral', 'silver', 'bronze', 'crimson'
  ];
  
  return validTeamColors.includes(team as TeamColor) 
    ? (team as TeamColor) 
    : 'none';
};

/**
 * Ensures a value is a valid UserTier or returns 'basic' as default
 */
export const ensureUserTier = (tier?: string | null): UserTier => {
  if (!tier) return 'basic';
  
  const validUserTiers: UserTier[] = [
    'free', 'basic', 'pro', 'premium', 'royal', 'founder',
    'platinum', 'diamond', 'gold', 'silver', 'bronze', 'vip',
    'whale', 'shark', 'dolphin', 'noble', 'standard', 'elite', 'legendary'
  ];
  
  return validUserTiers.includes(tier as UserTier)
    ? (tier as UserTier)
    : 'basic';
};

/**
 * Ensures a value is a valid MockeryAction or returns 'mock' as default
 */
export const ensureMockeryAction = (action?: string | null): MockeryAction => {
  if (!action) return 'mock';
  
  const validMockeryActions: MockeryAction[] = [
    'taunt', 'shame', 'jester', 'mock', 'challenge', 'joust', 
    'duel', 'tomato', 'egg', 'crown', 'stocks', 'putridEgg',
    'silence', 'courtJester', 'smokeBomb', 'protection', 
    'thumbsDown', 'laugh', 'fish', 'trumpet', 'confetti',
    'rotten_egg', 'flame', 'thumbs_down', 'heart', 'skull'
  ];
  
  return validMockeryActions.includes(action as MockeryAction)
    ? (action as MockeryAction)
    : 'mock';
};

/**
 * Convert a standard UserProfile to a ConsolidatedUserProfile
 */
export const toConsolidatedUserProfile = (user: StandardUserProfile | any): ConsolidatedUserProfile => {
  if (!user) return null as any;
  
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '/assets/default-avatar.png',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    team: typeof user.team === 'string' ? user.team : ensureTeamColor(user.team),
    tier: user.tier || 'basic',
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
    settings: user.settings || {
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
    },
    profileBoosts: user.profileBoosts || [],
    cosmetics: user.cosmetics || {},
    spendStreak: user.spendStreak || 0,
    profileViews: user.profileViews || 0,
    profileClicks: user.profileClicks || 0,
    subscription: user.subscription || null,
    purchasedFeatures: user.purchasedFeatures || [],
    certificateNFT: user.certificateNFT || undefined,
    gender: user.gender || 'prefer-not-to-say',
    socialLinks: user.socialLinks || [],
    isVerified: user.isVerified || false,
    isProtected: user.isProtected || false,
    isVIP: user.isVIP || false,
    isFounder: user.isFounder || false
  };
};

/**
 * Convert a consolidated UserProfile to a standard UserProfile
 */
export const toStandardUserProfile = (user: ConsolidatedUserProfile | any): StandardUserProfile => {
  if (!user) return null as any;
  
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '/assets/default-avatar.png',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    team: ensureTeamColor(user.team),
    tier: ensureUserTier(user.tier),
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
    settings: {
      ...(user.settings || {}),
      theme: (user.settings?.theme || 'dark') as "light" | "dark" | "system" | "royal",
      profileVisibility: (user.settings?.profileVisibility || 'public') as "public" | "private" | "friends",
      allowProfileLinks: user.settings?.allowProfileLinks !== false,
      notifications: user.settings?.notifications !== false,
      emailNotifications: user.settings?.emailNotifications || false,
      marketingEmails: user.settings?.marketingEmails || false,
      showRank: user.settings?.showRank !== false,
      showEmailOnProfile: user.settings?.showEmailOnProfile || false,
      rankChangeAlerts: user.settings?.rankChangeAlerts || false,
      darkMode: user.settings?.darkMode !== false,
      soundEffects: user.settings?.soundEffects !== false,
      showBadges: user.settings?.showBadges !== false,
      showTeam: user.settings?.showTeam !== false,
      showSpending: user.settings?.showSpending !== false
    },
    cosmetics: user.cosmetics || {
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
    spendStreak: user.spendStreak || 0,
    profileBoosts: user.profileBoosts || []
  };
};

/**
 * Ensure required properties are present in a leaderboard user
 */
export const ensureLeaderboardUser = (user: any): LeaderboardUser => {
  return {
    id: user.id || user.userId || '',
    userId: user.userId || user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    profileImage: user.profileImage || user.avatarUrl || '/assets/default-avatar.png',
    avatarUrl: user.avatarUrl || user.profileImage || '/assets/default-avatar.png',
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    team: user.team || 'none',
    tier: user.tier || 'basic',
    spendStreak: user.spendStreak || 0,
    walletBalance: user.walletBalance || 0
  };
};

export default {
  ensureTeamColor,
  ensureUserTier,
  ensureMockeryAction,
  toConsolidatedUserProfile,
  toStandardUserProfile,
  ensureLeaderboardUser
};
