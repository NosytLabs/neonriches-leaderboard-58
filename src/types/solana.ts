
export interface SolanaTransaction {
  signature: string;
  slot: number;
  timestamp: number;
  amount: number;
  usdValue: number;
  type: 'in' | 'out';
  status: 'success' | 'pending' | 'failed';
  sender?: string;
  recipient?: string;
}

export interface SolanaNFT {
  mint: string;
  name: string;
  symbol: string;
  image: string;
  description: string;
  attributes: Array<{
    trait_type: string;
    value: string;
  }>;
  owner: string;
  updateAuthority: string;
}

export interface OnChainLeaderboardEntry {
  id: string;
  position: number;
  amount: number;
  userId?: string;
  publicKey?: string;
  spentAmount?: number;
  amountSpent?: number;
  totalDeposited?: number;
  timestamp?: string;
}

export type SolanaNftInfo = SolanaNFT;
export type LeaderboardEntry = OnChainLeaderboardEntry;
