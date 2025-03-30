
import { v4 as uuidv4 } from 'uuid';
import { UserProfile } from '@/types/user';

export type TransactionType = 
  | 'deposit' 
  | 'purchase' 
  | 'refund' 
  | 'reward' 
  | 'spend'
  | 'transfer'
  | 'wish';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  metadata?: Record<string, any>;
  timestamp: string;
}

/**
 * Create a transaction record
 */
export const createTransaction = (data: Omit<Transaction, 'id' | 'timestamp'>): Promise<Transaction> => {
  const transaction: Transaction = {
    id: uuidv4(),
    ...data,
    timestamp: new Date().toISOString()
  };
  
  // Here you would typically send this to your backend
  console.log('Creating transaction:', transaction);
  
  // For now, let's simulate storing it locally
  const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
  transactions.push(transaction);
  localStorage.setItem('transactions', JSON.stringify(transactions));
  
  // Update user wallet balance (in a real app, this would be done server-side)
  const updateUserBalance = (userId: string, amount: number, type: TransactionType) => {
    // For demo purposes only
    console.log(`Updating user ${userId} balance: ${amount} (${type})`);
  };
  
  // Adjust balance based on transaction type
  if (data.type === 'deposit' || data.type === 'refund' || data.type === 'reward') {
    updateUserBalance(data.userId, data.amount, data.type);
  } else if (data.type === 'purchase' || data.type === 'spend' || data.type === 'transfer' || data.type === 'wish') {
    updateUserBalance(data.userId, -data.amount, data.type);
  }
  
  return Promise.resolve(transaction);
};

export const recordTransaction = (
  userId: string,
  amount: number,
  type: TransactionType,
  description: string,
  metadata?: Record<string, any>
): Transaction => {
  const transaction: Transaction = {
    id: uuidv4(),
    userId,
    amount,
    type,
    description,
    metadata,
    timestamp: new Date().toISOString()
  };
  
  // Here you would typically send this to your backend
  console.log('Recording transaction:', transaction);
  
  // For now, let's simulate storing it locally
  const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
  transactions.push(transaction);
  localStorage.setItem('transactions', JSON.stringify(transactions));
  
  return transaction;
};

/**
 * Retrieve all transactions for a user
 */
export const getUserTransactions = (userId: string): Promise<Transaction[]> => {
  const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
  return Promise.resolve(transactions.filter((tx: Transaction) => tx.userId === userId));
};

export default {
  createTransaction,
  recordTransaction,
  getUserTransactions
};
