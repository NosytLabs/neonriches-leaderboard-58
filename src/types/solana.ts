
export interface SolanaTreasuryInfo {
  address: string;
  balance: number;
  totalReceived: number;
  transactionCount: number;
  lastUpdated: string;
}

export interface SolanaTransaction {
  signature: string;
  blockTime: number;
  timestamp: string;
  slot: number;
  fee: number;
  amount: number;
  sender: string;
  receiver: string;
  status: 'confirmed' | 'processed' | 'failed';
  type: 'pay' | 'token' | 'nft';
  description: string;
}

export interface OnChainLeaderboardEntry {
  publicKey: string;
  username: string;
  rank: number;
  amountSpent: number;
  lastTransaction: string;
  signature?: string;
  isVerified: boolean;
}

export interface SolanaWalletInfo {
  address: string;
  balance: number;
  isConnected: boolean;
}

export interface SolanaNftInfo {
  mint: string;
  owner: string;
  metadataUri: string;
  name: string;
  symbol: string;
  image: string;
  description: string;
  attributes: { trait_type: string; value: string }[];
}
