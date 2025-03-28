import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, RefreshCw, ChevronUp, ChevronDown, Trophy } from 'lucide-react';
import { OnChainLeaderboardEntry } from '@/types/solana';
import { getOnChainLeaderboard, subscribeToTreasuryUpdates } from '@/services/solanaService';
import { formatAddress } from '@/utils/solanaUtils';
import { motion, AnimatePresence } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import MedievalIcon from '@/components/ui/medieval-icon';
import { RoyalBadge } from '@/components/ui/theme-components';
import { useToast } from '@/hooks/use-toast';

interface RealTimeLeaderboardProps {
  limit?: number;
  refreshInterval?: number;
  showRefreshButton?: boolean;
}

const RealTimeLeaderboard: React.FC<RealTimeLeaderboardProps> = ({
  limit = 10,
  refreshInterval = 30000, // 30 seconds
  showRefreshButton = true
}) => {
  const [leaderboard, setLeaderboard] = useState<OnChainLeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const { toast } = useToast();

  // Function to fetch leaderboard data
  const fetchLeaderboard = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getOnChainLeaderboard(limit);
      
      // Update previous ranks before setting new data
      const updatedData = data.map((entry) => {
        const existingEntry = leaderboard.find((e) => e.publicKey === entry.publicKey);
        return {
          ...entry,
          previousRank: existingEntry?.rank || entry.rank
        };
      });
      
      setLeaderboard(updatedData);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      // If we failed to fetch, but have existing data, keep it
      if (leaderboard.length === 0) {
        // Set mock data if we have no data at all
        setLeaderboard([
          {
            publicKey: "8YLKoCu5knFvCTSdSXe3xVQxA8xndGpAbqNWCtK9XkS9",
            username: "RoyalWhale",
            rank: 1,
            previousRank: 1,
            amountSpent: 5000,
            lastTransaction: new Date().toISOString(),
            isVerified: true
          },
          {
            publicKey: "5yKLcpRxZU2S7uLkHRFNQZnSoNMm9ZUHsyVaaDXJHnEW",
            username: "CrownCollector",
            rank: 2,
            previousRank: 2,
            amountSpent: 3750,
            lastTransaction: new Date().toISOString(),
            isVerified: true
          }
        ]);
      }
      
      toast({
        title: "Failed to Load Leaderboard",
        description: "Using cached data. Check your connection and try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  }, [leaderboard, limit, toast]);

  // Initial fetch and interval setup
  useEffect(() => {
    fetchLeaderboard();
    
    const intervalId = setInterval(() => {
      fetchLeaderboard();
    }, refreshInterval);
    
    return () => clearInterval(intervalId);
  }, [fetchLeaderboard, refreshInterval]);

  // Subscribe to treasury updates
  useEffect(() => {
    const unsubscribe = subscribeToTreasuryUpdates((transaction) => {
      // When we get a new transaction, refresh the leaderboard
      fetchLeaderboard();
      
      // Show a toast notification about the new transaction
      toast({
        title: "New On-Chain Transaction",
        description: `${formatAddress(transaction.sender)} spent ${transaction.amount.toFixed(2)} SOL!`,
        variant: "default"
      });
    });
    
    return () => unsubscribe();
  }, [fetchLeaderboard, toast]);

  const getRankChangeIcon = (current: number, previous?: number) => {
    if (!previous || current === previous) {
      return null;
    }
    
    if (current < previous) {
      return <ChevronUp className="text-green-500 h-4 w-4" />;
    } else {
      return <ChevronDown className="text-red-500 h-4 w-4" />;
    }
  };

  const getRankChangeClass = (current: number, previous?: number) => {
    if (!previous || current === previous) {
      return '';
    }
    
    return current < previous ? 'text-green-500' : 'text-red-500';
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center">
          <MedievalIcon name="trophy" color="gold" className="mr-2" size="md" />
          On-Chain Leaderboard
          <RoyalBadge variant="outlineGold" size="sm" className="ml-2">
            Solana
          </RoyalBadge>
        </CardTitle>
        <div className="flex items-center gap-2">
          {lastUpdated && (
            <span className="text-xs text-white/50">
              Updated {lastUpdated.toLocaleTimeString()}
            </span>
          )}
          {showRefreshButton && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={fetchLeaderboard}
              disabled={isLoading}
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {isLoading && leaderboard.length === 0 ? (
          <div className="space-y-3">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            <AnimatePresence initial={false}>
              {leaderboard.map((entry) => (
                <motion.div
                  key={entry.publicKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="glass-morphism border-white/10 p-3 rounded-md flex items-center justify-between group hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-royal-gold/30 to-royal-crimson/30 mr-3">
                      {entry.rank === 1 ? (
                        <Trophy className="h-5 w-5 text-royal-gold" />
                      ) : (
                        <div className="flex items-center">
                          <span className="text-sm font-bold">{entry.rank}</span>
                          {getRankChangeIcon(entry.rank, entry.previousRank)}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-medium flex items-center">
                        {entry.username || formatAddress(entry.publicKey)}
                        {entry.isVerified && (
                          <div className="ml-1 text-blue-400">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-white/50">
                        {!entry.username && (
                          <span className="text-xs text-white/60 font-mono">
                            {formatAddress(entry.publicKey, 6)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-right">
                      <div className="font-bold">${entry.amountSpent.toFixed(2)}</div>
                      <div className="text-xs flex items-center justify-end">
                        <span className={getRankChangeClass(entry.rank, entry.previousRank)}>
                          {entry.previousRank && entry.rank !== entry.previousRank
                            ? `${entry.rank < entry.previousRank ? '↑' : '↓'} ${Math.abs(entry.rank - entry.previousRank)}`
                            : 'No change'}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
        <div className="mt-4 text-center">
          <Button variant="outline" className="text-xs" size="sm">
            View Full Leaderboard
            <ExternalLink className="h-3 w-3 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RealTimeLeaderboard;
