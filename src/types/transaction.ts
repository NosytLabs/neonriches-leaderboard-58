
export type TransactionType = 
  | 'spend' 
  | 'transfer' 
  | 'withdrawal' 
  | 'cosmetic' 
  | 'founder' 
  | 'wish' 
  | 'advertisement'
  | 'boost';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  createdAt: string;
  metadata?: Record<string, any>;
}

export interface TransactionData {
  amount: number;
  type: TransactionType;
  description: string;
  metadata?: Record<string, any>;
}
