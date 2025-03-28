
import React from 'react';
import { UserProfile } from '@/types/user';
import { Award, Check, Shield, Crown } from 'lucide-react';
import RoyalButton from '@/components/ui/royal-button';

interface FoundersPassProps {
  onPurchase: () => void;
  user: UserProfile;
}

const FoundersPass: React.FC<FoundersPassProps> = ({ onPurchase, user }) => {
  return (
    <div className="glass-morphism border-royal-gold/30 rounded-lg p-5 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-40 h-40 bg-royal-gold/10 rounded-full filter blur-[80px] -z-0"></div>
      
      <div className="flex items-start space-x-4 relative z-10">
        <div className="mt-1">
          <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center">
            <Award className="h-6 w-6 text-royal-gold" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="font-medieval text-xl font-bold royal-gradient mb-2">Founder's Pass</h3>
          <p className="text-white/70 text-sm mb-3">
            Become one of the founding patrons of our digital kingdom and enjoy permanent royal privileges.
          </p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-start">
              <Check size={16} className="mt-0.5 mr-2 text-royal-gold" />
              <span className="text-sm text-white/80">Permanent "Founder" title and badge</span>
            </div>
            <div className="flex items-start">
              <Check size={16} className="mt-0.5 mr-2 text-royal-gold" />
              <span className="text-sm text-white/80">Exclusive access to founder-only cosmetics</span>
            </div>
            <div className="flex items-start">
              <Check size={16} className="mt-0.5 mr-2 text-royal-gold" />
              <span className="text-sm text-white/80">25% discount on all future purchases</span>
            </div>
            <div className="flex items-start">
              <Check size={16} className="mt-0.5 mr-2 text-royal-gold" />
              <span className="text-sm text-white/80">Premium profile visibility</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-royal-gold font-bold text-xl">$100</div>
            <RoyalButton
              variant="royalGold"
              size="sm"
              onClick={onPurchase}
            >
              <Crown size={14} className="mr-1.5" />
              Become a Founder
            </RoyalButton>
          </div>
          
          <div className="mt-2 text-xs text-white/50 flex items-center">
            <Shield size={12} className="mr-1 text-royal-gold" />
            <span>Only 100 Founder's Passes available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersPass;
