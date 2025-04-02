
import React, { useState } from 'react';
import { useUser } from '@/hooks/useUser';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Shell, Badge } from '@/utils/componentImports';
import { Crown, Check, CreditCard, Calendar, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import SubscriptionPlanCard from './SubscriptionPlanCard';
import { formatDate } from '@/utils/formatters';

// Create our subscription plans
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
    tier: 'basic',
    popular: false
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

const SubscriptionManagement = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string>(user?.subscription?.tier || 'basic');
  const [isUpgrading, setIsUpgrading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  
  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };
  
  const handleUpgrade = () => {
    setIsUpgrading(true);
    
    // Simulate an API call
    setTimeout(() => {
      toast({
        title: 'Subscription Updated',
        description: `You have successfully upgraded to the ${selectedPlan} plan.`,
        variant: 'success'
      });
      
      setIsUpgrading(false);
    }, 1500);
  };
  
  const handleCancel = () => {
    setIsCancelling(true);
    
    // Simulate an API call
    setTimeout(() => {
      toast({
        title: 'Subscription Cancelled',
        description: 'Your subscription has been cancelled. You will still have access until the end of your billing period.',
        variant: 'default'
      });
      
      setIsCancelling(false);
      setShowConfirm(false);
    }, 1500);
  };
  
  // Check if the user has an active subscription
  const hasActiveSubscription = user?.subscription?.status === 'active';
  
  // Get the current plan details
  const currentPlan = subscriptionPlans.find(plan => plan.id === user?.subscription?.tier);
  
  // Check if the selected plan is different from current plan
  const isChangingPlan = currentPlan?.id !== selectedPlan;
  
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Subscription</h1>
          <p className="text-white/70">Manage your royal subscription and billing details</p>
        </div>
        
        {hasActiveSubscription && (
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <Badge variant={user?.subscription?.status === 'active' ? 'success' : 'default'}>
              {user?.subscription?.status === 'active' ? 'Active' : 'Inactive'}
            </Badge>
            <Badge variant={currentPlan?.tier === 'royal' ? 'royal' : 'default'}>
              {currentPlan?.name}
            </Badge>
          </div>
        )}
      </div>
      
      <Tabs defaultValue={hasActiveSubscription ? 'current' : 'plans'}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="current">Current Subscription</TabsTrigger>
          <TabsTrigger value="plans">Available Plans</TabsTrigger>
        </TabsList>
        
        <TabsContent value="current" className="mt-6">
          {hasActiveSubscription ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Your Subscription</CardTitle>
                  <Badge variant="outline">
                    {user?.subscription?.status}
                  </Badge>
                </div>
                <CardDescription>
                  Details about your current subscription
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-md">
                  {currentPlan?.tier === 'royal' ? (
                    <Crown className="h-12 w-12 text-royal-gold" />
                  ) : currentPlan?.tier === 'premium' ? (
                    <Check className="h-12 w-12 text-blue-500" />
                  ) : (
                    <Check className="h-12 w-12 text-green-500" />
                  )}
                  
                  <div>
                    <h3 className="text-xl font-semibold">{currentPlan?.name}</h3>
                    <p className="text-white/70">{currentPlan?.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="text-sm text-white/70">Billing Details</div>
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-4 w-4 text-white/50" />
                      <span>**** **** **** 4321</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-white/50" />
                      <span>
                        Next billing date: {user?.subscription?.nextBillingDate 
                          ? formatDate(new Date(user.subscription.nextBillingDate)) 
                          : 'N/A'
                        }
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-sm text-white/70">Features</div>
                    <ul className="space-y-1">
                      {currentPlan?.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex-col space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => setShowConfirm(true)}
                >
                  Cancel Subscription
                </Button>
                <Button 
                  className="w-full" 
                  onClick={() => {
                    const tabsList = document.querySelector('[role="tablist"]');
                    const plansTab = tabsList?.querySelector('[value="plans"]');
                    if (plansTab) {
                      (plansTab as HTMLElement).click();
                    }
                  }}
                >
                  Change Plan
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>No Active Subscription</CardTitle>
                <CardDescription>
                  You currently don't have an active subscription
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center py-8">
                <Crown className="h-16 w-16 mx-auto mb-4 text-white/30" />
                <p className="mb-6">
                  Upgrade to a royal subscription to access premium features and improve your status in the royal court.
                </p>
                <Button 
                  onClick={() => {
                    const tabsList = document.querySelector('[role="tablist"]');
                    const plansTab = tabsList?.querySelector('[value="plans"]');
                    if (plansTab) {
                      (plansTab as HTMLElement).click();
                    }
                  }}
                >
                  View Plans
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="plans" className="mt-6">
          <div className="flex justify-end mb-8">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          
          <div className="mt-8 flex flex-col items-center">
            {isChangingPlan && (
              <p className="mb-4 text-white/70 text-center max-w-md">
                {hasActiveSubscription 
                  ? `You are changing from ${currentPlan?.name} to ${
                      subscriptionPlans.find(p => p.id === selectedPlan)?.name
                    }`
                  : `You are subscribing to the ${
                      subscriptionPlans.find(p => p.id === selectedPlan)?.name
                    } plan`
                }
              </p>
            )}
            
            <Button 
              onClick={handleUpgrade}
              disabled={
                isUpgrading || 
                (hasActiveSubscription && selectedPlan === currentPlan?.id)
              }
              className={currentPlan?.tier === 'royal' ? 'bg-royal-gold hover:bg-royal-gold/80 text-black' : ''}
              size="lg"
            >
              {isUpgrading ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Processing...
                </>
              ) : hasActiveSubscription ? (
                selectedPlan === currentPlan?.id ? 'Current Plan' : 'Change Plan'
              ) : (
                <>
                  <Zap className="mr-2 h-4 w-4" />
                  Subscribe Now
                </>
              )}
            </Button>
          </div>
        </TabsContent>
      </Tabs>
      
      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel Subscription</DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel your subscription? You will lose access to premium features at the end of your current billing period.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirm(false)}>
              Keep Subscription
            </Button>
            <Button variant="destructive" onClick={handleCancel} disabled={isCancelling}>
              {isCancelling ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Cancelling...
                </>
              ) : (
                'Cancel Subscription'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SubscriptionManagement;
