
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserProfile } from '@/types/user';
import { Wallet, CreditCard, PiggyBank, ArrowUpCircle, ArrowDownCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { formatDistanceToNow } from 'date-fns';

interface ProfileWalletViewProps {
  user: UserProfile;
}

const ProfileWalletView: React.FC<ProfileWalletViewProps> = ({ user }) => {
  const { toast } = useToast();
  const [depositAmount, setDepositAmount] = useState('');
  
  // Mock transactions
  const transactions = [
    {
      id: 'txn-1',
      type: 'deposit',
      amount: 100,
      date: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      description: 'Wallet deposit'
    },
    {
      id: 'txn-2',
      type: 'spend',
      amount: 25,
      date: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      description: 'Rank boost'
    },
    {
      id: 'txn-3',
      type: 'deposit',
      amount: 50,
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      description: 'Wallet deposit'
    },
    {
      id: 'txn-4',
      type: 'spend',
      amount: 15,
      date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      description: 'Profile cosmetic'
    },
    {
      id: 'txn-5',
      type: 'spend',
      amount: 30,
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
      description: 'Mockery action'
    }
  ];
  
  const totalSpent = transactions
    .filter(t => t.type === 'spend')
    .reduce((sum, t) => sum + t.amount, 0);
    
  const totalDeposits = transactions
    .filter(t => t.type === 'deposit')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid deposit amount.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would make an API call to process the deposit
    toast({
      title: "Deposit Successful",
      description: `You've added $${amount.toFixed(2)} to your wallet.`,
    });
    
    setDepositAmount('');
  };
  
  const walletBalance = user.walletBalance || 0;
  
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-royal-gold" />
            <CardTitle>Royal Treasury</CardTitle>
          </div>
          <CardDescription>
            Manage your funds and view transaction history
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="w-full sm:w-auto text-center">
              <p className="text-sm text-white/70">Current Balance</p>
              <h2 className="text-3xl font-bold">${walletBalance.toFixed(2)}</h2>
            </div>
            
            <div className="w-full sm:w-auto flex flex-col">
              <Label htmlFor="depositAmount" className="mb-2">Quick Deposit</Label>
              <div className="flex gap-2">
                <Input
                  id="depositAmount"
                  type="number"
                  min="1"
                  step="1"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full"
                />
                <Button 
                  className="bg-royal-gold hover:bg-royal-gold/90 text-black"
                  onClick={handleDeposit}
                >
                  <CreditCard className="h-4 w-4 mr-2" /> Add
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <Card className="glass-morphism border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-black/30">
                    <ArrowUpCircle className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Total Deposits</p>
                    <p className="text-lg font-semibold">${totalDeposits.toFixed(2)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-black/30">
                    <ArrowDownCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Total Spent</p>
                    <p className="text-lg font-semibold">${totalSpent.toFixed(2)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-black/30">
                    <PiggyBank className="h-5 w-5 text-royal-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Current Rank</p>
                    <p className="text-lg font-semibold">#{user.rank || 'N/A'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col items-stretch">
          <Button variant="outline" onClick={() => window.location.href = '/deposit'}>
            <CreditCard className="h-4 w-4 mr-2" /> Go to Deposit Page
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-royal-gold" />
            <CardTitle>Recent Transactions</CardTitle>
          </div>
        </CardHeader>
        
        <CardContent>
          {transactions.length > 0 ? (
            <ul className="space-y-3">
              {transactions.map((transaction) => (
                <li key={transaction.id} className="flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-white/5">
                  <div className="p-2 rounded-full bg-black/30">
                    {transaction.type === 'deposit' ? (
                      <ArrowUpCircle className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <ArrowDownCircle className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <p className="font-medium">
                        {transaction.description}
                      </p>
                      <span 
                        className={`font-semibold ${
                          transaction.type === 'deposit' ? 'text-emerald-500' : 'text-red-500'
                        }`}
                      >
                        {transaction.type === 'deposit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-white/60">
                      {formatDistanceToNow(transaction.date, { addSuffix: true })}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-6 text-white/60">
              <p>No recent transactions</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileWalletView;
