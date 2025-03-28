
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import RoyalButton from '@/components/ui/royal-button';

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
  // Format time remaining
  const formatTimeRemaining = (ms: number): string => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    
    return `${minutes}m`;
  };
  
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Shield className="h-5 w-5 text-royal-gold mr-2" />
          Mockery Protection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-3 bg-black/20 rounded-lg">
            <p className="text-sm text-white/70">
              Purchase royal protection to shield yourself from mockery actions for 24 hours.
            </p>
          </div>
          
          {isProtected ? (
            <div className="bg-royal-gold/10 border border-royal-gold/30 rounded-lg p-4 text-center">
              <div className="mb-3">
                <Badge className="bg-royal-gold/20 border-royal-gold/30 text-royal-gold">
                  Protected
                </Badge>
              </div>
              
              <p className="text-white/70 text-sm">
                You are currently protected from mockery actions.
              </p>
              
              <div className="flex items-center justify-center mt-3 text-royal-gold">
                <Clock className="h-4 w-4 mr-2" />
                <span>{formatTimeRemaining(timeRemaining)} remaining</span>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="mb-4 text-white/70 text-sm">
                You are currently vulnerable to mockery actions.
              </p>
              
              <RoyalButton
                variant="royal"
                onClick={onPurchaseProtection}
              >
                <Shield className="h-4 w-4 mr-2" />
                Purchase Protection - $5
              </RoyalButton>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MockeryProtectionCard;
