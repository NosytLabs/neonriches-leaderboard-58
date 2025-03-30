
export type TransactionType = 
  | 'deposit'
  | 'withdrawal'
  | 'purchase'
  | 'refund'
  | 'reward'
  | 'boost'
  | 'gift'
  | 'subscription'
  | 'cosmetic'
  | 'mockery'
  | 'wish';

export type TransactionStatus = 
  | 'pending'
  | 'completed'
  | 'failed'
  | 'cancelled'
  | 'refunded';

export interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  amount: number;
  currency: string;
  status: TransactionStatus;
  description: string;
  createdAt: string;
  completedAt?: string;
  paymentMethod?: string;
  metadata?: Record<string, any>;
}
