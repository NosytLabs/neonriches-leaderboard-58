
import React, { useState } from 'react';
import { Shell } from '@/utils/componentImports';
import { Button } from '@/components/ui/button';
import { Check, Crown, CreditCard, Calendar, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import SubscriptionPlanCard from '@/components/subscription/SubscriptionPlanCard';
import { useToast } from '@/hooks/use-toast';

const Subscription = () => {
  const { toast } = useToast();
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string>('premium');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };
  
  const handleSubscribe = () => {
    setIsProcessing(true);
    
    // Simulate an API call
    setTimeout(() => {
      toast({
        title: 'Subscription Activated',
        description: `You have successfully subscribed to the ${selectedPlan} plan.`,
        variant: 'success'
      });
      
      setIsProcessing(false);
    }, 1500);
  };
  
  // Subscription plans with pricing
  const subscriptionPlans = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Essential features for royal enthusiasts',
      price: {
        monthly: 4.99,
        yearly: 49.99
      },
      features: [
        'Basic mockery actions',
        'Public leaderboard visibility',
        'Standard profile customization',
        'Team participation'
      ],
      tier: 'basic'
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Enhanced features for the nobility',
      price: {
        monthly: 9.99,
        yearly: 99.99
      },
      features: [
        'All Basic features',
        'Advanced mockery actions',
        'Royal profile customization',
        'Protection from mockery (5/month)',
        'Premium cosmetics'
      ],
      tier: 'premium',
      popular: true,
      badge: 'Best Value'
    },
    {
      id: 'royal',
      name: 'Royal',
      description: 'Ultimate features for the true monarch',
      price: {
        monthly: 19.99,
        yearly: 199.99
      },
      features: [
        'All Premium features',
        'Legendary mockery actions',
        'Royal court title',
        'Unlimited protection from mockery',
        'Royal certificate NFT',
        'Exclusive royal cosmetics'
      ],
      tier: 'royal',
      highlight: true
    }
  ];
  
  return (
    <Shell>
      <div className="container mx-auto py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Royal Subscription Plans</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Enhance your royal experience with premium features and exclusive benefits. 
            Choose the plan that best suits your royal ambitions.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <Button
              variant={billingInterval === 'monthly' ? 'default' : 'outline'}
              className="rounded-r-none"
              onClick={() => setBillingInterval('monthly')}
            >
              Monthly
            </Button>
            <Button
              variant={billingInterval === 'yearly' ? 'default' : 'outline'}
              className="rounded-l-none"
              onClick={() => setBillingInterval('yearly')}
            >
              Yearly (2 months free)
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {subscriptionPlans.map((plan) => (
            <SubscriptionPlanCard
              key={plan.id}
              id={plan.id}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              tier={plan.tier}
              badge={plan.badge}
              popular={plan.popular}
              highlight={plan.highlight}
              selected={selectedPlan === plan.id}
              onSelect={handlePlanSelect}
              billingInterval={billingInterval}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={handleSubscribe}
            disabled={isProcessing}
            className="px-8 py-6 text-lg"
            size="lg"
          >
            {isProcessing ? (
              <>
                <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Processing...
              </>
            ) : (
              <>
                <Zap className="mr-2 h-5 w-5" />
                Subscribe Now
              </>
            )}
          </Button>
          
          <p className="mt-4 text-sm text-white/50">
            Cancel anytime. No long-term commitment required.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Crown className="h-5 w-5 mr-2 text-royal-gold" />
                Premium Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-green-500" />
                  <span>Exclusive royal mockery actions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-green-500" />
                  <span>Increased visibility on leaderboards</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-green-500" />
                  <span>Special profile decorations</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-green-500" />
                  <span>Credit & Debit Cards</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-green-500" />
                  <span>PayPal</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-green-500" />
                  <span>Cryptocurrency</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Subscription Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-green-500" />
                  <span>Cancel anytime</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-green-500" />
                  <span>Automatic renewal</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-green-500" />
                  <span>Upgrade or downgrade at any time</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Shell>
  );
};

export default Subscription;
