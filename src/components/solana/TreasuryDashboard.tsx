
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getTreasuryInfo, getRecentTransactions } from '@/services/treasuryService';
import { SolanaTreasuryInfo, SolanaTransaction } from '@/types/solana';
import { formatCurrency, formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ArrowDownRight, ExternalLink } from 'lucide-react';

const TreasuryDashboard: React.FC = () => {
  const [treasuryInfo, setTreasuryInfo] = useState<SolanaTreasuryInfo>({
    totalDeposited: 0,
    totalWithdrawn: 0,
    currentBalance: 0,
    lastUpdated: new Date().toISOString(),
    address: "",
    balance: 0,
    netBalance: 0,
    transactions: 0,
    signature: ""
  });
  
  const [recentTransactions, setRecentTransactions] = useState<SolanaTransaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load treasury data on component mount
  useEffect(() => {
    const loadTreasuryData = () => {
      try {
        const info = getTreasuryInfo();
        const transactions = getRecentTransactions();
        
        setTreasuryInfo(info);
        setRecentTransactions(transactions);
      } catch (error) {
        console.error("Error loading treasury data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadTreasuryData();
    
    // Simulate updates every 20 seconds
    const interval = setInterval(loadTreasuryData, 20000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center space-x-2">
          <span>Royal Treasury</span>
          {!isLoading && (
            <Badge variant="outline" className="ml-2 text-xs bg-black/20">
              {formatDate(treasuryInfo.lastUpdated)}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {isLoading ? (
          <div className="flex items-center justify-center h-40">
            <div className="w-12 h-12 border-4 border-t-transparent border-royal-gold rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-morphism-subtle p-3 rounded-lg">
                <div className="text-xs text-white/70 mb-1">Total Balance</div>
                <div className="text-lg font-bold text-royal-gold">
                  ${treasuryInfo.currentBalance.toLocaleString()}
                </div>
              </div>
              
              <div className="glass-morphism-subtle p-3 rounded-lg">
                <div className="text-xs text-white/70 mb-1">Total Deposits</div>
                <div className="flex items-center">
                  <ArrowUpRight className="text-green-500 w-4 h-4 mr-1" />
                  <span className="text-lg font-bold text-green-400">
                    ${treasuryInfo.totalDeposited.toLocaleString()}
                  </span>
                </div>
              </div>
              
              <div className="glass-morphism-subtle p-3 rounded-lg">
                <div className="text-xs text-white/70 mb-1">Total Withdrawals</div>
                <div className="flex items-center">
                  <ArrowDownRight className="text-red-500 w-4 h-4 mr-1" />
                  <span className="text-lg font-bold text-red-400">
                    ${treasuryInfo.totalWithdrawn.toLocaleString()}
                  </span>
                </div>
              </div>
              
              <div className="glass-morphism-subtle p-3 rounded-lg">
                <div className="text-xs text-white/70 mb-1">Transactions</div>
                <div className="text-lg font-bold text-white">
                  {treasuryInfo.transactions?.toLocaleString() || "0"}
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-white/80 mb-3">Recent Transactions</h3>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="glass-morphism-subtle p-3 rounded-lg flex justify-between items-center">
                    <div>
                      <div className="flex items-center">
                        {tx.type === 'deposit' ? (
                          <ArrowUpRight className="text-green-500 w-4 h-4 mr-1" />
                        ) : (
                          <ArrowDownRight className="text-red-500 w-4 h-4 mr-1" />
                        )}
                        <span className="text-sm font-medium">
                          {tx.type === 'deposit' ? 'Deposit' : 'Withdrawal'}
                        </span>
                      </div>
                      <div className="text-xs text-white/60 mt-1">
                        {formatDate(tx.timestamp)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-bold ${
                        tx.type === 'deposit' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {tx.type === 'deposit' ? '+' : '-'}${tx.amount.toLocaleString()}
                      </div>
                      <a 
                        href={`https://explorer.solana.com/tx/${tx.signature}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-end text-xs text-white/40 hover:text-white/70 transition-colors"
                      >
                        <span className="hidden md:inline mr-1">View</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TreasuryDashboard;
