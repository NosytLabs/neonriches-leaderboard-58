import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Coins, Gift, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/auth';
import { spendFromWallet } from '@/services/walletService';
import { getRarityColor, getRarityBgColor, getRarityBorderColor } from '@/utils/cosmetics';
import useNotificationSounds from '@/hooks/use-notification-sounds';

interface WishingWellProps {
  className?: string;
}

const WishingWell: React.FC<WishingWellProps> = ({ className = '' }) => {
  const [isWishing, setIsWishing] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
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

    setIsWishing(true);

    try {
      // Simulate a wish outcome (replace with actual logic)
      const wishCost = 10;
      const wishResult = Math.random();

      if (wishResult > 0.5) {
        // Simulate a successful wish
        await spendFromWallet(user, wishCost, 'wish', 'Wishing Well Attempt');
        toast({
          title: "Your Wish Granted!",
          description: "You feel a surge of royal luck!",
        });
        playSound('success');
      } else {
        // Simulate a failed wish
        await spendFromWallet(user, wishCost, 'wish', 'Wishing Well Attempt');
        toast({
          title: "Alas, Your Wish Fades...",
          description: "Perhaps the royal treasury is not in your favor today.",
          variant: "destructive"
        });
        playSound('error');
      }
    } catch (error) {
      toast({
        title: "Wish Interrupted",
        description: "Something went wrong with your wish. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsWishing(false);
    }
  };

  return (
    <Card className={`glass-morphism border-white/10 ${className}`}>
      <CardHeader>
        <div className="flex items-center">
          <Sparkles className="mr-3 h-6 w-6 text-royal-gold" />
          <CardTitle>The Royal Wishing Well</CardTitle>
        </div>
        <CardDescription>
          Toss a coin and let fate decide your fortune
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-lg" />
          <div className="relative z-10 p-6 space-y-4">
            <div className="text-white/70">
              Cast a coin into the well and whisper your desires to the royal spirits.
            </div>
            <div className="text-xl font-semibold text-royal-gold">
              10 Coins per wish
            </div>
            <Button
              className="w-full bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90"
              onClick={handleWish}
              disabled={isWishing}
            >
              {isWishing ? (
                <>
                  <span className="animate-spin mr-2">⚙️</span> Wishing...
                </>
              ) : (
                <>
                  <Coins className="mr-2 h-4 w-4" /> Make a Wish
                </>
              )}
            </Button>
          </div>
        </div>
        <div className="mt-4 text-sm text-white/60">
          <Gift className="mr-2 inline-block h-4 w-4" />
          Each wish has a chance to grant you royal favor!
        </div>
      </CardContent>
    </Card>
  );
};

export default WishingWell;
