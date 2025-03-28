
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { formatDistance } from 'date-fns';

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: 'spend' | 'deposit' | 'wish' | 'shame' | 'advertisement' | 'subscription' | 'cosmetic' | 'boost' | 'founder' | 'other';
  description: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}

interface TransactionHistoryProps {
  userId: string;
  transactions?: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ userId, transactions: propTransactions }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() => {
    if (propTransactions) {
      setTransactions(propTransactions);
      return;
    }
    
    // Mock transaction data if none provided
    const mockTransactions: Transaction[] = [
      {
        id: 'txn_1',
        userId,
        amount: 50,
        type: 'deposit',
        description: 'Added funds to wallet',
        timestamp: new Date(Date.now() - 3600000 * 2)
      },
      {
        id: 'txn_2',
        userId,
        amount: 10,
        type: 'spend',
        description: 'Purchased Royal Border',
        timestamp: new Date(Date.now() - 3600000 * 24)
      },
      {
        id: 'txn_3',
        userId,
        amount: 5,
        type: 'wish',
        description: 'Made a wish at the Well',
        timestamp: new Date(Date.now() - 3600000 * 48)
      }
    ];
    
    setTransactions(mockTransactions);
  }, [userId, propTransactions]);
  
  const formatDate = (date: Date) => {
    return formatDistance(date, new Date(), { addSuffix: true });
  };
  
  const getTransactionColorClass = (type: Transaction['type']) => {
    switch (type) {
      case 'spend':
        return 'text-red-400';
      case 'deposit':
        return 'text-green-400';
      case 'wish':
        return 'text-purple-400';
      case 'shame':
        return 'text-amber-400';
      case 'advertisement':
        return 'text-blue-400';
      case 'subscription':
        return 'text-royal-gold';
      case 'cosmetic':
        return 'text-pink-400';
      case 'boost':
        return 'text-cyan-400';
      case 'founder':
        return 'text-royal-purple';
      default:
        return 'text-gray-400';
    }
  };
  
  const getTransactionTypeLabel = (type: Transaction['type']) => {
    switch (type) {
      case 'spend':
        return 'Spend';
      case 'deposit':
        return 'Deposit';
      case 'wish':
        return 'Wish';
      case 'shame':
        return 'Shame';
      case 'advertisement':
        return 'Ad';
      case 'subscription':
        return 'Sub';
      case 'cosmetic':
        return 'Cosmetic';
      case 'boost':
        return 'Boost';
      case 'founder':
        return 'Founder';
      default:
        return 'Other';
    }
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="text-lg">Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          {transactions.length > 0 ? (
            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div 
                  key={transaction.id} 
                  className="p-3 rounded-lg glass-morphism border-white/10 flex justify-between items-center"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={`${getTransactionColorClass(transaction.type)}`}>
                        {getTransactionTypeLabel(transaction.type)}
                      </Badge>
                      <span className="text-sm text-white/70">
                        {transaction.description}
                      </span>
                    </div>
                    <div className="text-xs text-white/50 mt-1">
                      {formatDate(new Date(transaction.timestamp))}
                    </div>
                  </div>
                  <div className={`font-bold ${transaction.type === 'deposit' ? 'text-green-400' : 'text-royal-crimson'}`}>
                    {transaction.type === 'deposit' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white/50 p-4">
              No transactions yet
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
