
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, CheckIcon, CreditCardIcon, XIcon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '@/hooks/useAuth';

const SubscriptionManagement: React.FC = () => {
  const { user } = useAuth();
  const [isAutoRenewEnabled, setIsAutoRenewEnabled] = useState(true);
  
  // Mock subscription data
  const subscription = {
    tier: 'pro',
    status: 'active',
    nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    amount: 9.99,
    interval: 'month',
    features: [
      'Enhanced profile visibility',
      'Exclusive royal badges',
      'Premium themes',
      'Priority customer support'
    ]
  };
  
  const handleCancelSubscription = () => {
    // In a real app, this would call an API to cancel the subscription
    console.log('Subscription cancellation requested');
  };
  
  const handleAutoRenewToggle = () => {
    setIsAutoRenewEnabled(!isAutoRenewEnabled);
    // In a real app, this would call an API to update auto-renew settings
  };
  
  if (!user) {
    return null;
  }
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Subscription Details</span>
          <Badge variant={subscription.status === 'active' ? 'success' : 'secondary'}>
            {subscription.status === 'active' ? 'Active' : 'Inactive'}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold capitalize">{subscription.tier} Plan</h3>
          <p className="text-sm text-muted-foreground">
            ${subscription.amount.toFixed(2)} per {subscription.interval}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Next billing date</span>
          </div>
          <span className="text-sm font-medium">
            {new Date(subscription.nextBillingDate).toLocaleDateString()}
          </span>
        </div>
        
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Plan Features</h4>
          <ul className="space-y-2">
            {subscription.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between border-t pt-4">
          <div className="space-y-1">
            <p className="text-sm font-medium">Auto-renew subscription</p>
            <p className="text-xs text-muted-foreground">
              Your subscription will {isAutoRenewEnabled ? '' : 'not'} renew automatically
            </p>
          </div>
          <Switch
            checked={isAutoRenewEnabled}
            onCheckedChange={handleAutoRenewToggle}
          />
        </div>
        
        <div className="pt-2">
          <Button 
            variant="outline" 
            className="text-sm w-full flex items-center justify-center text-destructive hover:text-destructive"
            onClick={handleCancelSubscription}
          >
            <CreditCardIcon className="h-4 w-4 mr-2" />
            Cancel Subscription
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionManagement;
