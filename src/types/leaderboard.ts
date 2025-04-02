
import { TeamColor, UserTier } from '@/types/user';

export interface LeaderboardUser {
  userId: string;
  id: string;
  username: string;
  displayName?: string;
  profileImage: string;
  team: TeamColor;
  tier: UserTier;
  rank: number;
  previousRank?: number;
  totalSpent: number;
  amountSpent?: number;
  walletBalance?: number;
  isVerified?: boolean;
  isProtected?: boolean;
  spendStreak?: number;
  rankChange?: number;
  spendChange?: number;
  avatarUrl?: string;
}

export type LeaderboardFilter = 'all' | 'daily' | 'weekly' | 'monthly' | 'team';
export type TypedLeaderboardFilter = LeaderboardFilter;

export interface LeaderboardEntry {
  userId: string;
  rank: number;
  username: string;
  displayName: string;
  totalSpent: number;
  team: TeamColor;
  timestamp: string;
}

export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  logo: string;
  totalSpent: number;
  totalContribution: number;
  contributionPercentage: number;
  memberCount: number;
  members: LeaderboardUser[];
  description?: string;
}

export interface SolanaTransaction {
  id: string;
  signature: string;
  timestamp: string;
  amount: number;
  sender: string;
  receiver: string;
  status: 'pending' | 'confirmed' | 'failed';
  type: 'deposit' | 'withdrawal' | 'transfer';
}

export interface OnChainLeaderboardEntry extends LeaderboardEntry {
  txSignature: string;
  blockHeight: number;
}

export interface PerformanceIssue {
  id: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  component: string;
  file?: string;
  lineNumber?: number;
  recommendation?: string;
  impact: string;
}

export interface ProjectMetrics {
  fileCount: number;
  componentCount: number;
  totalSize: number;
  dependencies: number;
  beforeCleanup?: {
    fileCount: number;
    componentCount: number;
    totalSize: number;
    dependencies: number;
  };
  afterCleanup?: {
    fileCount: number;
    componentCount: number;
    totalSize: number;
    dependencies: number;
  };
  sizeSavings?: number;
  fileSavings?: number;
  dependencySavings?: number;
  sizePercentage?: number;
}

