
import { User } from '@/types/user';
import { TransactionType, SpendOptions } from '@/types/transaction';
import { recordTransaction } from './paymentService';

// Spend money from user's wallet with interactive feedback
export const spendFromWallet = (
  user: User,
  amount: number,
  type: TransactionType,
  description: string,
  metadata?: SpendOptions
): boolean => {
  if (!user || amount <= 0) return false;
  
  // Check if user has enough balance
  if ((user.walletBalance || 0) < amount) return false;
  
  // Update wallet balance
  user.walletBalance = (user.walletBalance || 0) - amount;
  
  // Update total spent
  user.amountSpent = (user.amountSpent || 0) + amount;
  
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
  
  // Trigger spending effect if possible (client-side only)
  if (typeof window !== 'undefined') {
    // Dispatch custom event that can be listened to for effects
    const spendEvent = new CustomEvent('user:spend', { 
      detail: { 
        userId: user.id,
        amount,
        type,
        description 
      }
    });
    window.dispatchEvent(spendEvent);
  }
  
  return true;
};

// Add funds to wallet with interactive feedback
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
  
  // Trigger deposit effect if possible (client-side only)
  if (typeof window !== 'undefined') {
    // Dispatch custom event that can be listened to for effects
    const depositEvent = new CustomEvent('user:deposit', { 
      detail: { 
        userId: user.id,
        amount,
        description 
      }
    });
    window.dispatchEvent(depositEvent);
  }
  
  return true;
};

// Check if a user can afford something
export const canUserAfford = (
  user: User,
  amount: number
): boolean => {
  if (!user) return false;
  return (user.walletBalance || 0) >= amount;
};

// Calculate new rank after a hypothetical spend
export const calculateNewRank = (
  user: User,
  amount: number,
  leaderboard: { rank: number; amountSpent: number }[] = []
): number => {
  if (!user) return 0;
  
  const newTotalSpent = (user.amountSpent || 0) + amount;
  
  // If we have leaderboard data, do a more accurate calculation
  if (leaderboard.length > 0) {
    // Count how many people would be surpassed
    let surpassedCount = 0;
    leaderboard.forEach(entry => {
      if (entry.amountSpent < newTotalSpent && entry.rank < (user.rank || 0)) {
        surpassedCount++;
      }
    });
    return Math.max(1, (user.rank || 0) - surpassedCount);
  }
  
  // Simple approximation if we don't have leaderboard data
  // Estimate that every $100 gains 1 rank
  const rankGain = Math.floor(amount / 100);
  return Math.max(1, (user.rank || 0) - rankGain);
};
