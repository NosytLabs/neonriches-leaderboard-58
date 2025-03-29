
import { User } from '@/types/user';
import { TransactionType } from '@/types/transaction';
import { recordTransaction } from './paymentService';

// Spend money from user's wallet
export const spendFromWallet = (
  user: User,
  amount: number,
  type: TransactionType,
  description: string,
  metadata?: Record<string, any>
): boolean => {
  if (!user || amount <= 0) return false;
  
  // Check if user has enough balance
  if ((user.walletBalance || 0) < amount) return false;
  
  // Update wallet balance
  user.walletBalance = (user.walletBalance || 0) - amount;
  
  // Update total spent
  user.amountSpent = (user.amountSpent || 0) + amount;
  
  // Update rank (in a real app this would be done server-side)
  // For now, we'll simulate it locally
  
  // Record transaction
  recordTransaction(
    user.id,
    amount,
    type,
    description,
    metadata
  );
  
  // In a real app, this would update the user in the database
  // For demo, update in localStorage
  const userJson = JSON.stringify(user);
  localStorage.setItem('currentUser', userJson);
  
  return true;
};

// Add funds to wallet
export const addToWallet = (
  user: User,
  amount: number,
  description: string
): boolean => {
  if (!user || amount <= 0) return false;
  
  // Update wallet balance
  user.walletBalance = (user.walletBalance || 0) + amount;
  
  // Record transaction
  recordTransaction(
    user.id,
    amount,
    'deposit',
    description
  );
  
  // In a real app, this would update the user in the database
  // For demo, update in localStorage
  const userJson = JSON.stringify(user);
  localStorage.setItem('currentUser', userJson);
  
  return true;
};
