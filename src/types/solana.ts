
export interface SolanaWallet {
  publicKey: string;
  signature?: string;
  balance?: number;
  signMessage?: (message: Uint8Array) => Promise<{ signature: Uint8Array }>;
}

export interface SolanaTreasuryInfo {
  totalDeposited: number;
  totalWithdrawn: number;
  currentBalance: number;
  depositCount: number;
  withdrawalCount: number;
  lastUpdate: string;
}

export interface SolanaTransaction {
  signature: string;
  amount: number;
  timestamp: string;
  successful: boolean;
  type: 'deposit' | 'withdrawal';
  user?: string;
}

export interface OnChainLeaderboardEntry {
  pubkey: string;
  amount: number;
  timestamp: string;
  username?: string;
  totalSpent?: number;
}

export interface SolanaNftInfo {
  mintAddress: string;
  tokenAccount: string;
  name: string;
  symbol: string;
  image: string;
  description: string;
  attributes: { trait_type: string; value: string }[];
}

export type LeaderboardEntry = OnChainLeaderboardEntry;
