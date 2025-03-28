
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Flame, Tag, Clock, Coins } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import MedievalIcon from '@/components/ui/medieval-icon';
import { 
  CosmeticItem, 
  CosmeticRarity,
  getRarityColor, 
  getRarityBgColor, 
  getRarityBorderColor 
} from '@/types/cosmetics';
import { cosmeticsData } from '@/data/cosmeticsData';
import { formatCurrency } from '@/utils/formatters';
import { useAuth } from '@/contexts/auth';
import { ensureUser } from '@/utils/userAdapter';
import { spendFromWallet } from '@/services/walletService';

interface FireSaleEventProps {
  eventId: string;
  startDate: string;
  endDate: string;
}

const FireSaleEvent = ({ eventId, startDate, endDate }: FireSaleEventProps) => {
  const [saleItems, setSaleItems] = useState<CosmeticItem[]>([]);
  const [timeLeft, setTimeLeft] = useState('');
  const { toast } = useToast();
  const { user, updateUserProfile } = useAuth();
  
  useEffect(() => {
    // Simulate getting sale items - in a real app, you would fetch this from your backend
    const getDiscountedItems = () => {
      // For demo purposes, just pick a few random items from the cosmetics data
      const randomItems = [...cosmeticsData]
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
      
      // Apply "sale" prices
      const discountedItems = randomItems.map(item => ({
        ...item,
        originalCost: item.cost,
        cost: Math.floor(item.cost * 0.7) // 30% discount
      }));
      
      setSaleItems(discountedItems);
    };
    
    getDiscountedItems();
  }, [eventId]);
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDateTime = new Date(endDate);
      const now = new Date();
      
      if (now > endDateTime) {
        setTimeLeft('Event ended');
        return;
      }
      
      const diff = endDateTime.getTime() - now.getTime();
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      if (days > 0) {
        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      } else if (hours > 0) {
        setTimeLeft(`${hours}h ${minutes}m`);
      } else {
        setTimeLeft(`${minutes}m`);
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);
    
    return () => clearInterval(timer);
  }, [endDate]);
  
  const handlePurchase = async (item: CosmeticItem) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to purchase items.",
        variant: "destructive"
      });
      return;
    }
    
    if (user.walletBalance < item.cost) {
      toast({
        title: "Insufficient Funds",
        description: `You need ${formatCurrency(item.cost)} to purchase this item.`,
        variant: "destructive"
      });
      return;
    }
    
    try {
      const success = await spendFromWallet(
        ensureUser(user),
        item.cost,
        'cosmetic',
        `Purchased ${item.name} cosmetic item`
      );
      
      if (success) {
        // Update user's cosmetics collection
        const userCosmetics = user.cosmetics || {
          borders: [],
          colors: [],
          fonts: [],
          emojis: [],
          titles: [],
          backgrounds: [],
          effects: [],
          badges: [],
          themes: []
        };
        
        // Add the item to the appropriate collection based on its type
        const updatedCosmetics = { ...userCosmetics };
        if (Array.isArray(updatedCosmetics[item.type as keyof typeof updatedCosmetics])) {
          (updatedCosmetics[item.type as keyof typeof updatedCosmetics] as string[]).push(item.id);
        }
        
        await updateUserProfile({
          ...user,
          cosmetics: updatedCosmetics,
          walletBalance: user.walletBalance - item.cost
        });
        
        toast({
          title: "Purchase Successful",
          description: `You've acquired the ${item.name}!`,
        });
      } else {
        toast({
          title: "Purchase Failed",
          description: "There was an error processing your purchase.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error purchasing item:", error);
      toast({
        title: "Purchase Failed",
        description: "There was an error processing your purchase.",
        variant: "destructive"
      });
    }
  };
  
  const getRarityIcon = (rarity: CosmeticRarity) => {
    switch (rarity) {
      case 'common':
        return <MedievalIcon name="shield" size="sm" color="silver" />;
      case 'uncommon':
        return <MedievalIcon name="shield" size="sm" color="silver" />;
      case 'rare':
        return <MedievalIcon name="shield" size="sm" color="gold" />;
      case 'epic':
        return <MedievalIcon name="crown" size="sm" color="purple" />;
      case 'legendary':
        return <MedievalIcon name="crown" size="sm" color="gold" />;
      default:
        return <MedievalIcon name="shield" size="sm" color="silver" />;
    }
  };
  
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl font-royal flex items-center">
              <Flame className="mr-2 h-5 w-5 text-royal-crimson" />
              Royal Fire Sale
            </CardTitle>
            <CardDescription>
              Limited-time discounts on premium cosmetics
            </CardDescription>
          </div>
          <div className="flex items-center text-royal-gold">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm font-mono">{timeLeft}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {saleItems.map((item) => (
            <Card key={item.id} className={`glass-morphism border ${getRarityBorderColor(item.rarity)}`}>
              <CardHeader className={`pb-2 ${getRarityBgColor(item.rarity)}`}>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-base flex items-center">
                    {getRarityIcon(item.rarity)}
                    <span className="ml-2">{item.name}</span>
                  </CardTitle>
                  <Badge variant="outline" className={getRarityColor(item.rarity)}>
                    {item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="py-3">
                <p className="text-sm text-white/70 mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 text-royal-gold mr-1" />
                    <span className="text-sm line-through text-white/50 mr-2">
                      ${(item as any).originalCost?.toFixed(2) || item.cost.toFixed(2)}
                    </span>
                    <span className="text-lg font-bold text-royal-gold">
                      ${item.cost.toFixed(2)}
                    </span>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => handlePurchase(item)}
                    disabled={!user || user.walletBalance < item.cost}
                    className="bg-royal-gold hover:bg-royal-gold/90 text-black"
                  >
                    <Coins className="h-3 w-3 mr-1" />
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <p className="text-xs text-white/50 italic">
          *All sales are final. Items purchased during the Fire Sale are non-refundable.
        </p>
      </CardFooter>
    </Card>
  );
};

export default FireSaleEvent;
