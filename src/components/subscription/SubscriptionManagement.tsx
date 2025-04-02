
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/utils/formatters';
import { Coins, Crown, ShieldCheck, Star, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/types/user-consolidated';
import SubscriptionPlanCard from './SubscriptionPlanCard';

interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: {
    monthly: number;
    yearly: number;
  };
  tier: string;
  badge: string;
  popular?: boolean;
}

interface SubscriptionManagementProps {
  user: UserProfile;
  onSubscribe?: (plan: string) => Promise<void>;
  onCancel?: () => Promise<void>;
}

const SubscriptionManagement: React.FC<SubscriptionManagementProps> = ({
  user,
  onSubscribe,
  onCancel
}) => {
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const subscriptionPlans: SubscriptionPlan[] = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'The entry level tier for loyal subjects.',
      features: [
        'Bronze team access',
        'Basic profile customization',
        'Participate in public events',
        'Standard mockery actions',
      ],
      price: {
        monthly: 4.99,
        yearly: 49.99
      },
      tier: 'basic',
      badge: 'Bronze'
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Enhanced features for aspiring nobility.',
      features: [
        'Silver team access',
        'Advanced profile customization',
        'Exclusive mockery actions',
        'Priority in leaderboards',
        'Reduced fees on spending',
      ],
      price: {
        monthly: 9.99,
        yearly: 99.99
      },
      tier: 'premium',
      badge: 'Silver',
      popular: true
    },
    {
      id: 'royal',
      name: 'Royal',
      description: 'The pinnacle of throne status with maximum privileges.',
      features: [
        'Gold team access',
        'Complete profile customization',
        'All mockery actions',
        'Royal badges and titles',
        'Exclusive royal events',
        'No fees on spending',
        'Personal royal certificate',
      ],
      price: {
        monthly: 19.99,
        yearly: 199.99
      },
      tier: 'royal',
      badge: 'Gold'
    }
  ];
  
  const handleSubscribe = async () => {
    if (!selectedPlan) return;
    
    try {
      setIsProcessing(true);
      
      // In a real app, we would call a payment processing API here
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create a subscription object
      const plan = subscriptionPlans.find(p => p.id === selectedPlan);
      const subscription = {
        planId: selectedPlan,
        nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'active' as const,
        tier: plan?.tier || 'basic'
      };
      
      // Call the onSubscribe prop if provided
      if (onSubscribe) {
        await onSubscribe(selectedPlan);
      }
      
      toast({
        title: 'Subscription activated',
        description: `You now have ${plan?.name} privileges!`,
        variant: 'success'
      });
      
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: 'Subscription failed',
        description: 'There was an error processing your subscription.',
        variant: 'destructive'
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleCancel = async () => {
    try {
      setIsProcessing(true);
      
      // In a real app, we would call an API to cancel the subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Call the onCancel prop if provided
      if (onCancel) {
        await onCancel();
      }
      
      toast({
        title: 'Subscription cancelled',
        description: 'Your subscription has been cancelled.',
        variant: 'default'
      });
      
    } catch (error) {
      console.error('Cancellation error:', error);
      toast({
        title: 'Cancellation failed',
        description: 'There was an error cancelling your subscription.',
        variant: 'destructive'
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Crown className="h-5 w-5 mr-2 text-royal-gold" />
            Subscription Management
          </CardTitle>
          <CardDescription>
            Manage your royal privileges and subscription status
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="plans">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="plans">Available Plans</TabsTrigger>
              <TabsTrigger value="current">Current Subscription</TabsTrigger>
            </TabsList>
            
            <TabsContent value="plans" className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Select a Plan</h3>
                <div className="flex items-center p-1 bg-secondary rounded-md">
                  <Button
                    variant={billingInterval === 'monthly' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setBillingInterval('monthly')}
                    className="text-xs"
                  >
                    Monthly
                  </Button>
                  <Button
                    variant={billingInterval === 'yearly' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setBillingInterval('yearly')}
                    className="text-xs"
                  >
                    Yearly (10% off)
                  </Button>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-3">
                {subscriptionPlans.map((plan) => (
                  <div key={plan.id} onClick={() => setSelectedPlan(plan.id)}>
                    <SubscriptionPlanCard
                      plan={plan}
                      billingInterval={billingInterval}
                      isSelected={selectedPlan === plan.id}
                    />
                  </div>
                ))}
              </div>
              
              {selectedPlan && (
                <div className="mt-6">
                  <Button 
                    className="w-full bg-royal-gold hover:bg-royal-gold/90 text-black"
                    onClick={handleSubscribe}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <div className="h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="h-4 w-4 mr-2" />
                        Subscribe Now
                      </>
                    )}
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="current">
              {user.subscription ? (
                <div className="space-y-4">
                  <div className="p-4 bg-black/20 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-medium flex items-center">
                        <Star className="h-4 w-4 mr-2 text-royal-gold" />
                        Current Plan
                      </h3>
                      <Badge variant={user.subscription.tier === 'royal' ? 'gold' : (user.subscription.tier === 'premium' ? 'secondary' : 'outline')}>
                        {user.subscription.tier.charAt(0).toUpperCase() + user.subscription.tier.slice(1)}
                      </Badge>
                    </div>
                    
                    <div className="grid gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/70">Status:</span>
                        <span className="font-medium">
                          {user.subscription.status === 'active' ? (
                            <span className="text-green-400 flex items-center">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Active
                            </span>
                          ) : (
                            user.subscription.status
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Plan ID:</span>
                        <span className="font-medium">{user.subscription.planId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Next billing:</span>
                        <span className="font-medium">
                          {user.subscription.nextBillingDate ? formatDate(user.subscription.nextBillingDate) : 'N/A'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Auto-renew:</span>
                        <span className="font-medium">{user.subscription.autoRenew ? 'Yes' : 'No'}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={handleCancel}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <div className="h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      'Cancel Subscription'
                    )}
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="mb-4">
                    <Crown className="h-12 w-12 mx-auto text-white/30" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No Active Subscription</h3>
                  <p className="text-white/60 mb-4">
                    You don't have an active subscription. Subscribe to a plan to gain royal privileges.
                  </p>
                  <Button 
                    variant="default" 
                    onClick={() => document.querySelector('[data-value="plans"]')?.click()}
                  >
                    View Plans
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionManagement;
