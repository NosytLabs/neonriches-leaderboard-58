
import { UserProfile } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

export type TransactionType = 'shame' | 'deposit' | 'spend' | 'advertisement' | 'subscription' | 'cosmetic' | 'profile' | 'marketing';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  date: Date;
  timestamp: Date;
  description: string;
  metadata?: any;
}

// Helper function to generate transaction ID
const generateTransactionId = (): string => {
  return `txn_${Math.random().toString(36).substring(2, 9)}`;
};

// Helper function to create a transaction record
const createTransactionRecord = (
  userId: string, 
  amount: number, 
  type: TransactionType, 
  description: string,
  metadata?: any
): Transaction => {
  const now = new Date();
  return {
    id: generateTransactionId(),
    userId,
    amount,
    type,
    date: now,
    timestamp: now,
    description,
    metadata
  };
};

// Helper function to save transaction to storage
const saveTransaction = (transaction: Transaction): void => {
  const transactionHistory = JSON.parse(localStorage.getItem('p2w_transactions') || '[]');
  transactionHistory.push(transaction);
  localStorage.setItem('p2w_transactions', JSON.stringify(transactionHistory));
};

export const spendFromWallet = async (
  user: UserProfile,
  amount: number,
  type: TransactionType,
  description: string = 'General spending',
  metadata?: any
): Promise<boolean> => {
  // Check if user has enough balance
  if (user.walletBalance < amount) {
    toast({
      title: "Insufficient Funds",
      description: `You need $${amount} to complete this transaction.`,
      variant: "destructive"
    });
    return false;
  }
  
  try {
    // Create transaction record
    const transaction = createTransactionRecord(
      user.id,
      amount,
      type,
      description,
      metadata
    );
    
    // Save transaction
    saveTransaction(transaction);
    
    // Update user's wallet balance locally
    const updatedUser = {
      ...user,
      walletBalance: user.walletBalance - amount,
      amountSpent: user.amountSpent + amount
    };
    
    // Update local storage
    localStorage.setItem('p2w_user', JSON.stringify(updatedUser));
    
    return true;
  } catch (error) {
    console.error("Transaction failed:", error);
    toast({
      title: "Transaction Failed",
      description: "There was an error processing your payment.",
      variant: "destructive"
    });
    return false;
  }
};

export const getTransactionHistory = (userId: string): Transaction[] => {
  const transactions = JSON.parse(localStorage.getItem('p2w_transactions') || '[]');
  return transactions.filter((txn: Transaction) => txn.userId === userId);
};

export const depositToWallet = async (
  user: UserProfile,
  amount: number,
  description: string = 'Wallet deposit',
  updateUserFn: (data: Partial<UserProfile>) => Promise<void>
): Promise<boolean> => {
  try {
    // Create transaction record
    const transaction = createTransactionRecord(
      user.id,
      amount,
      'deposit',
      description
    );
    
    // Save transaction
    saveTransaction(transaction);
    
    // Update user's wallet balance
    await updateUserFn({
      walletBalance: user.walletBalance + amount
    });
    
    toast({
      title: "Deposit Successful",
      description: `$${amount} has been added to your wallet.`
    });
    
    return true;
  } catch (error) {
    console.error("Deposit failed:", error);
    toast({
      title: "Deposit Failed",
      description: "There was an error processing your deposit.",
      variant: "destructive"
    });
    return false;
  }
};

export const getUserTransactions = async (userId: string, limit: number = 10): Promise<Transaction[]> => {
  try {
    const transactionHistory = JSON.parse(localStorage.getItem('p2w_transactions') || '[]');
    const userTransactions = transactionHistory
      .filter((txn: Transaction) => txn.userId === userId)
      .map((txn: Transaction) => ({
        ...txn,
        timestamp: txn.timestamp || txn.date, // Ensure timestamp exists
        date: new Date(txn.date)
      }))
      .sort((a: Transaction, b: Transaction) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      )
      .slice(0, limit);
    
    return userTransactions;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
};
