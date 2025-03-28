
export interface SolanaWallet {
  publicKey: string;
  balance: number;
  connected: boolean;
  provider?: any;
}

export interface SolanaTreasuryInfo {
  totalDeposited: number;
  totalWithdrawn: number;
  currentBalance: number;
  lastUpdated: string;
  updatedAt?: string;
  address?: string;
}

export interface SolanaTransaction {
  id?: string;
  signature: string;
  amount: number;
  timestamp: string;
  sender: string;
  receiver: string;
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
}

export default {
  SolanaWallet,
  SolanaTreasuryInfo,
  SolanaTransaction,
  OnChainLeaderboardEntry
};
