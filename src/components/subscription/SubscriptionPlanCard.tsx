
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: number | { monthly: number; yearly: number };
  tier: string;
  badge: string;
  popular?: boolean;
}

interface SubscriptionPlanCardProps {
  plan: SubscriptionPlan;
  isSelected?: boolean;
  billingInterval?: 'monthly' | 'yearly';
}

const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({ plan, isSelected, billingInterval = 'monthly' }) => {
  // Get price based on billing interval
  const getPrice = () => {
    if (typeof plan.price === 'number') {
      return plan.price;
    }
    
    return billingInterval === 'monthly' 
      ? plan.price.monthly 
      : plan.price.yearly;
  };

  // Get badge variant based on tier
  const getBadgeVariant = () => {
    switch (plan.tier) {
      case 'royal':
        return 'gold';
      case 'premium':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <Card 
      className={`border hover:border-primary/50 transition-all ${
        isSelected 
          ? 'border-primary shadow-lg shadow-primary/20' 
          : 'border-border'
      } ${
        plan.popular 
          ? 'relative overflow-hidden' 
          : ''
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0">
          <Badge className="m-2 bg-royal-gold text-black">Popular</Badge>
        </div>
      )}
      
      <CardHeader>
        <Badge variant={getBadgeVariant()} className="w-fit mb-2">
          {plan.badge}
        </Badge>
        <CardTitle>{plan.name}</CardTitle>
        <div className="mt-1 text-white/70 text-sm">{plan.description}</div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="mb-4">
          <span className="text-3xl font-bold">${getPrice()}</span>
          <span className="text-muted-foreground">/{billingInterval}</span>
        </div>
        
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-green-400" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <div className={`w-full h-1 rounded-full ${
          plan.tier === 'royal' 
            ? 'bg-royal-gold' 
            : plan.tier === 'premium' 
              ? 'bg-blue-500' 
              : 'bg-muted'
        }`}></div>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPlanCard;
