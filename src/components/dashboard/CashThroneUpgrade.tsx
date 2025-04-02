import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/button';
import { Crown, CreditCard, ChevronRight, Check, Zap, DollarSign } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { formatCurrency } from '@/utils/formatters';

interface PlanFeature {
  title: string;
  included: boolean;
}

interface PlanOption {
  id: string;
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: PlanFeature[];
  popular?: boolean;
}

interface CashThroneUpgradeProps {
  user: UserProfile;
}

const CashThroneUpgrade: React.FC<CashThroneUpgradeProps> = ({ user }) => {
  const currentTier = user.tier || 'free';
  
  const plans: PlanOption[] = [
    {
      id: 'bronze',
      name: 'Bronze Throne',
      price: 9.99,
      interval: 'month',
      features: [
        { title: 'Exclusive Bronze Badge', included: true },
        { title: '2x Rank Visibility', included: true },
        { title: 'Profile Customization', included: true },
        { title: 'Priority Support', included: false },
        { title: 'Royal Mockery Access', included: false },
        { title: 'Rank Boost Effects', included: false },
      ]
    },
    {
      id: 'silver',
      name: 'Silver Throne',
      price: 19.99,
      interval: 'month',
      features: [
        { title: 'Exclusive Silver Badge', included: true },
        { title: '5x Rank Visibility', included: true },
        { title: 'Profile Customization', included: true },
        { title: 'Priority Support', included: true },
        { title: 'Royal Mockery Access', included: true },
        { title: 'Rank Boost Effects', included: false },
      ],
      popular: true
    },
    {
      id: 'gold',
      name: 'Gold Throne',
      price: 49.99,
      interval: 'month',
      features: [
        { title: 'Exclusive Gold Badge', included: true },
        { title: '10x Rank Visibility', included: true },
        { title: 'Profile Customization', included: true },
        { title: 'Priority Support', included: true },
        { title: 'Royal Mockery Access', included: true },
        { title: 'Rank Boost Effects', included: true },
      ]
    }
  ];
  
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Crown className="mr-2 h-5 w-5 text-royal-gold" />
            Upgrade Your Royal Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70 mb-4">
            Enhance your presence in the kingdom with exclusive features, increased visibility, and special powers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`glass-morphism overflow-hidden relative ${
                  plan.popular ? 'border-royal-gold/50' : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge className="bg-royal-gold text-black m-2">
                      Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-center">{plan.name}</CardTitle>
                  <div className="text-center">
                    <span className="text-2xl font-bold">{formatCurrency(plan.price)}</span>
                    <span className="text-white/60">/{plan.interval}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                        ) : (
                          <Check className="h-4 w-4 text-white/20 mr-2 shrink-0" />
                        )}
                        <span className={feature.included ? '' : 'text-white/40'}>
                          {feature.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-royal-gold hover:bg-royal-gold/90 text-black' 
                        : ''
                    }`}
                    disabled={currentTier === plan.id}
                  >
                    {currentTier === plan.id ? (
                      'Current Plan'
                    ) : (
                      <>
                        {plan.popular ? (
                          <Zap className="mr-2 h-4 w-4" />
                        ) : (
                          <DollarSign className="mr-2 h-4 w-4" />
                        )}
                        Subscribe
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-royal-gold/20">
        <CardContent className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-royal-gold mb-1">Royal Lifetime Pass</h3>
            <p className="text-white/70">Secure your permanent place in the royal court with a one-time payment.</p>
          </div>
          <Button className="bg-gradient-to-r from-royal-gold to-royal-amber text-black shrink-0">
            <Crown className="mr-2 h-4 w-4" />
            Get Lifetime Access
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CashThroneUpgrade;
