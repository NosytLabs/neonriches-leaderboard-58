
import React from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, Crown, Sparkles } from 'lucide-react';
import PaymentModal from '@/components/PaymentModal';

interface PromotionBannerProps {
  onPaymentSuccess: (amount: number) => void;
}

const PromotionBanner = ({ onPaymentSuccess }: PromotionBannerProps) => {
  return (
    <div className="glass-morphism rounded-xl p-6 border border-white/10 bg-gradient-to-r from-team-red/10 via-team-green/10 to-team-blue/10 relative overflow-hidden group">
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-700">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-royal-gold rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-royal-purple rounded-full animate-float" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-royal-blue rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '3.5s' }}></div>
        <div className="absolute top-1/3 left-3/4 w-2 h-2 bg-royal-crimson rounded-full animate-float" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center mb-2">
            <Crown size={20} className="text-royal-gold mr-2 animate-crown-glow" />
            <h2 className="text-xl font-bold">Royal Coffers Running Low?</h2>
          </div>
          <p className="text-white/70 max-w-md italic">
            "The path to digital nobility is paved with actual currency. Keep your spending streak alive and climb the meaningless leaderboard!"
          </p>
        </div>
        
        <div className="flex space-x-2">
          <PaymentModal
            amount={100}
            onSuccess={onPaymentSuccess}
          />
          
          <Button className="bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-105">
            <CreditCard size={16} className="mr-2" />
            Manage Tribute
          </Button>
        </div>
      </div>
      
      {/* Satirical fine print */}
      <div className="mt-4 text-xs text-white/40 text-center italic">
        * No actual nobility will be conferred. All payments are non-refundable and purely for entertainment purposes.
        Your investment in digital status is as sound as investing in magic beans.
      </div>
    </div>
  );
};

export default PromotionBanner;
