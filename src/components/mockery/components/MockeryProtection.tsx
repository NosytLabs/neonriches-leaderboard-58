
import React from 'react';
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { UserProfile } from '@/types/user';

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
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Shield className="h-5 w-5 mr-2 text-green-400" />
          Mockery Protection
        </CardTitle>
        <CardDescription>
          Shield yourself from mockery effects
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-black/20 rounded-lg">
            <h3 className="font-medium mb-2">Royal Protection Shield</h3>
            <p className="text-sm text-white/70 mb-4">
              Purchase a protection shield to prevent others from applying mockery effects to your profile. Protection lasts for 7 days.
            </p>
            
            <div className="flex justify-between items-center p-2 bg-black/30 rounded">
              <div>
                <p className="text-sm font-medium">Price</p>
                <p className="text-xs text-white/60">7 days of protection</p>
              </div>
              <div className="text-lg font-bold text-royal-gold">$10.00</div>
            </div>
          </div>
          
          <div className="p-4 bg-black/20 rounded-lg">
            <h3 className="font-medium mb-2">Protection Status</h3>
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-2 ${isProtected ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <p className="text-sm">
                {isProtected ? 'Protected' : 'Not Protected'}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          disabled={!user || isProtected}
          onClick={onPurchaseProtection}
        >
          Purchase Protection
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MockeryProtection;
