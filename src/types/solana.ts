
export interface SolanaWallet {
  publicKey: string;
  isConnected: boolean;
  balance: number;
}

export interface SolanaTreasuryInfo {
  pubkey: string;
  balance: number;
  owner: string;
  transactions: SolanaTransaction[];
  totalContributions: number;
  lastUpdated: string;
  amount: number;
  sender: string;
}

export interface SolanaTransaction {
  signature: string;
  timestamp: string;
  amount: number;
  sender: string;
  receiver: string;
  type: 'deposit' | 'withdrawal' | 'transfer' | 'other';
  status: 'confirmed' | 'processing' | 'failed';
}

export interface SolanaNftInfo {
  mintAddress: string;
  tokenAccount: string;
  name: string;
  symbol: string;
  image: string;
  description: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
}

export interface SolanaCollectionInfo {
  name: string;
  symbol: string;
  description: string;
  image: string;
  size: number;
  floorPrice: number;
  volume: number;
}

export interface SolanaStats {
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
}

export type TransactionType = 'deposit' | 'withdrawal' | 'purchase' | 'mockery' | 'boost' | 'event' | 'cosmetic' | 'certificate' | 'founder' | 'advertisement';
