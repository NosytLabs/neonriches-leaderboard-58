
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { UserProfile } from '@/types/user';
import { Button } from '@/components/ui/button';
import { Crown } from 'lucide-react';

interface BriberyBannerProps {
  user: UserProfile;
  onPaymentSuccess: () => void;
}

const BriberyBanner: React.FC<BriberyBannerProps> = ({ user, onPaymentSuccess }) => {
  return (
    <Card className="glass-morphism border-royal-amber/30 bg-gradient-to-r from-royal-amber/10 to-transparent overflow-hidden relative">
      <div className="absolute top-0 right-0 h-full w-1/3 opacity-10 pointer-events-none">
        <Crown className="h-full w-full text-royal-gold" />
      </div>
      <CardContent className="p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-xl font-bold mb-1 text-royal-gold">Royal Bribery</h3>
          <p className="text-white/70 md:max-w-[70%]">
            Want to see what life is like at the top? Purchase a temporary rank boost to preview higher status.
          </p>
        </div>
        <Button 
          onClick={onPaymentSuccess}
          className="bg-royal-amber hover:bg-royal-amber/90 text-black shrink-0"
        >
          <Crown className="mr-2 h-4 w-4" />
          Purchase Rank Preview
        </Button>
      </CardContent>
    </Card>
  );
};

export default BriberyBanner;
