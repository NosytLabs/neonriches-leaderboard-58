
export type TransactionType = 
  | 'deposit' 
  | 'withdraw' 
  | 'transfer' 
  | 'refund' 
  | 'purchase' 
  | 'subscription' 
  | 'boost' 
  | 'fee' 
  | 'reward' 
  | 'bonus' 
  | 'other'
  | 'mockery'
  | 'protection'
  | 'cosmetic'
  | 'wish';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  createdAt: string;
  status: 'pending' | 'completed' | 'failed';
  metadata?: Record<string, any>;
}
