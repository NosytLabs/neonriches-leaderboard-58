
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, ArrowDown, Clock, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { formatCurrency, formatDate } from '@/lib/utils';

// Mock transaction data
const mockTransactions = [
  {
    id: '1',
    type: 'spend',
    amount: 25,
    title: 'Rank Increase',
    timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    status: 'completed'
  },
  {
    id: '2',
    type: 'spend',
    amount: 50,
    title: 'Pro Upgrade',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    status: 'completed'
  },
  {
    id: '3',
    type: 'withdrawal',
    amount: 15.50,
    title: 'Wallet Withdrawal',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    status: 'pending'
  },
  {
    id: '4',
    type: 'spend',
    amount: 5,
    title: 'Cosmetic Purchase',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
    status: 'completed'
  },
  {
    id: '5',
    type: 'transfer',
    amount: 100,
    title: 'Wallet Top-up',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
    status: 'completed'
  },
];

// Transaction history component
const TransactionHistory: React.FC = () => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Transaction History</CardTitle>
        <div className="flex items-center space-x-2">
          <button className="hover:bg-white/10 p-1.5 rounded-md transition-colors">
            <Filter className="h-4 w-4" />
          </button>
          <button className="hover:bg-white/10 p-1.5 rounded-md transition-colors">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-2">
          <Input placeholder="Search transactions..." className="glass-morphism border-white/10" />
        </div>
        
        <div className="space-y-2 mt-3">
          {mockTransactions.map(transaction => (
            <div key={transaction.id} className="flex items-center justify-between p-2 border-b border-white/5 last:border-0">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                  transaction.type === 'spend' 
                    ? 'bg-amber-500/20' 
                    : transaction.type === 'withdrawal'
                    ? 'bg-red-500/20'
                    : 'bg-green-500/20'
                }`}>
                  {transaction.type === 'spend' && <ArrowUp className={`h-4 w-4 text-amber-500`} />}
                  {transaction.type === 'withdrawal' && <ArrowDown className={`h-4 w-4 text-red-500`} />}
                  {transaction.type === 'transfer' && <ArrowDown className={`h-4 w-4 text-green-500`} />}
                </div>
                <div>
                  <div className="font-medium text-sm">{transaction.title}</div>
                  <div className="text-xs flex items-center text-white/60">
                    <Clock className="h-3 w-3 mr-1" />
                    {formatDate(transaction.timestamp)}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-medium ${
                  transaction.type === 'spend' || transaction.type === 'withdrawal'
                    ? 'text-white' 
                    : 'text-green-500'
                }`}>
                  {transaction.type === 'spend' || transaction.type === 'withdrawal' ? '-' : '+'}
                  {formatCurrency(transaction.amount)}
                </div>
                <div className={`text-xs ${
                  transaction.status === 'completed' 
                    ? 'text-green-500' 
                    : transaction.status === 'pending'
                    ? 'text-amber-500'
                    : 'text-red-500'
                }`}>
                  {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {mockTransactions.length === 0 && (
          <div className="text-center py-8 text-white/50">
            <div className="text-3xl mb-2">💰</div>
            No transactions yet
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
