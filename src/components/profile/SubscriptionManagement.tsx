import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserSubscription } from '@/types/auth';
import { useAuth } from '@/contexts/AuthContext';
import { Crown, Calendar, CreditCard, CheckCircle, AlertCircle, DollarSign } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import PaymentModal from '@/components/PaymentModal';

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  interval: 'monthly' | 'quarterly' | 'annual';
  discountPercentage: number;
  features: string[];
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'pro-monthly',
    name: 'Royal Monthly',
    price: 9.99,
    interval: 'monthly',
    discountPercentage: 0,
    features: [
      'Extended text (1000 characters)',
      'Up to 5 images', 
      'Up to 5 links',
      'Animated RGB borders',
      'Video embeds',
      'Custom RGB gradients',
      'Hover effects',
      'Click stats'
    ]
  },
  {
    id: 'pro-quarterly',
    name: 'Royal Quarterly',
    price: 26.99,
    interval: 'quarterly',
    discountPercentage: 10,
    features: [
      'All monthly features',
      'Additional profile badge',
      'Priority profile placement',
      'Extended animation options',
      'Exclusive seasonal themes'
    ]
  },
  {
    id: 'pro-annual',
    name: 'Royal Annual',
    price: 99.99,
    interval: 'annual',
    discountPercentage: 17,
    features: [
      'All quarterly features',
      'Royal Advisor status',
      'Access to exclusive events',
      'Custom profile music',
      'Animated profile avatar',
      'Priority customer support'
    ]
  }
];

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
};

const SubscriptionManagement: React.FC = () => {
  const { user, subscription, updateUserProfile } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleSubscribe = async (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    setShowUpgradeDialog(true);
  };
  
  const handleRenew = async () => {
    setIsProcessing(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (subscription) {
        const updatedSubscription: UserSubscription = {
          ...subscription,
          endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
          renewalDate: new Date(new Date().setDate(new Date().getDate() + 30)),
          status: 'active'
        };
        
        await updateUserProfile({ subscription: updatedSubscription });
        
        toast({
          title: "Subscription Renewed",
          description: "Your royal subscription has been successfully renewed.",
        });
      }
    } catch (error) {
      toast({
        title: "Renewal Failed",
        description: "Could not renew your subscription. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleCancelSubscription = async () => {
    setIsProcessing(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (subscription) {
        const updatedSubscription: UserSubscription = {
          ...subscription,
          status: 'canceled',
          autoRenew: false
        };
        
        await updateUserProfile({ subscription: updatedSubscription });
        
        toast({
          title: "Subscription Cancelled",
          description: "Your subscription has been cancelled but will remain active until the end date.",
        });
      }
    } catch (error) {
      toast({
        title: "Cancellation Failed",
        description: "Could not cancel your subscription. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handlePaymentSuccess = async (amount: number) => {
    if (selectedPlan) {
      // Create new subscription based on selected plan
      let months = 1;
      if (selectedPlan.interval === 'quarterly') months = 3;
      if (selectedPlan.interval === 'annual') months = 12;
      
      const newSubscription: UserSubscription = {
        id: `sub_${Math.random().toString(36).substring(2, 9)}`,
        tier: 'pro',
        status: 'active',
        startDate: new Date(),
        endDate: new Date(new Date().setMonth(new Date().getMonth() + months)),
        renewalDate: new Date(new Date().setDate(new Date().getDate() + 30)),
        paymentMethod: 'credit_card',
        autoRenew: true,
        price: selectedPlan.price,
        interval: selectedPlan.interval,
        features: selectedPlan.features
      };
      
      await updateUserProfile({ 
        subscription: newSubscription,
        tier: 'pro',
        role: 'premium'
      });
      
      toast({
        title: "Subscription Activated",
        description: `You are now a Pro member with ${selectedPlan.interval} billing.`,
      });
      
      setShowUpgradeDialog(false);
    }
  };
  
  const calculateSavings = (plan: SubscriptionPlan): string => {
    if (plan.interval === 'monthly' || plan.discountPercentage === 0) return '';
    
    const monthlyPrice = subscriptionPlans[0].price;
    let totalMonthlyPrice = 0;
    
    if (plan.interval === 'quarterly') {
      totalMonthlyPrice = monthlyPrice * 3;
    } else if (plan.interval === 'annual') {
      totalMonthlyPrice = monthlyPrice * 12;
    }
    
    const savings = totalMonthlyPrice - plan.price;
    return `Save $${savings.toFixed(2)}`;
  };
  
  if (subscription && subscription.status !== 'expired') {
    const isActive = subscription.status === 'active';
    const isCancelled = subscription.status === 'canceled';
    
    return (
      <Card className="glass-morphism border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-royal-purple/20 to-royal-gold/10 rounded-bl-full blur-xl"></div>
        
        <CardHeader>
          <div className="flex items-center">
            <Crown className="mr-2 h-6 w-6 text-royal-gold" />
            <CardTitle>Your Royal Subscription</CardTitle>
          </div>
          <CardDescription>
            {isActive ? "Your active subscription unlocks premium features" : "Your subscription details"}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">
                {subscription.interval === 'monthly' ? 'Royal Monthly' : 
                 subscription.interval === 'quarterly' ? 'Royal Quarterly' : 
                 'Royal Annual'}
              </h3>
              <p className="text-white/60 text-sm">
                ${subscription.price.toFixed(2)}/{subscription.interval.replace('ly', '')}
              </p>
            </div>
            
            <div className={`px-3 py-1 rounded-full text-sm ${
              isActive ? 'bg-green-500/20 text-green-400' : 
              isCancelled ? 'bg-amber-500/20 text-amber-400' : 
              'bg-red-500/20 text-red-400'
            }`}>
              {isActive ? (
                <div className="flex items-center">
                  <CheckCircle size={14} className="mr-1" />
                  Active
                </div>
              ) : isCancelled ? (
                <div className="flex items-center">
                  <AlertCircle size={14} className="mr-1" />
                  Cancelled
                </div>
              ) : (
                <div className="flex items-center">
                  <AlertCircle size={14} className="mr-1" />
                  Expired
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-morphism border-white/10 rounded-lg p-3 space-y-1">
              <div className="text-white/60 text-xs">Start Date</div>
              <div className="flex items-center">
                <Calendar size={14} className="mr-1 text-royal-gold" />
                <span>{formatDate(subscription.startDate)}</span>
              </div>
            </div>
            
            <div className="glass-morphism border-white/10 rounded-lg p-3 space-y-1">
              <div className="text-white/60 text-xs">End Date</div>
              <div className="flex items-center">
                <Calendar size={14} className="mr-1 text-royal-gold" />
                <span>{formatDate(subscription.endDate)}</span>
              </div>
            </div>
          </div>
          
          {isActive && subscription.renewalDate && (
            <div className="glass-morphism border-white/10 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white/60 text-sm">Next Billing</div>
                  <div className="flex items-center">
                    <CreditCard size={14} className="mr-1 text-royal-gold" />
                    <span>{formatDate(subscription.renewalDate)}</span>
                  </div>
                </div>
                
                <div className="text-white/60 text-sm">
                  {subscription.autoRenew ? 'Auto-renew enabled' : 'Auto-renew disabled'}
                </div>
              </div>
            </div>
          )}
          
          <div className="space-y-1">
            <h4 className="font-medium text-white/80">Included Features</h4>
            <div className="grid grid-cols-2 gap-2">
              {subscription.features.slice(0, 6).map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={14} className="mr-1 mt-1 text-royal-gold" />
                  <span className="text-sm text-white/70">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-2">
          {isActive && subscription.autoRenew && (
            <Button 
              variant="outline" 
              className="w-full glass-morphism border-white/10 hover:bg-white/10"
              onClick={handleCancelSubscription}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <span className="animate-spin mr-2">⚙️</span>
              ) : (
                <AlertCircle size={16} className="mr-2 text-amber-500" />
              )}
              Cancel Subscription
            </Button>
          )}
          
          {!subscription.autoRenew && (
            <Button 
              className="w-full bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white"
              onClick={handleRenew}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <span className="animate-spin mr-2">⚙️</span>
              ) : (
                <Crown size={16} className="mr-2" />
              )}
              Renew Subscription
            </Button>
          )}
        </CardFooter>
      </Card>
    );
  }
  
  return (
    <>
      <Card className="glass-morphism border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-royal-purple/20 to-royal-gold/10 rounded-bl-full blur-xl"></div>
        
        <CardHeader>
          <div className="flex items-center">
            <Crown className="mr-2 h-6 w-6 text-royal-gold" />
            <CardTitle>Royal Subscription Plans</CardTitle>
          </div>
          <CardDescription>
            Subscribe to unlock premium features and enhance your profile
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {subscriptionPlans.map((plan) => (
              <div 
                key={plan.id}
                className="glass-morphism border-white/10 rounded-lg p-4 flex flex-col relative overflow-hidden transition-all duration-300 hover:border-royal-gold/30 hover:-translate-y-1"
              >
                {plan.discountPercentage > 0 && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-royal-gold text-black text-xs font-bold px-3 py-1 transform rotate-0 origin-top-right">
                      {plan.discountPercentage}% OFF
                    </div>
                  </div>
                )}
                
                <div className="text-lg font-semibold mb-2">{plan.name}</div>
                
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">${plan.price.toFixed(2)}</span>
                  <span className="text-white/60 ml-1">/{plan.interval.replace('ly', '')}</span>
                </div>
                
                {calculateSavings(plan) && (
                  <div className="text-royal-gold text-xs font-semibold mt-1">
                    {calculateSavings(plan)}
                  </div>
                )}
                
                <div className="my-4 h-px bg-white/10"></div>
                
                <div className="space-y-2 flex-grow">
                  {plan.features.slice(0, 5).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle size={14} className="mr-1.5 mt-0.5 text-royal-gold" />
                      <span className="text-sm text-white/70">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.features.length > 5 && (
                    <div className="text-xs text-white/60 pl-5">
                      +{plan.features.length - 5} more features
                    </div>
                  )}
                </div>
                
                <Button 
                  className="w-full mt-4 bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white"
                  onClick={() => handleSubscribe(plan)}
                >
                  <Crown size={16} className="mr-2" />
                  Subscribe
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Dialog open={showUpgradeDialog} onOpenChange={setShowUpgradeDialog}>
        <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Subscribe to Pro</DialogTitle>
            <DialogDescription>
              Upgrade to {selectedPlan?.name} for ${selectedPlan?.price.toFixed(2)}/{selectedPlan?.interval.replace('ly', '')}
            </DialogDescription>
          </DialogHeader>
          
          {selectedPlan && (
            <div className="space-y-4">
              <div className="glass-morphism border-white/10 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{selectedPlan.name}</div>
                    <div className="text-white/60 text-sm">{selectedPlan.interval} billing</div>
                  </div>
                  <div className="text-xl font-bold">${selectedPlan.price.toFixed(2)}</div>
                </div>
              </div>
              
              <PaymentModal 
                amount={selectedPlan.price} 
                onSuccess={(amount) => handlePaymentSuccess(amount)}
                title={`Subscribe to ${selectedPlan.name}`}
                description={`Unlock premium features with your ${selectedPlan.interval} subscription.`}
              />
            </div>
          )}
          
          <DialogFooter className="mt-4">
            <Button 
              variant="outline" 
              className="w-full glass-morphism border-white/10"
              onClick={() => setShowUpgradeDialog(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubscriptionManagement;
