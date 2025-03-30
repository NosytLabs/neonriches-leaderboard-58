
export interface SolanaWallet {
  publicKey: string;
  balance: number;
}

export interface SolanaTreasuryInfo {
  publicKey: string;
  balance: number;
  lastUpdate: string;
  lastUpdated?: string;
  transactions?: SolanaTransaction[];
  currentBalance?: number;
  totalDeposited?: number;
  totalWithdrawn?: number;
}

export interface SolanaTransaction {
  signature: string;
  timestamp: number;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'transfer';
  status: 'confirmed' | 'pending' | 'failed';
  id?: string;
  sender?: string;
}

export interface OnChainLeaderboardEntry {
  pubkey: string;
  amount: number;
  timestamp: number;
  // Additional properties to match expected usage
  userId?: string;
  address?: string;
  publicKey?: string;
  spentAmount?: number;
  amountSpent?: number;
  totalDeposited?: number;
  rank?: number;
  joinDate?: string;
  totalSpent?: number;
  lastTransaction?: string;
  id?: string;
}

export interface SolanaNftInfo {
  mint: string;
  owner: string;
  metadata: {
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: { address: string; share: number; verified: boolean }[];
  };
  image?: string;
}

// For backwards compatibility
export type LeaderboardEntry = OnChainLeaderboardEntry;
