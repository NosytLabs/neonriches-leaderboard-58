
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: number | { monthly: number; yearly: number };
  highlightedIndex?: number;
  badge?: string;
  isPopular?: boolean;
  tier?: string;
}

export interface SubscriptionPlanCardProps {
  plan: SubscriptionPlan;
  selected?: boolean;
  billingInterval?: 'monthly' | 'yearly';
  onSelect?: (planId: string) => void;
}

const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({ 
  plan, 
  selected = false,
  billingInterval = 'monthly',
  onSelect
}) => {
  const handleSelect = () => {
    if (onSelect) {
      onSelect(plan.id);
    }
  };

  // Handle different price formats
  const getPrice = () => {
    if (typeof plan.price === 'number') {
      return plan.price;
    }
    
    return billingInterval === 'monthly' 
      ? plan.price.monthly 
      : plan.price.yearly;
  };

  const priceAmount = getPrice();
  
  return (
    <Card 
      className={`border-2 h-full transition-all ${
        selected 
          ? 'border-royal-gold' 
          : plan.isPopular 
            ? 'border-purple-500/30' 
            : 'border-muted-foreground/30'
      }`}
    >
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl">{plan.name}</CardTitle>
          {plan.isPopular && (
            <Badge className="bg-purple-600">Popular</Badge>
          )}
          {plan.badge && (
            <Badge variant="outline">{plan.badge}</Badge>
          )}
        </div>
        <CardDescription>{plan.description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold">${priceAmount}</span>
          <span className="text-muted-foreground ml-1">
            / {billingInterval === 'monthly' ? 'month' : 'year'}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li 
              key={index} 
              className={`flex items-start ${
                index === plan.highlightedIndex ? 'text-royal-gold font-medium' : ''
              }`}
            >
              <Check className="h-5 w-5 mr-2 shrink-0 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${selected ? 'bg-royal-gold hover:bg-royal-gold/90' : ''}`}
          onClick={handleSelect}
        >
          {selected ? 'Selected' : `Choose ${plan.name}`}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPlanCard;
