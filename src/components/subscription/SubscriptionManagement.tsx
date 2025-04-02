import React, { useState, useEffect } from 'react';
import { UserProfile } from '@/types/user-consolidated';
import { ensureUserTier } from '@/utils/typeUnifier';
import { useAuth } from '@/hooks/useAuth';
import { Shell } from '@/components/ui/shell';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Crown, Wallet, CreditCard, AlertTriangle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { adaptSubscription } from '@/utils/userProfileAdapter';
import { UserSubscription } from '@/types/user-consolidated';
import SubscriptionPlanCard, { SubscriptionPlanProps } from './SubscriptionPlanCard';

const ensureValidStatus = (status: string): "active" | "cancelled" | "expired" | "pending" | "paused" => {
  const validStatuses = ["active", "cancelled", "expired", "pending", "paused"];
  return validStatuses.includes(status) 
    ? (status as "active" | "cancelled" | "expired" | "pending" | "paused") 
    : "active";
};

const createSubscription = (planId: any, nextBillingDate: string, tier: any) => {
  return {
    id: `sub_${Math.random().toString(36).substr(2, 9)}`,
    planId,
    nextBillingDate,
    status: "active" as "active" | "cancelled" | "expired" | "pending" | "paused",
    tier: ensureUserTier(tier),
    startDate: new Date().toISOString()
  };
};

const SubscriptionManagement = () => {
  const { user, updateUserProfile } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlanProps | null>(null);
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'wallet'>('card');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [isSubscriptionActive, setIsSubscriptionActive] = useState(false);
  const [nextBillingDate, setNextBillingDate] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  
  useEffect(() => {
    if (user && user.subscription) {
      const adaptedSubscription = adaptSubscription(user.subscription);
      setIsSubscriptionActive(adaptedSubscription.status === 'active');
      setNextBillingDate(adaptedSubscription.nextBillingDate || '');
      setSubscriptionStatus(adaptedSubscription.status);
    }
  }, [user]);
  
  const plans: SubscriptionPlanProps[] = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Essential features for getting started.',
      price: 9.99,
      features: ['Access to core features', 'Standard support'],
      tier: 'basic'
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Enhanced features for serious users.',
      price: 19.99,
      features: ['All basic features', 'Priority support', 'Advanced analytics'],
      tier: 'premium',
      recommended: true
    },
    {
      id: 'royal',
      name: 'Royal',
      description: 'Exclusive features for the elite.',
      price: {
        monthly: 49.99,
        yearly: 499.99
      },
      features: ['All premium features', 'Dedicated support', 'Exclusive content', 'Royal Badge'],
      tier: 'royal',
      highlight: true
    }
  ];
  
  const handleSelectPlan = (planId: string) => {
    const selected = plans.find(plan => plan.id === planId);
    setSelectedPlan(selected || null);
  };
  
  const handleBillingIntervalChange = (interval: 'monthly' | 'yearly') => {
    setBillingInterval(interval);
  };
  
  const handlePaymentMethodChange = (method: 'card' | 'wallet') => {
    setPaymentMethod(method);
  };
  
  const handleSubscribe = async () => {
    if (!selectedPlan) {
      toast({
        title: "No Plan Selected",
        description: "Please select a subscription plan.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubscribing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Set the next billing date
    const today = new Date();
    const nextBilling = new Date(today.setMonth(today.getMonth() + 1));
    const nextBillingDate = nextBilling.toISOString();
    
    // Create a subscription object
    const subscription = createSubscription(selectedPlan.id, nextBillingDate, selectedPlan.tier);
    
    // Update user profile with subscription details
    const success = await updateUserProfile({ subscription });
    
    if (success) {
      toast({
        title: "Subscription Successful",
        description: `You have successfully subscribed to the ${selectedPlan.name} plan.`,
        variant: "success"
      });
      
      setIsSubscriptionActive(true);
      setNextBillingDate(nextBillingDate);
      setSubscriptionStatus('active');
      
      // Redirect to success page
      navigate('/dashboard');
    } else {
      toast({
        title: "Subscription Failed",
        description: "There was an error processing your subscription. Please try again.",
        variant: "destructive"
      });
    }
    
    setIsSubscribing(false);
  };
  
  const handleCancelSubscription = async () => {
    setIsCancelling(true);
    
    // Simulate cancellation processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Update user profile to remove subscription
    const success = await updateUserProfile({ subscription: null });
    
    if (success) {
      toast({
        title: "Subscription Cancelled",
        description: "Your subscription has been successfully cancelled.",
        variant: "success"
      });
      
      setIsSubscriptionActive(false);
      setNextBillingDate('');
      setSubscriptionStatus('cancelled');
    } else {
      toast({
        title: "Cancellation Failed",
        description: "There was an error cancelling your subscription. Please try again.",
        variant: "destructive"
      });
    }
    
    setIsCancelling(false);
  };
  
  const handlePayment = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };
  
  const handleImageClick = () => {
    const element = document.getElementById('subscription-options');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Shell>
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Crown className="mr-2 h-5 w-5 text-royal-gold" />
            Subscription Management
          </CardTitle>
          <CardDescription>
            Manage your SpendThrone subscription and unlock exclusive features.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {isSubscriptionActive ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">
                  Current Subscription: <Badge variant="default">{selectedPlan?.name || 'Unknown'}</Badge>
                </h3>
                <Badge variant="success">Active</Badge>
              </div>
              
              <p className="text-white/70">
                Your subscription is active and will renew on {new Date(nextBillingDate).toLocaleDateString()}.
              </p>
              
              <Button
                variant="destructive"
                className="w-full"
                onClick={handleCancelSubscription}
                disabled={isCancelling}
              >
                {isCancelling ? (
                  <>
                    <div className="h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    Cancelling...
                  </>
                ) : (
                  <>
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Cancel Subscription
                  </>
                )}
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Choose Your Plan</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {plans.map((plan) => (
                  <SubscriptionPlanCard
                    key={plan.id}
                    plan={plan}
                    selected={selectedPlan?.id === plan.id}
                    onSelect={handleSelectPlan}
                    billingInterval={billingInterval}
                  />
                ))}
              </div>
              
              {selectedPlan && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-md font-medium">
                      Selected Plan: {selectedPlan.name}
                    </h4>
                    <Badge variant="secondary">{selectedPlan.tier}</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      className={billingInterval === 'monthly' ? 'bg-primary text-primary-foreground' : ''}
                      onClick={() => handleBillingIntervalChange('monthly')}
                    >
                      Monthly
                    </Button>
                    <Button
                      variant="outline"
                      className={billingInterval === 'yearly' ? 'bg-primary text-primary-foreground' : ''}
                      onClick={() => handleBillingIntervalChange('yearly')}
                    >
                      Yearly
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      className={paymentMethod === 'card' ? 'bg-primary text-primary-foreground' : ''}
                      onClick={() => handlePaymentMethodChange('card')}
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Credit Card
                    </Button>
                    <Button
                      variant="outline"
                      className={paymentMethod === 'wallet' ? 'bg-primary text-primary-foreground' : ''}
                      onClick={() => handlePaymentMethodChange('wallet')}
                    >
                      <Wallet className="h-4 w-4 mr-2" />
                      Wallet
                    </Button>
                  </div>
                  
                  <Button
                    className="w-full"
                    onClick={handleSubscribe}
                    disabled={isSubscribing}
                  >
                    {isSubscribing ? (
                      <>
                        <div className="h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Subscribe Now
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
      
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
        className="hidden"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="XXXXXXXXXXXXX" />
        <Button ref={buttonRef} type="submit">
          Pay with PayPal
        </Button>
        <img 
          alt="Scroll to subscription options" 
          style={{ border: '2px solid var(--royal-gold)' }}
          src="/assets/subscription-options.jpg" 
          width="100%"
          height="auto"
          onClick={handleImageClick}
        />
      </form>
    </Shell>
  );
};

export default SubscriptionManagement;
