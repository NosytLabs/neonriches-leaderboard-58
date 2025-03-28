
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Clock } from 'lucide-react';

interface MockeryProtectionCardProps {
  isProtected: boolean;
  timeRemaining: number;
  onPurchaseProtection: () => void;
}

const MockeryProtectionCard: React.FC<MockeryProtectionCardProps> = ({
  isProtected,
  timeRemaining,
  onPurchaseProtection
}) => {
  const formatTimeRemaining = (milliseconds: number) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };
  
  return (
    <Card className="glass-morphism border-royal-navy/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center">
          <Shield className="mr-2 h-4 w-4 text-royal-navy" />
          Mockery Protection
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isProtected ? (
          <div className="bg-royal-navy/10 p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className="text-royal-navy h-4 w-4 mr-2" />
                <span className="text-sm">Protected</span>
              </div>
              <div className="flex items-center text-royal-navy">
                <Clock className="h-3 w-3 mr-1" />
                <span className="text-xs">{formatTimeRemaining(timeRemaining)}</span>
              </div>
            </div>
            <p className="text-xs text-white/60 mt-2">
              You are currently protected from all mockery actions.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="bg-red-900/10 p-3 rounded-lg">
              <p className="text-xs text-white/70">
                You are vulnerable to mockery! Purchase protection to avoid being ridiculed.
              </p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full border-royal-navy/50 text-royal-navy hover:bg-royal-navy/10"
              onClick={onPurchaseProtection}
            >
              <Shield className="h-3 w-3 mr-1.5" />
              Purchase Protection ($5)
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MockeryProtectionCard;
