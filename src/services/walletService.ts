
import { User } from "@/types/user";
import { SpendOptions, Transaction, TransactionType } from "@/types/wallet";
import { useToast } from "@/hooks/use-toast";

// Simulate getting a user's wallet balance
export const getUserWalletBalance = (userId: string): number => {
  // In a real app, this would fetch from an API
  return 1000; // Mock balance
};

// Process a spending transaction
export const spendFromWallet = async (
  user: User,
  amount: number,
  type: TransactionType,
  description: string,
  options?: SpendOptions
): Promise<boolean> => {
  if (!user) {
    console.error("Cannot spend: No user provided");
    return false;
  }

  if (amount <= 0) {
    console.error("Cannot spend: Amount must be greater than 0");
    return false;
  }

  // Check if user has enough balance (in a real app, this would be a server-side check)
  if (user.walletBalance < amount) {
    console.error("Cannot spend: Insufficient balance");
    return false;
  }

  try {
    // This would be an API call in a real application
    const transaction: Transaction = {
      id: `txn-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`,
      userId: user.id,
      amount,
      type,
      description,
      timestamp: new Date().toISOString(),
      status: "completed",
      targetUser: options?.targetUser,
      targetItem: options?.cosmetic || options?.feature
    };

    console.log("Transaction processed:", transaction);

    // In a real app, we would update the user's balance on the server
    // and then update the local state

    return true;
  } catch (error) {
    console.error("Error processing transaction:", error);
    return false;
  }
};

// Get a user's transaction history
export const getUserTransactionHistory = async (
  userId: string,
  type?: TransactionType,
  limit: number = 10
): Promise<Transaction[]> => {
  // This would be an API call in a real application
  // Return mock data for now
  const mockTransactions: Transaction[] = [
    {
      id: "txn-1",
      userId,
      amount: 25,
      type: "purchase",
      description: "Premium Profile Upgrade",
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      status: "completed"
    },
    {
      id: "txn-2",
      userId,
      amount: 5,
      type: "mockery",
      description: "Royal Mockery: Court Jester",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      status: "completed",
      targetUser: "user-123"
    },
    {
      id: "txn-3",
      userId,
      amount: 0.5,
      type: "mockery",
      description: "Royal Mockery: Tomatoes",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      status: "completed",
      targetUser: "user-456"
    },
    {
      id: "txn-4",
      userId,
      amount: 10,
      type: "deposit",
      description: "Wallet Top-up",
      timestamp: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      status: "completed"
    }
  ];

  // Filter by type if specified
  const filteredTransactions = type
    ? mockTransactions.filter(t => t.type === type)
    : mockTransactions;

  // Sort by timestamp (newest first) and limit
  return filteredTransactions
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, limit);
};

// Get transaction statistics
export const getTransactionStats = async (
  userId: string
): Promise<{
  totalSpent: number;
  totalDeposits: number;
  transactionCount: number;
  avgTransaction: number;
}> => {
  // This would be an API call in a real application
  return {
    totalSpent: 152.5,
    totalDeposits: 200,
    transactionCount: 12,
    avgTransaction: 12.7
  };
};

export default {
  getUserWalletBalance,
  spendFromWallet,
  getUserTransactionHistory,
  getTransactionStats
};
