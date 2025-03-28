
import { UserProfile } from '@/types/user';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: 'deposit' | 'spend';
  category: SpendingCategory;
  description: string;
  metadata: Record<string, any>;
  timestamp: Date;
}

export type SpendingCategory = 'cosmetic' | 'boost' | 'founder' | 'other' | 'wish' | 'advertisement' | 'spend';

/**
 * Updates a user's wallet balance by spending money
 */
export const spendFromWallet = async (
  user: UserProfile,
  amount: number,
  category: SpendingCategory,
  description: string,
  metadata: Record<string, any> = {}
): Promise<boolean> => {
  // Check if user has enough balance
  if (user.walletBalance < amount) {
    console.error('Not enough balance to spend', { user, amount });
    return false;
  }
  
  try {
    // In a real app, this would be an API call
    console.log('Spending from wallet', { user, amount, category, description, metadata });
    
    // For this mock implementation, we'll just return true
    return true;
  } catch (error) {
    console.error('Error spending from wallet', error);
    return false;
  }
};

/**
 * Tracks a profile interaction for analytics
 */
export const trackProfileInteraction = async (
  profileId: string,
  interactionType: 'view' | 'click' | 'follow' | 'share',
  source: string
): Promise<boolean> => {
  try {
    // In a real app, this would be an API call
    console.log('Tracking profile interaction', { profileId, interactionType, source });
    
    // For this mock implementation, we'll just return true
    return true;
  } catch (error) {
    console.error('Error tracking profile interaction', error);
    return false;
  }
};

/**
 * Deposits amount to user's wallet
 */
export const depositToWallet = async (
  user: UserProfile,
  amount: number,
  source: string,
  metadata: Record<string, any> = {}
): Promise<boolean> => {
  try {
    // In a real app, this would be an API call
    console.log('Depositing to wallet', { user, amount, source, metadata });
    
    // For this mock implementation, we'll just return true
    return true;
  } catch (error) {
    console.error('Error depositing to wallet', error);
    return false;
  }
};

/**
 * Gets user transactions history
 */
export const getUserTransactions = async (userId: string): Promise<Transaction[]> => {
  // Mock implementation
  return [
    {
      id: '1',
      userId,
      amount: 100,
      type: 'deposit',
      category: 'other',
      description: 'Initial deposit',
      metadata: {},
      timestamp: new Date(Date.now() - 86400000 * 7) // 7 days ago
    },
    {
      id: '2',
      userId,
      amount: 25,
      type: 'spend',
      category: 'cosmetic',
      description: 'Purchased Royal Border',
      metadata: { itemId: 'border-royal' },
      timestamp: new Date(Date.now() - 86400000 * 5) // 5 days ago
    },
    {
      id: '3',
      userId,
      amount: 10,
      type: 'spend',
      category: 'boost',
      description: 'Profile Boost - 7 days',
      metadata: { boostId: 'profile-highlight' },
      timestamp: new Date(Date.now() - 86400000 * 3) // 3 days ago
    },
    {
      id: '4',
      userId,
      amount: 5,
      type: 'spend',
      category: 'wish',
      description: 'Wishing Well',
      metadata: { result: 'Epic Border' },
      timestamp: new Date(Date.now() - 86400000 * 1) // 1 day ago
    }
  ];
};

/**
 * Gets profile analytics data
 */
export const getProfileAnalytics = async (profileId: string): Promise<{
  views: number;
  clicks: number;
  follows: number;
  shareCount: number;
  viewsOverTime: { date: string; count: number }[];
}> => {
  // Mock implementation
  return {
    views: 1243,
    clicks: 342,
    follows: 78,
    shareCount: 25,
    viewsOverTime: [
      { date: '2023-01-01', count: 45 },
      { date: '2023-01-02', count: 65 },
      { date: '2023-01-03', count: 85 },
      { date: '2023-01-04', count: 105 },
      { date: '2023-01-05', count: 125 },
      { date: '2023-01-06', count: 105 },
      { date: '2023-01-07', count: 85 }
    ]
  };
};
