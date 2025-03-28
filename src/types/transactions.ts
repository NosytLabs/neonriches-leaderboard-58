
export type TransactionType = 
  | 'deposit' 
  | 'withdrawal' 
  | 'transfer' 
  | 'purchase' 
  | 'refund' 
  | 'reward' 
  | 'fee' 
  | 'mockery'
  | 'mockery_protection'
  | 'cosmetic'
  | 'founder'
  | 'subscription';

export type TransactionStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  status: TransactionStatus;
  description: string;
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt?: string;
}
