import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { OnChainLeaderboardEntry } from '@/types/solana';
import { fetchOnChainLeaderboard } from '@/services/treasuryService';
import { formatDate } from '@/utils/dateUtils';
import { formatAddress } from '@/utils/solanaUtils';
import { ExternalLink } from 'lucide-react';

const RealTimeLeaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<OnChainLeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLeaderboard = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchOnChainLeaderboard();
        setLeaderboard(data);
      } catch (err) {
        setError('Failed to load leaderboard data.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadLeaderboard();
  }, []);

  if (isLoading) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle>On-Chain Leaderboard</CardTitle>
          <CardDescription>Top Solana contributors in real-time</CardDescription>
        </CardHeader>
        <CardContent>
          Loading leaderboard data...
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle>On-Chain Leaderboard</CardTitle>
          <CardDescription>Top Solana contributors in real-time</CardDescription>
        </CardHeader>
        <CardContent>
          Error: {error}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>On-Chain Leaderboard</CardTitle>
        <CardDescription>Top Solana contributors in real-time</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {leaderboard.map((entry) => (
            <div key={entry.id} className="glass-morphism-subtle rounded-lg p-3 flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal-purple to-royal-gold"></div>
              
              <div className="flex items-center">
                <div className="text-sm font-semibold">{entry.username}</div>
                <div className="text-xs text-white/60 ml-2">
                  {formatAddress(entry.publicKey)}
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm font-bold">${entry.totalSpent.toLocaleString()}</div>
                <div className="text-xs text-white/60">
                  Last transaction: {formatDate(entry.lastTransaction)}
                </div>
              </div>
              
              <a 
                href={`https://explorer.solana.com/address/${entry.publicKey}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-1 right-1 text-white/40 hover:text-white/70"
              >
                <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RealTimeLeaderboard;
