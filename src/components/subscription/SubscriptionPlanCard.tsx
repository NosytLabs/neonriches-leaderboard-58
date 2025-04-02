
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface SubscriptionPlanProps {
  id: string;
  name: string;
  description: string;
  price: number | { monthly: number; yearly: number };
  features: string[];
  tier: string;
  highlight?: boolean;
  recommended?: boolean;
  popularChoice?: boolean;
  mostValue?: boolean;
}

export interface SubscriptionPlanCardProps {
  plan: SubscriptionPlanProps;
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
  const isPopular = plan.recommended || plan.popularChoice;
  const isBestValue = plan.highlight || plan.mostValue;
  
  const handleSelect = () => {
    if (onSelect) {
      onSelect(plan.id);
    }
  };
  
  // Calculate the display price based on billing interval
  const displayPrice = typeof plan.price === 'number' 
    ? plan.price 
    : billingInterval === 'monthly' 
      ? plan.price.monthly 
      : plan.price.yearly;
  
  return (
    <Card 
      className={cn(
        'transition-all relative overflow-hidden h-full',
        selected && 'border-primary',
        (isPopular || isBestValue) && 'shadow-lg'
      )}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-md">
          Popular
        </div>
      )}
      
      {isBestValue && (
        <div className="absolute top-0 right-0 bg-royal-gold text-black text-xs px-3 py-1 rounded-bl-md">
          Best Value
        </div>
      )}
      
      <CardHeader>
        <div className="flex justify-between items-center">
          <Badge variant={selected ? 'default' : 'outline'} className="mb-2">
            {plan.tier.toUpperCase()}
          </Badge>
          
          {plan.tier === 'royal' && (
            <Crown className="h-5 w-5 text-royal-gold" />
          )}
        </div>
        
        <CardTitle>{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="mb-6">
          <span className="text-3xl font-bold">${displayPrice}</span>
          <span className="text-muted-foreground ml-1">/{billingInterval}</span>
        </div>
        
        <ul className="space-y-2 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          variant={selected ? 'default' : 'outline'} 
          className={cn('w-full', 
            plan.tier === 'royal' && !selected && 'border-royal-gold text-royal-gold hover:bg-royal-gold/10',
            plan.tier === 'royal' && selected && 'bg-royal-gold hover:bg-royal-gold/90 text-black'
          )}
          onClick={handleSelect}
        >
          {selected ? 'Selected' : 'Choose Plan'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPlanCard;
