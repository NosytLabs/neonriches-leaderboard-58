
import { User } from '@/types';

export const spendFromWallet = async (
  user: User,
  amount: number,
  type: 'spend' | 'transfer' | 'withdrawal',
  title: string,
  metadata?: Record<string, any>
): Promise<boolean> => {
  try {
    // Check if user has enough balance
    if (!user.walletBalance || user.walletBalance < amount) {
      throw new Error("Insufficient funds in wallet");
    }
    
    // In a real app, this would make an API call to process the transaction
    console.log('Processing wallet transaction', {
      userId: user.id,
      amount,
      type,
      title,
      metadata
    });
    
    // Mock successful transaction
    // In a real app, the user object would be updated by an API response
    user.walletBalance -= amount;
    
    return true;
  } catch (error) {
    console.error('Wallet transaction failed', error);
    return false;
  }
};

export const addToWallet = async (
  user: User,
  amount: number,
  source: 'deposit' | 'refund' | 'prize',
  title: string
): Promise<boolean> => {
  try {
    // In a real app, this would make an API call to process the transaction
    console.log('Processing wallet deposit', {
      userId: user.id,
      amount,
      source,
      title
    });
    
    // Mock successful transaction
    // In a real app, the user object would be updated by an API response
    if (user.walletBalance) {
      user.walletBalance += amount;
    } else {
      user.walletBalance = amount;
    }
    
    return true;
  } catch (error) {
    console.error('Wallet deposit failed', error);
    return false;
  }
};
