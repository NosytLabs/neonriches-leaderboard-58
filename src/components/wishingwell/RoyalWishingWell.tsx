
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Sparkles, Gem, Coins } from 'lucide-react';
import WishStats from './WishStats';
import WishHistory from './WishHistory';

interface RecentWish {
  username: string;
  amount: number;
  result: string;
  timestamp: string;
}

interface RoyalWishingWellProps {
  onWish?: (amount: number) => void;
  maxAmount?: number;
  disabled?: boolean;
  currentPool?: number;
  recentWishes?: RecentWish[];
}

const RoyalWishingWell: React.FC<RoyalWishingWellProps> = ({
  onWish,
  maxAmount = 10,
  disabled = false,
  currentPool = 1000,
  recentWishes = []
}) => {
  const [wishAmount, setWishAmount] = React.useState(1);
  
  const handleSliderChange = (value: number[]) => {
    setWishAmount(value[0]);
  };
  
  const handleWish = () => {
    if (onWish) {
      onWish(wishAmount);
    }
  };
  
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Gem className="mr-2 h-5 w-5 text-royal-gold" />
          Quick Wish
        </CardTitle>
        <CardDescription>
          Make a wish to receive cosmetic items
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <WishStats currentPool={currentPool} />
        
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Wish Amount:</span>
            <span className="font-bold">${wishAmount.toFixed(2)}</span>
          </div>
          <Slider
            value={[wishAmount]}
            min={0.25}
            max={maxAmount}
            step={0.25}
            onValueChange={handleSliderChange}
          />
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          {[0.5, 1, 2, 5].map(amount => (
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
        
        <div className="text-xs space-y-1">
          <div className="flex justify-between">
            <span>Common:</span>
            <span>40%</span>
          </div>
          <div className="flex justify-between">
            <span>Uncommon:</span>
            <span>30%</span>
          </div>
          <div className="flex justify-between">
            <span>Rare:</span>
            <span>20%</span>
          </div>
          <div className="flex justify-between">
            <span>Epic:</span>
            <span>8%</span>
          </div>
          <div className="flex justify-between">
            <span>Legendary:</span>
            <span>2%</span>
          </div>
        </div>
        
        <Button 
          className="w-full glass-morphism border-royal-gold/30 hover:bg-royal-gold/20" 
          onClick={handleWish}
          disabled={disabled}
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Make a Wish
        </Button>
        
        <div className="text-center text-xs text-white/50">
          <div className="flex items-center justify-center">
            <Coins className="mr-1 h-3 w-3" />
            Higher wishes increase chances for rarer items
          </div>
        </div>
        
        {recentWishes && recentWishes.length > 0 && (
          <WishHistory recentWishes={recentWishes} />
        )}
      </CardContent>
    </Card>
  );
};

export default RoyalWishingWell;
