
import { Transaction, TransactionType } from '@/types/transaction';

// Process a payment for deposits
export const processPayment = async (amount: number): Promise<boolean> => {
  try {
    // This is a mock implementation that always succeeds for demo purposes
    // In a real world app, this would connect to a payment processor
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log(`Payment processed: $${amount}`);
    
    // Dispatch payment success event for UI effects
    if (typeof window !== 'undefined') {
      const paymentEvent = new CustomEvent('payment:success', { 
        detail: { amount }
      });
      window.dispatchEvent(paymentEvent);
    }
    
    return true;
  } catch (error) {
    console.error('Payment error:', error);
    
    // Dispatch payment failure event for UI effects
    if (typeof window !== 'undefined') {
      const paymentEvent = new CustomEvent('payment:failure', { 
        detail: { amount, error }
      });
      window.dispatchEvent(paymentEvent);
    }
    
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
  
  // Dispatch transaction event for UI effects
  if (typeof window !== 'undefined') {
    const txEvent = new CustomEvent('transaction:recorded', { 
      detail: { transaction }
    });
    window.dispatchEvent(txEvent);
  }
  
  return transaction;
};

// Get user transactions
export const getUserTransactions = (userId: string): Transaction[] => {
  const existingTransactions = localStorage.getItem('transactions');
  if (!existingTransactions) return [];
  
  const transactions = JSON.parse(existingTransactions);
  return transactions.filter((tx: Transaction) => tx.userId === userId);
};

// Get the total spending by team (for team competitions)
export const getTeamSpending = (team: string | null): number => {
  if (!team) return 0;
  
  const existingTransactions = localStorage.getItem('transactions');
  if (!existingTransactions) return 0;
  
  const transactions = JSON.parse(existingTransactions);
  
  // Sum up all spending transactions with this team in metadata
  return transactions
    .filter((tx: Transaction) => 
      tx.type !== 'deposit' && 
      tx.metadata?.team === team
    )
    .reduce((sum: number, tx: Transaction) => sum + tx.amount, 0);
};

// Get the top spenders (for leaderboards and effects)
export const getTopSpenders = (limit: number = 10): {userId: string, amount: number}[] => {
  const existingTransactions = localStorage.getItem('transactions');
  if (!existingTransactions) return [];
  
  const transactions = JSON.parse(existingTransactions);
  
  // Group by user and sum up their spending
  const userSpending: Record<string, number> = {};
  transactions
    .filter((tx: Transaction) => tx.type !== 'deposit')
    .forEach((tx: Transaction) => {
      userSpending[tx.userId] = (userSpending[tx.userId] || 0) + tx.amount;
    });
  
  // Convert to array and sort
  return Object.entries(userSpending)
    .map(([userId, amount]) => ({ userId, amount }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, limit);
};

