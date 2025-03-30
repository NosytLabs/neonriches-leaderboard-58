
import { User } from '@/types/user';
import { Transaction, TransactionType } from '@/types/transaction';

// In-memory transaction storage for demonstration
const transactions: Transaction[] = [];

/**
 * Records a transaction in the system
 */
export const recordTransaction = (
  userId: string,
  amount: number,
  type: TransactionType,
  description: string,
  metadata?: Record<string, any>
): Transaction => {
  const transaction: Transaction = {
    id: `txn-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    userId,
    amount,
    type,
    description,
    timestamp: new Date().toISOString(),
    metadata,
    status: 'completed'
  };
  
  transactions.push(transaction);
  return transaction;
};

/**
 * Gets transactions for a user
 */
export const getUserTransactions = (userId: string): Transaction[] => {
  return transactions.filter(txn => txn.userId === userId);
};

/**
 * Gets a transaction by ID
 */
export const getTransactionById = (transactionId: string): Transaction | undefined => {
  return transactions.find(txn => txn.id === transactionId);
};

/**
 * Makes a payment for a feature or item
 */
export const makePayment = (
  user: User,
  amount: number,
  description: string,
  type: TransactionType = 'spend',
  metadata?: Record<string, any>
): { success: boolean; transaction?: Transaction; error?: string } => {
  if (!user || amount <= 0) {
    return { success: false, error: 'Invalid payment details' };
  }
  
  // Check if user has sufficient balance
  if ((user.walletBalance || 0) < amount) {
    return { success: false, error: 'Insufficient funds' };
  }
  
  try {
    // Record the transaction
    const transaction = recordTransaction(
      user.id,
      amount,
      type,
      description,
      metadata
    );
    
    // In a real application, this would update the user's balance in the database
    // For now, we'll just update it in memory
    user.walletBalance = (user.walletBalance || 0) - amount;
    user.amountSpent = (user.amountSpent || 0) + amount;
    
    return { success: true, transaction };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Payment processing failed' 
    };
  }
};

/**
 * Processes a refund
 */
export const processRefund = (
  transactionId: string,
  reason: string
): { success: boolean; transaction?: Transaction; error?: string } => {
  const originalTransaction = getTransactionById(transactionId);
  
  if (!originalTransaction) {
    return { success: false, error: 'Transaction not found' };
  }
  
  if (originalTransaction.type === 'refund') {
    return { success: false, error: 'Cannot refund a refund transaction' };
  }
  
  try {
    const refundTransaction = recordTransaction(
      originalTransaction.userId,
      originalTransaction.amount,
      'refund',
      `Refund for transaction ${transactionId}: ${reason}`,
      {
        originalTransactionId: transactionId,
        reason
      }
    );
    
    return { success: true, transaction: refundTransaction };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Refund processing failed' 
    };
  }
};

/**
 * Adds funds to a user's wallet
 */
export const addFunds = (
  user: User,
  amount: number,
  paymentMethod: string
): { success: boolean; transaction?: Transaction; error?: string } => {
  if (!user || amount <= 0) {
    return { success: false, error: 'Invalid payment details' };
  }
  
  try {
    // Record the transaction
    const transaction = recordTransaction(
      user.id,
      amount,
      'deposit',
      `Added funds via ${paymentMethod}`,
      { paymentMethod }
    );
    
    // In a real application, this would update the user's balance in the database
    // For now, we'll just update it in memory
    user.walletBalance = (user.walletBalance || 0) + amount;
    
    return { success: true, transaction };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Deposit processing failed' 
    };
  }
};

export default {
  recordTransaction,
  getUserTransactions,
  getTransactionById,
  makePayment,
  processRefund,
  addFunds
};
