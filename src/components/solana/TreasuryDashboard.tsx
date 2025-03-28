
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SolanaTreasuryInfo, SolanaTransaction } from '@/types/solana';
import { getTreasuryInfo, getTreasuryTransactions, subscribeToTreasuryUpdates } from '@/services/solanaService';
import { RefreshCw, Coins, ArrowUpRight, ArrowDownRight, WalletIcon, History, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { formatAddress } from '@/utils/solanaUtils';
import { Skeleton } from '@/components/ui/skeleton';
import MedievalIcon from '@/components/ui/medieval-icon';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

// Internal Shadow Treasury Info type
interface ShadowTreasuryInfo {
  totalDeposited: number;
  currentBalance: number;
  depositCount: number;
  withdrawalCount: number;
  lastUpdated: string;
}

const TreasuryDashboard: React.FC = () => {
  const [treasuryInfo, setTreasuryInfo] = useState<SolanaTreasuryInfo | null>(null);
  const [shadowInfo, setShadowInfo] = useState<ShadowTreasuryInfo>({
    totalDeposited: 0,
    currentBalance: 0,
    depositCount: 0,
    withdrawalCount: 0,
    lastUpdated: new Date().toISOString()
  });
  const [transactions, setTransactions] = useState<SolanaTransaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();

  // Mock shadow treasury data for demonstration
  const mockShadowTreasury = () => {
    return {
      totalDeposited: 1250, // Total all-time deposits in SOL
      currentBalance: treasuryInfo?.balance || 0, // Current balance in SOL (matching on-chain)
      depositCount: 86,
      withdrawalCount: 12,
      lastUpdated: new Date().toISOString()
    };
  };

  const fetchTreasuryData = useCallback(async () => {
    try {
      setIsRefreshing(true);
      const [info, txs] = await Promise.all([
        getTreasuryInfo(),
        getTreasuryTransactions(5)
      ]);
      
      setTreasuryInfo(info);
      setTransactions(txs);
      
      // Update shadow treasury data 
      // In a real implementation, this would come from your Supabase database
      setShadowInfo(mockShadowTreasury());
      
    } catch (error) {
      console.error('Error fetching treasury data:', error);
      toast({
        title: "Failed to Load Treasury Data",
        description: "There was an error loading the treasury information.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchTreasuryData();
    
    // Set up subscription for real-time updates
    const unsubscribe = subscribeToTreasuryUpdates((transaction) => {
      // Update transactions list with the new transaction
      setTransactions(prev => [transaction, ...prev.slice(0, 4)]);
      
      // Refresh treasury info
      getTreasuryInfo().then(info => {
        setTreasuryInfo(info);
        // Update shadow treasury after a transaction
        setShadowInfo(prev => {
          // If amount is positive, it's a deposit
          if (transaction.amount > 0) {
            return {
              ...prev,
              totalDeposited: prev.totalDeposited + transaction.amount,
              currentBalance: (info?.balance || 0),
              depositCount: prev.depositCount + 1,
              lastUpdated: new Date().toISOString()
            };
          } else {
            // If amount is negative, it's a withdrawal
            return {
              ...prev,
              currentBalance: (info?.balance || 0),
              withdrawalCount: prev.withdrawalCount + 1,
              lastUpdated: new Date().toISOString()
            };
          }
        });
      });
      
      // Show notification
      toast({
        title: "New Treasury Transaction",
        description: `Received ${transaction.amount.toFixed(2)} SOL from ${formatAddress(transaction.sender)}`,
      });
    });
    
    return () => unsubscribe();
  }, [fetchTreasuryData, toast]);

  const handleRefresh = () => {
    fetchTreasuryData();
  };

  const formatSOL = (value: number) => {
    return value.toFixed(4);
  };

  // Convert SOL to USD using a fixed exchange rate for demonstration
  const solToUsd = (solAmount: number, solPrice: number = 20): number => {
    return solAmount * solPrice;
  };

  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <MedievalIcon name="coins" color="gold" className="mr-2" />
              Royal Treasury
            </CardTitle>
            <CardDescription>
              Real-time Solana treasury statistics and shadow treasury for tracking ranks
            </CardDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Current Treasury Balance */}
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white/60">Current Balance</div>
                  <WalletIcon className="h-4 w-4 text-royal-gold" />
                </div>
                
                {isLoading ? (
                  <Skeleton className="h-8 w-24 mt-2" />
                ) : (
                  <div className="mt-2 flex items-baseline">
                    <div className="text-2xl font-bold">{formatSOL(treasuryInfo?.balance || 0)}</div>
                    <div className="ml-1 text-sm text-white/60">SOL</div>
                  </div>
                )}
                
                <div className="text-xs text-white/40 mt-1">
                  ≈ ${solToUsd(treasuryInfo?.balance || 0).toFixed(2)} USD
                </div>
              </CardContent>
            </Card>
            
            {/* Total Deposits (Shadow Treasury) */}
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white/60">Total Deposits All-Time</div>
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                </div>
                
                {isLoading ? (
                  <Skeleton className="h-8 w-24 mt-2" />
                ) : (
                  <div className="mt-2 flex items-baseline">
                    <div className="text-2xl font-bold">{formatSOL(shadowInfo.totalDeposited)}</div>
                    <div className="ml-1 text-sm text-white/60">SOL</div>
                  </div>
                )}
                
                <div className="text-xs text-white/40 mt-1 flex items-center">
                  <span className="text-green-400 mr-1">{shadowInfo.depositCount}</span> deposits all-time
                </div>
              </CardContent>
            </Card>
            
            {/* USD Shadow Treasury (for tracking spend rank) */}
            <Card className="bg-gradient-to-br from-royal-purple/20 to-royal-gold/10 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white/60">Shadow Treasury (USD)</div>
                  <Coins className="h-4 w-4 text-royal-gold" />
                </div>
                
                {isLoading ? (
                  <Skeleton className="h-8 w-24 mt-2" />
                ) : (
                  <div className="mt-2 flex items-baseline">
                    <div className="text-2xl font-bold">${solToUsd(shadowInfo.totalDeposited).toFixed(2)}</div>
                    <div className="ml-1 text-sm text-white/60">USD</div>
                  </div>
                )}
                
                <div className="text-xs text-white/40 mt-1 italic">
                  Used for rank calculations
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Transactions */}
          <div>
            <div className="flex items-center mb-3">
              <History className="h-4 w-4 text-white/60 mr-2" />
              <h3 className="text-sm font-medium">Recent Transactions</h3>
            </div>
            
            {isLoading ? (
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-white/5 rounded-md">
                    <Skeleton className="h-6 w-52" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                ))}
              </div>
            ) : transactions.length === 0 ? (
              <div className="text-center py-6 text-white/40 italic">
                No transactions found
              </div>
            ) : (
              <div className="space-y-2">
                {transactions.map((tx, index) => (
                  <motion.div
                    key={tx.signature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center justify-between p-2 bg-white/5 rounded-md hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className={`bg-green-500/10 text-green-400 border-green-400/20`}>
                        + {tx.amount.toFixed(2)} SOL
                      </Badge>
                      <div className="text-sm">
                        <span className="text-white/60">From:</span> {formatAddress(tx.sender, 6)}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs text-white/40 mr-2">
                        {new Date(tx.timestamp).toLocaleTimeString()}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => window.open(`https://explorer.solana.com/tx/${tx.signature}`, '_blank')}
                      >
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            <div className="mt-4 text-center">
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => treasuryInfo?.address && 
                  window.open(`https://explorer.solana.com/address/${treasuryInfo.address}`, '_blank')}
              >
                View on Solana Explorer
                <ExternalLink className="h-3 w-3 ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Treasury Info Block */}
          <Card className="mt-6 bg-white/5 border-white/10 p-4">
            <div className="text-sm text-white/80 flex items-center mb-2">
              <MedievalIcon name="scroll" color="gold" size="sm" className="mr-2" />
              Treasury Mechanics
            </div>
            <p className="text-xs text-white/60 italic">
              The Shadow Treasury tracks all deposits ever made, ensuring that your rank in the Royal Court is based on your total contributions, regardless of withdrawals. This ensures that your status is permanent and based on your generosity to the kingdom.
            </p>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default TreasuryDashboard;
