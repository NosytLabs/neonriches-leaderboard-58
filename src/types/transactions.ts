
export type TransactionType = 
  | 'deposit' 
  | 'withdraw' 
  | 'transfer' 
  | 'spend' 
  | 'refund' 
  | 'bonus' 
  | 'gift' 
  | 'reward' 
  | 'purchase' 
  | 'subscription' 
  | 'tax' 
  | 'fee' 
  | 'penalty' 
  | 'interest' 
  | 'dividend' 
  | 'royalty' 
  | 'commission' 
  | 'salary' 
  | 'income' 
  | 'expense' 
  | 'investment'
  | 'mockery'
  | 'protection'
  | 'wish'
  | 'cosmetic'
  | 'feature';

export interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  amount: number;
  description: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, any>;
}

export interface TransactionListProps {
  transactions: Transaction[];
  loading?: boolean;
  noDataMessage?: string;
}
