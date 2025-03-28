
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getOnChainLeaderboard } from '@/services/leaderboardService';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/services/leaderboardService';
import { OnChainLeaderboardEntry } from '@/types/solana';
import { ChevronUp, ChevronDown, Minus, ExternalLink } from 'lucide-react';
import { formatAddress } from '@/utils/solanaUtils';

const SolanaLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<OnChainLeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getOnChainLeaderboard();
        setLeaderboard(data);
      } catch (error) {
        console.error("Error fetching on-chain leaderboard:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchLeaderboard();
  }, []);
  
  const getRankChangeElement = (current: number, previous: number) => {
    if (current < previous) {
      return <div className="flex items-center text-green-500"><ChevronUp size={14} className="mr-0.5" />{previous - current}</div>;
    } else if (current > previous) {
      return <div className="flex items-center text-red-500"><ChevronDown size={14} className="mr-0.5" />{current - previous}</div>;
    } else {
      return <div className="flex items-center text-gray-400"><Minus size={14} className="mr-0.5" />0</div>;
    }
  };
  
  if (isLoading) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="text-lg">On-Chain Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-royal-gold"></div>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="text-lg">On-Chain Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs uppercase text-white/60 border-b border-white/10">
                <th className="text-left py-2 px-3 font-medium">Rank</th>
                <th className="text-left py-2 px-3 font-medium">Username</th>
                <th className="text-left py-2 px-3 font-medium">Wallet</th>
                <th className="text-right py-2 px-3 font-medium">Total Spent</th>
                <th className="text-right py-2 px-3 font-medium">Last Tx</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry) => (
                <tr key={entry.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-3 px-3">
                    <div className="flex items-center">
                      <span className="font-mono text-sm mr-2">#{entry.rank}</span>
                      {getRankChangeElement(entry.rank, entry.previousRank || entry.rank)}
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex items-center">
                      <span className="font-medium text-white">{entry.username}</span>
                      {entry.isVerified && (
                        <Badge variant="outline" className="ml-2 bg-royal-gold/20 text-royal-gold border-royal-gold/30 text-[10px] px-1 py-0">
                          Verified
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex items-center text-sm text-white/60">
                      {formatAddress(entry.publicKey)}
                      <a 
                        href={`https://solscan.io/account/${entry.publicKey}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-1 text-white/40 hover:text-white/80"
                      >
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <span className="font-medium">${entry.totalSpent.toLocaleString()}</span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <span className="text-sm text-white/60">{formatDate(entry.lastTransaction)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default SolanaLeaderboard;
