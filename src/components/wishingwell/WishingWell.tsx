
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Gem, Coins, Gift, ArrowDownCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { spendFromWallet } from '@/services/walletService';
import { useToast } from '@/hooks/use-toast';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { CosmeticItem, CosmeticRarity, getRarityBgColor, getRarityBorderColor, getRarityColor } from '@/types/cosmetics';
import { awardRandomCosmetic, getCosmeticById } from '@/services/cosmeticService';
import useFloatingEffects from '@/hooks/use-floating-effects';

interface Wish {
  id: string;
  username: string;
  amount: number;
  result: string;
  cosmetic?: CosmeticItem;
  rarity?: CosmeticRarity;
  timestamp: Date;
}

const WishingWell = () => {
  const { user, updateUserProfile, awardCosmetic } = useAuth();
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  const [wishAmount, setWishAmount] = useState<number>(1);
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

  // Use floating effects for ambient well particles
  const { isVisible: isEffectsVisible } = useFloatingEffects({
    containerRef: wellEffectsRef,
    enabled: true,
    frequency: 0.3,
    density: 'low',
    animation: 'float',
    colors: ['#D4AF37', '#FFD700', '#FFC125'],
    sizes: [3, 4, 5],
    duration: 4000
  });

  const predefinedAmounts = [0.25, 0.5, 1, 2, 5, 10];
  
  // Load previous wishes from localStorage
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

  const handleSliderChange = (value: number[]) => {
    setWishAmount(value[0]);
  };

  const addCoin = () => {
    if (!wellRef.current) return;
    
    const wellRect = wellRef.current.getBoundingClientRect();
    const centerX = wellRect.width / 2;
    const centerY = wellRect.height / 2;
    
    // Create multiple coins with different angles for a more natural look
    const numCoins = Math.floor(Math.random() * 3) + 1; // 1-3 coins
    
    for (let i = 0; i < numCoins; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 30;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY - 10 + Math.sin(angle) * distance; // Start slightly above center
      
      const newCoin = { id: Date.now() + i, x, y };
      setCoins(prev => [...prev, newCoin]);
      
      setTimeout(() => {
        setCoins(prev => prev.filter(coin => coin.id !== newCoin.id));
      }, 2000);
    }
    
    // Create water ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'absolute w-16 h-16 rounded-full bg-royal-gold/10 water-ripple';
    ripple.style.left = `${centerX}px`;
    ripple.style.top = `${centerY + 20}px`;
    ripple.style.transform = 'translate(-50%, -50%)';
    
    if (wellRef.current) {
      wellRef.current.appendChild(ripple);
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 2000);
    }
  };

  const saveWish = (newWish: Wish) => {
    const updatedWishes = [newWish, ...wishes.slice(0, 9)]; // Keep only 10 most recent wishes
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
      const success = await spendFromWallet(
        user,
        wishAmount,
        'wish',
        `Made a wish of $${wishAmount.toFixed(2)}`,
        { wishAmount, preferredCategory }
      );
      
      if (!success) {
        throw new Error("Transaction failed");
      }
      
      // Update user balance (in a real app, this would be done by the backend)
      await updateUserProfile({
        ...user,
        walletBalance: user.walletBalance - wishAmount
      });
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Base chance to get nothing is 35%
      const nothingChance = Math.max(35 - wishAmount * 3, 15); // Higher wishes reduce chance of nothing, minimum 15%
      const noReward = Math.random() * 100 < nothingChance;
      
      if (noReward) {
        // No reward
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
        // Award a random cosmetic
        const { cosmeticItem, rarity } = awardRandomCosmetic(user, wishAmount, preferredCategory);
        
        if (!cosmeticItem) {
          // User already owns all possible items
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
        
        // Add the cosmetic to the user's collection
        if (awardCosmetic) {
          const awarded = await awardCosmetic(
            cosmeticItem.id,
            cosmeticItem.category,
            cosmeticItem.rarity,
            'wish'
          );
          
          if (awarded) {
            setWishResult('win');
            setResult(`Your wish comes true! You've been granted the "${cosmeticItem.name}" cosmetic item!`);
            // Use setState with a function when updating with the object
            setRewardItem(() => cosmeticItem);
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

  // Format dates to be more readable
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center">
          <Gem className="mr-3 h-6 w-6 text-royal-gold animate-pulse-slow" />
          <CardTitle>Royal Wishing Well</CardTitle>
        </div>
        <CardDescription>
          Cast your coins into the mystical well for a chance at cosmetic rewards
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
          <div className="flex items-center">
            <Coins className="h-5 w-5 text-royal-gold mr-2" />
            <span className="text-sm text-white/70">Wishes Made Today</span>
          </div>
          <span className="text-xl font-bold text-royal-gold font-mono">{wishes.filter(w => {
            const today = new Date();
            const wishDate = new Date(w.timestamp);
            return wishDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
          }).length}</span>
        </div>
        
        <div className="relative h-68" ref={containerRef}>
          <div 
            ref={wellEffectsRef}
            className="absolute inset-0 overflow-hidden pointer-events-none"
          ></div>
          
          <div className="flex items-center justify-center h-full">
            {/* Medieval stone well design */}
            <div className="relative">
              {/* Stone well structure */}
              <div 
                ref={wellRef}
                className="relative w-64 h-64 rounded-full border-8 border-stone-700/80 bg-gradient-to-b from-stone-800 to-stone-900 flex items-center justify-center overflow-hidden shadow-lg"
              >
                {/* Stone texture overlay */}
                <div className="absolute inset-0 opacity-30 mix-blend-overlay" 
                  style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjOWU5ZTllIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')"}}
                ></div>
                
                {/* Well rim stones */}
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-16 h-10 bg-stone-700 rounded-sm transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 30}deg) translateY(-120px) rotate(${90}deg)`
                    }}
                  >
                    <div className="w-full h-full bg-stone-600/50 rounded-sm border-t border-stone-500/30"></div>
                  </div>
                ))}
                
                {/* Water surface */}
                <div className="absolute inset-0 bg-royal-navy/30 backdrop-blur-sm" style={{ top: '35%' }}>
                  <div className="absolute inset-0 bg-gradient-to-b from-royal-gold/10 to-royal-navy/40"></div>
                  
                  {/* Water ripple animation */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-full h-full border-t border-royal-gold/10 rounded-full transform scale-90 animate-pulse-slow" style={{ animationDuration: '4s' }}></div>
                    <div className="absolute w-full h-full border-t border-royal-gold/10 rounded-full transform scale-80 animate-pulse-slow" style={{ animationDuration: '5s', animationDelay: '0.5s' }}></div>
                    <div className="absolute w-full h-full border-t border-royal-gold/10 rounded-full transform scale-70 animate-pulse-slow" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
                  </div>
                </div>
                
                {/* Magic sparkles in the water */}
                <div className="absolute inset-0 overflow-hidden" style={{ top: '35%' }}>
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
                
                {/* Medieval wooden bucket and pulley system */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-24 h-64 pointer-events-none">
                  {/* Wooden beam across top */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-amber-900 rounded-lg"></div>
                  
                  {/* Rope */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-amber-700"></div>
                  
                  {/* Wooden pulley wheel */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-3 w-8 h-8 bg-amber-800 rounded-full border-2 border-amber-950 flex items-center justify-center">
                    <div className="w-4 h-4 bg-amber-950 rounded-full"></div>
                  </div>
                </div>
                
                {/* Coins in the well animation */}
                {coins.map(coin => (
                  <div
                    key={coin.id}
                    className="coin-drop absolute z-10"
                    style={{
                      left: `${coin.x}px`,
                      top: `${coin.y}px`,
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #9B87F5, #B8A5FF)',
                      boxShadow: '0 0 10px rgba(155, 135, 245, 0.8)',
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                      $
                    </div>
                  </div>
                ))}
                
                {result && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div 
                      className={`p-3 rounded-lg text-center max-w-[90%] backdrop-blur-md border transition-all duration-500 ${
                        wishResult === 'win' 
                          ? `${getRarityBgColor(rewardRarity || 'common')} ${getRarityBorderColor(rewardRarity || 'common')} text-white` 
                          : 'bg-black/50 border-white/20 text-white/90'
                      }`}
                    >
                      <p>{result}</p>
                      {wishResult === 'win' && rewardItem && (
                        <Badge className={`mt-2 ${getRarityBgColor(rewardRarity || 'common')} border ${getRarityBorderColor(rewardRarity || 'common')}`}>
                          <span className={getRarityColor(rewardRarity || 'common')}>
                            {rewardRarity?.charAt(0).toUpperCase()}{rewardRarity?.slice(1)} Item
                          </span>
                        </Badge>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="absolute w-20 h-20 rounded-full bg-royal-gold/10 filter blur-xl animate-pulse-slow"></div>
                
                <ArrowDownCircle 
                  size={48} 
                  className={`absolute -top-6 text-royal-gold animate-bounce ${isWishing ? 'opacity-0' : 'opacity-80'}`} 
                />
              </div>
              
              {!isWishing && !result && (
                <div className="absolute -bottom-5 left-0 right-0 flex justify-center">
                  <Button
                    className="bg-royal-gold hover:bg-royal-gold/90 text-black royal-button shadow-lg"
                    onClick={handleWish}
                    disabled={!user || user.walletBalance < wishAmount}
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    Make a Wish
                  </Button>
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
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-white/70">Wish Amount:</span>
              <span className="text-sm font-bold">${wishAmount.toFixed(2)}</span>
            </div>
            <Slider 
              value={[wishAmount]} 
              min={0.25} 
              max={10} 
              step={0.25} 
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
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/70">Preferred Category (Optional):</span>
              <Select
                value={preferredCategory}
                onValueChange={setPreferredCategory}
              >
                <SelectTrigger className="w-[180px] h-8 glass-morphism border-white/10 text-sm">
                  <SelectValue placeholder="Any category" />
                </SelectTrigger>
                <SelectContent className="glass-morphism border-white/10">
                  <SelectItem value={undefined}>Any category</SelectItem>
                  <SelectItem value="border">Borders</SelectItem>
                  <SelectItem value="color">Colors</SelectItem>
                  <SelectItem value="font">Fonts</SelectItem>
                  <SelectItem value="emoji">Emojis</SelectItem>
                  <SelectItem value="title">Titles</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="p-3 bg-black/20 rounded-lg text-sm">
            <p className="flex items-center text-white/70 mb-2">
              <Gift size={16} className="text-royal-gold mr-2" />
              <span>Higher wishes increase your chances of receiving rarer cosmetic rewards!</span>
            </p>
            <div className="grid grid-cols-5 gap-x-1 gap-y-2 my-3">
              <div className="text-center">
                <div className="text-xs font-semibold text-gray-300">Common</div>
                <div className="text-xs text-white/50">{Math.max(40 - (wishAmount >= 10 ? 15 : wishAmount >= 5 ? 10 : wishAmount >= 2 ? 5 : 0), 25)}%</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-semibold text-green-400">Uncommon</div>
                <div className="text-xs text-white/50">{30 + (wishAmount >= 10 ? -10 : wishAmount >= 5 ? -5 : wishAmount >= 2 ? 2 : 0)}%</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-semibold text-blue-400">Rare</div>
                <div className="text-xs text-white/50">{20 + (wishAmount >= 10 ? 5 : wishAmount >= 5 ? 5 : wishAmount >= 2 ? 2 : 0)}%</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-semibold text-purple-400">Epic</div>
                <div className="text-xs text-white/50">{8 + (wishAmount >= 10 ? 10 : wishAmount >= 5 ? 5 : wishAmount >= 2 ? 1 : 0)}%</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-semibold text-royal-gold">Legendary</div>
                <div className="text-xs text-white/50">{2 + (wishAmount >= 10 ? 10 : wishAmount >= 5 ? 5 : 0)}%</div>
              </div>
            </div>
            <p className="text-xs text-white/50">
              Chance of no reward: {Math.max(35 - wishAmount * 3, 15)}%
            </p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-white/80">Recent Wishes</h3>
          </div>
          
          {wishes.length > 0 ? (
            <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
              {wishes.map((wish) => (
                <div 
                  key={wish.id} 
                  className={`p-2 rounded-lg border ${
                    wish.rarity ? getRarityBorderColor(wish.rarity) : 'border-white/10'
                  } ${
                    wish.rarity ? getRarityBgColor(wish.rarity) + '/30' : 'bg-black/20'
                  } flex justify-between items-center`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{wish.username}</span>
                      <span className="text-xs text-white/60">${wish.amount.toFixed(2)}</span>
                    </div>
                    <div className="text-xs text-white/70">{wish.result}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/50">{formatDate(new Date(wish.timestamp))}</div>
                    {wish.rarity && (
                      <Badge className={`text-xs ${getRarityBgColor(wish.rarity)} border ${getRarityBorderColor(wish.rarity)}`}>
                        <span className={getRarityColor(wish.rarity)}>
                          {wish.rarity.charAt(0).toUpperCase() + wish.rarity.slice(1)}
                        </span>
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-white/50 italic">
              No wishes made yet. Be the first to try your luck!
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default WishingWell;
