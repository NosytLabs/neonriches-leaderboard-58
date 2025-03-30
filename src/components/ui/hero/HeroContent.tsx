
import React, { useRef } from 'react';
import useFloatingCoins from '@/hooks/use-floating-coins';
import { Button } from '@/components/ui/button';
import { DollarSign } from 'lucide-react';

const HeroContent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { createBurst } = useFloatingCoins();
  
  const handleSparkleClick = () => {
    if (containerRef.current) {
      createBurst(5);
    }
  };
  
  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-center min-h-[60vh] text-center py-16 px-4 overflow-hidden">
      {/* Hero content */}
      <h1 className="text-4xl md:text-6xl font-bold royal-gradient mb-4 font-royal">
        The Pay-to-Win <br /> Leaderboard Experience
      </h1>
      
      <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-8">
        In our satire of wealth and status, your rank is directly proportional to your spending.
        $1 = 1 unit of rank. The leaderboard never resets.
      </p>
      
      <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-royal-gold/20 mb-8 max-w-2xl">
        <p className="text-xl italic text-royal-gold font-semibold">
          "SpendThrone: Where you can literally buy your way to the top of the leaderboard. Because who needs skills when you've got a wallet, right?"
        </p>
      </div>
      
      <Button 
        className="animate-royal-shine bg-gradient-to-r from-royal-gold via-amber-600 to-royal-gold text-black font-semibold py-6 px-8 rounded-lg"
        onClick={handleSparkleClick}
      >
        <DollarSign size={18} className="mr-2" />
        Contribute to Your Status
      </Button>
      
      <p className="text-sm text-white/50 mt-4 italic max-w-md">
        "Every contribution inflates your digital ego while deflating your actual wealth."
      </p>
    </div>
  );
};

export default HeroContent;
