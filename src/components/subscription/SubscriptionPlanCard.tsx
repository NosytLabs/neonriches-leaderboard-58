
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Crown } from 'lucide-react';
import { Badge } from '@/utils/componentImports';

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
  highlight?: boolean;
  selected?: boolean;
  onSelect?: (id: string) => void;
  billingInterval?: 'monthly' | 'yearly';
}

const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({
  id,
  name,
  description,
  price,
  features,
  tier,
  badge,
  popular = false,
  highlight = false,
  selected = false,
  onSelect,
  billingInterval = 'monthly'
}) => {
  const handleSelect = () => {
    if (onSelect) {
      onSelect(id);
    }
  };

  const displayPrice = billingInterval === 'monthly' ? price.monthly : price.yearly;
  
  return (
    <Card className={`w-full ${highlight ? 'border-royal-gold border-2' : ''} ${selected ? 'bg-primary/10' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <Badge variant="gold" className="shadow-lg">
            Popular
          </Badge>
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="flex items-center">
          {name}
          {badge && (
            <Badge variant="royal" className="ml-2">
              {badge}
            </Badge>
          )}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="mb-4">
          <span className="text-3xl font-bold">${displayPrice}</span>
          <span className="text-sm text-muted-foreground ml-1">
            /{billingInterval === 'monthly' ? 'month' : 'year'}
          </span>
        </div>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 mr-2 mt-1 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleSelect} 
          className={`w-full ${tier === 'royal' ? 'bg-royal-gold hover:bg-royal-gold/90 text-black' : ''}`}
          variant={selected ? "default" : "outline"}
        >
          {selected ? 'Selected' : 'Choose Plan'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPlanCard;
