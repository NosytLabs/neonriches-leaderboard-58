import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/contexts/auth';
import { spendFromWallet } from '@/services/walletService';
import { useToast } from '@/hooks/use-toast';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { CosmeticItem, CosmeticRarity } from '@/types/cosmetics';
import { User } from '@/types/user';
import { ensureUser } from '@/utils/userAdapter';

export interface Wish {
  id: string;
  username: string;
  amount: number;
  result: string;
  cosmetic?: CosmeticItem;
  rarity?: CosmeticRarity;
  timestamp: Date;
}

interface UseWishingWellProps {
  initialAmount?: number;
}

interface UseWishingWellReturn {
  wishAmount: number;
  setWishAmount: (amount: number) => void;
  isWishing: boolean;
  result: string | null;
  wishResult: 'pending' | 'win' | 'lose' | null;
  rewardItem: CosmeticItem | null;
  rewardRarity: CosmeticRarity | null;
  wishes: Wish[];
  preferredCategory: string | undefined;
  setPreferredCategory: (category: string | undefined) => void;
  wellRef: React.RefObject<HTMLDivElement>;
  coins: Array<{ id: number; x: number; y: number }>;
  containerRef: React.RefObject<HTMLDivElement>;
  wellEffectsRef: React.RefObject<HTMLDivElement>;
  handleSliderChange: (value: number[]) => void;
  handleWish: () => Promise<void>;
  addCoin: () => void;
  formatDate: (date: Date) => string;
  predefinedAmounts: number[];
}

const useWishingWell = ({ initialAmount = 1 }: UseWishingWellProps = {}): UseWishingWellReturn => {
  const { user, updateUserProfile, awardCosmetic } = useAuth();
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  const [wishAmount, setWishAmount] = useState<number>(initialAmount);
  const [isWishing, setIsWishing] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);
  const [wishResult, setWishResult] = useState<'pending' | 'win' | 'lose' | null>(null);
  const [rewardItem, setRewardItem] = useState<CosmeticItem | null>(null);
  const [rewardRarity, setRewardRarity] = useState<CosmeticRarity | null>(null);
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [preferredCategory, setPreferredCategory] = useState<string | undefined>(undefined);
  const wellRef = useRef<HTMLDivElement>(null);
  const [coins, setCoins] = useState<Array<{ id: number, x: number, y: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const wellEffectsRef = useRef<HTMLDivElement>(null);
  
  const predefinedAmounts = [0.25, 0.5, 1, 2, 5, 10];
  
  useEffect(() => {
    if (user) {
      const storedWishes = localStorage.getItem(`wishes_${user.id}`);
      if (storedWishes) {
        try {
          const parsedWishes = JSON.parse(storedWishes);
          setWishes(parsedWishes.map((w: any) => ({
            ...w,
            timestamp: new Date(w.timestamp)
          })));
        } catch (error) {
          console.error("Error parsing wishes:", error);
        }
      }
    }
  }, [user]);

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setResult(null);
        setWishResult(null);
        setRewardItem(null);
        setRewardRarity(null);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [result]);

  const handleSliderChange = (value: number[]) => {
    setWishAmount(value[0]);
  };

  const addCoin = () => {
    if (!wellRef.current) return;
    
    const wellRect = wellRef.current.getBoundingClientRect();
    const centerX = wellRect.width / 2;
    const centerY = wellRect.height / 2;
    
    const numCoins = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < numCoins; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 30;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY - 10 + Math.sin(angle) * distance;
      
      const newCoin = { id: Date.now() + i, x, y };
      setCoins(prev => [...prev, newCoin]);
      
      setTimeout(() => {
        setCoins(prev => prev.filter(coin => coin.id !== newCoin.id));
      }, 2000);
    }
    
    if (wellRef.current) {
      const ripple = document.createElement('div');
      ripple.className = 'absolute w-16 h-16 rounded-full bg-royal-gold/10 water-ripple';
      ripple.style.left = `${centerX}px`;
      ripple.style.top = `${centerY + 20}px`;
      ripple.style.transform = 'translate(-50%, -50%)';
      
      wellRef.current.appendChild(ripple);
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 2000);
    }
  };

  const saveWish = (newWish: Wish) => {
    const updatedWishes = [newWish, ...wishes.slice(0, 9)];
    setWishes(updatedWishes);
    
    if (user) {
      localStorage.setItem(`wishes_${user.id}`, JSON.stringify(updatedWishes));
    }
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
    
    if (user.walletBalance < wishAmount) {
      toast({
        title: "Insufficient Funds",
        description: "You don't have enough coins for this wish.",
        variant: "destructive"
      });
      return;
    }
    
    setIsWishing(true);
    setWishResult('pending');
    addCoin();
    playSound('coinDrop');
    
    try {
      const userForTransaction: User = ensureUser(user);
      
      const success = await spendFromWallet(
        userForTransaction,
        wishAmount,
        'wish',
        `Made a wish of $${wishAmount.toFixed(2)}`,
        { wishAmount, preferredCategory }
      );
      
      if (!success) {
        throw new Error("Transaction failed");
      }
      
      await updateUserProfile({
        ...user,
        walletBalance: user.walletBalance - wishAmount
      });
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const nothingChance = Math.max(35 - wishAmount * 3, 15);
      const noReward = Math.random() * 100 < nothingChance;
      
      if (noReward) {
        setWishResult('lose');
        setResult("Your wish fades into the ether. Perhaps fortune will favor you next time...");
        playSound('error', 0.3);
        
        const newWish: Wish = {
          id: `wish_${Date.now()}`,
          username: user.username,
          amount: wishAmount,
          result: "No reward",
          timestamp: new Date()
        };
        
        saveWish(newWish);
      } else {
        const { cosmeticItem, rarity } = await awardRandomCosmetic(user, wishAmount, preferredCategory);
        
        if (!cosmeticItem) {
          setWishResult('lose');
          setResult("The well shows you items you already own. Try wishing for something new!");
          playSound('error', 0.3);
          
          const newWish: Wish = {
            id: `wish_${Date.now()}`,
            username: user.username,
            amount: wishAmount,
            result: "Already owns all items",
            rarity,
            timestamp: new Date()
          };
          
          saveWish(newWish);
          return;
        }
        
        if (awardCosmetic) {
          const awarded = await awardCosmetic(
            cosmeticItem.id,
            cosmeticItem.category as string,
            cosmeticItem.rarity,
            'wish'
          );
          
          if (awarded) {
            setWishResult('win');
            setResult(`Your wish comes true! You've been granted the "${cosmeticItem.name}" cosmetic item!`);
            setRewardItem(cosmeticItem);
            setRewardRarity(cosmeticItem.rarity);
            playSound('reward');
            
            const newWish: Wish = {
              id: `wish_${Date.now()}`,
              username: user.username,
              amount: wishAmount,
              result: `Received ${cosmeticItem.name}`,
              cosmetic: cosmeticItem,
              rarity: cosmeticItem.rarity,
              timestamp: new Date()
            };
            
            saveWish(newWish);
          } else {
            throw new Error("Failed to award cosmetic");
          }
        }
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

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return {
    wishAmount,
    setWishAmount,
    isWishing,
    result,
    wishResult,
    rewardItem,
    rewardRarity,
    wishes,
    preferredCategory,
    setPreferredCategory,
    wellRef,
    coins,
    containerRef,
    wellEffectsRef,
    handleSliderChange,
    handleWish,
    addCoin,
    formatDate,
    predefinedAmounts
  };
};

const awardRandomCosmetic = async (user: any, amount: number, category?: string) => {
  const rarities: CosmeticRarity[] = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'royal'];
  const categories: string[] = ['borders', 'colors', 'fonts', 'emojis', 'titles', 'backgrounds', 'effects', 'badges', 'themes'];
  
  let rarityIndex = 0;
  if (amount >= 0.5) rarityIndex = 1;
  if (amount >= 2) rarityIndex = 2;
  if (amount >= 5) rarityIndex = 3;
  if (amount >= 10) rarityIndex = 4;
  if (amount >= 25) rarityIndex = 5;
  
  const selectedRarity = rarities[rarityIndex];
  const selectedCategory = category || categories[Math.floor(Math.random() * categories.length)];
  
  const cosmeticItem: CosmeticItem = {
    id: `cosmetic_${Date.now()}`,
    name: `${selectedRarity.charAt(0).toUpperCase() + selectedRarity.slice(1)} ${selectedCategory.slice(0, -1)}`,
    description: `A ${selectedRarity} ${selectedCategory.slice(0, -1)} for your profile`,
    category: selectedCategory as any,
    rarity: selectedRarity,
    price: amount * 2,
    image: `https://placekitten.com/200/200?random=${Date.now()}`
  };
  
  return { cosmeticItem, rarity: selectedRarity };
};

export default useWishingWell;
