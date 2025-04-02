
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Crown } from 'lucide-react';

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
    <Card 
      className={`relative overflow-hidden ${
        highlight 
          ? 'border-royal-gold bg-gradient-to-b from-royal-gold/5 to-transparent' 
          : selected 
            ? 'border-primary' 
            : 'border-border'
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <Badge className="m-3 bg-royal-gold text-black border-none">Popular</Badge>
        </div>
      )}
      
      {badge && (
        <div className="absolute top-0 left-0">
          <Badge 
            variant="outline" 
            className="m-3 border-royal-gold/50 text-royal-gold bg-black/50"
          >
            {badge}
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          {tier === 'royal' && <Crown className="h-5 w-5 text-royal-gold mr-2" />}
          {name}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      
      <CardContent>
        <div className="mb-4">
          <p className="text-3xl font-bold">${displayPrice}</p>
          <p className="text-sm text-muted-foreground">
            per {billingInterval === 'monthly' ? 'month' : 'year'}
          </p>
        </div>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          onClick={handleSelect} 
          className={`w-full ${
            tier === 'royal' 
              ? 'bg-royal-gold hover:bg-royal-gold/90 text-black' 
              : selected 
                ? 'bg-primary' 
                : 'bg-secondary'
          }`}
          variant={selected ? 'default' : 'outline'}
        >
          {selected ? 'Selected' : 'Choose Plan'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SubscriptionPlanCard;
