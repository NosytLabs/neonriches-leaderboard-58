
import { UserProfile } from './user';

export type TransactionType = 
  'deposit' | 
  'withdrawal' | 
  'purchase' | 
  'refund' | 
  'bonus' | 
  'promotion' | 
  'boost' |
  'cosmetic' | 
  'subscription' | 
  'gift' | 
  'reward' | 
  'fee' |
  'mockery' |
  'shame' |
  'wish' |
  'spend' |
  'protection' |
  'cosmetic';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  timestamp: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  metadata?: Record<string, any>;
}

export interface TransactionPayload {
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  metadata?: Record<string, any>;
}

export interface SpendOptions {
  skipVerification?: boolean;
  bypassBalance?: boolean;
  allowNegative?: boolean;
}

export interface WalletBalance {
  balance: number;
  pendingBalance: number;
  totalDeposited: number;
  totalWithdrawn: number;
  lastTransaction?: string;
}
