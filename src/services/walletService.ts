
import { User } from '@/types/user';
import { TransactionType } from '@/types/transactions';

interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}

/**
 * Mock function to record a transaction in the system
 */
export const recordTransaction = (
  userId: string,
  amount: number,
  type: TransactionType,
  description: string,
  metadata?: Record<string, any>
): Transaction => {
  const transaction: Transaction = {
    id: `txn_${Math.random().toString(36).substring(2, 9)}`,
    userId,
    amount,
    type,
    description,
    timestamp: new Date(),
    metadata
  };
  
  console.log('Transaction recorded:', transaction);
  
  return transaction;
};

/**
 * Spend money from a user's wallet
 */
export const spendFromWallet = (
  user: Partial<User>,
  amount: number,
  type: TransactionType,
  description: string,
  metadata?: Record<string, any>
): boolean => {
  // Mock implementation - in a real app, this would check balance and handle actual spending
  console.log(`User ${user.username} spent $${amount} on ${description}`);
  
  // Record the transaction
  recordTransaction(user.id || '', amount, type, description, metadata);
  
  // Return success (always true in mock implementation)
  return true;
};

/**
 * Add funds to a user's wallet
 */
export const addFunds = (
  user: User,
  amount: number,
  paymentMethod: string
): { success: boolean; transactionId?: string; error?: string } => {
  // Mock implementation - in a real app, this would handle actual payment processing
  console.log(`User ${user.username} added $${amount} via ${paymentMethod}`);
  
  // Record the transaction
  const transaction = recordTransaction(
    user.id,
    amount,
    'deposit',
    `Deposit via ${paymentMethod}`,
    { paymentMethod }
  );
  
  return {
    success: true,
    transactionId: transaction.id
  };
};

/**
 * Get user wallet balance 
 */
export const getWalletBalance = (userId: string): number => {
  // Mock implementation - in a real app, this would query the database
  // Return a random number between 10 and 1000
  return Math.floor(Math.random() * 990 + 10);
};

/**
 * Get transaction history for a user
 */
export const getTransactionHistory = (userId: string): Transaction[] => {
  // Mock implementation - in a real app, this would query the database
  return [];
};
