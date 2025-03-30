
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Crown } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { useTier } from '@/hooks/useTier';
import TierBadge from '@/components/tiers/TierBadge';
import TierProgressBar from '@/components/tiers/TierProgressBar';
import TierBenefitsList from '@/components/tiers/TierBenefitsList';

interface ProfileTierCardProps {
  totalSpent: number;
  onUpgrade?: () => void;
  className?: string;
}

const ProfileTierCard: React.FC<ProfileTierCardProps> = ({ 
  totalSpent, 
  onUpgrade,
  className 
}) => {
  const { 
    currentTier, 
    currentTierDetails, 
    nextTierDetails,
    amountToNextTier,
    isMaxTier
  } = useTier({ userSpend: totalSpent });
  
  return (
    <Card className={`glass-morphism border-white/10 ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-lg font-royal">
          <Crown className="mr-2 h-5 w-5 text-royal-gold" />
          Royal Status
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-white/70 mb-1">Current Tier</p>
            <TierBadge tier={currentTier} size="lg" />
          </div>
          
          <div className="text-right">
            <p className="text-sm text-white/70 mb-1">Total Spent</p>
            <p className="text-xl font-bold">{formatCurrency(totalSpent)}</p>
          </div>
        </div>
        
        <TierProgressBar currentSpend={totalSpent} />
        
        <div className="bg-black/20 rounded-lg p-4">
          <h4 className="font-medium mb-2">Your Royal Benefits</h4>
          <TierBenefitsList tier={currentTier} />
        </div>
        
        {!isMaxTier && nextTierDetails && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">Next Tier</h4>
              <TierBadge tier={nextTierDetails.name} size="sm" />
            </div>
            
            <p className="text-sm text-white/70 mb-3">
              Spend {formatCurrency(amountToNextTier)} more to unlock additional benefits.
            </p>
            
            {onUpgrade && (
              <Button 
                onClick={onUpgrade} 
                className="w-full bg-royal-gold hover:bg-royal-gold/90 text-black"
              >
                Upgrade Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileTierCard;
