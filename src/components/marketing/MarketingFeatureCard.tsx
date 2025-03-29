
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Lock, Tag, User } from 'lucide-react';
import { useFeatureAccess } from '@/hooks/use-feature-access';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { MARKETING_FEATURES } from '@/config/subscriptions';

interface MarketingFeatureCardProps {
  featureId: string;
  onPurchase?: () => void;
}

const MarketingFeatureCard: React.FC<MarketingFeatureCardProps> = ({ 
  featureId,
  onPurchase
}) => {
  const { toast } = useToast();
  const { user } = useAuth();
  const { canAccessFeature, purchaseFeatureIndividually } = useFeatureAccess();
  
  // Find feature details
  const feature = MARKETING_FEATURES.find(f => f.id === featureId);
  if (!feature) return null;
  
  // Check if user already has this feature
  const hasFeature = user?.purchasedFeatures?.includes(featureId) || 
                   canAccessFeature(featureId);
  
  // Check if user has appropriate subscription tier
  const userTier = user?.subscription?.tier || 'free';
  const canPurchase = user && feature.tier !== 'royal';
  
  const handleFeaturePurchase = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to purchase this feature",
        variant: "destructive"
      });
      return;
    }
    
    try {
      const success = await purchaseFeatureIndividually(feature.id);
      
      if (success) {
        toast({
          title: "Purchase Successful",
          description: `You now have access to ${feature.name}`,
        });
        
        if (onPurchase) onPurchase();
      } else {
        throw new Error("Purchase failed");
      }
    } catch (error) {
      toast({
        title: "Purchase Failed",
        description: "Unable to complete your purchase. Please try again.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <Card className={`glass-morphism ${hasFeature ? 'border-green-500/30' : 'border-white/10'}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{feature.name}</CardTitle>
          {hasFeature ? (
            <Badge className="bg-green-600 text-white">Active</Badge>
          ) : (
            <Badge className="bg-white/10 text-white/70">Available</Badge>
          )}
        </div>
        <CardDescription>{feature.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Tag className="h-4 w-4 text-white/70 mr-1" />
            <span className="text-lg font-bold">${feature.price}</span>
          </div>
          
          <Badge variant="outline" className={`
            ${feature.tier === 'standard' ? 'bg-blue-500/20 text-blue-300' : 
              feature.tier === 'premium' ? 'bg-purple-500/20 text-purple-300' : 
              'bg-royal-gold/20 text-royal-gold'}
          `}>
            {feature.tier.charAt(0).toUpperCase() + feature.tier.slice(1)} Tier
          </Badge>
        </div>
        
        <div className="space-y-2 mb-4">
          {feature.features.map((feat, i) => (
            <div key={i} className="flex items-start">
              <Check className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
              <span className="ml-2 text-sm text-white/80">{feat}</span>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter>
        {hasFeature ? (
          <Button
            className="w-full bg-green-600 text-white hover:bg-green-700"
            disabled
          >
            <Check className="mr-2 h-4 w-4" />
            Feature Active
          </Button>
        ) : canPurchase ? (
          <Button
            className="w-full bg-purple-600 hover:bg-purple-700"
            onClick={handleFeaturePurchase}
          >
            Purchase Feature
          </Button>
        ) : (
          <Button
            className="w-full bg-white/10 text-white/70"
            disabled
          >
            <Lock className="mr-2 h-4 w-4" />
            Requires {feature.tier.charAt(0).toUpperCase() + feature.tier.slice(1)} Tier
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default MarketingFeatureCard;
