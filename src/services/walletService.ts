
import { User } from '@/types/index';

// Define transaction types
export type TransactionType = 'spend' | 'withdrawal' | 'transfer' | 'cosmetic' | 'founder' | 'wish' | 'advertisement';

interface TransactionMeta {
  [key: string]: any;
}

/**
 * Spend funds from the user's wallet
 * @param user - The user spending funds
 * @param amount - Amount to spend
 * @param type - Type of transaction
 * @param description - Description of the transaction
 * @param meta - Additional metadata for the transaction
 * @returns Promise<boolean> - Whether the transaction was successful
 */
export const spendFromWallet = async (
  user: User,
  amount: number,
  type: TransactionType,
  description: string,
  meta: TransactionMeta = {}
): Promise<boolean> => {
  // Check if user has sufficient funds
  if (!user.walletBalance || user.walletBalance < amount) {
    console.error('Insufficient funds to complete this transaction');
    return false;
  }

  try {
    // Mock API call to spend wallet funds
    console.log(`Spending ${amount} from wallet for: ${description}`);
    
    // In a real implementation, we would call an API to update the wallet balance
    // For now, just simulate the transaction
    const updatedBalance = (user.walletBalance || 0) - amount;
    
    // Record the transaction
    const transaction = {
      id: `tx-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      userId: user.id,
      type,
      amount,
      description,
      timestamp: new Date().toISOString(),
      balance: updatedBalance,
      meta
    };
    
    console.log('Transaction completed:', transaction);
    
    // In a real implementation, we would update the user's wallet balance in the database
    // For now, just update the user object directly
    user.walletBalance = updatedBalance;
    
    // Increment the amount spent if this is a spend transaction
    if (type === 'spend' || type === 'cosmetic' || type === 'founder' || type === 'wish' || type === 'advertisement') {
      user.amountSpent = (user.amountSpent || 0) + amount;
      user.spentAmount = (user.spentAmount || 0) + amount;
      
      // Update the spend streak
      user.spendStreak = (user.spendStreak || 0) + 1;
    }
    
    return true;
  } catch (error) {
    console.error('Error spending from wallet:', error);
    return false;
  }
};

/**
 * Transfer funds from one user to another
 * @param fromUser - User sending funds
 * @param toUser - User receiving funds
 * @param amount - Amount to transfer
 * @param description - Description of the transfer
 * @returns Promise<boolean> - Whether the transfer was successful
 */
export const transferFunds = async (
  fromUser: User,
  toUser: User,
  amount: number,
  description: string
): Promise<boolean> => {
  // Spend from sender's wallet
  const spendSuccess = await spendFromWallet(
    fromUser, 
    amount, 
    'transfer',
    `Transfer to ${toUser.username}: ${description}`,
    { toUserId: toUser.id }
  );
  
  if (!spendSuccess) {
    return false;
  }
  
  try {
    // Mock API call to add funds to recipient's wallet
    console.log(`Adding ${amount} to ${toUser.username}'s wallet`);
    
    // In a real implementation, we would call an API to update the wallet balance
    // For now, just simulate the transaction
    toUser.walletBalance = (toUser.walletBalance || 0) + amount;
    
    // Record the transaction
    const transaction = {
      id: `tx-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      userId: toUser.id,
      type: 'transfer',
      amount,
      description: `Received from ${fromUser.username}: ${description}`,
      timestamp: new Date().toISOString(),
      balance: toUser.walletBalance,
      meta: { fromUserId: fromUser.id }
    };
    
    console.log('Transfer completed:', transaction);
    
    return true;
  } catch (error) {
    console.error('Error transferring funds:', error);
    // In case of error, refund the sender
    fromUser.walletBalance = (fromUser.walletBalance || 0) + amount;
    return false;
  }
};

/**
 * Get transaction history for a user
 * @param userId - ID of the user
 * @param limit - Maximum number of transactions to return
 * @returns Promise<Transaction[]> - List of transactions
 */
export const getTransactionHistory = async (userId: string, limit = 10) => {
  try {
    // Mock API call to get transaction history
    console.log(`Getting transaction history for user ${userId}, limit ${limit}`);
    
    // In a real implementation, we would call an API to get the transaction history
    // For now, just return some mock data
    return [
      {
        id: 'tx-1',
        userId,
        type: 'spend' as TransactionType,
        amount: 25,
        description: 'Purchase: Royal Title',
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        balance: 175,
        meta: { itemId: 'title-1' }
      },
      {
        id: 'tx-2',
        userId,
        type: 'spend' as TransactionType,
        amount: 50,
        description: 'Purchase: Profile Border',
        timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
        balance: 200,
        meta: { itemId: 'border-1' }
      },
      {
        id: 'tx-3',
        userId,
        type: 'transfer' as TransactionType,
        amount: 20,
        description: 'Transfer to RoyalUser: Gift',
        timestamp: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
        balance: 250,
        meta: { toUserId: 'user-2' }
      },
      {
        id: 'tx-4',
        userId,
        type: 'withdrawal' as TransactionType,
        amount: 30,
        description: 'Withdrawal to Solana Wallet',
        timestamp: new Date(Date.now() - 96 * 60 * 60 * 1000).toISOString(),
        balance: 270,
        meta: { walletAddress: 'sol-wallet-1' }
      }
    ];
  } catch (error) {
    console.error('Error getting transaction history:', error);
    return [];
  }
};

/**
 * Track profile interaction for analytics
 * @param profile - The user profile being viewed
 * @param interaction - Type of interaction (view, click)
 */
export const trackProfileInteraction = (
  profile: User,
  interaction: 'view' | 'click'
): void => {
  try {
    // In a real implementation, we would call an API to track the interaction
    console.log(`Tracking profile ${interaction} for user ${profile.id}`);
    
    // Update the profile's stats
    if (interaction === 'view') {
      profile.profileViews = (profile.profileViews || 0) + 1;
    } else if (interaction === 'click') {
      profile.profileClicks = (profile.profileClicks || 0) + 1;
    }
  } catch (error) {
    console.error(`Error tracking profile ${interaction}:`, error);
  }
};

/**
 * Deposit funds to a user's wallet (for demo/test purposes)
 * @param user - User to deposit funds to
 * @param amount - Amount to deposit
 */
export const depositToWallet = (user: User, amount: number): void => {
  try {
    // Mock function to add funds to a wallet for testing
    console.log(`Depositing ${amount} to wallet`);
    
    // Update the user's wallet balance
    user.walletBalance = (user.walletBalance || 0) + amount;
    
    console.log(`New balance: ${user.walletBalance}`);
  } catch (error) {
    console.error('Error depositing to wallet:', error);
  }
};
