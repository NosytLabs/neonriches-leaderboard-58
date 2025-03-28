
export interface SolanaWalletInfo {
  publicKey: string;
  balance: number;
  isConnected: boolean;
}

export interface SolanaTreasuryInfo {
  address: string;
  balance: number;
  totalDeposits: number;
  totalWithdrawals: number;
  lastUpdated: string;
  sender?: string;
  amount?: number;
}

export interface SolanaTransaction {
  signature: string;
  timestamp: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'transfer';
  sender: string;
  recipient: string;
  status: 'confirmed' | 'pending' | 'failed';
  sender?: string;
}

export interface OnChainLeaderboardEntry {
  id: string;
  publicKey: string;
  username?: string;
  rank: number;
  previousRank?: number;
  amountSpent: number;
  lastTransaction?: string;
  isVerified?: boolean;
}

export interface SolanaNftInfo {
  mintAddress: string;
  name: string;
  description?: string;
  image?: string;
  attributes?: Record<string, any>;
  owner?: string;
  mintedAt?: string;
}
