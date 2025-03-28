
import { SolanaTreasuryInfo, SolanaTransaction, OnChainLeaderboardEntry } from "@/types/solana";

// Fetch treasury info
export const fetchTreasuryInfo = async (): Promise<SolanaTreasuryInfo> => {
  // This would be an API call in a real application
  return {
    address: "7DH8Fi52tFMNQNVGDsYrVXzpQvD4XmMhPP3eGwJwUaJb",
    balance: 1250.75,
    totalDeposits: 3500.0,
    totalWithdrawals: 2249.25,
    lastUpdated: new Date().toISOString(),
    usdValue: 125075.0
  };
};

// Fetch recent treasury transactions
export const fetchTreasuryTransactions = async (limit = 10): Promise<SolanaTransaction[]> => {
  // This would be an API call in a real application
  const mockTransactions: SolanaTransaction[] = [
    {
      id: "solana-tx-1",
      signature: "5v54qzqHBQrA5dn1KFRwCKioVuGm7QD6UahLHFXvnTmrXm8fJK5rSaVqA7J8ZYnZMkP92UkDwPXJ9zKpWvQYpkMn",
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
      type: "deposit",
      amount: 25.5,
      sender: "8xg7D4ESuJLRJQvnJPw9Mqq9YBJBBe9c8Xu7Lm68cRJ7",
      recipient: "7DH8Fi52tFMNQNVGDsYrVXzpQvD4XmMhPP3eGwJwUaJb",
      status: "confirmed"
    },
    {
      id: "solana-tx-2",
      signature: "2vhFDtAfMN2A9MGHUFFAZXMZUWi9pLqY7UwDDz5ZhzUE97xYjgJZSS3QBYu1bwcgVLJb5KKd3pPivMC1jGHqAptP",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      type: "withdrawal",
      amount: 10.0,
      sender: "7DH8Fi52tFMNQNVGDsYrVXzpQvD4XmMhPP3eGwJwUaJb",
      recipient: "BQj1qLExCzeEMtZ9a6YEQWhrQfG7BrAsfHG1kPuCNCsC",
      status: "confirmed"
    }
  ];
  
  return mockTransactions.slice(0, limit);
};

// Get on-chain leaderboard
export const fetchOnChainLeaderboard = async (): Promise<OnChainLeaderboardEntry[]> => {
  // This would be an API call in a real application
  return [
    {
      id: "chain-1",
      publicKey: "8xg7D4ESuJLRJQvnJPw9Mqq9YBJBBe9c8Xu7Lm68cRJ7",
      username: "whale_on_chain",
      rank: 1,
      previousRank: 1,
      amountSpent: 500,
      totalSpent: 2500,
      lastTransaction: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      isVerified: true,
      signature: "5v54qzqHBQrA5dn1KFRwCKioVuGm7QD6UahLHFXvnTmrXm8fJK5rSaVqA7J8ZYnZMkP92UkDwPXJ9zKpWvQYpkMn"
    },
    {
      id: "chain-2",
      publicKey: "BQj1qLExCzeEMtZ9a6YEQWhrQfG7BrAsfHG1kPuCNCsC",
      username: "crypto_royalty",
      rank: 2,
      previousRank: 3,
      amountSpent: 300,
      totalSpent: 1800,
      lastTransaction: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      isVerified: true,
      signature: "2vhFDtAfMN2A9MGHUFFAZXMZUWi9pLqY7UwDDz5ZhzUE97xYjgJZSS3QBYu1bwcgVLJb5KKd3pPivMC1jGHqAptP"
    }
  ];
};

export default {
  fetchTreasuryInfo,
  fetchTreasuryTransactions,
  fetchOnChainLeaderboard
};
