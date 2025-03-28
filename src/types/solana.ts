
export type TransactionType = 'deposit' | 'withdrawal' | 'purchase' | 'transfer' | 'mockery' | 'cosmetic' | 'subscription' | 'boost' | 'wish';

export interface SolanaWallet {
  publicKey: string;
  balance: number;
  connected: boolean;
  provider?: any;
  isConnected?: boolean; // Added for backward compatibility
}

export interface SolanaTreasuryInfo {
  totalDeposited: number;
  totalWithdrawn: number;
  currentBalance: number;
  lastUpdated: string;
  updatedAt?: string;
  address?: string;
  balance?: number;
  pubkey?: string;
  amount?: number; // Added for compatibility
  sender?: string; // Added for compatibility
  owner?: string; // Added for compatibility
  totalDeposits?: number; // Added for compatibility
  signature?: string; // Added for compatibility
  netBalance?: number; // Added for compatibility
  transactions?: number; // Added for compatibility
}

export interface SolanaTransaction {
  id?: string;
  signature: string;
  amount: number;
  timestamp: string;
  sender: string;
  receiver: string;
  recipient?: string; // Added for compatibility
  type: 'deposit' | 'withdrawal' | 'transfer';
  status: 'confirmed' | 'pending' | 'failed';
  message?: string;
}

export interface OnChainLeaderboardEntry {
  address: string;
  publicKey: string;
  username: string;
  spentAmount: number;
  amountSpent?: number;
  rank: number;
  previousRank?: number;
  timestamp: string;
  transaction: string;
  lastTransaction?: string;
  userId?: string;
  totalDeposited?: number;
  joinDate?: string;
  id?: string; // Added for compatibility
  totalSpent?: number; // Added for compatibility
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

export interface SolanaNftInfo {
  mintAddress: string;
  ownerAddress: string;
  metadataUri: string;
  name: string;
  symbol: string;
  image: string;
  attributes: any[];
}
