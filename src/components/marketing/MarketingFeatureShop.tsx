
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Lock, Tag, Sparkles, BarChart3, TrendingUp, Users } from 'lucide-react';
import { useFeatureAccess } from '@/hooks/use-feature-access';
import { MARKETING_FEATURES } from '@/config/subscriptions';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { createCheckoutSession } from '@/services/stripeService';

const MarketingFeatureShop = () => {
  const { toast } = useToast();
  const { canAccessFeature, purchaseFeatureIndividually } = useFeatureAccess();
  const { user } = useAuth();
  
  // Get user's purchased features
  const purchasedFeatures = user?.purchasedFeatures || [];
  
  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'basic_analytics':
        return <BarChart3 className="h-5 w-5" />;
      case 'advanced_analytics':
        return <TrendingUp className="h-5 w-5" />;
      case 'promotion_tools':
        return <Sparkles className="h-5 w-5" />;
      case 'audience_insights':
        return <Users className="h-5 w-5" />;
      default:
        return <BarChart3 className="h-5 w-5" />;
    }
  };
  
  const handlePurchase = async (feature: typeof MARKETING_FEATURES[0]) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to purchase marketing features",
        variant: "destructive"
      });
      return;
    }
    
    try {
      // In a real app, this would redirect to Stripe checkout
      const result = await createCheckoutSession(
        feature.price,
        `${feature.name} - Marketing Feature`,
        'marketing_feature',
        feature.id
      );
      
      if (result?.url) {
        window.location.href = result.url;
      } else {
        throw new Error('Failed to create checkout session');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      toast({
        title: "Purchase Failed",
        description: "Unable to process your purchase. Please try again.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Marketing Feature Shop</h2>
        <p className="text-white/70">
          Enhance your profile with powerful marketing tools and analytics
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MARKETING_FEATURES.map((feature) => {
          const isPurchased = purchasedFeatures.includes(feature.id);
          const canAccess = canAccessFeature(feature.id) || isPurchased;
          
          return (
            <Card 
              key={feature.id} 
              className={`glass-morphism border-white/10 hover:border-white/20 transition-all ${
                isPurchased ? 'border-green-500/30 bg-green-500/5' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-purple-500/20">
                      {getFeatureIcon(feature.id)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{feature.name}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className={`
                    ${feature.tier === 'standard' ? 'bg-blue-500/20 text-blue-300' : 
                      feature.tier === 'premium' ? 'bg-purple-500/20 text-purple-300' : 
                      'bg-royal-gold/20 text-royal-gold'}
                  `}>
                    {feature.tier.charAt(0).toUpperCase() + feature.tier.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Tag className="h-4 w-4 text-white/70" />
                    <span className="text-xl font-bold">${feature.price.toFixed(2)}</span>
                  </div>
                  
                  {isPurchased && (
                    <Badge variant="outline" className="bg-green-500/20 text-green-300 border-green-500/30">
                      Already Purchased
                    </Badge>
                  )}
                </div>
                
                <div className="space-y-2">
                  {feature.features.map((feat, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-sm text-white/80">{feat}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                {isPurchased ? (
                  <Button 
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:opacity-90"
                    disabled
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Already Purchased
                  </Button>
                ) : user?.subscription?.tier && feature.tier === user.subscription.tier ? (
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
                    disabled
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Included in Your Subscription
                  </Button>
                ) : (
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:opacity-90"
                    onClick={() => handlePurchase(feature)}
                  >
                    {canAccess ? 'Purchase Again' : 'Purchase Feature'}
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
      
      <div className="bg-white/5 p-4 rounded-lg text-center text-sm text-white/70 mt-8">
        <p>
          <span className="font-medium text-white">Pro Tip:</span> Subscribe to Premium or Royal tier to get many of these features included in your subscription!
        </p>
      </div>
    </div>
  );
};

export default MarketingFeatureShop;
