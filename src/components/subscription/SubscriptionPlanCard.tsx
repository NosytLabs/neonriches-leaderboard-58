
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { SubscriptionPlan, SubscriptionBillingInterval } from '@/types/subscription';
import { cn } from '@/lib/utils';

interface SubscriptionPlanCardProps {
  plan: SubscriptionPlan;
  isCurrentPlan?: boolean;
  onSelectPlan?: () => void;
  billingInterval?: SubscriptionBillingInterval; // Add support for billingInterval
}

const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({
  plan,
  isCurrentPlan,
  onSelectPlan,
  billingInterval = 'monthly'
}) => {
  // Calculate price based on billing interval
  const getPrice = () => {
    if (typeof plan.price === 'number') {
      return plan.price;
    }
    
    return billingInterval === 'monthly' 
      ? plan.price?.monthly 
      : plan.price?.yearly;
  };

  // Format price for display
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(getPrice() || 0);

  return (
    <Card className={cn(
      'relative overflow-hidden transition-all',
      plan.popular ? 'border-royal-gold shadow-lg shadow-royal-gold/10' : 'border-border'
    )}>
      {plan.popular && (
        <div className="absolute top-0 right-0">
          <Badge className="m-2 bg-royal-gold text-black font-medium">
            <Star className="mr-1 h-3 w-3" /> Popular
          </Badge>
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-xl">{plan.name}</CardTitle>
        <div className="mt-1">
          <span className="text-3xl font-bold">{formattedPrice}</span>
          <span className="text-muted-foreground ml-1">/{billingInterval}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{plan.description}</p>

        <div className="space-y-2">
          {plan.features.map((feature, index) => {
            // Handle both string features and object features with included property
            const featureName = typeof feature === 'string' ? feature : feature.name;
            const isIncluded = typeof feature === 'string' ? true : feature.included;
            
            return (
              <div key={index} className="flex items-center">
                <div className={`mr-2 ${isIncluded ? 'text-green-500' : 'text-muted-foreground'}`}>
                  {isIncluded ? <Check className="h-4 w-4" /> : <span className="block h-4 w-4">-</span>}
                </div>
                <span className={isIncluded ? '' : 'text-muted-foreground'}>{featureName}</span>
              </div>
            );
          })}
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={onSelectPlan}
          className={cn(
            'w-full',
            plan.popular ? 'bg-royal-gold text-black hover:bg-royal-gold/90' : ''
          )}
          disabled={isCurrentPlan}
        >
          {isCurrentPlan ? 'Current Plan' : plan.cta || 'Select Plan'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPlanCard;
