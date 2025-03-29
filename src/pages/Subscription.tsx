
import React from 'react';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Subscription = () => {
  const tiers = [
    {
      name: 'Basic',
      price: '$1',
      description: 'Entry level access to SpendThrone',
      features: [
        'Basic profile customization',
        'View leaderboards',
        'Participate in events',
      ]
    },
    {
      name: 'Premium',
      price: '$25',
      description: 'Enhanced features and customization',
      features: [
        'All Basic features',
        'Advanced profile customization',
        'Up to 5 profile images',
        'Up to 5 external links',
        'Animated borders',
        'Click statistics',
      ]
    },
    {
      name: 'Royal',
      price: '$100',
      description: 'Ultimate SpendThrone experience',
      features: [
        'All Premium features',
        'Custom profile themes',
        'Animated effects',
        'Priority ranking badges',
        'Access to VIP events',
        'Royal mockery privileges',
      ]
    }
  ];

  return (
    <Container className="py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Choose Your Throne</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Upgrade your status and unlock premium features with our subscription plans.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <Card key={tier.name} className="relative overflow-hidden">
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
              <div className="text-3xl font-bold mt-2">{tier.price}</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Subscription;
