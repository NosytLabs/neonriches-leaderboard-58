
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Check, X } from 'lucide-react';
import RoyalButton from '@/components/ui/royal-button';

interface MockeryProtectionCardProps {
  isProtected: boolean;
  onPurchase: () => void;
}

const MockeryProtectionCard: React.FC<MockeryProtectionCardProps> = ({
  isProtected,
  onPurchase
}) => {
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center">
          <Shield className={`mr-3 h-6 w-6 ${isProtected ? 'text-green-500' : 'text-royal-gold'}`} />
          <CardTitle>Royal Protection</CardTitle>
        </div>
        <CardDescription>
          Purchase royal immunity from public mockery
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="p-4 rounded-lg bg-black/20 flex items-center">
          <div className="mr-4">
            {isProtected ? (
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="text-green-500 h-6 w-6" />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="text-red-500 h-6 w-6" />
              </div>
            )}
          </div>
          
          <div>
            <h3 className="font-medium text-lg">
              {isProtected ? 'You are protected!' : 'You are vulnerable to mockery'}
            </h3>
            <p className="text-white/70 text-sm">
              {isProtected 
                ? 'Your protection shield is active - others cannot mock you'
                : 'Purchase protection to shield yourself from public mockery'}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-black/20">
            <h4 className="font-medium mb-2 flex items-center">
              <Shield className="h-4 w-4 mr-2 text-royal-gold" />
              Standard Protection
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                <span className="text-sm text-white/70">Full immunity from all mockery for 7 days</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                <span className="text-sm text-white/70">Royal Shield badge on your profile</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                <span className="text-sm text-white/70">Attempts to mock you will be blocked</span>
              </li>
            </ul>
            
            <div className="mt-4">
              <div className="text-center text-xl font-bold mb-2 text-royal-gold">$10.00</div>
              <RoyalButton 
                variant="royal" 
                className="w-full" 
                onClick={onPurchase}
                disabled={isProtected}
              >
                {isProtected ? 'Already Protected' : 'Purchase Protection'}
              </RoyalButton>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-black/20">
            <h4 className="font-medium mb-2 flex items-center">
              <Shield className="h-4 w-4 mr-2 text-royal-crimson" />
              Premium Protection
            </h4>
            <div className="py-4 px-2 text-center border border-white/10 rounded-lg">
              <p className="text-sm text-white/70 italic">Coming Soon</p>
              <p className="mt-2 text-xs text-white/50">Enhanced protection with counter-mockery abilities</p>
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm text-white/50 italic mt-4">
          "The wise noble knows when to hire protection from the jests of the court."
        </div>
      </CardContent>
    </Card>
  );
};

export default MockeryProtectionCard;
