
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Gem, Rocket } from 'lucide-react';
import PaymentModal from '@/components/PaymentModal';

interface BriberyBannerProps {
  user: {
    rank: number;
  };
  onPaymentSuccess: (amount: number) => void;
}

const BriberyBanner = ({ user, onPaymentSuccess }: BriberyBannerProps) => {
  const [amount, setAmount] = useState(50);

  return (
    <Card className="glass-morphism border-white/10 relative overflow-hidden group">
      {/* Animated crown background element */}
      <div className="absolute -right-16 -bottom-16 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <Crown size={200} />
      </div>
      
      <CardHeader>
        <div className="flex items-center">
          <Crown className="mr-2 h-5 w-5 text-royal-gold animate-crown-glow" />
          <CardTitle className="font-royal">Bribe Your Way to the Top</CardTitle>
        </div>
        <CardDescription>Spend your way to a higher rank!</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="text-sm text-white/70">
            <p>Feeling overlooked? Tired of being just another face in the crowd?</p>
            <p className="mt-2">Here's your chance to shine! Bribe your way to a higher rank and let everyone know you're a force to be reckoned with.</p>
          </div>
          
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-2">
              <Button 
                variant="outline" 
                className={`glass-morphism border-white/10 text-white hover:bg-white/10 transition-all duration-300 ${amount === 50 ? 'bg-white/10 border-royal-gold/30' : ''}`}
                onClick={() => setAmount(50)}
              >$50</Button>
              <Button 
                variant="outline" 
                className={`glass-morphism border-white/10 text-white hover:bg-white/10 transition-all duration-300 ${amount === 100 ? 'bg-white/10 border-royal-gold/30' : ''}`}
                onClick={() => setAmount(100)}
              >$100</Button>
              <Button 
                variant="outline" 
                className={`glass-morphism border-white/10 text-white hover:bg-white/10 transition-all duration-300 ${amount === 250 ? 'bg-white/10 border-royal-gold/30' : ''}`}
                onClick={() => setAmount(250)}
              >$250</Button>
            </div>
            
            <PaymentModal 
              amount={amount}
              onSuccess={onPaymentSuccess}
              trigger={
                <Button className="w-full bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy text-white flex items-center justify-center mt-2">
                  <Gem size={16} className="mr-2" />
                  Ascend the Ranks
                </Button>
              }
            />
            
            <p className="text-xs text-white/50 text-center italic mt-2">
              "Sometimes, a little nudge is all you need to reach the top."
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex items-center">
            <Rocket size={16} className="text-royal-gold mr-2" />
            <h4 className="text-sm font-semibold">Why Bribe?</h4>
          </div>
          <ul className="mt-2 text-xs text-white/70 space-y-1">
            <li><span className="font-bold text-royal-gold">Instant Recognition:</span> Skip the grind and jump ahead in the ranks.</li>
            <li><span className="font-bold text-royal-gold">Exclusive Perks:</span> Higher ranks unlock exclusive features and benefits.</li>
            <li><span className="font-bold text-royal-gold">Bragging Rights:</span> Let everyone know you're a top player with a title to match.</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BriberyBanner;
