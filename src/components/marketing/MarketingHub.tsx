
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Megaphone, ShoppingBag, Calendar, BarChart, Crown } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useFeatureAccess } from '@/hooks/use-feature-access';
import MarketingFeatureShop from './MarketingFeatureShop';
import MarketingEvents from './MarketingEvents';
import UpgradePromotion from '../profile/UpgradePromotion';

const MarketingHub = () => {
  const [activeTab, setActiveTab] = useState('features');
  const { user } = useAuth();
  const { canAccessFeature } = useFeatureAccess();
  
  const userTier = user?.subscription?.tier || 'free';
  const hasMarketing = canAccessFeature('marketing_dashboard');
  
  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Marketing Hub</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Enhance your profile visibility and track your impact with our marketing tools
        </p>
      </div>
      
      <Card className="glass-morphism border-white/10 mb-8">
        <CardHeader>
          <div className="flex items-center">
            <Megaphone className="mr-3 h-6 w-6 text-purple-400" />
            <CardTitle>Your Marketing Status</CardTitle>
          </div>
          <CardDescription>
            Current marketing capabilities based on your tier
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 glass-morphism border-white/5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Crown className="h-5 w-5 text-purple-400" />
                <h3 className="font-medium">Current Tier</h3>
              </div>
              <p className="text-2xl font-bold mb-2">
                {userTier.charAt(0).toUpperCase() + userTier.slice(1)}
              </p>
              <p className="text-sm text-white/70">
                {userTier === 'free' ? 
                  'Basic marketing features only' :
                  userTier === 'standard' ? 
                    'Standard marketing toolset' :
                    userTier === 'premium' ?
                      'Enhanced marketing capabilities' :
                      'Royal marketing suite'
                }
              </p>
            </div>
            
            <div className="p-4 glass-morphism border-white/5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-purple-400" />
                <h3 className="font-medium">Individual Features</h3>
              </div>
              <p className="text-2xl font-bold mb-2">
                {user?.purchasedFeatures?.length || 0} Purchased
              </p>
              <p className="text-sm text-white/70">
                Individual marketing features you've purchased separately
              </p>
            </div>
            
            <div className="p-4 glass-morphism border-white/5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <BarChart className="h-5 w-5 text-purple-400" />
                <h3 className="font-medium">Marketing Power</h3>
              </div>
              <p className="text-2xl font-bold mb-2">
                {userTier === 'free' ? '1x' : 
                 userTier === 'standard' ? '2x' :
                 userTier === 'premium' ? '5x' : '10x'}
              </p>
              <p className="text-sm text-white/70">
                Your marketing effectiveness multiplier
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs 
        defaultValue="features" 
        value={activeTab} 
        onValueChange={setActiveTab} 
        className="mb-8"
      >
        <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-6">
          <TabsTrigger value="features" className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Marketing Features</span>
          </TabsTrigger>
          <TabsTrigger value="events" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Events</span>
          </TabsTrigger>
          <TabsTrigger value="upgrade" className="flex items-center gap-2">
            <Crown className="h-4 w-4" />
            <span className="hidden sm:inline">Upgrade</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="features">
          <MarketingFeatureShop />
        </TabsContent>
        
        <TabsContent value="events">
          <MarketingEvents />
        </TabsContent>
        
        <TabsContent value="upgrade">
          <UpgradePromotion />
        </TabsContent>
      </Tabs>
      
      <div className="text-center mt-8 text-white/50 text-sm italic">
        All marketing features are virtual and enhance your profile visibility and analytics only.
        <br />They do not affect your rank on the leaderboard, which is determined exclusively by your deposits.
      </div>
    </div>
  );
};

export default MarketingHub;
