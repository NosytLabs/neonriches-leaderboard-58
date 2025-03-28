
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Crown, Check, Loader } from 'lucide-react';
import { createSubscription } from '@/services/stripeService';
import { useFeatureAccess } from '@/hooks/use-feature-access';
import { UserSubscription } from '@/types/user';
import { useToast } from '@/hooks/use-toast';

const SubscriptionManagement = () => {
  const { user, updateUserProfile } = useAuth();
  const { hasActiveSubscription, isLoading } = useFeatureAccess();
  // Fix: remove 'royal' from the type to match useState's expected type
  const [selectedTier, setSelectedTier] = useState<'free' | 'pro'>(
    (user?.subscription?.tier === 'pro') ? 'pro' : 'free'
  );
  const [selectedBillingCycle, setSelectedBillingCycle] = useState<'monthly' | 'quarterly' | 'yearly'>(
    (user?.subscription?.interval as 'monthly' | 'quarterly' | 'yearly') || 'monthly'
  );
  const { toast } = useToast();

  // Update selected tier based on user data
  useEffect(() => {
    if (user?.subscription?.tier) {
      // Only set to 'pro' if the tier is 'pro', otherwise set to 'free'
      setSelectedTier(user.subscription.tier === 'pro' ? 'pro' : 'free');
    } else if (hasActiveSubscription) {
      setSelectedTier('pro');
    }
  }, [user, hasActiveSubscription]);

  // Define tier prices based on billing cycle - REDUCED PRICES
  const tierPrices = {
    free: 0,
    pro: selectedBillingCycle === 'monthly' ? 4.99 : 
         selectedBillingCycle === 'quarterly' ? 12.99 : 39.99
  };

  // Define Stripe price IDs for each tier and billing cycle
  const stripePriceIds: Record<string, Record<string, string>> = {
    pro: {
      monthly: 'price_monthly',   // Replace with actual Stripe price_id
      quarterly: 'price_quarterly', // Replace with actual Stripe price_id
      yearly: 'price_yearly'      // Replace with actual Stripe price_id
    }
  };

  // Define features for each tier
  const tierFeatures = {
    free: [
      'Basic profile',
      'One profile image',
      'One external link',
      'Basic text formatting'
    ],
    pro: [
      'Extended text (1000 characters)',
      'Up to 5 images',
      'Up to 5 links',
      'Animated RGB borders',
      'Video embeds',
      'Custom RGB gradients',
      'Hover effects',
      'Click stats',
      'HTML support for marketing'
    ]
  };

  const handleSelectTier = (tier: 'free' | 'pro') => {
    setSelectedTier(tier);
  };

  const handleSelectBillingCycle = (cycle: 'monthly' | 'quarterly' | 'yearly') => {
    setSelectedBillingCycle(cycle);
  };

  const handleSubscribe = async () => {
    if (selectedTier === 'free') {
      // Free tier doesn't need payment processing
      toast({
        title: "Free Tier Selected",
        description: "You are now on the free tier."
      });
      return;
    }

    try {
      // Get the appropriate price ID based on the selected tier and billing cycle
      const priceId = stripePriceIds[selectedTier]?.[selectedBillingCycle];
      
      if (!priceId) {
        throw new Error("Invalid subscription selection");
      }
      
      // Create subscription checkout session
      const result = await createSubscription(priceId, user?.email);
      
      if (result?.url) {
        // Redirect to Stripe checkout
        window.location.href = result.url;
      } else {
        throw new Error("Failed to create subscription");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        title: "Subscription Error",
        description: "Could not process your subscription. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="glass-morphism border-royal-gold/20 mb-6">
      <CardHeader>
        <div className="flex items-center">
          <Crown className="mr-3 h-6 w-6 text-royal-gold" />
          <CardTitle>Profile Subscription</CardTitle>
        </div>
        <CardDescription>
          Upgrade your profile with premium cosmetic features
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center p-8">
            <Loader className="h-8 w-8 animate-spin text-royal-gold" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-morphism border-white/10 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Free Tier</h3>
              <div className="mb-4">
                <Badge variant="outline" className="bg-white/10">$0.00</Badge>
              </div>
              <ul className="space-y-2 mb-4">
                {tierFeatures.free.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={16} className="mr-2 mt-0.5 text-white/60" />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant="outline" 
                className={`w-full ${selectedTier === 'free' ? 'bg-white/10 border-royal-gold/30' : ''}`}
                onClick={() => handleSelectTier('free')}
              >
                {selectedTier === 'free' && !hasActiveSubscription ? 'Current Plan' : 'Select Free Plan'}
              </Button>
            </div>
            
            <div className="glass-morphism border-royal-gold/20 p-4 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <Badge className="bg-royal-gold text-black m-2">RECOMMENDED</Badge>
              </div>
              <h3 className="text-lg font-bold mb-3 flex items-center">
                Pro Tier <Sparkles size={16} className="ml-2 text-royal-gold" />
              </h3>
              <div className="mb-4 flex items-center">
                <Badge variant="outline" className="bg-royal-gold/20 border-royal-gold/30">
                  ${tierPrices.pro}/{selectedBillingCycle === 'monthly' ? 'mo' : selectedBillingCycle === 'quarterly' ? 'quarter' : 'year'}
                </Badge>
                {selectedBillingCycle === 'yearly' && (
                  <Badge variant="outline" className="ml-2 bg-royal-purple/20 border-royal-purple/30">
                    Save 33%
                  </Badge>
                )}
              </div>
              <ul className="space-y-2 mb-4">
                {tierFeatures.pro.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={16} className="mr-2 mt-0.5 text-royal-gold" />
                    <span className="text-white/90 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`flex-1 ${selectedBillingCycle === 'monthly' ? 'bg-white/10 border-royal-gold/30' : ''}`}
                    onClick={() => handleSelectBillingCycle('monthly')}
                  >
                    Monthly
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`flex-1 ${selectedBillingCycle === 'quarterly' ? 'bg-white/10 border-royal-gold/30' : ''}`}
                    onClick={() => handleSelectBillingCycle('quarterly')}
                  >
                    Quarterly
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`flex-1 ${selectedBillingCycle === 'yearly' ? 'bg-white/10 border-royal-gold/30' : ''}`}
                    onClick={() => handleSelectBillingCycle('yearly')}
                  >
                    Yearly
                  </Button>
                </div>
                
                <Button 
                  variant="default" 
                  className="w-full bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy text-white"
                  onClick={handleSubscribe}
                >
                  {selectedTier === 'pro' && hasActiveSubscription ? 'Manage Subscription' : 'Upgrade to Pro'}
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-6 text-center text-white/50 text-sm italic">
          All subscription features are purely cosmetic and do not affect your rank on the leaderboard.
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionManagement;
