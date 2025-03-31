
import React from 'react';
import { Card } from '@/components/ui/card';
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
    <Card className="p-4 border border-royal-gold/20 bg-gradient-to-b from-black/50 to-royal-purple/5">
      <div className="flex items-center mb-4">
        <Shield className="h-8 w-8 text-royal-gold mr-3" />
        <h3 className="text-lg font-medium">Royal Protection</h3>
      </div>
      
      <p className="text-sm text-muted-foreground mb-6">
        Purchase royal protection to shield yourself from mockery and public shame.
        Protection lasts for 7 days and prevents others from applying mockery effects to your profile.
      </p>
      
      {isProtected ? (
        <div className="bg-green-900/20 border border-green-500/30 rounded-md p-3 text-sm mb-4">
          <p className="font-medium text-green-400">Protected Status Active</p>
          <p className="text-muted-foreground text-xs mt-1">
            Your royal protection is currently active. You are safe from mockery.
          </p>
        </div>
      ) : (
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-md p-3 text-sm mb-4">
          <p className="font-medium text-yellow-400">Vulnerable Status</p>
          <p className="text-muted-foreground text-xs mt-1">
            You are currently vulnerable to mockery from other nobles.
          </p>
        </div>
      )}
      
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between pb-2 border-b border-gray-800">
          <span className="text-sm">Protection Cost:</span>
          <span className="font-mono">$5.00</span>
        </div>
        
        <div className="flex items-center justify-between pb-2 border-b border-gray-800">
          <span className="text-sm">Protection Duration:</span>
          <span className="font-mono">7 days</span>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center">
        <Button 
          variant="outline" 
          className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10"
          onClick={onPurchaseProtection}
          disabled={isProtected}
        >
          {isProtected ? 'Already Protected' : 'Purchase Protection ($5.00)'}
        </Button>
      </div>
    </Card>
  );
};

export default MockeryProtection;
