
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Coins, CalendarClock } from 'lucide-react';

interface MockeryProtectionCardProps {
  isProtected: boolean;
  onPurchase: () => void;
}

const MockeryProtectionCard: React.FC<MockeryProtectionCardProps> = ({ 
  isProtected, 
  onPurchase 
}) => {
  return (
    <Card className="glass-morphism border-royal-navy/30">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-16 w-16 bg-royal-navy/20 rounded-full flex items-center justify-center">
            <Shield className="h-8 w-8 text-royal-navy" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Royal Protection</h3>
            <p className="text-white/70">Shield yourself from public mockery</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-black/20 rounded-lg">
            <h4 className="font-medium mb-2">Protection Benefits:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-navy mt-2 mr-2" />
                <span className="text-white/70">Immunity from all mockery for 7 days</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-navy mt-2 mr-2" />
                <span className="text-white/70">Your name is removed from the Hall of Shame</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-royal-navy mt-2 mr-2" />
                <span className="text-white/70">Protection status displayed on your profile</span>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-between items-center p-3 rounded-lg bg-royal-navy/10 border border-royal-navy/20">
            <div className="flex items-center">
              <Coins className="h-5 w-5 text-royal-navy mr-2" />
              <span>Protection Cost</span>
            </div>
            <span className="font-bold">$10.00</span>
          </div>
          
          {isProtected ? (
            <div className="flex items-center justify-center p-3 bg-royal-navy/20 rounded-lg border border-royal-navy/30">
              <CalendarClock className="h-5 w-5 text-royal-navy mr-2" />
              <span>You are protected for 7 days</span>
            </div>
          ) : (
            <Button 
              className="w-full bg-royal-navy hover:bg-royal-navy/90" 
              onClick={onPurchase}
            >
              <Shield className="h-5 w-5 mr-2" />
              Purchase Protection
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MockeryProtectionCard;
