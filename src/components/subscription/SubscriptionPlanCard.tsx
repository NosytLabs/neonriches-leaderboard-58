
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, XIcon } from "lucide-react";
import { formatCurrency } from "@/utils/formatters";
import { SubscriptionPlan } from "@/types/subscription";

export interface SubscriptionPlanCardProps {
  plan: SubscriptionPlan;
  onSelect?: (planId: string) => void;
  selected?: boolean;
  disabled?: boolean;
  billingInterval?: string; // Add billingInterval prop
}

const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({
  plan,
  onSelect,
  selected = false,
  disabled = false,
  billingInterval = 'monthly'
}) => {
  // Use billingInterval to determine which price to show
  const displayPrice = typeof plan.price === 'object' 
    ? (plan.price?.[billingInterval as keyof typeof plan.price] || plan.price?.monthly || 0)
    : (plan.price || 0);

  const handleSelect = () => {
    if (!disabled && onSelect) {
      onSelect(plan.id);
    }
  };

  return (
    <Card 
      className={`border-2 transition-all ${
        selected ? "border-primary" : "border-border"
      } ${disabled ? "opacity-60" : "hover:border-primary/50"}`}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
          </div>
          {plan.isPopular && <Badge variant="secondary">Popular</Badge>}
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="text-3xl font-bold">
            {formatCurrency(displayPrice)}{" "}
            <span className="text-sm font-normal text-muted-foreground">
              /{billingInterval === 'yearly' ? 'year' : 'month'}
            </span>
          </div>
        </div>
        <ul className="space-y-2">
          {(plan.features || []).map((feature, i) => {
            // Handle feature as string or object with included property
            const isFeatureIncluded = typeof feature === 'string' ? true : (feature.included || false);
            const featureName = typeof feature === 'string' ? feature : (feature.name || '');

            return (
              <li key={i} className="flex items-center gap-2">
                {isFeatureIncluded ? (
                  <CheckIcon className="h-4 w-4 text-primary" />
                ) : (
                  <XIcon className="h-4 w-4 text-muted-foreground" />
                )}
                <span 
                  className={isFeatureIncluded ? "" : "text-muted-foreground"}
                >
                  {featureName}
                </span>
              </li>
            );
          })}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={handleSelect}
          disabled={disabled}
          variant={selected ? "default" : "outline"}
        >
          {selected ? "Selected" : "Select plan"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPlanCard;
