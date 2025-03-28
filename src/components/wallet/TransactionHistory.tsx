import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Clock, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { formatCurrency, formatDate } from '@/lib/utils';

export interface TransactionHistoryProps {
  userId: string;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ userId }) => {
  // Mock transaction data
  const transactions = [
    {
      id: 'tx-1',
      type: 'deposit',
      amount: 100,
      currency: 'USD',
      date: new Date(Date.now() - 86400000), // Yesterday
      description: 'Initial deposit'
    },
    {
      id: 'tx-2',
      type: 'withdrawal',
      amount: 25,
      currency: 'USD',
      date: new Date(Date.now() - 43200000), // 12 hours ago
      description: 'Withdrawal to bank account'
    },
    {
      id: 'tx-3',
      type: 'deposit',
      amount: 50,
      currency: 'USD',
      date: new Date(Date.now() - 10800000), // 3 hours ago
      description: 'Bonus reward'
    }
  ];

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Clock className="h-5 w-5 mr-2 text-royal-gold" />
          Transaction History
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px]">
          <div className="py-2">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-white/5 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  {transaction.type === 'deposit' ? (
                    <ArrowDownLeft className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-red-500" />
                  )}
                  <div>
                    <div className="font-medium">{transaction.description}</div>
                    <div className="text-xs text-white/60">{formatDate(transaction.date)}</div>
                  </div>
                </div>
                <div className="font-medium text-right">
                  {transaction.type === 'deposit' ? '+' : '-'}
                  {formatCurrency(transaction.amount, transaction.currency)}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
