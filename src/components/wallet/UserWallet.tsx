
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wallet, CreditCard, ArrowUpRight, DollarSign, Database, Clock } from 'lucide-react';
import RoyalButton from '@/components/ui/royal-button';
import TransactionHistory from './TransactionHistory';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { formatCurrency } from '@/utils/formatters';
import { UserProfile } from '@/types/user';

interface UserWalletProps {
  userId?: string;
}

const UserWallet: React.FC<UserWalletProps> = ({ userId }) => {
  const { user, updateUserProfile } = useAuth();
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  const [amount, setAmount] = useState<number>(10);
  const [isLoading, setIsLoading] = useState(false);

  const walletBalance = user?.walletBalance || 0;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setAmount(value);
    }
  };

  const handleDepositAmountSelect = (value: string) => {
    setAmount(parseFloat(value));
  };

  const handleAddFunds = async () => {
    if (amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to add to your wallet.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // In a real app, this would call an API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update user balance
      if (user) {
        const newBalance = (user.walletBalance || 0) + amount;
        
        await updateUserProfile({
          ...user,
          walletBalance: newBalance
        });
        
        playSound('coinDrop', 0.5);
        
        toast({
          title: "Funds Added",
          description: `$${amount.toFixed(2)} has been added to your wallet.`,
          variant: "success"
        });
      }
    } catch (error) {
      console.error('Error adding funds:', error);
      toast({
        title: "Transaction Failed",
        description: "There was an error processing your deposit.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }

    return Promise.resolve();
  };

  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-royal-gold/20">
        <CardHeader>
          <div className="flex items-center">
            <Wallet className="mr-3 h-6 w-6 text-royal-gold" />
            <CardTitle>Royal Treasury</CardTitle>
          </div>
          <CardDescription>
            Manage your funds for nobility purchases
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="bg-black/40 p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-white/70">Current Balance</p>
              <p className="text-2xl font-bold text-royal-gold">{formatCurrency(walletBalance)}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-royal-gold/10 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-royal-gold" />
            </div>
          </div>

          <div className="p-4 rounded-lg bg-black/20 border border-white/5">
            <h3 className="text-lg font-medium mb-3">Add Funds</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <Button
                variant="outline"
                className={amount === 5 ? "border-royal-gold text-royal-gold" : ""}
                onClick={() => setAmount(5)}
              >
                $5
              </Button>
              <Button
                variant="outline"
                className={amount === 10 ? "border-royal-gold text-royal-gold" : ""}
                onClick={() => setAmount(10)}
              >
                $10
              </Button>
              <Button
                variant="outline"
                className={amount === 25 ? "border-royal-gold text-royal-gold" : ""}
                onClick={() => setAmount(25)}
              >
                $25
              </Button>
              <Button
                variant="outline"
                className={amount === 50 ? "border-royal-gold text-royal-gold" : ""}
                onClick={() => setAmount(50)}
              >
                $50
              </Button>
              <Button
                variant="outline"
                className={amount === 100 ? "border-royal-gold text-royal-gold" : ""}
                onClick={() => setAmount(100)}
              >
                $100
              </Button>
              <Button
                variant="outline"
                className={amount === 500 ? "border-royal-gold text-royal-gold" : ""}
                onClick={() => setAmount(500)}
              >
                $500
              </Button>
            </div>

            <div className="flex items-end gap-3">
              <div className="flex-1">
                <label htmlFor="amount" className="text-sm text-white/70 mb-1 block">
                  Custom Amount
                </label>
                <Input
                  id="amount"
                  type="number"
                  min="1"
                  step="1"
                  value={amount}
                  onChange={handleAmountChange}
                  className="glass-morphism border-white/10"
                />
              </div>
              <RoyalButton
                onClick={handleAddFunds}
                variant="royalGold"
                disabled={isLoading}
                className="whitespace-nowrap"
              >
                <CreditCard className="mr-2 h-4 w-4" />
                {isLoading ? "Processing..." : "Add Funds"}
              </RoyalButton>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
              <Database className="h-3 w-3" />
              <span>Your payment information is processed securely</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-white/60" />
              <h3 className="text-lg font-medium">Recent Transactions</h3>
            </div>
            <Button variant="ghost" size="sm">
              <span className="mr-1">View All</span>
              <ArrowUpRight className="h-3 w-3" />
            </Button>
          </div>

          <TransactionHistory limit={5} />
        </CardContent>
      </Card>
    </div>
  );
};

export default UserWallet;
