
export interface OnChainLeaderboardEntry {
  id: string;
  username: string;
  publicKey?: string;
  address?: string; // Added for compatibility
  wallet?: string;
  spentAmount?: number;
  amountSpent?: number;
  totalDeposited?: number;
  rank?: number;
  timestamp?: string;
  userId?: string; // Added for compatibility
  lastTransaction?: string; // Added for compatibility
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  publicKey?: string;
  amountSpent: number;
  totalDeposited?: number;
  rank: number;
  joinDate?: string;
}

export interface SolanaTransaction {
  id: string;
  timestamp: string;
  amount: number;
  type: string;
  sender: string;
  receiver?: string; // Added for compatibility
  status: 'confirmed' | 'pending' | 'failed';
  signature?: string;
}

export interface SolanaTreasuryInfo {
  totalBalance: number;
  totalDeposits: number;
  totalWithdrawals: number;
  totalTransactions: number;
  lastUpdate: string;
  totalDeposited?: number; // Added for compatibility
  totalWithdrawn?: number; // Added for compatibility
  transactions?: SolanaTransaction[]; // Added for compatibility
}

export interface CertificateMetadata {
  name: string;
  description: string;
  image: string;
  attributes: any[];
  rank?: number; // Added for compatibility
}
