
import { User } from '@/types/user';

export type TransactionType = 
  'deposit' | 
  'withdrawal' | 
  'purchase' | 
  'refund' | 
  'bonus' | 
  'subscription' | 
  'mockery' | 
  'shame' | 
  'wishing-well' | 
  'gift' | 
  'adjustment';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  timestamp: Date;
  status: 'pending' | 'completed' | 'failed' | 'reversed';
  referenceId?: string;
  metadata?: Record<string, any>;
}

export interface WalletBalance {
  walletId: string;
  userId: string;
  balance: number;
  lockedAmount: number;
  lastUpdated: Date;
  currency: string;
}

export interface SpendOptions {
  description?: string;
  referenceId?: string;
  metadata?: Record<string, any>;
  notifyUser?: boolean;
  skipHistory?: boolean;
  skipRankUpdate?: boolean;
  mockeryType?: string;
  wishAmount?: number;
}

// Transaction history for a user
export interface TransactionHistory {
  userId: string;
  transactions: Transaction[];
  totalSpent: number;
  totalReceived: number;
  netAmount: number;
}

