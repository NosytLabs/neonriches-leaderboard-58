
export interface SolanaWallet {
  publicKey: string;
  balance: number;
  lastUpdated: string;
  transactions: SolanaTransaction[];
  nfts: SolanaNftInfo[];
}

export interface SolanaTreasuryInfo {
  publicKey: string;
  totalDeposits: number;
  totalWithdrawals: number;
  totalUsers: number;
  lastTransaction: string;
  lastUpdated?: string;
  currentBalance?: number;
}

export interface SolanaTransaction {
  id: string;
  signature: string;
  sender: string;
  recipient: string;
  amount: number;
  timestamp: string;
  status: 'confirmed' | 'pending' | 'failed';
  type: 'deposit' | 'withdrawal' | 'transfer' | 'nft' | 'other';
  blockHeight?: number;
  fee?: number;
}

export interface OnChainLeaderboardEntry {
  id: string;
  publicKey: string;
  position: number;
  amount: number;
  username: string;
  timestamp: string;
  totalSpent?: number;
}

export interface SolanaNftInfo {
  id: string;
  name: string;
  description: string;
  image: string;
  mintAddress: string;
  metadata: {
    collection?: string;
    attributes?: Array<{trait_type: string; value: string}>;
    external_url?: string;
    properties?: any;
  };
  ownerId: string;
  createdAt: string;
}

