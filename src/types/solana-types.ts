
import { TeamColor } from './mockery-types';

export interface OnChainLeaderboardEntry {
  id: string;
  publicKey: string;
  username: string;
  rank: number;
  amount: number;
  team: TeamColor;
  signature?: string;
  timestamp?: number; // Add this to fix TS2353 errors
}

export interface SolanaTransaction {
  id: string;
  fromAddress: string;
  toAddress: string;
  amount: number;
  symbol: string;
  timestamp: string;
  blockNumber: number;
  transactionHash?: string; // Add this to fix TS2353 errors
  status?: string; // Add this to fix TS2352 errors
}

export interface SolanaWallet {
  publicKey: string;
  balance: number;
  transactions: SolanaTransaction[];
}

export type SolanaPaymentStatus = 'pending' | 'confirmed' | 'failed';

export interface SolanaPaymentResult {
  success: boolean;
  signature?: string;
  message?: string;
  status?: SolanaPaymentStatus;
}
