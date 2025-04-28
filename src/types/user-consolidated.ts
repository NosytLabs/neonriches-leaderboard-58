
// Contains consolidated user profile types for use throughout the application

export interface UserBasicProfile {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  createdAt?: string;
  profileImage?: string;
}

export interface UserFinancials {
  walletBalance?: number;
  totalSpent?: number;
  accountTier?: string;
  subscriptionStatus?: 'free' | 'active' | 'cancelled' | 'expired';
  lastPayment?: string;
}

export interface UserStatistics {
  rank?: number;
  prestige?: number;
  score?: number;
  totalMockeries?: number;
  totalMocked?: number;
}

export interface UserTeamInfo {
  teamId?: string;
  teamName?: string;
  teamRole?: 'owner' | 'admin' | 'member' | 'none';
  teamColor?: string;
}

// Standard user profile with all potential properties
export interface StandardUserProfile extends 
  UserBasicProfile,
  UserFinancials,
  UserStatistics,
  UserTeamInfo {
  // Additional fields can be added here if needed
  isActive?: boolean;
  lastSeen?: string;
}

// Main user profile type used by components
export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  email?: string;
  profileImage?: string;
  walletBalance: number;
  rank: number;
  prestige?: number;
  teamId?: string;
  teamName?: string;
}

// Utility functions for conversion between types

export function toStandardUserProfile(user: any): StandardUserProfile {
  return {
    // Basic profile
    id: user.id || '',
    username: user.username || 'anonymous',
    displayName: user.displayName || user.username || 'Anonymous User',
    email: user.email,
    profileImage: user.profileImage || user.avatar,
    createdAt: user.createdAt,
    
    // Financial info
    walletBalance: user.walletBalance || 0,
    totalSpent: user.totalSpent || 0,
    accountTier: user.accountTier || 'free',
    subscriptionStatus: user.subscriptionStatus || 'free',
    
    // Stats
    rank: user.rank || 9999,
    prestige: user.prestige || 0,
    score: user.score || 0,
    
    // Team info
    teamId: user.teamId,
    teamName: user.teamName,
    teamRole: user.teamRole || 'none',
    teamColor: user.teamColor,
    
    // Meta
    isActive: user.isActive !== false,
    lastSeen: user.lastSeen
  };
}

export function toUserProfile(user: StandardUserProfile): UserProfile {
  return {
    id: user.id,
    username: user.username,
    displayName: user.displayName || user.username,
    email: user.email,
    profileImage: user.profileImage,
    walletBalance: user.walletBalance || 0,
    rank: user.rank || 9999,
    prestige: user.prestige,
    teamId: user.teamId,
    teamName: user.teamName
  };
}
