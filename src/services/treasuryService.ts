import { OnChainLeaderboardEntry } from '@/types/solana';

// Add function to fetch on-chain leaderboard data
export const fetchOnChainLeaderboard = async (): Promise<OnChainLeaderboardEntry[]> => {
  // This would normally call an API endpoint that queries blockchain data
  // For now, return mock data
  const mockData: OnChainLeaderboardEntry[] = [
    {
      id: "1",
      publicKey: "8YLKoCu5knFvCTSdSXe3xVQxA8xndGpAbqNWCtK9XkS9",
      username: "RoyalWhale",
      rank: 1,
      previousRank: 1,
      totalSpent: 5000,
      signature: "5xh7KFnGDnE1WxvunRwmsbKNdVw91WFLjT9S23tbzm5x5V8bK3dEzZvJdV2YyjgeUv2YdzeiB6UU4pwxbX59pqg5",
      lastTransaction: new Date().toISOString(),
      isVerified: true
    },
    {
      id: "2",
      publicKey: "5yKLcpRxZU2S7uLkHRFNQZnSoNMm9ZUHsyVaaDXJHnEW",
      username: "CrownCollector",
      rank: 2,
      previousRank: 3,
      totalSpent: 3750,
      signature: "3gvCLqRvwx9DZVNvKWMvdvKSZYUz9mxUUBzMD7AMLNFFuqGBVyZoY4zNLBo5fzPp1XqVzFjHe9QwgcpTJhUwNjZ5",
      lastTransaction: new Date().toISOString(),
      isVerified: true
    },
    {
      id: "3",
      publicKey: "GWz7VWVK6xLwhKnrP5oBgwcVHvNqUGvJ8Yo2RQg1Y8cV",
      username: "NobleSpender",
      rank: 3,
      previousRank: 2,
      totalSpent: 2500,
      signature: "4iFCTxRYxE82JyVKHQDzFXmQKsUUh5c7SZXiRtQDBJMsJchUzvYQ3yCcUWF8AG5APPCoYfdGQZ2oxFxU3mL8HGEA",
      lastTransaction: new Date().toISOString(),
      isVerified: false
    }
  ];
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return mockData;
};

// Mock function to get leaderboard data
export const getLeaderboard = async (limit = 10): Promise<LeaderboardEntry[]> => {
  // This would fetch data from an API in a real implementation
  
  // Simulate API response
  const leaderboardData = [
    // Mock data here
  ];
  
  // Transform data
  return leaderboardData.map((entry: any) => ({
    id: entry.id,
    username: entry.username,
    rank: entry.rank,
    totalDeposited: entry.total_deposited,
    currentBalance: entry.current_balance,
    team: entry.team,
    profileImage: entry.profile_image,
    lastDepositDate: formatDate(entry.last_deposit_date || new Date()),
    joinDate: entry.joined_at,
    tier: entry.tier
  }));
};

// Mock function to get on-chain leaderboard data
export const getOnChainLeaderboard = async (): Promise<OnChainLeaderboardEntry[]> => {
  // This would fetch data from Solana in a real implementation
  
  // Simulate blockchain data
  return [
    {
      id: "1",
      publicKey: "8YLKoCu5knFvCTSdSXe3xVQxA8xndGpAbqNWCtK9XkS9",
      username: "RoyalWhale",
      rank: 1,
      previousRank: 1,
      amountSpent: 5000,
      lastTransaction: new Date().toISOString(),
      isVerified: true,
      signature: "3Hw5GbNmY6y1rvbT9y9U2KzaQRC1x9WxrgsvLpJZhTeLkbzpWZhUW9M4dNSY6ciFJpS3Nn"
    },
    {
      id: "2",
      publicKey: "5yKLcpRxZU2S7uLkHRFNQZnSoNMm9ZUHsyVaaDXJHnEW",
      username: "CrownCollector",
      rank: 2,
      previousRank: 2,
      amountSpent: 3750,
      lastTransaction: new Date().toISOString(),
      isVerified: true,
      signature: "4yKLcpRxZU2S7uLkHRFNQZnSoNMm9ZUHsyVaaDXJHnEX"
    }
  ];
};

// Get user rank from transaction history
export const getUserRankFromTransactions = async (userId: string): Promise<number> => {
  // This would calculate based on transaction data in a real implementation
  return Math.floor(Math.random() * 100) + 1;
};

// Get user transaction history
export const getUserTransactions = async (userId: string, limit = 10): Promise<any[]> => {
  // This would fetch transaction data in a real implementation
  return [];
};

// Convert team string to enum
export const getTeamFromString = (team: string): "red" | "green" | "blue" | null => {
  if (team === "red" || team === "green" || team === "blue") {
    return team;
  }
  return null;
};
