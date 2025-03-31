
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, History, Coins } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { formatCurrency } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

export interface RoyalWishingWellProps {
  currentPool: number;
  recentWishes: Array<{
    username: string;
    amount: number;
    result: string;
    timestamp: string;
  }>;
}

const RoyalWishingWell: React.FC<RoyalWishingWellProps> = ({ currentPool, recentWishes }) => {
  const [wishAmount, setWishAmount] = useState('');
  const [isWishing, setIsWishing] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
  
  const handleWish = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to make a wish.",
        variant: "destructive"
      });
      return;
    }
    
    const amount = parseFloat(wishAmount);
    
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid Wish Amount",
        description: "Please enter a valid amount greater than zero.",
        variant: "destructive"
      });
      return;
    }
    
    if (amount > 100) {
      toast({
        title: "Wish Amount Exceeded",
        description: "The maximum wish amount is 100.",
        variant: "destructive"
      });
      return;
    }
    
    setIsWishing(true);
    
    // Simulate wish processing with fixed outcome
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Fixed outcome - 50% win rate
    const success = amount > 50 ? true : false;
    
    if (success) {
      const winnings = amount * 1.5; // Fixed reward calculation
      toast({
        title: "Your Wish Came True!",
        description: `You wished ${formatCurrency(amount)} and won ${formatCurrency(winnings)}!`,
      });
    } else {
      toast({
        title: "Alas, Your Wish Was Not Granted",
        description: `You wished ${formatCurrency(amount)} but the well demands a greater sacrifice.`,
        variant: "destructive"
      });
    }
    
    setIsWishing(false);
    setWishAmount('');
  };

  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center">
          <Sparkles className="mr-3 h-6 w-6 text-royal-gold" />
          <CardTitle>Royal Wishing Well</CardTitle>
        </div>
        <CardDescription>
          Cast your desires into the mystical well
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-white/70">Current Pool:</p>
          <span className="font-medium text-royal-gold">{formatCurrency(currentPool)}</span>
        </div>
        
        <div className="flex space-x-2">
          <Input 
            type="number" 
            placeholder="Enter wish amount (max 100)" 
            value={wishAmount}
            onChange={(e) => setWishAmount(e.target.value)}
            disabled={isWishing}
          />
          <Button onClick={handleWish} disabled={isWishing}>
            {isWishing ? (
              <motion.div
                className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"
                animate={{ rotate: 360 }}
                transition={{ loop: Infinity, duration: 1 }}
              />
            ) : "Make a Wish"}
          </Button>
        </div>
      </CardContent>
      
      <CardFooter>
        <div className="w-full">
          <h4 className="mb-2 flex items-center text-sm font-medium">
            <History className="mr-2 h-4 w-4" />
            Recent Wishes
          </h4>
          
          <ul className="space-y-2">
            {recentWishes.map((wish, index) => (
              <li key={index} className="flex items-center justify-between text-xs">
                <div className="flex items-center">
                  <Coins className="mr-2 h-3 w-3 text-yellow-500" />
                  <span className="font-medium">{wish.username}</span>
                </div>
                
                <div className="text-right">
                  <span className="text-white/60">{formatCurrency(wish.amount)}</span>
                  <span className="ml-1 text-green-500">{wish.result}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RoyalWishingWell;
