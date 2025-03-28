import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getOnChainLeaderboard } from '@/services/leaderboardService';
import { LeaderboardEntry } from '@/types/leaderboard';
import { formatDate } from '@/utils/dateUtils';
import { formatAddress } from '@/utils/solanaUtils';
import { ArrowDown, ArrowUp, ExternalLink } from 'lucide-react';

const SolanaLeaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setIsLoading(true);
      try {
        const entries = await getOnChainLeaderboard();
        setLeaderboard(entries);
      } catch (error) {
        console.error("Error fetching on-chain leaderboard:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const getRankChangeIcon = (rankChange: number) => {
    if (rankChange > 0) {
      return <ArrowUp className="text-green-500 w-4 h-4" />;
    } else if (rankChange < 0) {
      return <ArrowDown className="text-red-500 w-4 h-4" />;
    } else {
      return null;
    }
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Solana On-Chain Leaderboard</CardTitle>
        <CardDescription>See who's leading the kingdom on the blockchain</CardDescription>
      </CardHeader>
      
      <CardContent>
        <ScrollArea className="h-[350px] pr-4">
          <div className="space-y-3">
            {leaderboard.map((entry) => (
              <div key={entry.id} className="glass-morphism-subtle rounded-lg p-3 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="font-mono text-sm mr-4">#{entry.rank}</span>
                    <div className="flex items-center">
                      {getRankChangeIcon((entry.previousRank || entry.rank) - entry.rank)}
                      <span className="ml-1">{entry.username}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-white/60">${entry.totalDeposited?.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center mt-2 text-xs text-white/60">
                  <span className="mr-3">Last transaction: {formatDate(entry.lastTransaction || '')}</span>
                  {entry.onChain && (
                    <a 
                      href={`https://explorer.solana.com/address/${entry.userId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-royal-gold/70 hover:text-royal-gold"
                    >
                      Verified on-chain <ExternalLink size={10} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default SolanaLeaderboard;
