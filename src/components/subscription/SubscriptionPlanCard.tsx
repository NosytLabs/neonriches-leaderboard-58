
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/Badge';
import { Check, X } from 'lucide-react';

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  popular?: boolean;
  tier: string;
  interval?: 'monthly' | 'yearly';
}

export interface SubscriptionPlanCardProps {
  plan: SubscriptionPlan;
  onSelect?: (plan: SubscriptionPlan) => void;
  isCurrentPlan?: boolean;
  billingInterval?: string;
}

export const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({
  plan,
  onSelect,
  isCurrentPlan = false,
  billingInterval
}) => {
  const handleSelect = () => {
    if (onSelect) {
      onSelect(plan);
    }
  };

  const displayInterval = billingInterval || plan.interval || 'monthly';
  
  return (
    <Card className={`w-full ${isCurrentPlan ? 'border-primary' : 'border-border'}`}>
      <CardHeader>
        {plan.popular && (
          <Badge className="self-start mb-2">Popular</Badge>
        )}
        <CardTitle>{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-3xl font-bold">${plan.price}</span>
          <span className="text-muted-foreground">/{displayInterval}</span>
        </div>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleSelect}
          className="w-full"
          variant={isCurrentPlan ? "outline" : "default"}
          disabled={isCurrentPlan}
        >
          {isCurrentPlan ? 'Current Plan' : 'Select Plan'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPlanCard;
