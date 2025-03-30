
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Coins, Info } from 'lucide-react';
import { useAuth } from '@/contexts';
import { useToast } from '@/hooks/use-toast';
import { CosmeticItem } from '@/types/cosmetics';
import WishResultModal, { WishResultType } from './WishResultModal';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { motion, AnimatePresence } from 'framer-motion';
import { formatCurrency } from '@/utils/formatters';

// Mock function to simulate wishing
const makeWish = async (userId: string, amount: number) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // 70% chance of common, 20% chance of rare, 10% chance of legendary
  const rand = Math.random();
  const success = true;
  let rarity = 'common';
  let reward: CosmeticItem = {
    id: 'coin-border',
    name: 'Coin Border',
    description: 'A border made of shining coins to show off your wealth.',
    price: 0,
    category: 'borders',
    rarity: 'common',
    cssClass: 'border-coin'
  };
  
  if (rand > 0.9) {
    rarity = 'legendary';
    reward = {
      id: 'royal-crown',
      name: 'Royal Crown',
      description: 'A majestic crown fit for royalty.',
      price: 0,
      category: 'borders',
      rarity: 'legendary',
      cssClass: 'border-crown'
    };
  } else if (rand > 0.7) {
    rarity = 'rare';
    reward = {
      id: 'gem-sparkle',
      name: 'Gem Sparkle',
      description: 'Add a sparkling gem effect to your profile.',
      price: 0,
      category: 'effects',
      rarity: 'rare',
      cssClass: 'effect-sparkle'
    };
  }
  
  return { success, reward, rarity };
};

const EnhancedWishingWell: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isWishing, setIsWishing] = useState(false);
  const [coins, setCoins] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [wishResult, setWishResult] = useState<WishResultType>('success');
  const [reward, setReward] = useState<CosmeticItem | null>(null);
  const [rarity, setRarity] = useState('common');
  const coinContainerRef = useRef<HTMLDivElement>(null);
  const { playSound } = useNotificationSounds();
  
  const handleWish = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to make a wish.",
        variant: "destructive"
      });
      return;
    }
    
    if ((user.walletBalance || 0) < 10) {
      toast({
        title: "Insufficient Funds",
        description: "You need at least $10 to make a wish.",
        variant: "destructive"
      });
      return;
    }
    
    setIsWishing(true);
    playCoinAnimation();
    playSound('coins');
    
    try {
      const result = await makeWish(user.id, 10);
      
      if (result.success) {
        setWishResult('success');
        setReward(result.reward);
        setRarity(result.rarity);
        
        // Show result after coin animation finishes
        setTimeout(() => {
          setShowResult(true);
          
          if (result.rarity === 'legendary') {
            setWishResult('jackpot');
            playSound('trumpets');
          } else {
            playSound('success');
          }
        }, 2000);
        
        toast({
          title: "Wish Granted!",
          description: `You received a ${result.rarity} reward: ${result.reward.name}`,
        });
      } else {
        setWishResult('failure');
        setShowResult(true);
        playSound('error');
        
        toast({
          title: "Wish Failed",
          description: "The well didn't grant your wish this time.",
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
      setTimeout(() => {
        setIsWishing(false);
      }, 2000);
    }
  };
  
  const playCoinAnimation = () => {
    if (!coinContainerRef.current) return;
    
    const containerWidth = coinContainerRef.current.offsetWidth;
    const numCoins = 20;
    const newCoins = [];
    
    for (let i = 0; i < numCoins; i++) {
      newCoins.push(Math.floor(Math.random() * containerWidth));
    }
    
    setCoins(newCoins);
    
    // Clear coins after animation
    setTimeout(() => {
      setCoins([]);
    }, 2000);
  };
  
  const handleCloseResult = () => {
    setShowResult(false);
    setReward(null);
  };
  
  return (
    <div className="relative">
      <Card className="glass-morphism border-white/10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/wishing-well-bg.jpg')" }}
        />
        
        <div className="relative z-10">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-royal-gold" />
              Royal Wishing Well
            </CardTitle>
          </CardHeader>
          
          <CardContent className="text-center">
            <div className="rounded-full w-48 h-48 mx-auto bg-gradient-to-br from-blue-900/40 to-black/40 border border-white/10 flex items-center justify-center mb-6 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-blue-500/20 animate-pulse" />
              </div>
              
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-royal-gold/20 to-royal-gold/5 flex items-center justify-center z-10 relative border border-royal-gold/30">
                <Sparkles className="h-12 w-12 text-royal-gold animate-pulse" />
              </div>
              
              <div 
                ref={coinContainerRef}
                className="absolute inset-0 overflow-hidden"
              >
                <AnimatePresence>
                  {coins.map((left, index) => (
                    <motion.div
                      key={`coin-${index}`}
                      initial={{ y: -20, x: left, opacity: 1 }}
                      animate={{ y: 200, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, ease: "easeIn" }}
                      className="absolute"
                    >
                      <Coins className="h-6 w-6 text-royal-gold" />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            
            <div className="space-y-4 max-w-md mx-auto">
              <h3 className="text-xl font-bold">Make a Wish</h3>
              
              <p className="text-white/70">
                Toss a coin into the wishing well and receive a random cosmetic reward. 
                Each wish costs {formatCurrency(10)}.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-white/60 text-sm">
                <Info className="h-4 w-4" />
                <span>Your wallet balance: {formatCurrency(user?.walletBalance || 0)}</span>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-center">
            <Button
              disabled={isWishing || (user?.walletBalance || 0) < 10}
              onClick={handleWish}
              className={`text-black transition-all duration-300 ${isWishing ? 'bg-gray-400' : 'bg-royal-gold hover:bg-royal-gold/90'}`}
            >
              {isWishing ? 'Making Wish...' : 'Make a Wish'}
            </Button>
          </CardFooter>
        </div>
      </Card>
      
      {reward && (
        <WishResultModal
          open={showResult}
          onOpenChange={setShowResult}
          result={wishResult}
          reward={reward}
          rarity={rarity}
          title={wishResult === 'jackpot' ? 'Incredible Fortune!' : 
                wishResult === 'success' ? 'Wish Granted!' : 'Better Luck Next Time'}
          message={wishResult === 'jackpot' ? 'You received an extremely rare reward!' : 
                  wishResult === 'success' ? 'The wishing well has blessed you with a gift.' : 
                  'Your coin sank into the well, but no reward appeared.'}
          onClose={handleCloseResult}
        />
      )}
    </div>
  );
};

export default EnhancedWishingWell;
