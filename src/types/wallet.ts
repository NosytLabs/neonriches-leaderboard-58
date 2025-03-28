
import { UserProfile } from './user';

export type TransactionType = 
  | 'deposit' 
  | 'withdrawal' 
  | 'purchase' 
  | 'reward' 
  | 'bonus' 
  | 'refund'
  | 'mockery'
  | 'protection'
  | 'cosmetic'
  | 'wish'
  | 'founder';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  timestamp: string;
  metadata?: Record<string, any>;
  status: 'pending' | 'completed' | 'failed';
}

export interface UserWallet {
  balance: number;
  totalDeposited: number;
  totalWithdrawn: number;
  lockedBalance: number;
  transactions: Transaction[];
}

export interface WalletHistoryEntry {
  id: string;
  date: string;
  amount: number;
  type: TransactionType;
  description: string;
  isDeposit: boolean;
  status: string;
}

export interface SpendOptions {
  targetUser?: UserProfile;
  itemId?: string;
  category?: string;
  subscriptionId?: string;
  duration?: number;
  wishAmount?: number;
  preferredCategory?: string;
}

export default Transaction;
