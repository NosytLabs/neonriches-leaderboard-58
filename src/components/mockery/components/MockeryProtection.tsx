
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
    <Card className="p-4">
      <div className="text-center py-8">
        <Shield className="w-16 h-16 mx-auto text-muted-foreground" />
        
        <h3 className="text-lg font-semibold mt-4">Royal Protection</h3>
        
        {isProtected ? (
          <div className="mt-4">
            <div className="bg-green-500/20 text-green-500 font-medium p-2 rounded-md mb-4">
              You are currently protected from mockery
            </div>
            <p className="text-muted-foreground">
              Your royal status shields you from the mockery of others.
            </p>
          </div>
        ) : (
          <div className="mt-4">
            <p className="text-muted-foreground mb-4">
              Purchase royal protection to prevent others from mocking you.
            </p>
            <Button onClick={() => onPurchaseProtection()}>
              Purchase Protection ($5.00)
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default MockeryProtection;
