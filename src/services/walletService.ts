
import { Transaction, TransactionType, TransactionStatus } from '@/types/transactions';
import { User } from '@/types/user';

// Generate a unique transaction ID
const generateTransactionId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

// Record a transaction
export const recordTransaction = (
  userId: string,
  amount: number,
  type: TransactionType,
  description: string,
  metadata?: Record<string, any>
): Transaction => {
  const transaction: Transaction = {
    id: generateTransactionId(),
    userId,
    type,
    amount,
    currency: 'USD',
    status: 'completed',
    description,
    createdAt: new Date().toISOString(),
    completedAt: new Date().toISOString(),
    metadata
  };

  // In a real app, this would save to a database
  console.log('Transaction recorded:', transaction);
  
  return transaction;
};

// Get user balance
export const getUserBalance = (user: User): number => {
  return user.walletBalance || 0;
};

// Add funds to user account
export const addFunds = (user: User, amount: number, paymentMethod: string) => {
  // Create a transaction record
  const transaction = recordTransaction(
    user.id,
    amount,
    'deposit',
    `Deposit via ${paymentMethod}`,
    { paymentMethod }
  );
  
  // Return updated user data
  return {
    user: {
      ...user,
      walletBalance: (user.walletBalance || 0) + amount,
      amountSpent: (user.amountSpent || 0) + amount
    },
    transaction
  };
};

// Make a purchase
export const makePurchase = (
  user: User,
  amount: number,
  itemType: string,
  itemId: string,
  description: string
) => {
  // Check if user has enough funds
  if ((user.walletBalance || 0) < amount) {
    throw new Error('Insufficient funds');
  }
  
  // Create a transaction record
  const transaction = recordTransaction(
    user.id,
    amount,
    'purchase',
    description,
    { itemType, itemId }
  );
  
  // Return updated user data
  return {
    user: {
      ...user,
      walletBalance: (user.walletBalance || 0) - amount
    },
    transaction
  };
};

// Get transaction history
export const getTransactionHistory = (userId: string): Transaction[] => {
  // In a real app, this would fetch from a database
  // Returning mock data for now
  return [
    {
      id: 'tx_1',
      userId,
      type: 'deposit',
      amount: 100,
      currency: 'USD',
      status: 'completed',
      description: 'Initial deposit',
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      completedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      paymentMethod: 'credit_card'
    },
    {
      id: 'tx_2',
      userId,
      type: 'purchase',
      amount: 25,
      currency: 'USD',
      status: 'completed',
      description: 'Rank boost purchase',
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      completedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      metadata: { itemType: 'boost', itemId: 'boost_1' }
    }
  ] as Transaction[];
};
