
// Solana related types

export interface SolanaTransaction {
  id: string;
  signature: string;
  amount: number;
  timestamp: number;
  type: 'deposit' | 'withdrawal' | 'spend' | 'transfer';
  status: 'confirmed' | 'pending' | 'failed';
  sender?: string;
  receiver?: string;
}

export interface SolanaTreasuryInfo {
  totalDeposits: number;
  totalWithdrawals: number;
  balance: number;
  lastUpdate: number;
  lastTransaction?: SolanaTransaction;
  recentTransactions: SolanaTransaction[];
  transactions?: SolanaTransaction[];
  currentBalance?: number;
  totalDeposited?: number;
  totalWithdrawn?: number;
}

export interface SolanaWallet {
  address: string;
  balance: number;
  label?: string;
}

export interface OnChainLeaderboardEntry {
  publicKey: string;
  lamports: number;
  account: any;
  id?: string;
  address?: string;
  spentAmount?: number;
  amountSpent?: number;
  totalDeposited?: number;
  rank?: number;
  userId?: string;
  lastTransaction?: number;
}

export interface SolanaNftInfo {
  name: string;
  symbol: string;
  uri: string;
  mint: string;
  owner: string;
  metadata?: any;
}

export interface CertificateMetadata {
  name: string;
  symbol: string;
  description: string;
  image: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
  rank?: number;
}
