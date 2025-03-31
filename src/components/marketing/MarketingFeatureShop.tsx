
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MarketingFeature } from '@/types/marketing';
import { formatCurrency } from '@/utils/formatters';

// Use icon component but avoid type issues
const Icon = ({ name, className }: { name: string, className?: string }) => {
  const iconComponents: Record<string, React.ReactNode> = {
    Star: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
    Image: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>,
    BarChart: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>
  };

  return <>{iconComponents[name] || <span className={className}>Icon</span>}</>;
};

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
                <Icon name={feature.icon} className="mr-2 h-5 w-5 text-royal-gold" />
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
