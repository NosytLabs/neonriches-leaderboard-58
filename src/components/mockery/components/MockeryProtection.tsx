
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { getMockeryCost } from '@/utils/mockery';

interface MockeryProtectionProps {
  user: UserProfile | null;
  isProtected: boolean;
  onPurchaseProtection: () => void;
}

const MockeryProtection: React.FC<MockeryProtectionProps> = ({
  user,
  isProtected,
  onPurchaseProtection
}) => {
  // Get the cost of protection
  const protectionCost = getMockeryCost('protection');
  
  return (
    <Card className="p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto bg-royal-gold/20 rounded-full flex items-center justify-center mb-4">
          <Shield className="h-8 w-8 text-royal-gold" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Royal Protection</h3>
        <p className="text-white/70 text-sm">
          Purchase royal protection to shield yourself from mockery for 72 hours.
        </p>
      </div>
      
      <CardContent className="space-y-4 px-0 pt-4">
        {isProtected ? (
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
            <p className="font-medium text-green-400">You are currently protected from mockery</p>
            <p className="text-sm text-white/70 mt-1">Your royal immunity shields you from public ridicule</p>
          </div>
        ) : (
          <div className="p-4 bg-royal-gold/10 border border-royal-gold/20 rounded-lg flex flex-col items-center">
            <p className="mb-4 text-white/80">
              Prevent others from mocking you with royal immunity
            </p>
            <Button 
              onClick={onPurchaseProtection}
              className="bg-royal-gold hover:bg-royal-gold/90"
            >
              Purchase Protection (${protectionCost.toFixed(2)})
            </Button>
          </div>
        )}
        
        <div className="text-sm text-white/50 italic text-center mt-4">
          Protection is a premium feature that prevents other users from applying mockery effects to your profile.
        </div>
      </CardContent>
    </Card>
  );
};

export default MockeryProtection;
