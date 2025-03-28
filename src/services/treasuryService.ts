
import { DbLeaderboardEntry, LeaderboardEntry } from '@/types/transactions';
import { OnChainLeaderboardEntry } from '@/types/solana';
import { formatDate } from '@/utils/solanaUtils';

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
