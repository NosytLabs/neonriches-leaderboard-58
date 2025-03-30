
export interface SolanaTransaction {
  id?: string;
  signature: string;
  slot: number;
  timestamp: number;
  amount: number;
  usdValue: number;
  type: 'in' | 'out' | 'deposit' | 'withdrawal';
  status: 'success' | 'pending' | 'failed' | 'confirmed';
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
  username?: string;
  address?: string;
  rank?: number;
  joinDate?: string;
  lastTransaction?: string;
}

export interface SolanaTreasuryInfo {
  totalBalance: number;
  depositAddress: string;
  totalDeposits: number;
  totalWithdrawals: number;
  transactions: SolanaTransaction[];
}

export interface SolanaWallet {
  address: string;
  balance: number;
  nfts?: SolanaNFT[];
}

export type SolanaNftInfo = SolanaNFT;
export type LeaderboardEntry = OnChainLeaderboardEntry;
