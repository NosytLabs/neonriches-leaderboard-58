
// Solana-related types
export interface SolanaTreasuryInfo {
  treasuryAddress: string;
  currentBalance: number;
  totalDeposited: number;
  totalWithdrawn: number;
  transactionCount: number;
  lastUpdated: string;
  transactions: SolanaTransaction[];
}

export interface SolanaTransaction {
  id: string;
  timestamp: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'spend';
  signature: string;
  userAddress: string;
  status: 'confirmed' | 'pending' | 'failed';
}

export interface SolanaWallet {
  address: string;
  balance: number;
  transactions: SolanaTransaction[];
}

export interface OnChainLeaderboardEntry {
  id: string;
  address: string;
  username: string;
  rank: number;
  amount: number;
  totalSpent: number;
  lastTransaction: string;
}

export interface SolanaNFT {
  mintAddress: string;
  name: string;
  description: string;
  image: string;
  attributes: {
    trait_type: string;
    value: string | number;
  }[];
  owner: string;
  uri: string;
}

export interface CertificateMetadata {
  name: string;
  description: string;
  image: string;
  attributes: {
    trait_type: string;
    value: string | number;
  }[];
  properties: {
    files: {
      uri: string;
      type: string;
    }[];
    category: string;
    creators: {
      address: string;
      share: number;
    }[];
  };
}
