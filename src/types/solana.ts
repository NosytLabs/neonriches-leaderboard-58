
export interface OnChainLeaderboardEntry {
  publicKey: string;
  username: string;
  userId?: string;
  address?: string;
  totalSpent: number;
  spentAmount?: number;
  amountSpent?: number;
  totalDeposited?: number;
  rank?: number;
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

export interface SolanaTransaction {
  id: string;
  signature: string;
  sourceAddress: string;
  destinationAddress: string;
  receiver?: string;
  amount: number;
  timestamp: string;
  status: 'confirmed' | 'pending' | 'failed';
  blockHeight?: number;
  type: 'deposit' | 'withdrawal' | 'transfer' | 'payment';
}

export interface SolanaTreasuryInfo {
  address: string;
  balance: number;
  totalDeposits: number;
  totalWithdrawals: number;
  lastUpdate: string;
  totalDeposited?: number;
  totalWithdrawn?: number;
  transactions?: SolanaTransaction[];
}

export interface CertificateMetadata {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string | number;
  }>;
  issueDate: string;
  owner: string;
  rank?: number;
}
