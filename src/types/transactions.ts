
export type TransactionType = 
  'deposit' | 
  'withdrawal' | 
  'purchase' | 
  'refund' | 
  'bonus' | 
  'penalty' | 
  'mockery' | 
  'mockery_protection' | 
  'cosmetic' | 
  'profile_boost' | 
  'gift' | 
  'subscription';

export type TransactionStatus = 
  'pending' | 
  'completed' | 
  'failed' | 
  'cancelled' | 
  'refunded';

export interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  amount: number;
  status: TransactionStatus;
  description?: string;
  metadata?: Record<string, any>;
  createdAt: string;
  completedAt?: string;
}
