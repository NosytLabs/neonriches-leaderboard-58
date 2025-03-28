

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
  username: string;
  amount: number;
  rank: number;
  transaction: string;
  timestamp: string;
  id?: string;
  publicKey?: string;
  totalSpent?: number;
  previousRank?: number; // Added for compatibility
  lastTransaction?: string; // Added for compatibility
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

