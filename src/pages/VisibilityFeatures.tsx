
import React from 'react';
import { Shell } from '@/components/Shell';
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Zap, Search, PieChart, BarChart4, Users, TrendingUp } from 'lucide-react';
import ThreeDBoostShowcase from '@/components/animations/ThreeDBoostShowcase';
import profileBoostEffects from '@/data/boostEffects';

const VisibilityFeatures = () => {
  // Get visibility boosts from profile effects
  const visibilityBoosts = profileBoostEffects.filter(boost => boost.type === 'visibility');
  
  return (
    <Shell>
      <PageHeader
        title="Visibility Features"
        description="Enhance your visibility on SpendThrone with premium features"
        icon={<Eye className="h-6 w-6" />}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-purple-400" />
              Boost Your Visibility
            </CardTitle>
            <CardDescription>
              Stand out from the crowd with premium visibility features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-white/70 mb-4">
              Our visibility features help you get noticed on SpendThrone. With premium boosts, your profile will appear higher in searches, gain special visual effects, and attract more attention from other users.
            </p>
            
            <div className="rounded-md bg-purple-900/20 border border-purple-500/20 p-4">
              <h3 className="text-sm font-medium text-purple-300 mb-2">Premium Visibility Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Search className="h-4 w-4 mt-0.5 text-purple-400" />
                  <span>Higher ranking in search results</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 mt-0.5 text-purple-400" />
                  <span>Featured more prominently on leaderboards</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Users className="h-4 w-4 mt-0.5 text-purple-400" />
                  <span>More profile views and engagements</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Zap className="h-4 w-4 mt-0.5 text-purple-400" />
                  <span>Special visual effects to catch attention</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <ThreeDBoostShowcase />
      </div>
      
      <Tabs defaultValue="boosts">
        <TabsList className="mb-6">
          <TabsTrigger value="boosts" className="flex items-center gap-1.5">
            <Zap className="h-4 w-4" />
            Visibility Boosts
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-1.5">
            <PieChart className="h-4 w-4" />
            Visibility Analytics
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex items-center gap-1.5">
            <BarChart4 className="h-4 w-4" />
            Performance Metrics
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="boosts">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {visibilityBoosts.map(boost => (
              <Card key={boost.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{boost.name}</CardTitle>
                    <div className={`px-2 py-1 text-xs rounded bg-${boost.rarity === 'legendary' ? 'royal-gold/20 text-royal-gold' : boost.rarity === 'epic' ? 'purple-500/20 text-purple-400' : 'blue-500/20 text-blue-400'}`}>
                      {boost.rarity.toUpperCase()}
                    </div>
                  </div>
                  <CardDescription>{boost.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span>Duration: {boost.duration / 24} days</span>
                    <span className="font-bold">${boost.cost}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Visibility Analytics</CardTitle>
              <CardDescription>
                Track and analyze how your profile visibility changes over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-20 flex items-center justify-center border border-dashed border-white/10 rounded-md">
                <p className="text-white/60">
                  Visibility analytics charts will appear here when you have active visibility boosts.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>
                Measure the impact of your visibility boosts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-20 flex items-center justify-center border border-dashed border-white/10 rounded-md">
                <p className="text-white/60">
                  Performance metrics will appear here when you have collected enough data.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Shell>
  );
};

export default VisibilityFeatures;
