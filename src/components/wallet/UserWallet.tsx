
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserProfile } from '@/types/user';
import { formatCurrency } from '@/utils/formatters';
import { Coins, CreditCard, History, PlusCircle, TrendingUp } from 'lucide-react';

interface UserWalletProps {
  user: UserProfile;
  onFundWallet: (amount: number) => Promise<void>;
}

const UserWallet: React.FC<UserWalletProps> = ({ user, onFundWallet }) => {
  const [amount, setAmount] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };
  
  const handleFundWallet = async () => {
    setIsLoading(true);
    await onFundWallet(amount);
    setIsLoading(false);
  };
  
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center">
          <Coins className="mr-3 h-6 w-6 text-royal-gold" />
          <CardTitle>Royal Treasury</CardTitle>
        </div>
        <CardDescription>
          Your noble wealth for climbing the ranks
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-black/20 rounded-lg flex items-center justify-between">
          <span className="text-sm text-white/70">Current Balance</span>
          <span className="text-xl font-bold royal-gradient font-mono">{formatCurrency(user.walletBalance)}</span>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm text-white/70">Add Funds</label>
          <div className="flex items-center space-x-2">
            <Input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              min={1}
              className="focus-visible:ring-royal-gold/50"
            />
            <Button 
              onClick={handleFundWallet}
              disabled={isLoading || amount <= 0}
              className="bg-royal-gold hover:bg-royal-gold/90 text-black"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 border-2 border-t-transparent border-black rounded-full animate-spin"></div>
                  <span>Processing</span>
                </div>
              ) : (
                <>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Fund
                </>
              )}
            </Button>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-white/70">
            <TrendingUp className="h-4 w-4 mr-1 text-royal-gold" />
            <span>Total Spent: {formatCurrency(user.amountSpent || 0)}</span>
          </div>
          
          <Button variant="ghost" size="sm" className="text-royal-gold hover:text-royal-gold/80 hover:bg-royal-gold/10">
            <History className="h-4 w-4 mr-1" />
            History
          </Button>
        </div>
        
        <div className="p-2 bg-black/20 rounded text-xs text-white/50 italic text-center">
          <CreditCard className="inline h-3 w-3 mr-1" />
          All transactions are processed securely with military-grade encryption
        </div>
      </CardContent>
    </Card>
  );
};

export { UserWallet };
export default UserWallet;
