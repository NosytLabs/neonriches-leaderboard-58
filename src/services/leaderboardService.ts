
import { LeaderboardEntry, LeaderboardFilters, RankChangeData, TeamStanding } from "@/types/leaderboard";
import { UserTeam } from "@/types/user";
import { OnChainLeaderboardEntry } from "@/types/solana";

// Get leaderboard entries with filters
export const getLeaderboardEntries = async (
  filters?: LeaderboardFilters
): Promise<LeaderboardEntry[]> => {
  // This would be an API call in a real application
  // Mock data for now
  const mockEntries: LeaderboardEntry[] = [
    {
      id: "user-1",
      username: "kingmidas",
      displayName: "Royal Patron",
      rank: 1,
      previousRank: 1,
      amountSpent: 25000,
      profileImage: "/images/avatars/user1.jpg",
      team: "red",
      joinedAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
      spendStreak: 12,
      tier: "whale"
    },
    {
      id: "user-2",
      username: "diamond_spender",
      displayName: "Diamond Spender",
      rank: 2,
      previousRank: 3,
      amountSpent: 15000,
      profileImage: "/images/avatars/user2.jpg",
      team: "blue",
      joinedAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString(),
      spendStreak: 8,
      tier: "whale"
    },
    {
      id: "user-3",
      username: "platinum_benefactor",
      displayName: "Platinum Benefactor",
      rank: 3,
      previousRank: 2,
      amountSpent: 12000,
      profileImage: "/images/avatars/user3.jpg",
      team: "green",
      joinedAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
      spendStreak: 4,
      tier: "whale"
    }
  ];

  // Apply filters if provided
  let filteredEntries = [...mockEntries];
  
  if (filters) {
    if (filters.team) {
      filteredEntries = filteredEntries.filter(entry => entry.team === filters.team);
    }
    
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredEntries = filteredEntries.filter(entry => 
        entry.username.toLowerCase().includes(searchLower) || 
        (entry.displayName && entry.displayName.toLowerCase().includes(searchLower))
      );
    }
    
    if (filters.limit && filters.limit > 0) {
      filteredEntries = filteredEntries.slice(0, filters.limit);
    }
  }
  
  return filteredEntries;
};

// Get team standings
export const getTeamStandings = async (): Promise<TeamStanding[]> => {
  // This would be an API call in a real application
  return [
    {
      team: "red",
      totalSpent: 45000,
      memberCount: 120,
      rank: 1,
      previousRank: 2
    },
    {
      team: "green",
      totalSpent: 38000,
      memberCount: 90,
      rank: 2,
      previousRank: 1
    },
    {
      team: "blue",
      totalSpent: 32000,
      memberCount: 105,
      rank: 3,
      previousRank: 3
    }
  ];
};

// Get rank changes
export const getRankChanges = async (): Promise<RankChangeData[]> => {
  // This would be an API call in a real application
  return [
    {
      userId: "user-5",
      username: "climber",
      previousRank: 10,
      currentRank: 5,
      rankChange: 5,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
    },
    {
      userId: "user-8",
      username: "falling_star",
      previousRank: 3,
      currentRank: 7,
      rankChange: -4,
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString()
    }
  ];
};

// Format date helper
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Get on-chain leaderboard
export const getOnChainLeaderboard = async (): Promise<OnChainLeaderboardEntry[]> => {
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
  getLeaderboardEntries,
  getTeamStandings,
  getRankChanges,
  formatDate,
  getOnChainLeaderboard
};
