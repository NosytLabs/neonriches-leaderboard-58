
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export interface SubscriptionPlanCardProps {
  key: string | number;
  plan: {
    id: string;
    name: string;
    description: string;
    price: {
      monthly: number;
      yearly: number;
    };
    features: string[];
    tier: string;
    badge?: string;
    popular?: boolean;
  };
  selected: boolean;
  billingInterval: 'monthly' | 'yearly';
  onSelect: (planId: string) => void;
}

const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({
  plan,
  selected,
  billingInterval,
  onSelect
}) => {
  const price = billingInterval === 'monthly' ? plan.price.monthly : plan.price.yearly;
  const isYearly = billingInterval === 'yearly';
  const savedAmount = isYearly ? Math.round((plan.price.monthly * 12 - plan.price.yearly) / 12) : 0;
  
  return (
    <Card 
      className={`border transition-all duration-300 ${
        selected 
          ? 'border-royal-gold shadow-[0_0_15px_2px_rgba(201,146,25,0.2)]' 
          : 'border-white/10 hover:border-white/30'
      }`}
    >
      <CardHeader className="space-y-1 pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{plan.name}</CardTitle>
          {plan.badge && (
            <Badge className="bg-royal-gold text-black">{plan.badge}</Badge>
          )}
        </div>
        <p className="text-sm text-white/70">{plan.description}</p>
      </CardHeader>
      
      <CardContent className="pb-3">
        <div className="mb-4">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold">${price}</span>
            <span className="text-white/70 text-sm">/ {billingInterval === 'monthly' ? 'month' : 'year'}</span>
          </div>
          {isYearly && savedAmount > 0 && (
            <p className="text-royal-gold text-sm mt-1">Save ${savedAmount}/month when billed yearly</p>
          )}
        </div>
        
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-royal-gold flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={() => onSelect(plan.id)}
          className={selected ? 'bg-royal-gold text-black hover:bg-royal-gold/90' : 'w-full'}
          variant={selected ? 'default' : 'outline'}
        >
          {selected ? 'Selected' : 'Select'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPlanCard;
