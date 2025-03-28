
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';

interface WishAmountSelectorProps {
  wishAmount: number;
  handleSliderChange: (value: number[]) => void;
  setWishAmount: (amount: number) => void;
}

const WishAmountSelector: React.FC<WishAmountSelectorProps> = ({ 
  wishAmount, 
  handleSliderChange, 
  setWishAmount 
}) => {
  const predefinedAmounts = [0.25, 0.5, 1, 2, 5, 10];

  return (
    <div className="space-y-4">
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-sm text-white/70">Wish Amount:</span>
          <span className="text-sm font-bold">${wishAmount}</span>
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
      
      <div className="p-3 bg-black/20 rounded-lg text-sm">
        <p className="flex items-center text-white/70 mb-2">
          <Gift size={16} className="text-royal-gold mr-2" />
          <span>Higher wishes may increase your chances of receiving cosmetic rewards!</span>
        </p>
        <p className="text-white/50">
          All rewards are purely cosmetic and do not affect your rank or give gameplay advantages.
        </p>
      </div>
    </div>
  );
};

export default WishAmountSelector;
