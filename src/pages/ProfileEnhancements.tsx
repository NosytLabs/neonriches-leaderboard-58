
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, Crown, Shield, Eye, Link, Medal, Palette, Megaphone, Lock } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { useFeatureAccess } from '@/hooks/use-feature-access';
import usePageTracking from '@/hooks/usePageTracking';

const ProfileEnhancements = () => {
  const { user } = useAuth();
  const { canAccessFeature, isUserPro } = useFeatureAccess();
  
  // Track page view
  usePageTracking();
  
  const enhancementCategories = [
    {
      id: 'visibility',
      title: 'Visibility',
      icon: <Eye className="h-5 w-5 text-royal-gold" />
    },
    {
      id: 'appearance',
      title: 'Appearance',
      icon: <Palette className="h-5 w-5 text-royal-purple" />
    },
    {
      id: 'protection',
      title: 'Protection',
      icon: <Shield className="h-5 w-5 text-royal-crimson" />
    },
    {
      id: 'marketing',
      title: 'Marketing',
      icon: <Megaphone className="h-5 w-5 text-amber-400" />
    }
  ];
  
  // Mock enhancements data
  const enhancements = [
    {
      id: 'golden-border',
      name: 'Golden Border',
      description: 'A shimmering golden border around your profile that catches attention',
      price: 15,
      category: 'appearance',
      tier: 'basic',
      popular: true
    },
    {
      id: 'front-page',
      name: 'Front Page Feature',
      description: '24 hours of featured placement on the front page',
      price: 25,
      category: 'visibility',
      tier: 'basic'
    },
    {
      id: 'mockery-shield',
      name: 'Mockery Shield',
      description: 'Protection from mockery effects for 48 hours',
      price: 20,
      category: 'protection',
      tier: 'premium'
    },
    {
      id: 'animated-background',
      name: 'Animated Background',
      description: 'Dynamic animated background for your profile page',
      price: 35,
      category: 'appearance',
      tier: 'premium'
    },
    {
      id: 'marketing-analytics',
      name: 'Marketing Analytics',
      description: 'Detailed visitor analytics for your profile',
      price: 15,
      category: 'marketing',
      tier: 'basic'
    },
    {
      id: 'crown-animation',
      name: 'Royal Crown Animation',
      description: 'Animated crown appears above your username',
      price: 30,
      category: 'appearance',
      tier: 'royal'
    },
    {
      id: 'leaderboard-highlight',
      name: 'Leaderboard Highlight',
      description: 'Your name stands out with special effects on the leaderboard',
      price: 25,
      category: 'visibility',
      tier: 'premium'
    },
    {
      id: 'extra-links',
      name: 'Extra Profile Links',
      description: 'Add up to 3 additional links to your profile',
      price: 10,
      category: 'marketing',
      tier: 'basic'
    }
  ];
  
  const filteredEnhancements = (category) => {
    return enhancements.filter(enhancement => enhancement.category === category);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title="Profile Enhancements" 
          description="Elevate your royal presence with exclusive profile upgrades"
          icon={<Sparkles className="h-8 w-8 text-royal-gold" />}
        />
        
        <Tabs defaultValue="visibility" className="w-full mt-6">
          <TabsList className="w-full grid grid-cols-4 mb-6">
            {enhancementCategories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-2"
              >
                {category.icon}
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {enhancementCategories.map(category => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredEnhancements(category.id).map(enhancement => {
                  const isOwned = user?.purchasedFeatures?.includes(enhancement.id);
                  const canPurchase = enhancement.tier === 'basic' || 
                    (user?.tier && user.tier === enhancement.tier) ||
                    (isUserPro && enhancement.tier !== 'royal');
                  
                  return (
                    <Card key={enhancement.id} className="glass-morphism border-white/10 overflow-hidden transition-all hover:shadow-md">
                      <div className="relative">
                        {enhancement.popular && (
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-royal-gold text-black">
                              <Crown className="h-3 w-3 mr-1" />
                              Popular
                            </Badge>
                          </div>
                        )}
                        
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            {enhancement.category === 'visibility' && <Eye className="h-5 w-5 text-royal-gold" />}
                            {enhancement.category === 'appearance' && <Palette className="h-5 w-5 text-royal-purple" />}
                            {enhancement.category === 'protection' && <Shield className="h-5 w-5 text-royal-crimson" />}
                            {enhancement.category === 'marketing' && <Megaphone className="h-5 w-5 text-amber-400" />}
                            <CardTitle className="text-lg">{enhancement.name}</CardTitle>
                          </div>
                        </CardHeader>
                        
                        <CardContent>
                          <p className="text-white/70 text-sm mb-4">
                            {enhancement.description}
                          </p>
                          
                          <div className="flex justify-between items-center mt-6">
                            <div className="flex items-center">
                              {enhancement.tier === 'premium' && (
                                <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">
                                  Premium
                                </Badge>
                              )}
                              {enhancement.tier === 'royal' && (
                                <Badge variant="outline" className="bg-royal-gold/10 text-royal-gold border-royal-gold/30">
                                  Royal
                                </Badge>
                              )}
                            </div>
                            
                            <div className="text-xl font-bold">${enhancement.price}</div>
                          </div>
                          
                          <div className="mt-4">
                            {isOwned ? (
                              <Button variant="outline" className="w-full" disabled>
                                <Medal className="h-4 w-4 mr-2" />
                                Owned
                              </Button>
                            ) : canPurchase ? (
                              <Button className="w-full bg-gradient-to-r from-royal-gold to-royal-crimson text-black">
                                Purchase
                              </Button>
                            ) : (
                              <Button variant="outline" className="w-full" disabled>
                                <Lock className="h-4 w-4 mr-2" />
                                Requires {enhancement.tier}
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProfileEnhancements;
