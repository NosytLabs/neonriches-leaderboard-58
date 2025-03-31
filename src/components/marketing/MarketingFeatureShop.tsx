
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MarketingFeature } from '@/types/marketing';
import { Icon } from '@/components/ui/icon';
import { formatCurrency } from '@/utils/formatters';

const MOCK_FEATURES: MarketingFeature[] = [
  {
    id: 'feature-1',
    name: 'Featured Profile',
    description: 'Get your profile featured at the top of the leaderboard',
    price: 50,
    tier: 'premium',
    active: false,
    icon: 'Star'
  },
  {
    id: 'feature-2',
    name: 'Custom Banner',
    description: 'Add a custom banner to your profile',
    price: 30,
    tier: 'basic',
    active: false,
    icon: 'Image'
  },
  {
    id: 'feature-3',
    name: 'Enhanced Analytics',
    description: 'Get detailed analytics about your profile visitors',
    price: 25,
    tier: 'pro',
    active: true,
    icon: 'BarChart'
  }
];

const MarketingFeatureShop: React.FC = () => {
  const handlePurchase = (feature: MarketingFeature) => {
    console.log('Purchase feature:', feature);
    // Implement purchase logic here
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOCK_FEATURES.map((feature) => (
          <Card key={feature.id} className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Icon name={feature.icon} className="mr-2 h-5 w-5 text-royal-gold" size="sm" />
                {feature.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70 mb-4">{feature.description}</p>
              <Badge variant={feature.active ? 'success' : 'secondary'} className="mb-2">
                {feature.active ? 'Active' : `${formatCurrency(feature.price)}`}
              </Badge>
              <p className="text-xs text-white/50 mt-2">Required tier: {feature.tier}</p>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant={feature.active ? 'outline' : 'default'}
                onClick={() => handlePurchase(feature)}
                disabled={feature.active}
              >
                {feature.active ? 'Active' : 'Purchase Feature'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MarketingFeatureShop;
