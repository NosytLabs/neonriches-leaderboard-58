
import { User } from '@/types/user';
import { useToast } from '@/hooks/use-toast';

export type TransactionType = 
  | 'purchase'
  | 'mockery'
  | 'protection'
  | 'boost'
  | 'reward'
  | 'deposit'
  | 'withdrawal'
  | 'refund'
  | 'gift';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  timestamp: Date | string;
  metadata?: Record<string, any>;
}

export interface SpendOptions {
  showToast?: boolean;
  updateProfile?: boolean;
  metadata?: Record<string, any>;
}

const defaultOptions: SpendOptions = {
  showToast: true,
  updateProfile: true,
  metadata: {}
};

// Spend money from user's wallet
export const spendFromWallet = (
  user: User, 
  amount: number, 
  type: TransactionType, 
  description: string,
  metadata: Record<string, any> = {},
  options: SpendOptions = defaultOptions
): boolean => {
  // Check if user has enough balance
  if (!user || user.walletBalance < amount) {
    // Could show a toast here in real app
    console.error('Insufficient funds', {
      available: user?.walletBalance || 0,
      requested: amount
    });
    return false;
  }
  
  // Create transaction record - in a real app this would be sent to API
  const transaction: Transaction = {
    id: `tx-${Date.now()}`,
    userId: user.id,
    amount,
    type,
    description,
    timestamp: new Date().toISOString(),
    metadata
  };
  
  console.log('Transaction created:', transaction);
  
  // Update user balance - in real app this would happen server-side
  user.walletBalance -= amount;
  user.totalSpent = (user.totalSpent || 0) + amount;
  user.amountSpent = (user.amountSpent || 0) + amount;
  
  // In a real app, you would update the user profile in the database
  console.log('User balance updated:', user.walletBalance);
  
  return true;
};

// Add funds to user's wallet
export const addFundsToWallet = (
  user: User,
  amount: number,
  description = 'Added funds to wallet',
  metadata: Record<string, any> = {}
): boolean => {
  if (!user) return false;
  
  // Create transaction record
  const transaction: Transaction = {
    id: `tx-${Date.now()}`,
    userId: user.id,
    amount,
    type: 'deposit',
    description,
    timestamp: new Date().toISOString(),
    metadata
  };
  
  console.log('Transaction created:', transaction);
  
  // Update user balance
  user.walletBalance = (user.walletBalance || 0) + amount;
  
  // In a real app, you would update the user profile in the database
  console.log('User balance updated:', user.walletBalance);
  
  return true;
};

// Get transaction history for a user
export const getTransactionHistory = (userId: string): Transaction[] => {
  // In a real app, this would fetch from API/database
  // This is a mock implementation
  return [
    {
      id: 'tx-1',
      userId,
      amount: 10,
      type: 'deposit',
      description: 'Initial wallet funding',
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'tx-2',
      userId,
      amount: 5,
      type: 'purchase',
      description: 'Premium feature purchase',
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
    }
  ];
};
