
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertTriangle, Crown, CreditCard, Wallet } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { useToast } from '@/hooks/use-toast';
import { ensureUserTier } from '@/utils/typeUnifier';
import SubscriptionPlanCard, { SubscriptionPlanCardProps } from './SubscriptionPlanCard';
import { Shell } from '@/utils/componentImports';

interface SubscriptionManagementProps {
  user: UserProfile;
  onSubscribe?: (planId: string, billingInterval: 'monthly' | 'yearly') => Promise<boolean>;
  onCancel?: () => Promise<boolean>;
}

const SubscriptionManagement: React.FC<SubscriptionManagementProps> = ({
  user,
  onSubscribe,
  onCancel
}) => {
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');
  const [isLoading, setIsLoading] = useState(false);
  
  const plans: SubscriptionPlanCardProps[] = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'For casual royals who want to dip their toes into mockery',
      price: {
        monthly: 4.99,
        yearly: 49.99
      },
      features: [
        'Basic mockery actions',
        'Standard profile customization',
        'Join teams',
        'Leaderboard visibility'
      ],
      tier: 'basic'
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'For dedicated royals who want enhanced mockery capabilities',
      price: {
        monthly: 9.99,
        yearly: 99.99
      },
      features: [
        'All Basic features',
        'Advanced mockery actions',
        'Priority on leaderboard',
        'Enhanced profile customization',
        'Team leadership capabilities',
        'Reduced mockery costs'
      ],
      tier: 'premium',
      popular: true,
      highlight: true
    },
    {
      id: 'royal',
      name: 'Royal',
      description: 'Ultimate royal privileges for the most elite spenders',
      price: {
        monthly: 19.99,
        yearly: 199.99
      },
      features: [
        'All Premium features',
        'Elite mockery actions',
        'Royal profile effects and customization',
        'Top leaderboard visibility',
        'Immunity from basic mockery',
        'Create royal proclamations',
        'Royal certificates',
        'Crown icon next to username'
      ],
      tier: 'royal',
      badge: 'Elite'
    }
  ];
  
  useEffect(() => {
    // Set the current plan as selected if user has a subscription
    if (user.subscription && user.subscription.planId) {
      setSelectedPlan(user.subscription.planId);
    }
  }, [user.subscription]);
  
  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
  };
  
  const handleSubscribe = async () => {
    if (!selectedPlan) return;
    
    setIsLoading(true);
    try {
      if (onSubscribe) {
        const success = await onSubscribe(selectedPlan, billingInterval);
        if (success) {
          toast({
            title: "Subscription Updated",
            description: `You've successfully subscribed to the ${plans.find(p => p.id === selectedPlan)?.name} plan!`,
            variant: "success"
          });
        } else {
          throw new Error("Failed to process subscription");
        }
      } else {
        // Mock subscription success
        toast({
          title: "Subscription Updated",
          description: `You're now a ${plans.find(p => p.id === selectedPlan)?.tier} tier member!`,
          variant: "success"
        });
      }
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "There was an error processing your subscription. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCancel = async () => {
    setIsLoading(true);
    try {
      if (onCancel) {
        const success = await onCancel();
        if (success) {
          toast({
            title: "Subscription Cancelled",
            description: "Your subscription has been cancelled successfully.",
            variant: "success"
          });
        } else {
          throw new Error("Failed to cancel subscription");
        }
      } else {
        // Mock cancellation success
        toast({
          title: "Subscription Cancelled",
          description: "Your subscription has been cancelled successfully.",
          variant: "success"
        });
      }
    } catch (error) {
      toast({
        title: "Cancellation Failed",
        description: "There was an error cancelling your subscription. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const renderCurrentSubscription = () => {
    if (!user.subscription || !user.subscription.planId) {
      return (
        <div className="text-center py-8">
          <p className="text-lg mb-3">You currently don't have an active subscription.</p>
          <p className="text-white/60 mb-6">Subscribe to get premium mockery benefits!</p>
          <Button onClick={() => handleSelectPlan('premium')}>
            Choose a Plan
          </Button>
        </div>
      );
    }
    
    const currentPlan = plans.find(p => p.id === user.subscription?.planId);
    
    if (!currentPlan) return null;
    
    return (
      <div>
        <div className="mb-6 p-4 rounded-lg border border-primary/20 bg-primary/5">
          <div className="flex items-start">
            <Crown className="h-6 w-6 mr-3 text-royal-gold" />
            <div>
              <h3 className="text-xl font-semibold mb-1">
                {currentPlan.name} Subscription
              </h3>
              <p className="text-white/60">
                You're currently on the {currentPlan.name} plan ({user.tier} tier)
              </p>
              
              {user.subscription.status === 'active' && (
                <div className="flex items-center mt-3 text-green-500">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Active</span>
                </div>
              )}
              
              {user.subscription.status === 'cancelled' && (
                <div className="flex items-center mt-3 text-amber-500">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  <span>
                    Cancelled (expires {new Date(user.subscription.nextBillingDate).toLocaleDateString()})
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {user.subscription.status === 'active' && (
          <div className="flex gap-3 mb-6">
            <Button variant="outline" onClick={handleCancel} disabled={isLoading}>
              Cancel Subscription
            </Button>
            <Button onClick={() => handleSubscribe()} disabled={isLoading}>
              Change Plan
            </Button>
          </div>
        )}
        
        {user.subscription.status === 'cancelled' && (
          <div className="flex gap-3 mb-6">
            <Button onClick={() => handleSubscribe()} disabled={isLoading}>
              Renew Subscription
            </Button>
          </div>
        )}
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Payment Details</h3>
          <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
            <div className="flex items-center mb-3">
              <CreditCard className="h-5 w-5 mr-2 text-primary/60" />
              <span>Card ending in •••• 4242</span>
            </div>
            <div className="flex items-center">
              <Wallet className="h-5 w-5 mr-2 text-primary/60" />
              <span>Next billing date: {new Date(user.subscription.nextBillingDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <Shell>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Subscription Management</h1>
        
        <Tabs defaultValue="current" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="current">Current Subscription</TabsTrigger>
            <TabsTrigger value="plans">Available Plans</TabsTrigger>
          </TabsList>
          
          <TabsContent value="current">
            <Card>
              <CardHeader>
                <CardTitle>Your Subscription</CardTitle>
                <CardDescription>Manage your current subscription details</CardDescription>
              </CardHeader>
              <CardContent>
                {renderCurrentSubscription()}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="plans">
            <div className="mb-6">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center p-1 rounded-lg bg-secondary/20">
                  <Button
                    variant={billingInterval === 'monthly' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setBillingInterval('monthly')}
                  >
                    Monthly
                  </Button>
                  <Button
                    variant={billingInterval === 'yearly' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setBillingInterval('yearly')}
                  >
                    Yearly (Save 20%)
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan) => (
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
                    onSelect={handleSelectPlan}
                    billingInterval={billingInterval}
                  />
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Button 
                  size="lg" 
                  onClick={handleSubscribe} 
                  disabled={!selectedPlan || isLoading}
                  className={selectedPlan === 'royal' ? 'bg-royal-gold text-black hover:bg-royal-gold/90' : ''}
                >
                  {isLoading ? 'Processing...' : 'Subscribe Now'}
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Shell>
  );
};

export default SubscriptionManagement;
