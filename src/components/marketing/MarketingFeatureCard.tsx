
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { LucideIcon } from 'lucide-react';
import { useSound } from '@/hooks/use-sound';
import { useFeatureAccess, Feature, FeatureId } from '@/hooks/use-feature-access';

interface MarketingFeatureCardProps {
  feature: Feature;
  icon: LucideIcon;
  onPurchase?: () => void;
}

const MarketingFeatureCard: React.FC<MarketingFeatureCardProps> = ({
  feature,
  icon: Icon,
  onPurchase
}) => {
  const featureAccess = useFeatureAccess();
  const { toast } = useToast();
  const sound = useSound();
  const [purchasing, setPurchasing] = React.useState(false);

  const hasAccess = featureAccess.hasAccess(feature.id);

  const handlePurchase = async () => {
    setPurchasing(true);
    
    try {
      const result = await featureAccess.purchaseFeatureIndividually(feature.id);
      
      if (result.success) {
        sound.playSound('purchase');
        toast({
          title: "Feature Unlocked",
          description: `You've successfully unlocked ${feature.name}!`,
          variant: "success"
        });
        
        if (onPurchase) onPurchase();
        
        // If there's a URL for checkout, redirect
        if (result.url) {
          window.location.href = result.url;
        }
      } else {
        sound.playSound('error');
        toast({
          title: "Purchase Failed",
          description: "Unable to complete your purchase. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Purchase error:", error);
      sound.playSound('error');
      toast({
        title: "Purchase Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setPurchasing(false);
    }
  };

  return (
    <Card className="overflow-hidden border-white/10 bg-black/30">
      <CardHeader className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
        <CardTitle className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-indigo-300" />
          {feature.name}
          {hasAccess && (
            <Badge variant="outline" className="ml-auto bg-green-900/30 text-green-300 border-green-500/50">
              Unlocked
            </Badge>
          )}
        </CardTitle>
        <CardDescription>
          {feature.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-2">
          {Array.isArray(feature.tier) ? feature.tier.map((tier, i) => (
            <div key={i} className="flex items-center text-sm">
              <div className="w-2 h-2 rounded-full bg-indigo-400 mr-2" />
              <span>{tier}</span>
            </div>
          )) : (
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 rounded-full bg-indigo-400 mr-2" />
              <span>{feature.tier}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        {hasAccess ? (
          <Button variant="outline" className="w-full" disabled>
            Already Unlocked
          </Button>
        ) : (
          <Button 
            onClick={handlePurchase}
            disabled={purchasing}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
          >
            {purchasing ? "Processing..." : `Unlock for $${feature.price || 9.99}`}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default MarketingFeatureCard;
