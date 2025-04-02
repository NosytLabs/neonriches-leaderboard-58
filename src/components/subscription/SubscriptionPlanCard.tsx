
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Crown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface SubscriptionPlanCardProps {
  plan: {
    id: string;
    name: string;
    description: string;
    price: number | { monthly: number; yearly: number };
    features: string[];
    popular?: boolean;
    tier: string;
  };
  selected?: boolean;
  onSelect?: (planId: string) => void;
  billingInterval?: 'monthly' | 'yearly';
}

const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({
  plan,
  selected = false,
  onSelect,
  billingInterval = 'monthly'
}) => {
  const getPrice = () => {
    if (typeof plan.price === 'number') {
      return plan.price;
    }
    return billingInterval === 'monthly' ? plan.price.monthly : plan.price.yearly;
  };

  const handleSelect = () => {
    if (onSelect) {
      onSelect(plan.id);
    }
  };

  return (
    <Card 
      className={cn(
        "relative overflow-hidden transition-all", 
        selected ? "border-royal-gold" : "border-white/10",
        plan.popular ? "bg-royal-gold/10" : "bg-black/20"
      )}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0">
          <Badge className="m-2" variant="gold">Most Popular</Badge>
        </div>
      )}
      
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="mb-6">
          <span className="text-3xl font-bold">${getPrice()}</span>
          <span className="text-white/60">/{billingInterval === 'monthly' ? 'mo' : 'yr'}</span>
        </div>
        
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <Check className="mr-2 h-4 w-4 text-royal-gold" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleSelect} 
          variant={selected ? "default" : "outline"} 
          className={cn("w-full", selected && "bg-royal-gold hover:bg-royal-gold/90")}
        >
          {selected ? (
            <span className="flex items-center">
              <Crown className="mr-2 h-4 w-4" />
              Selected
            </span>
          ) : (
            "Select Plan"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPlanCard;
