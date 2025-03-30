
import { UserProfile } from '@/types/user';
import { TransactionType } from '@/types/wallet';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  description: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

export function recordTransaction(
  userId: string,
  amount: number,
  type: TransactionType,
  description: string,
  metadata?: Record<string, any>
): Transaction {
  const transaction: Transaction = {
    id: `tx_${Date.now()}`,
    userId,
    amount,
    type,
    description,
    timestamp: new Date().toISOString(),
    metadata,
  };
  
  return transaction;
}

export function spendFromWallet(
  user: UserProfile,
  amount: number,
  type: TransactionType,
  description: string,
  metadata?: Record<string, any>
): boolean {
  // Check if user has enough funds
  if (!user.walletBalance || user.walletBalance < amount) {
    return false;
  }
  
  // Record the transaction
  recordTransaction(user.id, amount, type, description, metadata);
  
  // In a real app, this would update the database
  return true;
}

export function addFunds(
  user: UserProfile,
  amount: number,
  paymentMethod: string
): { success: boolean; transactionId?: string } {
  // In a real app, this would process payment and update the database
  const transactionId = `deposit_${Date.now()}`;
  
  return {
    success: true,
    transactionId,
  };
}

export function getWalletBalance(userId: string): number {
  // In a real app, this would fetch the balance from the database
  return 100; // Mock balance
}

export function getTransactionHistory(userId: string): Transaction[] {
  // In a real app, this would fetch transactions from the database
  return []; // Empty mock history
}

export const wallet = {
  recordTransaction,
  spendFromWallet,
  addFunds,
  getWalletBalance,
  getTransactionHistory
};

export default wallet;
