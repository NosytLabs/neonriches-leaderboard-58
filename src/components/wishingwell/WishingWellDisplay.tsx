
import React, { useRef, useEffect } from 'react';
import { ArrowDownCircle, Sparkles, Coins, Gem } from 'lucide-react';
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
  const particlesRef = useRef<HTMLDivElement>(null);
  
  // Create water ripple effect
  const createRipple = (x: number, y: number) => {
    if (!particlesRef.current) return;
    
    const ripple = document.createElement('div');
    ripple.className = 'absolute rounded-full bg-royal-gold/20 animate-ripple';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.transform = 'translate(-50%, -50%)';
    
    particlesRef.current.appendChild(ripple);
    
    // Remove the ripple after animation completes
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 2000);
  };
  
  // Create random ripples for ambiance
  useEffect(() => {
    if (!wellRef.current) return;
    
    const wellRect = wellRef.current.getBoundingClientRect();
    const centerX = wellRect.width / 2;
    const centerY = wellRect.height / 1.5; // Water level
    
    // Create random ripples
    const rippleInterval = setInterval(() => {
      const offsetX = (Math.random() * 80) - 40; // -40 to 40
      const offsetY = (Math.random() * 40) - 20; // -20 to 20
      
      createRipple(centerX + offsetX, centerY + offsetY);
    }, 2000);
    
    return () => clearInterval(rippleInterval);
  }, []);

  return (
    <div className="relative h-96 flex items-center justify-center">
      <div 
        ref={wellRef}
        className="relative w-72 h-72 rounded-full border-8 border-stone-700/80 bg-gradient-to-b from-black to-royal-navy/30 flex items-center justify-center overflow-hidden"
      >
        {/* Stone texture */}
        <div className="absolute inset-0 bg-stone-pattern opacity-30"></div>
        
        {/* Decorative stone rim */}
        <div className="absolute top-0 left-0 w-full h-16 flex justify-center">
          <div className="w-20 h-12 bg-stone-700/80 rounded-b-3xl border-b-8 border-x-8 border-stone-600/80"></div>
        </div>
        
        {/* Water surface with animation */}
        <div className="absolute inset-0 bg-royal-navy/40 backdrop-blur-sm" style={{ top: '35%' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-royal-gold/10 to-royal-navy/40"></div>
          
          {/* Water ripples container */}
          <div ref={particlesRef} className="absolute inset-0 overflow-hidden">
            {/* Initial ripples */}
            <div className="absolute w-24 h-24 rounded-full border border-white/10 animate-ripple-slow" 
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', animationDelay: '0s' }}></div>
            <div className="absolute w-36 h-36 rounded-full border border-white/10 animate-ripple-slow" 
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', animationDelay: '1s' }}></div>
            <div className="absolute w-48 h-48 rounded-full border border-white/10 animate-ripple-slow" 
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', animationDelay: '2s' }}></div>
          </div>
        </div>
        
        {/* Magical particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <Sparkles
              key={i}
              size={8 + Math.random() * 8}
              className="absolute text-royal-gold animate-float"
              style={{
                top: `${35 + Math.random() * 50}%`,
                left: `${10 + Math.random() * 80}%`,
                opacity: 0.4 + Math.random() * 0.4,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Thrown coins */}
        {coins.map(coin => (
          <WishingCoin key={coin.id} x={coin.x} y={coin.y} />
        ))}
        
        {/* Wish result message */}
        {result && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div 
              className={`p-4 rounded-lg text-center max-w-[90%] backdrop-blur-md border-2 transition-all duration-500 ${
                wishResult === 'win' 
                  ? 'bg-royal-gold/20 border-royal-gold text-white shadow-[0_0_15px_rgba(255,215,0,0.5)]' 
                  : 'bg-black/60 border-white/20 text-white/90'
              }`}
            >
              <p className="text-sm md:text-base">{result}</p>
              {wishResult === 'win' && (
                <div className="mt-3 flex items-center justify-center gap-2">
                  <div className="bg-royal-gold/80 text-black rounded-full px-3 py-1 text-xs font-bold inline-flex items-center">
                    <Gem size={14} className="mr-1.5" />
                    Cosmetic Reward
                  </div>
                  <div className="bg-royal-purple/80 text-white rounded-full px-3 py-1 text-xs font-bold inline-flex items-center">
                    <Sparkles size={14} className="mr-1.5" />
                    Rare
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Center glow */}
        <div className="absolute w-20 h-20 rounded-full bg-royal-gold/30 filter blur-xl animate-pulse-slow"></div>
        
        {/* Drop indicator */}
        <ArrowDownCircle 
          size={48} 
          className={`absolute -top-8 text-royal-gold animate-bounce ${isWishing ? 'opacity-0' : 'opacity-80'}`} 
        />
      </div>
      
      {/* Make a wish button */}
      {!isWishing && !result && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <RoyalButton
            variant="royalGold"
            size="lg"
            className="shadow-lg font-medieval"
            onClick={handleWish}
            disabled={!user || user.walletBalance < wishAmount}
            icon={<Coins className="h-5 w-5" />}
          >
            Make a Wish (${wishAmount})
          </RoyalButton>
        </div>
      )}
      
      {/* Loading indicator */}
      {isWishing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-16 w-16 rounded-full bg-black/70 flex items-center justify-center backdrop-blur-sm">
            <div className="h-10 w-10 border-4 border-t-transparent border-royal-gold rounded-full animate-spin"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishingWellDisplay;
