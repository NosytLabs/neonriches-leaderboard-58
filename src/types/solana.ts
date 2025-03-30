
export interface SolanaWallet {
  publicKey: string;
  balance: number;
  isConnected: boolean;
}

export interface SolanaTreasuryInfo {
  amount: number;
  pubkey: string;
  depositCount: number;
  lastUpdate: string;
  APY: number;
  lastUpdated?: string;
  transactions?: SolanaTransaction[];
}

export interface SolanaTransaction {
  signature: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'reward';
  timestamp: string;
  status: 'confirmed' | 'processing' | 'failed';
  id?: string;
}

export interface OnChainLeaderboardEntry {
  pubkey: string;
  amount: number;
  timestamp: string;
  username?: string;
  userId?: string;
  publicKey?: string;
  spentAmount?: number;
  amountSpent?: number;
  totalDeposited?: number;
  rank?: number;
  lastTransaction?: string;
  joinDate?: string;
  address?: string;
  id?: string;
}

export interface SolanaNftInfo {
  name: string;
  image: string;
  attributes: { trait_type: string; value: string }[];
  mint: string;
  owner: string;
  updateAuthority: string;
  isVerified: boolean;
}
