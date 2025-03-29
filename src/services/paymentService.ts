
import { Transaction, TransactionType } from '@/types/transaction';

// Process a payment for deposits
export const processPayment = async (amount: number): Promise<boolean> => {
  try {
    // This is a mock implementation that always succeeds for demo purposes
    // In a real world app, this would connect to a payment processor
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log(`Payment processed: $${amount}`);
    
    return true;
  } catch (error) {
    console.error('Payment error:', error);
    return false;
  }
};

// Record a transaction in the user's history
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
    createdAt: new Date().toISOString(),
    metadata
  };
  
  // In a real app, this would be stored in a database
  
  // For demo purposes, store in localStorage
  const existingTransactions = localStorage.getItem('transactions');
  const transactions = existingTransactions ? JSON.parse(existingTransactions) : [];
  transactions.push(transaction);
  localStorage.setItem('transactions', JSON.stringify(transactions));
  
  return transaction;
};

// Get user transactions
export const getUserTransactions = (userId: string): Transaction[] => {
  const existingTransactions = localStorage.getItem('transactions');
  if (!existingTransactions) return [];
  
  const transactions = JSON.parse(existingTransactions);
  return transactions.filter((tx: Transaction) => tx.userId === userId);
};
