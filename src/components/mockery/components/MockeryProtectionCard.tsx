
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Check, Info } from 'lucide-react';
import { useToastContext } from '@/contexts/ToastContext';
import RoyalButton from '@/components/ui/royal-button';
import { useAuth } from '@/contexts/AuthContext';
import { getMockeryProtectionPrice } from '../utils/mockeryUtils';

interface MockeryProtectionCardProps {
  isProtected: boolean;
  timeRemaining?: number; // In hours
  onPurchaseProtection: () => void;
}

const MockeryProtectionCard: React.FC<MockeryProtectionCardProps> = ({
  isProtected,
  timeRemaining = 0,
  onPurchaseProtection
}) => {
  const { addToast } = useToastContext();
  const { user } = useAuth();
  const protectionPrice = getMockeryProtectionPrice();
  
  const handlePurchase = () => {
    onPurchaseProtection();
    addToast({
      title: "Royal Protection Acquired",
      description: "You are now protected from mockery for 24 hours.",
    });
  };
  
  return (
    <Card className="glass-morphism border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-royal-purple/10 to-transparent pointer-events-none"></div>
      
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-royal-purple" />
          Royal Mockery Protection
        </CardTitle>
        <CardDescription>
          Shield yourself from public mockery with royal protection
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {isProtected ? (
          <div className="glass-morphism border-royal-purple/30 bg-royal-purple/10 rounded-lg p-4 flex items-center">
            <div className="mr-4">
              <div className="w-12 h-12 rounded-full bg-royal-purple/20 flex items-center justify-center">
                <Shield className="h-6 w-6 text-royal-purple" />
              </div>
            </div>
            <div>
              <h3 className="font-medium text-royal-purple">Protection Active</h3>
              <p className="text-sm text-white/70 flex items-center mt-1">
                <Clock className="h-3 w-3 mr-1" />
                {timeRemaining > 0 ? `${timeRemaining} hours remaining` : 'Less than 1 hour remaining'}
              </p>
            </div>
          </div>
        ) : (
          <div className="glass-morphism border-white/10 rounded-lg p-4">
            <h3 className="font-medium mb-2">Purchase Royal Protection</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-royal-gold mr-2 mt-0.5" />
                <span>Prevent others from applying mockery effects to your profile for 24 hours</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-royal-gold mr-2 mt-0.5" />
                <span>Showcase your elite status with a royal shield indicator</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-royal-gold mr-2 mt-0.5" />
                <span>Maintain your dignified appearance on the leaderboard</span>
              </li>
            </ul>
            
            <div className="mt-4 flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <div className="text-sm">
                <span className="text-white/70">Protection Price:</span>
                <span className="font-bold text-royal-gold ml-1">${protectionPrice.toFixed(2)}</span>
              </div>
              <span className="text-xs text-white/50">24 hours of immunity</span>
            </div>
          </div>
        )}
        
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-xs text-white/70">
          <Info className="h-3 w-3 text-white/70" />
          <p>Protection is a cosmetic feature and does not affect your leaderboard ranking.</p>
        </div>
      </CardContent>
      
      <CardFooter>
        {isProtected ? (
          <Button 
            className="w-full glass-morphism border-royal-purple/30 bg-royal-purple/10 text-royal-purple hover:bg-royal-purple/20"
            disabled
          >
            <Shield className="mr-2 h-4 w-4" />
            Protection Active
          </Button>
        ) : (
          <RoyalButton
            variant="royal"
            className="w-full"
            shimmer={true}
            glow={true}
            onClick={handlePurchase}
          >
            <Shield className="mr-2 h-4 w-4" />
            Purchase Royal Protection
          </RoyalButton>
        )}
      </CardFooter>
    </Card>
  );
};

export default MockeryProtectionCard;
