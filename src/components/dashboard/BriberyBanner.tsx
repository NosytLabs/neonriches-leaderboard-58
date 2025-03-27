
import React from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, Crown, Sparkles, Star, DollarSign, Gem } from 'lucide-react';
import PaymentModal from '@/components/PaymentModal';
import { toast } from "@/hooks/use-toast";

interface PromotionBannerProps {
  onPaymentSuccess: (amount: number) => void;
}

const BriberyBanner = ({ onPaymentSuccess }: PromotionBannerProps) => {
  const handleQuickBribe = (amount: number) => {
    toast({
      title: "Royal Coffers Expanded!",
      description: `Your generous tribute of $${amount} has been graciously accepted by the crown.`,
      duration: 5000,
    });
    onPaymentSuccess(amount);
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
            <Crown size={20} className="text-royal-gold mr-2 animate-crown-glow" />
            <h2 className="text-xl font-bold royal-gradient">Royal Tribute Required</h2>
          </div>
          <p className="text-white/70 italic">
            "Distinguished nobles must continuously demonstrate their dedication to the crown through generous financial offerings. The more you contribute, the more meaningless digital prestige you shall receive!"
          </p>
        </div>
        
        <div className="flex flex-col space-y-3">
          <div className="flex space-x-2">
            <Button 
              onClick={() => handleQuickBribe(25)}
              className="bg-gradient-to-r from-royal-purple/80 to-royal-purple text-white transition-all duration-300 hover:scale-105 min-w-24"
            >
              <DollarSign size={16} className="mr-2" />
              $25
            </Button>
            
            <Button 
              onClick={() => handleQuickBribe(50)}
              className="bg-gradient-to-r from-royal-blue/80 to-royal-blue text-white transition-all duration-300 hover:scale-105 min-w-24"
            >
              <Star size={16} className="mr-2" />
              $50
            </Button>
            
            <Button 
              onClick={() => handleQuickBribe(100)}
              className="bg-gradient-to-r from-royal-gold/80 to-royal-gold text-white transition-all duration-300 hover:scale-105 min-w-24"
            >
              <Gem size={16} className="mr-2" />
              $100
            </Button>
          </div>
          
          <PaymentModal
            amount={100}
            onSuccess={onPaymentSuccess}
            trigger={
              <Button className="bg-gradient-to-r from-royal-purple via-royal-gold to-royal-blue text-white transition-all duration-300 hover:opacity-90 w-full">
                <Sparkles size={16} className="mr-2" />
                Custom Tribute
              </Button>
            }
          />
        </div>
      </div>
      
      {/* Satirical fine print */}
      <div className="mt-4 text-xs text-white/40 text-center italic">
        * Your generous contribution directly funds the lavish digital lifestyle of our completely fabricated nobility. 
        All payments are non-refundable and will not enhance your actual life in any meaningful way.
      </div>
    </div>
  );
};

export default BriberyBanner;
