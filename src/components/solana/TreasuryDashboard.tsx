// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Coins, ArrowUp, ArrowDown, FileText } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { getTreasuryInfo, subscribeToTreasuryUpdates } from '@/services/solanaService';
import { SolanaTreasuryInfo, SolanaTransaction } from '@/types/solana';

interface TreasuryDashboardProps {
  // Add any props if needed
}

const TreasuryDashboard: React.FC<TreasuryDashboardProps> = ({ /* props */ }) => {
  const [treasuryInfo, setTreasuryInfo] = useState<SolanaTreasuryInfo>({
    owner: 'Loading...',
    balance: 0,
    totalDeposited: 0,
    totalWithdrawn: 0,
    netBalance: 0,
    transactions: 0,
    lastUpdated: new Date().toISOString(),
    signature: ''
  });
  const [displayTransactions, setDisplayTransactions] = useState(false);
  
  // Update the component to handle type differences
  const adaptTreasuryInfoToTransaction = (info: SolanaTreasuryInfo): SolanaTransaction => {
    return {
      id: `treasury-${Date.now()}`,
      signature: info.signature || 'treasury-update',
      amount: info.balance || 0,
      timestamp: info.lastUpdated || new Date().toISOString(),
      sender: info.owner || 'treasury',
      receiver: 'system',
      status: 'confirmed',
      type: 'deposit',
      recipient: 'treasury'
    };
  };

  useEffect(() => {
    // Get initial treasury info
    const fetchTreasuryInfo = async () => {
      try {
        const info = await getTreasuryInfo();
        setTreasuryInfo(info);
        
        // If we're displaying transactions, adapt the info
        if (displayTransactions) {
          const adaptedTransaction = adaptTreasuryInfoToTransaction(info);
          // Use the adapted transaction where needed
        }
      } catch (error) {
        console.error("Error fetching treasury info:", error);
      }
    };
    
    fetchTreasuryInfo();
    
    // Subscribe to treasury updates with no parameters
    const unsubscribe = subscribeToTreasuryUpdates((data) => {
      setTreasuryInfo(data);
    });
    
    return () => unsubscribe();
  }, [displayTransactions]);

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <div className="flex items-center">
          <Coins className="mr-3 h-6 w-6 text-green-400" />
          <CardTitle>Solana Treasury Dashboard</CardTitle>
        </div>
        <CardDescription>
          Real-time overview of the treasury's financial activity
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg glass-morphism border-white/10">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium">Total Deposited</div>
              <div className="flex items-center text-green-500">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>{formatCurrency(treasuryInfo.totalDeposited || 0)}</span>
              </div>
            </div>
            <div className="text-3xl font-bold">{formatCurrency(treasuryInfo.totalDeposited || 0)}</div>
            <div className="text-xs text-white/50">Lifetime deposits</div>
          </div>
          
          <div className="p-4 rounded-lg glass-morphism border-white/10">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium">Total Withdrawn</div>
              <div className="flex items-center text-red-500">
                <ArrowDown className="h-4 w-4 mr-1" />
                <span>{formatCurrency(treasuryInfo.totalWithdrawn || 0)}</span>
              </div>
            </div>
            <div className="text-3xl font-bold">{formatCurrency(treasuryInfo.totalWithdrawn || 0)}</div>
            <div className="text-xs text-white/50">Lifetime withdrawals</div>
          </div>
          
          <div className="p-4 rounded-lg glass-morphism border-white/10">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium">Net Balance</div>
              <div className="flex items-center text-blue-500">
                <Coins className="h-4 w-4 mr-1" />
                <span>{formatCurrency(treasuryInfo.netBalance || 0)}</span>
              </div>
            </div>
            <div className="text-3xl font-bold">{formatCurrency(treasuryInfo.netBalance || 0)}</div>
            <div className="text-xs text-white/50">Current balance</div>
          </div>
          
          <div className="p-4 rounded-lg glass-morphism border-white/10">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium">Transactions</div>
              <div className="flex items-center text-white/60">
                <FileText className="h-4 w-4 mr-1" />
                <span>{treasuryInfo.transactions}</span>
              </div>
            </div>
            <div className="text-3xl font-bold">{treasuryInfo.transactions}</div>
            <div className="text-xs text-white/50">Total transactions</div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-white/60">
            Last Updated: {new Date(treasuryInfo.lastUpdated || '').toLocaleString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TreasuryDashboard;
