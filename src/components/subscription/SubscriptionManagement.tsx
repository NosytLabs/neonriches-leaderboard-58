import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import SubscriptionPlanCard, { SubscriptionPlan } from './SubscriptionPlanCard';

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Essential features for getting started.',
    features: [
      'Access to core features',
      'Standard support',
      'Limited customization'
    ],
    price: 9.99,
    isPopular: false,
    badge: 'Free'
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Enhanced features for serious users.',
    features: [
      'All Basic features',
      'Priority support',
      'Advanced customization',
      'Exclusive content'
    ],
    price: {
      monthly: 29.99,
      yearly: 299.99
    },
    highlightedIndex: 2,
    isPopular: true,
    badge: 'Popular'
  },
  {
    id: 'royal',
    name: 'Royal',
    description: 'The ultimate experience with top-tier features.',
    features: [
      'All Premium features',
      '24/7 dedicated support',
      'Unlimited customization',
      'Early access to new features'
    ],
    price: {
      monthly: 79.99,
      yearly: 799.99
    },
    isPopular: false,
    badge: 'Best Value'
  }
];

const SubscriptionManagement = () => {
  const { user, updateUserProfile } = useAuth();
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user?.subscription?.planId) {
      const initialPlan = subscriptionPlans.find(plan => plan.id === user.subscription?.planId);
      setSelectedPlan(initialPlan || null);
    }
  }, [user?.subscription?.planId]);

  const handleSelectPlan = (planId: string) => {
    const plan = subscriptionPlans.find(plan => plan.id === planId);
    setSelectedPlan(plan || null);
  };

  const handleUpdateSubscription = async () => {
    if (!selectedPlan) {
      toast({
        title: "No Plan Selected",
        description: "Please select a subscription plan.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const success = await updateUserProfile({
        subscription: {
          planId: selectedPlan.id,
          nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          status: 'active',
          tier: selectedPlan.id
        }
      });

      if (success) {
        toast({
          title: "Subscription Updated",
          description: `You have successfully subscribed to the ${selectedPlan.name} plan.`,
        });
      } else {
        toast({
          title: "Subscription Update Failed",
          description: "Failed to update your subscription. Please try again.",
          variant: "destructive"
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Manage Your Subscription</CardTitle>
        <CardDescription>Choose the plan that best fits your needs.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-3">
        {subscriptionPlans.map(plan => (
          <SubscriptionPlanCard
            key={plan.id}
            plan={plan}
            onSelect={handleSelectPlan}
            selected={selectedPlan?.id === plan.id}
            billingInterval={billingInterval}
          />
        ))}
      </CardContent>
      <CardContent>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="monthly"
            name="billingInterval"
            value="monthly"
            className="h-4 w-4"
            checked={billingInterval === 'monthly'}
            onChange={() => setBillingInterval('monthly')}
          />
          <label htmlFor="monthly" className="text-sm font-medium leading-none">
            Monthly
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="yearly"
            name="billingInterval"
            value="yearly"
            className="h-4 w-4"
            checked={billingInterval === 'yearly'}
            onChange={() => setBillingInterval('yearly')}
          />
          <label htmlFor="yearly" className="text-sm font-medium leading-none">
            Yearly
          </label>
        </div>
      </CardContent>
      <CardContent>
        <Button
          className="w-full"
          onClick={handleUpdateSubscription}
          disabled={isLoading}
        >
          {isLoading ? 'Updating...' : 'Update Subscription'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SubscriptionManagement;
