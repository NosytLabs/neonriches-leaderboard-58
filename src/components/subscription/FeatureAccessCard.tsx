
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, CheckCircle, AlertCircle } from 'lucide-react';
import { useFeatureAccess, Feature } from '@/hooks/use-feature-access';
import { createSubscription } from '@/services/stripeService';
import { useToast } from '@/hooks/use-toast';

interface FeatureAccessCardProps {
  feature: Feature;
  title: string;
  description: string;
  upgradePriceId?: string;
  upgradeButtonText?: string;
  children?: React.ReactNode;
}

const FeatureAccessCard: React.FC<FeatureAccessCardProps> = ({
  feature,
  title,
  description,
  upgradePriceId,
  upgradeButtonText = "Upgrade to Access",
  children
}) => {
  const { hasAccess, isLoading } = useFeatureAccess();
  const { toast } = useToast();
  const hasFeatureAccess = hasAccess(feature);
  
  const handleUpgrade = async () => {
    if (!upgradePriceId) {
      toast({
        title: "Subscription Error",
        description: "No subscription plan is available for this feature",
        variant: "destructive"
      });
      return;
    }
    
    try {
      const result = await createSubscription(upgradePriceId);
      
      if (result?.url) {
        window.location.href = result.url;
      } else {
        throw new Error("Failed to create subscription");
      }
    } catch (error) {
      toast({
        title: "Subscription Error",
        description: "Could not initiate subscription process. Please try again.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <Card className={`glass-morphism ${hasFeatureAccess ? 'border-royal-gold/20' : 'border-white/10'}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          
          {isLoading ? (
            <div className="h-8 w-8 rounded-full bg-white/10 animate-pulse"></div>
          ) : hasFeatureAccess ? (
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-royal-gold/20">
              <CheckCircle className="h-5 w-5 text-royal-gold" />
            </div>
          ) : (
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10">
              <Lock className="h-5 w-5 text-white/60" />
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        {hasFeatureAccess ? (
          children
        ) : (
          <div className="space-y-4">
            <div className="bg-white/5 p-3 rounded-lg flex items-center">
              <AlertCircle className="h-5 w-5 text-white/60 mr-2" />
              <p className="text-sm text-white/70">
                This feature requires a subscription to access.
              </p>
            </div>
            
            {upgradePriceId && (
              <Button 
                className="w-full bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90"
                onClick={handleUpgrade}
              >
                {upgradeButtonText}
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FeatureAccessCard;
