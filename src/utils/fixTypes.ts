
// This file is a collection of type fixing utilities to ensure compatibility between different parts of the codebase

import { TeamColor, UserTier, MockeryAction } from '@/types/mockery-types';
import { UserProfile as ConsolidatedUserProfile } from '@/types/user-consolidated';
import { UserProfile } from '@/types/user';
import { Certificate, CertificateType, CertificateStyle, CertificateTeam, CertificateStatus } from '@/types/certificates';
import { LeaderboardFilter, LeaderboardUser } from '@/types/leaderboard';

// Function to safely convert any string to a TeamColor
export function asTeamColor(value: string | null | undefined): TeamColor {
  if (!value) return 'none';
  
  switch (value.toLowerCase()) {
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
}

// Function to safely convert any string to a UserTier
export function asUserTier(value: string | null | undefined): UserTier {
  if (!value) return 'basic';
  
  switch (value.toLowerCase()) {
    case 'basic': return 'basic';
    case 'premium': return 'premium';
    case 'royal': return 'royal';
    case 'founder': return 'founder';
    case 'free': return 'free';
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
}

// Function to safely convert any string to a MockeryAction
export function asMockeryAction(value: string | null | undefined): MockeryAction {
  if (!value) return 'mock';
  
  switch (value.toLowerCase()) {
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
    case 'flame': return 'flame' as MockeryAction;
    case 'heart': return 'heart' as MockeryAction;
    case 'skull': return 'skull' as MockeryAction;
    case 'thumbs_down': return 'thumbs_down' as MockeryAction;
    case 'rotten_egg': return 'rotten_egg' as MockeryAction;
    default: return 'mock';
  }
}

// Function to safely convert any string to a CertificateType
export function asCertificateType(value: string | null | undefined): CertificateType {
  if (!value) return 'royal';
  
  switch (value.toLowerCase()) {
    case 'royal': return 'royal';
    case 'noble': return 'noble';
    case 'achievement': return 'achievement';
    case 'rank': return 'rank';
    case 'spender': return 'spender';
    case 'founder': return 'founder';
    case 'supporter': return 'supporter';
    case 'special': return 'special';
    default: return 'royal';
  }
}

// Function to safely convert any string to a CertificateStyle
export function asCertificateStyle(value: string | null | undefined): CertificateStyle {
  if (!value) return 'ornate';
  
  switch (value.toLowerCase()) {
    case 'ornate': return 'ornate';
    case 'minimal': return 'minimal';
    case 'classic': return 'classic';
    case 'modern': return 'modern';
    case 'standard': return 'standard';
    default: return 'ornate';
  }
}

// Function to create a default LeaderboardFilter
export function createDefaultLeaderboardFilter(): LeaderboardFilter {
  return {
    timeframe: 'all',
    team: 'all',
    tier: 'all',
    sortDirection: 'desc',
    sortBy: 'totalSpent',
    limit: 10,
    page: 1,
    sort: 'totalSpent',
    period: 'all-time',
    search: ''
  };
}

// Function to safely merge a partial LeaderboardFilter with the default filter
export function mergeLeaderboardFilter(partialFilter: Partial<LeaderboardFilter>): LeaderboardFilter {
  const defaultFilter = createDefaultLeaderboardFilter();
  
  return {
    ...defaultFilter,
    ...partialFilter
  };
}

// Function to convert UserProfile to ConsolidatedUserProfile
export function convertToConsolidatedUserProfile(user: UserProfile): ConsolidatedUserProfile {
  if (!user) return null as unknown as ConsolidatedUserProfile;
  
  // Add any required field transformations here
  const displayName = user.displayName || user.username || 'Anonymous';
  const profileImage = user.profileImage || '/assets/default-avatar.png';
  
  return {
    ...user,
    displayName,
    profileImage,
    // Add any other required fields here
  } as unknown as ConsolidatedUserProfile;
}

// Function to convert ConsolidatedUserProfile to UserProfile
export function convertToUserProfile(user: ConsolidatedUserProfile): UserProfile {
  if (!user) return null as unknown as UserProfile;
  
  // Add any required field transformations here
  
  return {
    ...user,
    // Add any other required fields here
  } as unknown as UserProfile;
}
