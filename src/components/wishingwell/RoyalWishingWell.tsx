
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sparkles, CoinIcon, Gem, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Wish {
  username: string;
  amount: number;
  result: string;
  timestamp: string;
}

interface RoyalWishingWellProps {
  currentPool: number;
  recentWishes: Wish[];
}

const RoyalWishingWell: React.FC<RoyalWishingWellProps> = ({ currentPool, recentWishes }) => {
  const [wishAmount, setWishAmount] = useState<number>(10);
  const { toast } = useToast();
  
  const handleWish = () => {
    if (wishAmount < 1) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to wish.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Wish Granted!",
      description: "Your royal wish has been cast into the wishing well.",
    });
  };
  
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    
    // Get time difference in minutes
    const minutesAgo = Math.floor((Date.now() - date.getTime()) / 60000);
    
    if (minutesAgo < 1) return 'just now';
    if (minutesAgo < 60) return `${minutesAgo}m ago`;
    
    const hoursAgo = Math.floor(minutesAgo / 60);
    if (hoursAgo < 24) return `${hoursAgo}h ago`;
    
    return date.toLocaleDateString();
  };
  
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center mb-1">
          <Sparkles className="mr-3 h-6 w-6 text-royal-gold" />
          <CardTitle>Royal Wishing Well</CardTitle>
        </div>
        <CardDescription>
          Cast your coins and make a wish
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="glass-morphism rounded-xl p-6 flex flex-col items-center text-center border border-royal-gold/20">
          <div className="text-2xl font-bold text-royal-gold mb-2">${currentPool.toLocaleString()}</div>
          <p className="text-sm text-white/70">Current wishing well pool</p>
          
          <div className="mt-4 w-full">
            <p className="text-sm text-white/70 mb-2">Make a wish:</p>
            <div className="flex space-x-2">
              <Input
                type="number"
                min="1"
                value={wishAmount}
                onChange={(e) => setWishAmount(parseInt(e.target.value) || 0)}
                className="glass-morphism border-white/20"
              />
              <Button 
                variant="default"
                className="royal-button-gradient"
                onClick={handleWish}
              >
                <CoinIcon size={16} className="mr-2" />
                Wish
              </Button>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-white/80 mb-3 flex items-center">
            <Clock size={14} className="mr-2 text-royal-gold" />
            Recent Wishes
          </h3>
          
          <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2">
            {recentWishes.map((wish, index) => (
              <div key={index} className="glass-morphism border-white/10 rounded-lg p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <Gem size={16} className="text-royal-gold" />
                  <div className="ml-2">
                    <p className="text-sm font-medium">{wish.username}</p>
                    <p className="text-xs text-white/50">
                      Wished ${wish.amount.toLocaleString()} - {wish.result}
                    </p>
                  </div>
                </div>
                <div className="text-xs text-white/40">
                  {formatTimestamp(wish.timestamp)}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center text-xs text-white/50 italic">
          "Fortune favors the bold, but the royal wishing well favors the wealthy."
        </div>
      </CardContent>
    </Card>
  );
};

export default RoyalWishingWell;
