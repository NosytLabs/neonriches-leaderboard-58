
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
        title: "Royal Treasury Expanded",
        description: `${amount} gold has been added to your royal purse.`
      });
    }
    
    return success;
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-royal royal-gradient flex items-center">
          <Coins size={18} className="text-royal-gold mr-2" />
          Royal Purse
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <p className="text-white/70">Available Balance:</p>
            <div className="flex items-center">
              <span className="text-2xl font-mono font-bold text-royal-gold">${user.walletBalance || 0}</span>
              <Badge variant="outline" className="ml-2 bg-white/5">Royal Credits</Badge>
            </div>
          </div>
          
          <p className="text-xs text-white/50 mt-2">
            Use your royal purse to fund your shamings, advertisements, and royal contributions
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <PaymentModal
            title="Add Funds to Royal Purse"
            description="Add gold to your royal purse to use throughout the kingdom."
            amount={50}
            onSuccess={handleAddFunds}
            trigger={
              <Button variant="outline" className="glass-morphism border-royal-gold/20 hover:bg-royal-gold/10 text-white">
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
            <ArrowUp size={16} className="text-royal-gold mr-2" />
            <span className="text-sm text-white/70">Lifetime Spent:</span>
          </div>
          <span className="font-mono font-semibold">${user.amountSpent || 0}</span>
        </div>
        
        <div className="mt-3 bg-white/5 rounded-lg p-3 flex flex-col text-xs text-white/60">
          <div className="flex items-center mb-1">
            <CreditCard size={12} className="text-royal-gold mr-1" />
            <span>All transactions are final and non-refundable</span>
          </div>
          <p>Funds in your royal purse can only be used within the kingdom.</p>
        </div>
      </CardContent>
      
      <Dialog open={showHistory} onOpenChange={setShowHistory}>
        <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="royal-gradient">Royal Transaction History</DialogTitle>
          </DialogHeader>
          <TransactionHistory userId={user.id} />
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default UserWallet;
