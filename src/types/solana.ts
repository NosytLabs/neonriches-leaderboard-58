
import { PublicKey } from '@solana/web3.js';

export interface SolanaTransaction {
  signature: string;
  blockTime: number;
  timestamp: string;
  slot: number;
  fee: number;
  amount: number;
  sender: string;
  receiver: string;
  status: 'confirmed' | 'finalized' | 'pending' | 'failed';
  type: 'pay' | 'nft' | 'certificate' | 'donation' | 'other';
  description?: string;
  metadata?: any;
}

export interface SolanaTreasuryInfo {
  address: string;
  balance: number;
  totalReceived: number;
  transactionCount: number;
  lastUpdated: string;
}

export interface UserOnChainData {
  publicKey: string;
  username: string;
  rank: number;
  amountSpent: number;
  joinDate: string;
  certificateNFT?: string;
  isVerified: boolean;
}

export interface CertificateNFT {
  mint: string;
  owner: string;
  metadata: {
    name: string;
    description: string;
    image: string;
    attributes: Array<{
      trait_type: string;
      value: string | number;
    }>;
    external_url?: string;
    properties: {
      rank: number;
      joinDate: string;
      amountSpent: number;
      username: string;
      team?: string;
      tier?: string;
    };
  };
  verified: boolean;
  mintDate: string;
}

export interface OnChainLeaderboardEntry {
  publicKey: string;
  username?: string;
  rank: number;
  amountSpent: number;
  lastTransaction: string;
  previousRank?: number;
  team?: string;
  isVerified: boolean;
}
