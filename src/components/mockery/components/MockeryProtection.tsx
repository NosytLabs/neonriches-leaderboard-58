
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { UserProfile } from '@/types/user';

interface MockeryProtectionProps {
  user: UserProfile | null;
  isProtected: boolean;
  onPurchaseProtection: () => boolean;
}

const MockeryProtection: React.FC<MockeryProtectionProps> = ({ 
  user, 
  isProtected, 
  onPurchaseProtection 
}) => {
  return (
    <Card className="p-6">
      <div className="text-center">
        <Shield className="w-16 h-16 mx-auto mb-4 text-green-500 opacity-50" />
        
        <h3 className="text-xl font-semibold mb-2">
          {isProtected ? 'You Are Protected' : 'Purchase Protection'}
        </h3>
        
        <p className="text-white/70 mb-6">
          {isProtected 
            ? 'Your profile is currently protected from mockery attempts.'
            : 'Shield your profile from mockery attempts by purchasing royal protection.'}
        </p>
        
        {!isProtected && (
          <div className="space-y-4">
            <div className="p-4 border border-white/10 rounded-lg bg-white/5">
              <div className="text-xl font-bold mb-1">$5.00</div>
              <div className="text-sm text-white/60">24 hour protection</div>
            </div>
            
            <Button 
              className="w-full" 
              onClick={() => onPurchaseProtection()}
              disabled={!user}
            >
              <Shield className="w-4 h-4 mr-2" />
              Purchase Protection
            </Button>
          </div>
        )}
        
        {isProtected && (
          <div className="p-4 border border-green-500/20 rounded-lg bg-green-500/5">
            <div className="text-sm text-green-400">
              Your protection will expire in 24 hours.
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default MockeryProtection;
