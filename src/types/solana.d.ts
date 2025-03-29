
export interface SolanaTreasuryInfo {
  address: string;
  balance: number;
  currentBalance?: number;
  totalDeposited?: number;
  totalWithdrawn?: number;
  transactions?: SolanaTransaction[];
  lastUpdated?: string;
}

export interface SolanaTransaction {
  signature: string;
  id?: string;
  timestamp?: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'fee';
  status: 'confirmed' | 'pending' | 'failed';
  from?: string;
  to?: string;
  userId?: string;
}

export interface OnChainLeaderboardEntry {
  userId: string;
  id?: string;
  username: string;
  publicKey: string;
  address?: string;
  spentAmount: number;
  amountSpent?: number;
  totalSpent?: number;
  totalDeposited?: number;
  rank: number;
  timestamp: string;
  lastTransaction?: string;
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  publicKey: string;
  amountSpent: number;
  totalDeposited: number;
  rank: number;
  joinDate: string;
}
