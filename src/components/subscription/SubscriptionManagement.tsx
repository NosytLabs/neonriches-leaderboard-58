import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { formatDate, formatCurrency } from '@/utils/formatters';
import { useAuth } from '@/hooks/useAuth';

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

const mockSubscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 9.99,
    features: ['Ad-free browsing', 'Priority support']
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 19.99,
    features: ['All Basic features', 'Exclusive content', 'Early access']
  },
  {
    id: 'royal',
    name: 'Royal',
    price: 49.99,
    features: ['All Premium features', 'Dedicated support', 'Custom badge']
  }
];

const SubscriptionManagement: React.FC = () => {
  const { user, updateUserProfile } = useAuth();
  const { toast } = useToast();
  const [currentPlan, setCurrentPlan] = useState<SubscriptionPlan | null>(null);
  const [nextBillingDate, setNextBillingDate] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Mock subscription status retrieval
    const fetchSubscriptionStatus = async () => {
      setIsLoading(true);
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Mock data: User has a "premium" subscription
        const mockUserSubscription = {
          planId: 'premium',
          nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
        };

        const plan = mockSubscriptionPlans.find(p => p.id === mockUserSubscription.planId) || null;
        setCurrentPlan(plan);
        setNextBillingDate(mockUserSubscription.nextBillingDate);
      } catch (error) {
        console.error("Error fetching subscription status:", error);
        toast({
          title: "Error",
          description: "Failed to fetch subscription status. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubscriptionStatus();
  }, [toast]);

  const handleUpgradeSubscription = async (planId: string) => {
    setIsLoading(true);
    try {
      // Simulate API call to upgrade subscription
      await new Promise(resolve => setTimeout(resolve, 500));

      const selectedPlan = mockSubscriptionPlans.find(p => p.id === planId);

      if (!selectedPlan) {
        throw new Error("Selected plan not found");
      }

      // Mock successful upgrade
      const mockUpdatedUser = {
        subscription: {
          planId: selectedPlan.id,
          nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
        }
      };

      const success = await updateUserProfile(mockUpdatedUser);

      if (success) {
        setCurrentPlan(selectedPlan);
        setNextBillingDate(mockUpdatedUser.subscription.nextBillingDate);

        toast({
          title: "Subscription Upgraded",
          description: `You have successfully upgraded to the ${selectedPlan.name} plan.`,
        });
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error: any) {
      console.error("Subscription upgrade error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to upgrade subscription. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelSubscription = async () => {
    setIsLoading(true);
    try {
      // Simulate API call to cancel subscription
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mock successful cancellation
      const mockUpdatedUser = {
        subscription: null
      };

      const success = await updateUserProfile(mockUpdatedUser);

      if (success) {
        setCurrentPlan(null);
        setNextBillingDate(null);

        toast({
          title: "Subscription Cancelled",
          description: "Your subscription has been successfully cancelled.",
        });
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error: any) {
      console.error("Subscription cancellation error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to cancel subscription. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Subscription Management</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p>Loading subscription information...</p>
        ) : (
          <>
            {currentPlan ? (
              <>
                <p>
                  You are currently subscribed to the <strong>{currentPlan.name}</strong> plan.
                </p>
                <p>
                  Your next billing date is: {formatDate(nextBillingDate || new Date().toISOString())} (
                  {formatCurrency(currentPlan.price)}).
                </p>
                <Button variant="destructive" onClick={handleCancelSubscription} className="mt-4">
                  Cancel Subscription
                </Button>
              </>
            ) : (
              <p>You do not have an active subscription.</p>
            )}

            <h3 className="text-lg font-semibold mt-6">Upgrade Subscription</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              {mockSubscriptionPlans.map((plan) => (
                <Card key={plan.id} className="border-2 border-muted hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Price: {formatCurrency(plan.price)}</p>
                    <ul className="list-disc pl-4 mt-2">
                      {plan.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => handleUpgradeSubscription(plan.id)}
                      disabled={currentPlan?.id === plan.id}
                      className="mt-4 w-full"
                    >
                      {currentPlan?.id === plan.id ? "Current Plan" : "Upgrade"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default SubscriptionManagement;
