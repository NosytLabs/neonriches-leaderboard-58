
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Gem, Coins, Gift, ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import RoyalButton from '@/components/ui/royal-button';
import { UserProfile } from '@/contexts/AuthContext';
import { useAuth } from '@/contexts/AuthContext';
import { spendFromWallet } from '@/services/walletService';
import { useToast } from '@/hooks/use-toast';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import WishHistory from './WishHistory';
import WishingCoin from './WishingCoin';

interface RoyalWishingWellProps {
  currentPool: number;
  recentWishes: Array<{
    username: string;
    amount: number;
    result: string;
    timestamp: string;
  }>;
}

const RoyalWishingWell: React.FC<RoyalWishingWellProps> = ({ 
  currentPool = 5000,
  recentWishes = []
}) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  const [wishAmount, setWishAmount] = useState<number>(5);
  const [isWishing, setIsWishing] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);
  const [wishResult, setWishResult] = useState<'pending' | 'win' | 'lose' | null>(null);
  const [reward, setReward] = useState<number>(0);
  const wellRef = useRef<HTMLDivElement>(null);
  const [coins, setCoins] = useState<Array<{ id: number, x: number, y: number }>>([]);

  const predefinedAmounts = [1, 5, 10, 25, 50, 100];

  const handleSliderChange = (value: number[]) => {
    setWishAmount(value[0]);
  };

  const addCoin = () => {
    if (!wellRef.current) return;
    
    const wellRect = wellRef.current.getBoundingClientRect();
    const centerX = wellRect.width / 2;
    const centerY = wellRect.height / 2;
    
    // Random position within the center circle of the well
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 40; // Radius of distribution
    const x = centerX + Math.cos(angle) * distance;
    const y = centerY + Math.sin(angle) * distance;
    
    setCoins(prev => [...prev, { id: Date.now(), x, y }]);
    
    // Remove coins after animation
    setTimeout(() => {
      setCoins(prev => prev.filter(coin => coin.id !== Date.now()));
    }, 2000);
  };

  const handleWish = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to make a wish.",
        variant: "destructive"
      });
      return;
    }
    
    setIsWishing(true);
    setWishResult('pending');
    addCoin();
    playSound('coinDrop');
    
    try {
      // Process the payment
      const success = await spendFromWallet(
        user,
        wishAmount,
        'wish',
        `Made a wish of $${wishAmount}`,
        { wishAmount }
      );
      
      if (!success) {
        throw new Error("Transaction failed");
      }
      
      // Simulate server delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Determine if the wish is successful based on amount
      // Higher amounts have slightly better odds
      const baseChance = 0.10; // 10% base chance
      const amountBonus = Math.min(0.15, wishAmount * 0.005); // Max 15% bonus based on amount
      const winChance = baseChance + amountBonus;
      
      const isWin = Math.random() < winChance;
      
      if (isWin) {
        // Calculate reward based on wish amount
        const rewardMultiplier = 1.5 + Math.random() * 1.5; // Between 1.5x and 3x
        const calculatedReward = Math.floor(wishAmount * rewardMultiplier);
        setReward(calculatedReward);
        setWishResult('win');
        setResult(`Your wish comes true! You've been granted ${calculatedReward} royal points!`);
        playSound('reward');
        
        // TODO: Add the reward to the user's account
        // This would require a server call in a real implementation
      } else {
        setWishResult('lose');
        setResult("Your wish fades into the ether. Perhaps fortune will favor you next time...");
        playSound('error', 0.3);
      }
    } catch (error) {
      console.error("Wish failed:", error);
      toast({
        title: "Wish Failed",
        description: "There was an error processing your wish.",
        variant: "destructive"
      });
      setWishResult(null);
    } finally {
      setIsWishing(false);
    }
  };

  useEffect(() => {
    // Reset result after a delay
    if (result) {
      const timer = setTimeout(() => {
        setResult(null);
        setWishResult(null);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [result]);

  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center">
          <Gem className="mr-3 h-6 w-6 text-royal-gold" />
          <CardTitle>Royal Wishing Well</CardTitle>
        </div>
        <CardDescription>
          Cast your coins into the mystical well for a chance at fortune
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
          <div className="flex items-center">
            <Coins className="h-5 w-5 text-royal-gold mr-2" />
            <span className="text-sm text-white/70">Current Pool</span>
          </div>
          <span className="text-xl font-bold text-royal-gold font-mono">${currentPool.toLocaleString()}</span>
        </div>
        
        <div className="relative h-80 flex items-center justify-center">
          {/* The Wishing Well */}
          <div 
            ref={wellRef}
            className="relative w-64 h-64 rounded-full border-4 border-royal-gold/30 bg-gradient-to-b from-black to-royal-navy/30 flex items-center justify-center overflow-hidden"
          >
            {/* Water surface */}
            <div className="absolute inset-0 bg-royal-navy/20 backdrop-blur-sm" style={{ top: '15%' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-royal-gold/10 to-royal-navy/20"></div>
            </div>
            
            {/* Sparkles in the well */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <Sparkles
                  key={i}
                  size={12}
                  className="absolute text-royal-gold animate-pulse-slow"
                  style={{
                    top: `${30 + Math.random() * 50}%`,
                    left: `${10 + Math.random() * 80}%`,
                    opacity: 0.6 + Math.random() * 0.4,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
            
            {/* Falling coins animation */}
            {coins.map(coin => (
              <WishingCoin key={coin.id} x={coin.x} y={coin.y} />
            ))}
            
            {/* Result message */}
            {result && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div 
                  className={`p-3 rounded-lg text-center max-w-[90%] backdrop-blur-md border transition-all duration-500 ${
                    wishResult === 'win' 
                      ? 'bg-royal-gold/20 border-royal-gold text-white' 
                      : 'bg-black/50 border-white/20 text-white/90'
                  }`}
                >
                  <p>{result}</p>
                  {wishResult === 'win' && (
                    <Badge className="mt-2 bg-royal-gold text-black">
                      +{reward} Royal Points
                    </Badge>
                  )}
                </div>
              </div>
            )}
            
            {/* Central glow */}
            <div className="absolute w-20 h-20 rounded-full bg-royal-gold/10 filter blur-xl animate-pulse-slow"></div>
            
            {/* Toss coin indicator */}
            <ArrowDownCircle 
              size={48} 
              className={`absolute -top-6 text-royal-gold animate-bounce ${isWishing ? 'opacity-0' : 'opacity-80'}`} 
            />
          </div>
          
          {/* The wish button */}
          {!isWishing && !result && (
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <RoyalButton
                variant="royalGold"
                size="lg"
                className="shadow-lg"
                onClick={handleWish}
                disabled={!user || user.walletBalance < wishAmount}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Make a Wish
              </RoyalButton>
            </div>
          )}
          
          {isWishing && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-16 w-16 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm">
                <div className="h-8 w-8 border-4 border-t-transparent border-royal-gold rounded-full animate-spin"></div>
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-white/70">Wish Amount:</span>
              <span className="text-sm font-bold">${wishAmount}</span>
            </div>
            <Slider 
              value={[wishAmount]} 
              min={1} 
              max={100} 
              step={1} 
              onValueChange={handleSliderChange} 
              className="my-4"
            />
            <div className="grid grid-cols-6 gap-2 mt-3">
              {predefinedAmounts.map(amount => (
                <Button
                  key={amount}
                  variant="outline"
                  size="sm"
                  className={`glass-morphism ${
                    wishAmount === amount 
                      ? 'border-royal-gold text-royal-gold' 
                      : 'border-white/10 text-white/70'
                  }`}
                  onClick={() => setWishAmount(amount)}
                >
                  ${amount}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="p-3 bg-black/20 rounded-lg text-sm">
            <p className="flex items-center text-white/70 mb-2">
              <Gift size={16} className="text-royal-gold mr-2" />
              <span>Higher wishes may increase your chances of receiving blessings!</span>
            </p>
            <p className="text-white/50">
              All wishes contribute to the kingdom's treasury and glory.
            </p>
          </div>
        </div>
        
        <WishHistory recentWishes={recentWishes} />
      </CardContent>
    </Card>
  );
};

export default RoyalWishingWell;
