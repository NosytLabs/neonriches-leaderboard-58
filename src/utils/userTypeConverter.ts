
import { UserProfile as UserConsolidatedProfile } from '@/types/user-consolidated';
import { User, UserProfile as UserRegularProfile, TeamColor } from '@/types/user-types';
import { SocialLink } from '@/types/user-consolidated';

/**
 * Ensure a user profile object has all required fields for UserConsolidatedProfile
 */
export const ensureUserProfile = (user: Partial<UserConsolidatedProfile>): UserConsolidatedProfile => {
  const defaultSettings = {
    profileVisibility: 'public' as const,
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
  };

  // Create a fully formed profile with defaults for missing properties
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '/assets/default-avatar.png',
    bio: user.bio || '',
    joinedDate: user.joinedDate || new Date().toISOString(),
    isVerified: user.isVerified ?? false,
    isProtected: user.isProtected ?? false,
    isVIP: user.isVIP ?? false,
    isFounder: user.isFounder ?? false,
    isAdmin: user.isAdmin ?? false, 
    team: user.team || 'none',
    tier: user.tier || 'basic',
    rank: user.rank ?? 0,
    previousRank: user.previousRank ?? 0,
    totalSpent: user.totalSpent ?? 0,
    amountSpent: user.amountSpent ?? 0,
    walletBalance: user.walletBalance || 0,
    settings: { ...defaultSettings, ...user.settings },
    profileBoosts: user.profileBoosts || [],
    cosmetics: user.cosmetics || {},
    spendStreak: user.spendStreak ?? 0,
    profileViews: user.profileViews ?? 0,
    profileClicks: user.profileClicks ?? 0,
    subscription: user.subscription || null,
    purchasedFeatures: user.purchasedFeatures || [],
    socialLinks: user.socialLinks || [],
    gender: user.gender || 'prefer-not-to-say',
    lastActive: user.lastActive || new Date().toISOString(),
    followers: user.followers || [],
    following: user.following || [],
    achievements: user.achievements || [],
    badges: user.badges || [],
    boostCount: user.boostCount ?? 0,
    activeTitle: user.activeTitle || ''
  };
};

/**
 * Convert a User or UserProfile to a consolidated UserProfile type
 */
export const toUserProfile = (user: User | UserRegularProfile | null): UserConsolidatedProfile | null => {
  if (!user) return null;

  const consolidatedProfile: UserConsolidatedProfile = {
    id: user.id,
    username: user.username,
    displayName: user.displayName || user.username,
    email: user.email || '',
    profileImage: user.profileImage || '/assets/default-avatar.png',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinedDate || user.createdAt || new Date().toISOString(),
    isVerified: user.isVerified ?? false,
    isProtected: user.isProtected ?? false,
    isVIP: user.isVIP ?? false,
    isFounder: user.isFounder ?? false,
    isAdmin: false,
    team: user.team || 'none',
    tier: user.tier || 'basic',
    rank: user.rank ?? 0,
    previousRank: user.previousRank ?? 0,
    totalSpent: user.totalSpent ?? 0,
    amountSpent: user.amountSpent ?? 0,
    walletBalance: user.walletBalance ?? 0,
    settings: {
      profileVisibility: user.settings?.profileVisibility || 'public',
      allowProfileLinks: user.settings?.allowProfileLinks ?? true,
      theme: user.settings?.theme || 'dark',
      notifications: user.settings?.notifications ?? true,
      emailNotifications: user.settings?.emailNotifications ?? false,
      marketingEmails: user.settings?.marketingEmails ?? false,
      showRank: user.settings?.showRank ?? true,
      darkMode: user.settings?.darkMode ?? true,
      soundEffects: user.settings?.soundEffects ?? true,
      showBadges: user.settings?.showBadges ?? true,
      showTeam: user.settings?.showTeam ?? true,
      showSpending: user.settings?.showSpending ?? true,
      allowMentions: user.settings?.allowMentions,
      shameAlerts: user.settings?.shameAlerts,
      teamNotifications: user.settings?.teamNotifications,
      leaderboardAlerts: false,
      rankChangeNotifications: false,
      eventAlerts: false,
      walletAlerts: false,
      showEmailOnProfile: user.settings?.showEmailOnProfile,
      rankChangeAlerts: user.settings?.rankChangeAlerts,
      newFollowerAlerts: user.settings?.newFollowerAlerts
    },
    profileBoosts: user.profileBoosts || [],
    cosmetics: user.cosmetics || {},
    spendStreak: user.spendStreak ?? 0,
    profileViews: user.profileViews ?? 0,
    profileClicks: user.profileClicks ?? 0,
    subscription: user.subscription ? {
      id: user.subscription.planId || '',
      tier: user.subscription.tier || 'basic',
      status: user.subscription.status || 'active',
      startDate: new Date().toISOString(),
      nextBillingDate: user.subscription.nextBillingDate || '',
      planId: user.subscription.planId || '',
      autoRenew: true,
      cancelAtPeriodEnd: false
    } : null,
    purchasedFeatures: user.purchasedFeatures || [],
    certificateNFT: user.certificateNFT ? {
      mintAddress: user.certificateNFT.mintAddress,
      mintDate: user.certificateNFT.mintDate,
      dateIssued: user.certificateNFT.dateIssued || user.certificateNFT.mintDate
    } : undefined,
    socialLinks: user.socialLinks || [],
    gender: user.gender || 'prefer-not-to-say',
    lastActive: user.lastActive || new Date().toISOString(),
    followers: user.followers || [],
    following: user.following || [],
    achievements: [],
    badges: [],
    boostCount: 0,
    activeTitle: user.activeTitle || ''
  };

  return ensureUserProfile(consolidatedProfile);
};

/**
 * Ensure a user profile object has all required fields for UserRegularProfile
 */
export const ensureConsolidatedUserProfile = (user: Partial<UserRegularProfile>): UserRegularProfile => {
  return {
    id: user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    email: user.email || '',
    profileImage: user.profileImage || '/assets/default-avatar.png',
    bio: user.bio || '',
    joinedDate: user.joinedDate || new Date().toISOString(),
    isVerified: user.isVerified ?? false,
    team: (user.team as TeamColor) || 'none',
    tier: user.tier || 'basic',
    rank: user.rank ?? 0,
    previousRank: user.previousRank ?? 0,
    totalSpent: user.totalSpent ?? 0,
    amountSpent: user.amountSpent ?? 0,
    walletBalance: user.walletBalance ?? 0,
    ...user
  };
};

export default {
  toUserProfile,
  ensureUserProfile,
  ensureConsolidatedUserProfile
};
