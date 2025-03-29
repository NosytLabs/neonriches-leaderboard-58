
export type TransactionType = 
  | 'spend' 
  | 'purchase' 
  | 'refund' 
  | 'credit' 
  | 'promotion' 
  | 'withdrawal' 
  | 'deposit'
  | 'mockery'
  | 'protection'
  | 'purchase'
  | 'deposit';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  timestamp: string;
  status: 'pending' | 'completed' | 'failed';
  metadata?: Record<string, any>;
}

export interface WalletBalance {
  total: number;
  available: number;
  pending: number;
  frozen?: number;
}

export interface SpendOptions {
  targetId?: string;
  metadata?: Record<string, any>;
  category?: string;
  externalId?: string;
}
