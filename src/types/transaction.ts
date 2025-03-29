
export type TransactionType = 
  | 'spend'
  | 'purchase'
  | 'deposit'
  | 'withdrawal'
  | 'refund'
  | 'gift'
  | 'team'
  | 'mockery'
  | 'cosmetic'
  | 'rank'
  | 'fee';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  metadata?: Record<string, any>;
  timestamp: string;
  status?: 'pending' | 'completed' | 'failed' | 'refunded';
  currency?: string;
  paymentMethod?: string;
}
