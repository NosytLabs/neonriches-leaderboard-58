
import { TeamColor } from '@/types/team';
import { UserProfile, UserTier } from '@/types/user-consolidated';

/**
 * Safely converts any string to TeamColor type
 */
export function toTeamColor(team: string | TeamColor): TeamColor {
  // Handle undefined or null values
  if (!team) return 'none';
  
  // Valid team colors
  const validTeamColors: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral', 'silver', 'bronze', 'crimson'];
  
  // If the team is already a valid TeamColor, return it
  if (validTeamColors.includes(team as TeamColor)) {
    return team as TeamColor;
  }
  
  // Convert string to lowercase for case-insensitive matching
  const normalizedTeam = String(team).toLowerCase();
  
  // Try to match with valid colors
  const matchedTeam = validTeamColors.find(color => color === normalizedTeam);
  
  // Return matched team or default to 'none'
  return matchedTeam || 'none';
}

/**
 * Safely convert a string to UserTier
 */
export function toUserTier(tier: string | undefined | null): UserTier {
  const validUserTiers: UserTier[] = [
    'free', 'basic', 'premium', 'royal', 'legendary',
    'founder', 'noble', 'knight', 'baron', 'viscount',
    'earl', 'duke', 'prince', 'king', 'emperor', 'whale',
    'pro', 'standard', 'elite', 'silver', 'gold',
    'platinum', 'diamond', 'bronze', 'vip'
  ];
  
  if (!tier || !validUserTiers.includes(tier as UserTier)) {
    return 'basic';
  }
  
  return tier as UserTier;
}

/**
 * Safely cast theme string to one of the allowed values
 */
export function toThemeValue(theme: string | undefined | null): "royal" | "dark" | "light" | "system" {
  const validThemes = ['royal', 'dark', 'light', 'system'];
  
  if (!theme || !validThemes.includes(theme)) {
    return 'dark';
  }
  
  return theme as "royal" | "dark" | "light" | "system";
}

/**
 * Convert a user object to ensure it has required fields with valid values
 */
export function adaptUserProfile(userData: any): UserProfile {
  if (!userData) return null as unknown as UserProfile;
  
  // Ensure displayName is always present
  const displayName = userData.displayName || userData.username || 'Anonymous User';

  // Default values for mandatory fields
  return {
    id: userData.id || '',
    username: userData.username || '',
    displayName, // Use the ensured displayName
    profileImage: userData.profileImage || '/assets/default-avatar.png',
    bio: userData.bio || '',
    email: userData.email,
    joinedDate: userData.joinedDate || userData.joinDate || userData.createdAt || new Date().toISOString(),
    isVerified: userData.isVerified || false,
    team: toTeamColor(userData.team || 'none'),
    tier: toUserTier(userData.tier || 'basic'),
    rank: userData.rank || 0,
    previousRank: userData.previousRank || 0,
    totalSpent: userData.totalSpent || userData.amountSpent || 0,
    amountSpent: userData.amountSpent || userData.totalSpent || 0,
    walletBalance: userData.walletBalance || 0,
    settings: userData.settings || {
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
    // Optional fields can be copied directly
    isProtected: userData.isProtected,
    isVIP: userData.isVIP,
    isFounder: userData.isFounder,
    isAdmin: userData.isAdmin,
    followers: userData.followers,
    following: userData.following,
    profileViews: userData.profileViews,
    profileClicks: userData.profileClicks,
    socialLinks: userData.socialLinks,
    purchasedFeatures: userData.purchasedFeatures,
    subscription: userData.subscription,
    gender: userData.gender,
    boostCount: userData.boostCount,
    badges: userData.badges,
    achievements: userData.achievements,
    lastActive: userData.lastActive,
    activeTitle: userData.activeTitle,
    certificateNFT: userData.certificateNFT,
  };
}
