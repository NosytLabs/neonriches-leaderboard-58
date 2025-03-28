
import React, { useRef } from 'react';
import { ArrowDownCircle, Sparkles } from 'lucide-react';
import WishingCoin from './WishingCoin';
import RoyalButton from '@/components/ui/royal-button';

interface WishingWellDisplayProps {
  coins: Array<{ id: number, x: number, y: number }>;
  isWishing: boolean;
  result: string | null;
  wishResult: 'pending' | 'win' | 'lose' | null;
  handleWish: () => void;
  user: any;
  wishAmount: number;
}

const WishingWellDisplay: React.FC<WishingWellDisplayProps> = ({
  coins,
  isWishing,
  result,
  wishResult,
  handleWish,
  user,
  wishAmount
}) => {
  const wellRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-80 flex items-center justify-center">
      <div 
        ref={wellRef}
        className="relative w-64 h-64 rounded-full border-4 border-royal-gold/30 bg-gradient-to-b from-black to-royal-navy/30 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-royal-navy/20 backdrop-blur-sm" style={{ top: '15%' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-royal-gold/10 to-royal-navy/20"></div>
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
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
        
        {coins.map(coin => (
          <WishingCoin key={coin.id} x={coin.x} y={coin.y} />
        ))}
        
        {result && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div 
              className={`p-3 rounded-lg text-center max-w-[90%] backdrop-blur-md border transition-all duration-500 ${
                wishResult === 'win' 
                  ? 'bg-royal-gold/20 border-royal-gold text-white' 
                  : 'bg-black/50 border-white/20 text-white/90'
              }`}
            >
              <p>{result}</p>
              {wishResult === 'win' && (
                <div className="mt-2 bg-royal-gold text-black rounded-md px-2 py-1 text-xs font-bold inline-block">
                  Cosmetic Reward
                </div>
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
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <RoyalButton
            variant="royalGold"
            size="lg"
            className="shadow-lg"
            onClick={handleWish}
            disabled={!user || user.walletBalance < wishAmount}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Make a Wish
          </RoyalButton>
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
  );
};

export default WishingWellDisplay;
