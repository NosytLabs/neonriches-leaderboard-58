
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, Crown, Sparkles, Star, DollarSign, Gem, Coins, Trophy, HandCoins } from 'lucide-react';
import PaymentModal from '@/components/PaymentModal';
import { toast } from "@/hooks/use-toast";

interface PromotionBannerProps {
  onPaymentSuccess: (amount: number) => void;
}

const BriberyBanner = ({ onPaymentSuccess }: PromotionBannerProps) => {
  const [hoveredAmount, setHoveredAmount] = useState<number | null>(null);

  const handleQuickBribe = (amount: number) => {
    // Generate a royal-sounding title based on the amount
    const titles = {
      25: "Humble Squire",
      50: "Knight of the Realm",
      100: "Baron of Expenditure",
      250: "Duke of Disposable Income",
      500: "Grand Marquis of Monetary Excess"
    };
    
    const title = amount <= 25 ? titles[25] : 
                 amount <= 50 ? titles[50] :
                 amount <= 100 ? titles[100] :
                 amount <= 250 ? titles[250] : titles[500];
    
    toast({
      title: `${title} Status Achieved!`,
      description: `Your tribute of $${amount} has been graciously accepted. The royal coffers grow heavier with your sacrifice.`,
      duration: 5000,
    });
    onPaymentSuccess(amount);
  };

  const getButtonIcon = (amount: number) => {
    if (amount <= 25) return <DollarSign size={16} className="mr-2" />;
    if (amount <= 50) return <Star size={16} className="mr-2" />;
    if (amount <= 100) return <Gem size={16} className="mr-2" />;
    return <Crown size={16} className="mr-2" />;
  };

  return (
    <div className="glass-morphism rounded-xl p-6 border border-white/10 bg-gradient-to-r from-team-red/10 via-team-gold/10 to-team-blue/10 relative overflow-hidden group transition-all duration-500 hover:border-royal-gold/30">
      {/* Royal background element */}
      <div className="absolute -right-16 -bottom-16 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <Crown size={200} className="text-royal-gold" />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-700">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-royal-gold rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-royal-purple rounded-full animate-float" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-royal-blue rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '3.5s' }}></div>
        <div className="absolute top-1/3 left-3/4 w-2 h-2 bg-royal-crimson rounded-full animate-float" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="mb-4 md:mb-0 max-w-md">
          <div className="flex items-center mb-2">
            <div className="relative">
              <Crown size={24} className="text-royal-gold mr-2 animate-crown-glow" />
              <div className="absolute -inset-1 bg-royal-gold/10 rounded-full blur-md animate-pulse-slow"></div>
            </div>
            <h2 className="text-xl font-bold royal-gradient">Royal Treasury Awaits Your Tribute</h2>
          </div>
          <p className="text-white/70 italic">
            "The Crown demands regular financial homage! Remember, noble one, your status in our digital kingdom is directly proportional to the weight of your tribute. Contribute generously, and watch as your meaningless digital rank soars!"
          </p>
          
          <div className="mt-3 text-xs text-white/50 flex items-center">
            <HandCoins size={14} className="text-royal-gold mr-1" />
            <span>Over 10,000 nobles have contributed this week</span>
          </div>
        </div>
        
        <div className="flex flex-col space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <Button 
              onClick={() => handleQuickBribe(25)}
              onMouseEnter={() => setHoveredAmount(25)}
              onMouseLeave={() => setHoveredAmount(null)}
              className={`relative overflow-hidden bg-gradient-to-r from-royal-purple/80 to-royal-purple text-white transition-all duration-300 hover:scale-105 min-w-24 group`}
            >
              {hoveredAmount === 25 && (
                <div className="absolute inset-0 bg-royal-gold/10 animate-pulse-slow"></div>
              )}
              <DollarSign size={16} className="mr-2" />
              $25
              <span className="absolute -bottom-full group-hover:bottom-0 left-0 right-0 text-[10px] bg-black/50 transition-all duration-300 py-1">
                Humble Squire
              </span>
            </Button>
            
            <Button 
              onClick={() => handleQuickBribe(50)}
              onMouseEnter={() => setHoveredAmount(50)}
              onMouseLeave={() => setHoveredAmount(null)}
              className={`relative overflow-hidden bg-gradient-to-r from-royal-blue/80 to-royal-blue text-white transition-all duration-300 hover:scale-105 min-w-24 group`}
            >
              {hoveredAmount === 50 && (
                <div className="absolute inset-0 bg-royal-gold/10 animate-pulse-slow"></div>
              )}
              <Star size={16} className="mr-2" />
              $50
              <span className="absolute -bottom-full group-hover:bottom-0 left-0 right-0 text-[10px] bg-black/50 transition-all duration-300 py-1">
                Knight
              </span>
            </Button>
            
            <Button 
              onClick={() => handleQuickBribe(100)}
              onMouseEnter={() => setHoveredAmount(100)}
              onMouseLeave={() => setHoveredAmount(null)}
              className={`relative overflow-hidden bg-gradient-to-r from-royal-gold/80 to-royal-gold text-white transition-all duration-300 hover:scale-105 min-w-24 group`}
            >
              {hoveredAmount === 100 && (
                <div className="absolute inset-0 bg-royal-gold/10 animate-pulse-slow"></div>
              )}
              <Gem size={16} className="mr-2" />
              $100
              <span className="absolute -bottom-full group-hover:bottom-0 left-0 right-0 text-[10px] bg-black/50 transition-all duration-300 py-1">
                Baron
              </span>
            </Button>
            
            <Button 
              onClick={() => handleQuickBribe(250)}
              onMouseEnter={() => setHoveredAmount(250)}
              onMouseLeave={() => setHoveredAmount(null)}
              className={`relative overflow-hidden bg-gradient-to-r from-royal-crimson to-royal-purple text-white transition-all duration-300 hover:scale-105 min-w-24 group`}
            >
              {hoveredAmount === 250 && (
                <div className="absolute inset-0 bg-royal-gold/10 animate-pulse-slow"></div>
              )}
              <Crown size={16} className="mr-2" />
              $250
              <span className="absolute -bottom-full group-hover:bottom-0 left-0 right-0 text-[10px] bg-black/50 transition-all duration-300 py-1">
                Duke
              </span>
            </Button>
          </div>
          
          <PaymentModal
            amount={100}
            onSuccess={onPaymentSuccess}
            trigger={
              <Button className="bg-gradient-to-r from-royal-purple via-royal-gold to-royal-blue text-white transition-all duration-300 hover:opacity-90 w-full relative group overflow-hidden">
                <span className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-300"></span>
                <div className="relative flex items-center">
                  <div className="mr-2 relative">
                    <Coins size={18} className="text-white animate-pulse-slow" />
                    <div className="absolute -inset-1 bg-royal-gold/20 rounded-full blur-sm"></div>
                  </div>
                  <span>Custom Royal Tribute</span>
                </div>
              </Button>
            }
          />
        </div>
      </div>
      
      {/* Status bar showing progress to next tier */}
      <div className="mt-4 glass-morphism border-white/10 rounded-lg p-3">
        <div className="flex justify-between items-center mb-1 text-xs">
          <span className="text-white/60">Progress to Grand Duke ($500)</span>
          <span className="text-royal-gold font-semibold">$250/$500</span>
        </div>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-royal-purple via-royal-gold to-royal-crimson relative"
            style={{ width: '50%' }}
          >
            <div className="absolute top-0 right-0 h-full w-4 bg-white/30 animate-shimmer"></div>
          </div>
        </div>
      </div>
      
      {/* Satirical fine print */}
      <div className="mt-4 text-xs text-white/40 text-center italic">
        * Your "generous contribution" directly funds our completely fabricated nobility system. 
        All payments are non-refundable and will not enhance your actual life in any meaningful way.
        <span className="block mt-1">By contributing, you acknowledge the absurdity of spending real money for imaginary status.</span>
      </div>
    </div>
  );
};

export default BriberyBanner;
