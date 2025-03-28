
import { TransactionType } from './wallet';

export interface SolanaWallet {
  publicKey: string;
  balance: number;
  lastUpdated: string;
}

export interface SolanaTransaction {
  id: string;
  signature: string;
  timestamp: string;
  type: TransactionType;
  amount: number;
  sender: string;
  recipient: string;
  status: 'confirmed' | 'pending' | 'failed';
  message?: string;
}

export interface SolanaTreasuryInfo {
  address: string;
  balance: number;
  totalDeposits: number;
  totalWithdrawals: number;
  lastUpdated: string;
  usdValue: number;
}

export interface OnChainLeaderboardEntry {
  id: string;
  publicKey: string;
  username: string;
  rank: number;
  previousRank: number;
  amountSpent: number;
  totalSpent: number;
  lastTransaction: string;
  isVerified: boolean;
  signature: string;
}

export interface SolanaPayment {
  amount: number;
  reference: string;
  label: string;
  message: string;
  memo?: string;
}

export interface SolanaWithdrawal {
  amount: number;
  recipient: string;
  fee: number;
  memo?: string;
}
