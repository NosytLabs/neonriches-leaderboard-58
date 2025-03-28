
import { UserProfile } from '@/contexts/AuthContext';

type SpendingCategory = 'upgrade' | 'cosmetic' | 'wish' | 'poke' | 'boost' | 'event';

interface SpendingMetadata {
  itemId?: string;
  category?: string;
  targetUser?: string;
  // Add any additional metadata needed
  [key: string]: any;
}

// Track spending history
export interface SpendingRecord {
  id: string;
  amount: number;
  timestamp: Date;
  category: SpendingCategory;
  description: string;
  metadata?: SpendingMetadata;
}

// Function to spend from wallet and update user stats
export const spendFromWallet = async (
  user: UserProfile,
  amount: number,
  category: SpendingCategory,
  description: string,
  metadata?: SpendingMetadata
): Promise<boolean> => {
  // Check if user has enough funds
  if (user.walletBalance < amount) {
    console.error('Insufficient funds');
    return false;
  }
  
  try {
    // Generate a unique ID for the transaction
    const transactionId = `tx_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    
    // Create spending record
    const spendingRecord: SpendingRecord = {
      id: transactionId,
      amount,
      timestamp: new Date(),
      category,
      description,
      metadata
    };
    
    // Call API to record spending (mocked for demo)
    console.log('Recording spending:', spendingRecord);
    
    // For demo purposes, we'll just return true to indicate success
    // In a real app, you would make an API call and wait for the response
    
    return true;
  } catch (error) {
    console.error('Error recording spending:', error);
    return false;
  }
};

// Function to add funds to wallet
export const addFundsToWallet = async (
  user: UserProfile,
  amount: number
): Promise<boolean> => {
  try {
    // Call API to add funds (mocked for demo)
    console.log('Adding funds:', amount);
    
    // For demo purposes, we'll just return true to indicate success
    return true;
  } catch (error) {
    console.error('Error adding funds:', error);
    return false;
  }
};

// Calculate spending tier based on amount spent
export const getSpendingTier = (amountSpent: number): string => {
  if (amountSpent >= 25000) return 'whale';
  if (amountSpent >= 10000) return 'shark';
  if (amountSpent >= 5000) return 'dolphin';
  if (amountSpent >= 1000) return 'fish';
  if (amountSpent >= 250) return 'octopus';
  return 'crab';
};

// Function to get satirical spending title
export const getSpendingTitle = (amountSpent: number): string => {
  if (amountSpent >= 25000) return "Supreme Digital Monarch";
  if (amountSpent >= 10000) return "Digital Oligarch";
  if (amountSpent >= 5000) return "Prestigious Patron";
  if (amountSpent >= 1000) return "Valued Contributor";
  if (amountSpent >= 250) return "Aspiring Noble";
  if (amountSpent >= 50) return "Recognized Member";
  return "Digital Commoner";
};

// Satirical message based on spending amount
export const getSpendingMessage = (amount: number): string => {
  if (amount >= 1000) {
    return "Congratulations! You've just purchased significant digital social status. Your wealth display has been noted by the algorithm.";
  } else if (amount >= 500) {
    return "A commendable contribution to your digital prestige. The higher-ups are beginning to notice you.";
  } else if (amount >= 100) {
    return "Your wallet has spoken, and our system is listening. Keep spending to rise further.";
  } else if (amount >= 50) {
    return "A modest investment in your digital social climbing. Every dollar counts on the path to prominence.";
  } else {
    return "Thank you for your contribution. Remember, in this world, your rank is directly proportional to your spending.";
  }
};
