
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { spendFromWallet } from '@/services/walletService';
import { UserProfile } from '@/contexts/AuthContext';

export function useWishingWell() {
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  const [wishAmount, setWishAmount] = useState<number>(1);
  const [isWishing, setIsWishing] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);
  const [wishResult, setWishResult] = useState<'pending' | 'win' | 'lose' | null>(null);
  const [reward, setReward] = useState<number>(0);
  const [coins, setCoins] = useState<Array<{ id: number, x: number, y: number }>>([]);

  const handleSliderChange = (value: number[]) => {
    setWishAmount(value[0]);
  };

  const addCoin = (wellRef: React.RefObject<HTMLDivElement>) => {
    if (!wellRef.current) return;
    
    const wellRect = wellRef.current.getBoundingClientRect();
    const centerX = wellRect.width / 2;
    const centerY = wellRect.height / 2;
    
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 40;
    const x = centerX + Math.cos(angle) * distance;
    const y = centerY + Math.sin(angle) * distance;
    
    setCoins(prev => [...prev, { id: Date.now(), x, y }]);
    
    setTimeout(() => {
      setCoins(prev => prev.filter(coin => coin.id !== Date.now()));
    }, 2000);
  };

  const handleWish = async (user: UserProfile | null, wellRef: React.RefObject<HTMLDivElement>) => {
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
    addCoin(wellRef);
    playSound('coinDrop');
    
    try {
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
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const baseChance = 0.15;
      const amountBonus = Math.min(0.25, wishAmount * 0.01);
      const winChance = baseChance + amountBonus;
      
      const isWin = Math.random() < winChance;
      
      if (isWin) {
        const cosmeticRewards = [
          "Royal Purple Border", "Crown Icon", "Gold Text Effect", 
          "Animated Background", "Special Emoji Pack", "Noble Title"
        ];
        const rewardName = cosmeticRewards[Math.floor(Math.random() * cosmeticRewards.length)];
        
        setWishResult('win');
        setResult(`Your wish comes true! You've been granted the "${rewardName}" cosmetic item!`);
        playSound('reward');
        setReward(0);
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

  return {
    wishAmount,
    setWishAmount,
    isWishing,
    result,
    wishResult,
    coins,
    reward,
    handleSliderChange,
    handleWish
  };
}
