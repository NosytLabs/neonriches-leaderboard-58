
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, ArrowRight } from 'lucide-react';
import { UserProfile } from '@/types/user';

interface BriberyBannerProps {
  user: UserProfile;
  onPaymentSuccess: () => void;
}

const BriberyBanner: React.FC<BriberyBannerProps> = ({ user, onPaymentSuccess }) => {
  // Default implementation for when props are not provided
  const handleDefaultPaymentSuccess = () => {
    console.log('Default payment success handler');
  };

  const handleClick = () => {
    // Use provided callback or default
    (onPaymentSuccess || handleDefaultPaymentSuccess)();
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-royal-purple/30 to-royal-gold/30 animate-gradient-x"></div>
        <CardContent className="p-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Sparkles className="h-10 w-10 text-royal-gold mr-4 animate-pulse" />
              <div>
                <h3 className="text-xl font-bold royal-gradient">Royal Bribery Opportunity</h3>
                <p className="text-white/70">
                  Pay your way to a temporary rank boost. Our undercover agents can help you climb faster.
                </p>
              </div>
            </div>
            
            <button
              onClick={handleClick}
              className="px-4 py-2 bg-royal-crimson hover:bg-royal-crimson/90 text-white rounded-md flex items-center royal-button-glow transition-all"
            >
              <span>Bribe Officials</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          <div className="mt-4 text-xs text-white/50 italic text-center">
            Purely satirical. Bribes only affect cosmetic displays and have no impact on actual rankings.
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default BriberyBanner;
