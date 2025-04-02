
import { TeamColor, UserTier } from '@/types/mockery-types';
import { UserProfile as UserProfileSource } from '@/types/user';
import { UserProfile as UserProfileTarget } from '@/types/user-consolidated';
import { UserSubscription, UserSettings, SocialLink as SocialLinkInterface } from '@/types/user-consolidated';
import { ensureTeamColor as ensureTeamColorFn, ensureUserTier as ensureUserTierFn } from '@/utils/mockeryNormalizer';

// Export the ensureTeamColor and ensureUserTier functions
export const ensureTeamColor = ensureTeamColorFn;
export const ensureUserTier = ensureUserTierFn;

// Ensure the user has all required properties with proper types
export function ensureUserProfile(
  userData: Partial<UserProfileSource | UserProfileTarget>
): UserProfileTarget {
  // Create a base profile with all required fields
  const baseProfile: UserProfileTarget = {
    id: userData.id || `user-${Date.now()}`,
    username: userData.username || 'anonymous',
    displayName: userData.displayName || userData.username || 'Anonymous User',
    email: userData.email,
    profileImage: userData.profileImage || '/default-avatar.png',
    bio: userData.bio || '',
    joinedDate: userData.joinedDate || userData.joinDate || userData.createdAt || new Date().toISOString(),
    isVerified: userData.isVerified || false,
    isProtected: userData.isProtected || false,
    isVIP: userData.isVIP || false,
    isFounder: userData.isFounder || false,
    isAdmin: false, // Default value for isAdmin
    team: ensureTeamColorFn(userData.team as string || 'none') as TeamColor,
    tier: ensureUserTierFn(userData.tier as string || 'basic'),
    rank: userData.rank || 0,
    previousRank: userData.previousRank || 0,
    totalSpent: userData.totalSpent || userData.amountSpent || 0,
    amountSpent: userData.amountSpent || userData.totalSpent || 0,
    walletBalance: userData.walletBalance || 0,
    settings: userData.settings || createDefaultSettings(),
    profileBoosts: userData.profileBoosts || [],
    cosmetics: userData.cosmetics || {},
    spendStreak: userData.spendStreak || 0,
    profileViews: userData.profileViews || 0,
    profileClicks: userData.profileClicks || 0,
    // Handle subscription - make sure it has all required fields
    subscription: userData.subscription 
      ? ensureSubscription(userData.subscription)
      : null,
    purchasedFeatures: userData.purchasedFeatures || [],
    // Handle optional properties
    certificateNFT: userData.certificateNFT,
    socialLinks: ensureSocialLinks(userData.socialLinks),
    gender: userData.gender || 'prefer-not-to-say',
    lastActive: userData.lastActive || new Date().toISOString(),
    followers: userData.followers || [],
    following: userData.following || [],
    achievements: userData.achievements || [],
    badges: userData.badges || [],
    boostCount: userData.boostCount || 0,
    activeTitle: userData.activeTitle || null
  };

  return baseProfile;
}

// Helper function to ensure socialLinks are in the correct format
function ensureSocialLinks(links: any): SocialLinkInterface[] {
  if (!links) return [];
  
  // If it's already an array, ensure each item has an id
  if (Array.isArray(links)) {
    return links.map((link: any) => ({
      id: link.id || `link-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      platform: link.platform || 'website',
      url: link.url || '#',
      username: link.username,
      verified: link.verified || false,
      enabled: link.enabled !== false,
      title: link.title || link.platform,
      clicks: link.clicks || 0,
      icon: link.icon || link.platform,
      label: link.label || link.platform
    }));
  }
  
  // If it's an object, convert to array
  if (typeof links === 'object') {
    return Object.entries(links).map(([platform, url]) => ({
      id: `link-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      platform,
      url: String(url),
      username: '',
      verified: false,
      enabled: true,
      title: platform,
      clicks: 0,
      icon: platform,
      label: platform
    }));
  }
  
  return [];
}

// Create a standardized UserProfile from any type of user profile
export function toStandardUserProfile(
  userData: Partial<UserProfileSource | UserProfileTarget>
): UserProfileTarget {
  return ensureUserProfile(userData);
}

// Convert a consolidated UserProfile to the original UserProfile
export function toUserProfile(userData: UserProfileTarget): UserProfileSource {
  const profile: UserProfileSource = {
    id: userData.id,
    username: userData.username,
    displayName: userData.displayName,
    email: userData.email,
    profileImage: userData.profileImage,
    bio: userData.bio || '',
    joinedDate: userData.joinedDate,
    tier: ensureUserTierFn(userData.tier as string),
    team: ensureTeamColorFn(userData.team as string) as TeamColor,
    rank: userData.rank,
    previousRank: userData.previousRank,
    totalSpent: userData.totalSpent,
    amountSpent: userData.amountSpent,
    walletBalance: userData.walletBalance || 0,
    isFounder: userData.isFounder,
    isVerified: userData.isVerified,
    isVIP: userData.isVIP,
    isProtected: userData.isProtected,
    spendStreak: userData.spendStreak || 0,
    // Maps consolidated settings to original settings with proper types
    settings: createUserSettings(userData.settings),
    cosmetics: userData.cosmetics || {},
    // Handle arrays and optional fields
    profileBoosts: userData.profileBoosts || [],
    socialLinks: userData.socialLinks as any, // Type cast to fix incompatibility
    profileViews: userData.profileViews,
    profileClicks: userData.profileClicks,
    purchasedFeatures: userData.purchasedFeatures,
    // Handle subscription
    subscription: userData.subscription ? {
      planId: userData.subscription.planId || '',
      nextBillingDate: userData.subscription.nextBillingDate || '',
      status: (userData.subscription.status || 'active') as 'active' | 'cancelled' | 'paused',
      tier: userData.subscription.tier || 'basic',
    } : undefined,
    // Passthrough other fields
    lastActive: userData.lastActive,
    gender: userData.gender,
    activeTitle: userData.activeTitle,
    certificateNFT: userData.certificateNFT,
    following: userData.following,
    followers: userData.followers
  };

  return profile;
}

// Helper function to create default settings
function createDefaultSettings(): UserSettings {
  return {
    profileVisibility: 'public',
    allowProfileLinks: true,
    theme: 'royal',
    notifications: true,
    emailNotifications: false,
    marketingEmails: false,
    showRank: true,
    darkMode: true,
    soundEffects: true,
    showBadges: true,
    showTeam: true,
    showSpending: true,
    allowMentions: true,
    shameAlerts: true,
    teamNotifications: true,
    leaderboardAlerts: true,
    rankChangeNotifications: true,
    eventAlerts: true,
    walletAlerts: true,
    showEmailOnProfile: false,
    rankChangeAlerts: true,
    newFollowerAlerts: true
  };
}

// Creates a properly typed UserSettings from a partial
function createUserSettings(settings?: Partial<UserSettings>): any {
  const defaultSettings = createDefaultSettings();
  
  if (!settings) return defaultSettings;

  // Since we need to handle theme differently because of strict typing
  let safeTheme;
  const theme = settings.theme || defaultSettings.theme;
  if (['royal', 'dark', 'light', 'system'].includes(theme as string)) {
    safeTheme = theme;
  } else {
    safeTheme = 'royal';
  }

  return {
    ...defaultSettings,
    ...settings,
    theme: safeTheme
  };
}

// Ensures a subscription has all required fields
function ensureSubscription(subscription: any): UserSubscription {
  if (!subscription) return null as any;
  
  return {
    id: subscription.id || `sub-${Date.now()}`,
    planId: subscription.planId || 'basic',
    tier: subscription.tier || 'basic',
    status: (subscription.status || 'active') as 'active' | 'cancelled' | 'expired' | 'pending' | 'paused',
    startDate: subscription.startDate || new Date().toISOString(),
    endDate: subscription.endDate,
    autoRenew: subscription.autoRenew ?? true,
    nextBillingDate: subscription.nextBillingDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    cancelAtPeriodEnd: subscription.cancelAtPeriodEnd ?? false
  };
}
