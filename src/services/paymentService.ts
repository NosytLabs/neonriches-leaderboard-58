
import { TransactionType } from '@/types/transaction';

interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  metadata?: Record<string, any>;
  timestamp: string;
}

// Mock transaction storage
const transactions: Transaction[] = [];

// Record a new transaction
export const recordTransaction = (
  userId: string,
  amount: number,
  type: TransactionType,
  description: string,
  metadata?: Record<string, any>
): Transaction => {
  const transaction: Transaction = {
    id: `tx_${Date.now()}`,
    userId,
    amount,
    type,
    description,
    metadata,
    timestamp: new Date().toISOString()
  };
  
  // Store transaction
  transactions.push(transaction);
  
  return transaction;
};

// Get user transactions
export const getUserTransactions = (userId: string): Transaction[] => {
  return transactions.filter(tx => tx.userId === userId);
};

// Get transaction by ID
export const getTransactionById = (txId: string): Transaction | undefined => {
  return transactions.find(tx => tx.id === txId);
};

// Get total spent by user
export const getTotalSpentByUser = (userId: string): number => {
  return transactions
    .filter(tx => tx.userId === userId && ['spend', 'purchase'].includes(tx.type))
    .reduce((sum, tx) => sum + tx.amount, 0);
};

// Export the functions
export default {
  recordTransaction,
  getUserTransactions,
  getTransactionById,
  getTotalSpentByUser
};
