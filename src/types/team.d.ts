
import { TeamColor } from './mockery';

export interface TeamData {
  id: string;
  name: string;
  description: string;
  color: TeamColor;
  memberCount: number;
  leaderUsername?: string;
  leaderUserId?: string;
  logo: string;
  bannerImage: string;
  isActive: boolean;
  slogan?: string;
  code?: string;
  rankBonusMultiplier?: number;
  totalContribution: number;
  securityGuarantee?: string;
  absurdStat?: string;
  historicalNote?: string;
  nftJoke?: string;
  cryptoRoast?: string;
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
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  joinDate: string;
  contribution: number;
  rank: number;
  role?: string;
  isActive: boolean;
  tier?: string;
}

export interface TeamLeaderboardEntry {
  teamId: string;
  teamName: string;
  teamColor: TeamColor;
  memberCount: number;
  totalContribution: number;
  rank: number;
  previousRank?: number;
  logo?: string;
}
