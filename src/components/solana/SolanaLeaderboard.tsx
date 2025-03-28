// Import the necessary dependencies
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getOnChainLeaderboard } from '@/services/solanaService';
import { OnChainLeaderboardEntry, LeaderboardEntry } from '@/types/solana';

const SolanaLeaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Adapter function to convert OnChainLeaderboardEntry to LeaderboardEntry
  const adaptOnChainToLeaderboardEntry = (entries: OnChainLeaderboardEntry[]) => {
    return entries.map(entry => ({
      userId: entry.userId || entry.address,
      username: entry.username,
      publicKey: entry.publicKey,
      amountSpent: entry.spentAmount || entry.amountSpent || 0,
      totalDeposited: entry.totalDeposited || 0,
      rank: entry.rank,
      joinDate: entry.timestamp
    }));
  };

  useEffect(() => {
    const fetchAndSetLeaderboard = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const entries = await getOnChainLeaderboard();
        setLeaderboardData(adaptOnChainToLeaderboardEntry(entries));
      } catch (error: any) {
        console.error("Error fetching leaderboard:", error);
        setError(error.message || "Failed to fetch leaderboard data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndSetLeaderboard();
  }, []);

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Solana On-Chain Leaderboard</CardTitle>
        <CardDescription>
          Real-time leaderboard data from the Solana blockchain.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && <p>Loading leaderboard data...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!isLoading && !error && leaderboardData.length === 0 && (
          <p>No leaderboard data available.</p>
        )}
        {!isLoading && !error && leaderboardData.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/20">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Username
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Amount Spent
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Join Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {leaderboardData.map((entry) => (
                  <tr key={entry.userId}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {entry.rank}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {entry.username}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {entry.amountSpent}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {entry.joinDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SolanaLeaderboard;
