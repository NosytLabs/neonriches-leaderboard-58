
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/Badge';
import { Check, Crown } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  popular?: boolean;
  tier: string;
  cta?: string;
}

export interface SubscriptionPlanCardProps {
  plan: SubscriptionPlan;
  onSelect: (plan: SubscriptionPlan) => void;
  isActive?: boolean;
  billingInterval?: 'monthly' | 'yearly'; // Added for compatibility
}

const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({
  plan,
  onSelect,
  isActive = false,
  billingInterval = 'monthly'
}) => {
  const price = billingInterval === 'monthly' ? plan.price.monthly : plan.price.yearly;
  
  return (
    <Card className={`flex flex-col h-full ${isActive ? 'border-primary' : 'border-border'} ${
      plan.popular ? 'shadow-lg' : ''
    }`}>
      <CardHeader>
        {plan.popular && (
          <Badge variant="outline" className="mb-2 self-start">
            Most Popular
          </Badge>
        )}
        <CardTitle>{plan.name}</CardTitle>
        <div className="text-3xl font-bold">
          {formatCurrency(price)}
          <span className="text-sm font-normal text-muted-foreground">
            /{billingInterval === 'monthly' ? 'month' : 'year'}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{plan.description}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <Check size={18} className="mr-2 text-green-500" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          variant={isActive ? "outline" : "default"}
          onClick={() => onSelect(plan)}
        >
          {isActive ? 'Current Plan' : plan.cta || 'Select Plan'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPlanCard;
