
export interface SolanaWallet {
  address: string;
  balance: number;
  publicKey: string;
}

export interface SolanaTreasuryInfo {
  address: string;
  totalBalance: number;
  depositCount: number;
  withdrawalCount: number;
}

export interface SolanaTransaction {
  signature: string;
  blockTime: number;
  slot: number;
  status: 'confirmed' | 'finalized' | 'processed' | 'failed';
  amount: number;
  sender: string;
  recipient: string;
  type: 'deposit' | 'withdrawal' | 'transfer';
}

export interface OnChainLeaderboardEntry {
  userId: string;
  username: string;
  address: string;
  publicKey: string;
  rank: number;
  spentAmount?: number;
  amountSpent?: number;
  totalDeposited: number;
  timestamp: string;
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  publicKey?: string;
  amountSpent: number;
  totalDeposited: number;
  rank: number;
  joinDate: string;
}

export interface SolanaNftInfo {
  mint: string;
  owner: string;
  metadata: {
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: Array<{
      address: string;
      verified: boolean;
      share: number;
    }>;
  };
  arweaveMetadata?: {
    name: string;
    symbol: string;
    description: string;
    image: string;
    external_url?: string;
    attributes?: Array<{
      trait_type: string;
      value: string | number;
    }>;
  };
}
