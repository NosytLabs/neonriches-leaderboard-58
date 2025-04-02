
import { UserProfile as ConsolidatedUserProfile, UserSettings, UserSubscription, SocialLink, TeamColor, UserTier } from '@/types/user-consolidated';
import { UserProfile } from '@/types/user';
import { MockeryAction, TeamData } from '@/types/mockery-types';

// Type conversion for User Profile
export function toStandardUserProfile(user: any): ConsolidatedUserProfile {
  if (!user) return null as unknown as ConsolidatedUserProfile;

  // Set default values for required fields
  const displayName = user.displayName || user.username || 'Anonymous';
  const profileImage = user.profileImage || user.avatarUrl || '/assets/default-avatar.png';
  const team = user.team || 'none';
  const joinedDate = user.joinedDate || user.joinDate || user.createdAt || new Date().toISOString();
  const walletBalance = user.walletBalance || 0;
  const rank = user.rank || 0;
  const previousRank = user.previousRank || 0;
  const totalSpent = user.totalSpent || user.amountSpent || 0;
  const amountSpent = user.amountSpent || user.totalSpent || 0;
  const tier = user.tier || 'basic';
  const spendStreak = user.spendStreak || 0;

  // Create default settings if not provided
  const settings: UserSettings = user.settings || {
    theme: 'royal',
    profileVisibility: 'public',
    allowProfileLinks: true,
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

  // Create standardized profile
  return {
    id: user.id || `user-${Math.random().toString(36).substring(2, 15)}`,
    username: user.username || 'user',
    displayName,
    email: user.email,
    profileImage,
    bio: user.bio || '',
    joinedDate,
    isVerified: user.isVerified || false,
    isProtected: user.isProtected || false,
    isVIP: user.isVIP || false,
    isFounder: user.isFounder || false,
    team,
    tier,
    rank,
    previousRank,
    totalSpent,
    amountSpent,
    walletBalance,
    settings,
    profileBoosts: user.profileBoosts || [],
    cosmetics: user.cosmetics || {},
    spendStreak,
    profileViews: user.profileViews || 0,
    profileClicks: user.profileClicks || 0,
    subscription: user.subscription || null,
    purchasedFeatures: user.purchasedFeatures || [],
    certificateNFT: user.certificateNFT || null,
    socialLinks: user.socialLinks || [],
    gender: user.gender || 'none',
    lastActive: user.lastActive || joinedDate,
    followers: user.followers || [],
    following: user.following || [],
    achievements: user.achievements || [],
    badges: user.badges || [],
    boostCount: user.boostCount || 0,
    activeTitle: user.activeTitle || null
  };
}

// Convert the standardized user profile back to the original user type
export function toUserProfile(standardUser: ConsolidatedUserProfile): UserProfile {
  if (!standardUser) return null as unknown as UserProfile;

  const userSettings: any = {
    ...standardUser.settings,
  };

  const socialLinks: any = standardUser.socialLinks || [];

  // Convert to UserProfile type
  return {
    id: standardUser.id,
    username: standardUser.username,
    displayName: standardUser.displayName,
    email: standardUser.email,
    profileImage: standardUser.profileImage,
    bio: standardUser.bio,
    joinedDate: standardUser.joinedDate,
    isVerified: standardUser.isVerified,
    isProtected: standardUser.isProtected,
    isVIP: standardUser.isVIP,
    isFounder: standardUser.isFounder,
    team: standardUser.team as string,
    tier: standardUser.tier as string,
    rank: standardUser.rank,
    previousRank: standardUser.previousRank,
    totalSpent: standardUser.totalSpent,
    amountSpent: standardUser.amountSpent,
    walletBalance: standardUser.walletBalance,
    settings: userSettings,
    profileBoosts: standardUser.profileBoosts,
    cosmetics: standardUser.cosmetics,
    spendStreak: standardUser.spendStreak,
    profileViews: standardUser.profileViews,
    profileClicks: standardUser.profileClicks,
    subscription: standardUser.subscription ? {
      planId: standardUser.subscription.planId || '',
      nextBillingDate: standardUser.subscription.nextBillingDate || '',
      status: standardUser.subscription.status,
      tier: standardUser.subscription.tier
    } : null,
    purchasedFeatures: standardUser.purchasedFeatures,
    certificateNFT: standardUser.certificateNFT,
    socialLinks: socialLinks,
    gender: standardUser.gender,
    lastActive: standardUser.lastActive,
    followers: standardUser.followers,
    following: standardUser.following,
    achievements: standardUser.achievements,
    badges: standardUser.badges,
    boostCount: standardUser.boostCount,
    activeTitle: standardUser.activeTitle
  };
}

// Ensure a string is a valid TeamColor
export const ensureTeamColor = (team?: string | null): TeamColor => {
  if (!team) return 'none';
  
  switch (team.toLowerCase()) {
    case 'red': return 'red';
    case 'blue': return 'blue';
    case 'green': return 'green';
    case 'gold': return 'gold';
    case 'purple': return 'purple';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    case 'crimson': return 'crimson';
    case 'neutral': return 'neutral';
    case 'none': return 'none';
    default: return 'none';
  }
};

// Ensure a string is a valid UserTier
export const ensureUserTier = (tier?: string | null): UserTier => {
  if (!tier) return 'basic';
  
  switch (tier.toLowerCase()) {
    case 'basic': return 'basic';
    case 'premium': return 'premium';
    case 'royal': return 'royal';
    case 'founder': return 'founder';
    case 'free': return 'free';
    // Extended tiers
    case 'pro': return 'pro' as UserTier;
    case 'platinum': return 'platinum' as UserTier;
    case 'diamond': return 'diamond' as UserTier;
    case 'gold': return 'gold' as UserTier;
    case 'silver': return 'silver' as UserTier;
    case 'bronze': return 'bronze' as UserTier;
    case 'vip': return 'vip' as UserTier;
    case 'whale': return 'whale' as UserTier;
    case 'shark': return 'shark' as UserTier;
    case 'dolphin': return 'dolphin' as UserTier;
    case 'noble': return 'noble' as UserTier;
    case 'standard': return 'standard' as UserTier;
    case 'elite': return 'elite' as UserTier;
    case 'legendary': return 'legendary' as UserTier;
    default: return 'basic';
  }
};

// Ensure a string is a valid MockeryAction
export const ensureMockeryAction = (action?: string | null): MockeryAction => {
  if (!action) return 'mock';
  
  switch (action.toLowerCase()) {
    case 'tomato': return 'tomato';
    case 'egg': return 'egg';
    case 'putridegg': case 'putrid_egg': case 'putrid-egg': return 'putridEgg';
    case 'crown': return 'crown';
    case 'thumbsdown': case 'thumbs_down': case 'thumbs-down': return 'thumbsDown';
    case 'mock': return 'mock';
    case 'stocks': return 'stocks';
    case 'jester': return 'jester';
    case 'courtjester': case 'court_jester': case 'court-jester': return 'courtJester';
    case 'silence': return 'silence';
    case 'taunt': return 'taunt';
    case 'smokebomb': case 'smoke_bomb': case 'smoke-bomb': return 'smokeBomb';
    case 'protection': return 'protection';
    case 'shame': return 'shame' as MockeryAction;
    case 'challenge': return 'challenge' as MockeryAction;
    case 'joust': return 'joust' as MockeryAction;
    case 'duel': return 'duel' as MockeryAction;
    case 'royal_decree': case 'royaldecree': case 'royal-decree': return 'royal_decree' as MockeryAction;
    case 'laugh': return 'laugh' as MockeryAction;
    default: return 'mock';
  }
};

// Create a TeamData object
export const createTeamData = (color: TeamColor | string, name?: string, ranking?: number): TeamData => {
  const teamColor = ensureTeamColor(color);
  return {
    color: teamColor,
    name: name || getTeamName(teamColor),
    memberCount: 0,
    ranking: ranking || 0,
    teamId: addTeamId(teamColor)
  };
};

// Helper functions from teamUtils to avoid circular dependencies
function getTeamName(team: TeamColor | string | null): string {
  if (!team) return 'Neutral';
  
  switch (team) {
    case 'red': return 'Red Crown';
    case 'blue': return 'Blue Legion';
    case 'green': return 'Green Order';
    case 'gold': return 'Gold Dynasty';
    case 'purple': return 'Purple Realm';
    case 'silver': return 'Silver Alliance';
    case 'bronze': return 'Bronze Brigade';
    case 'crimson': return 'Crimson Court';
    case 'neutral': return 'Neutral';
    case 'none': return 'Unaffiliated';
    default: return team.charAt(0).toUpperCase() + team.slice(1);
  }
}

function addTeamId(team: TeamColor | string): string {
  return `${team}-team`;
}

// Ensure a UserProfile object
export const ensureUserProfile = (userData: any): UserProfile => {
  return toUserProfile(toStandardUserProfile(userData));
};
