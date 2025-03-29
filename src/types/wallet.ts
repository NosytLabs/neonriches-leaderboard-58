
export type TransactionType = 
  | 'deposit' 
  | 'withdrawal' 
  | 'purchase' 
  | 'transfer' 
  | 'mockery' 
  | 'cosmetic' 
  | 'subscription' 
  | 'boost' 
  | 'wish' 
  | 'advertisement' 
  | 'protection'
  | 'deposit'
  | 'purchase'
  | 'mockery'
  | 'protection';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  timestamp: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  targetUser?: string;
  targetItem?: string;
  metadata?: Record<string, any>;
}

export interface SpendOptions {
  targetUser?: string;
  cosmetic?: string;
  feature?: string;
  wishAmount?: number;
  preferredCategory?: string;
  mockeryType?: string;
  itemId?: string;
  category?: string; // Added for backward compatibility
}

export interface WalletBalance {
  userId: string;
  balance: number;
  pendingDeposits: number;
  pendingWithdrawals: number;
  lastUpdated: string;
}
