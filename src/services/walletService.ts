
import { UserProfile } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

export type TransactionType = 'shame' | 'deposit' | 'spend' | 'advertisement' | 'subscription' | 'cosmetic' | 'wish';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  date: Date;
  description: string;
  metadata?: any;
}

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
    // In a real app, this would be an API call
    // For this demo, we'll simulate a successful transaction
    
    // Create transaction record
    const transaction: Transaction = {
      id: `txn_${Math.random().toString(36).substring(2, 9)}`,
      userId: user.id,
      amount,
      type,
      date: new Date(),
      description,
      metadata
    };
    
    // Store transaction history
    const transactionHistory = JSON.parse(localStorage.getItem('p2w_transactions') || '[]');
    transactionHistory.push(transaction);
    localStorage.setItem('p2w_transactions', JSON.stringify(transactionHistory));
    
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
    // In a real app, this would be an API call
    
    // Create transaction record
    const transaction: Transaction = {
      id: `txn_${Math.random().toString(36).substring(2, 9)}`,
      userId: user.id,
      amount,
      type: 'deposit',
      date: new Date(),
      description
    };
    
    // Store transaction history
    const transactionHistory = JSON.parse(localStorage.getItem('p2w_transactions') || '[]');
    transactionHistory.push(transaction);
    localStorage.setItem('p2w_transactions', JSON.stringify(transactionHistory));
    
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
