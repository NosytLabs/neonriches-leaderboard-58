
// Re-export TeamColor to make it available from this module
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral' | 'silver' | 'bronze' | 'crimson';
export type TeamType = TeamColor; // Alias for backward compatibility

export interface TeamData {
  id: string;
  name: string;
  description: string;
  color: TeamColor;
  memberCount: number;
  members?: number;
  leaderUsername?: string;
  leaderUserId?: string;
  logo?: string;
  logoUrl?: string;
  bannerImage?: string;
  isActive?: boolean;
  slogan?: string;
  code?: string;
  rankBonusMultiplier?: number;
  totalContribution?: number;
  totalSpent?: number;
  rank?: number;
  previousRank?: number;
  securityGuarantee?: string;
  absurdStat?: string;
  historicalNote?: string;
  nftJoke?: string;
  cryptoRoast?: string;
  benefits?: string[];
  icon?: string;
  motto?: string;
  ranking?: number;
}

export interface TeamTheme {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  border: string;
  background: string;
  backgroundSecondary: string;
  hoverBg: string;
  activeBg: string;
}

export interface TeamMember {
  id?: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  joinDate: string;
  contribution: number;
  rank?: number;
  role?: string;
  isActive?: boolean;
  isLeader?: boolean;
  tier?: string;
}

export interface TeamStats {
  totalMembers: number;
  activeMembers: number;
  totalContribution: number;
  averageContribution: number;
  leaderboardPosition: number;
  contributionChange: number;
  weeklyGrowth: number;
  victories?: number;
  defeats?: number;
  rankHistory?: number[];
}

export interface TeamLeaderboardEntry {
  id: string;
  teamId?: string;
  teamName?: string;
  name?: string;
  teamColor?: TeamColor;
  color?: TeamColor;
  memberCount: number;
  totalContribution: number;
  rank: number;
  previousRank?: number;
  logo?: string;
  logoUrl?: string;
  position?: number;
  team?: TeamColor;
  totalSpent?: number;
  avgSpent?: number;
}

export interface TeamInvite {
  id: string;
  teamId: string;
  inviterId: string;
  inviteeId?: string;
  email?: string;
  status: 'pending' | 'accepted' | 'rejected' | 'expired';
  createdAt: string;
  expiresAt: string;
  code: string;
}

export interface TeamRole {
  id: string;
  name: string;
  color: string;
  permissions: string[];
  isDefault?: boolean;
}

export interface TeamBenefits {
  id: string;
  name: string;
  description: string;
  tier: string;
  isActive: boolean;
}
