
export interface SolanaTreasuryInfo {
  pubkey: string;
  balance: number;
  usdValue: number;
  lastUpdated: string;
}

export interface SolanaTransaction {
  signature: string;
  timestamp: string;
  amount: number;
  usdValue: number;
  type: 'deposit' | 'withdrawal' | 'transfer';
  from: string;
  to: string;
  status: 'confirmed' | 'pending' | 'failed';
}

export interface OnChainLeaderboardEntry {
  address: string;
  username?: string;
  rank: number;
  totalSpent: number;
  lastTransaction: string;
}

export interface SolanaWalletInfo {
  address: string;
  balance: number;
  usdValue: number;
}

export interface SolanaNftInfo {
  mint: string;
  owner: string;
  metadataUri: string;
  imageUri?: string;
  name: string;
  symbol: string;
  mintedAt: string;
}
