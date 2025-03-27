
import React from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard } from 'lucide-react';
import PaymentModal from '@/components/PaymentModal';

interface PromotionBannerProps {
  onPaymentSuccess: (amount: number) => void;
}

const PromotionBanner = ({ onPaymentSuccess }: PromotionBannerProps) => {
  return (
    <div className="glass-morphism rounded-xl p-6 border border-white/10 bg-gradient-to-r from-team-red/10 via-team-green/10 to-team-blue/10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Ready to climb higher?</h2>
          <p className="text-white/70 max-w-md">
            Keep your spending streak alive and climb the leaderboard. Every dollar counts!
          </p>
        </div>
        
        <div className="flex space-x-2">
          <PaymentModal
            amount={100}
            onSuccess={onPaymentSuccess}
          />
          
          <Button className="bg-white/10 hover:bg-white/20 text-white">
            <CreditCard size={16} className="mr-2" />
            Manage Payments
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;
