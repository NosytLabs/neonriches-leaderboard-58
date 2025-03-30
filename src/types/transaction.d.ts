
export type TransactionType = 'deposit' | 'withdrawal' | 'spend' | 'refund' | 'mockery' | 'protection' | 'boost' | 'certificate' | 'cosmetic' | 'subscription';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  timestamp: string;
  metadata?: Record<string, any>;
  status: 'completed' | 'pending' | 'failed';
}

export interface SpendOptions {
  targetUser?: string;
  mockeryType?: string;
  itemId?: string;
  itemType?: string;
  certificateId?: string;
  subscriptionId?: string;
  boostDuration?: number;
  boostType?: string;
}

export interface WalletBalance {
  userId: string;
  balance: number;
  lockedBalance: number;
  lastUpdated: string;
}
