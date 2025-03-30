
import { User } from './user';

export type TransactionType = 'deposit' | 'withdrawal' | 'purchase' | 'refund' | 'bonus' | 'transfer' | 'subscription' | 'mockery' | 'boost' | 'cosmetic';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
  paymentMethod?: string;
  metadata?: Record<string, any>;
}

export interface TransactionWithUser extends Transaction {
  user: User;
}

export interface SpendOptions {
  silent?: boolean;
  skipConfirmation?: boolean;
  skipBalanceCheck?: boolean;
  metadata?: Record<string, any>;
}

export interface TransactionResult {
  success: boolean;
  transactionId?: string;
  newBalance?: number;
  error?: string;
  transaction?: Transaction;
}

export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: string;
  clientSecret: string;
}

export interface PaymentMethod {
  id: string;
  type: string;
  card?: {
    brand: string;
    last4: string;
    expiryMonth: number;
    expiryYear: number;
  };
  billingDetails?: {
    name: string;
    email: string;
    address?: {
      line1: string;
      line2?: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    };
  };
}
