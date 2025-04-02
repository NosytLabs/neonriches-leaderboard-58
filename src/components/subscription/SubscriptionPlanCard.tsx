
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export interface SubscriptionPlanCardProps {
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
  isActive?: boolean;
  interval?: 'monthly' | 'yearly';
  onSelect?: (planId: string) => void;
  onUpgrade?: (planId: string) => void;
  onChange?: (planId: string) => void;
}

const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({
  id,
  name,
  description,
  price,
  features,
  tier,
  badge,
  popular,
  isActive,
  interval = 'monthly',
  onSelect,
  onUpgrade,
  onChange
}) => {
  const handleSelectPlan = () => {
    if (onSelect) onSelect(id);
  };

  const handleUpgradePlan = () => {
    if (onUpgrade) onUpgrade(id);
  };

  const handleChangePlan = () => {
    if (onChange) onChange(id);
  };

  const displayPrice = interval === 'monthly' ? price.monthly : price.yearly;
  
  return (
    <Card 
      className={`flex flex-col h-full ${popular 
        ? 'border-2 border-royal-gold/50 shadow-xl shadow-royal-gold/10' 
        : 'border'}`}
    >
      <CardHeader className="relative">
        {popular && (
          <Badge className="absolute right-4 top-4 bg-royal-gold border-0 font-semibold">
            Popular
          </Badge>
        )}
        
        {badge && (
          <Badge variant="outline" className="mb-2 self-start">
            {badge}
          </Badge>
        )}
        
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        
        <div className="mt-3">
          <span className="text-3xl font-bold">${displayPrice}</span>
          <span className="text-muted-foreground">/{interval}</span>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-2">
        {isActive ? (
          <Button 
            onClick={handleChangePlan} 
            className="w-full" 
            variant="outline"
          >
            Current Plan
          </Button>
        ) : (
          <Button 
            onClick={popular ? handleUpgradePlan : handleSelectPlan} 
            className={`w-full ${popular ? 'bg-royal-gold hover:bg-royal-gold/90' : ''}`}
          >
            {popular ? 'Upgrade Now' : 'Select Plan'}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPlanCard;
