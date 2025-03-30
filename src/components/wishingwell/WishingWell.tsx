
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, CoinIcon, InformationCircleIcon } from 'lucide-react';
import { transactionService } from '@/services';
import { formatCurrency } from '@/utils/formatters';

const WishingWell: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isWishing, setIsWishing] = useState(false);
  
  const handleMakeWish = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You need to be logged in to make a wish.",
        variant: "destructive"
      });
      return;
    }
    
    if ((user.walletBalance || 0) < 5) {
      toast({
        title: "Insufficient Funds",
        description: "You need at least $5 to make a wish.",
        variant: "destructive"
      });
      return;
    }
    
    setIsWishing(true);
    
    try {
      // Record the transaction
      await transactionService.recordTransaction(
        user.id,
        5,
        "wish",
        "Made a wish at the wishing well",
        { source: "wishing_well" }
      );
      
      // Determine if wish granted (70% chance)
      const wishGranted = Math.random() < 0.7;
      
      if (wishGranted) {
        toast({
          title: "Wish Granted!",
          description: "You received a small cosmetic reward.",
        });
      } else {
        toast({
          title: "Wish Not Granted",
          description: "Better luck next time!",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error making wish:", error);
      toast({
        title: "Error",
        description: "Something went wrong with your wish.",
        variant: "destructive"
      });
    } finally {
      setIsWishing(false);
    }
  };
  
  return (
    <Card className="glass-morphism border-white/10 overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-royal-gold" />
          Wishing Well
        </CardTitle>
        <CardDescription>
          Toss a coin and make a wish
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
            <CoinIcon className="h-10 w-10 text-royal-gold" />
          </div>
          
          <p className="text-center mb-4 text-white/70">
            Make a wish by tossing {formatCurrency(5)} into the well. 
            You might receive a cosmetic reward!
          </p>
          
          <div className="flex items-center justify-center mb-4 text-white/60 text-sm">
            <InformationCircleIcon className="h-4 w-4 mr-1" />
            <span>Your balance: {formatCurrency(user?.walletBalance || 0)}</span>
          </div>
          
          <Button
            disabled={isWishing || (user?.walletBalance || 0) < 5}
            onClick={handleMakeWish}
            className="bg-royal-gold text-black hover:bg-royal-gold/90"
          >
            {isWishing ? 'Making Wish...' : 'Make a Wish'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WishingWell;
