
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
  billingInterval?: 'monthly' | 'yearly'; // Add proper typing for billingInterval
}

interface PlanFeature {
  name: string;
  included: boolean;
}

const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({
  plan,
  onSelect,
  selected = false,
  disabled = false,
  billingInterval = 'monthly'
}) => {
  // Safely handle plan.price which might be null or a complex object
  const displayPrice = plan.price 
    ? (typeof plan.price === 'object' 
      ? (plan.price[billingInterval] ?? plan.price.monthly ?? 0)
      : plan.price) 
    : 0;

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
          {plan.popular && <Badge variant="secondary">Popular</Badge>}
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
            // Handle both string features and object features
            const featureObj: PlanFeature = typeof feature === 'string' 
              ? { name: feature, included: true } 
              : feature as PlanFeature;

            return (
              <li key={i} className="flex items-center gap-2">
                {featureObj.included ? (
                  <CheckIcon className="h-4 w-4 text-primary" />
                ) : (
                  <XIcon className="h-4 w-4 text-muted-foreground" />
                )}
                <span 
                  className={featureObj.included ? "" : "text-muted-foreground"}
                >
                  {featureObj.name}
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
