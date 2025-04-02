
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SubscriptionPlan } from '@/types/subscription';

export interface SubscriptionPlanCardProps {
  plan: SubscriptionPlan;
  selected?: boolean;
  onSelect?: (planId: string) => void;
  billingInterval?: 'monthly' | 'yearly';
  className?: string;
}

const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({
  plan,
  selected = false,
  onSelect,
  billingInterval = 'monthly',
  className
}) => {
  const handleSelect = () => {
    if (onSelect) {
      onSelect(plan.id);
    } else if (plan.onSelect) {
      plan.onSelect(plan.id);
    }
  };

  const isPrice = typeof plan.price !== 'number';
  const price = isPrice 
    ? billingInterval === 'monthly' ? plan.price.monthly : plan.price.yearly
    : plan.price;

  const isPopular = plan.popular;
  const interval = plan.billingInterval || billingInterval;

  return (
    <Card className={cn(
      "border-2 transition-all overflow-hidden",
      selected ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-primary/50",
      isPopular && "relative",
      className
    )}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium shadow-sm transform translate-x-2 -translate-y-2 rotate-12">
          Popular
        </div>
      )}

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{plan.name}</CardTitle>
          <Badge variant={plan.tier === 'royal' ? 'default' : 'outline'} className={plan.tier === 'royal' ? 'bg-royal-gold text-black' : ''}>
            {plan.tier === 'royal' ? <Crown className="h-3 w-3 mr-1" /> : <Star className="h-3 w-3 mr-1" />}
            {plan.tier}
          </Badge>
        </div>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-muted-foreground">/{interval}</span>
        </div>

        <ul className="space-y-2 text-sm">
          {plan.features.map((feature, i) => {
            if (typeof feature === 'string') {
              return (
                <li key={i} className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-primary" />
                  <span>{feature}</span>
                </li>
              );
            } else {
              return (
                <li key={i} className={`flex items-center ${!feature.included ? 'text-muted-foreground' : ''}`}>
                  <Check className={`h-4 w-4 mr-2 ${feature.included ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span>{feature.name}</span>
                </li>
              );
            }
          })}
        </ul>
      </CardContent>

      <CardFooter>
        <Button 
          onClick={handleSelect}
          variant={selected ? "secondary" : "default"}
          className={cn(
            "w-full",
            plan.tier === 'royal' && !selected && "bg-royal-gold hover:bg-royal-gold/90 text-black"
          )}
        >
          {selected ? "Selected" : plan.cta || "Choose Plan"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPlanCard;
