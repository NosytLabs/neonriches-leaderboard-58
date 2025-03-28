
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Check, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { 
  getMockeryProtectionPrice,
  getEnhancedMockeryProtectionPrice
} from '../utils/mockeryUtils';
import RoyalDivider from '@/components/ui/royal-divider';

interface MockeryProtectionCardProps {
  isProtected: boolean;
  timeRemaining?: number; // in hours
  onPurchaseProtection: (duration: number) => void;
  className?: string;
}

const MockeryProtectionCard: React.FC<MockeryProtectionCardProps> = ({
  isProtected,
  timeRemaining = 0,
  onPurchaseProtection,
  className
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-royal-purple" />
          Royal Mockery Protection
        </CardTitle>
        <CardDescription>
          Shield yourself from the kingdom's mockery
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {isProtected ? (
          <div className="glass-morphism border-royal-purple/30 p-4 rounded-lg bg-royal-purple/10">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-royal-purple flex items-center">
                <Check className="h-4 w-4 mr-2" />
                Active Protection
              </h3>
            </div>
            <p className="text-sm text-white/80 mb-4">
              You are currently protected from all mockery effects.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-white/70 text-sm">
                <Clock className="h-4 w-4 mr-2" />
                Time remaining:
              </div>
              <div className="font-bold text-royal-purple">
                {timeRemaining} {timeRemaining === 1 ? 'hour' : 'hours'}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="glass-morphism border-white/10 p-4 rounded-lg">
              <p className="text-sm text-white/80 mb-4">
                Purchase royal immunity to shield yourself from mockery effects for a set duration.
                While protected, no one can apply mockery effects to your profile.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/70 flex items-center">
                  <Info className="h-4 w-4 mr-2" />
                  Protection Status:
                </div>
                <div className="text-royal-crimson font-bold">
                  Not Protected
                </div>
              </div>
            </div>
            
            <RoyalDivider variant="line" label="PROTECTION PACKAGES" className="my-4" />
            
            <div className="space-y-4">
              <div className="glass-morphism border-royal-purple/30 p-4 rounded-lg bg-royal-purple/10">
                <h3 className="font-bold text-royal-purple mb-2">24-Hour Protection</h3>
                <p className="text-sm text-white/80 mb-3">
                  Secure royal immunity from all mockery effects for 24 hours.
                </p>
                <Button 
                  className="w-full bg-royal-purple hover:bg-royal-purple/90"
                  onClick={() => onPurchaseProtection(24)}
                >
                  Purchase for ${getMockeryProtectionPrice().toFixed(2)}
                </Button>
              </div>
              
              <div className="glass-morphism border-white/10 p-4 rounded-lg">
                <h3 className="font-bold mb-2">7-Day Protection</h3>
                <p className="text-sm text-white/80 mb-3">
                  Extended royal protection for a full week at a discounted rate.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => onPurchaseProtection(24 * 7)}
                >
                  Purchase for ${getEnhancedMockeryProtectionPrice(24 * 7).toFixed(2)}
                </Button>
              </div>
              
              <div className="glass-morphism border-white/10 p-4 rounded-lg">
                <h3 className="font-bold mb-2">30-Day Protection</h3>
                <p className="text-sm text-white/80 mb-3">
                  Premium royal protection for a full month, our best value.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => onPurchaseProtection(24 * 30)}
                >
                  Purchase for ${getEnhancedMockeryProtectionPrice(24 * 30).toFixed(2)}
                </Button>
              </div>
            </div>
          </>
        )}
      </CardContent>
      
      <CardFooter className="text-xs text-white/60 flex justify-center">
        <Tooltip>
          <TooltipTrigger className="flex items-center">
            <Info className="h-3 w-3 mr-1" />
            How does protection work?
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p>
              Royal Protection shields your profile from all mockery effects for the duration purchased.
              Users attempting to mock you will be informed that you are under royal protection.
              Protection does not affect your leaderboard rank or any other functionality.
            </p>
          </TooltipContent>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default MockeryProtectionCard;
