
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Coins, Plus, History, ArrowUp, CreditCard } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/contexts/AuthContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import TransactionHistory from './TransactionHistory';
import PaymentModal from '@/components/PaymentModal';

interface UserWalletProps {
  user: UserProfile;
  onFundWallet: (amount: number) => Promise<boolean>;
}

const UserWallet: React.FC<UserWalletProps> = ({ user, onFundWallet }) => {
  const [showHistory, setShowHistory] = useState(false);
  const { toast } = useToast();
  
  const handleAddFunds = async (amount: number) => {
    const success = await onFundWallet(amount);
    
    if (success) {
      toast({
        title: "Funds Added Successfully",
        description: `$${amount} has been added to your balance.`
      });
    }
    
    return success;
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-royal royal-gradient flex items-center">
          <Coins size={18} className="text-purple-400 mr-2" />
          Your Balance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <p className="text-white/70">Available Balance:</p>
            <div className="flex items-center">
              <span className="text-2xl font-mono font-bold text-purple-400">${user.walletBalance || 0}</span>
              <Badge variant="outline" className="ml-2 bg-white/5">Credits</Badge>
            </div>
          </div>
          
          <p className="text-xs text-white/50 mt-2">
            Use your balance to enhance your profile, buy cosmetics, and increase your visibility
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <PaymentModal
            title="Add Funds to Balance"
            description="Add funds to use throughout the site."
            amount={50}
            onSuccess={handleAddFunds}
            trigger={
              <Button variant="outline" className="glass-morphism border-purple-400/20 hover:bg-purple-400/10 text-white">
                <Plus size={16} className="mr-2" />
                Add Funds
              </Button>
            }
          />
          
          <Button 
            variant="outline" 
            className="glass-morphism border-white/10 hover:bg-white/10 text-white"
            onClick={() => setShowHistory(true)}
          >
            <History size={16} className="mr-2" />
            Transaction History
          </Button>
        </div>
        
        <div className="mt-4 bg-white/5 rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center">
            <ArrowUp size={16} className="text-purple-400 mr-2" />
            <span className="text-sm text-white/70">Lifetime Spent:</span>
          </div>
          <span className="font-mono font-semibold">${user.amountSpent || 0}</span>
        </div>
        
        <div className="mt-3 bg-white/5 rounded-lg p-3 flex flex-col text-xs text-white/60">
          <div className="flex items-center mb-1">
            <CreditCard size={12} className="text-purple-400 mr-1" />
            <span>All transactions are final and non-refundable</span>
          </div>
          <p>Funds are used exclusively for profile enhancements and cosmetics.</p>
        </div>
      </CardContent>
      
      <Dialog open={showHistory} onOpenChange={setShowHistory}>
        <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="royal-gradient">Transaction History</DialogTitle>
          </DialogHeader>
          <TransactionHistory userId={user.id} />
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default UserWallet;
