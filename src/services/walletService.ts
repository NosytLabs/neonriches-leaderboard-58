
import { UserProfile } from '@/types/user';

export type SpendingCategory = 'subscription' | 'cosmetic' | 'advertisement' | 'shame' | 'boost' | 'spend' | 'wish';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: 'deposit' | 'spend' | 'withdrawal' | 'shame' | 'advertisement' | 'subscription' | 'wish';
  description: string;
  timestamp: Date;
  metadata?: any;
}

// Mock user transactions stored in localStorage
const getUserTransactionsFromStorage = (userId: string): Transaction[] => {
  const storageKey = `user_transactions_${userId}`;
  const storedTransactions = localStorage.getItem(storageKey);
  
  if (storedTransactions) {
    try {
      const parsed = JSON.parse(storedTransactions);
      return parsed.map((t: any) => ({
        ...t,
        timestamp: new Date(t.timestamp)
      }));
    } catch (error) {
      console.error("Error parsing transactions:", error);
    }
  }
  
  return [];
};

// Save transactions to localStorage
const saveTransactionsToStorage = (userId: string, transactions: Transaction[]) => {
  const storageKey = `user_transactions_${userId}`;
  localStorage.setItem(storageKey, JSON.stringify(transactions));
};

// Get user transactions
export const getUserTransactions = async (userId: string, limit = 10): Promise<Transaction[]> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const transactions = getUserTransactionsFromStorage(userId);
      // Sort by timestamp, newest first
      const sorted = transactions.sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      
      // Apply limit
      const limited = sorted.slice(0, limit);
      resolve(limited);
    }, 500); // Simulate network delay
  });
};

// Add funds to user wallet
export const depositToWallet = async (
  user: UserProfile,
  amount: number,
  description = "Wallet deposit",
  updateUserProfile?: (data: Partial<UserProfile>) => Promise<void>
): Promise<boolean> => {
  // In a real app, this would call an API
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        // Get existing transactions
        const transactions = getUserTransactionsFromStorage(user.id);
        
        // Create new transaction
        const newTransaction: Transaction = {
          id: `dep_${Date.now()}`,
          userId: user.id,
          amount: amount,
          type: 'deposit',
          description: description || `Added $${amount.toFixed(2)} to wallet`,
          timestamp: new Date()
        };
        
        // Add to transactions
        transactions.push(newTransaction);
        
        // Save transactions
        saveTransactionsToStorage(user.id, transactions);
        
        // Update user balance if updateUserProfile function is provided
        if (updateUserProfile) {
          updateUserProfile({
            ...user,
            walletBalance: (user.walletBalance || 0) + amount
          });
        }
        
        resolve(true);
      } catch (error) {
        console.error("Error depositing to wallet:", error);
        resolve(false);
      }
    }, 800); // Simulate network delay
  });
};

// Spend from user wallet
export const spendFromWallet = async (
  user: UserProfile,
  amount: number,
  category: SpendingCategory,
  description: string,
  metadata?: any
): Promise<boolean> => {
  // In a real app, this would call an API
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        // Get existing transactions
        const transactions = getUserTransactionsFromStorage(user.id);
        
        // Create new transaction
        const newTransaction: Transaction = {
          id: `spe_${Date.now()}`,
          userId: user.id,
          amount: amount,
          type: 'spend',
          description: description,
          timestamp: new Date(),
          metadata: metadata
        };
        
        // Add to transactions
        transactions.push(newTransaction);
        
        // Save transactions
        saveTransactionsToStorage(user.id, transactions);
        
        // In a real app we would update the user's balance in the database
        // For now, just return true to indicate success
        resolve(true);
      } catch (error) {
        console.error("Error spending from wallet:", error);
        resolve(false);
      }
    }, 800); // Simulate network delay
  });
};
