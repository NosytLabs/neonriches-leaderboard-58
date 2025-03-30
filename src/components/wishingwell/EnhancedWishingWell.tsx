import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Coins, TrendingUp, Star, Sparkles, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSound } from '@/hooks/sounds/use-sound'; 
import useWishingWell from '@/hooks/use-wishing-well';
import { UserProfile } from '@/types/user';
import WishResultModal from './WishResultModal';
import { CosmeticItem } from '@/types/cosmetics';

interface EnhancedWishingWellProps {
  user: UserProfile;
}

type WishResultType = 'win' | 'lose' | 'pending';

interface WishResult {
  type: WishResultType;
  title: string;
  message: string;
  reward?: CosmeticItem;
  rarity?: string;
}

const EnhancedWishingWell: React.FC<EnhancedWishingWellProps> = ({ user }) => {
  const [isWishing, setIsWishing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [wishResult, setWishResult] = useState<WishResult | null>(null);
  const [coins, setCoins] = useState<number[]>([]);
  
  const { makeWish, hasWishAvailable, wishesRemaining } = useWishingWell();
  
  const { play: playSound } = useSound();
  
  const handleWish = async () => {
    if (!hasWishAvailable) return;
    
    setIsWishing(true);
    playSound('coinDrop');
    
    // Generate falling coins animation
    const newCoins = Array.from({ length: 20 }, (_, i) => i);
    setCoins(newCoins);
    
    // Simulate wish processing
    setTimeout(async () => {
      const result = makeWish(user.id);
      
      if (result.success) {
        playSound('success');
        
        setWishResult({
          type: 'win',
          title: "Your wish was granted!",
          message: "You've received a special cosmetic reward!",
          reward: result.reward,
          rarity: result.rarity
        });
      } else {
        playSound('error');
        
        setWishResult({
          type: 'lose',
          title: "Your wish wasn't granted this time",
          message: "Try again tomorrow for another chance at magical rewards!"
        });
      }
      
      setIsWishing(false);
      setShowResults(true);
    }, 2500);
  };
  
  const handleCloseResults = () => {
    setShowResults(false);
    setWishResult(null);
  };
  
  return (
    <>
      <Card className="glass-morphism overflow-hidden relative border-purple-400/20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-indigo-500/5 pointer-events-none z-0"></div>
        
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-purple-600/30">
              <Star className="h-5 w-5 text-yellow-300" />
            </div>
            <div>
              <CardTitle>Royal Wishing Well</CardTitle>
              <CardDescription>Cast your coins and make a wish for magical rewards</CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pb-0">
          <div className="relative h-60 rounded-lg overflow-hidden bg-gradient-to-b from-indigo-900/40 to-purple-900/40 border border-white/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('/assets/stars.svg')] opacity-20 animate-twinkle"></div>
            
            <div className="text-center z-10 relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 mx-auto mb-4 flex items-center justify-center shadow-xl shadow-purple-500/20">
                <Sparkles className={`h-12 w-12 text-yellow-200 ${isWishing ? 'animate-spin-slow' : 'animate-pulse'}`} />
              </div>
              
              <p className="text-purple-100 mb-6">
                {hasWishAvailable
                  ? "Make a wish and perhaps fortune will smile upon you"
                  : "You've used all your wishes for today"}
              </p>
              
              <AnimatePresence>
                {isWishing && coins.map((i) => (
                  <motion.div
                    key={`coin-${i}`}
                    initial={{ y: -50, x: Math.random() * 200 - 100, opacity: 1, scale: 0.5 + Math.random() * 0.5 }}
                    animate={{ 
                      y: 150, 
                      opacity: 0,
                      transition: { 
                        duration: 1 + Math.random() * 1.5, 
                        ease: "easeIn" 
                      }
                    }}
                    className="absolute top-0 left-1/2"
                  >
                    <Coins className="h-5 w-5 text-yellow-300" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col sm:flex-row items-center justify-between pt-6 pb-6">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <Crown className="h-5 w-5 text-yellow-400" />
            <span className="text-sm text-purple-100">
              {hasWishAvailable
                ? `Wishes remaining: ${wishesRemaining}`
                : "Return tomorrow for more wishes"}
            </span>
          </div>
          
          <Button 
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            onClick={handleWish}
            disabled={!hasWishAvailable || isWishing}
          >
            {isWishing ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                Wishing...
              </>
            ) : (
              <>Make a Wish</>
            )}
          </Button>
        </CardFooter>
      </Card>
      
      {wishResult && (
        <WishResultModal
          open={showResults}
          onOpenChange={setShowResults}
          result={wishResult.type}
          reward={wishResult.reward}
          rarity={wishResult.rarity}
          title={wishResult.title}
          message={wishResult.message}
          onClose={handleCloseResults}
        />
      )}
    </>
  );
};

export default EnhancedWishingWell;
