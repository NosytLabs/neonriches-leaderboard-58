
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserProfile } from '@/types/user';
import { PlusCircle, MinusCircle, History, CreditCard, ExternalLink, Wallet } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ProfileWalletViewProps {
  user: UserProfile;
}

const ProfileWalletView: React.FC<ProfileWalletViewProps> = ({ user }) => {
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Transaction history (mock data)
  const transactions = [
    { id: 1, type: 'deposit', amount: 100, date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), status: 'completed' },
    { id: 2, type: 'purchase', amount: 50, date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), status: 'completed' },
    { id: 3, type: 'deposit', amount: 200, date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), status: 'completed' },
    { id: 4, type: 'purchase', amount: 75, date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), status: 'completed' }
  ];
  
  const handleDeposit = () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount greater than 0.",
        variant: "destructive"
      });
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setAmount('');
      toast({
        title: "Deposit successful",
        description: `$${amount} has been added to your royal treasury.`,
      });
    }, 1500);
  };
  
  const handleWithdraw = () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount greater than 0.",
        variant: "destructive"
      });
      return;
    }
    
    if (Number(amount) > (user.walletBalance || 0)) {
      toast({
        title: "Insufficient funds",
        description: "You don't have enough funds in your wallet.",
        variant: "destructive"
      });
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setAmount('');
      toast({
        title: "Withdrawal initiated",
        description: `$${amount} withdrawal is being processed.`,
      });
    }, 1500);
  };
  
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-royal-gold" />
            Royal Treasury
          </CardTitle>
          <CardDescription>
            Manage your funds and transaction history
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="mb-6">
            <div className="flex justify-center">
              <div className="bg-black/30 px-12 py-4 rounded-lg text-center">
                <p className="text-white/70 text-sm mb-1">Current Balance</p>
                <p className="text-4xl font-bold text-royal-gold">${user.walletBalance?.toLocaleString() || 0}</p>
                <p className="text-xs text-white/50 mt-1">Available for rank advancement</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <div className="flex space-x-2">
                <Input
                  type="number"
                  min="0"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="glass-morphism"
                />
                <Button
                  onClick={handleDeposit}
                  disabled={isProcessing}
                  className="flex-shrink-0"
                >
                  <PlusCircle className="h-4 w-4 mr-1" /> Deposit
                </Button>
              </div>
              <p className="mt-2 text-xs text-white/60 text-center">Add funds to your royal treasury</p>
            </div>
            
            <div>
              <div className="flex space-x-2">
                <Input
                  type="number"
                  min="0"
                  max={user.walletBalance || 0}
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="glass-morphism"
                />
                <Button
                  onClick={handleWithdraw}
                  disabled={isProcessing}
                  variant="outline"
                  className="flex-shrink-0"
                >
                  <MinusCircle className="h-4 w-4 mr-1" /> Withdraw
                </Button>
              </div>
              <p className="mt-2 text-xs text-white/60 text-center">Withdraw funds from your royal treasury</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
              <History className="h-5 w-5 text-royal-gold" />
              Recent Transactions
            </h3>
            
            {transactions.length > 0 ? (
              <div className="space-y-3">
                {transactions.map((transaction) => (
                  <div 
                    key={transaction.id}
                    className="flex justify-between items-center p-3 bg-black/20 rounded-lg border border-white/5"
                  >
                    <div className="flex items-center">
                      {transaction.type === 'deposit' ? (
                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3">
                          <PlusCircle className="h-5 w-5 text-emerald-500" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-3">
                          <CreditCard className="h-5 w-5 text-amber-500" />
                        </div>
                      )}
                      
                      <div>
                        <p className="font-medium">
                          {transaction.type === 'deposit' ? 'Deposit' : 'Purchase'}
                        </p>
                        <p className="text-xs text-white/60">
                          {transaction.date.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className={`font-medium ${transaction.type === 'deposit' ? 'text-emerald-500' : ''}`}>
                        {transaction.type === 'deposit' ? '+' : '-'}${transaction.amount}
                      </p>
                      <p className="text-xs text-white/60 flex items-center justify-end">
                        {transaction.status} <ExternalLink className="ml-1 h-3 w-3" />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-white/60">
                <p>No transaction history yet</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileWalletView;
