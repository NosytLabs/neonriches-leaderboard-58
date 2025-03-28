
export interface SolanaTreasuryInfo {
  address: string;
  balance: number;
  totalDeposits: number;
  totalWithdrawals: number;
  lastUpdated: string;
  usdValue: number;
}

export interface SolanaTransaction {
  id: string;
  signature: string;
  timestamp: string;
  type: 'deposit' | 'withdrawal';
  amount: number;
  sender: string;
  recipient: string;
  status: 'pending' | 'confirmed' | 'failed';
}

export interface OnChainLeaderboardEntry {
  id: string;
  publicKey: string;
  username: string;
  rank: number;
  previousRank: number;
  amountSpent: number;
  totalSpent: number;
  lastTransaction: string;
  isVerified: boolean;
  signature: string;
}

export interface SolanaWallet {
  publicKey: string;
  balance: number;
  isConnected: boolean;
  lastActivity?: string;
  transactions?: SolanaTransaction[];
}

export interface SolanaNftInfo {
  mintAddress: string;
  name: string;
  symbol: string;
  image: string;
  attributes: {
    trait_type: string;
    value: string | number;
  }[];
  metadata: any;
}
