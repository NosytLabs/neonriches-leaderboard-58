
import { toast } from '@/hooks/use-toast';
import { UserProfile } from '@/contexts/AuthContext';

// Types for wallet-related operations
export interface Transaction {
  id: string;
  userId: string;
  type: 'deposit' | 'spend' | 'shame' | 'advertisement' | 'subscription';
  amount: number;
  description: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

// Mock transaction data (would be stored in a database in a real app)
let transactions: Transaction[] = [];

// Add funds to user wallet
export const addFundsToWallet = async (
  user: UserProfile,
  amount: number
): Promise<boolean> => {
  try {
    if (!user || !user.id) {
      throw new Error('User not authenticated');
    }
    
    if (amount <= 0) {
      throw new Error('Amount must be greater than zero');
    }
    
    // Create transaction record
    const transaction: Transaction = {
      id: Math.random().toString(36).substring(2, 9),
      userId: user.id,
      type: 'deposit',
      amount: amount,
      description: 'Added funds to royal purse',
      timestamp: new Date().toISOString(),
      metadata: { paymentMethod: 'credit_card' }
    };
    
    // Add to transaction history
    transactions.push(transaction);
    
    // Store in localStorage for persistence
    const storedTransactions = localStorage.getItem('p2w_transactions') || '[]';
    let parsedTransactions = JSON.parse(storedTransactions);
    parsedTransactions.push(transaction);
    localStorage.setItem('p2w_transactions', JSON.stringify(parsedTransactions));
    
    // Update wallet balance in local storage
    const currentBalance = user.walletBalance || 0;
    const newBalance = currentBalance + amount;
    
    // Store updated user data for persistence
    const userData = {
      ...user,
      walletBalance: newBalance
    };
    localStorage.setItem('p2w_user', JSON.stringify(userData));
    
    return true;
  } catch (error) {
    console.error('Error adding funds to wallet:', error);
    toast({
      title: "Transaction Failed",
      description: error.message || "Failed to add funds to your wallet.",
      variant: "destructive"
    });
    return false;
  }
};

// Spend from wallet
export const spendFromWallet = async (
  user: UserProfile,
  amount: number,
  type: Transaction['type'],
  description: string,
  metadata?: Record<string, any>
): Promise<boolean> => {
  try {
    if (!user || !user.id) {
      throw new Error('User not authenticated');
    }
    
    const currentBalance = user.walletBalance || 0;
    
    if (currentBalance < amount) {
      throw new Error('Insufficient funds in royal purse');
    }
    
    // Create transaction record
    const transaction: Transaction = {
      id: Math.random().toString(36).substring(2, 9),
      userId: user.id,
      type,
      amount: -amount, // Negative amount for spending
      description,
      timestamp: new Date().toISOString(),
      metadata
    };
    
    // Add to transaction history
    transactions.push(transaction);
    
    // Store in localStorage for persistence
    const storedTransactions = localStorage.getItem('p2w_transactions') || '[]';
    let parsedTransactions = JSON.parse(storedTransactions);
    parsedTransactions.push(transaction);
    localStorage.setItem('p2w_transactions', JSON.stringify(parsedTransactions));
    
    // Update wallet balance
    const newBalance = currentBalance - amount;
    
    // Store updated user data for persistence
    const userData = {
      ...user,
      walletBalance: newBalance
    };
    localStorage.setItem('p2w_user', JSON.stringify(userData));
    
    return true;
  } catch (error) {
    console.error('Error spending from wallet:', error);
    toast({
      title: "Transaction Failed",
      description: error.message || "Failed to process your transaction.",
      variant: "destructive"
    });
    return false;
  }
};

// Get user transaction history
export const getUserTransactions = async (
  userId: string,
  limit: number = 20
): Promise<Transaction[]> => {
  try {
    // In a real app, fetch from database
    // For demo, load from localStorage
    const storedTransactions = localStorage.getItem('p2w_transactions') || '[]';
    let parsedTransactions: Transaction[] = JSON.parse(storedTransactions);
    
    // Filter by user ID
    const userTransactions = parsedTransactions
      .filter(transaction => transaction.userId === userId)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit);
    
    return userTransactions;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
};

// Get wallet balance
export const getWalletBalance = (user: UserProfile): number => {
  if (!user) return 0;
  
  // For demo, load from user object or localStorage
  return user.walletBalance || 0;
};
