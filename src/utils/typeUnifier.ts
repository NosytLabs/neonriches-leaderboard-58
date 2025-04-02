
import { TeamColor, UserTier, MockeryAction } from '@/types/mockery-types';
import { UserProfile as UserProfileConsolidated } from '@/types/user-consolidated';
import { UserProfile } from '@/types/user';

// Convert any string to a valid TeamColor
export const ensureTeamColor = (team?: string | null): TeamColor => {
  if (!team) return 'none';
  
  const validTeamColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 
    'none', 'neutral', 'silver', 'bronze', 'crimson'
  ];
  
  return validTeamColors.includes(team as TeamColor) 
    ? (team as TeamColor) 
    : 'none';
};

// Convert any string to a valid UserTier
export const ensureUserTier = (tier?: string | null): UserTier => {
  if (!tier) return 'basic';
  
  const validUserTiers: UserTier[] = [
    'free', 'basic', 'pro', 'premium', 'royal',
    'founder', 'platinum', 'diamond', 'gold', 'silver',
    'bronze', 'vip', 'whale', 'shark', 'dolphin',
    'noble', 'standard', 'elite', 'legendary'
  ];
  
  return validUserTiers.includes(tier as UserTier)
    ? (tier as UserTier)
    : 'basic';
};

// Ensure a string is a valid MockeryAction
export const ensureMockeryAction = (action?: string | null): MockeryAction => {
  if (!action) return 'mock';
  
  const validActions: MockeryAction[] = [
    'tomato', 'egg', 'putridEgg', 'crown', 'shame',
    'thumbsDown', 'mock', 'stocks', 'jester', 'courtJester',
    'challenge', 'joust', 'duel', 'silence', 'taunt',
    'smokeBomb', 'protection', 'royal_decree', 'flame',
    'heart', 'skull', 'thumbs_down', 'rotten_egg'
  ];
  
  return validActions.includes(action as MockeryAction)
    ? (action as MockeryAction)
    : 'mock';
};

// Convert a UserProfile (from user.ts) to a UserProfile (from user-consolidated.ts)
export const toStandardUserProfile = (user: any): UserProfileConsolidated => {
  if (!user) return null as any;
  
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    profileImage: user.profileImage || '/assets/default-avatar.png',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    isVerified: user.isVerified || false,
    isProtected: user.isProtected || false,
    isVIP: user.isVIP || false,
    isFounder: user.isFounder || false,
    isAdmin: user.isAdmin || false,
    team: ensureTeamColor(user.team),
    tier: ensureUserTier(user.tier),
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
    spendStreak: user.spendStreak || 0,
    settings: user.settings || {
      profileVisibility: 'public',
      allowProfileLinks: true,
      theme: 'system',
      notifications: true,
      emailNotifications: false,
      marketingEmails: false,
      showRank: true,
      darkMode: false,
      soundEffects: true,
      showBadges: true,
      showTeam: true,
      showSpending: true,
    },
    profileBoosts: user.profileBoosts || [],
    cosmetics: user.cosmetics || {},
    email: user.email,
    followers: user.followers,
    following: user.following,
    profileViews: user.profileViews,
    profileClicks: user.profileClicks,
    socialLinks: user.socialLinks,
    purchasedFeatures: user.purchasedFeatures,
    subscription: user.subscription,
    gender: user.gender,
    boostCount: user.boostCount,
    badges: user.badges,
    achievements: user.achievements,
    lastActive: user.lastActive,
    activeTitle: user.activeTitle,
    certificateNFT: user.certificateNFT,
  };
};

// Adapt a consolidated UserProfile to a standard UserProfile
export const toUserProfile = (user: UserProfileConsolidated): UserProfile => {
  return {
    id: user.id,
    username: user.username,
    displayName: user.displayName,
    profileImage: user.profileImage,
    bio: user.bio || '',
    joinedDate: user.joinedDate,
    team: ensureTeamColor(user.team),
    tier: ensureUserTier(user.tier),
    rank: user.rank,
    previousRank: user.previousRank,
    amountSpent: user.amountSpent,
    totalSpent: user.totalSpent,
    walletBalance: user.walletBalance,
    isVerified: user.isVerified,
    isProtected: user.isProtected,
    isVIP: user.isVIP,
    isFounder: user.isFounder,
    spendStreak: user.spendStreak,
    settings: user.settings,
    cosmetics: user.cosmetics,
    email: user.email,
    followers: user.followers,
    following: user.following,
    achievements: user.achievements,
    badges: user.badges,
    profileBoosts: user.profileBoosts,
    socialLinks: user.socialLinks,
    boostCount: user.boostCount,
    lastActive: user.lastActive,
    profileViews: user.profileViews,
    profileClicks: user.profileClicks,
    activeTitle: user.activeTitle,
    joinDate: user.joinedDate,
    createdAt: user.joinedDate,
    purchasedFeatures: user.purchasedFeatures,
    gender: user.gender,
    subscription: user.subscription,
    certificateNFT: user.certificateNFT
  };
};
