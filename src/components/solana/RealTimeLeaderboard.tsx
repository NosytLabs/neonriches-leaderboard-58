
import React, { useState, useEffect } from 'react';
import { OnChainLeaderboardEntry, SolanaTransaction } from '@/types/solana';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { formatAddress } from '@/utils/solanaUtils';
import { fetchOnChainLeaderboard } from '@/services/treasuryService';
import { ArrowUp, ArrowDown, Minus, Crown, ChevronRight, Shield } from 'lucide-react';

const RealTimeLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<OnChainLeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch on-chain data
        const data = await fetchOnChainLeaderboard();
        
        // Update existing entries with previous rank data
        const updatedData = data.map((entry) => {
          const existingEntry = leaderboard.find((e) => e.id === entry.id);
          return {
            ...entry,
            previousRank: existingEntry?.rank || entry.rank
          };
        });
        
        setLeaderboard(updatedData);
        setError(null);
      } catch (err) {
        console.error("Error fetching on-chain leaderboard:", err);
        setError(err instanceof Error ? err : new Error('Failed to fetch data'));
        
        // Add mock data for development
        if (leaderboard.length === 0) {
          setLeaderboard([
            {
              id: "1",
              publicKey: "8YLKoCu5knFvCTSdSXe3xVQxA8xndGpAbqNWCtK9XkS9",
              username: "RoyalWhale",
              rank: 1,
              previousRank: 1,
              totalSpent: 5000,
              lastTransaction: new Date().toISOString(),
              isVerified: true
            },
            {
              id: "2",
              publicKey: "5yKLcpRxZU2S7uLkHRFNQZnSoNMm9ZUHsyVaaDXJHnEW",
              username: "CrownCollector",
              rank: 2,
              previousRank: 2,
              totalSpent: 3750,
              lastTransaction: new Date().toISOString(),
              isVerified: true
            }
          ]);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
    
    // Set up polling for real-time updates
    const pollingInterval = setInterval(fetchData, 30000); // Poll every 30 seconds
    
    // Set up WebSocket listener for real-time transactions
    const setupWebSocket = () => {
      const ws = new WebSocket('wss://api.mainnet-beta.solana.com');
      
      ws.onmessage = (event) => {
        const txData = JSON.parse(event.data);
        if (txData && txData.method === 'signatureNotification') {
          const solTx: SolanaTransaction = {
            signature: txData.params.result.value.signature,
            timestamp: new Date().toISOString(),
            amount: Math.random() * 10, // Would be parsed from actual transaction
            type: 'deposit',
            sender: txData.params.result.value.accountId || 'unknown',
            recipient: 'treasury',
            status: 'confirmed'
          };
          
          // Show notification for new transaction
          toast({
            title: "New On-Chain Transaction",
            description: `Transaction received for ${solTx.amount.toFixed(2)} SOL!`,
            variant: "default"
          });
          
          // Trigger refresh
          fetchData();
        }
      };
      
      return ws;
    };
    
    // const ws = setupWebSocket();
    
    return () => {
      clearInterval(pollingInterval);
      // ws.close();
    };
  }, []);
  
  const getRankChangeIcon = (current: number, previous?: number) => {
    if (!previous || current === previous) {
      return <Minus size={16} className="text-gray-400" />;
    }
    
    if (current < previous) {
      return <ArrowUp size={16} className="text-green-500" />;
    }
    
    return <ArrowDown size={16} className="text-red-500" />;
  };
  
  const getRankChangeText = (current: number, previous?: number) => {
    if (!previous || current === previous) {
      return "No change";
    }
    
    if (current < previous) {
      return `Moved up ${previous - current} rank${previous - current > 1 ? 's' : ''}`;
    }
    
    return `Moved down ${current - previous} rank${current - previous > 1 ? 's' : ''}`;
  };
  
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Crown className="h-5 w-5 mr-2 text-royal-gold" />
          On-Chain Leaderboard
        </CardTitle>
        <CardDescription>
          Real-time blockchain nobility ranks
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {loading && <p className="text-center text-white/60">Loading on-chain data...</p>}
          
          {error && <p className="text-center text-red-400">
            Failed to fetch on-chain data. Please try again later.
          </p>}
          
          {!loading && !error && leaderboard.length === 0 && 
            <p className="text-center text-white/60">No on-chain transactions recorded yet.</p>
          }
          
          {leaderboard.map((entry, index) => (
            <div key={entry.id} className="glass-morphism border-white/10 rounded-lg p-3 group hover:border-royal-gold/30 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col items-center justify-center w-10">
                    <span className="text-lg font-bold text-white/90">#{entry.rank}</span>
                    {getRankChangeIcon(entry.rank, entry.previousRank)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium truncate">
                      {entry.username || formatAddress(entry.publicKey || '', 6)}
                      {entry.isVerified && (
                        <Badge variant="outline" className="ml-2 text-xs bg-royal-navy/30 border-royal-navy/50">
                          Verified
                        </Badge>
                      )}
                    </h4>
                    <p className="text-xs text-white/60 truncate">
                      {formatAddress(entry.publicKey || '', 10)}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  <span className="text-royal-gold font-bold text-right">
                    {entry.totalSpent || entry.amountSpent} SOL
                  </span>
                  <div className="flex items-center text-xs text-white/60">
                    <span className={`${entry.previousRank && entry.rank < entry.previousRank ? 'text-green-400' : ''} ${entry.previousRank && entry.rank > entry.previousRank ? 'text-red-400' : ''}`}>
                      {getRankChangeText(entry.rank, entry.previousRank)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* View More link */}
          {leaderboard.length > 0 && (
            <div className="text-center pt-2">
              <a href="#" className="inline-flex items-center text-royal-gold/80 hover:text-royal-gold transition-colors text-sm">
                View Complete Rankings
                <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RealTimeLeaderboard;
