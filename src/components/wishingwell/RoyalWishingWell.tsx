
import React, { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gem } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import WishStats from './WishStats';
import WishHistory from './WishHistory';
import WishingWellDisplay from './WishingWellDisplay';
import WishAmountSelector from './WishAmountSelector';
import { useWishingWell } from '@/hooks/use-wishing-well';

interface RoyalWishingWellProps {
  currentPool: number;
  recentWishes: Array<{
    username: string;
    amount: number;
    result: string;
    timestamp: string;
  }>;
}

const RoyalWishingWell: React.FC<RoyalWishingWellProps> = ({ 
  currentPool = 5000,
  recentWishes = []
}) => {
  const { user } = useAuth();
  const wellRef = useRef<HTMLDivElement>(null);
  const {
    wishAmount,
    setWishAmount,
    isWishing,
    result,
    wishResult,
    coins,
    handleSliderChange,
    handleWish
  } = useWishingWell();

  const onWishClick = () => {
    handleWish(user, wellRef);
  };

  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center">
          <Gem className="mr-3 h-6 w-6 text-royal-gold" />
          <CardTitle>Royal Wishing Well</CardTitle>
        </div>
        <CardDescription>
          Cast your coins into the mystical well for a chance at cosmetic rewards
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <WishStats currentPool={currentPool} />
        
        <WishingWellDisplay 
          coins={coins}
          isWishing={isWishing}
          result={result}
          wishResult={wishResult}
          handleWish={onWishClick}
          user={user}
          wishAmount={wishAmount}
        />
        
        <WishAmountSelector 
          wishAmount={wishAmount}
          handleSliderChange={handleSliderChange}
          setWishAmount={setWishAmount}
        />
        
        <WishHistory recentWishes={recentWishes} />
      </CardContent>
    </Card>
  );
};

export default RoyalWishingWell;
