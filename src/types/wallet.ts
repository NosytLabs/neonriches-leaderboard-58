
export type TransactionType = 
  | 'deposit' 
  | 'withdrawal' 
  | 'purchase' 
  | 'reward' 
  | 'tip' 
  | 'referral' 
  | 'mockery'
  | 'protection'
  | 'shame'
  | 'wish'
  | 'advertisement';

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
}

export interface SpendOptions {
  targetUser?: string;
  targetUsername?: string;
  mockeryType?: string;
  shameType?: string;
  cosmetic?: string;
  feature?: string;
  wishAmount?: number;
  preferredCategory?: string;
}

export interface Wallet {
  id: string;
  userId: string;
  balance: number;
  address?: string;
  depositTransactions: Transaction[];
  withdrawalTransactions: Transaction[];
  purchaseTransactions: Transaction[];
  rewardTransactions: Transaction[];
}
