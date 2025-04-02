import { UserProfile as ConsolidatedUserProfile, UserSettings, UserSubscription } from '@/types/user-consolidated';
import { UserProfile } from '@/types/user';
import { LeaderboardUser } from '@/types/leaderboard';
import { LeaderboardUser as MockeryLeaderboardUser } from '@/types/mockery-types';
import { Certificate } from '@/types/certificate';
import { SocialLink as SocialLinkInterface } from '@/types/user-types';
import { socialLinksToRecord, recordToSocialLinks } from './socialLinkAdapter';

/**
 * Adapts a user profile to ensure it has all required fields
 */
export const adaptUserProfile = (user: Partial<ConsolidatedUserProfile> | Partial<UserProfile>): ConsolidatedUserProfile => {
  if (!user) {
    throw new Error('Cannot adapt a null or undefined user profile');
  }

  // Ensure displayName is always present
  const displayName = user.displayName || user.username || 'Anonymous User';

  // Default values for mandatory fields
  return {
    id: user.id || '',
    username: user.username || '',
    displayName, // Use the ensured displayName
    profileImage: user.profileImage || '/assets/default-avatar.png',
    bio: user.bio || '',
    joinedDate: user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString(),
    isVerified: user.isVerified || false,
    team: user.team || 'none',
    tier: user.tier || 'basic',
    rank: user.rank || 0,
    previousRank: user.previousRank || 0,
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    walletBalance: user.walletBalance || 0,
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
    spendStreak: user.spendStreak || 0,
    // Optional fields can be copied directly
    email: user.email,
    isProtected: user.isProtected,
    isVIP: user.isVIP,
    isFounder: user.isFounder,
    isAdmin: user.isAdmin,
    followers: user.followers,
    following: user.following,
    profileViews: user.profileViews,
    profileClicks: user.profileClicks,
    socialLinks: user.socialLinks as (SocialLinkInterface[] | Record<string, string>),
    purchasedFeatures: user.purchasedFeatures,
    subscription: user.subscription as UserSubscription,
    gender: user.gender,
    boostCount: user.boostCount,
    badges: user.badges,
    achievements: user.achievements,
    lastActive: user.lastActive,
    activeTitle: (user as any).activeTitle,
    certificateNFT: user.certificateNFT,
  };
};

/**
 * Adapts a leaderboard user from one type to another
 */
export const adaptLeaderboardUser = (user: MockeryLeaderboardUser): LeaderboardUser => {
  return {
    id: user.id || '',
    userId: user.userId || user.id || '',
    username: user.username || '',
    displayName: user.displayName || user.username || '',
    profileImage: user.profileImage || user.avatarUrl || '/assets/default-avatar.png',
    totalSpent: user.totalSpent || user.amountSpent || 0,
    amountSpent: user.amountSpent || user.totalSpent || 0,
    rank: user.rank || 0,
    team: user.team || 'none',
    tier: user.tier || 'basic',
    spendStreak: user.spendStreak || 0,
    walletBalance: user.walletBalance || 0,
    previousRank: user.previousRank || user.rank || 0,
    rankChange: user.rankChange || 0,
    spendChange: user.spendChange || 0,
    isProtected: user.isProtected || false,
    isVerified: user.isVerified || false,
  };
};

/**
 * Creates a user subscription with required fields
 */
export const createUserSubscription = (
  planId: string,
  nextBillingDate: string,
  status: 'active' | 'cancelled' | 'expired' | 'pending' | 'paused' = 'active',
  tier: string = 'basic'
): UserSubscription => {
  return {
    id: `sub_${Math.random().toString(36).substring(2, 15)}`,
    planId,
    nextBillingDate,
    status,
    tier,
    startDate: new Date().toISOString(),
    endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
    autoRenew: true,
    cancelAtPeriodEnd: false,
  };
};

/**
 * Adapts a Certificate to ensure it has all required fields
 */
export const adaptCertificate = (cert: Partial<Certificate>): Certificate => {
  return {
    id: cert.id || `cert_${Math.random().toString(36).substring(2, 9)}`,
    title: cert.title || cert.name || 'Certificate',
    description: cert.description || '',
    imageUrl: cert.imageUrl || '/assets/certificates/default.png',
    userId: cert.userId || cert.recipientId || '',
    dateIssued: cert.dateIssued || cert.issuedAt || new Date().toISOString(),
    mintAddress: cert.mintAddress || '',
    mintDate: cert.mintDate || '',
    type: cert.type || 'achievement',
    style: cert.style || 'standard',
    team: cert.team || 'none',
    status: cert.status || 'issued',
    rarity: cert.rarity || 'common',
    issuerName: cert.issuerName || 'Royal System',
    recipientName: cert.recipientName || '',
    recipientId: cert.recipientId || cert.userId || '',
    tier: cert.tier || '',
    name: cert.name || cert.title || '',
    isMinted: cert.isMinted || false,
    issuedAt: cert.issuedAt || cert.dateIssued || new Date().toISOString(),
    expiresAt: cert.expiresAt || '',
    previewUrl: cert.previewUrl || cert.imageUrl || '',
  };
};
