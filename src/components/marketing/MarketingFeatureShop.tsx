
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Search, Tag, Filter, Check } from 'lucide-react';
import { useAuth } from '@/contexts';
import useFeatureAccess from '@/hooks/use-feature-access';
import RoyalDecoration from '@/components/ui/royal-decoration';

interface MarketingFeature {
  id: string;
  name: string;
  description: string;
  price: number;
  tier: string;
  features?: string[];
}

const MarketingFeatureShop: React.FC = () => {
  const { user } = useAuth();
  const { isUserPro } = useFeatureAccess();
  const [searchTerm, setSearchTerm] = useState('');
  const [tierFilter, setTierFilter] = useState('all');
  
  // Mock features data
  const features: MarketingFeature[] = [
    {
      id: 'feature-boost',
      name: 'Profile Spotlight',
      description: 'Get your profile featured at the top of the leaderboard for 24 hours.',
      price: 20,
      tier: 'basic',
      features: [
        'Top of leaderboard placement',
        '24 hours of spotlight',
        'Special visual effects',
        'Link click tracking'
      ]
    },
    {
      id: 'feature-analytics',
      name: 'Advanced Analytics',
      description: 'Unlock detailed metrics about your profile views, clicks, and engagement.',
      price: 15,
      tier: 'plus',
      features: [
        'Visitor demographics',
        'Traffic sources',
        'Click-through rates',
        'Engagement heatmaps'
      ]
    },
    {
      id: 'feature-custom',
      name: 'Custom Profile Theme',
      description: 'Create a unique look for your profile with custom colors and animations.',
      price: 25,
      tier: 'premium',
      features: [
        'Custom color scheme',
        'Animated elements',
        'Premium backgrounds',
        'Interactive components'
      ]
    }
  ];
  
  const handleBuyFeature = (featureId: string) => {
    // Implementation would handle purchase logic
    console.log('Purchasing feature:', featureId);
  };
  
  // Filter features
  const filteredFeatures = features.filter(feature => {
    const matchesSearch = feature.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         feature.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTier = tierFilter === 'all' || feature.tier === tierFilter;
    
    return matchesSearch && matchesTier;
  });
  
  // Check if user already owns a feature
  const userOwnedFeatures = user?.purchasedFeatures || [];
  
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5 text-royal-gold" />
            Marketing Features Marketplace
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <Input
                placeholder="Search marketing features..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={tierFilter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTierFilter('all')}
              >
                All
              </Button>
              <Button
                variant={tierFilter === 'basic' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTierFilter('basic')}
              >
                Basic
              </Button>
              <Button
                variant={tierFilter === 'premium' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTierFilter('premium')}
              >
                Premium
              </Button>
            </div>
          </div>
          
          {filteredFeatures.length === 0 ? (
            <div className="text-center py-12">
              <Search className="h-12 w-12 mx-auto text-white/30" />
              <p className="mt-4 text-white/70">No marketing features found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setTierFilter('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFeatures.map((feature) => {
                const isOwned = userOwnedFeatures.includes(feature.id);
                const canPurchase = 
                  feature.tier === 'basic' || 
                  (feature.tier === 'plus' && user?.tier && ['plus', 'premium', 'royal'].includes(user.tier)) ||
                  (feature.tier === 'premium' && user?.tier && ['premium', 'royal'].includes(user.tier));
                
                return (
                  <Card 
                    key={feature.id} 
                    className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                      isOwned ? 'border-green-500/30 bg-green-500/5' : 'border-white/10'
                    }`}
                  >
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-lg">{feature.name}</h3>
                        <Badge variant="outline" className="bg-white/10 border-white/20 capitalize">
                          {feature.tier}
                        </Badge>
                      </div>
                      
                      <p className="text-white/70 text-sm mb-4">{feature.description}</p>
                      
                      {feature.features && feature.features.length > 0 && (
                        <div className="space-y-2 mb-4">
                          {feature.features.map((f, i) => (
                            <div key={i} className="flex items-start">
                              <Check className="h-4 w-4 mr-2 mt-0.5 text-royal-gold" />
                              <p className="text-xs text-white/80">{f}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="font-bold text-xl">${feature.price}</div>
                        
                        {isOwned ? (
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            <Check className="h-3 w-3 mr-1" />
                            Purchased
                          </Badge>
                        ) : canPurchase ? (
                          <Button 
                            onClick={() => handleBuyFeature(feature.id)}
                            className="bg-royal-gold hover:bg-royal-gold/90 text-black"
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Buy Now
                          </Button>
                        ) : (
                          <Button variant="outline" disabled>
                            <Tag className="h-4 w-4 mr-2" />
                            Requires {feature.tier}
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketingFeatureShop;
