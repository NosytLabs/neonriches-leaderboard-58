import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Coins, Gift } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { CosmeticItem } from '@/types/cosmetics';
import WishResultModal from './WishResultModal';

export type WishResultType = 'success' | 'failure' | 'jackpot';

interface EnhancedWishingWellProps {
  className?: string;
}

const EnhancedWishingWell: React.FC<EnhancedWishingWellProps> = ({ className }) => {
  const { toast } = useToast();
  const { user, updateUser } = useAuth();
  const [isWishing, setIsWishing] = useState<boolean>(false);
  const [wishAmount, setWishAmount] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [wishResult, setWishResult] = useState<WishResultType>('failure');
  const [winAmount, setWinAmount] = useState<number>(0);
  const [rewardItem, setRewardItem] = useState<CosmeticItem | null>(null);
  
  // Sample cosmetic rewards
  const cosmeticRewards: CosmeticItem[] = [
    {
      id: 'golden-border',
      name: 'Golden Border',
      description: 'A luxurious golden border for your profile',
      price: 50,
      category: 'border',
      cssClass: 'border-golden',
      rarity: 'rare',
      type: 'border',
      image: '/images/cosmetics/golden-border.png',
      enabled: true
    },
    {
      id: 'royal-purple',
      name: 'Royal Purple Theme',
      description: 'The color of royalty',
      price: 75,
      category: 'color',
      cssClass: 'theme-royal-purple',
      rarity: 'epic',
      type: 'color',
      image: '/images/cosmetics/royal-purple.png',
      enabled: true
    },
    {
      id: 'sparkling-aura',
      name: 'Sparkling Aura',
      description: 'A dazzling effect that surrounds your profile',
      price: 100,
      category: 'effect',
      cssClass: 'effect-sparkling',
      rarity: 'legendary',
      type: 'effect',
      image: '/images/cosmetics/sparkling-aura.png',
      enabled: true
    },
    {
      id: 'border-royal',
      name: 'Royal Border',
      description: 'A magnificent royal border for your profile',
      price: 100,
      category: 'border',
      cssClass: 'border-royal',
      rarity: 'rare',
      type: 'border',
      image: '/images/cosmetics/royal-border.png',
      enabled: true
    },
    {
      id: 'color-mythic',
      name: 'Mythic Aura',
      description: 'A mythical purple aura for your name',
      price: 150,
      category: 'color',
      cssClass: 'text-mythic',
      rarity: 'epic',
      type: 'color',
      image: '/images/cosmetics/mythic-aura.png',
      enabled: true
    },
    {
      id: 'effect-stardust',
      name: 'Stardust Trail',
      description: 'Leave a trail of stardust as you move',
      price: 200,
      category: 'effect',
      cssClass: 'effect-stardust',
      rarity: 'legendary',
      type: 'effect',
      image: '/images/cosmetics/stardust-trail.png',
      enabled: true
    }
  ];
  
  const makeWish = () => {
    if (!user) {
      toast({
        title: "Please log in",
        description: "You must be logged in to use the Wishing Well",
      });
      return;
    }
    
    if (wishAmount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to wish"
      });
      return;
    }
    
    if (user.walletBalance < wishAmount) {
      toast({
        title: "Insufficient Funds",
        description: "You don't have enough funds to make this wish"
      });
      return;
    }
    
    setIsWishing(true);
    
    // Simulate API call
    setTimeout(() => {
      const random = Math.random();
      
      // Update user balance
      if (user && updateUser) {
        updateUser({
          walletBalance: user.walletBalance - wishAmount
        });
      }
      
      // Determine outcome
      if (random < 0.1) {
        // Jackpot - win a cosmetic item
        const randomItemIndex = Math.floor(Math.random() * cosmeticRewards.length);
        const reward = cosmeticRewards[randomItemIndex];
        setRewardItem(reward);
        setWishResult('jackpot');
        
        // Add item to user's cosmetics if possible
        if (user && updateUser && user.cosmetics) {
          const category = reward.category as keyof typeof user.cosmetics;
          const updatedCosmetics = { ...user.cosmetics };
          
          if (Array.isArray(updatedCosmetics[category])) {
            // @ts-ignore - We've already checked it's an array
            updatedCosmetics[category] = [...updatedCosmetics[category], reward.id];
            updateUser({ cosmetics: updatedCosmetics });
          }
        }
        
        toast({
          title: "Incredible Fortune!",
          description: `You've won a rare ${reward.name}!`,
          variant: "success"
        });
      } 
      else if (random < 0.4) {
        // Success - win some money
        const multiplier = 1 + Math.random();
        const amount = Math.floor(wishAmount * multiplier);
        setWishResult('success');
        setWinAmount(amount);
        
        // Update user balance
        if (user && updateUser) {
          updateUser({
            walletBalance: user.walletBalance + amount
          });
        }
        
        toast({
          title: "Wish Granted!",
          description: `You've won $${amount}!`,
          variant: "success"
        });
      } 
      else {
        // Failure - lose money
        setWishResult('failure');
        
        toast({
          title: "Wish Denied",
          description: "The well has taken your offering, but granted no wish.",
          variant: "destructive"
        });
      }
      
      setShowResult(true);
      setIsWishing(false);
    }, 1500);
  };
  
  const handleModalClose = () => {
    setShowResult(false);
    setWishAmount(0);
    setRewardItem(null);
  };
  
  return (
    <Card className={`glass-morphism border-royal-blue/20 ${className}`}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-royal-gold" />
          Royal Wishing Well
        </CardTitle>
        <CardDescription>
          Toss your coins into the magical well and receive fortunes beyond your imagination
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="relative rounded-lg overflow-hidden mb-6">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/30 to-royal-purple/30 z-10" />
          
          <div className="relative z-20 py-8 px-4 text-center">
            <div className="w-24 h-24 rounded-full bg-royal-gold/20 flex items-center justify-center mx-auto mb-4">
              <Coins className="h-12 w-12 text-royal-gold" />
            </div>
            
            <h3 className="text-lg font-semibold mb-1">Cast Your Wish</h3>
            <p className="text-sm text-white/70 max-w-md mx-auto mb-4">
              The magic of the well grows stronger with larger offerings. Rare treasures await the most generous nobles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-xs mx-auto">
              <div className="relative w-full">
                <input
                  type="number"
                  value={wishAmount}
                  onChange={(e) => setWishAmount(parseFloat(e.target.value) || 0)}
                  className="bg-black/20 border border-royal-blue/30 rounded-lg px-4 py-2 w-full text-center"
                  placeholder="Amount"
                  min="1"
                  max={user?.walletBalance || 9999}
                />
                <span className="absolute left-3 top-2.5 text-white/50">$</span>
              </div>
              
              <Button
                onClick={makeWish}
                disabled={isWishing || wishAmount <= 0 || (user ? wishAmount > user.walletBalance : true)}
                className="bg-royal-gold text-black hover:bg-royal-gold/90 min-w-[120px]"
              >
                {isWishing ? (
                  <span className="flex items-center">
                    <span className="animate-pulse">Wishing...</span>
                  </span>
                ) : (
                  "Make a Wish"
                )}
              </Button>
            </div>
            
            <div className="flex justify-between text-xs text-white/60 mt-2 px-2 max-w-xs mx-auto">
              <button 
                className="hover:text-white transition-colors" 
                onClick={() => user && setWishAmount(5)}
              >
                $5
              </button>
              <button 
                className="hover:text-white transition-colors" 
                onClick={() => user && setWishAmount(10)}
              >
                $10
              </button>
              <button 
                className="hover:text-white transition-colors" 
                onClick={() => user && setWishAmount(25)}
              >
                $25
              </button>
              <button 
                className="hover:text-white transition-colors" 
                onClick={() => user && setWishAmount(50)}
              >
                $50
              </button>
              <button 
                className="hover:text-white transition-colors" 
                onClick={() => user && setWishAmount(100)}
              >
                $100
              </button>
              <button 
                className="hover:text-white transition-colors" 
                onClick={() => user && user.walletBalance && setWishAmount(user.walletBalance)}
              >
                All
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-white/60">
          <h4 className="font-medium text-white mb-2 flex items-center">
            <Gift className="h-4 w-4 mr-1 text-royal-gold" />
            Possible Rewards
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Regular Wins: 1-2x your wished amount</li>
            <li>Rare Cosmetics: Exclusive profile enhancements</li>
            <li>Special Titles: Unique titles to display your luck</li>
          </ul>
          <p className="mt-3 text-xs italic">
            The well favors the brave. Higher wishes have greater chances of special rewards.
          </p>
        </div>
      </CardContent>
      
      {showResult && rewardItem && wishResult === 'jackpot' && (
        <WishResultModal
          isOpen={showResult}
          onClose={handleModalClose}
          title="Incredible Fortune!"
          description={`You've received a rare ${rewardItem.name}!`}
          resultType="jackpot"
          cosmeticItem={rewardItem}
        />
      )}
      
      {showResult && wishResult === 'success' && (
        <WishResultModal
          isOpen={showResult}
          onClose={handleModalClose}
          title="Wish Granted!"
          description="The well has smiled upon you and multiplied your offering."
          resultType="success"
          amount={wishAmount}
          winAmount={winAmount}
        />
      )}
      
      {showResult && wishResult === 'failure' && (
        <WishResultModal
          isOpen={showResult}
          onClose={handleModalClose}
          title="Wish Denied"
          description="The well has taken your offering, but granted no wish."
          resultType="failure"
          amount={wishAmount}
        />
      )}
    </Card>
  );
};

export default EnhancedWishingWell;
