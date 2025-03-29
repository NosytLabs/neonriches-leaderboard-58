
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, CheckCircle, AlertCircle, ShoppingBag } from 'lucide-react';
import { useFeatureAccess, Feature } from '@/hooks/use-feature-access';
import { createSubscription } from '@/services/stripeService';
import { useToast } from '@/hooks/use-toast';

interface FeatureAccessCardProps {
  feature: Feature;
  title: string;
  description: string;
  upgradePriceId?: string;
  upgradeButtonText?: string;
  featureId?: string; // For individual feature purchases
  featurePrice?: number; // For individual feature purchases
  purchaseIndividually?: boolean; // Enable individual feature purchase
  children?: React.ReactNode;
}

const FeatureAccessCard: React.FC<FeatureAccessCardProps> = ({
  feature,
  title,
  description,
  upgradePriceId,
  upgradeButtonText = "Upgrade to Access",
  featureId,
  featurePrice,
  purchaseIndividually = false,
  children
}) => {
  const { canAccessFeature, isLoading, purchaseFeatureIndividually, getMarketingFeaturePriceId } = useFeatureAccess();
  const { toast } = useToast();
  // Use canAccessFeature instead of hasAccess
  const hasFeatureAccess = canAccessFeature(feature);
  
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
  
  const handlePurchaseFeature = async () => {
    if (!featureId) {
      toast({
        title: "Purchase Error",
        description: "Feature ID is missing",
        variant: "destructive"
      });
      return;
    }
    
    try {
      const success = await purchaseFeatureIndividually(featureId);
      
      if (success) {
        toast({
          title: "Feature Purchased",
          description: `You now have access to ${title}`,
        });
      } else {
        throw new Error("Purchase failed");
      }
    } catch (error) {
      toast({
        title: "Purchase Error",
        description: "Could not purchase this feature. Please try again.",
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
                This feature requires {purchaseIndividually ? 'a purchase or ' : ''}subscription to access.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              {purchaseIndividually && featureId && (
                <Button
                  className="flex-1 bg-gradient-to-r from-purple-600 to-purple-800 hover:opacity-90"
                  onClick={handlePurchaseFeature}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Purchase Feature {featurePrice ? `($${featurePrice})` : ''}
                </Button>
              )}
              
              {upgradePriceId && (
                <Button 
                  className="flex-1 bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90"
                  onClick={handleUpgrade}
                >
                  {upgradeButtonText}
                </Button>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FeatureAccessCard;
