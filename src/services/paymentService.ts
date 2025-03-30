
/**
 * Payment service for handling transactions
 */
import { User } from '@/types/user';
import ensureUser from '@/utils/userAdapter';

export type TransactionType = 'deposit' | 'withdrawal' | 'purchase' | 'refund' | 'reward';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  timestamp: string;
  status: 'pending' | 'completed' | 'failed';
  metadata?: Record<string, any>;
}

/**
 * Record a transaction
 * @param userId User ID
 * @param amount Transaction amount
 * @param type Transaction type
 * @param description Transaction description
 * @param metadata Additional metadata
 * @returns Recorded transaction
 */
export function recordTransaction(
  userId: string,
  amount: number,
  type: TransactionType,
  description: string,
  metadata?: Record<string, any>
): Transaction {
  // In a real app, this would make an API call to your backend
  
  // Generate a unique transaction ID
  const id = `txn_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 9)}`;
  
  // Create transaction object
  const transaction: Transaction = {
    id,
    userId,
    amount,
    type,
    description,
    timestamp: new Date().toISOString(),
    status: 'completed',
    metadata
  };
  
  // In a real app, you'd store this transaction in your database
  console.log('Recording transaction:', transaction);
  
  // Simulate storing in local storage for demo purposes
  const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
  transactions.push(transaction);
  localStorage.setItem('transactions', JSON.stringify(transactions));
  
  return transaction;
}

/**
 * Get transaction history for a user
 * @param userId User ID
 * @returns Array of transactions
 */
export function getTransactionHistory(userId: string): Transaction[] {
  // In a real app, this would fetch from your API or database
  
  // For demo, get from local storage
  const allTransactions = JSON.parse(localStorage.getItem('transactions') || '[]');
  return allTransactions.filter((txn: Transaction) => txn.userId === userId);
}

/**
 * Process a wallet deposit
 * @param user User object
 * @param amount Amount to deposit
 * @returns Updated user and transaction
 */
export async function processDeposit(
  user: User,
  amount: number
): Promise<{ success: boolean; user: User; transaction?: Transaction; error?: string }> {
  try {
    const safeUser = ensureUser(user);
    
    // Validate amount
    if (amount <= 0) {
      return {
        success: false,
        user: safeUser,
        error: 'Deposit amount must be greater than zero'
      };
    }
    
    // In a real app, you'd process payment, verify it, then update user
    // Here we just update the mock user data
    
    // Record transaction
    const transaction = recordTransaction(
      safeUser.id,
      amount,
      'deposit',
      `Wallet deposit of ${amount}`
    );
    
    // Update user balance and stats
    const updatedUser = {
      ...safeUser,
      walletBalance: (safeUser.walletBalance || 0) + amount,
      amountSpent: (safeUser.amountSpent || 0) + amount,
      totalSpent: (safeUser.totalSpent || 0) + amount,
      // Update rank based on new total
      rank: Math.floor((safeUser.totalSpent || 0) + amount) 
    };
    
    // In a real app, you'd save this to your database
    
    return {
      success: true,
      user: updatedUser,
      transaction
    };
  } catch (error) {
    console.error('Error processing deposit:', error);
    return {
      success: false,
      user,
      error: 'Failed to process deposit'
    };
  }
}

export default {
  recordTransaction,
  getTransactionHistory,
  processDeposit
};
