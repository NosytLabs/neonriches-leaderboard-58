
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Crown, Gem, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SUBSCRIPTION_TIERS } from '@/config/subscriptions';
import { createSubscription } from '@/services/stripeService';
import { useToast } from '@/hooks/use-toast';

export interface SubscriptionTier {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  recommended: boolean;
  priceId: string;
  yearlyPriceId: string;
}

// Provide access to the subscription tiers for other components
export const subscriptionTiers = SUBSCRIPTION_TIERS;

const UpgradePromotion: React.FC = () => {
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const handleSubscribe = async (tier: SubscriptionTier) => {
    try {
      setIsLoading({ ...isLoading, [tier.id]: true });
      
      const priceId = billingInterval === 'yearly' ? tier.yearlyPriceId : tier.priceId;
      // Add empty string as the third parameter
      const result = await createSubscription(priceId, billingInterval, '');
      
      if (result?.subscriptionId) {
        // Use subscriptionId from result instead of URL
        window.location.href = `/subscription/success?id=${result.subscriptionId}`;
      } else {
        throw new Error("Failed to create subscription session");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        title: "Subscription Error",
        description: "Could not process your subscription request. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading({ ...isLoading, [tier.id]: false });
    }
  };

  const getTierIcon = (tierId: string) => {
    switch (tierId) {
      case 'standard':
        return <Gem className="h-5 w-5" />;
      case 'premium':
        return <Sparkles className="h-5 w-5" />;
      case 'royal':
        return <Crown className="h-5 w-5" />;
      default:
        return <Gem className="h-5 w-5" />;
    }
  };

  const getButtonColor = (tierId: string) => {
    switch (tierId) {
      case 'standard':
        return 'bg-gradient-to-r from-slate-600 to-slate-700 hover:opacity-90';
      case 'premium':
        return 'bg-gradient-to-r from-purple-700 to-purple-800 hover:opacity-90';
      case 'royal':
        return 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:opacity-90 text-black';
      default:
        return '';
    }
  };

  const getSavingsPercentage = (monthly: number, yearly: number) => {
    const monthlyCost = monthly * 12;
    const yearlyCost = yearly;
    return Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100);
  };

  // Convert SUBSCRIPTION_TIERS to an array and add recommended property
  const subscriptionTiersArray = Object.values(SUBSCRIPTION_TIERS).map(tier => ({
    ...tier,
    recommended: tier.id === 'premium', // Set the premium tier as recommended
    priceId: `price_${tier.id}_monthly`, // Add priceId property
    yearlyPriceId: `price_${tier.id}_yearly` // Add yearlyPriceId property
  }));

  return (
    <div className="w-full max-w-6xl mx-auto py-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Enhance Your Profile</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Choose a subscription plan to unlock premium features and stand out from the crowd.
          <span className="block mt-2 text-sm text-white/50 italic">
            Note: Subscriptions provide cosmetic benefits only and do not directly increase your rank.
          </span>
        </p>
        
        <div className="flex justify-center mt-6">
          <Tabs 
            defaultValue="monthly" 
            value={billingInterval}
            onValueChange={(v) => setBillingInterval(v as 'monthly' | 'yearly')} 
            className="w-full max-w-xs"
          >
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">
                Yearly
                <Badge variant="outline" className="ml-2 bg-green-500/20 text-green-400 border-0">
                  Save up to 20%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subscriptionTiersArray.map((tier) => (
          <Card 
            key={tier.id} 
            className={`glass-morphism 
              ${tier.recommended ? 'border-purple-500/40 ring-2 ring-purple-500/20' : 'border-white/10'}
              relative overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1`}
          >
            {tier.recommended && (
              <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-medium px-2 py-0.5 rounded-bl">
                RECOMMENDED
              </div>
            )}
            
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-full ${
                  tier.id === 'standard' ? 'bg-slate-800' :
                  tier.id === 'premium' ? 'bg-purple-800' : 'bg-amber-500'
                }`}>
                  {getTierIcon(tier.id)}
                </div>
                <div>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-3xl font-bold">
                  ${billingInterval === 'monthly' ? tier.priceMonthly : tier.priceYearly}
                </span>
                <span className="text-white/60">
                  /{billingInterval === 'monthly' ? 'month' : 'year'}
                </span>
                
                {billingInterval === 'yearly' && (
                  <div className="mt-1 text-xs text-green-400">
                    Save {getSavingsPercentage(tier.priceMonthly, tier.priceYearly)}% with annual billing
                  </div>
                )}
              </div>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-2">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            
            <CardFooter>
              <Button
                onClick={() => handleSubscribe(tier)}
                disabled={isLoading[tier.id]}
                className={`w-full ${getButtonColor(tier.id)}`}
                size="lg"
              >
                {isLoading[tier.id] ? (
                  "Processing..."
                ) : (
                  `Subscribe ${billingInterval === 'monthly' ? 'Monthly' : 'Yearly'}`
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UpgradePromotion;
