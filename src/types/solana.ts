
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
  pubkey?: string;
}

export interface SolanaTransaction {
  signature: string;
  timestamp: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'transfer';
  sender: string;
  recipient: string;
  status: 'confirmed' | 'pending' | 'failed';
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
  signature?: string;
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
