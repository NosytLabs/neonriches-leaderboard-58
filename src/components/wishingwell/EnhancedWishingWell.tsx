import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Sparkles, Coins, Gift, ChevronsUp, Award, Crown } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/auth';
import { spendFromWallet } from '@/services/walletService';
import { getRarityColor, getRarityBgColor, getRarityBorderColor } from '@/utils/cosmetics';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import useWishingWell from '@/hooks/use-wishing-well';

interface EnhancedWishingWellProps {
  cost: number;
  baseChance: number;
  jackpotChance: number;
  guaranteedPulls: number;
  onWish: () => void;
}

const EnhancedWishingWell: React.FC<EnhancedWishingWellProps> = ({
  cost,
  baseChance,
  jackpotChance,
  guaranteedPulls,
  onWish
}) => {
  const { toast } = useToast();
  const { user } = useAuth();
  const { playSound } = useNotificationSounds();
  const {
    isWishing,
    wishResult,
    wishError,
    pullCount,
    canWish,
    handleWish,
    resetWish
  } = useWishingWell(cost, baseChance, jackpotChance, guaranteedPulls);
  
  useEffect(() => {
    if (wishResult) {
      toast({
        title: "Royal Fortune Granted!",
        description: wishResult.message,
        className: getRarityBgColor(wishResult.rarity),
      });
      playSound('win');
      onWish();
    }
    
    if (wishError) {
      toast({
        title: "Wishing Well Error",
        description: wishError,
        variant: "destructive",
      });
      playSound('error');
    }
  }, [wishResult, wishError, toast, playSound, onWish]);
  
  const handleTryAgain = () => {
    resetWish();
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <div className="flex items-center">
          <Sparkles className="mr-3 h-6 w-6 text-royal-gold" />
          <CardTitle>Enhanced Wishing Well</CardTitle>
        </div>
        <CardDescription>
          Test your royal luck for a chance to win big!
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {wishResult ? (
          <div className={`p-4 rounded-lg text-center space-y-3 ${getRarityBgColor(wishResult.rarity)}`}>
            <Gift className={`mx-auto h-8 w-8 ${getRarityColor(wishResult.rarity)}`} />
            <h3 className="text-lg font-semibold">{wishResult.title}</h3>
            <p className="text-white/70">{wishResult.message}</p>
            
            <Button onClick={handleTryAgain} className="w-full">
              Try Again
            </Button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between text-sm text-white/70">
              <span>Progress to Guaranteed Prize</span>
              <span className="font-medium">{pullCount}/{guaranteedPulls}</span>
            </div>
            <Progress value={(pullCount / guaranteedPulls) * 100} className="h-2" />
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 rounded-md bg-white/5">
                <div className="flex items-center justify-center mb-1">
                  <Award className="h-4 w-4 text-royal-gold mr-1" />
                  <span className="text-sm text-white/70">Base Chance</span>
                </div>
                <div className="text-xl font-bold">{baseChance}%</div>
              </div>
              
              <div className="p-3 rounded-md bg-white/5">
                <div className="flex items-center justify-center mb-1">
                  <Crown className="h-4 w-4 text-royal-gold mr-1" />
                  <span className="text-sm text-white/70">Jackpot Chance</span>
                </div>
                <div className="text-xl font-bold">{jackpotChance}%</div>
              </div>
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white"
              disabled={isWishing || !canWish}
              onClick={handleWish}
            >
              {isWishing ? (
                <>
                  <ChevronsUp className="mr-2 h-4 w-4 animate-bounce" /> Wishing...
                </>
              ) : (
                <>
                  <Coins className="mr-2 h-4 w-4" /> Try Your Royal Luck ({cost} Throne Coins)
                </>
              )}
            </Button>
          </>
        )}
      </CardContent>
      
      {user && canWish && !isWishing && !wishResult && (
        <CardFooter className="text-center text-white/60">
          Each wish gives you a chance to win exclusive prizes!
        </CardFooter>
      )}
    </Card>
  );
};

export default EnhancedWishingWell;
