
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  interval: string;
  description: string;
  features: string[];
  color: string;
  maxLinks: number;
  maxProfiles: number;
  analyticsAccess: boolean;
  customization: boolean;
  protectionDuration: number;
  priceMonthly: number;
  priceYearly: number;
  recommended?: boolean;
}

interface SubscriptionPlanCardProps {
  plan: SubscriptionPlan;
  isCurrentPlan?: boolean;
  onSelectPlan?: (plan: SubscriptionPlan) => void;
  yearlyBilling?: boolean;
}

const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({
  plan,
  isCurrentPlan = false,
  onSelectPlan,
  yearlyBilling = false
}) => {
  const displayPrice = yearlyBilling ? plan.priceYearly : plan.priceMonthly;
  
  const colorVariants: Record<string, string> = {
    purple: "border-purple-500/20 bg-purple-500/5",
    green: "border-green-500/20 bg-green-500/5",
    blue: "border-blue-500/20 bg-blue-500/5",
    gold: "border-yellow-500/20 bg-yellow-500/5",
    red: "border-red-500/20 bg-red-500/5"
  };
  
  const buttonVariants: Record<string, string> = {
    purple: "bg-purple-600 hover:bg-purple-700",
    green: "bg-green-600 hover:bg-green-700",
    blue: "bg-blue-600 hover:bg-blue-700",
    gold: "bg-yellow-600 hover:bg-yellow-700",
    red: "bg-red-600 hover:bg-red-700"
  };
  
  return (
    <Card className={`relative border ${colorVariants[plan.color] || ""}`}>
      {plan.recommended && (
        <Badge 
          className="absolute -top-2 right-4 bg-yellow-600"
          variant="default"
        >
          Recommended
        </Badge>
      )}
      
      <CardHeader>
        <CardTitle className="text-xl">{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold">${displayPrice}</span>
          <span className="text-sm text-muted-foreground ml-1">/{plan.interval}</span>
        </div>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-2 text-sm">
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
          className={`w-full ${buttonVariants[plan.color] || ""}`}
          disabled={isCurrentPlan}
          onClick={() => onSelectPlan && onSelectPlan(plan)}
        >
          {isCurrentPlan ? "Current Plan" : "Select Plan"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPlanCard;
