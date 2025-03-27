
import React, { useState, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getUserTransactions, Transaction } from '@/services/walletService';
import { formatDistanceToNow } from 'date-fns';

interface TransactionHistoryProps {
  userId: string;
  limit?: number;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ userId, limit = 10 }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      setIsLoading(true);
      try {
        const transactionData = await getUserTransactions(userId, limit);
        setTransactions(transactionData);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, [userId, limit]);

  const getTransactionIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'deposit': return '💰';
      case 'spend': return '💸';
      case 'shame': return '😈';
      case 'advertisement': return '📢';
      case 'subscription': return '👑';
      default: return '🔄';
    }
  };

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
        </div>
      ) : transactions.length === 0 ? (
        <div className="text-center py-8 text-white/60">
          <p>No transactions found in your royal ledger.</p>
        </div>
      ) : (
        <ScrollArea className="h-[300px]">
          <div className="space-y-2">
            {transactions.map((transaction) => (
              <div 
                key={transaction.id} 
                className="flex items-center justify-between p-3 glass-morphism border-white/10 rounded-lg"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                    <span className="text-lg">{getTransactionIcon(transaction.type)}</span>
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-xs text-white/60">
                      {formatDistanceToNow(new Date(transaction.timestamp), { addSuffix: true })}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-mono font-semibold ${
                    transaction.type === 'deposit' ? 'text-green-400' : 'text-royal-gold'
                  }`}>
                    {transaction.type === 'deposit' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default TransactionHistory;
