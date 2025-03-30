
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Coins, Info } from 'lucide-react';
import { createTransaction } from '@/services/transactionService';
import { formatCurrency } from '@/utils/formatters';
import { UserProfile } from '@/types/user';
import { toast } from '@/hooks/use-toast';

interface WishingWellProps {
  user: UserProfile;
  onWishMade?: (amount: number) => void;
}

const WishingWell: React.FC<WishingWellProps> = ({ user, onWishMade }) => {
  const [amount, setAmount] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const wishAmount = parseFloat(amount);
    
    if (isNaN(wishAmount) || wishAmount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount greater than zero.",
        variant: "destructive"
      });
      return;
    }
    
    if (wishAmount > (user.walletBalance || 0)) {
      toast({
        title: "Insufficient funds",
        description: "You don't have enough funds to make this wish.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create a transaction record
      await createTransaction({
        userId: user.id,
        amount: wishAmount,
        type: 'wish' as any, // Type conversion to match TransactionType
        description: `Made a wish in the Royal Wishing Well`,
        metadata: {
          wishAmount: wishAmount
        }
      });
      
      toast({
        title: "Wish made!",
        description: `You've cast ${formatCurrency(wishAmount)} into the wishing well.`,
        variant: "success"
      });
      
      if (onWishMade) {
        onWishMade(wishAmount);
      }
      
      // Reset the form
      setAmount('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong while making your wish.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="glass-morphism max-w-md mx-auto border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Coins className="h-5 w-5 text-royal-gold" />
          <CardTitle>Royal Wishing Well</CardTitle>
        </div>
        <CardDescription>
          Cast your coins and make a wish. The Royal Court may grant special rewards to generous wishers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 relative">
          <div className="w-full aspect-square relative max-w-[200px] mx-auto">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="relative w-36 h-36">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-blue-600/30"></div>
                <div className="absolute inset-4 rounded-full bg-blue-700/40 flex items-center justify-center">
                  <Coins className="h-12 w-12 text-royal-gold animate-float" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-black/20 p-4 rounded-lg mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Your Balance</span>
            <span className="font-semibold">{formatCurrency(user.walletBalance || 0)}</span>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <Input
                type="number"
                placeholder="Enter amount to wish"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pr-12 glass-input"
                step="0.01"
                min="0.01"
                max={user.walletBalance?.toString() || "0"}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm">
                USD
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-royal-gold hover:bg-royal-gold/90 text-black"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Making wish...' : 'Make a Wish'}
            </Button>
          </form>
        </div>
        
        <div className="flex items-start gap-2 text-sm text-white/70">
          <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <p>Wishes contribute to your total spend and rank on the leaderboard. Special rewards may be granted to those who make generous wishes.</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <style>
          {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          `}
        </style>
      </CardFooter>
    </Card>
  );
};

export default WishingWell;
