
import { UserProfile } from './user';

export type TransactionType = 
  | 'deposit'
  | 'withdrawal'
  | 'purchase'
  | 'refund'
  | 'fee'
  | 'reward'
  | 'transfer'
  | 'royalty'
  | 'mockery'
  | 'protection'
  | 'boost';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

export interface WalletBalance {
  available: number;
  pending: number;
  total: number;
  lastUpdated: string;
}

export interface SpendOptions {
  notify?: boolean;
  includeFees?: boolean;
  skipConfirmation?: boolean;
  metadata?: Record<string, any>;
}

export interface UserWallet {
  balance: number;
  transactions: Transaction[];
  depositAddress?: string;
}
