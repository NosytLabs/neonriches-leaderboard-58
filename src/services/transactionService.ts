
import { UserProfile } from '@/types/user';

export type TransactionType = 
  | 'deposit'
  | 'withdrawal'
  | 'purchase'
  | 'subscription'
  | 'charge'
  | 'refund'
  | 'system'
  | 'bonus'
  | 'gift'
  | 'commission'
  | 'fee'
  | 'adjustment'
  | 'reward'
  | 'penalty'
  | 'rank'
  | 'team'
  | 'cosmetic'
  | 'wish'
  | 'mockery'
  | 'protection';

export interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  amount: number;
  description: string;
  timestamp: Date;
  metadata?: Record<string, any>;
  status: 'pending' | 'completed' | 'failed' | 'reversed';
  referenceId?: string;
  error?: string;
}

export const recordTransaction = (
  userId: string,
  amount: number,
  type: TransactionType,
  description: string,
  metadata: Record<string, any> = {}
): Transaction => {
  // This would normally call an API, but for now we'll just return a mock transaction
  const transaction: Transaction = {
    id: `tx_${Date.now()}`,
    userId,
    type,
    amount,
    description,
    timestamp: new Date(),
    metadata,
    status: 'completed'
  };
  
  console.log('Transaction recorded:', transaction);
  return transaction;
};
