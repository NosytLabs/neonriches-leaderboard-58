
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  priceMonthly: number;
  priceYearly: number;
  interval: string;
  description: string;
  features: string[];
  color: string;
  maxLinks: number;
  maxProfiles: number;
  analyticsAccess: boolean;
  customization: boolean;
  protectionDuration: number;
  recommended?: boolean;
}

interface SubscriptionPlanCardProps {
  plan: SubscriptionPlan;
  isActive?: boolean;
  onSelect?: (planId: string) => void;
  interval?: 'monthly' | 'yearly';
}

export const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({
  plan,
  isActive = false,
  onSelect,
  interval = 'monthly'
}) => {
  const price = interval === 'monthly' ? plan.priceMonthly : plan.priceYearly;
  const discount = interval === 'yearly' ? Math.round((1 - (plan.priceYearly / 12) / plan.priceMonthly) * 100) : 0;

  const getColorClass = () => {
    switch (plan.color) {
      case 'gold': return 'border-royal-gold/30 bg-royal-gold/5';
      case 'purple': return 'border-purple-500/30 bg-purple-500/5';
      case 'blue': return 'border-blue-500/30 bg-blue-500/5';
      case 'green': return 'border-green-500/30 bg-green-500/5';
      default: return 'border-gray-300/30 bg-gray-300/5';
    }
  };

  const getButtonClass = () => {
    if (isActive) return 'bg-green-600 hover:bg-green-700';
    
    switch (plan.color) {
      case 'gold': return 'bg-royal-gold hover:bg-royal-gold/90';
      case 'purple': return 'bg-purple-500 hover:bg-purple-600';
      case 'blue': return 'bg-blue-500 hover:bg-blue-600';
      case 'green': return 'bg-green-500 hover:bg-green-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <Card className={`relative h-full flex flex-col ${getColorClass()} backdrop-blur-sm transition-all duration-300 ${isActive ? 'ring-2 ring-green-500 scale-105' : 'hover:scale-105'}`}>
      {plan.recommended && (
        <div className="absolute -top-3 left-0 right-0 flex justify-center">
          <span className="px-3 py-1 text-xs font-medium bg-indigo-500 text-white rounded-full shadow-lg">
            Recommended
          </span>
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-sm text-white/60">/{interval === 'monthly' ? 'month' : 'year'}</span>
          
          {discount > 0 && (
            <span className="ml-2 text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
              Save {discount}%
            </span>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <ul className="space-y-2 text-sm">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          className={`w-full text-white ${getButtonClass()}`}
          onClick={() => onSelect && onSelect(plan.id)}
        >
          {isActive ? 'Current Plan' : 'Select Plan'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionPlanCard;
