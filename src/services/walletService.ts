
import { User } from '@/types/user';

interface TransactionOptions {
  wishAmount?: number;
  preferredCategory?: string;
  mockeryAction?: string;
  targetUserId?: string;
  itemId?: string;
  itemPrice?: number;
  [key: string]: any;
}

/**
 * Spend money from a user's wallet
 * @param user The user who is spending
 * @param amount The amount to spend
 * @param type The type of transaction
 * @param description A description of the transaction
 * @param options Additional options for the transaction
 * @returns A promise that resolves to a boolean indicating success or failure
 */
export const spendFromWallet = async (
  user: User,
  amount: number,
  type: 'wish' | 'mockery' | 'purchase' | 'team' | 'donation',
  description: string,
  options: TransactionOptions = {}
): Promise<boolean> => {
  // Validate user has enough balance
  if (user.walletBalance < amount) {
    console.error(`Insufficient funds: ${user.walletBalance} < ${amount}`);
    return false;
  }

  // In a real application, we would make an API call to process the transaction
  // For now, we'll just simulate a successful transaction
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Log the transaction for debugging
    console.log('Transaction:', {
      userId: user.id,
      amount,
      type,
      description,
      options,
      timestamp: new Date().toISOString()
    });

    return true;
  } catch (error) {
    console.error('Transaction failed:', error);
    return false;
  }
};

/**
 * Add money to a user's wallet
 * @param user The user who is adding money
 * @param amount The amount to add
 * @param source The source of the funds
 * @returns A promise that resolves to a boolean indicating success or failure
 */
export const addToWallet = async (
  user: User,
  amount: number,
  source: 'credit_card' | 'crypto' | 'gift' | 'refund'
): Promise<boolean> => {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Log the transaction for debugging
    console.log('Add funds:', {
      userId: user.id,
      amount,
      source,
      timestamp: new Date().toISOString()
    });

    return true;
  } catch (error) {
    console.error('Add funds failed:', error);
    return false;
  }
};

/**
 * Get a user's transaction history
 * @param userId The user ID
 * @param limit The maximum number of transactions to return
 * @param offset The offset for pagination
 * @returns A promise that resolves to an array of transactions
 */
export const getTransactionHistory = async (
  userId: string,
  limit: number = 10,
  offset: number = 0
): Promise<any[]> => {
  // In a real app, this would fetch from an API
  // For now, return mock data
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Generate mock transactions
  const mockTransactions = Array.from({ length: limit }).map((_, i) => {
    const types = ['wish', 'mockery', 'purchase', 'team', 'donation', 'refund'];
    const type = types[Math.floor(Math.random() * types.length)];
    const amount = Math.round(Math.random() * 500) / 100 * (type === 'refund' ? -1 : 1);
    
    let description = '';
    switch (type) {
      case 'wish':
        description = 'Made a wish at the Royal Wishing Well';
        break;
      case 'mockery':
        description = 'Applied a mockery effect to another user';
        break;
      case 'purchase':
        description = 'Purchased a cosmetic item';
        break;
      case 'team':
        description = 'Contributed to team ranking';
        break;
      case 'donation':
        description = 'Donated to the royal treasury';
        break;
      case 'refund':
        description = 'Refund for cancelled purchase';
        break;
    }
    
    return {
      id: `txn-${offset + i}`,
      userId,
      type,
      amount,
      description,
      timestamp: new Date(Date.now() - (i * 24 * 60 * 60 * 1000)).toISOString(),
      status: 'completed'
    };
  });
  
  return mockTransactions;
};
